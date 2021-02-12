import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Typewriter from 't-writer.js';
import { AddSvgIconService } from '@app/core/service-front/add-svg-icon.service';

@Component({
  selector: 'cpc-face-operate-guide',
  templateUrl: './face-operate-guide.component.html',
  styleUrls: ['./face-operate-guide.component.scss']
})
export class FaceOperateGuideComponent implements OnInit, AfterViewInit {

  @ViewChild('operateGuideWord') operateGuideWord: ElementRef;

  constructor(
    private addSvgIconService: AddSvgIconService,
  ) { }

  ngOnInit(): void {
    this.addSvgIcon();
  }

  ngAfterViewInit(): void {
    this.operateGuide();
  }

  /** 加入svg */
  addSvgIcon() {
    this.addSvgIconService.addSvgIcon('face_close_eyes');
  }

  /** 操作引導 */
  operateGuide() {
    const writer = new Typewriter(this.operateGuideWord.nativeElement, {
      loop: true,
      typeSpeed: 200,
      // typeSpeed: 20,
      // typeColor: 'blue',
    });

    writer
      .type('這是用threeJS創造的3D空間場景！滑鼠移動到衣物分析的鑽石試試！')
      // .type('你注意到遠景及近景分布的星星了嗎？<br/>用Math.random()安排分布在8個象限中的星星，因此每次都會在不同位置')
      // .type('移動到不同的鑽石試試')
      // .type('現在隨意移動滑鼠，注意到人臉的眼睛跟隨了嗎？')
      // .type('點擊詳細故事！我們去第一個分頁瞧瞧！')
      .rest(5000)
      .start();
  }
}
