import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSelectModule, MatOptionModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MaterialModule { }
