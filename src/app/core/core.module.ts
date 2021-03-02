import { NgModule } from '@angular/core';
import { FaceOperateGuideModule } from '@core/component/face-operate-guide/face-operate-guide.module';
import { NavBarModule } from '@core/component/nav-bar/nav-bar.module';
import { WebInfoModule } from '@core/component/web-info/web-info.module';

@NgModule({
  declarations: [
  ],
  imports: [
    FaceOperateGuideModule,
    NavBarModule,
    WebInfoModule,
  ],
  exports: [
    FaceOperateGuideModule,
    NavBarModule,
    WebInfoModule,
  ]
})
export class CoreModule { }
