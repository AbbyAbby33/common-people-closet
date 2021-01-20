import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareYoursComponent } from '@layout/share-yours/share-yours.component';

const routes: Routes = [
  {
    path: '',
    component: ShareYoursComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareYoursRoutingModule { }
