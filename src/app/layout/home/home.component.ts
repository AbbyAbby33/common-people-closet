import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { AddSvgIconService } from '@app/core/service-front/add-svg-icon.service';
import * as THREE from 'three';
import { Router } from '@angular/router';

@Component({
  selector: 'cpc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('threeJsWrap') threeJsWrap: ElementRef;
  @ViewChild('heartLeft') heartLeft: ElementRef;
  @ViewChild('heartRight') heartRight: ElementRef;

  // 宣告全域變數
  scene;
  camera;
  renderer;
  geometry;
  material;
  mesh;
  mesh2;
  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();
  objects = [];

  container;
  container2;

  camera2;
  textGeometry;

  constructor(
    private addSvgIconService: AddSvgIconService,
    private renderer2: Renderer2,
    private router: Router,
    private element: ElementRef,
  ) { }

  ngOnInit(): void {
    this.addSvgIconService.addSvgIcon('face_home_no_mouth');
    this.addSvgIconService.addSvgIcon('heart');
    this.addSvgIconService.addSvgIcon('logo');
  }

  ngAfterViewInit(): void {
    this.initView();
    this.setDiamondNavWord();
  }

  initView() {
    // 1.建立場景
    this.scene = new THREE.Scene();

    // 2.建立相機
    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 150;

    // 3.建立物件加入場景
    // 3-1.建立一張canvas漸層顏色
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 12;
    canvas.height = 12;

    const gradient = ctx.createLinearGradient(0, 0, 0, 10);
    gradient.addColorStop(0, '#DCC4F3');
    gradient.addColorStop(0.5, '#C0E4F9');
    gradient.addColorStop(0.7, '#007CC0');
    gradient.addColorStop(0.8, '#C0E4F9');
    gradient.addColorStop(1, '#6EC6F6');

    ctx.fillStyle = gradient;  // 填滿顏色
    ctx.fillRect(0, 0, 175, 100);

    const textureCanvas = new THREE.CanvasTexture(canvas);
    const materialCanvas = new THREE.MeshBasicMaterial({ map: textureCanvas });
    const materialWire = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });

    // 3-2.建立物件並貼材質

    // 鑽石一========================================
    const geometryTop1 = new THREE.ConeBufferGeometry(10, 5, 8, 1, true);
    const geometryBottom1 = new THREE.CylinderBufferGeometry(10, 0, 20, 8, 1, true);
    const diamond1 = new THREE.Object3D();

    const meshTop1 = new THREE.Mesh(geometryTop1, materialCanvas);
    meshTop1.position.set(0, -5, 0);
    meshTop1.userData.parent = diamond1;
    const meshTopWire1 = new THREE.Mesh(geometryTop1, materialWire);
    meshTopWire1.position.set(0, -5, 0);
    meshTopWire1.userData.parent = diamond1;
    const meshBottom1 = new THREE.Mesh(geometryBottom1, materialCanvas);
    meshBottom1.position.set(0, -17.5, 0);
    meshBottom1.userData.parent = diamond1;
    const meshBottomWire1 = new THREE.Mesh(geometryBottom1, materialWire);
    meshBottomWire1.position.set(0, -17.5, 0);
    meshBottomWire1.userData.parent = diamond1;

    diamond1.name = 'option1';

    diamond1.add(meshTop1);
    diamond1.add(meshTopWire1);
    diamond1.add(meshBottom1);
    diamond1.add(meshBottomWire1);

    diamond1.rotation.set(1 / 10 * Math.PI, 0, 1 / 10 * Math.PI);
    diamond1.position.set(-30, 45, 0);

    this.scene.add(diamond1);
    this.objects.push(diamond1);
    meshTop1.name = 'option1';
    meshBottom1.name = 'option1';
    meshTopWire1.name = 'option1';
    meshBottomWire1.name = 'option1';


    // 鑽石二========================================
    const canvas2 = document.createElement('canvas');
    const ctx2 = canvas2.getContext('2d');
    canvas2.width = 12;
    canvas2.height = 12;

    const gradient2 = ctx2.createLinearGradient(0, 0, 0, 10);
    gradient2.addColorStop(0, '#EEF4BA');
    gradient2.addColorStop(0.5, '#C0DAAF');
    gradient2.addColorStop(0.8, '#BBEADE');
    gradient2.addColorStop(1, '#F9FFE8');

    ctx2.fillStyle = gradient2;  // 填滿顏色
    ctx2.fillRect(0, 0, 175, 100);

    const textureCanvas2 = new THREE.CanvasTexture(canvas2);
    const materialCanvas2 = new THREE.MeshBasicMaterial({ map: textureCanvas2 });



    const geometryTop2 = new THREE.CylinderBufferGeometry(5, 10, 5, 6, 1);
    const geometryBottom2 = new THREE.CylinderBufferGeometry(10, 0, 10, 6, 1);
    const diamond2 = new THREE.Object3D();

    const meshTop2 = new THREE.Mesh(geometryTop2, materialCanvas2);
    meshTop2.position.set(0, -2.5, 0);
    meshTop2.userData.parent = diamond2;
    const meshTopWire2 = new THREE.Mesh(geometryTop2, materialWire);
    meshTopWire2.position.set(0, -2.5, 0);
    meshTopWire2.userData.parent = diamond2;
    const meshBottom2 = new THREE.Mesh(geometryBottom2, materialCanvas2);
    meshBottom2.position.set(0, -10, 0);
    meshBottom2.userData.parent = diamond2;
    const meshBottomWire2 = new THREE.Mesh(geometryBottom2, materialWire);
    meshBottomWire2.position.set(0, -10, 0);
    meshBottomWire2.userData.parent = diamond2;

    diamond2.add(meshTop2);
    diamond2.add(meshTopWire2);
    diamond2.add(meshBottom2);
    diamond2.add(meshBottomWire2);

    diamond2.rotation.set(1 / 10 * Math.PI, 0, 1 / 10 * Math.PI);
    diamond2.position.set(60, 10, 0);

    this.scene.add(diamond2);
    this.objects.push(diamond2);
    meshTop2.name = 'option2';
    meshBottom2.name = 'option2';
    meshTopWire2.name = 'option2';
    meshBottomWire2.name = 'option2';


    // 鑽石三========================================
    const canvas3 = document.createElement('canvas');
    const ctx3 = canvas3.getContext('2d');
    canvas3.width = 12;
    canvas3.height = 12;

    const gradient3 = ctx3.createLinearGradient(0, 0, 0, 10);
    gradient3.addColorStop(0, '#CCE0EB');
    gradient3.addColorStop(0.5, '#60BCC1');
    gradient3.addColorStop(0.8, '#C1EAD3');
    gradient3.addColorStop(1, '#6ABFCB');

    ctx3.fillStyle = gradient3;  // 填滿顏色
    ctx3.fillRect(0, 0, 175, 100);

    const textureCanvas3 = new THREE.CanvasTexture(canvas3);
    const materialCanvas3 = new THREE.MeshBasicMaterial({ map: textureCanvas3 });



    const geometryTop3 = new THREE.CylinderBufferGeometry(0, 6, 5, 6, 1);
    const geometryCenter3 = new THREE.CylinderBufferGeometry(6, 6, 12, 6, 1);
    const geometryBottom3 = new THREE.CylinderBufferGeometry(6, 0, 5, 6, 1);
    const diamond3 = new THREE.Object3D();

    const meshTop3 = new THREE.Mesh(geometryTop3, materialCanvas3);
    meshTop3.position.set(0, 8.5, 0);
    meshTop3.userData.parent = diamond3;
    const meshTopWire3 = new THREE.Mesh(geometryTop3, materialWire);
    meshTopWire3.position.set(0, 8.5, 0);
    meshTopWire3.userData.parent = diamond3;
    const meshCenter3 = new THREE.Mesh(geometryCenter3, materialCanvas3);
    // meshCenter3.position.set(0, 0, 0);
    meshCenter3.userData.parent = diamond3;
    const meshCenterWire3 = new THREE.Mesh(geometryCenter3, materialWire);
    // meshCenterWire3.position.set(0, 0, 0);
    meshCenterWire3.userData.parent = diamond3;
    const meshBottom3 = new THREE.Mesh(geometryBottom3, materialCanvas3);
    meshBottom3.position.set(0, -8.5, 0);
    meshBottom3.userData.parent = diamond3;
    const meshBottomWire3 = new THREE.Mesh(geometryBottom3, materialWire);
    meshBottomWire3.position.set(0, -8.5, 0);
    meshBottomWire3.userData.parent = diamond3;


    diamond3.add(meshTop3);
    diamond3.add(meshTopWire3);
    diamond3.add(meshCenter3);
    diamond3.add(meshCenterWire3);
    diamond3.add(meshBottom3);
    diamond3.add(meshBottomWire3);

    diamond3.rotation.set(0, 0, 1 / 10 * Math.PI);
    diamond3.position.set(20, 35, 0);

    this.scene.add(diamond3);
    this.objects.push(diamond3);
    meshTop3.name = 'option3';
    meshBottom3.name = 'option3';
    meshCenter3.name = 'option3';
    meshCenterWire3.name = 'option3';
    meshTopWire3.name = 'option3';
    meshBottomWire3.name = 'option3';


    // 鑽石四========================================
    const canvas4 = document.createElement('canvas');
    const ctx4 = canvas4.getContext('2d');
    canvas4.width = 12;
    canvas4.height = 12;

    const gradient4 = ctx4.createLinearGradient(0, 0, 0, 10);
    gradient4.addColorStop(0, '#FAE6E9');
    gradient4.addColorStop(0.5, '#DDA2B1');
    gradient4.addColorStop(0.8, '#DCD1E8');
    gradient4.addColorStop(1, '#C9B4D7');

    ctx4.fillStyle = gradient4;  // 填滿顏色
    ctx4.fillRect(0, 0, 175, 100);

    const textureCanvas4 = new THREE.CanvasTexture(canvas4);
    const materialCanvas4 = new THREE.MeshBasicMaterial({ map: textureCanvas4 });




    const geometryTop4 = new THREE.CylinderBufferGeometry(8, 12, 4, 8, 1);
    const geometryBottom4 = new THREE.CylinderBufferGeometry(12, 8, 4, 8, 1);
    const diamond4 = new THREE.Object3D();

    const meshTop4 = new THREE.Mesh(geometryTop4, materialCanvas4);
    meshTop4.position.set(0, 2, 0);
    meshTop4.userData.parent = diamond4;
    const meshTopWire4 = new THREE.Mesh(geometryTop4, materialWire);
    meshTopWire4.position.set(0, 2, 0);
    meshTopWire4.userData.parent = diamond4;
    const meshBottom4 = new THREE.Mesh(geometryBottom4, materialCanvas4);
    meshBottom4.position.set(0, -2, 0);
    meshBottom4.userData.parent = diamond4;
    const meshBottomWire4 = new THREE.Mesh(geometryBottom4, materialWire);
    meshBottomWire4.position.set(0, -2, 0);
    meshBottomWire4.userData.parent = diamond4;

    diamond4.add(meshTop4);
    diamond4.add(meshTopWire4);
    diamond4.add(meshBottom4);
    diamond4.add(meshBottomWire4);

    diamond4.rotation.set(1 / 10 * Math.PI, 0, 1 / 10 * Math.PI);
    diamond4.position.set(-60, 0, 0);

    this.scene.add(diamond4);
    this.objects.push(diamond4);
    meshTop4.name = 'option4';
    meshBottom4.name = 'option4';
    meshTopWire4.name = 'option4';
    meshBottomWire4.name = 'option4';

    // 文字測試===============================================
    const loader = new THREE.FontLoader();

    loader.load( 'assets/fonts/HanWangHeiLight_Regular.json', font => {
      console.log('font', font);
      const textGeometry1 = new THREE.TextGeometry( '詳細故事', {
        font: font,
        size: 2,
        height: 0,
      } );
      const textGeometry2 = new THREE.TextGeometry( '衣物分析', {
        font: font,
        size: 2,
        height: 0,
      } );
      const textGeometry3 = new THREE.TextGeometry( '隨機搭配', {
        font: font,
        size: 2,
        height: 0,
      } );
      const textGeometry4 = new THREE.TextGeometry( '投稿故事', {
        font: font,
        size: 2,
        height: 0,
      } );
      const textMaterial = new THREE.MeshPhongMaterial(
        { color: 0xff0000, specular: 0xffffff }
      );
      const meshText1 = new THREE.Mesh(textGeometry1, textMaterial);
      meshText1.position.set(-60, -10, 20);
      const meshText2 = new THREE.Mesh(textGeometry2, textMaterial);
      meshText2.position.set(-30, 20, 20);
      const meshText3 = new THREE.Mesh(textGeometry3, textMaterial);
      meshText3.position.set(20, 20, 20);
      const meshText4 = new THREE.Mesh(textGeometry4, textMaterial);
      meshText4.position.set(50, -10, 20);

      diamond1.position.set(-30, 50, 0);
      diamond2.position.set(65, 5, 0);
      diamond3.position.set(30, 38, 0);
      diamond4.position.set(-60, 0, 0);


      this.scene.add(meshText1);
      this.scene.add(meshText2);
      this.scene.add(meshText3);
      this.scene.add(meshText4);

    } );

    // 4.建立繪圖器
    this.renderer = new THREE.WebGLRenderer({ antialias: true });  // 建立 WebGL 繪圖器
    this.renderer.setClearColor('#FFDED7');  // 設定背景色
    this.renderer.setSize(window.innerWidth, window.innerHeight); // 設定畫布為瀏覽器大小
    // document.body.appendChild(this.renderer.domElement); // 將畫布加入瀏覽器 DOM 中
    this.renderer2.appendChild(this.threeJsWrap.nativeElement, this.renderer.domElement);


    // 5.監聽滑鼠移動事件
    window.addEventListener('click', (event) => this.onMouseClick(event), false);
    window.addEventListener('resize', () => this.onWindowResize(), false );
    window.addEventListener('mousemove', (event) => this.onMouseMove(event), false );
    this.animate3();
  }

  /** 鑽石導覽列文字 */
  setDiamondNavWord() {

  }

  onMouseClick(event: MouseEvent) {
    // console.log('event', event);
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // update the picking ray with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);
    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.objects, true);


    if (intersects[0]) {
      const selectedName = intersects[0].object.name;
      switch (selectedName) {
        case 'option1':
          console.log('點到選擇1');
          this.router.navigate(['/all-story']);
          break;
        case 'option2':
          console.log('點到選擇2');
          this.router.navigate(['/cloth-analysis']);

          break;
        case 'option3':
          console.log('點到選擇3');
          this.router.navigate(['/random-match']);

          break;
        case 'option4':
          console.log('點到選擇4');
          this.router.navigate(['/share-yours']);

          break;
      }
    } else {
      console.log('沒有點到物體');
    }
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  animate3() {

    window.requestAnimationFrame(() => this.animate3());
    // console.log('this.scene', this.scene);
    // console.log('this.camera', this.camera);
    this.scene.children[0].rotation.y += 0.02;
    this.scene.children[1].rotation.y += 0.02;
    this.scene.children[2].rotation.y += 0.02;
    this.scene.children[3].rotation.y += 0.02;

    this.renderer.render(this.scene, this.camera);
  }

  /** 滑鼠移動 */
  onMouseMove(event: MouseEvent) {
    // 眼睛移動範圍：上下10-21%(11%)，左右30-36%(6%)
    const eyesPositionY = 10 + (event.pageY / window.innerHeight) * 11 + '%';
    const eyesPositionXLeft = 30 + (event.pageX / window.innerWidth) * 6 + '%';
    const eyesPositionXRight = 36 - (event.pageX / window.innerWidth) * 6 + '%';

    this.renderer2.setStyle(this.heartLeft.nativeElement, 'top', eyesPositionY);
    this.renderer2.setStyle(this.heartLeft.nativeElement, 'left', eyesPositionXLeft);
    this.renderer2.setStyle(this.heartRight.nativeElement, 'top', eyesPositionY);
    this.renderer2.setStyle(this.heartRight.nativeElement, 'right', eyesPositionXRight);



    // mouse: cursor
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // update the picking ray with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);
    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.objects, true);


    if (intersects[0]) {
      this.renderer2.setStyle(this.threeJsWrap.nativeElement, 'cursor', 'pointer');
    } else {
      this.renderer2.setStyle(this.threeJsWrap.nativeElement, 'cursor', 'default');
    }



  }

}
