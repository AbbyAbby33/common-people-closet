import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from '../../core/add-svg-icon.service';

@Component({
  selector: 'cpc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  /*菜單資料*/
  navList;

  constructor(
    private addSvgIconService: AddSvgIconService,
  ) { }

  ngOnInit(): void {
    this.addSvgIconService.addSvgIcon('logo');
  }

}
