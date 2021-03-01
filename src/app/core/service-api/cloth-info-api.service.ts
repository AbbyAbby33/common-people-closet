import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothInfoApiService {

  /** 衣物資料 */
  clothInfo = [
    // type: 1:上身----(secondType: 1:長袖上衣 2:短袖上衣 3:襯衫),
    // type: 2:下身----(secondType: 4:長褲 5:短褲 6:裙子),
    // type: 3:外套----(secondType: null),
    // type: 4:配件----(secondType: null),

    { id: 'aa-0000-0002', name: '毛絨感維尼蜂蜜上衣', material: '棉60% + 聚酯纖維40%', preference: 4, story: '', type: 1, secondType: 3, loginDate: '2020-10-01', mainImg: 'aaaa-0000-0033.jpg' },        // CACO
    { id: 'aa-0000-0001', name: '個性粗黑線棕色上衣', material: '棉60% + 聚酯纖維40%', preference: 3, story: '', type: 1, secondType: 1, loginDate: '2020-10-01', mainImg: 'aaaa-0000-0001.jpg' },        // CACO
    { id: 'aa-0000-0003', name: '單口袋細條紋上衣', material: '棉100%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2020-10-01', mainImg: 'aaaa-0000-0007.jpg' },                       // CACO
    { id: 'aa-0000-0004', name: '厚布料寬鬆帽T', material: '棉90% + 聚酯纖維10%', preference: 5, story: '', type: 1, secondType: 1, loginDate: '2021-01-10', mainImg: 'aaaa-0000-0008.jpg' },            // AJPeace
    { id: 'aa-0000-0023', name: '英文字圖案連帽休閒外套', material: '棉100%', preference: 2, story: '', type: 3, secondType: 4, loginDate: '2016-11-22', mainImg: 'aaaa-0000-0026.jpg' },
    { id: 'aa-0000-0007', name: '百搭不用想黑色素T', material: '棉100%', preference: 5, story: '', type: 1, secondType: 2, loginDate: '2018-05-08', mainImg: 'aaaa-0000-0010.jpg' },
    { id: 'aa-0000-0008', name: '前短後長大鈕釦襯衫', material: '棉20% + 聚酯纖維80%', preference: 5, story: '', type: 1, secondType: 3, loginDate: '2021-01-28', mainImg: 'aaaa-0000-0011.jpg' },        // PAZZO
    { id: 'aa-0000-0022', name: '白色牛仔外套', material: '棉100%', preference: 3, story: '', type: 3, secondType: 4, loginDate: '2016-04-22', mainImg: 'aaaa-0000-0025.jpg' },
    { id: 'aa-0000-0010', name: '水彩圓點造型襯衫', material: '棉10% + 聚酯纖維90%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2021-01-28', mainImg: 'aaaa-0000-0013.jpg' },          // Queen Shop
    { id: 'aa-0000-0011', name: '小格子配色排釦長袖襯衫', material: '棉30% + 聚酯纖維70%', preference: 5, story: '', type: 1, secondType: 3, loginDate: '2021-01-28', mainImg: 'aaaa-0000-0014.jpg' },     // Queen Shop
    { id: 'aa-0000-0012', name: '素面襯衫', material: '棉100%', preference: 5, story: '', type: 1, secondType: 3, loginDate: '2021-01-28', mainImg: 'aaaa-0000-0015.jpg' },                              // Queen Shop
    { id: 'aa-0000-0013', name: '杏色滿版花花襯衫', material: '棉30% + 聚酯纖維70%', preference: 1, story: '', type: 1, secondType: 3, loginDate: '2018-05-08', mainImg: 'aaaa-0000-0016.jpg' },


    { id: 'aa-0000-0014', name: '優雅格紋長裙', material: '聚酯纖維 10% 彈性纖維 90%', preference: 4, story: '', type: 2, secondType: 6, loginDate: '2021-01-10', mainImg: 'aaaa-0000-0017.jpg' },              // AJPeace
    { id: 'aa-0000-0015', name: '時尚壓線西裝長褲', material: '聚酯纖維 90% 彈性纖維 10%', preference: 3, story: '', type: 2, secondType: 4, loginDate: '2021-01-28', mainImg: 'aaaa-0000-0018.jpg' },     // PAZZO
    { id: 'aa-0000-0016', name: '厚布料抽繩棉褲', material: '棉100%', preference: 3, story: '', type: 2, secondType: 4, loginDate: '2020-10-01', mainImg: 'aaaa-0000-0019.jpg' },                        // CACO
    { id: 'aa-0000-0017', name: '寬褲口西裝長褲', material: '聚酯纖維70% + 彈性纖維30%', preference: 5, story: '', type: 2, secondType: 4, loginDate: '2020-09-28', mainImg: 'aaaa-0000-0020.jpg' },                        // Queen Shop
    { id: 'aa-0000-0018', name: '黑色造型西裝長褲', material: '聚酯纖維70% + 彈性纖維30%', preference: 5, story: '', type: 2, secondType: 4, loginDate: '2020-09-28', mainImg: 'aaaa-0000-0021.jpg' },                      // Queen Shop
    { id: 'aa-0000-0019', name: '貼身好搭針織裙', material: '棉100%', preference: 5, story: '', type: 2, secondType: 6, loginDate: '2021-01-22', mainImg: 'aaaa-0000-0022.jpg' },                        // AJPeace
    { id: 'aa-0000-0020', name: '素色壓線直筒褲', material: '棉80% + 聚酯纖維20%', preference: 5, story: '', type: 2, secondType: 4, loginDate: '2021-01-22', mainImg: 'aaaa-0000-0023.jpg' },                        // AJPeace


    { id: 'aa-0000-0021', name: '率性防風飛行外套', material: '聚酯纖維 100%', preference: 5, story: '', type: 3, secondType: 4, loginDate: '2018-07-30', mainImg: 'aaaa-0000-0024.jpg' },
    { id: 'aa-0000-0005', name: '溫暖刷毛大學帽T', material: '棉90% + 聚酯纖維10%', preference: 4, story: '', type: 1, secondType: 1, loginDate: '2016-08-01', mainImg: 'aaaa-0000-0009.jpg' },          // 伊利諾大學
    { id: 'aa-0000-0024', name: '鋪棉毛毛連帽外套', material: '聚酯纖維100%', preference: 2, story: '', type: 3, secondType: 4, loginDate: '2020-10-13', mainImg: 'aaaa-0000-0027.jpg' },
    { id: 'aa-0000-0009', name: '流行染色感襯衫', material: '棉10% + 聚酯纖維90%', preference: 2, story: '', type: 1, secondType: 3, loginDate: '2021-01-28', mainImg: 'aaaa-0000-0012.jpg' },


    { id: 'aa-0000-0025', name: '英文小字鴨舌帽', material: '棉100%', preference: 1, story: '', type: 4, secondType: 4, loginDate: '2017-05-13', mainImg: 'aaaa-0000-0028.jpg' },
    { id: 'aa-0000-0026', name: '背心', material: '聚酯纖維 70% 尼龍 30%', preference: 5, story: '', type: 4, secondType: 4, loginDate: '2019-11-30', mainImg: 'aaaa-0000-0029.jpg' },
    { id: 'aa-0000-0027', name: '黑色側背小包', material: '合成皮', preference: 5, story: '', type: 4, secondType: 4, loginDate: '2020-4-26', mainImg: 'aaaa-0000-0030.jpg' },
    { id: 'aa-0000-0028', name: '咖啡色休閒手提包', material: '棉100%', preference: 2, story: '', type: 4, secondType: 4, loginDate: '2020-4-26', mainImg: 'aaaa-0000-0031.jpg' },
    { id: 'aa-0000-0029', name: '後背包', material: '合成皮', preference: 2, story: '', type: 4, secondType: 4, loginDate: '2018-7-30', mainImg: 'aaaa-0000-0032.jpg' },

  ];

  clothImgList = [
    { id: 'aa-0000-0001', mainImg: 'aaaa-0000-0001.jpg', backImg: 'aaaa-0000-0001.jpg', contentImg: ['aaaa-0000-0001.jpg', 'aaaa-0000-0001.jpg', 'aaaa-0000-0001.jpg', 'aaaa-0000-0001.jpg']},
    { id: 'aa-0000-0002', mainImg: 'aaaa-0000-0033.jpg', backImg: 'aaaa-0000-0002.jpg', contentImg: ['aaaa-0000-0003.jpg', 'aaaa-0000-0004.jpg', 'aaaa-0000-0005.jpg', 'aaaa-0000-0006.jpg']},
    { id: 'aa-0000-0003', mainImg: 'aaaa-0000-0007.jpg', backImg: 'aaaa-0000-0007.jpg', contentImg: ['aaaa-0000-0007.jpg', 'aaaa-0000-0007.jpg', 'aaaa-0000-0007.jpg', 'aaaa-0000-0007.jpg']},
    { id: 'aa-0000-0004', mainImg: 'aaaa-0000-0008.jpg', backImg: 'aaaa-0000-0008.jpg', contentImg: ['aaaa-0000-0008.jpg', 'aaaa-0000-0008.jpg', 'aaaa-0000-0008.jpg', 'aaaa-0000-0008.jpg']},
    { id: 'aa-0000-0005', mainImg: 'aaaa-0000-0009.jpg', backImg: 'aaaa-0000-0009.jpg', contentImg: ['aaaa-0000-0009.jpg', 'aaaa-0000-0009.jpg', 'aaaa-0000-0009.jpg', 'aaaa-0000-0009.jpg']},
    { id: 'aa-0000-0007', mainImg: 'aaaa-0000-0010.jpg', backImg: 'aaaa-0000-0010.jpg', contentImg: ['aaaa-0000-0010.jpg', 'aaaa-0000-0010.jpg', 'aaaa-0000-0010.jpg', 'aaaa-0000-0010.jpg']},
    { id: 'aa-0000-0008', mainImg: 'aaaa-0000-0011.jpg', backImg: 'aaaa-0000-0011.jpg', contentImg: ['aaaa-0000-0011.jpg', 'aaaa-0000-0011.jpg', 'aaaa-0000-0011.jpg', 'aaaa-0000-0011.jpg']},
    { id: 'aa-0000-0009', mainImg: 'aaaa-0000-0012.jpg', backImg: 'aaaa-0000-0012.jpg', contentImg: ['aaaa-0000-0012.jpg', 'aaaa-0000-0012.jpg', 'aaaa-0000-0012.jpg', 'aaaa-0000-0012.jpg']},
    { id: 'aa-0000-0010', mainImg: 'aaaa-0000-0013.jpg', backImg: 'aaaa-0000-0013.jpg', contentImg: ['aaaa-0000-0013.jpg', 'aaaa-0000-0013.jpg', 'aaaa-0000-0013.jpg', 'aaaa-0000-0013.jpg']},
    { id: 'aa-0000-0011', mainImg: 'aaaa-0000-0014.jpg', backImg: 'aaaa-0000-0014.jpg', contentImg: ['aaaa-0000-0014.jpg', 'aaaa-0000-0014.jpg', 'aaaa-0000-0014.jpg', 'aaaa-0000-0014.jpg']},
    { id: 'aa-0000-0012', mainImg: 'aaaa-0000-0015.jpg', backImg: 'aaaa-0000-0015.jpg', contentImg: ['aaaa-0000-0015.jpg', 'aaaa-0000-0015.jpg', 'aaaa-0000-0015.jpg', 'aaaa-0000-0015.jpg']},
    { id: 'aa-0000-0013', mainImg: 'aaaa-0000-0016.jpg', backImg: 'aaaa-0000-0016.jpg', contentImg: ['aaaa-0000-0016.jpg', 'aaaa-0000-0016.jpg', 'aaaa-0000-0016.jpg', 'aaaa-0000-0016.jpg']},
    { id: 'aa-0000-0014', mainImg: 'aaaa-0000-0017.jpg', backImg: 'aaaa-0000-0017.jpg', contentImg: ['aaaa-0000-0017.jpg', 'aaaa-0000-0017.jpg', 'aaaa-0000-0017.jpg', 'aaaa-0000-0017.jpg']},
    { id: 'aa-0000-0015', mainImg: 'aaaa-0000-0018.jpg', backImg: 'aaaa-0000-0018.jpg', contentImg: ['aaaa-0000-0018.jpg', 'aaaa-0000-0018.jpg', 'aaaa-0000-0018.jpg', 'aaaa-0000-0018.jpg']},
    { id: 'aa-0000-0016', mainImg: 'aaaa-0000-0019.jpg', backImg: 'aaaa-0000-0019.jpg', contentImg: ['aaaa-0000-0019.jpg', 'aaaa-0000-0019.jpg', 'aaaa-0000-0019.jpg', 'aaaa-0000-0019.jpg']},
    { id: 'aa-0000-0017', mainImg: 'aaaa-0000-0020.jpg', backImg: 'aaaa-0000-0020.jpg', contentImg: ['aaaa-0000-0020.jpg', 'aaaa-0000-0020.jpg', 'aaaa-0000-0020.jpg', 'aaaa-0000-0020.jpg']},
    { id: 'aa-0000-0018', mainImg: 'aaaa-0000-0021.jpg', backImg: 'aaaa-0000-0021.jpg', contentImg: ['aaaa-0000-0021.jpg', 'aaaa-0000-0021.jpg', 'aaaa-0000-0021.jpg', 'aaaa-0000-0021.jpg']},
    { id: 'aa-0000-0019', mainImg: 'aaaa-0000-0022.jpg', backImg: 'aaaa-0000-0022.jpg', contentImg: ['aaaa-0000-0022.jpg', 'aaaa-0000-0022.jpg', 'aaaa-0000-0022.jpg', 'aaaa-0000-0022.jpg']},
    { id: 'aa-0000-0020', mainImg: 'aaaa-0000-0023.jpg', backImg: 'aaaa-0000-0023.jpg', contentImg: ['aaaa-0000-0023.jpg', 'aaaa-0000-0023.jpg', 'aaaa-0000-0023.jpg', 'aaaa-0000-0023.jpg']},
    { id: 'aa-0000-0021', mainImg: 'aaaa-0000-0024.jpg', backImg: 'aaaa-0000-0024.jpg', contentImg: ['aaaa-0000-0024.jpg', 'aaaa-0000-0024.jpg', 'aaaa-0000-0024.jpg', 'aaaa-0000-0024.jpg']},
    { id: 'aa-0000-0022', mainImg: 'aaaa-0000-0025.jpg', backImg: 'aaaa-0000-0025.jpg', contentImg: ['aaaa-0000-0025.jpg', 'aaaa-0000-0025.jpg', 'aaaa-0000-0025.jpg', 'aaaa-0000-0025.jpg']},
    { id: 'aa-0000-0023', mainImg: 'aaaa-0000-0026.jpg', backImg: 'aaaa-0000-0026.jpg', contentImg: ['aaaa-0000-0026.jpg', 'aaaa-0000-0026.jpg', 'aaaa-0000-0026.jpg', 'aaaa-0000-0026.jpg']},
    { id: 'aa-0000-0024', mainImg: 'aaaa-0000-0027.jpg', backImg: 'aaaa-0000-0027.jpg', contentImg: ['aaaa-0000-0027.jpg', 'aaaa-0000-0027.jpg', 'aaaa-0000-0027.jpg', 'aaaa-0000-0027.jpg']},
    { id: 'aa-0000-0025', mainImg: 'aaaa-0000-0028.jpg', backImg: 'aaaa-0000-0028.jpg', contentImg: ['aaaa-0000-0028.jpg', 'aaaa-0000-0028.jpg', 'aaaa-0000-0028.jpg', 'aaaa-0000-0028.jpg']},
    { id: 'aa-0000-0026', mainImg: 'aaaa-0000-0029.jpg', backImg: 'aaaa-0000-0029.jpg', contentImg: ['aaaa-0000-0029.jpg', 'aaaa-0000-0029.jpg', 'aaaa-0000-0029.jpg', 'aaaa-0000-0029.jpg']},
    { id: 'aa-0000-0027', mainImg: 'aaaa-0000-0030.jpg', backImg: 'aaaa-0000-0030.jpg', contentImg: ['aaaa-0000-0030.jpg', 'aaaa-0000-0030.jpg', 'aaaa-0000-0030.jpg', 'aaaa-0000-0030.jpg']},
    { id: 'aa-0000-0028', mainImg: 'aaaa-0000-0031.jpg', backImg: 'aaaa-0000-0031.jpg', contentImg: ['aaaa-0000-0031.jpg', 'aaaa-0000-0031.jpg', 'aaaa-0000-0031.jpg', 'aaaa-0000-0031.jpg']},
    { id: 'aa-0000-0029', mainImg: 'aaaa-0000-0032.jpg', backImg: 'aaaa-0000-0032.jpg', contentImg: ['aaaa-0000-0032.jpg', 'aaaa-0000-0032.jpg', 'aaaa-0000-0032.jpg', 'aaaa-0000-0032.jpg']},
  ];

  constructor() { }

  getAllClothInfo() {
    return this.clothInfo;
  }

  getClothInfoById(clothId) {
    let clothInfo = {};
    this.clothInfo.map(v => {
      if (v.id === clothId) {
        clothInfo = v;
      }
    });
    return clothInfo;
  }

  getClothImgListInfoById(clothId) {
    let clothImgList = {};
    this.clothImgList.map(v => {
      if (v.id === clothId) {
        clothImgList = v;
      }
    });
    return clothImgList;
  }

}
