import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from '@core/add-svg-icon.service';

@Component({
  selector: 'cpc-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private addSvgIconService: AddSvgIconService,
  ) { }

  ngOnInit() {
    this.addSvgIconService.addSvgIcon('face_home');
  }

}
