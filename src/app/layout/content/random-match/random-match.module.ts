import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RandomMatchComponent } from './random-match.component';

@NgModule({
  declarations: [
    RandomMatchComponent
  ],
  imports: [
    SharedModule
  ]
})
export class RandomMatchModule { }
