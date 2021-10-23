"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[449],{7449:function(e,t,a){a.r(t),a.d(t,{HomeModule:function(){return D}});var i=a(8583),r=a(6653),o=a(6673),n=a(639),s=a(7238);let c=(()=>{class e extends o.W{constructor(e){super(e),this.builder=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s._j))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-home-layout"]],features:[n.qOj],decls:3,vars:0,consts:[[1,"main"],["animationTarget",""]],template:function(e,t){1&e&&(n.TgZ(0,"main",0,1),n._UZ(2,"router-outlet"),n.qZA())},directives:[r.lC],styles:[""]}),e})();var l=a(2831),p=a(6782),u=a(7709),g=a(1479),Z=a(4674),h=a(6660),d=a(606),m=a(4171),_=a(7294);const T=function(e){return[e]};let v=(()=>{class e extends o.W{constructor(e,t,a,i,r){super(e),this.builder=e,this._dataService=t,this._guestService=a,this._hotelService=i,this._selectionService=r,this.destroy$=new u.xQ,this.linkExpirationTime=24,this.roomsPageName=l.ss,this.coreRoutes=l.TB,this.pagesData={},this.hotelData={},this.guestData={},this.reservationData={}}ngOnInit(){this.subscribes()}subscribes(){this._dataService.fetchPagesData("87585a765b8768c").pipe((0,p.R)(this.destroy$)).subscribe(e=>{this._dataService.pagesData=this.pagesData=e,this._selectionService.selectionPages=e.selectionPages,this._hotelService.hotelData=this.hotelData=e.hotel,this._guestService.guestData=this.guestData=e.guest,this._guestService.guestReservationData=this.reservationData=e.reservation})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s._j),n.Y36(g.D),n.Y36(Z.Q),n.Y36(h.N),n.Y36(d.z))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-introduction-page"]],features:[n.qOj],decls:59,vars:25,consts:[[1,"first-screen"],["animationTarget",""],[1,"homepage-hero"],[1,"bg-overlay"],["routerLink","/",1,"logo-wrapper","in-hero","w-inline-block"],["alt","",1,"image-2","completed-logo",3,"src"],[1,"text-container"],[1,"up-text"],[1,"h1","white-light"],[1,"name"],[1,"h3","hero-title"],[1,"paragraph-2"],[1,"the-price"],[1,"button-text"],[1,"paragraph-4"],[1,"user-vication-details"],[1,"check-in-check-out"],[1,"single-detaile","check-in"],[1,"single-details-title"],[1,"single-details-time","single-details","check-in-date"],[1,"single-detaile","check-out"],[1,"single-details-time","single-details","check-out-date"],[1,"single-detaile","last"],[1,"single-details-time","single-details","order-nym"],[1,"button","btn-big","start-choose","w-button",3,"routerLink"],[3,"data"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0,1),n.TgZ(2,"div",2),n._UZ(3,"div",3),n.TgZ(4,"a",4),n._UZ(5,"img",5),n.qZA(),n.TgZ(6,"div",6),n.TgZ(7,"div",7),n.TgZ(8,"h1",8),n._uU(9,"Hi "),n.TgZ(10,"span",9),n._uU(11),n.qZA(),n._uU(12,","),n.qZA(),n.TgZ(13,"h3",10),n._uU(14,"HIGH FLOOR OR LOW FLOOR?"),n._UZ(15,"br"),n.qZA(),n.TgZ(16,"h3",10),n._uU(17,"PORT VIEW OR CITY VIEW?"),n._UZ(18,"br"),n.qZA(),n.TgZ(19,"p",11),n._uU(20,"You can finally secure your ideal room before you arrive, and enjoy a tailored experience at our hotel, for only "),n.TgZ(21,"span",12),n._uU(22),n.qZA(),n._uU(23," /night."),n._UZ(24,"br"),n.qZA(),n.qZA(),n.TgZ(25,"div",13),n.TgZ(26,"p",14),n._uU(27),n._UZ(28,"br"),n.qZA(),n.TgZ(29,"p",14),n._uU(30,"*Charge upon arrival"),n.qZA(),n.TgZ(31,"p",14),n._uU(32,"*E&OE"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(33,"div",15),n.TgZ(34,"div",16),n.TgZ(35,"div",17),n.TgZ(36,"h4",18),n._uU(37,"Check in"),n.qZA(),n.TgZ(38,"p",19),n._uU(39),n.ALo(40,"uppercase"),n.ALo(41,"dateView"),n.ALo(42,"date"),n.qZA(),n.qZA(),n.TgZ(43,"div",20),n.TgZ(44,"h4",18),n._uU(45,"Check out"),n.qZA(),n.TgZ(46,"p",21),n._uU(47),n.ALo(48,"uppercase"),n.ALo(49,"dateView"),n.ALo(50,"date"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(51,"div",22),n.TgZ(52,"h4",18),n._uU(53,"Order number"),n.qZA(),n.TgZ(54,"p",23),n._uU(55),n.qZA(),n.qZA(),n.TgZ(56,"a",24),n._uU(57," Let me choose "),n.qZA(),n.qZA(),n.qZA(),n._UZ(58,"app-images-pre-render",25)),2&e&&(n.xp6(5),n.Q6J("src",t.hotelData.logo,n.LSH),n.xp6(6),n.Oqu(t.guestData.name),n.xp6(11),n.Oqu(t.guestData.price),n.xp6(5),n.hij("*Subject to final confirmation ",t.linkExpirationTime," hours prior to arrival."),n.xp6(12),n.Oqu(n.lcZ(40,9,n.lcZ(41,11,n.xi3(42,13,t.reservationData.startDate,"fullDate")))),n.xp6(8),n.Oqu(n.lcZ(48,16,n.lcZ(49,18,n.xi3(50,20,t.reservationData.endDate,"fullDate")))),n.xp6(8),n.Oqu(t.reservationData.id),n.xp6(1),n.Q6J("routerLink",n.VKq(23,T,"/"+t.coreRoutes.ROOM+"/"+t.roomsPageName.ROOMS_MAP)),n.xp6(2),n.Q6J("data",t.pagesData))},directives:[r.yS,m.A],pipes:[i.gd,_.d,i.uU],styles:[""]}),e})(),A=(()=>{class e extends o.W{constructor(e){super(e),this.builder=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s._j))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-completed-page"]],features:[n.qOj],decls:28,vars:0,consts:[[1,"completed-screen",2,"opacity","1","display","flex"],["animationTarget",""],["routerLink","/",1,"logo-wrapper","w-inline-block"],["src","/assets/common/images/logo.svg","alt","",1,"image-2","completed-logo"],[1,"bg-overlay"],[1,"completed-container"],[1,"h1","completed-title"],[1,"paragraph-6"],[1,"the-curr-room-num"],[1,"paragraph-8"],[1,"paragraph-7"],[1,"name"],["href","mailto:pre-arrival@atlashotels.co.il","target","_blank",1,"link"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0,1),n.TgZ(2,"a",2),n._UZ(3,"img",3),n.qZA(),n._UZ(4,"div",4),n.TgZ(5,"div",5),n.TgZ(6,"h2",6),n._uU(7,"YOUR ORDER IS COMPLETED!"),n.qZA(),n.TgZ(8,"p",7),n._uU(9,"Your chosen room is "),n.TgZ(10,"span",8),n._uU(11,"777"),n.qZA(),n._UZ(12,"br"),n.qZA(),n.TgZ(13,"p",9),n._uU(14,"Subject to final confirmation 12 hours prior to arrival."),n._UZ(15,"br"),n.qZA(),n.TgZ(16,"p",10),n._uU(17," Thank you "),n.TgZ(18,"span",11),n._uU(19,"User"),n.qZA(),n._uU(20,", "),n._UZ(21,"br"),n._uU(22," we hope you enjoy your stay. "),n.qZA(),n.TgZ(23,"p",10),n._uU(24,"For questions or concerns, we're here: "),n.TgZ(25,"a",12),n._uU(26,"pre-arrival@atlashotels.co.il"),n.qZA(),n._UZ(27,"br"),n.qZA(),n.qZA(),n.qZA())},directives:[r.yS],styles:[""]}),e})(),q=(()=>{class e extends o.W{constructor(e){super(e),this.builder=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s._j))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-link-not-valid"]],features:[n.qOj],decls:11,vars:0,consts:[["routerLink","/",1,"logo-wrapper","white-bg","w-inline-block"],["animationTarget",""],["src","/assets/common/images/logo.svg","alt","",1,"image-2"],[1,"container"],[1,"center-align"],["href","mailto:pre-arrival@atlashotels.co.il","target","_blank",1,"link"]],template:function(e,t){1&e&&(n.TgZ(0,"a",0,1),n._UZ(2,"img",2),n.qZA(),n.TgZ(3,"div",3),n.TgZ(4,"p",4),n._uU(5,"THE LINK IS NOT VALID"),n.qZA(),n.TgZ(6,"p",4),n._uU(7,"PLEASE CONTACT"),n.qZA(),n.TgZ(8,"p",4),n.TgZ(9,"a",5),n._uU(10,"pre-arrival@atlashotels.co.il"),n.qZA(),n.qZA(),n.qZA())},directives:[r.yS],styles:['[_nghost-%COMP%]:after{content:"";background-image:url(/assets/common/images/homepage-img.jpg);opacity:.3;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;background-repeat:no-repeat;background-size:cover}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{top:50%;left:50%;position:absolute;transform:translate(-50%,-40%)}[_nghost-%COMP%]   .center-align[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]   a[_ngcontent-%COMP%], [_nghost-%COMP%]   p[_ngcontent-%COMP%]{color:#000!important;font-weight:normal!important;letter-spacing:1.3px!important}']}),e})();var U=a(40);const O=[{path:l.WE.HOME,component:c,canDeactivate:[U.V],children:[{path:l.TB.INTRODUCTION,component:v,canDeactivate:[U.V]},{path:l.TB.COMPLETED,component:A,canDeactivate:[U.V]},{path:l.TB.LINK_NOT_VALID,component:q,canDeactivate:[U.V]}]}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.Bz.forChild(O)],r.Bz]}),e})();var b=a(4466);let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,f,b.m]]}),e})()}}]);