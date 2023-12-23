import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(public dialog: MatDialog, private http: HttpClient) {}
  dataSource;

  displayedColumns = ['name', 'username', 'role', 'actions'];

    ngOnInit(): void {
      this.getUser();
    }

  openForm(): void {
    this.dialog.open(UserFormComponent, {
      data: {isNew: true},
      width: '350px'
    }).afterClosed().subscribe(() => this.getUser())
  }

  getUser() {
    this.http.get('users').subscribe((res: any) => this.dataSource = new MatTableDataSource(res))
  }

  removeUser(user) {
    this.http.delete(`users/${user._id}`).subscribe(() =>  this.getUser())
  }

  editUser(user) {
    this.dialog.open(UserFormComponent, {
      data: {isNew: false, user: user},
      width: '350px'
    }).afterClosed().subscribe(() => this.getUser())
  }
}
