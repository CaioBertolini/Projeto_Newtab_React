(this["webpackJsonp2.projeto_react"]=this["webpackJsonp2.projeto_react"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(13),s=c.n(n),i=c(3),r=c(14),o=c.n(r),j=(c(38),c(15)),l=c(0);function b(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];o.a.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce").then((function(e){var t=e.data;n(t)}));var s=[{card_number:"1111111111111111",cvv:789,expiry_date:"01/18"},{card_number:"4111111111111234",cvv:123,expiry_date:"01/20"}];var r=Object(a.useState)("none"),b=Object(i.a)(r,2),d=b[0],u=b[1],O=Object(a.useState)("flex"),m=Object(i.a)(O,2),h=m[0],x=m[1],p=Object(a.useState)(""),v=Object(i.a)(p,2),g=v[0],f=v[1],y=Object(a.useState)("none"),S=Object(i.a)(y,2),C=S[0],N=S[1],_=Object(a.useState)(""),w=Object(i.a)(_,2),k=w[0],P=w[1],I=Object(a.useState)("1"),F=Object(i.a)(I,2),J=F[0],R=F[1],B=Object(a.useState)(""),D=Object(i.a)(B,2),E=D[0],U=D[1],$=Object(a.useState)("none"),q=Object(i.a)($,2),z=q[0],A=q[1];return Object(l.jsxs)(l.Fragment,{children:[c.map((function(e){return Object(l.jsxs)("div",{className:"usuarios",style:{display:h},children:[Object(l.jsx)("div",{className:"img-usuario",children:Object(l.jsx)("img",{src:e.img,alt:"Imagem usu\xe1rio"})}),Object(l.jsxs)("div",{className:"identi-usuario",children:[Object(l.jsxs)("div",{children:["Nome: ",e.name]}),Object(l.jsxs)("div",{children:["ID: ",e.id," - Username: ",e.username]})]}),Object(l.jsx)("div",{className:"botao-pagar",children:Object(l.jsx)("button",{onClick:function(){var t;t=e.name,u("flex"),x("none"),f(t)},children:"Pagar"})})]})})),Object(l.jsxs)("div",{className:"modal-showing",style:{display:d},children:[Object(l.jsxs)("span",{children:["Pagamento para ",Object(l.jsx)("b",{children:g})]}),Object(l.jsxs)("div",{className:"input-money",children:[Object(l.jsx)(j.a,{thousandSeparator:!0,value:E,onChange:function(e){U(e.target.value),A("none")},prefix:"R$ ",inputmode:"numeric"}),Object(l.jsx)("p",{style:{display:z},children:"Campo obrigat\xf3rio"})]}),Object(l.jsxs)("select",{value:J,onChange:function(e){R(e.target.value)},children:[Object(l.jsxs)("option",{value:"1",children:["Cart\xe3o com final ",s[0].card_number.substr(-4)]}),Object(l.jsxs)("option",{value:"2",children:["Cart\xe3o com final ",s[1].card_number.substr(-4)]})]}),Object(l.jsx)("button",{onClick:function(){""===E?A("flex"):(P("1"===J?"":"n\xe3o"),u("none"),N("flex"),U(""),A("none"))},children:"Pagar"})]}),Object(l.jsxs)("div",{className:"modal-showing",style:{display:C},children:[Object(l.jsx)("span",{children:"Recibo de pagamento"}),Object(l.jsxs)("p",{children:["O Pagamento ",Object(l.jsx)("strong",{children:k})," foi concluido com sucesso"]}),Object(l.jsx)("button",{onClick:function(){N("none"),x("flex")},children:"Fechar"})]})]})}var d=document.getElementById("root");s.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(b,{})}),d)}},[[40,1,2]]]);
//# sourceMappingURL=main.3c20bd94.chunk.js.map