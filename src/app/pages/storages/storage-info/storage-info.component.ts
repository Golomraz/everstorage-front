import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-storage-info',
  templateUrl: './storage-info.component.html',
  styleUrls: ['./storage-info.component.scss']
})
export class StorageInfoComponent implements OnInit{

  storage;

  constructor(private storageService: StorageService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {}

  ngOnInit(): void {
    this.storageService.getById(this.data.id).subscribe((res: any) => {
      const info: any = [];
      res.products.forEach((i) => {
        const item = info.find((it: any) => it.name === i.name);

        if (item) {
          item.count += i.count;
        } else {
          info.push(i)
        }
      })

      res.products = info;
      this.storage = res
    })
  }
}
