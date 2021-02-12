import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NavBarModule } from '@core/component/nav-bar/nav-bar.module';
import { HomeModule } from '@layout/home/home.module';
import { FaceOperateGuideModule } from '@core/component/face-operate-guide/face-operate-guide.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NavBarModule,
    BrowserAnimationsModule,
    HomeModule,
    FaceOperateGuideModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
