import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Typewriter from 't-writer.js';
import { AddSvgIconService } from '@app/core/service-front/add-svg-icon.service';
import { UserOperateInfoService } from '@app/core/service-front/user-operate-info.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cpc-face-operate-guide',
  templateUrl: './face-operate-guide.component.html',
  styleUrls: ['./face-operate-guide.component.scss']
})
export class FaceOperateGuideComponent implements OnInit, AfterViewInit {

  @ViewChild('operateGuideWord') operateGuideWord: ElementRef;

  // 記錄使用者操作
  /** 目前所在頁面 */
  pageNow: BehaviorSubject<string>;

  writer: Typewriter;

  constructor(
    private addSvgIconService: AddSvgIconService,
    private userOperateInfoService: UserOperateInfoService,
  ) { }

  ngOnInit(): void {
    this.addSvgIcon();
  }

  ngAfterViewInit(): void {
    this.initGuide();
    this.subscribeUserAtWhichPage();
  }

  /** 加入svg */
  addSvgIcon() {
    this.addSvgIconService.addSvgIcon('face_close_eyes');
  }

  /** 訂閱目前在哪一頁 */
  subscribeUserAtWhichPage() {
    // this.pageNow = this.userOperateInfoService.pageNow;
    // console.log('this.pageNow', this.pageNow);

    const observer = {
      next: pageValue => {
        console.log('-----------------------------------------現在在哪裡:', pageValue);
        this.operateGuide(pageValue);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };

    this.userOperateInfoService.pageNow.subscribe(observer);
  }

  /** 打字Typerwriter */
  initGuide() {
    this.writer = new Typewriter(this.operateGuideWord.nativeElement, {
      loop: true,
      // loop: false,
      typeSpeed: 100,
      // typeSpeed: 20,
      // typeColor: 'blue',
    });
  }

  /** 操作引導 */
  // 首頁'home'
  // 詳細故事'all-story'
  // 衣物分析'cloth-analysis'
  // 隨機搭配'random-match'
  // 投稿故事'share-yours'
  // 衣物故事'cloth-story'
  // 網頁資訊'web-info'
  operateGuide(pageValue: string) {
    /** 抓取DOM */
    let operateGuideWordDom = this.operateGuideWord;
    console.log(operateGuideWordDom, '2021');

    /** 打字文字 */
    let typeWord;
    switch (pageValue) {
      case 'home':
        typeWord = '這是用threeJS創造的3D空間場景！滑鼠移動到衣物分析的鑽石試試！';
        break;
      case 'all-story':
        typeWord = '詳細故事使用技術：模組化元件，結構性指令，分頁器邏輯';
        break;
      case 'cloth-analysis':
        typeWord = '衣物分析使用技術：第三方套件Angular Material';
        break;
      case 'random-match':
        typeWord = '隨機搭配使用技術：ThreeJS場景，模組化元件';
        break;
      case 'share-yours':
        typeWord = '投稿故事使用技術：(開發中)Angular Form';
        break;
      case 'cloth-story':
        typeWord = '衣物故事使用技術：路由帶入參數，模組化元件';
        break;
      // default:
      //   typeWord = '你好！我是前端工程師陳怡靜！';
    }

    if (typeWord) {
      this.writer
        .clear()
        .type(typeWord)
        .rest(1000)
        .start();
      // console.log('this.writer:', this.writer);
      /** 移除先前的 */
      this.writer.queue = this.writer.queue.slice(this.writer.queue.length - 2);
    }

  }
}
