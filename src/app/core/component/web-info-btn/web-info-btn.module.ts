import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { WebInfoBtnComponent } from './web-info-btn.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WebInfoBtnComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    WebInfoBtnComponent,
  ]
})
export class WebInfoBtnModule { }
