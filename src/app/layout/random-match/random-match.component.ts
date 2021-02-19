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

  mouseX = 0;
  mouseY = 0;

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
    // this.scene.fog = new THREE.FogExp2( 0xffffff, 0.001 );

    // 2.建立相機
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 200;
    this.camera.lookAt(this.scene.position);

    // 3.建立繪圖器
    this.renderer = new THREE.WebGLRenderer({ antialias: true });  // 建立 WebGL 繪圖器
    this.renderer.setClearColor('#F9E3BD');  // 設定背景色
    this.renderer.setSize(window.innerWidth, window.innerHeight); // 設定畫布為瀏覽器大小
    this.renderer2.appendChild(this.threeJsWrap.nativeElement, this.renderer.domElement);

    // 4.加入threeJS物件：鑽石
    this.addDiamondMesh();

    window.addEventListener('pointermove', (event) => this.onPointerMove(event), false);

    this.animate3();
  }

  addDiamondMesh() {
    const diamondGroup = new THREE.Object3D();
    const diamondNum = 100;
    // 先製作位置預備
    const vertices = this.newPosition(diamondNum);

    // 製作鑽石
    for (let i = 0; i < diamondNum; i++) {
      const diamond = this.createOneDiamond();
      const positionNum = (i + 1) * 3;
      diamond.position.set(vertices[positionNum - 2], vertices[positionNum - 1], vertices[positionNum]);
      diamondGroup.add(diamond);
    }

    this.scene.add(diamondGroup);
  }

  createOneDiamond() {
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const materialWire = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });
    const geometryTop = new THREE.CylinderBufferGeometry(25, 50, 25, 6, 1, true);
    const geometryBottom = new THREE.CylinderBufferGeometry(50, 0, 50, 6, 1, true);
    const diamond = new THREE.Object3D();
    const meshTop = new THREE.Mesh(geometryTop, materialWire);
    meshTop.position.set(0, -12.5, 0);
    const meshBottom = new THREE.Mesh(geometryBottom, materialWire);
    meshBottom.position.set(0, -50, 0);
    diamond.add(meshTop);
    diamond.add(meshBottom);
    return diamond;
  }

  /** 要不同位置 */
  newPosition(starNum: number) {
    const vertices = [];
    for (let i = 0; i < starNum; i++) {
      let x = Math.random() * 800;
      let y = Math.random() * 800;
      let z = Math.random() * 800;
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

  onPointerMove(event) {
    if ( event.isPrimary === false ) {
      return;
    }

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    // this.mouseX = event.clientX;
    this.mouseX = event.clientX - windowHalfX;
    // this.mouseY = event.clientY;
    this.mouseY = event.clientY - windowHalfY;
    console.log('this.mouseX', this.mouseX, 'this.mouseY', this.mouseY, this.camera.position);
  }

  animate3() {
    window.requestAnimationFrame(() => this.animate3());
    // console.log('this.scene', this.scene);
    // console.log('this.camera', this.camera);

    this.camera.position.x += ( this.mouseX - this.camera.position.x ) * 0.5;
    this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * 0.5;

    this.scene.children[0].rotation.y += 0.002;

    this.renderer.render(this.scene, this.camera);
  }

}
