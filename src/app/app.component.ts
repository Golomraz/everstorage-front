import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sklad-front';
  isLogin = false;
  constructor(private authService: AuthService) {}
  isLoading = false;

  ngOnInit(): void {
    this.authService.isLoading.subscribe((r) => this.isLoading = r)


    this.authService.authAction.subscribe(() => {
        this.isLogin = !localStorage.getItem('accessToken');
    })
    if (!localStorage.getItem('accessToken')) {
      this.isLogin = true;
    }
  }
}
