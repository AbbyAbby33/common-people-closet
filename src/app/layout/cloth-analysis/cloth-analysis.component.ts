import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpc-cloth-analysis',
  templateUrl: './cloth-analysis.component.html',
  styleUrls: ['./cloth-analysis.component.scss']
})
export class ClothAnalysisComponent implements OnInit {

  length = 60;

  displayedColumns: string[] = ['index', 'name', 'material', 'dressing-frequency', 'story', 'type', 'login-date'];

  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  /** 換頁 */
  onPageChange(event) {
    console.log('換頁event', event);

  }

}

const ELEMENT_DATA = [
  {index: 1, id: '', name: '個性黑線棕色上衣', material: '棉60% + 聚酯纖維40%', preference: 5, story: '', type: 1, loginDate: '2020-02-18'},
  {index: 2, id: '', name: 'Helium', material: '棉 100%', preference: 5, story: '', type: 1, loginDate: '2020-02-18'},
  {index: 3, id: '', name: 'Lithium', material: '聚酯纖維 77% 棉 18% 彈性纖維 5%', preference: 5, story: '', type: 1, loginDate: '2020-02-18'},
  {index: 4, id: '', name: 'Beryllium', material: '聚酯纖維 55% 嫘縈 45%', preference: 5, story: '', type: 1, loginDate: '2020-02-18'},
  {index: 5, id: '', name: 'Boron', material: '聚酯纖維 95% 彈性纖維 5%', preference: 5, story: '', type: '褲子', loginDate: '2020-02-18'},
  {index: 6, id: '', name: 'Carbon', material: 12.0107, preference: 5, story: '', type: '配件', loginDate: '2020-02-18'},
  {index: 7, id: '', name: 'Nitrogen', material: 14.0067, preference: 5, story: '', type: '外套', loginDate: '2020-02-18'},
  {index: 8, id: '', name: 'Oxygen', material: 15.9994, preference: 5, story: '', type: 1, loginDate: '2020-02-18'},
  {index: 9, id: '', name: 'Fluorine', material: 18.9984, preference: 5, story: '', type: 1, loginDate: '2020-02-18'},
  {index: 10, id: '', name: 'Neon', material: 20.1797, preference: 5, story: '', type: 1, loginDate: '2020-02-18'},
];

// 假資料
const ELEMENT_DATA_ALL = [
  // type: 1:上身----(secondType: 1:長袖上衣 2:短袖上衣 3:襯衫),
  {id: '', name: '個性粗黑線棕色上衣', material: '棉60% + 聚酯纖維40%', preference: 3, story: '', type: 1, secondType: 1, loginDate: '2020-10-01'},        // CACO
  {id: '', name: '毛絨感維尼蜂蜜上衣', material: '棉60% + 聚酯纖維40%', preference: 4, story: '', type: 1, secondType: 3, loginDate: '2020-10-01'},        // CACO
  {id: '', name: '單口袋細條紋上衣', material: '棉100%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2020-10-01'},                       // CACO
  {id: '', name: '厚布料寬鬆帽T', material: '棉 90% + 聚酯纖維10%', preference: 5, story: '', type: 1, secondType: 1, loginDate: '2021-01-10'},            // AJPeace
  {id: '', name: '溫暖刷毛大學帽T', material: '棉 90% + 聚酯纖維10%', preference: 4, story: '', type: 1, secondType: 1, loginDate: '2016-08-01'},          // 伊利諾大學
  {id: '', name: '英文字圖案白色上衣', material: '棉100%', preference: 5, story: '', type: 1, secondType: 2, loginDate: '2020-10-01'},                    // AJPeace

  {id: '', name: '百搭不用想黑色素T', material: '棉100%', preference: 5, story: '', type: 1, secondType: 2, loginDate: '2018-05-08'},

  {id: '', name: '前短後長大鈕釦襯衫', material: '聚酯纖維 80% 棉 20%', preference: 5, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},        // PAZZO
  {id: '', name: '流行染色感襯衫', material: '聚酯纖維90% + 棉10%', preference: 2, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},
  {id: '', name: '水彩圓點造型襯衫', material: '聚酯纖維90% + 棉10%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},          // Queen Shop
  {id: '', name: '小格子配色排釦長袖襯衫', material: '聚酯纖維70% + 棉30%', preference: 5, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},     // Queen Shop
  {id: '', name: '素面襯衫', material: '棉100%', preference: 5, story: '', type: 1, secondType: 3, loginDate: '2021-01-28'},                              // Queen Shop
  {id: '', name: '杏色滿版花花襯衫', material: '聚酯纖維70% + 棉30%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2018-05-08'},


  // type: 2:下身----(secondType: 4:長褲 5:短褲 6:裙子),
  {id: '', name: '優雅格紋長裙', material: '棉90% + 聚酯纖維10%', preference: 4, story: '', type: 2, secondType: 6, loginDate: '2021-01-10'},              // AJPeace
  {id: '', name: '時尚壓線西裝長褲', material: '聚酯纖維 90% 彈性纖維 10%', preference: 3, story: '', type: 2, secondType: 4, loginDate: '2021-01-28'},     // PAZZO
  {id: '', name: '厚布料抽繩棉褲', material: '棉 100%', preference: 3, story: '', type: 2, secondType: 4, loginDate: '2020-10-01'},                        // CACO
  {id: '', name: '寬褲口西裝長褲', material: '棉 100%', preference: 5, story: '', type: 2, secondType: 4, loginDate: '2020-09-28'},                        // Queen Shop
  {id: '', name: '黑色造型西裝長褲', material: '棉 100%', preference: 5, story: '', type: 2, secondType: 4, loginDate: '2020-09-28'},                      // Queen Shop
  {id: '', name: '貼身好搭針織裙', material: '棉 100%', preference: 5, story: '', type: 2, secondType: 4, loginDate: '2021-01-22'},                        // AJPeace


  // type: 3:外套----(secondType: null),
  {id: '', name: '率性防風飛行外套', material: '聚酯纖維 100%', preference: 5, story: '', type: 2, secondType: 4, loginDate: '2018-07-30'},
  {id: '', name: '白色牛仔外套', material: '棉100%', preference: 3, story: '', type: 2, secondType: 4, loginDate: '2016-04-22'},
  {id: '', name: '英文字圖案連帽休閒外套', material: '棉100%', preference: 2, story: '', type: 2, secondType: 4, loginDate: '2016-11-22'},
  {id: '', name: '鋪棉毛毛連帽外套', material: '聚酯纖維100%', preference: 2, story: '', type: 2, secondType: 4, loginDate: '2020-10-13'},


  // type: 4:配件----(secondType: null),
  {id: '', name: '英文小字鴨舌帽', material: '棉100%', preference: 1, story: '', type: 2, secondType: 4, loginDate: '2017-05-13'},

];
