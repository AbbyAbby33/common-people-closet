import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AllStoryComponent } from './all-story.component';

@NgModule({
  declarations: [
    AllStoryComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AllStoryModule { }
