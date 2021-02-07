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

  scene;
  camera;
  renderer;

  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();
  objects = [];

  constructor(
    private addSvgIconService: AddSvgIconService,
    private renderer2: Renderer2,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addSvgIcon();
  }

  ngAfterViewInit(): void {
    this.initView();
  }

  /** 加入svg */
  addSvgIcon() {
    this.addSvgIconService.addSvgIcon('face_home_no_mouth');
    this.addSvgIconService.addSvgIcon('heart');
    this.addSvgIconService.addSvgIcon('logo');
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
    this.renderer.setClearColor('#FFDED7');  // 設定背景色
    this.renderer.setSize(window.innerWidth, window.innerHeight); // 設定畫布為瀏覽器大小
    this.renderer2.appendChild(this.threeJsWrap.nativeElement, this.renderer.domElement);

    this.addDiamondMesh();
    this.setDiamondNavWord();

    // 5.監聽滑鼠移動事件
    window.addEventListener('click', (event) => this.onMouseClick(event), false);
    window.addEventListener('resize', () => this.onWindowResize(), false);
    window.addEventListener('mousemove', (event) => this.onMouseMove(event), false);
    this.animate3();
  }

  /** 2-1.建立物件加入場景：加入鑽石到場景 */
  addDiamondMesh() {
    // 建立材質：共用線框材質
    const materialWire = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });
    // 建立材質：建立一張canvas漸層顏色材質
    const canvasColorForClothAnalysis = [
      { stop: 0, color: '#DCC4F3' },
      { stop: 0.5, color: '#C0E4F9' },
      { stop: 0.7, color: '#007CC0' },
      { stop: 0.8, color: '#C0E4F9' },
      { stop: 1, color: '#6EC6F6' },
    ];
    const materialForClothAnalysis = this.creatCanvasMaterial(canvasColorForClothAnalysis);

    // 建立物件並貼材質：衣物分析鑽石========================================
    const geometryForClothAnalysisTop = new THREE.ConeBufferGeometry(10, 5, 8, 1, true);
    const geometryForClothAnalysisBottom = new THREE.CylinderBufferGeometry(10, 0, 20, 8, 1, true);
    const diamondForClothAnalysis = new THREE.Object3D();

    // const clothAnalysisParams = {
    //   parentMesh: diamondForClothAnalysis,
    //   geometry: geometryForClothAnalysisTop,
    //   material: materialForClothAnalysis,
    //   name: 'cloth-analysis',
    //   position: [0, -5, 0],
    // };

    this.addMeshIntoGroup(diamondForClothAnalysis, geometryForClothAnalysisTop, materialForClothAnalysis, 'cloth-analysis', [0, -5, 0]);
    this.addMeshIntoGroup(diamondForClothAnalysis, geometryForClothAnalysisTop, materialWire, 'cloth-analysis', [0, -5, 0]);
    this.addMeshIntoGroup(diamondForClothAnalysis, geometryForClothAnalysisBottom, materialForClothAnalysis, 'cloth-analysis', [0, -17.5, 0]);
    this.addMeshIntoGroup(diamondForClothAnalysis, geometryForClothAnalysisBottom, materialWire, 'cloth-analysis', [0, -17.5, 0]);
    this.addDiamondGroupIntoScene(diamondForClothAnalysis, [-30, 47, 0]);

    // 投稿故事鑽石========================================
    // 建立材質：建立一張canvas漸層顏色材質
    const canvasColorForShareYours = [
      { stop: 0, color: '#EEF4BA' },
      { stop: 0.5, color: '#C0DAAF' },
      { stop: 0.8, color: '#BBEADE' },
      { stop: 1, color: '#F9FFE8' },
    ];
    const materialForShareYours = this.creatCanvasMaterial(canvasColorForShareYours);

    // 建立物件並貼材質
    const geometryForShareYoursTop = new THREE.CylinderBufferGeometry(5, 10, 5, 6, 1);
    const geometryForShareYoursBottom = new THREE.CylinderBufferGeometry(10, 0, 10, 6, 1);
    const diamondForShareYours = new THREE.Object3D();

    this.addMeshIntoGroup(diamondForShareYours, geometryForShareYoursTop, materialForShareYours, 'share-yours', [0, -2.5, 0]);
    this.addMeshIntoGroup(diamondForShareYours, geometryForShareYoursTop, materialWire, 'share-yours', [0, -2.5, 0]);
    this.addMeshIntoGroup(diamondForShareYours, geometryForShareYoursBottom, materialForShareYours, 'share-yours', [0, -10, 0]);
    this.addMeshIntoGroup(diamondForShareYours, geometryForShareYoursBottom, materialWire, 'share-yours', [0, -10, 0]);
    this.addDiamondGroupIntoScene(diamondForShareYours, [60, 10, 0]);

    // 隨機搭配鑽石========================================
    // 建立材質：建立一張canvas漸層顏色材質
    const canvasColorForRandomMatch = [
      { stop: 0, color: '#CCE0EB' },
      { stop: 0.5, color: '#60BCC1' },
      { stop: 0.8, color: '#C1EAD3' },
      { stop: 1, color: '#6ABFCB' },
    ];
    const materialForRandomMatch = this.creatCanvasMaterial(canvasColorForRandomMatch);

    // 建立物件並貼材質
    const geometryForRandomMatchTop = new THREE.CylinderBufferGeometry(0, 6, 5, 6, 1);
    const geometryForRandomMatchCenter = new THREE.CylinderBufferGeometry(6, 6, 12, 6, 1);
    const geometryForRandomMatchBottom = new THREE.CylinderBufferGeometry(6, 0, 5, 6, 1);
    const diamondForRandomMatch = new THREE.Object3D();

    this.addMeshIntoGroup(diamondForRandomMatch, geometryForRandomMatchTop, materialForRandomMatch, 'random-match', [0, 8.5, 0]);
    this.addMeshIntoGroup(diamondForRandomMatch, geometryForRandomMatchTop, materialWire, 'random-match', [0, 8.5, 0]);
    this.addMeshIntoGroup(diamondForRandomMatch, geometryForRandomMatchCenter, materialForRandomMatch, 'random-match', [0, 0, 0]);
    this.addMeshIntoGroup(diamondForRandomMatch, geometryForRandomMatchCenter, materialWire, 'random-match', [0, 0, 0]);
    this.addMeshIntoGroup(diamondForRandomMatch, geometryForRandomMatchBottom, materialForRandomMatch, 'random-match', [0, -8.5, 0]);
    this.addMeshIntoGroup(diamondForRandomMatch, geometryForRandomMatchBottom, materialWire, 'random-match', [0, -8.5, 0]);
    this.addDiamondGroupIntoScene(diamondForRandomMatch, [30, 35, 0]);


    // 詳細故事鑽石========================================
    // 建立材質：建立一張canvas漸層顏色材質
    const canvasColorForAllStory = [
      { stop: 0, color: '#FAE6E9' },
      { stop: 0.5, color: '#DDA2B1' },
      { stop: 0.8, color: '#DCD1E8' },
      { stop: 1, color: '#C9B4D7' },
    ];
    const materialForAllStory = this.creatCanvasMaterial(canvasColorForAllStory);
    // 建立物件並貼材質
    const geometryForAllStoryTop = new THREE.CylinderBufferGeometry(8, 12, 4, 8, 1);
    const geometryForAllStoryBottom = new THREE.CylinderBufferGeometry(12, 8, 4, 8, 1);
    const diamondForAllStory = new THREE.Object3D();
    diamondForAllStory.name = 'all-story-wrap';

    this.addMeshIntoGroup(diamondForAllStory, geometryForAllStoryTop, materialForAllStory, 'all-story', [0, 2, 0]);
    this.addMeshIntoGroup(diamondForAllStory, geometryForAllStoryTop, materialWire, 'all-story', [0, 2, 0]);
    this.addMeshIntoGroup(diamondForAllStory, geometryForAllStoryBottom, materialForAllStory, 'all-story', [0, -2, 0]);
    this.addMeshIntoGroup(diamondForAllStory, geometryForAllStoryBottom, materialWire, 'all-story', [0, -2, 0]);
    this.addDiamondGroupIntoScene(diamondForAllStory, [-60, 0, 0]);

  }

  /** 2-1-(1)建立漸層材質 */
  creatCanvasMaterial(colorStopAry: Array<any>) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 12;
    canvas.height = 12;

    const gradient = ctx.createLinearGradient(0, 0, 0, 12);
    colorStopAry.forEach(v => {
      gradient.addColorStop(v.stop, v.color);
    });

    ctx.fillStyle = gradient;  // 填滿顏色
    ctx.fillRect(0, 0, 100, 100);

    const textureCanvas = new THREE.CanvasTexture(canvas);
    const materialCanvas = new THREE.MeshBasicMaterial({ map: textureCanvas });
    return materialCanvas;
  }

  /** 2-1-(2)建立鑽石元件加入到群組
   * @param parentMesh mesh父群組
   * @param geometry 形狀
   * @param material 材質
   * @param name 命名
   * @param position 在父群組內的位置
   */
  addMeshIntoGroup(parentMesh, geometry, material, name: string, position: Array<number>) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position[0], position[1], position[2]);
    mesh.name = name;
    parentMesh.add(mesh);
    // mesh.userData.parent = parentMesh;
  }

  /** 2-1-(3)鑽石群組加入到場景
   * @param group mesh父群組
   * @param position 在場景的位置
   */
  addDiamondGroupIntoScene(group, position: Array<number>) {
    group.rotation.set(1 / 10 * Math.PI, 0, 1 / 10 * Math.PI);
    group.position.set(position[0], position[1], position[2]);
    this.scene.add(group);
    this.objects.push(group);
  }

  /** 2-2.建立物件加入場景：鑽石導覽列文字 */
  setDiamondNavWord() {
    const textLoader = new THREE.FontLoader();
    textLoader.load('assets/fonts/HanWangHeiLight_Regular.json', font => {
      // console.log('font', font);
      // 文字共用材質
      const textMaterial = new THREE.MeshPhongMaterial(
        { color: 0xff0000, specular: 0xffffff }
      );

      this.addTextMesh('詳細故事', textMaterial, 'all-story', [-60, -10, 20], font);
      this.addTextMesh('衣物分析', textMaterial, 'cloth-analysis', [-30, 20, 20], font);
      this.addTextMesh('隨機搭配', textMaterial, 'random-match', [20, 20, 20], font);
      this.addTextMesh('投稿故事', textMaterial, 'share-yours', [50, -10, 20], font);
    });
  }

  /** 2-2-(1)建立文字加入到場景
   * @param text 文字
   * @param material 材質
   * @param name 命名
   * @param position 位置
   * @param position 字體
   */
  addTextMesh(text: string, material, name: string, position, font) {
    const textGeometry = new THREE.TextGeometry(text, {
      font: font,
      size: 2,
      height: 0,
    });
    const meshText = new THREE.Mesh(textGeometry, material);
    meshText.position.set(position[0], position[1], position[2]);
    meshText.name = name;
    this.scene.add(meshText);
    this.objects.push(meshText);
  }

  onMouseClick(event: MouseEvent) {
    // console.log('event', event);
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // update the picking ray with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);
    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.objects, true);
    // console.log('this.objects', this.objects);
    // console.log('intersects', intersects);

    if (intersects[0]) {
      const selectedName = intersects[0].object.name;
      switch (selectedName) {
        case 'all-story':
          console.log('/all-story');
          this.router.navigate(['/all-story']);
          break;
        case 'cloth-analysis':
          console.log('/cloth-analysis');
          this.router.navigate(['/cloth-analysis']);
          break;
        case 'random-match':
          console.log('random-match');
          this.router.navigate(['/random-match']);
          break;
        case 'share-yours':
          console.log('share-yours');
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
    this.renderer.setSize(window.innerWidth, window.innerHeight);
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
    // 1. 眼睛動畫
    // 眼睛移動範圍：上下10-21%(11%)，左右30-36%(6%)
    const eyesPositionY = 10 + (event.pageY / window.innerHeight) * 11 + '%';
    const eyesPositionXLeft = 30 + (event.pageX / window.innerWidth) * 6 + '%';
    const eyesPositionXRight = 36 - (event.pageX / window.innerWidth) * 6 + '%';

    this.renderer2.setStyle(this.heartLeft.nativeElement, 'top', eyesPositionY);
    this.renderer2.setStyle(this.heartLeft.nativeElement, 'left', eyesPositionXLeft);
    this.renderer2.setStyle(this.heartRight.nativeElement, 'top', eyesPositionY);
    this.renderer2.setStyle(this.heartRight.nativeElement, 'right', eyesPositionXRight);



    // 2. mouse: cursor
    // 3.互動動畫

    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    // update the picking ray with the camera and mouse position
    this.raycaster.setFromCamera(this.mouse, this.camera);
    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.objects, true);


    if (intersects[0]) {
      this.renderer2.setStyle(this.threeJsWrap.nativeElement, 'cursor', 'pointer');
      this.addStar();
    } else {
      this.renderer2.setStyle(this.threeJsWrap.nativeElement, 'cursor', 'default');
    }
  }


  addStar() {
    console.log('hi');
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const materials = [];
    const textureLoader = new THREE.TextureLoader();
    const star = textureLoader.load('assets/images/star.png');

    for (let i = 0; i < 10; i++) {
      // const x = Math.random() * 20;
      // const y = Math.random() * 20;
      // const z = Math.random() * 20;
      const x = 0;
      const y = 0;
      const z = 0;


      vertices.push(x, y, z);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const color = [0.90, 0.05, 0.5];
    const size = 100;

    // materials[0] = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: star, alphaTest: 0.8, transparent: false, color: 0xFFFF00 } );
    materials[0] = new THREE.PointsMaterial({ size: 35, sizeAttenuation: true, map: star, alphaTest: 0.8, transparent: false });
    // materials[0].color.setRGB( 1, 0, 0 );
    materials[0].color.setHex(0xFFFF00);
    const particles = new THREE.Points(geometry, materials[0]);

    // particles.rotation.x = Math.random() * 6;
    // particles.rotation.y = Math.random() * 6;
    // particles.rotation.z = Math.random() * 6;

    particles.position.set(-60, 30, 0);

    this.scene.add(particles);
    this.camera.updateProjectionMatrix();

    console.log('this.scene', this.scene);

  }



}
