import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTransferComponent } from './add-transfer/add-transfer.component';
import {MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule }   from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';


const routes: Routes = [{
  path: '', component: TransfersComponent
}]

@NgModule({
  declarations: [
    TransfersComponent,
    AddTransferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
  exports: [RouterModule]
})
export class TransfersModule { }
