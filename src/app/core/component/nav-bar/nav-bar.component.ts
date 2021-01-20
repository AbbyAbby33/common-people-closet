import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from '@app/core/service-front/add-svg-icon.service';
import { NavApiService } from '@app/core/service-api/nav-api.service';

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
    private navApiService: NavApiService,
  ) { }

  ngOnInit(): void {
    this.getNavList();
  }

  getNavList() {
    this.navList = this.navApiService.getNavList();
    // console.log(this.navList, 'this.navList');

    this.navList.forEach(navItem => {
      if (navItem.type === 'icon') {
        this.addSvgIconService.addSvgIcon(navItem.name);
      }
    });

  }

}
