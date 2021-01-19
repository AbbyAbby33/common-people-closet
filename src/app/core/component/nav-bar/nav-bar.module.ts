import { NgModule } from '@angular/core';
import { NavBarComponent } from '@core/component/nav-bar/nav-bar.component';
import { SharedModule } from '@shared/shared.module';
import { NavService } from '@core/service-api/nav.service';
import { RouterModule } from '@angular/router';

/*菜單模組：大菜單+漢堡菜單*/

@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
  ],
  providers: [
    NavService,
  ]
})
export class NavBarModule { }
