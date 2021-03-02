import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebInfoComponent } from './web-info.component';

const routes: Routes = [
  {
    path: '',
    component: WebInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebInfoRoutingModule { }
