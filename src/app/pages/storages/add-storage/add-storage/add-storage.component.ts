import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, debounceTime, filter, of } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { YaGeocoderService } from 'angular8-yandex-maps';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-storage',
  templateUrl: './add-storage.component.html',
  styleUrls: ['./add-storage.component.scss']
})
export class AddStorageComponent implements OnInit {
  storageForm = new FormGroup({
    name: new FormControl(''),
    size: new FormControl(''),
    adress: new FormControl(''),
    coordinates: new FormControl(''),
  })

  adressItems: any[] = []

  constructor(private storageService: StorageService, public dialogRef: MatDialogRef<AddStorageComponent>,
    private geoService: YaGeocoderService,
    private http: HttpClient,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.storageForm.controls.adress.valueChanges.pipe(debounceTime(500), filter((i) => i !== null)).subscribe((res) => {
      this.geoService.geocode(res as string, {results: 5}).subscribe((i: any) => {
        console.error('obj',i)
        const count = i.metaData.geocoder.found;
        this.adressItems = []
        for (let a = 0; a < count; a++) {
          const item = i.geoObjects.get(a);
          this.adressItems.push({
            text: item.getAddressLine(),
            coordinates: item.geometry.getCoordinates(),
          })
        }

        console.error('addd', this.adressItems)
      })

    })
  }

  selectAddress(adress: any) {
    this.storageForm.controls.coordinates.setValue(adress.coordinates);
    this.storageForm.controls.adress.setValue(adress.text, {emitEvent: false});
    this.adressItems = []
  }

  onSubmit() {
    console.error(this.storageForm.value)
    this.storageService.create(this.storageForm.value).pipe(catchError((err) => {
      this.snackBar.open('Склад с таким именем уже существует', '', {horizontalPosition: 'right', duration: 5000});
      return of(err)
    })).subscribe((res: any) => {if (!res.message) this.dialogRef.close()} )
  }
}
