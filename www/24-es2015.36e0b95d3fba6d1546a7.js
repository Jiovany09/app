(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{SruG:function(e,n,o){"use strict";o.r(n),o.d(n,"RegistrarPageModule",(function(){return d}));var t=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),a=o("tyNb"),b=o("2hxB"),l=o("fXoL"),s=o("qfBg");const c=[{path:"",component:(()=>{class e{constructor(e,n,o){this._route=e,this._router=n,this._userService=o,this.user=new b.a(1,"","","","","empleado","","",null)}ngOnInit(){}onSubmit(e){this._userService.register(this.user).subscribe(n=>{"success"==n.data.status?(this._router.navigateByUrl("login"),e.reset()):console.log("tas mal"+n)},e=>{console.log(e)})}}return e.\u0275fac=function(n){return new(n||e)(l.Hb(a.a),l.Hb(a.g),l.Hb(s.a))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-registrar"]],decls:63,vars:7,consts:[[1,"register"],[2,"text-align","center","color","#1a1a1a","font-size","x-large"],[2,"margin-top","30px","margin-left","20px","margin-right","20px",3,"ngSubmit"],["registerForm","ngForm"],[2,"border-radius","20px"],["position","floating"],["type","text","name","nombre","id","nombre","placeholder","Nombre","minlength","5","maxlength","20","required","",1,"form-control",3,"ngModel","ngModelChange"],["name",""],["name","person-circle-outline","slot","start",2,"margin-top","40px"],["type","text","name","paterno","id","paterno","placeholder","Apellido paterno","minlength","5","maxlength","25","required","",1,"form-control",3,"ngModel","ngModelChange"],["surname",""],["type","text","name","materno","id","materno","placeholder","Apellido materno","minlength","5","maxlength","25","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","tel","name","telefono","id","telefono","placeholder","Tel\xe9fono","pattern","^[1,2,3,4,5,6,7,8,9]\\d{9}$","required","",1,"form-control",3,"ngModel","ngModelChange"],["telefono",""],["name","call-outline","slot","start",2,"margin-top","40px"],["type","email","name","correo","id","correo","placeholder","ejemplo@gmail.com","pattern","[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}","required","",1,"form-control",3,"ngModel","ngModelChange"],["email",""],["name","mail-outline","slot","start",2,"margin-top","40px"],["type","password","name","password","id","password","placeholder","Contrase\xf1a","required","","minlength","8","maxlength","18",3,"ngModel","ngModelChange"],["password",""],["name","lock-closed-outline","slot","start",2,"margin-top","40px"],["type","submit","shape","round","expand","block",3,"disabled"],["shape","round","expand","block","routerLink","/login"],["src","assets/REGISTER.png",2,"width","250px","height","250px"]],template:function(e,n){if(1&e){const e=l.Lb();l.Kb(0,"ion-content"),l.Kb(1,"ion-card-header",0),l.Kb(2,"ion-item-group",1),l.kc(3,"Registrate"),l.Jb(),l.Kb(4,"form",2,3),l.Sb("ngSubmit",(function(){l.fc(e);const o=l.ec(5);return n.onSubmit(o)})),l.Kb(6,"ion-item",4),l.Kb(7,"ion-label",5),l.kc(8,"Nombre"),l.Jb(),l.Kb(9,"ion-input",6,7),l.Sb("ngModelChange",(function(e){return n.user.nombre=e})),l.Jb(),l.Ib(11,"ion-icon",8),l.Jb(),l.Ib(12,"br"),l.Kb(13,"ion-item",4),l.Kb(14,"ion-label",5),l.kc(15,"Apellido"),l.Jb(),l.Kb(16,"ion-input",9,10),l.Sb("ngModelChange",(function(e){return n.user.paterno=e})),l.Jb(),l.Ib(18,"ion-icon",8),l.Jb(),l.Ib(19,"br"),l.Kb(20,"ion-item",4),l.Kb(21,"ion-label",5),l.kc(22,"Apellido"),l.Jb(),l.Kb(23,"ion-input",11,10),l.Sb("ngModelChange",(function(e){return n.user.materno=e})),l.Jb(),l.Ib(25,"ion-icon",8),l.Jb(),l.Ib(26,"br"),l.Kb(27,"ion-item",4),l.Kb(28,"ion-label",5),l.kc(29,"Tel\xe9fono"),l.Jb(),l.Kb(30,"ion-input",12,13),l.Sb("ngModelChange",(function(e){return n.user.telefono=e})),l.Jb(),l.Ib(32,"ion-icon",14),l.Jb(),l.Ib(33,"br"),l.Kb(34,"ion-item",4),l.Kb(35,"ion-label",5),l.kc(36,"Correo"),l.Jb(),l.Kb(37,"ion-input",15,16),l.Sb("ngModelChange",(function(e){return n.user.email=e})),l.Jb(),l.Ib(39,"ion-icon",17),l.Jb(),l.Ib(40,"br"),l.Kb(41,"ion-item",4),l.Kb(42,"ion-label",5),l.kc(43,"Contrase\xf1a"),l.Jb(),l.Kb(44,"ion-input",18,19),l.Sb("ngModelChange",(function(e){return n.user.password=e})),l.Jb(),l.Ib(46,"ion-icon",20),l.Jb(),l.Ib(47,"br"),l.Kb(48,"ion-button",21),l.kc(49,"Registrarse "),l.Jb(),l.Ib(50,"br"),l.Kb(51,"ion-button",22),l.kc(52,"Cancelar"),l.Jb(),l.Jb(),l.Jb(),l.Ib(53,"br"),l.Ib(54,"br"),l.Ib(55,"br"),l.Ib(56,"br"),l.Ib(57,"br"),l.Ib(58,"br"),l.Ib(59,"br"),l.Ib(60,"br"),l.Kb(61,"ion-label"),l.Ib(62,"ion-img",23),l.Jb(),l.Jb()}if(2&e){const e=l.ec(5);l.xb(9),l.Zb("ngModel",n.user.nombre),l.xb(7),l.Zb("ngModel",n.user.paterno),l.xb(7),l.Zb("ngModel",n.user.materno),l.xb(7),l.Zb("ngModel",n.user.telefono),l.xb(7),l.Zb("ngModel",n.user.email),l.xb(7),l.Zb("ngModel",n.user.password),l.xb(4),l.Zb("disabled",!e.form.valid)}},directives:[i.p,i.k,i.x,r.l,r.g,r.h,i.w,i.y,i.v,i.X,r.c,r.b,r.k,r.f,r.i,i.t,r.j,i.g,i.V,a.h,i.u],styles:['.centrado[_ngcontent-%COMP%]{text-align:center}ion-img[_ngcontent-%COMP%]{display:block;margin:auto}.register[_ngcontent-%COMP%]{position:center;top:50%;left:50%;width:450px;transform:translate(-50%,-50%);transition:transform .3s,box-shadow .3s}.register[_ngcontent-%COMP%]:after, .register[_ngcontent-%COMP%]:before{content:"";position:absolute;width:800px;height:800px;border-top-left-radius:40%;border-top-right-radius:45%;border-bottom-left-radius:35%;border-bottom-right-radius:40%;z-index:-1}.register[_ngcontent-%COMP%]:before{left:40%;bottom:-25%;background-color:rgba(69,105,144,.15);-webkit-animation:wawes 67s linear infinite;animation:wawes 6s linear infinite}.register[_ngcontent-%COMP%]:after{left:35%;bottom:-25%;background-color:rgba(2,128,144,.2);-webkit-animation:wawes 7s infinite;animation:wawes 7s infinite}@-webkit-keyframes wawes{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(1turn)}}input[_ngcontent-%COMP%]:valid, textarea[_ngcontent-%COMP%]:valid{background-color:green}input[_ngcontent-%COMP%]:invalid, textarea[_ngcontent-%COMP%]:invalid{background-color:red}']}),e})()}];let g=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(n){return new(n||e)},imports:[[a.i.forChild(c)],a.i]}),e})(),d=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(n){return new(n||e)},imports:[[t.b,r.a,i.R,g]]}),e})()}}]);