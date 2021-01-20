import { NgModule } from '@angular/core';
import { NavBarComponent } from '@core/component/nav-bar/nav-bar.component';
import { SharedModule } from '@shared/shared.module';
import { NavApiService } from '@app/core/service-api/nav-api.service';
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
    NavApiService,
  ]
})
export class NavBarModule { }
