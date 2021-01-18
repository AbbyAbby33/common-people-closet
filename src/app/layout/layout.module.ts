import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LayoutComponent } from '@layout/layout.component';
import { NavigationModule } from '@layout/navigation/navigation.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    SharedModule,
    NavigationModule,
    RouterModule
  ],
  exports : [
    LayoutComponent
  ]
})
export class LayoutModule { }
