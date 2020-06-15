import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './modules/custom-material.module';


@NgModule({
  declarations: [],
  exports: [FlexLayoutModule,CustomMaterialModule],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CustomMaterialModule
  ]
})
export class SharedModule { }
