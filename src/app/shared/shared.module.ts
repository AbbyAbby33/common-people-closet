import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClothDiamondTemplateModule } from './component/cloth-diamond-template/cloth-diamond-template.module';
import { PageTitleModule } from './component/page-title/page-title.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoadingPageModule } from './component/loading-page/loading-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    ClothDiamondTemplateModule,
    PageTitleModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    LoadingPageModule,
  ],
  exports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    ClothDiamondTemplateModule,
    PageTitleModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    LoadingPageModule,
  ],
})
export class SharedModule { }
