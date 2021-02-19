import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothStoryRoutingModule } from './cloth-story-routing.module';
import { ClothStoryComponent } from './cloth-story.component';


@NgModule({
  declarations: [
    ClothStoryComponent
  ],
  imports: [
    CommonModule,
    ClothStoryRoutingModule
  ]
})
export class ClothStoryModule { }
