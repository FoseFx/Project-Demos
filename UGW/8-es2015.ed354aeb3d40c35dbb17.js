(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{p7Zs:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var b=u("pMnS"),o=u("SVse");class r{constructor(){this.disabled=!1}ngOnInit(){}}var c=e.kb({encapsulation:0,styles:[["div[_ngcontent-%COMP%]{display:inline-block;background:0 0;color:#000;border-radius:2px;padding:5px 15px;position:relative;transition:all .3s;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.disabled[_ngcontent-%COMP%]{-webkit-filter:blur(.5px) grayscale(.8);filter:blur(.5px) grayscale(.8);cursor:default}div[_ngcontent-%COMP%]:hover{background-color:#d3d3d3}"]],data:{}});function a(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,5,"div",[["class","popup-button"]],null,null,null,null,null)),e.Bb(512,null,o.x,o.y,[e.q,e.r,e.k,e.B]),e.lb(2,278528,null,0,o.k,[o.x],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.zb(3,{disabled:0}),(l()(),e.mb(4,0,null,null,1,"span",[],null,null,null,null,null)),e.vb(null,0)],function(l,n){var u=l(n,3,0,n.component.disabled);l(n,2,0,"popup-button",u)},null)}var s=u("7T+M"),i=u("Fe16"),m=u("ybL6"),p=u("4d5H"),d=u("sNUm"),h=u("y3H0"),f=u("LjUv"),g=u("HOOy"),v=u("kAhl");class w{constructor(l,n){this.appQuery=l,this.router=n,this.showLogoutPopup=!1,this.logoutOrAccountRemoval=0,this.user$=this.appQuery.select("loginData"),this.name$=this.appQuery.select("fullname")}logout(){localStorage.clear(),this.router.navigate(["/setup/welcome"]),location.reload()}showAccountLoeschen(){this.showLogoutPopup=!0,this.logoutOrAccountRemoval=1}doShowLogout(){this.showLogoutPopup=!0,this.logoutOrAccountRemoval=0}removeAcc(){}}var k=u("iInd"),E=e.kb({encapsulation:0,styles:[["table[_ngcontent-%COMP%]{width:100%}"]],data:{}});function y(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,1,"h2",[["class","center-text"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Abmelden"])),(l()(),e.mb(2,0,null,null,1,"p",[["class","center-text"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Bist du sicher, dass du dich abmelden m\xf6chtest? Dies wird deinen Account nicht l\xf6schen, manche nur lokal-gespeicherte Informationen werden dabei gel\xf6scht. Deine Stufe und Kurse / dein Stundenplan sind davon nicht betroffen. Auf anderen Ger\xe4ten bleibst du noch angemeldet. "])),(l()(),e.mb(4,0,null,null,2,"app-popup-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.logout()&&e),e},a,c)),e.lb(5,114688,null,0,r,[],null,null),(l()(),e.Eb(-1,0,["Ja"])),(l()(),e.mb(7,0,null,null,2,"app-popup-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=0!=(l.component.showLogoutPopup=!1)&&e),e},a,c)),e.lb(8,114688,null,0,r,[],null,null),(l()(),e.Eb(-1,0,["Abbrechen"]))],function(l,n){l(n,5,0),l(n,8,0)},null)}function A(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,1,"h2",[["class","center-text"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Account l\xf6schen"])),(l()(),e.mb(2,0,null,null,6,"p",[["class","center-text"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Bist du sicher, dass du deinen Account l\xf6schen m\xf6chtest? "])),(l()(),e.mb(4,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Dies ist nicht wiederherstellbar!"])),(l()(),e.mb(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.mb(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Alle deine Daten werden gel\xf6scht!"])),(l()(),e.mb(9,0,null,null,2,"app-popup-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.removeAcc()&&e),e},a,c)),e.lb(10,114688,null,0,r,[],null,null),(l()(),e.Eb(-1,0,["Ja"])),(l()(),e.mb(12,0,null,null,3,"app-popup-button",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=0!=(l.component.showLogoutPopup=!1)&&e),e},a,c)),e.lb(13,114688,null,0,r,[],null,null),(l()(),e.mb(14,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Nein"]))],function(l,n){l(n,10,0),l(n,13,0)},null)}function I(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,5,"app-popup",[],[[40,"@popupOpenClose",0]],[[null,"close"]],function(l,n,u){var e=!0;return"close"===n&&(e=0!=(l.component.showLogoutPopup=!1)&&e),e},s.b,s.a)),e.lb(1,49152,null,0,i.a,[],null,{close:"close"}),(l()(),e.cb(16777216,null,0,1,null,y)),e.lb(3,16384,null,0,o.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.cb(16777216,null,0,1,null,A)),e.lb(5,16384,null,0,o.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,3,0,0===u.logoutOrAccountRemoval),l(n,5,0,1===u.logoutOrAccountRemoval)},function(l,n){l(n,0,0,e.wb(n,1).anim)})}function L(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,12,"table",[["class","dark"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Email"])),(l()(),e.mb(4,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Eb(5,null,["",""])),e.yb(131072,o.b,[e.h]),(l()(),e.mb(7,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.mb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Email Verifiziert?"])),(l()(),e.mb(10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Eb(11,null,["",""])),e.yb(131072,o.b,[e.h])],null,function(l,n){var u=n.component;l(n,5,0,e.Fb(n,5,0,e.wb(n,6).transform(u.user$)).normal.email),l(n,11,0,e.Fb(n,11,0,e.wb(n,12).transform(u.user$)).normal.email_verified?"Ja":"Nein")})}function M(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,12,"table",[["class","dark"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Email"])),(l()(),e.mb(4,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Eb(5,null,["",""])),e.yb(131072,o.b,[e.h]),(l()(),e.mb(7,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.mb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Google ID"])),(l()(),e.mb(10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Eb(11,null,["",""])),e.yb(131072,o.b,[e.h])],null,function(l,n){var u=n.component;l(n,5,0,e.Fb(n,5,0,e.wb(n,6).transform(u.user$)).google.email),l(n,11,0,e.Fb(n,11,0,e.wb(n,12).transform(u.user$)).google.gid)})}function O(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,12,"table",[["class","dark"]],null,null,null,null,null)),(l()(),e.mb(1,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.mb(2,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Instagram ID"])),(l()(),e.mb(4,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Eb(5,null,["",""])),e.yb(131072,o.b,[e.h]),(l()(),e.mb(7,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.mb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Token (aus Sicherheitsgr\xfcnden gek\xfcrzt)"])),(l()(),e.mb(10,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Eb(11,null,["",""])),e.yb(131072,o.b,[e.h])],null,function(l,n){var u,t=n.component;l(n,5,0,null==(u=e.Fb(n,5,0,e.wb(n,6).transform(t.user$)))?null:u.insta.iid);var b=null;l(n,11,0,(null==(b=e.Fb(n,11,0,e.wb(n,12).transform(t.user$)))?null:b.insta.token.substr(0,7))+"***********")})}function F(l){return e.Gb(0,[(l()(),e.cb(16777216,null,null,1,null,I)),e.lb(1,16384,null,0,o.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.mb(2,0,null,null,42,"app-card",[],null,null,null,m.b,m.a)),e.lb(3,49152,null,0,p.a,[],null,null),(l()(),e.mb(4,0,null,0,2,"app-card-header",[],null,null,null,d.b,d.a)),e.lb(5,49152,null,0,h.a,[],null,null),(l()(),e.Eb(-1,0,["User"])),(l()(),e.mb(7,0,null,0,2,"app-button",[["class","center-button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.doShowLogout()&&e),e},f.b,f.a)),e.lb(8,49152,null,0,g.a,[],{accent:[0,"accent"]},null),(l()(),e.Eb(-1,0,["Abmelden"])),(l()(),e.mb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.mb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Alle \xfcber dich gesammelten Daten, gem\xe4\xdf DSGVO:"])),(l()(),e.mb(13,0,null,0,6,"table",[["class","dark"]],null,null,null,null,null)),(l()(),e.mb(14,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.mb(15,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Name"])),(l()(),e.mb(17,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.Eb(18,null,["",""])),e.yb(131072,o.b,[e.h]),(l()(),e.mb(20,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.cb(16777216,null,0,2,null,L)),e.lb(22,16384,null,0,o.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),e.yb(131072,o.b,[e.h]),(l()(),e.cb(16777216,null,0,2,null,M)),e.lb(25,16384,null,0,o.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),e.yb(131072,o.b,[e.h]),(l()(),e.cb(16777216,null,0,2,null,O)),e.lb(28,16384,null,0,o.m,[e.M,e.J],{ngIf:[0,"ngIf"]},null),e.yb(131072,o.b,[e.h]),(l()(),e.mb(30,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.mb(31,0,null,0,10,"div",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Informationen \xfcber deine Kurse, die gespeichert werden: "])),(l()(),e.mb(33,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.mb(34,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Name"])),(l()(),e.mb(36,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Schiene"])),(l()(),e.mb(38,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Lehrer"])),(l()(),e.mb(40,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Stufe"])),(l()(),e.mb(42,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.mb(43,0,null,0,1,"a",[["class","center-button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showAccountLoeschen()&&e),e},null,null)),(l()(),e.Eb(-1,null,["Account l\xf6schen"]))],function(l,n){var u,t,b,o=n.component;l(n,1,0,o.showLogoutPopup),l(n,8,0,!0),l(n,22,0,null!==(null==(u=e.Fb(n,22,0,e.wb(n,23).transform(o.user$)))?null:u.normal)),l(n,25,0,null!==(null==(t=e.Fb(n,25,0,e.wb(n,26).transform(o.user$)))?null:t.google)),l(n,28,0,null!==(null==(b=e.Fb(n,28,0,e.wb(n,29).transform(o.user$)))?null:b.insta))},function(l,n){var u=n.component;l(n,18,0,e.Fb(n,18,0,e.wb(n,19).transform(u.name$)))})}function G(l){return e.Gb(0,[(l()(),e.mb(0,0,null,null,1,"app-user",[],null,null,null,F,E)),e.lb(1,49152,null,0,w,[v.a,k.k],null,null)],null,null)}var J=e.ib("app-user",w,G,{},{},[]);class ${}var x=u("0Faz");u.d(n,"UserModuleNgFactory",function(){return P});var P=e.jb(t,[],function(l){return e.tb([e.ub(512,e.j,e.X,[[8,[b.a,J]],[3,e.j],e.v]),e.ub(4608,o.o,o.n,[e.s,[2,o.C]]),e.ub(1073742336,o.c,o.c,[]),e.ub(1073742336,k.n,k.n,[[2,k.s],[2,k.k]]),e.ub(1073742336,$,$,[]),e.ub(1073742336,x.a,x.a,[]),e.ub(1073742336,t,t,[]),e.ub(1024,k.i,function(){return[[{path:"",pathMatch:"full",component:w}]]},[])])})}}]);