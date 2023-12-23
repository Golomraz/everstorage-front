import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private http: HttpClient) { }

  create(data) {
    console.error(data)
    return this.http.post('transfer', data);
  }

  getAll() {
    return this.http.get('transfer');
  }

  getStoragesStatus() {
    return this.http.get('storage/status')
  }
}
