import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private authService: AuthService,
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<UserFormComponent>) {}

  userForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('0'),
  })

  isNew = true;

  ngOnInit(): void {
    console.error(this.data)
    if (this.data?.user) {
      this.isNew = false;
      this.userForm.reset({
        name: this.data.user.name,
        username: this.data.user.username,
        password: '',
        role: this.data.user.role
      })
    }
  }

  onSubmit() {

    if (this.isNew) {
      this.authService.signUp({
        name: this.userForm.value.name,
        username: this.userForm.value.username, 
        password: this.userForm.value.password,
        role: this.userForm.value.role}).subscribe(() => this.dialogRef.close());
    } else {
      this.data.user.name = this.userForm.value.name;
      this.data.user.username = this.userForm.value.username;
      this.data.user.role = this.userForm.value.role;
      if (!!this.userForm.value.password) {
        this.data.user.password = this.userForm.value.password;
      } else {
        delete this.data.user.password;
      }
      this.authService.updateUser(this.data.user).subscribe(() => this.dialogRef.close());
    }



  }
}
