import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { FaceOperateGuideModule } from '@core/component/face-operate-guide/face-operate-guide.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    FaceOperateGuideModule,
    HomeRoutingModule,
  ],
  providers: [
  ]
})
export class HomeModule { }
