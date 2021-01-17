import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from './core/add-svg-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private addSvgIconService: AddSvgIconService,
  ) {}

  ngOnInit() {
    this.addSvgIconService.addSvgIcon('face_home');
    this.addSvgIconService.addSvgIcon('logo');
  }

}
