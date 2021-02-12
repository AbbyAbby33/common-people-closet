import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FaceOperateGuideComponent } from '@core/component/face-operate-guide/face-operate-guide.component';

@NgModule({
  declarations: [
    FaceOperateGuideComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FaceOperateGuideComponent
  ]
})
export class FaceOperateGuideModule { }
