import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.angular.material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AuthorsModule { }
