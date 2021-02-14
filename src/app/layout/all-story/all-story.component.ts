import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpc-all-story',
  templateUrl: './all-story.component.html',
  styleUrls: ['./all-story.component.scss']
})
export class AllStoryComponent implements OnInit {

  clothList = [
    {},
    {},
    {},
    {},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
