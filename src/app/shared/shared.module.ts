import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
})
export class SharedModule { }
