import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from './products.service';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpClient, private productsService: ProductsService) {}
  dataSource;

  displayedColumns = ['name', 'title', 'actions'];

    ngOnInit(): void {
        this.getProducts()
    }

  openForm(): void {
    this.dialog.open(ProductFormComponent, {
      data: {isNew: true},
      width: '350px'
    }).afterClosed().subscribe(() => this.getProducts())
  }

  getProducts() {
    this.http.get('products').subscribe((res: any) => this.dataSource = new MatTableDataSource(res))
  }

  removeProduct(product) {
    this.http.delete(`products/${product._id}`).subscribe(() =>  this.getProducts())
  }

  editProduct(product) {
    this.dialog.open(ProductFormComponent, {
      data: {isNew: false, product: product},
      width: '350px'
    }).afterClosed().subscribe(() => this.getProducts())
  }
}
