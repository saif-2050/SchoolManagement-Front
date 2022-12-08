import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletepopupComponent } from '../../students-management/deletepopup/deletepopup.component';

@Component({
  selector: 'app-classdeletemodal',
  templateUrl: './classdeletemodal.component.html',
  styleUrls: ['./classdeletemodal.component.css']
})
export class ClassdeletemodalComponent {
  message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeletepopupComponent>) {
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
    }
      }
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
