import { NgModule } from '@angular/core';
import { FaceOperateGuideModule } from '@core/component/face-operate-guide/face-operate-guide.module';
import { NavBarModule } from '@core/component/nav-bar/nav-bar.module';
import { WebInfoBtnModule } from '@core/component/web-info-btn/web-info-btn.module';

@NgModule({
  declarations: [
  ],
  imports: [
    FaceOperateGuideModule,
    NavBarModule,
    WebInfoBtnModule,
  ],
  exports: [
    FaceOperateGuideModule,
    NavBarModule,
    WebInfoBtnModule,
  ]
})
export class CoreModule { }
