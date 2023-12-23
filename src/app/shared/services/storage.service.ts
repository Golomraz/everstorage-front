import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient, private router: Router) {}

  create(storage) {
    return this.http.post('storage', storage);
  }

  getAll() {
    return this.http.get('storage');
  }

  getById(id: string) {
    return this.http.get(`storage/find/${id}`);
  }

  getByLetter(letter) {
    return this.http.get(`storage/${letter}`);
  }

  remove(id: string) {
    return this.http.delete(`storage/${id}`);
  }

}
