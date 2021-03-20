import { NgModule } from '@angular/core';
import { LoadingPageComponent } from './loading-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LoadingPageComponent,
  ],
  imports: [
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
