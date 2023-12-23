import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['storages'])
    }
  }

  onLogin() {
    this.authService.signIn({
      username: this.loginForm.value.login,
      password: this.loginForm.value.password})
  }
}
