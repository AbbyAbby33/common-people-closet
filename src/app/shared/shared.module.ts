import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClothDiamondTemplateModule } from './component/cloth-diamond-template/cloth-diamond-template.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    ClothDiamondTemplateModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    ClothDiamondTemplateModule,
  ],
})
export class SharedModule { }
