import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-add-storage',
  templateUrl: './add-storage.component.html',
  styleUrls: ['./add-storage.component.scss']
})
export class AddStorageComponent {
  storageForm = new FormGroup({
    name: new FormControl(''),
    size: new FormControl(''),
  })

  constructor(private storageService: StorageService, public dialogRef: MatDialogRef<AddStorageComponent>,
    private snackBar: MatSnackBar) {}

  onSubmit() {
    this.storageService.create(this.storageForm.value).pipe(catchError((err) => {
      this.snackBar.open('Склад с таким именем уже существует', '', {horizontalPosition: 'right', duration: 5000});
      return of(err)
    })).subscribe((res: any) => {if (!res.message) this.dialogRef.close()} )
  }
}
