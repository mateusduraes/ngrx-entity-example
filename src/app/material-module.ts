import { NgModule } from '@angular/core';
import {
  MatListModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from '@angular/material';


@NgModule({
  exports: [
    MatListModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class MaterialModule {}
