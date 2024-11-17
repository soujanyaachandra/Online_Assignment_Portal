import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TimerService } from 'src/shared/Services/timer.service';

@Component({
  selector: 'app-progress-section',
  templateUrl: './progress-section.component.html',
  styleUrls: ['./progress-section.component.scss'],
})
export class ProgressSectionComponent implements OnChanges {
  @Output() timeCompleted = new EventEmitter<string>();
  hours: number;
  minutes: number;
  seconds: number;
  hasShown20SecondsToast: boolean = false;
  timerClass: string = '';
  progress: number = 0;

  @Input() totalQuestions: number = 0;
  @Input() userAnswersLength: number = 0;

  constructor(
    private timerService: TimerService,
    private toastr: ToastrService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userAnswersLength']) {
      this.updateProgress();
    }
  }

  ngOnInit() {
    this.timerService.startTimer(900);
    this.timerService.timeLeft$.subscribe((time) => {
      this.hours = Math.floor(time / 3600);
      this.minutes = Math.floor((time % 3600) / 60);
      this.seconds = time % 60;
    });
  }

  updateProgress() {
    const answeredQuestions = this.userAnswersLength;
    this.progress = this.totalQuestions
      ? (answeredQuestions / this.totalQuestions) * 100
      : 0;
  }

  getFormattedTime(): string {
    const totalSeconds = this.minutes * 60 + this.seconds;

    const formattedTime = `${this.padZero(this.hours)}:${this.padZero(
      this.minutes
    )}:${this.padZero(this.seconds)}`;

    this.timeCompleted.emit(formattedTime);
    if (totalSeconds <= 120 && !this.hasShown20SecondsToast) {
      this.toastr.error(
        'You have 2 minutes left. Complete your test!',
        'Hurry Up!',
        {
          timeOut: 5000,
          positionClass: 'toast-top-center',
          closeButton: true,
          progressBar: true,
        }
      );
      this.timerClass = 'red-text';
      this.hasShown20SecondsToast = true;
    }

    return formattedTime;
  }

  cancelToast() {
    this.toastr.clear();
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
