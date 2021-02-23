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

  pageNumList = [
    {pageNum: 1},
    {pageNum: 2},
    {pageNum: 3},
    {pageNum: 4},
    {pageNum: 5},
  ];

  // pageNumList = [{ pageNum: 1 }, { pageNum: 2 }, { pageNum: 3 }];

  // pageNumList = [
  //   { pageNum: 4 },
  //   { pageNum: 5 },
  //   { pageNum: 6 },
  //   { pageNum: 7 },
  //   { pageNum: 8 },
  // ];

  page: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  // 1.算要顯示的pageNumList：(1)以被點的為中心 (2)可能不滿五個



  // 注意：如果change每頁的筆數，最好回到第一頁會比較安全，因為該也可能不存在，比如說總筆數29，每頁筆數10，在第三頁，之後調整每頁筆數為50，則只會有一頁



  // 2.拋出事件：哪一個pageNum被點擊
  onPageClick(event: MouseEvent, pageNum: any) {
    event.stopPropagation();
    if (pageNum === 'pre' || pageNum === 'next') {
      console.log(`${pageNum}`);
    } else {
      console.log(`點擊第${pageNum}頁`);
    }
  }



}
