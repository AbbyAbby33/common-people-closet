import { NgModule } from '@angular/core';
import { NavBarComponent } from '@core/component/nav-bar/nav-bar.component';
import { NavBarHambergerComponent } from '@core/component/nav-bar-hamberger/nav-bar-hamberger.component';
import { SharedModule } from '@shared/shared.module';
import { NavService } from '@core/service-api/nav.service';

/*菜單模組：大菜單+漢堡菜單*/

@NgModule({
  declarations: [
    NavBarComponent,
    NavBarHambergerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavBarComponent,
    NavBarHambergerComponent
  ],
  providers: [
    NavService,
  ]
})
export class NavModule { }
