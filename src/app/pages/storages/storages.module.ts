import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoragesComponent } from './storages.component';
import { RouterModule, Routes } from '@angular/router';
import { StorageComponent } from './storage/storage.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StorageInfoComponent } from './storage-info/storage-info.component';
import { AddStorageComponent } from './add-storage/add-storage/add-storage.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AngularYandexMapsModule, YaConfig  } from 'angular8-yandex-maps';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


const mapConfig: YaConfig = {
  apikey: '4dd6334b-930b-4e8d-911c-bed2c27a4537',
  lang: 'ru_RU',
};
const routes: Routes = [{
  path: '', component: StoragesComponent
}]

@NgModule({
  declarations: [
    StoragesComponent,
    StorageComponent,
    StorageInfoComponent,
    AddStorageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  exports: [RouterModule]
})
export class StoragesModule { }
