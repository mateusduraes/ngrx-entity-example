import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatSlideToggleModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatListModule,
    MatSlideToggleModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {}
