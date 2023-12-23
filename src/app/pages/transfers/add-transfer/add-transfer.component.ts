import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TransferService } from 'src/app/shared/services/transfer.service';
import { ProductList } from '../products';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss']
})
export class AddTransferComponent implements OnInit{
  type = new FormControl('0');
  selectedProduct;
  count;
  products: any[] = [];
  status;
  error = false;
  productList = ProductList;

  constructor(private transferService: TransferService, public dialogRef: MatDialogRef<AddTransferComponent>, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe();
    this.transferService.getStoragesStatus().subscribe(res => this.status = res)
  }

  onSubmit() {
    if (this.products.length === 0) {
      return;
    }

    this.transferService.create({products: this.products, type: this.type.value, userName: this.authService.user.username}).subscribe(() => this.dialogRef.close())
  }

  onAdd() {
    let count = this.count;
    this.products.forEach((p) => count += p?.count || 0);
    const productCount = this.status.products?.find((p) => p.name === this.selectedProduct?.value)?.count
    if ((count > this.status.sizeLeft && this.type.value === '0')
    || (this.type.value === '1' && this.count > productCount)) {
      this.error = true;
      return;
    }

    if (!!this.selectedProduct?.value && this.count !== 0) {
      const existingProduct = this.products.find((p) => p.name === this.selectedProduct?.value);

      if (existingProduct) {
        existingProduct.count += this.count;
      } else {
        this.products.push({id: this.products.length, name: this.selectedProduct?.value, count: this.count, title: this.selectedProduct?.title});
      }

      this.selectedProduct = null;
      this.count = null;
    }
  }

  reset() {
    this.error = false;
  }

  resetType() {
    this.products = []
    this.count = null;
    this.selectedProduct = null;
  }

  onDelete(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
  }

  get availabeText() {
    console.error(this.status)
    const product = this.status?.products?.find((p) => p.name === this.selectedProduct?.value);
    let count = product?.count;
    this.products.forEach((p) => {
      if (p.name === product?.name) {
        count -= p.count
      }
    })

    return `Доступно  ${product.name} - ${count}`;
  }
}
