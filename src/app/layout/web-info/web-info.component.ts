import { Component, OnInit } from '@angular/core';
import { UserOperateInfoService } from '@app/core/service-front/user-operate-info.service';

@Component({
  selector: 'cpc-web-info',
  templateUrl: './web-info.component.html',
  styleUrls: ['./web-info.component.scss']
})
export class WebInfoComponent implements OnInit {

  constructor(
    private userOperateInfoService: UserOperateInfoService,
  ) { }

  ngOnInit(): void {
    this.userOperateInfoService.changePage('web-info');
  }

}
