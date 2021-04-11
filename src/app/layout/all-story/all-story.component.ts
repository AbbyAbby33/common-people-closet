import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClothInfoApiService } from '@core/service-api/cloth-info-api.service';
import { UserOperateInfoService } from '@app/core/service-front/user-operate-info.service';

@Component({
  selector: 'cpc-all-story',
  templateUrl: './all-story.component.html',
  styleUrls: ['./all-story.component.scss']
})
export class AllStoryComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<any>();
  length = 0;
  pageIndex = 0;
  pageSize = 12;
  pageNumList = [];
  // pageNumList = [
  //   {pageNum: 1},
  //   {pageNum: 2},
  //   {pageNum: 3},
  //   {pageNum: 4},
  //   {pageNum: 5},
  // ];

  clothListThisPage: Array<any>;

  constructor(
    private clothInfoApiService: ClothInfoApiService,
    private userOperateInfoService: UserOperateInfoService,
  ) { }

  ngOnInit(): void {
    this.userOperateInfoService.changePage('all-story');
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
    // console.log('this.dataSource', this.dataSource);
    this.getClothListThisPage(this.pageIndex);
    this.countPageNumList(this.length);
  }

  /** 取得當頁應顯示衣物資訊 */
  getClothListThisPage(pageIndex) {
    this.pageIndex = pageIndex;
    this.clothListThisPage = [];
    // slice第二個參數是取到這個參數之前，故不需要另外處理最後一頁剩下一點點的狀況，不會有問題
    this.clothListThisPage = this.dataSource.data.slice(pageIndex * this.pageSize, (pageIndex + 1) * this.pageSize);
  }

  // 1.算要顯示的pageNumList：(1)以被點的為中心 (2)可能不滿五個
  countPageNumList(length: number) {
    const fullPageNum = (length - length % this.pageSize ) / this.pageSize; // 滿一整頁的頁數
    const pageNum = length % this.pageSize ? fullPageNum + 1 : fullPageNum;
    // console.log('pageNum', pageNum);

    for (let i = 0; i < pageNum; i++) {
      this.pageNumList.push({pageNum: i + 1});
    }
    // console.log('this.pageNumList', this.pageNumList);
  }

  // 2.拋出事件：哪一個pageNum被點擊
  // 但我目前沒有開發調整pageSize的 => 注意：如果change每頁的筆數，最好回到第一頁會比較安全，因為該也可能不存在，比如說總筆數29，每頁筆數10，在第三頁，之後調整每頁筆數為50，則只會有一頁
  onPageClick(event: MouseEvent, pageNum: any) {
    event.stopPropagation();
    if (pageNum === 'pre' || pageNum === 'next') {
      // 2-1.前一頁或後一頁
      console.log(`${pageNum}`);
      console.log(this.pageIndex);
      if (pageNum === 'pre') {
        // 前
        if (this.pageIndex !== 0) {
          this.getClothListThisPage(this.pageIndex - 1);
        }

      } else {
        // 後
        if (this.pageIndex !== this.pageNumList.length - 1) {
          this.getClothListThisPage(this.pageIndex + 1);
        }
      }

    } else {
      // 2-2.頁數被點
      console.log(`點擊第${pageNum}頁`);
      this.getClothListThisPage(pageNum - 1);
    }
  }

}
