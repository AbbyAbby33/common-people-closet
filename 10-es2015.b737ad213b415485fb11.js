(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{sKqT:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return v}));var o=n("PCNd"),a=n("rJuT"),i=n("tyNb"),r=n("Womt"),s=n("fXoL"),c=n("Ykpw"),h=n("ofXK"),d=n("NFeN"),l=n("Xa2L");let p=(()=>{class t{constructor(t){this.addSvgIconService=t}ngOnInit(){this.addSvgIconService.addSvgIcon("logo")}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(c.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["cpc-loading-page"]],decls:13,vars:0,consts:[[1,"loading-page-wrap"],[1,"title-word-area"],[1,"title-wrap"],["svgIcon","logo"]],template:function(t,e){1&t&&(s.Tb(0,"section",0),s.Tb(1,"div"),s.Tb(2,"div",1),s.Tb(3,"div",2),s.Ob(4,"mat-icon",3),s.Tb(5,"h1"),s.yc(6,"\u5e73\u6c11\u8863\u7269\u5206\u6790\u9593"),s.Sb(),s.Sb(),s.Tb(7,"p"),s.yc(8,"\u9673\u6021\u975c \u524d\u7aef\u5de5\u7a0b\u5e2b\u4f5c\u54c1 sk573129@gmail.com"),s.Sb(),s.Tb(9,"p"),s.Ob(10,"mat-spinner"),s.Tb(11,"span"),s.yc(12,"Loading"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb())},directives:[d.a,l.b],styles:[".loading-page-wrap[_ngcontent-%COMP%]{background-color:#e0a4a4;position:absolute;width:100%;height:100%;z-index:200}.loading-page-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:500px;height:300px;background-color:hsla(0,0%,100%,.5);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.loading-page-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > div.title-wrap[_ngcontent-%COMP%]{margin:50px 0 5px;color:#b63636}.loading-page-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > div.title-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:38px;height:auto;display:inline-block;margin-right:8px}.loading-page-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > div.title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;display:inline-block}.loading-page-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child{margin-top:40px;color:#b63636;font-size:24px}.loading-page-wrap[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{padding-left:12px}"]}),t})();const g=["threeJsWrap"],w=["heartLeft"],m=["heartRight"],u=["operateGuideWord"];function M(t,e){1&t&&s.Ob(0,"cpc-loading-page")}const C=[{path:"",component:(()=>{class t{constructor(t,e,n){this.addSvgIconService=t,this.renderer2=e,this.router=n,this.mouse=new r.r,this.raycaster=new r.n,this.objects=[],this.loading=!0}listenMouseClick(t){this.loading||this.onMouseClick(t)}listenMouseMove(t){this.loading||this.onMouseMove(t)}listenWindowResize(t){this.loading||this.onWindowResize()}ngOnInit(){this.addSvgIcon()}ngAfterViewInit(){this.initView()}addSvgIcon(){this.addSvgIconService.addSvgIcon("face_home_no_mouth"),this.addSvgIconService.addSvgIcon("heart"),this.addSvgIconService.addSvgIcon("logo")}initView(){this.scene=new r.o,this.camera=new r.k(50,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.z=150,this.renderer=new r.s({antialias:!0}),this.renderer.setClearColor("#F9E3BD"),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer2.appendChild(this.threeJsWrap.nativeElement,this.renderer.domElement),this.addDiamondMesh(),this.setDiamondNavWord(),this.animate3()}addDiamondMesh(){const t=new r.h({color:16777215,wireframe:!0}),e=this.creatCanvasMaterial([{stop:0,color:"#DCC4F3"},{stop:.5,color:"#C0E4F9"},{stop:.7,color:"#007CC0"},{stop:.8,color:"#C0E4F9"},{stop:1,color:"#6EC6F6"}]),n=new r.c(10,5,8,1,!0),o=new r.d(10,0,20,8,1,!0),a=new r.j;this.addMeshIntoGroup(a,n,e,"cloth-analysis",[0,-5,0]),this.addMeshIntoGroup(a,n,t,"cloth-analysis",[0,-5,0]),this.addMeshIntoGroup(a,o,e,"cloth-analysis",[0,-17.5,0]),this.addMeshIntoGroup(a,o,t,"cloth-analysis",[0,-17.5,0]),this.addDiamondGroupIntoScene(a,"cloth-analysis-wrap",[-30,47,0]);const i=this.creatCanvasMaterial([{stop:0,color:"#EEF4BA"},{stop:.5,color:"#C0DAAF"},{stop:.8,color:"#BBEADE"},{stop:1,color:"#F9FFE8"}]),s=new r.d(5,10,5,6,1),c=new r.d(10,0,10,6,1),h=new r.j;this.addMeshIntoGroup(h,s,i,"share-yours",[0,-2.5,0]),this.addMeshIntoGroup(h,s,t,"share-yours",[0,-2.5,0]),this.addMeshIntoGroup(h,c,i,"share-yours",[0,-10,0]),this.addMeshIntoGroup(h,c,t,"share-yours",[0,-10,0]),this.addDiamondGroupIntoScene(h,"share-yours-wrap",[65,5,0]);const d=this.creatCanvasMaterial([{stop:0,color:"#CCE0EB"},{stop:.5,color:"#60BCC1"},{stop:.8,color:"#C1EAD3"},{stop:1,color:"#6ABFCB"}]),l=new r.d(0,6,5,6,1),p=new r.d(6,6,12,6,1),g=new r.d(6,0,5,6,1),w=new r.j;this.addMeshIntoGroup(w,l,d,"random-match",[0,8.5,0]),this.addMeshIntoGroup(w,l,t,"random-match",[0,8.5,0]),this.addMeshIntoGroup(w,p,d,"random-match",[0,0,0]),this.addMeshIntoGroup(w,p,t,"random-match",[0,0,0]),this.addMeshIntoGroup(w,g,d,"random-match",[0,-8.5,0]),this.addMeshIntoGroup(w,g,t,"random-match",[0,-8.5,0]),this.addDiamondGroupIntoScene(w,"random-match-wrap",[30,35,0]);const m=this.creatCanvasMaterial([{stop:0,color:"#FAE6E9"},{stop:.5,color:"#DDA2B1"},{stop:.8,color:"#DCD1E8"},{stop:1,color:"#C9B4D7"}]),u=new r.d(8,12,4,8,1),M=new r.d(12,8,4,8,1),C=new r.j;this.addMeshIntoGroup(C,u,m,"all-story",[0,2,0]),this.addMeshIntoGroup(C,u,t,"all-story",[0,2,0]),this.addMeshIntoGroup(C,M,m,"all-story",[0,-2,0]),this.addMeshIntoGroup(C,M,t,"all-story",[0,-2,0]),this.addDiamondGroupIntoScene(C,"all-story-wrap",[-60,0,0])}creatCanvasMaterial(t){const e=document.createElement("canvas"),n=e.getContext("2d");e.width=12,e.height=12;const o=n.createLinearGradient(0,0,0,12);t.forEach(t=>{o.addColorStop(t.stop,t.color)}),n.fillStyle=o,n.fillRect(0,0,100,100);const a=new r.b(e);return new r.h({map:a})}addMeshIntoGroup(t,e,n,o,a){const i=new r.g(e,n);i.position.set(a[0],a[1],a[2]),i.name=o,t.add(i)}addDiamondGroupIntoScene(t,e,n){t.rotation.set(.1*Math.PI,0,.1*Math.PI),t.position.set(n[0],n[1],n[2]),this.scene.add(t),this.objects.push(t)}setDiamondNavWord(){(new r.f).load("assets/fonts/HanWangHeiLight_Regular.json",t=>{const e=new r.i({color:16711680,specular:16777215});this.addTextMesh("\u8a73\u7d30\u6545\u4e8b",e,"all-story",[-60,-10,20],t),this.addTextMesh("\u8863\u7269\u5206\u6790",e,"cloth-analysis",[-30,20,20],t),this.addTextMesh("\u96a8\u6a5f\u642d\u914d",e,"random-match",[20,20,20],t),this.addTextMesh("\u6295\u7a3f\u6545\u4e8b",e,"share-yours",[50,-10,20],t)})}addTextMesh(t,e,n,o,a){const i=new r.p(t,{font:a,size:2,height:0}),s=new r.g(i,e);s.position.set(o[0],o[1],o[2]),s.name=n,this.scene.add(s),this.objects.push(s)}onMouseClick(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-t.clientY/window.innerHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const e=this.raycaster.intersectObjects(this.objects,!0);if(console.log("intersects",e),e[0])switch(e[0].object.name){case"all-story":console.log("/all-story"),this.router.navigate(["/all-story"]);break;case"cloth-analysis":console.log("/cloth-analysis"),this.router.navigate(["/cloth-analysis"]);break;case"random-match":console.log("random-match"),this.router.navigate(["/random-match"]);break;case"share-yours":console.log("share-yours"),this.router.navigate(["/share-yours"])}}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate3(){window.requestAnimationFrame(()=>this.animate3()),this.scene.children[0].rotation.y+=.02,this.scene.children[1].rotation.y+=.02,this.scene.children[2].rotation.y+=.02,this.scene.children[3].rotation.y+=.02,this.scene.children[8]&&(this.scene.children[8].rotation.y-=.002),this.renderer.render(this.scene,this.camera),setTimeout(()=>{this.loading=!1})}onMouseMove(t){const e=7+t.pageY/window.innerHeight*6+"%",n=30+t.pageX/window.innerWidth*6+"%",o=36-t.pageX/window.innerWidth*6+"%";this.renderer2.setStyle(this.heartLeft.nativeElement,"top",e),this.renderer2.setStyle(this.heartLeft.nativeElement,"left",n),this.renderer2.setStyle(this.heartRight.nativeElement,"top",e),this.renderer2.setStyle(this.heartRight.nativeElement,"right",o),this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-t.clientY/window.innerHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const a=this.raycaster.intersectObjects(this.objects,!0);if(a[0]){if(this.renderer2.setStyle(this.threeJsWrap.nativeElement,"cursor","pointer"),!this.diamondHover){const t=a[0].object.name;this.diamondHover=t,this.changeBackground(t),this.addStar()}}else this.renderer2.setStyle(this.threeJsWrap.nativeElement,"cursor","default"),this.diamondHover=null,this.renderer.setClearColor("#F9E3BD"),this.removeStar()}changeBackground(t){switch(t){case"all-story":this.renderer.setClearColor("#FFDED7");break;case"cloth-analysis":this.renderer.setClearColor("#C0BADD");break;case"random-match":this.renderer.setClearColor("#CCE0EB");break;case"share-yours":this.renderer.setClearColor("#B5CAA0")}}addStar(){const t=(new r.q).load("assets/images/icon/star.png"),e=new r.a,n=new r.m({size:5,sizeAttenuation:!0,map:t,alphaTest:.8,transparent:!1,color:16774817}),o=this.newStarPosition(1e3);e.setAttribute("position",new r.e(o,3));const a=new r.l(e,n);a.name="star-group",this.scene.add(a)}newStarPosition(t){const e=[];for(let n=0;n<t;n++){let o=150*Math.random(),a=150*Math.random(),i=150*Math.random();n<t/4?(o=-o,n<t/4-t/8&&(i=-i)):t/4<=n&&n<t/4*2?(a=-a,n<t/4*2-t/8&&(i=-i)):t/4*2<=n&&n<t/4*3?(o=-o,a=-a,n<t/4*3-t/8&&(i=-i)):n<t/4*4-t/8&&(i=-i),e.push(o,a,i)}return e}removeStar(){const t=this.scene.getObjectByName("star-group");this.scene.remove(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(c.a),s.Nb(s.F),s.Nb(i.b))},t.\u0275cmp=s.Hb({type:t,selectors:[["cpc-home"]],viewQuery:function(t,e){var n;1&t&&(s.Bc(g,!0),s.Bc(w,!0),s.Bc(m,!0),s.Bc(u,!0)),2&t&&(s.nc(n=s.cc())&&(e.threeJsWrap=n.first),s.nc(n=s.cc())&&(e.heartLeft=n.first),s.nc(n=s.cc())&&(e.heartRight=n.first),s.nc(n=s.cc())&&(e.operateGuideWord=n.first))},hostBindings:function(t,e){1&t&&s.bc("click",(function(t){return e.listenMouseClick(t)}))("mousemove",(function(t){return e.listenMouseMove(t)}))("resize",(function(t){return e.listenWindowResize(t)}),!1,s.qc)},decls:19,vars:1,consts:[[1,"home-wrap"],[1,"three-js-wrap"],["threeJsWrap",""],[4,"ngIf"],[1,"face-wrap"],["svgIcon","face_home_no_mouth",1,"face-home"],[1,"heart-wrap","heart-wrap-left"],["heartLeft",""],["svgIcon","heart"],[1,"heart-wrap","heart-wrap-right"],["heartRight",""],[1,"title-word-area"],[1,"title-wrap"],["svgIcon","logo"]],template:function(t,e){1&t&&(s.Tb(0,"section",0),s.Tb(1,"div",1,2),s.xc(3,M,1,0,"cpc-loading-page",3),s.Sb(),s.Tb(4,"div",4),s.Ob(5,"mat-icon",5),s.Tb(6,"div",6,7),s.Ob(8,"mat-icon",8),s.Sb(),s.Tb(9,"div",9,10),s.Ob(11,"mat-icon",8),s.Sb(),s.Tb(12,"div",11),s.Tb(13,"div",12),s.Ob(14,"mat-icon",13),s.Tb(15,"h1"),s.yc(16,"\u5e73\u6c11\u8863\u7269\u5206\u6790\u9593"),s.Sb(),s.Sb(),s.Tb(17,"p"),s.yc(18,"\u9673\u6021\u975c \u524d\u7aef\u5de5\u7a0b\u5e2b\u4f5c\u54c1 sk573129@gmail.com"),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Cb(3),s.kc("ngIf",e.loading))},directives:[h.k,d.a,p],styles:[".home-wrap[_ngcontent-%COMP%]{position:relative}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-20%);text-align:center;z-index:10;display:inline-block;width:650px}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   mat-icon.face-home[_ngcontent-%COMP%]{color:#e0a4a4;width:50%;height:auto}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   .heart-wrap[_ngcontent-%COMP%]{position:absolute;width:5%;top:10%}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   .heart-wrap.heart-wrap-left[_ngcontent-%COMP%]{left:32%}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   .heart-wrap.heart-wrap-right[_ngcontent-%COMP%]{right:34%}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   .heart-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#db2b28;width:100%;height:auto}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > div.title-wrap[_ngcontent-%COMP%]{margin:10px 0 5px;color:#b63636}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > div.title-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:38px;height:auto;display:inline-block;margin-right:8px}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > div.title-wrap[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:50px;display:inline-block}.home-wrap[_ngcontent-%COMP%]   .face-wrap[_ngcontent-%COMP%]   div.title-word-area[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:18px}"]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(C)],i.e]}),t})(),v=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},providers:[],imports:[[o.a,a.a,b]]}),t})()}}]);