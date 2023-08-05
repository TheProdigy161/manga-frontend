import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../modules/material/material.module';



@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LoadingComponent,
    MaterialModule
  ]
})
export class CoreModule { }
