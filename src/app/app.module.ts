import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { StoragesModule } from './pages/storages/storages.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule }   from '@angular/common/http';
import { CustomInterceptor } from './custom.inerceptor';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularYandexMapsModule, YaConfig  } from 'angular8-yandex-maps';

registerLocaleData(localeRu);

const mapConfig: YaConfig = {
  apikey: '4dd6334b-930b-4e8d-911c-bed2c27a4537',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoragesModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true},
    { provide: LOCALE_ID, useValue: "ru" },],
  bootstrap: [AppComponent]
})
export class AppModule { }
