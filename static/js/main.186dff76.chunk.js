(this["webpackJsonpmain-project"]=this["webpackJsonpmain-project"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(6),n=c.n(i),r=c(3),j=c(7),a=c(12),l=c(13),o=c(2),d=new(function(){function e(){Object(a.a)(this,e),this.count=0,this.price=0,this.store=[],Object(o.d)(this)}return Object(l.a)(e,[{key:"addElem",value:function(e){this.count++,this.store.push(e),JSON.parse(JSON.stringify(this.store))}},{key:"removeElem",value:function(e){this.count--,this.store=this.store.filter((function(t){return t.id!==e}))}}]),e}()),b=c(0),O=Object(j.a)((function(e){var t=e.item;return console.log(),Object(b.jsxs)("div",{className:"content-cart",children:[Object(b.jsx)("span",{className:"cart__close",onClick:function(){return t(!1)},children:"\u2718"}),d.count>=1?d.store.map((function(e,t){return Object(b.jsx)("div",{className:"cart__block",children:Object(b.jsxs)("div",{className:"cart__item",children:[Object(b.jsx)("img",{src:e.imageUrl,alt:"img",className:"cart__img"}),Object(b.jsxs)("div",{className:"cart__wrapper",children:[Object(b.jsx)("div",{className:"cart__title",children:e.name}),Object(b.jsxs)("div",{className:"cart__info",children:[Object(b.jsxs)("div",{className:"cart__price",children:[e.price," \u0441\u043e\u043c\u043e\u0432"]}),Object(b.jsx)("span",{onClick:function(){return d.removeElem(e.id)},children:"\u2718"})]})]})]})})})):Object(b.jsx)("div",{className:"container container--cart",children:Object(b.jsxs)("div",{className:"cart cart--empty",children:[Object(b.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(b.jsx)("icon",{children:"\ud83d\ude15"})]}),Object(b.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(b.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(b.jsx)("img",{src:"img/empty-cart.png",alt:"Empty cart"})]})})]})})),h=Object(j.a)((function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"header__logo",children:[Object(b.jsx)("img",{src:"img/logo.jpg",alt:"Pizza logo"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"DODO Pizza"}),Object(b.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]}),Object(b.jsx)("div",{className:"header__cart",children:Object(b.jsxs)("div",{className:"button button--cart",onClick:function(){return i(!c)},children:[Object(b.jsxs)("span",{children:[d.price," \u20bd"]}),Object(b.jsx)("div",{className:"button__delimiter"}),Object(b.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),Object(b.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),Object(b.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"})]}),Object(b.jsx)("span",{children:d.count})]})})]})}),c&&Object(b.jsx)(O,{item:i})]})})),m=c(10),x=c(14),u=c.n(x);var p=function(e){var t=e.sliders;return Object(b.jsx)(u.a,Object(m.a)(Object(m.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:t.map((function(e,t){return Object(b.jsx)("div",{className:"main",children:Object(b.jsx)("img",{src:e.imageUrl})})}))}))};var v=function(){return Object(b.jsxs)("div",{class:"contact",children:[Object(b.jsx)("img",{src:"img/left.jpg",alt:"img"}),Object(b.jsx)("img",{src:"img/one.jpg",alt:"img"}),Object(b.jsx)("img",{src:"img/two.jpg",alt:"img",class:"delete"}),Object(b.jsx)("img",{src:"img/three.jpg",alt:"img",class:"deleted"}),Object(b.jsx)("img",{src:"img/four.jpg",alt:"img"}),Object(b.jsx)("div",{class:"contact__block",children:"telegram : @ryskeldi2237"})]})};var _=function(e){var t=e.pizza,c=e.sizes,i=e.types,n=Object(s.useState)(t.sizes[0]),j=Object(r.a)(n,2),a=j[0],l=j[1],o=Object(s.useState)(t.types[0]),O=Object(r.a)(o,2),h=O[0],m=O[1];return Object(b.jsxs)("div",{className:"pizza-block",children:[Object(b.jsx)("img",{className:"pizza-block__image",src:t.imageUrl,alt:"Pizza"}),Object(b.jsx)("h4",{className:"pizza-block__title",children:t.name}),Object(b.jsxs)("div",{className:"pizza-block__selector",children:[Object(b.jsx)("ul",{children:i&&i.map((function(e,c){return Object(b.jsxs)("li",{onClick:function(){return function(e){m(e)}(c)},className:h===c?"active":t.types.includes(c)?"":"disabled",children:[e," "]},"size_".concat(c))}))}),Object(b.jsx)("ul",{children:c&&c.map((function(e,c){return Object(b.jsx)("li",{onClick:function(){return function(e){l(e)}(c)},className:a===c?"active":t.sizes.includes(c)?"":"disabled",children:e},"size_".concat(c))}))})]}),Object(b.jsxs)("div",{className:"pizza-block__bottom",children:[Object(b.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",t.price," \u0441\u043e\u043c"]}),Object(b.jsxs)("div",{className:"button button--outline button--add",onClick:function(){return d.addElem(t)},children:[Object(b.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(b.jsx)("span",{children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})]})},f=c(15);var g=function(){return Object(b.jsxs)(f.a,{speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(b.jsx)("circle",{cx:"132",cy:"142",r:"115"}),Object(b.jsx)("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),Object(b.jsx)("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),Object(b.jsx)("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),Object(b.jsx)("rect",{x:"137",y:"408",rx:"25",ry:"25",width:"140",height:"46"})]})};var N=function(e){var t=e.items,c=e.pizzas,i=e.snacks,n=e.desserts,j=e.drinks,a=e.combos,l=e.loading,o=Object(s.useState)("\u041f\u0438\u0446\u0446\u044b"),d=Object(r.a)(o,2),O=d[0],h=d[1],m=["\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0439","\u0441\u0440\u0435\u0434\u043d\u0438\u0439","\u0431\u043e\u043b\u044c\u0448\u043e\u0439"],x=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"];return Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"content__top",children:Object(b.jsx)("div",{className:"categories",children:Object(b.jsx)("ul",{children:t.map((function(e,t){return Object(b.jsx)("li",{onClick:function(){return function(e){h(e)}(e)},className:O===e?"active":"",children:e},"item_".concat(t))}))})})}),Object(b.jsxs)("h2",{className:"content__title",children:["\u0412\u0441\u0435 ",O.toLowerCase()]}),Object(b.jsx)("div",{className:"\u041f\u0438\u0446\u0446\u044b"===O?"content__items active-content":"content__items",children:l?c.map((function(e){return Object(b.jsx)(_,{pizza:e,sizes:m,types:x})})):c.map((function(e){return Object(b.jsx)(g,{items:e})}))}),Object(b.jsx)("div",{className:"\u041a\u043e\u043c\u0431\u043e"===O?"content__items active-content":"content__items",children:a.map((function(e){return Object(b.jsx)(_,{pizza:e,types:x,sizes:m})}))}),Object(b.jsx)("div",{className:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438"===O?"content__items active-content":"content__items",children:i.map((function(e){return Object(b.jsx)(_,{pizza:e,sizes:m,types:x})}))}),Object(b.jsx)("div",{className:"\u0414\u0435\u0441\u0435\u0440\u0442\u044b"===O?"content__items active-content":"content__items",children:n.map((function(e){return Object(b.jsx)(_,{pizza:e,sizes:m,types:x})}))}),Object(b.jsx)("div",{className:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438"===O?"content__items active-content":"content__items",children:j.map((function(e){return Object(b.jsx)(_,{pizza:e,types:x,sizes:m})}))})]})})};var z=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),j=Object(r.a)(n,2),a=j[0],l=j[1],o=Object(s.useState)([]),d=Object(r.a)(o,2),O=d[0],h=d[1],m=Object(s.useState)([]),x=Object(r.a)(m,2),u=x[0],_=x[1],f=Object(s.useState)([]),g=Object(r.a)(f,2),z=g[0],k=g[1],w=Object(s.useState)([]),y=Object(r.a)(w,2),C=y[0],S=y[1],E=Object(s.useState)([]),H=Object(r.a)(E,2),Z=H[0],B=H[1];return Object(s.useEffect)((function(){fetch("https://my-json-server.typicode.com/ryskeldi2237/json/db").then((function(e){return e.json()})).then((function(e){h(e.pizzas),_(e.snacks),k(e.desserts),i(!0)})),fetch("https://my-json-server.typicode.com/ryskeldi2237/json-2/db").then((function(e){return e.json()})).then((function(e){l(e.sliders),S(e.drinks),B(e.combos)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{sliders:a}),Object(b.jsx)(N,{items:["\u041f\u0438\u0446\u0446\u044b","\u041a\u043e\u043c\u0431\u043e","\u0417\u0430\u043a\u0443\u0441\u043a\u0438","\u0414\u0435\u0441\u0435\u0440\u0442\u044b","\u041d\u0430\u043f\u0438\u0442\u043a\u0438"],pizzas:O,snacks:u,desserts:z,drinks:C,combos:Z,loading:c}),Object(b.jsx)(v,{})]})};var k=function(){return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsxs)("div",{className:"footer__wrapper",children:[Object(b.jsxs)("div",{className:"footer__item",children:[Object(b.jsx)("div",{className:"footer__subtitle",children:"\u0414\u043e\u0434\u043e \u041f\u0438\u0446\u0446\u0430"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u041e \u043d\u0430\u0441"}),Object(b.jsx)("li",{children:"\u0414\u043e\u0434\u043e \u043a\u043d\u0438\u0433\u0430"}),Object(b.jsx)("li",{children:'\u0411\u043b\u043e\u0433 "\u0421\u0438\u043b\u0430 \u0443\u043c\u0430"'}),Object(b.jsx)("li",{children:"\u0414\u043e\u0434\u043e \u0418\u0421"})]})]}),Object(b.jsxs)("div",{className:"footer__item",children:[Object(b.jsx)("div",{className:"footer__subtitle",children:"\u0420\u0430\u0431\u043e\u0442\u0430"}),Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:"\u0412 \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u0438"})})]}),Object(b.jsxs)("div",{className:"footer__item del",children:[Object(b.jsx)("div",{className:"footer__subtitle",children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u043c"}),Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0435"})})]}),Object(b.jsxs)("div",{className:"footer__item",children:[Object(b.jsx)("div",{className:"footer__subtitle",children:"\u042d\u0442\u043e \u0438\u043d\u0442\u0440\u0435\u0441\u043d\u043e"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b \u0433\u043e\u0442\u043e\u0432\u0438\u043c \u0431\u0435\u0437 \u043f\u0435\u0440\u0447\u0430\u0442\u043e\u043a?"}),Object(b.jsx)("li",{children:"\u042d\u043a\u0441\u043a\u0443\u0440\u0441\u0438\u0438 \u0438 \u043c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441\u044b"})]})]})]}),Object(b.jsxs)("div",{className:"footer__end",children:[Object(b.jsx)("div",{className:"footer__dodo",children:"DODO PIZZA"}),Object(b.jsx)("div",{className:"footer__text",children:"\xa9 2021"})]})]})};var w=function(){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{children:Object(b.jsx)(z,{})})]}),Object(b.jsx)(k,{})]})};n.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.186dff76.chunk.js.map