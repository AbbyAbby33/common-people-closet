import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ClothAnalysisComponent } from '@layout/cloth-analysis/cloth-analysis.component';
import { ClothAnalysisRoutingModule } from '@layout/cloth-analysis/cloth-analysis-routing.module';
import { ClothInfoApiService } from '@core/service-api/cloth-info-api.service';

@NgModule({
  declarations: [
    ClothAnalysisComponent
  ],
  imports: [
    SharedModule,
    ClothAnalysisRoutingModule
  ],
  providers: [
    ClothInfoApiService,
  ],
})
export class ClothAnalysisModule { }
