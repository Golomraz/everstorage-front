import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { StorageInfoComponent } from '../storage-info/storage-info.component';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent {
  @Input() storageData;
  @Output() deleteEvent = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  showInfo(id): void {
    this.dialog.open(StorageInfoComponent, {
      width: '900px',
      data: {id: id}
    })
  }

  delete(id) {
    this.deleteEvent.emit(id);
  }

  get barValue() {
    return (this.storageData.size - this.storageData.sizeLeft) / (this.storageData.size / 100)
  }
}
