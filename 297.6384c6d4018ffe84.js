"use strict";(self.webpackChunksklad_front=self.webpackChunksklad_front||[]).push([[297],{8297:(Q,f,a)=>{a.r(f),a.d(f,{UsersModule:()=>I});var _=a(6814),u=a(5313),i=a(95),m=a(7700),t=a(5879),h=a(9483),c=a(2296),C=a(2032),g=a(9157),d=a(7466);let U=(()=>{class e{constructor(n,s,r){this.authService=n,this.data=s,this.dialogRef=r,this.userForm=new i.cw({name:new i.NI(""),username:new i.NI(""),password:new i.NI(""),role:new i.NI("0")}),this.isNew=!0}ngOnInit(){console.error(this.data),this.data?.user&&(this.isNew=!1,this.userForm.reset({name:this.data.user.name,username:this.data.user.username,password:"",role:this.data.user.role}))}onSubmit(){this.isNew?this.authService.signUp({name:this.userForm.value.name,username:this.userForm.value.username,password:this.userForm.value.password,role:this.userForm.value.role}).subscribe(()=>this.dialogRef.close()):(this.data.user.name=this.userForm.value.name,this.data.user.username=this.userForm.value.username,this.data.user.role=this.userForm.value.role,this.userForm.value.password?this.data.user.password=this.userForm.value.password:delete this.data.user.password,this.authService.updateUser(this.data.user).subscribe(()=>this.dialogRef.close()))}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(h.e),t.Y36(m.WI),t.Y36(m.so))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-user-form"]],decls:22,vars:2,consts:[[1,"container"],[1,"login"],[1,"example-form",3,"formGroup"],[1,"example-full-width"],["formControlName","name","matInput",""],["formControlName","username","matInput",""],["formControlName","password","matInput",""],["color","primary","formControlName","role","aria-label","\u0420\u043e\u043b\u044c"],["value","0"],["value","1"],["mat-raised-button","",3,"click"]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"\u0418\u043c\u044f"),t.qZA(),t._UZ(6,"input",4),t.qZA(),t.TgZ(7,"mat-form-field",3)(8,"mat-label"),t._uU(9,"\u041b\u043e\u0433\u0438\u043d"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"\u041f\u0430\u0440\u043e\u043b\u044c"),t.qZA(),t._UZ(14,"input",6),t.qZA(),t.TgZ(15,"mat-radio-group",7)(16,"mat-radio-button",8),t._uU(17,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),t.qZA(),t.TgZ(18,"mat-radio-button",9),t._uU(19,"\u0410\u0434\u043c\u0438\u043d"),t.qZA()(),t.TgZ(20,"button",10),t.NdJ("click",function(){return r.onSubmit()}),t._uU(21),t.qZA()()()()),2&s&&(t.xp6(2),t.Q6J("formGroup",r.userForm),t.xp6(19),t.Oqu(r.isNew?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))},dependencies:[c.lW,C.Nt,g.KE,g.hX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.VQ,d.U0],styles:[".container[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%;display:flex;flex-direction:column}.example-full-width[_ngcontent-%COMP%]{width:100%}.login[_ngcontent-%COMP%]{padding:10px}"]})}return e})();var b=a(9862);function v(e,o){1&e&&(t.TgZ(0,"th",15)(1,"p"),t._uU(2,"\u0424\u0418\u041e"),t.qZA()())}function Z(e,o){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.name)}}function w(e,o){1&e&&(t.TgZ(0,"th",15)(1,"p"),t._uU(2,"\u041b\u043e\u0433\u0438\u043d"),t.qZA()())}function T(e,o){if(1&e&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n.username)}}function N(e,o){1&e&&(t.TgZ(0,"th",15)(1,"p"),t._uU(2,"\u0420\u043e\u043b\u044c"),t.qZA()())}function F(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"\u0410\u0434\u043c\u0438\u043d"),t.qZA())}function y(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"),t.qZA())}function O(e,o){if(1&e&&(t.TgZ(0,"td",16),t.YNc(1,F,2,0,"div",17),t.YNc(2,y,2,0,"div",17),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Q6J("ngIf","1"===(null==n?null:n.role)),t.xp6(1),t.Q6J("ngIf","0"===(null==n?null:n.role))}}function A(e,o){1&e&&t._UZ(0,"th",15)}function M(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"td",18)(1,"div",19)(2,"button",20),t.NdJ("click",function(){const l=t.CHM(n).$implicit,p=t.oxw(2);return t.KtG(p.editUser(l))}),t._uU(3,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),t.qZA(),t.TgZ(4,"button",21),t.NdJ("click",function(){const l=t.CHM(n).$implicit,p=t.oxw(2);return t.KtG(p.removeUser(l))}),t._uU(5,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),t.qZA()()()}if(2&e){const n=o.$implicit,s=t.oxw(2);t.xp6(4),t.Q6J("disabled",n.username===s.user.username)}}function B(e,o){1&e&&t._UZ(0,"tr",22)}function Y(e,o){1&e&&t._UZ(0,"tr",23)}function D(e,o){if(1&e&&(t.TgZ(0,"mat-table",5),t.ynx(1,6),t.YNc(2,v,3,0,"th",7),t.YNc(3,Z,2,1,"td",8),t.BQk(),t.ynx(4,9),t.YNc(5,w,3,0,"th",7),t.YNc(6,T,2,1,"td",8),t.BQk(),t.ynx(7,10),t.YNc(8,N,3,0,"th",7),t.YNc(9,O,3,2,"td",8),t.BQk(),t.ynx(10,11),t.YNc(11,A,1,0,"th",7),t.YNc(12,M,6,1,"td",12),t.BQk(),t.YNc(13,B,1,0,"tr",13),t.YNc(14,Y,1,0,"tr",14),t.qZA()),2&e){const n=t.oxw();t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns)}}let P=(()=>{class e{constructor(n,s,r){this.dialog=n,this.http=s,this.authService=r,this.displayedColumns=["name","username","role","actions"]}ngOnInit(){this.getUser(),this.user=this.authService.user,console.error(this.user)}openForm(){this.dialog.open(U,{data:{isNew:!0},width:"350px"}).afterClosed().subscribe(()=>this.getUser())}getUser(){this.http.get("users").subscribe(n=>this.dataSource=new u.by(n))}removeUser(n){this.http.delete(`users/${n._id}`).subscribe(()=>this.getUser())}editUser(n){this.dialog.open(U,{data:{isNew:!1,user:n},width:"350px"}).afterClosed().subscribe(()=>this.getUser())}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(m.uw),t.Y36(b.eN),t.Y36(h.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-users"]],decls:8,vars:1,consts:[[1,"table"],[1,"header"],[3,"dataSource",4,"ngIf"],[1,"add"],["color","primary","mat-raised-button","",3,"click"],[3,"dataSource"],["matColumnDef","name"],["class","title","mat-header-cell","",4,"matHeaderCellDef"],["class","content","mat-cell","",4,"matCellDef"],["matColumnDef","username"],["matColumnDef","role"],["matColumnDef","actions"],["class","content","class","actions_td","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell","",1,"title"],["mat-cell","",1,"content"],[4,"ngIf"],["mat-cell","",1,"actions_td"],[1,"actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-header-row",""],["mat-row",""]],template:function(s,r){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),t.qZA()(),t.YNc(4,D,15,3,"mat-table",2),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return r.openForm()}),t._uU(7,"+"),t.qZA()()()),2&s&&(t.xp6(4),t.Q6J("ngIf",r.dataSource))},dependencies:[_.O5,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,c.lW],styles:[".actions[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;align-items:center;padding-top:10px}.title[_ngcontent-%COMP%]{font-size:18px;vertical-align:middle}.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.content[_ngcontent-%COMP%]{font-size:18px}mat-table[_ngcontent-%COMP%]{background-color:#e9f6ff;width:-moz-fit-content;width:fit-content;margin:0 auto}.mdc-data-table__table[_ngcontent-%COMP%]{min-width:10%!important}.header[_ngcontent-%COMP%]{display:flex;gap:20px;padding:30px;margin:0 auto;width:-moz-fit-content;width:fit-content;align-items:center}.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:30px;margin:0}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:20px}.table[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{padding:20px;width:-moz-fit-content;width:fit-content;margin:0 auto}"]})}return e})();var x=a(1896),J=a(3566);const E=[{path:"",component:P}];let I=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[_.ez,x.Bz.forChild(E),u.p0,J.JX,c.ot,C.c,i.UX,d.Fk,m.Is,x.Bz]})}return e})()}}]);