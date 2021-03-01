import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClothInfoApiService } from '@core/service-api/cloth-info-api.service';

@Component({
  selector: 'cpc-all-story',
  templateUrl: './all-story.component.html',
  styleUrls: ['./all-story.component.scss']
})
export class AllStoryComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<any>();
  length = 0;

  pageIndex = 0;

  clothListThisPage: Array<any>;

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


  constructor(
    private clothInfoApiService: ClothInfoApiService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    /** setTimeout：避免ExpressionChangedAfterItHasBeenCheckedError，真實串API的時候就不需要setTimeout */
    setTimeout(() => this.getAllClothInfo(), 0);
  }

  /** 取得所有衣物資訊 */
  getAllClothInfo() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.clothInfoApiService.getAllClothInfo();
    this.length = this.clothInfoApiService.getAllClothInfo().length;
    console.log('this.dataSource', this.dataSource);
    this.getClothListThisPage(this.pageIndex);
  }

  /** 取得當頁應顯示衣物資訊 */
  getClothListThisPage(pageIndex) {
    const pageSize = 12;
    // const pageSize = 32;
    this.clothListThisPage = this.dataSource.data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    // TODO: 記得處理最後一頁剩下一點點的狀況

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
