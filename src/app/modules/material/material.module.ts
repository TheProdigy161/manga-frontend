import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
