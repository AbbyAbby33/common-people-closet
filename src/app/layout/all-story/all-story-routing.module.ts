import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllStoryComponent } from './all-story.component';

const routes: Routes = [
  {
    path: '',
    component: AllStoryComponent,
    // children: [
    //   {
    //     path: 'cloth-story', // child route path
    //     loadChildren: () => import('../cloth-story/cloth-story.module').then(m => m.ClothStoryModule),
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllStoryRoutingModule { }
