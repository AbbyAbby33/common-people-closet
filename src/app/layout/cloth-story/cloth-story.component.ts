import { Component, OnInit } from '@angular/core';
import { ClothInfoApiService } from '@core/service-api/cloth-info-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cpc-cloth-story',
  templateUrl: './cloth-story.component.html',
  styleUrls: ['./cloth-story.component.scss']
})
export class ClothStoryComponent implements OnInit {

  clothId: string;
  clothInfo;
  clothImgList;

  constructor(
    private clothInfoApiService: ClothInfoApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.clothId = this.activatedRoute.snapshot.queryParams['id'];
    console.log('this.clothId', this.clothId);
    this.getClothInfoById(this.clothId);
    this.getClothImgListInfoById(this.clothId);
  }

  getClothInfoById(clothId: string) {
    this.clothInfo = this.clothInfoApiService.getClothInfoById(clothId);
    // console.log('衣物分析資料this.clothInfo', this.clothInfo);
  }

  getClothImgListInfoById(clothId: string) {
    this.clothImgList = this.clothInfoApiService.getClothImgListInfoById(clothId);
    // console.log('衣物分析圖片this.clothImgList', this.clothImgList);
  }

}
