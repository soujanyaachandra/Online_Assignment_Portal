import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private totalTime: number;
  private interval: any;
  public timeLeft$ = new BehaviorSubject<number>(0);

  hours: number;
  minutes: number;
  seconds: number;

  startTimer(seconds: number) {
    this.totalTime = seconds;
    this.timeLeft$.next(this.totalTime);

    this.interval = setInterval(() => {
      if (this.totalTime > 0) {
        this.totalTime--;
        this.timeLeft$.next(this.totalTime);
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }
}
