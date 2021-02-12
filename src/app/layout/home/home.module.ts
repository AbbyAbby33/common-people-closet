import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { FaceOperateGuideModule } from '@core/component/face-operate-guide/face-operate-guide.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    FaceOperateGuideModule
  ],
  providers: [
  ]
})
export class HomeModule { }
