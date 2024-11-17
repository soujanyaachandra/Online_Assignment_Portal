import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss'],
})
export class ConfirmPopupComponent {
  headerText: string = '';
  messageText: string = '';
  actionButtonText: string = '';
  cancelActionButton: string = '';
  successMessageText: string = '';
  closeButton: string = '';
  dialogType: string = '';

  @Output() actionButtonEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  @Output() cancelActionButtonEvent = new EventEmitter();
  @Output() userConfirmationEvent = new EventEmitter();

  @ViewChild('messageText', { static: false }) messageElement: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<any>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeDetect: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.headerText = this.data.headerText;
    this.messageText = this.data.messageText;
    this.actionButtonText = this.data.actionButtonText;
    this.cancelActionButton = this.data.cancelActionButton;
    this.closeButton = this.data.closeButton;
    this.dialogType =
      this.data.dialogType !== undefined ? this.data.dialogType : '';
  }

  ngAfterViewInit(): void {
    if (this.messageElement !== undefined) {
      this.messageElement.nativeElement.innerHTML = this.messageText;
    }
  }

  onClickOfClose(back?) {
    this.cancelEvent.emit(true);
    this.userConfirmationEvent.emit(false);
    this.dialogRef.close();
    if (back) {
      this.cancelActionButtonEvent.emit();
    }
  }

  onActionClick() {
    if (this.data.actionButtonFunction) {
      this.data.actionButtonFunction(this.data.parameterToActionButtonFunction);
    } else {
      this.changeDetect.detectChanges();
      this.actionButtonEvent.emit(true);
      this.userConfirmationEvent.emit(true);
    }
  }

  onCancelActionButtonClick() {
    this.cancelActionButtonEvent.emit(true);
    this.dialogRef.close();
  }
}
