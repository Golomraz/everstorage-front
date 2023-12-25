import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { StorageInfoComponent } from '../storage-info/storage-info.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent {
  @Input() storageData;
  @Output() deleteEvent = new EventEmitter();

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  showInfo(id): void {
    this.dialog.open(StorageInfoComponent, {
      width: '900px',
      data: {id: id}
    })
  }

  delete(id) {
    console.error(this.storageData)
    if (this.storageData?.products?.length > 0) {
      this.snackBar.open('Невозможно удалить склад с товарами', '', {horizontalPosition: 'right', duration: 5000});
      return;
    }
    this.deleteEvent.emit(id);
  }

  get barValue() {
    return (this.storageData.size - this.storageData.sizeLeft) / (this.storageData.size / 100)
  }
}
