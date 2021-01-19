import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NavBarHambergerComponent } from '@core/component/nav-bar-hamberger/nav-bar-hamberger.component';

@NgModule({
  declarations: [
    NavBarHambergerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavBarHambergerComponent
  ]
})
export class NavBarHambergerModule { }
