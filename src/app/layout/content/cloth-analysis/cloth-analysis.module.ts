import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ClothAnalysisComponent } from './cloth-analysis.component';

@NgModule({
  declarations: [
    ClothAnalysisComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ClothAnalysisModule { }
