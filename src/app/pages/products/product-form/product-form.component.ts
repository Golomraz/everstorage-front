import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<ProductFormComponent>,
     private http: HttpClient) {}

  productForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
  })

  isNew = true;

  ngOnInit(): void {
    console.error(this.data)
    if (this.data?.product) {
      this.isNew = false;
      this.productForm.reset({
        name: this.data.product.name,
        title: this.data.product.title,
      })
    }
  }

  onSubmit() {
        if (this.isNew) {
            this.http.post('products', this.productForm.value).subscribe((res: any) => this.dialogRef.close())
        } else {
            this.http.patch('products', this.productForm.value).subscribe((res: any) => this.dialogRef.close())
        }
    }

}
