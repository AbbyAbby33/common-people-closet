import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothStoryComponent } from './cloth-story.component';

const routes: Routes = [
  {
    path: '',
    component: ClothStoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothStoryRoutingModule { }
