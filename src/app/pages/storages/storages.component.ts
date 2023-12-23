import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AddTransferComponent } from '../transfers/add-transfer/add-transfer.component';
import { AddStorageComponent } from './add-storage/add-storage/add-storage.component';
import { StorageService } from 'src/app/shared/services/storage.service';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.scss']
})
export class StoragesComponent implements OnInit {
  storages;
  findByLetter = new FormControl('');

  constructor(public dialog: MatDialog, private storageService: StorageService) {}

  ngOnInit(): void {
    this.getStorages();

    this.findByLetter.valueChanges.pipe(debounceTime(500), filter((i) => i !== null)).subscribe((res) => {
      this.storageService
        .getByLetter(res || ' ')
        .subscribe((res) => this.storages = res);
    });
  }

  addTransfer(): void {
    this.dialog.open(AddTransferComponent, {
      width: '900px'
    }).afterClosed().subscribe(() => this.getStorages())
  }

  getStorages() {
    this.storageService.getAll().subscribe((res) => this.storages = res)
  }

  addStorage() {
    this.dialog.open(AddStorageComponent, {
      width: '300px'
    }).afterClosed().subscribe(() => this.getStorages());
  }

  delete(id) {
    this.storageService.remove(id).subscribe(() => this.getStorages());
  }
}
