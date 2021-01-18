import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from '@app/core/service-front/add-svg-icon.service';
import { NavService } from '@core/service-api/nav.service';

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
    private navService: NavService,
  ) { }

  ngOnInit(): void {
    this.getNavList();
  }

  getNavList() {
    this.navList = this.navService.getNavList();
    // console.log(this.navList, 'this.navList');

    this.navList.forEach(navItem => {
      if (navItem.type === 'icon') {
        this.addSvgIconService.addSvgIcon(navItem.name);
      }
    });

  }

}
