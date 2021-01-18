import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  /** 菜單 */
  navList = [
    {name: '詳細故事', type: 'word', path: 'https://www.w3schools.com'},
    {name: '衣物分析', type: 'word', path: 'https://www.w3schools.com'},
    {name: 'logo', type: 'icon', path: 'https://www.w3schools.com'},
    {name: '隨機搭配', type: 'word', path: 'https://www.w3schools.com'},
    {name: '投稿故事', type: 'word', path: 'https://www.w3schools.com'},
  ];

  constructor() { }

  getNavList() {
    return this.navList;
  }

}
