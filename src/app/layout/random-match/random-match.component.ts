import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'cpc-random-match',
  templateUrl: './random-match.component.html',
  styleUrls: ['./random-match.component.scss']
})
export class RandomMatchComponent implements OnInit, AfterViewInit {

  @ViewChild('threeJsWrap') threeJsWrap: ElementRef;

  scene;
  camera;
  renderer;

  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();
  diamondHover: string;
  objects = [];

  constructor(
    private renderer2: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initView();
  }

  /** 1.建立threeJS基本元素 */
  initView() {
    // 1.建立場景
    this.scene = new THREE.Scene();

    // 2.建立相機
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 150;

    // 3.建立繪圖器
    this.renderer = new THREE.WebGLRenderer({ antialias: true });  // 建立 WebGL 繪圖器
    this.renderer.setClearColor('#F9E3BD');  // 設定背景色
    this.renderer.setSize(window.innerWidth, window.innerHeight); // 設定畫布為瀏覽器大小
    this.renderer2.appendChild(this.threeJsWrap.nativeElement, this.renderer.domElement);

    // 4.加入threeJS物件：鑽石
    this.addDiamondMesh();

    this.animate3();
  }

  addDiamondMesh() {
    const diamondNum = 100;
    // 先製作位置預備
    const vertices = this.newPosition(diamondNum);

    // 製作鑽石
    for (let i = 0; i < diamondNum; i++) {
      const diamond = this.createOneDiamondGroup();
      const positionNum = (i + 1) * 3;
      diamond.position.set(vertices[positionNum - 2], vertices[positionNum - 1], vertices[positionNum]);
      this.scene.add(diamond);
    }
  }

  createOneDiamondGroup() {
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const materialWire = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });
    const geometryTop = new THREE.CylinderBufferGeometry(5, 10, 5, 6, 1, true);
    const geometryBottom = new THREE.CylinderBufferGeometry(10, 0, 10, 6, 1, true);
    const diamond = new THREE.Object3D();
    const meshTop = new THREE.Mesh(geometryTop, materialWire);
    meshTop.position.set(0, -2.5, 0);
    const meshBottom = new THREE.Mesh(geometryBottom, materialWire);
    meshBottom.position.set(0, -10, 0);
    diamond.add(meshTop);
    diamond.add(meshBottom);
    return diamond;
  }

  /** 要不同位置 */
  newPosition(starNum: number) {
    const vertices = [];
    for (let i = 0; i < starNum; i++) {
      let x = Math.random() * 150;
      let y = Math.random() * 150;
      let z = Math.random() * 150;
      if (i < starNum / 4) {                                      // 0-25
        x = -x;
        if (i < (starNum / 4) - (starNum / 8)) { z = -z; }
      } else if (starNum / 4 <= i && i < starNum / 4 * 2) {       // 25-50
        y = -y;
        if (i < (starNum / 4 * 2) - (starNum / 8)) { z = -z; }
      } else if (starNum / 4 * 2 <= i && i < starNum / 4 * 3) {   // 50-75
        x = -x;
        y = -y;
        if (i < (starNum / 4 * 3) - (starNum / 8)) { z = -z; }
      } else {                                                    // 75-100
        if (i < (starNum / 4 * 4) - (starNum / 8)) { z = -z; }
      }
      vertices.push(x, y, z);
    }
    return vertices;
  }

  animate3() {
    window.requestAnimationFrame(() => this.animate3());
    // console.log('this.scene', this.scene);
    // console.log('this.camera', this.camera);

    this.renderer.render(this.scene, this.camera);
  }

}
