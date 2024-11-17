import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Question } from 'src/shared/models/Questionnaireform';
import { TestService } from 'src/shared/Services/test.service';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  progressPercent: number;
  userAnswers: any[] = [];
  score: number = 0;
  showResults: boolean = false;
  resultData: number;
  display = 'none';
  testSubmitted: boolean = false;
  answered: number = 0;
  unanswered: number = 0;
  answeredQuestions: any = [];
  answeredQuestionsLength: number = 0;
  public colorValidation: any = [
    { text: 'UnVisited', color: 'grey' },
    { text: 'Current', color: 'blue' },
    { text: 'Answered', color: 'green' },
    { text: 'Review', color: 'red' },
    { text: 'Visited but not Answered', color: 'orange' },
  ];
  selected: number = 0;

  constructor(
    private quizService: TestService,
    public confirmationDialog: MatDialog
  ) { }

  ngOnInit() {
    this.quizService.getQuestions().subscribe((data) => {
      this.questions = data;
    });
    this.userAnswers = new Array(this.questions.length).fill(null);
  }

  selectAnswer(answer: any) {
    this.userAnswers[this.currentQuestionIndex] = answer;
    this.answeredQuestions[this.currentQuestionIndex] = 'answered';
    this.answeredQuestionsLength = this.answeredQuestions.filter(
      (item) => item !== null
    ).length;
  }

  onCheckboxChange(event: any, option: string) {
    const checked = event.target.checked;
    if (checked) {
      this.userAnswers[this.currentQuestionIndex] =
        this.userAnswers[this.currentQuestionIndex] || [];
      if (this.userAnswers[this.currentQuestionIndex]?.push(option))
        this.selected++;
      this.answeredQuestions[this.currentQuestionIndex] = 'answered';
      this.answeredQuestionsLength = this.answeredQuestions.filter(
        (item) => item !== null
      ).length;
    } else {
      this.userAnswers[this.currentQuestionIndex] = this.userAnswers[
        this.currentQuestionIndex
      ].filter((o: string) => o !== option);
      this.selected--;
      if (this.selected === 0)
        this.answeredQuestionsLength--;
    }
  }

  onKeyUp(event: any) {
    this.answeredQuestions[this.currentQuestionIndex] = 'answered';
    this.answeredQuestionsLength = this.answeredQuestions.filter(
      (item) => item !== null
    ).length;
    if (this.userAnswers[this.currentQuestionIndex] == '')
      this.answeredQuestionsLength--;
  }

  nextQuestion() {
    this.questions[this.currentQuestionIndex].visited = true;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    this.questions[this.currentQuestionIndex].visited = true;
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  goToQuestion(index: number) {
    this.currentQuestionIndex = index;
    this.questions[index].visited = true;
  }

  getQuestionStatus(index: number) {
    if (this.currentQuestionIndex === index) return 'current';
    if (this.questions[index].review) return 'review';
    if (this.userAnswers[index]) return 'completed';
    if (this.questions[index].visited) return 'visited';
  }

  markForReview() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    currentQuestion.review = !currentQuestion?.review;
  }

  isLastQuestion() {
    return this.currentQuestionIndex === this.questions.length - 1;
  }

  timeCompleted($event) {
    if ($event === '00:00:00') {
      this.openModal();
    }
  }

  openModal() {
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
    this.submitQuiz();
    this.confirmationDialog.closeAll();
    this.showResults = true;
  }

  submitQuiz() {
    this.testSubmitted = true;
    this.userAnswers.forEach((elem) => {
      if (elem && elem != undefined) this.answered++;
    });
    this.unanswered = this.questions.length - this.answered;
    this.score = this.userAnswers.reduce((score, answer, index) => {
      const correctAnswer = this.questions[index].answer;
      if (Array.isArray(correctAnswer)) {
        return (
          score +
          (JSON.stringify(answer) === JSON.stringify(correctAnswer) ? 1 : 0)
        );
      } else {
        return score + (answer === correctAnswer ? 1 : 0);
      }
    }, 0);
    this.resultData = (this.score / this.questions.length) * 100;
    this.showResults = true;
  }

  openSubmitConfirmDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '220px';
    dialogConfig.panelClass = 'confirm-popup';
    dialogConfig.data = {
      headerText: 'Submit Confirmation',
      dialogType: 'confirm',
      messageText: '<br>Are you sure to submit your test?',
      actionButtonText: 'OK',
      cancelActionButton: 'Close',
    };
    const submitConfirmDialog = this.confirmationDialog.open(
      ConfirmPopupComponent,
      dialogConfig
    );

    submitConfirmDialog.componentInstance.actionButtonEvent.subscribe(() => {
      submitConfirmDialog.close();
      this.submitQuiz();
    });

    submitConfirmDialog.componentInstance.cancelEvent.subscribe(() => {
      submitConfirmDialog.close();
    });
  }

  get passFail() {
    return this.score / this.questions.length >= 0.7 ? 'Passed' : 'Failed';
  }
}
