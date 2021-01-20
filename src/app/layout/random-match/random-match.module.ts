import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RandomMatchComponent } from '@layout/random-match/random-match.component';
import { RandomMatchRoutingModule } from '@layout/random-match/random-match-routing.module';

@NgModule({
  declarations: [
    RandomMatchComponent
  ],
  imports: [
    SharedModule,
    RandomMatchRoutingModule
  ]
})
export class RandomMatchModule { }
