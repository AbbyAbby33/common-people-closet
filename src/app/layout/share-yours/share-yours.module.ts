import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ShareYoursComponent } from '@layout/share-yours/share-yours.component';
import { ShareYoursRoutingModule } from '@layout/share-yours/share-yours-routing.module';

@NgModule({
  declarations: [
    ShareYoursComponent
  ],
  imports: [
    SharedModule,
    ShareYoursRoutingModule
  ]
})
export class ShareYoursModule { }
