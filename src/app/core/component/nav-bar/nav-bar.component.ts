import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from '@core/service/add-svg-icon.service';

@Component({
  selector: 'cpc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  /*菜單資料*/
  navList;

  constructor(
    private addSvgIconService: AddSvgIconService,
  ) { }

  ngOnInit(): void {
    this.addSvgIconService.addSvgIcon('logo');
  }

}
