import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cpc-cloth-diamond-template',
  templateUrl: './cloth-diamond-template.component.html',
  styleUrls: ['./cloth-diamond-template.component.scss']
})
export class ClothDiamondTemplateComponent implements OnInit {

  @Input() clothItemInfo;

  constructor() { }

  ngOnInit(): void {
    // console.log('this.clothItemInfo', this.clothItemInfo);
  }

}
