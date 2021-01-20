import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothAnalysisComponent } from '@layout/cloth-analysis/cloth-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: ClothAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothAnalysisRoutingModule { }
