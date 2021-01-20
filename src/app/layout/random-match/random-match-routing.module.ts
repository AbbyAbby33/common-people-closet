import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomMatchComponent } from '@layout/random-match/random-match.component';

const routes: Routes = [
  {
    path: '',
    component: RandomMatchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomMatchRoutingModule { }
