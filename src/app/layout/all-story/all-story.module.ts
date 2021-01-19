import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AllStoryComponent } from './all-story.component';
import { AllStoryRoutingModule } from './all-story-routing.module';

@NgModule({
  declarations: [
    AllStoryComponent
  ],
  imports: [
    SharedModule,
    AllStoryRoutingModule,
  ],
  exports: []
})
export class AllStoryModule { }
