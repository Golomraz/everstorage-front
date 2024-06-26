import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TransferService } from 'src/app/shared/services/transfer.service';
import { ProductList } from '../products';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PlaceList } from '../places';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss']
})
export class AddTransferComponent implements OnInit{
  type = new FormControl('0');
  selectedProduct;
  selectedStorage;
  storages;
  selectedPlace = '';
  count;
  products: any[] = [];
  status;
  error = false;
  backendProductList: any[] = [];
  productList = this.backendProductList;
  filteredProductList;
  placesList = PlaceList;
  

  constructor(private transferService: TransferService, public dialogRef: MatDialogRef<AddTransferComponent>, private authService: AuthService, private http: HttpClient,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe();

    this.storageService.getAll().subscribe((res) => this.storages = res)

    this.transferService.getStoragesStatus().subscribe((res: any) => {
      this.status = res
      this.filteredProductList = res.products
    })

    this.http.get('products').subscribe((res: any) => {this.backendProductList = res
      this.productList = res
    })
  }

  onSubmit() {
    if (this.products.length === 0) {
      return;
    }

    this.transferService.create({products: this.products, type: this.type.value, userName: this.authService.user.username, place: this.selectedPlace, storageID: this.selectedStorage?._id || ''}).subscribe(() => this.dialogRef.close())
  }

  onAdd() {
    let count = this.count;
    this.products.forEach((p) => count += p?.count || 0);
    const productCount = this.status.products?.find((p) => p && p?.name === this.selectedProduct?.name)?.count
    if ((count > this.status.sizeLeft && this.type.value === '0')
    || (this.type.value === '1' && this.count > productCount) || (this.selectedStorage && this.selectedStorage.sizeLeft < count) ) {
      this.error = true;
      return;
    }

    if (!!this.selectedProduct?.name && this.count !== 0) {
      const existingProduct = this.products.find((p) => p && p?.name === this.selectedProduct?.name);

      if (existingProduct) {
        existingProduct.count += this.count;
      } else {
        this.products.push({id: this.products.length, name: this.selectedProduct?.name, count: this.count, title: this.selectedProduct?.title});
      }

      this.selectedProduct = null;
      this.count = null;
    }
  }

  reset() {
    this.error = false;
  }

  resetProducts() {
    this.products = []
  }

  resetType() {
    this.products = []
    this.count = null;
    this.selectedProduct = null;

    if (this.type.value === '1') {
      this.productList = this.filteredProductList;
    } else {
      this.productList = this.backendProductList;
    }
  }

  onDelete(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
  }

  get availabeText() {
    const product = this.status?.products?.find((p) => p.name === this.selectedProduct?.name);
    let count = product?.count;
    this.products.forEach((p) => {
      if (p && p?.name === product?.name) {
        count -= p.count
      }
    })

    return product?.title && count ? `Доступно  ${product?.title} - ${count}` : '';
  }
}
