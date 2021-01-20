import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStoryComponent } from './all-story.component';

const routes: Routes = [
  {
    path: '',
    component: AllStoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllStoryRoutingModule { }