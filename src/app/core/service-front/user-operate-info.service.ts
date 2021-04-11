import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserOperateInfoService {

  // 記錄使用者操作
  /** 目前所在頁面 */
  pageNow = new BehaviorSubject('');

  constructor() {
    // this.pageNow.subscribe(v => console.log(`測試測試RxJS: ${v}`));
  }

  /** 切換頁面 */
  // 首頁'home'
  // 詳細故事'all-story'
  // 衣物分析'cloth-analysis'
  // 隨機搭配'random-match'
  // 投稿故事'share-yours'
  // 衣物故事'cloth-story'
  // 網頁資訊'web-info'
  changePage(page: string) {
    this.pageNow.next(page);
  }

}
