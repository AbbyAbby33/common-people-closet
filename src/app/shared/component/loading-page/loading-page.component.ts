import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from '@app/core/service-front/add-svg-icon.service';

@Component({
  selector: 'cpc-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  constructor(
    private addSvgIconService: AddSvgIconService,
  ) { }

  ngOnInit(): void {
    this.addSvgIconService.addSvgIcon('logo');
  }

}
