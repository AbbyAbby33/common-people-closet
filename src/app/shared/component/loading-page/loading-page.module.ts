import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoadingPageComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  exports: [
    LoadingPageComponent,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
  ]
})
export class LoadingPageModule { }
