import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { TransferService } from 'src/app/shared/services/transfer.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = ['date', 'data', 'user', 'type']
  dataSource = new MatTableDataSource([]);

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.transferService.getAll().subscribe((res: any) => {
     

      res.forEach((i) => {
        const data: any = [];
      i.data.forEach((itemData) => {
        const item = data.find((it: any) => {

          return it.storage === itemData.storage && it.product.name === itemData.product.name
         })
   
         if (item) {
           item.product.count += itemData.product.count;
         } else {
           data.push(itemData)
         }
      })
      i.data = data;
    })


      this.dataSource.data = res;
      
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getType(type) {
    return type === '0' ? 'Поступление' : 'Вывоз';
  }
}
