(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/0IE":function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(e){this._dataService=e,this.isHideLogoName=!1}ngOnInit(){this.hotelData=this._dataService.pagesData.hotel}}},"2Lta":function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var i=s("8Y7J");let n=(()=>{class e{canDeactivate(e){return!e.canDeactivate||e.canDeactivate()}}return e.ngInjectableDef=i.Jb({factory:function(){return new e},token:e,providedIn:"root"}),e})()},PCNd:function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s("haGm"),s("S11G"),s("/0IE"),s("eyBh");class i{}},S11G:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(){this.isShowDropDown=!1,this.dropdownItemHeight=26,this.bottomSpace=10,this.topSpace=15,this.bottomPadding=7}ngOnInit(){}calculateDropdownHeight(){return this.isShowDropDown?this.items.length*(this.dropdownItemHeight+this.bottomSpace)+this.topSpace+this.bottomPadding:0}}},bOn6:function(e,t,s){"use strict";var i=s("GS7A"),n=s("HDdC"),a=s("quSY");class o extends a.a{constructor(e,t){super()}schedule(e,t=0){return this}}class r extends o{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const s=this.id,i=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(i,s,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(i,this.id,t),this}requestAsyncId(e,t,s=0){return setInterval(e.flush.bind(e,this),s)}recycleAsyncId(e,t,s=0){if(null!==s&&this.delay===s&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(e,t);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let s=!1,i=void 0;try{this.work(e)}catch(n){s=!0,i=!!n&&n||new Error(n)}if(s)return this.unsubscribe(),i}_unsubscribe(){const e=this.id,t=this.scheduler,s=t.actions,i=s.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&s.splice(i,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}let c=(()=>{class e{constructor(t,s=e.now){this.SchedulerAction=t,this.now=s}schedule(e,t=0,s){return new this.SchedulerAction(this,e).schedule(s,t)}}return e.now=()=>Date.now(),e})();class h extends c{constructor(e,t=c.now){super(e,()=>h.delegate&&h.delegate!==this?h.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,s){return h.delegate&&h.delegate!==this?h.delegate.schedule(e,t,s):super.schedule(e,t,s)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let s;this.active=!0;do{if(s=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,s){for(;e=t.shift();)e.unsubscribe();throw s}}}const l=new h(r);var u=s("DH7j");function m(e){return!Object(u.a)(e)&&e-parseFloat(e)+1>=0}var d=s("z+Ro");function g(e){const{index:t,period:s,subscriber:i}=e;if(i.next(t),!i.closed){if(-1===s)return i.complete();e.index=t+1,this.schedule(e,s)}}var p=s("7o/Q");class b{constructor(e){this.value=e}call(e,t){return t.subscribe(new I(e,this.value))}}class I extends p.a{constructor(e,t){super(e),this.value=t}_next(e){this.destination.next(this.value)}}s.d(t,"a",(function(){return v}));class v{constructor(e){this._builder=e,this.ANIMATION_TIME=390}ngOnChanges(){this.createdAnimation()}ngOnInit(){this.createdAnimation()}ngAfterViewInit(){this.createdAnimation()}createdAnimation(){this.animation=this._builder.build(this.slideIn(this.ANIMATION_TIME)),this.player=this.animation.create(this.el.nativeElement,{}),this.player.play()}canDeactivate(){return this.animation=this._builder.build(this.slideOut(this.ANIMATION_TIME)),this.player=this.animation.create(this.el.nativeElement,{}),this.player.play(),function(e=0,t,s){let i=-1;return m(t)?i=Number(t)<1?1:Number(t):Object(d.a)(t)&&(s=t),Object(d.a)(s)||(s=l),new n.a(t=>{const n=m(e)?e:+e-s.now();return s.schedule(g,n,{index:0,period:i,subscriber:t})})}(this.ANIMATION_TIME).pipe(e=>e.lift(new b(!0))).toPromise()}slideOut(e){return[Object(i.g)({opacity:"1",visibility:"visible"}),Object(i.e)(e,Object(i.g)({opacity:"0",visibility:"hidden"}))]}slideIn(e){return[Object(i.g)({opacity:"0",visibility:"hidden"}),Object(i.e)(e,Object(i.g)({opacity:"1",visibility:"visible"}))]}}},cplz:function(e,t,s){"use strict";const i={user:{user_name:"Vitaliy",check_in_date:"SEP 12, 2021",check_out_date:"SEP 24, 2021",price:"$12",order_number:11111222122,link_expiration_time:12,nights:12,introduction_image:{src:"/assets/common/images/homepage-img.jpg"},completed_image:{src:"/assets/common/images/Image-11.svg"}},hotel:{name:"ATLAS HOTELS",email:"pre-arrival@atlashotels.co.il",logo:{src:"/assets/common/images/Image-53.svg"},pages_logo:{src:"/assets/common/images/logo.svg"}},pages:[{name:"floor",title:"HIGH OR LOW FLOOR?",logo:{src:"/assets/common/images/hotel_2.svg"}},{name:"view",title:"PORT, CITY OR BEACH VIEW?",images:[{name:"PORT",src:"/assets/common/images/voyyo.jpg"},{name:"BEACH",src:"/assets/common/images/voyyo3.jpg"},{name:"CITY",src:"/assets/common/images/voyyo4.jpg"}]},{name:"bathe",title:"HOW DO YOU PREFER TO BATHE?",images:[{name:"BATH",src:"/assets/common/images/bath.png"},{name:"SHOWER",src:"/assets/common/images/shower.png"}]},{name:"dreams-location",title:"SWEET DREAMS LOCATION?",images:[{name:"DOUBLE BED",src:"/assets/common/images/13.svg"},{name:"TWIN BEDS",src:"/assets/common/images/12.svg"},{name:"TWO SINGLE BED",src:"/assets/common/images/two-beds.svg"}]},{name:"rooms-map",rooms:[{number:104,floor:1,tags:["HIGH FLOOR","SHOWER","TWIN BEDS","TWO SINGLE BED","BEACH VIEW"],map_logo:{src:"/assets/common/rooms_images/desktop/701@2x.png"},map_mobile_logo:{src:"/assets/common/rooms_images/mobile/104@2x.png"}},{number:204,floor:3,tags:["HIGH FLOOR","SHOWER","TWO SINGLE BED","BEACH VIEW"],map_logo:{src:"/assets/common/rooms_images/desktop/601@2x.png"},map_mobile_logo:{src:"/assets/common/rooms_images/mobile/104@2x.png"}},{number:102,floor:2,tags:["HIGH FLOOR","SHOWER","TWO SINGLE BED","BEACH VIEW","DOUBLE BED"],map_logo:{src:"/assets/common/rooms_images/desktop/605@2x.png"},map_mobile_logo:{src:"/assets/common/rooms_images/mobile/104@2x.png"}}]}]};var n=s("8Y7J");s.d(t,"a",(function(){return a}));let a=(()=>{class e{constructor(){this._pagesData=i}get pagesData(){return this._pagesData}get pagesNameList(){return this._pagesData.pages.map(e=>e.name)}getPageStepIndex(e){return this.pagesNameList.indexOf(e)+1}getRoomData(e){return this._pagesData.pages.find(t=>t.name===e)}}return e.ngInjectableDef=n.Jb({factory:function(){return new e},token:e,providedIn:"root"}),e})()},eyBh:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(e){this._dataService=e,this.regExp=/src":("[^\s.]+.[\w\d]+)/gm,this.imagesListToRender=[]}ngOnInit(){this.pagesData=this._dataService.pagesData,this.setImagesListToRender()}setImagesListToRender(){let e=JSON.stringify(this.pagesData).match(this.regExp);this.imagesListToRender=e.map(e=>{let t=e.split('"');return t[t.length-1]})}}},haGm:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));class i{constructor(e,t){this.elementRef=e,this.renderer=t}ngOnInit(){this.nodeTarget=this.elementRef.nativeElement.parentNode.querySelector(".visible-item")}mouseover(){this.nodeTarget&&this.renderer.addClass(this.nodeTarget,"is-visible")}mouseleave(){this.nodeTarget&&this.renderer.removeClass(this.nodeTarget,"is-visible")}}}}]);