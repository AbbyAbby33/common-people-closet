import { Component, OnInit } from '@angular/core';
import { UserOperateInfoService } from '@app/core/service-front/user-operate-info.service';

@Component({
  selector: 'cpc-share-yours',
  templateUrl: './share-yours.component.html',
  styleUrls: ['./share-yours.component.scss']
})
export class ShareYoursComponent implements OnInit {

  constructor(
    private userOperateInfoService: UserOperateInfoService,
  ) { }

  ngOnInit(): void {
    this.userOperateInfoService.changePage('share-yours');
  }

}
