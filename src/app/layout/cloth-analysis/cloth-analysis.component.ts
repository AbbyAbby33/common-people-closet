import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClothInfoApiService } from '@core/service-api/cloth-info-api.service';
import { UserOperateInfoService } from '@app/core/service-front/user-operate-info.service';

@Component({
  selector: 'cpc-cloth-analysis',
  templateUrl: './cloth-analysis.component.html',
  styleUrls: ['./cloth-analysis.component.scss']
})
export class ClothAnalysisComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator') paginator: MatPaginator;

  displayedColumns: string[] = ['index', 'name', 'material', 'preference', 'story', 'type', 'login-date'];
  dataSource = new MatTableDataSource<any>();

  length = 0;
  pageIndex = 0;
  pageSize = 10;

  constructor(
    private clothInfoApiService: ClothInfoApiService,
    private userOperateInfoService: UserOperateInfoService,
  ) { }

  ngOnInit(): void {
    this.userOperateInfoService.changePage('cloth-analysis');
  }

  ngAfterViewInit() {
    /** setTimeout：避免ExpressionChangedAfterItHasBeenCheckedError，真實串API的時候就不需要setTimeout */
    setTimeout(() => this.getAllClothInfo(), 0);
  }

  /** 取得衣物資訊 */
  getAllClothInfo() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.clothInfoApiService.getAllClothInfo();
    this.length = this.clothInfoApiService.getAllClothInfo().length;
    this.setPreference();
    // console.log('this.dataSource', this.dataSource);
  }

  setPreference() {
    this.dataSource.data.forEach(clothInfo => {
      const preferenceAry = [];
      for (let i = 0 ; i < clothInfo.preference; i++) {
        preferenceAry.push('o');
      }
      clothInfo.preferenceAry = preferenceAry;
    });
    console.log(this.dataSource.data);
  }

  /** 換頁 */
  onPageChange(event: MouseEvent) {
    console.log('換頁event', event);
    console.log('this.dataSource', this.dataSource);
    console.log('this.paginator', this.paginator);
  }

}

const ELEMENT_DATA = [
  {index: 1, name: '個性粗黑線棕色上衣', material: '棉60% + 聚酯纖維40%', preference: 3, story: '', type: 1, secondType: 1, loginDate: '2020-10-01'},        // CACO
  {index: 2, name: '毛絨感維尼蜂蜜上衣', material: '棉60% + 聚酯纖維40%', preference: 4, story: '', type: 1, secondType: 3, loginDate: '2020-10-01'},        // CACO
  {index: 3, name: '單口袋細條紋上衣', material: '棉100%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2020-10-01'},                       // CACO
  {index: 4, name: '厚布料寬鬆帽T', material: '棉90% + 聚酯纖維10%', preference: 5, story: '', type: 1, secondType: 1, loginDate: '2021-01-10'},            // AJPeace
  {index: 5, name: '溫暖刷毛大學帽T', material: '棉90% + 聚酯纖維10%', preference: 4, story: '', type: 1, secondType: 1, loginDate: '2016-08-01'},          // 伊利諾大學
  {index: 6, name: '英文字圖案白色上衣', material: '棉100%', preference: 5, story: '', type: 1, secondType: 2, loginDate: '2020-10-01'},                    // AJPeace
  {index: 7, name: '百搭不用想黑色素T', material: '棉100%', preference: 5, story: '', type: 1, secondType: 2, loginDate: '2018-05-08'},
  {index: 8, name: '前短後長大鈕釦襯衫', material: '棉20% + 聚酯纖維80%', preference: 5, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},        // PAZZO
  {index: 9, name: '流行染色感襯衫', material: '棉10% + 聚酯纖維90%', preference: 2, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},
  {index: 10, name: '水彩圓點造型襯衫', material: '棉10% + 聚酯纖維90%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},          // Queen Shop

];
