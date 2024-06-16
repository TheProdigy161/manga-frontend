import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CoreModule,
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule
  ]
})
export class AuthModule { }
