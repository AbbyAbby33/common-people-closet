import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ClothStoryRoutingModule } from './cloth-story-routing.module';
import { ClothStoryComponent } from './cloth-story.component';

@NgModule({
  declarations: [
    ClothStoryComponent
  ],
  imports: [
    SharedModule,
    ClothStoryRoutingModule
  ]
})
export class ClothStoryModule { }
