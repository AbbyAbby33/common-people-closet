import { Component, OnInit } from '@angular/core';
import { AddSvgIconService } from '@app/core/service-front/add-svg-icon.service';

@Component({
  selector: 'cpc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private addSvgIconService: AddSvgIconService,
  ) { }

  ngOnInit(): void {
    this.addSvgIconService.addSvgIcon('face_home');
  }

}
