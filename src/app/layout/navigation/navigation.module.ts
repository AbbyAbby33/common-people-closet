import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from '@shared/shared.module';
import { NavModule } from '@app/core/module/nav.module';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    SharedModule,
    NavModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
