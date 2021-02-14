import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cpc-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  @Input() pageTitleName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
