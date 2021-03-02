import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { WebInfoComponent } from './web-info.component';

@NgModule({
  declarations: [
    WebInfoComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    WebInfoComponent
  ]
})
export class WebInfoModule { }
