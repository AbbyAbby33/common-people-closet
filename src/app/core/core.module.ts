import { NgModule } from '@angular/core';
import { FaceOperateGuideModule } from '@core/component/face-operate-guide/face-operate-guide.module';
import { NavBarModule } from '@core/component/nav-bar/nav-bar.module';
import { WebInfoBtnModule } from '@core/component/web-info-btn/web-info-btn.module';
import { UserOperateInfoService } from '@app/core/service-front/user-operate-info.service';

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
  ],
  providers: [
    UserOperateInfoService
  ]
})
export class CoreModule { }
