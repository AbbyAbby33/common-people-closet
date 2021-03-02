import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { WebInfoRoutingModule } from './web-info-routing.module';
import { WebInfoComponent } from './web-info.component';


@NgModule({
  declarations: [
    WebInfoComponent
  ],
  imports: [
    SharedModule,
    WebInfoRoutingModule
  ]
})
export class WebInfoModule { }
