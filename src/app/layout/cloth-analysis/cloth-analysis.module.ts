import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ClothAnalysisComponent } from '@layout/cloth-analysis/cloth-analysis.component';
import { ClothAnalysisRoutingModule } from '@layout/cloth-analysis/cloth-analysis-routing.module';

@NgModule({
  declarations: [
    ClothAnalysisComponent
  ],
  imports: [
    SharedModule,
    ClothAnalysisRoutingModule
  ]
})
export class ClothAnalysisModule { }