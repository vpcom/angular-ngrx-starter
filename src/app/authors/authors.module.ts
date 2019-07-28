import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.angular.material.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuthors from './authors.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthorsEffects } from './authors.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('authors', fromAuthors.reducer),
    EffectsModule.forFeature([AuthorsEffects]),
  ]
})
export class AuthorsModule { }
