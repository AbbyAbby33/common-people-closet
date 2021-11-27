function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"A//M":function(e,t,n){"use strict";n.r(t),n.d(t,"RandomMatchModule",(function(){return f}));var i,a,r,o=n("PCNd"),s=n("tyNb"),c=n("Womt"),h=n("fXoL"),m=n("sxBl"),d=n("l+i6"),u=n("XiUz"),p=["threeJsWrap"],w=[{path:"",component:(i=function(){function e(t,n){_classCallCheck(this,e),this.renderer2=t,this.userOperateInfoService=n,this.mouse=new c.r,this.raycaster=new c.n,this.objects=[],this.mouseX=0,this.mouseY=0}return _createClass(e,[{key:"listenPointerMove",value:function(e){this.onPointerMove(e)}},{key:"listenWindowResize",value:function(e){this.onWindowResize()}},{key:"ngOnInit",value:function(){this.userOperateInfoService.changePage("random-match")}},{key:"ngAfterViewInit",value:function(){this.initView()}},{key:"initView",value:function(){this.scene=new c.o,this.camera=new c.k(50,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.z=200,this.camera.lookAt(this.scene.position),this.renderer=new c.s({antialias:!0}),this.renderer.setClearColor("#F9E3BD"),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer2.appendChild(this.threeJsWrap.nativeElement,this.renderer.domElement),this.addDiamondMesh(),this.animate3()}},{key:"addDiamondMesh",value:function(){for(var e=new c.j,t=this.newPosition(100),n=0;n<100;n++){var i=this.createOneDiamond(),a=3*(n+1);i.position.set(t[a-2],t[a-1],t[a]),e.add(i)}this.scene.add(e)}},{key:"createOneDiamond",value:function(){var e=new c.h({color:16777215,wireframe:!0}),t=new c.d(25,50,25,6,1,!0),n=new c.d(50,0,50,6,1,!0),i=new c.j,a=new c.g(t,e);a.position.set(0,-12.5,0);var r=new c.g(n,e);return r.position.set(0,-50,0),i.add(a),i.add(r),i}},{key:"newPosition",value:function(e){for(var t=[],n=0;n<e;n++){var i=800*Math.random(),a=800*Math.random(),r=800*Math.random();n<e/4?(i=-i,n<e/4-e/8&&(r=-r)):e/4<=n&&n<e/4*2?(a=-a,n<e/4*2-e/8&&(r=-r)):e/4*2<=n&&n<e/4*3?(i=-i,a=-a,n<e/4*3-e/8&&(r=-r)):n<e/4*4-e/8&&(r=-r),t.push(i,a,r)}return t}},{key:"onPointerMove",value:function(e){if(!1!==e.isPrimary){var t=window.innerWidth/2,n=window.innerHeight/2;this.mouseX=e.clientX-t,this.mouseY=e.clientY-n}}},{key:"onWindowResize",value:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"animate3",value:function(){var e=this;window.requestAnimationFrame((function(){return e.animate3()})),this.camera.position.x+=.5*(this.mouseX-this.camera.position.x),this.camera.position.y+=.5*(-this.mouseY-this.camera.position.y),this.scene.children[0].rotation.y+=.002,this.renderer.render(this.scene,this.camera)}}]),e}(),i.\u0275fac=function(e){return new(e||i)(h.Nb(h.F),h.Nb(m.a))},i.\u0275cmp=h.Hb({type:i,selectors:[["cpc-random-match"]],viewQuery:function(e,t){var n;1&e&&h.Bc(p,!0),2&e&&h.nc(n=h.cc())&&(t.threeJsWrap=n.first)},hostBindings:function(e,t){1&e&&h.bc("pointermove",(function(e){return t.listenPointerMove(e)}))("resize",(function(e){return t.listenWindowResize(e)}),!1,h.qc)},decls:17,vars:1,consts:[[1,"three-js-wrap"],["threeJsWrap",""],[1,"random-match-wrap"],[3,"pageTitleName"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","32px",1,"match-item-wrap"],[1,"match-item"],["src","./assets/images/cloth/aaaa-0000-0001.jpg","alt","\u66ff\u4ee3\u6587\u5b57"]],template:function(e,t){1&e&&(h.Ob(0,"div",0,1),h.Tb(2,"section",2),h.Ob(3,"cpc-page-title",3),h.Tb(4,"div",4),h.Tb(5,"div",5),h.Ob(6,"img",6),h.Tb(7,"p"),h.yc(8,"\u5916\u5957/\u914d\u4ef6"),h.Sb(),h.Sb(),h.Tb(9,"div",5),h.Ob(10,"img",6),h.Tb(11,"p"),h.yc(12,"\u4e0a\u8863/\u6d0b\u88dd"),h.Sb(),h.Sb(),h.Tb(13,"div",5),h.Ob(14,"img",6),h.Tb(15,"p"),h.yc(16,"\u8932\u5b50/\u914d\u4ef6"),h.Sb(),h.Sb(),h.Sb(),h.Sb()),2&e&&(h.Cb(3),h.kc("pageTitleName","\u96a8\u6a5f\u642d\u914d"))},directives:[d.a,u.b,u.a,u.c],styles:[".random-match-wrap[_ngcontent-%COMP%]   cpc-page-title[_ngcontent-%COMP%]{position:absolute;top:76px;left:50%;transform:translate(-50%)}.random-match-wrap[_ngcontent-%COMP%]   .match-item-wrap[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.random-match-wrap[_ngcontent-%COMP%]   .match-item-wrap[_ngcontent-%COMP%]   .match-item[_ngcontent-%COMP%]{width:300px}.random-match-wrap[_ngcontent-%COMP%]   .match-item-wrap[_ngcontent-%COMP%]   .match-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:50%;opacity:.6}.random-match-wrap[_ngcontent-%COMP%]   .match-item-wrap[_ngcontent-%COMP%]   .match-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin-top:16px;font-size:18px}"]}),i)}],l=((r=function e(){_classCallCheck(this,e)}).\u0275mod=h.Lb({type:r}),r.\u0275inj=h.Kb({factory:function(e){return new(e||r)},imports:[[s.e.forChild(w)],s.e]}),r),f=((a=function e(){_classCallCheck(this,e)}).\u0275mod=h.Lb({type:a}),a.\u0275inj=h.Kb({factory:function(e){return new(e||a)},imports:[[o.a,l]]}),a)}}]);