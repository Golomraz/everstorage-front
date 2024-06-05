import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  constructor(private authService: AuthService) {}
  isAdmin = false;
  ngOnInit(): void {
   this.authService.getCurrentUser().subscribe((res: any) => {
    this.isAdmin = res.role === '1'
   })
  }

  logOut() {
    this.authService.logOut()
  }
}
