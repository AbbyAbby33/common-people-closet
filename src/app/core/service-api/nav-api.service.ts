import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavApiService {

  /** 菜單 */
  navList = [
    {name: '詳細故事', type: 'word', path: '/all-story'},
    {name: '衣物分析', type: 'word', path: '/cloth-analysis'},
    {name: 'logo', type: 'icon', path: ''},
    {name: '隨機搭配', type: 'word', path: '/random-match'},
    {name: '投稿故事', type: 'word', path: '/share-yours'},
  ];

  constructor() { }

  getNavList() {
    return this.navList;
  }

}
