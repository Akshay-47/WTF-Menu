(this["webpackJsonpwtf-menu"]=this["webpackJsonpwtf-menu"]||[]).push([[0],{30:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),i=a.n(c),o=a(4),s=a(17),m=a(14),p=a(60),d=(a(39),a(9)),l=a(10),u=function(e){return{type:"item/ADD_TO_CART",payload:e}},g={cartItems:[],cartIsOpen:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(l.a)({},g),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"item/ADD_TO_CART":console.log("In add tio cart");var a=t.payload,r=e.cartItems.findIndex((function(e){return e.id===a.id}));return 0===a.quantity?Object(l.a)({},e,{cartItems:[].concat(Object(d.a)(e.cartItems.slice(0,r)),Object(d.a)(e.cartItems.slice(r+1)))}):-1===r?Object(l.a)({},e,{cartItems:[].concat(Object(d.a)(e.cartItems),[a])}):Object(l.a)({},e,{cartItems:[].concat(Object(d.a)(e.cartItems.slice(0,r)),[a],Object(d.a)(e.cartItems.slice(r+1)))});case"TOGGLE_CART":return Object(l.a)({},e,{cartIsOpen:!e.cartIsOpen});default:return e}},j=[{id:1,name:"starter"},{id:2,name:"dessert"},{id:3,name:"main-course"},{id:4,name:"breads"}],y=function(e){return{type:"ON_COURSE_CHANGE",payload:e}},b=function(e,t){return{type:"UPDATE_ITEM_QUANTITY",payload:{quantity:e,itemId:t}}},h={categories:j,subCategory:[{id:1,categoryId:1,name:"Chicken Starter"},{id:2,categoryId:1,name:"Veg Starter"},{id:3,categoryId:3,name:"Chicken Main Course"},{id:4,categoryId:3,name:"Mutton Main Course"},{id:5,categoryId:3,name:"Veg Main Course"},{id:6,categoryId:4,name:"Indian Breads"},{id:7,categoryId:4,name:" Breads"},{id:8,categoryId:2,name:"Indian Sweets"},{id:9,categoryId:2,name:"Pastries"}],items:[{id:1,name:"Veg 65",isVeg:!0,price:130,categoryId:1,subCategoryId:2,poster:"https://s3.ap-south-1.amazonaws.com/mumbai.urbanpiper.com/media/bizmedia/l/2019/06/04/paneer_65_COMPRESSED.png",quantity:0},{id:2,name:"Gobi Manchurian",isVeg:!0,price:120,categoryId:1,subCategoryId:2,poster:"https://www.cookwithmanali.com/wp-content/uploads/2017/01/Restaurant-Style-Gobi-Manchurian.jpg",quantity:0},{id:3,name:"Mushroom Manchurian",isVeg:!0,price:280,categoryId:1,subCategoryId:2,poster:"https://i.ytimg.com/vi/cnD6lJxj9z8/hqdefault.jpg",quantity:0},{id:4,name:"Chicken Tikka",isVeg:!1,price:170,categoryId:1,subCategoryId:1,poster:"https://irepo.primecp.com/2017/10/351683/Tandoori-Chicken-Tikka-with-Lemon-and-Sage_ArticleImage-CategoryPage_ID-2483977.jpg?v=2483977",quantity:0},{id:5,name:"Indian Chicken Kebab",isVeg:!1,price:160,categoryId:1,subCategoryId:1,poster:"https://www.closetcooking.com/wp-content/uploads/2019/11/Chicken-Tikka-Masala-1200-8412.jpg",quantity:0},{id:6,name:"Tandoori-style Chicken Tikka Masala",isVeg:!1,price:160,categoryId:1,subCategoryId:1,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:7,name:"Special Chicken Curry",isVeg:!1,price:340,categoryId:3,subCategoryId:3,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:8,name:"Chicken Shahi Korma",isVeg:!1,price:330,categoryId:3,subCategoryId:3,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:9,name:"Mutton Rogan Josh",isVeg:!1,price:340,categoryId:3,subCategoryId:4,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:10,name:"Mutton Kolhapuri",isVeg:!1,price:370,categoryId:3,subCategoryId:4,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:11,name:"Veg Chatpata",isVeg:!0,price:170,categoryId:3,subCategoryId:5,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:12,name:"Palak Paneer",isVeg:!0,price:270,categoryId:3,subCategoryId:5,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:13,name:"Rumali Roti",isVeg:!0,price:50,categoryId:4,subCategoryId:6,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:14,name:"Butter Naan",isVeg:!0,price:70,categoryId:4,subCategoryId:6,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:15,name:"Garlic Bread",isVeg:!0,price:270,categoryId:4,subCategoryId:7,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:16,name:"Gulab Jamun",isVeg:!0,price:70,categoryId:2,subCategoryId:8,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0},{id:17,name:"Chocolate Brownie",isVeg:!1,price:70,categoryId:2,subCategoryId:9,poster:"https://www.charbroil.com/wp/wp-content/uploads/2017/05/xTandoori-1-e1507141965526-1.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rw+ri+rm+cp+md+ia=100+im=-1.ic.h8dDmn-OSW.jpg",quantity:0}],activeTab:j[0]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_COURSE_CHANGE":return Object(l.a)({},e,{activeTab:t.payload});case"UPDATE_ITEM_QUANTITY":var a=t.payload,r=a.quantity,n=a.itemId,c=e.items.findIndex((function(e){return e.id===n})),i=e.items[c];return i.quantity=r,Object(l.a)({},e,{items:[].concat(Object(d.a)(e.items.slice(0,c)),[i],Object(d.a)(e.items.slice(c+1)))});default:return e}},I=function(e){var t=e.item,a=Object(o.b)();return n.a.createElement("div",{className:"card-item"},n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("img",{src:t.poster,alt:t.name})),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"card-title"},t.name),n.a.createElement("div",{className:"item-rating"},"4.6 123 reviews"),n.a.createElement("div",{className:"card-footer"},n.a.createElement("div",{className:"item-price"}," \u20b9",t.price),0===t.quantity&&n.a.createElement("div",{className:"card-btn"},n.a.createElement(p.a,{variant:"outlined",onClick:function(){var e=t.quantity+1;a(b(e,t.id)),a(u(t))}},"+ Add")),t.quantity>0&&n.a.createElement("div",{className:"card-btn"},n.a.createElement(p.a,{variant:"outlined",onClick:function(){var e=t.quantity-1;a(b(e,t.id)),a(u(t))}},"-"),t.quantity,n.a.createElement(p.a,{variant:"outlined",onClick:function(){var e=t.quantity+1;a(b(e,t.id)),a(u(t))}},"+")))))},v=function(e){var t=e.course,a=Object(o.b)();return n.a.createElement("div",{onClick:function(){return a(y(t))},className:"outlined-card"},n.a.createElement(s.b,{to:"/tabs"},n.a.createElement("div",{className:"card-content"},t.name)))},f=function(){var e=Object(o.c)((function(e){return e.foodData.items})),t=Object(o.c)((function(e){return e.foodData.categories})),a=(Object(o.b)(),e.slice(0,4));return n.a.createElement("div",{className:"home-page"},n.a.createElement("div",{className:"heading"},n.a.createElement("h1",null,"WTF Menu"),n.a.createElement("small",null,"(Where's The Food MENU)")),n.a.createElement("br",null),n.a.createElement("h2",null,"Today's Special"),n.a.createElement("div",{className:"card-wrapper"},function(e){return e.map((function(e,t){return n.a.createElement(I,{key:t,item:e})}))}(a)),n.a.createElement("h2",null,"Courses"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"courses-wrapper"},function(e){return e.map((function(e,t){return n.a.createElement(v,{key:t,course:e})}))}(t))))},O=a(27),C=function(e){var t=e.item,a=e.childItems,c=Object(r.useState)(!1),i=Object(O.a)(c,2),o=i[0],s=i[1];return n.a.createElement("div",{className:"submenu"},n.a.createElement("div",{onClick:function(){return s(!o)},className:"submenu-item"},t.name),n.a.createElement("div",{className:"item-list "+(o?"active":"")},a.map((function(e,t){return n.a.createElement(I,{key:t,item:e})}))))},T=function(){var e=Object(o.c)((function(e){return e.foodData.categories})),t=Object(o.c)((function(e){return e.foodData.activeTab})),a=Object(o.c)((function(e){return e.foodData.subCategory})),r=Object(o.c)((function(e){return e.foodData.items})),c=Object(o.b)();return n.a.createElement("div",{className:"course-page"},n.a.createElement("div",{className:"back-btn-container"},n.a.createElement(s.b,{to:"/"},n.a.createElement("button",{className:"back-button"},"Back"))),n.a.createElement("div",{className:"course-items-wrapper"}," ",function(e){return e.map((function(e,a){return n.a.createElement("div",{className:"course-item "+(t.name===e.name?"active":""),onClick:function(){return c(y(e))},key:a},e.name)}))}(e)),n.a.createElement("div",{className:"sub-category-wrapper"},function(e,a){return e.map((function(e){return a.filter((function(t){return t.categoryId===e.id})).map((function(e,a){return n.a.createElement("div",{className:"submenu-wrapper "+(e.categoryId===t.id?"active":""),key:a},n.a.createElement(C,{item:e,childItems:(c=e,i=r,i.filter((function(e){return e.categoryId===c.categoryId&&e.subCategoryId===c.id})))}));var c,i}))}))}(e,a)))},N=function(){var e=Object(o.c)((function(e){return e.cartData.cartItems})),t=Object(o.c)((function(e){return e.cartData.cartIsOpen})),a=Object(o.b)();return n.a.createElement("div",{className:"cart"},e.length>0&&n.a.createElement("div",{className:"my-plate-wrapper"},n.a.createElement("div",{className:"my-plate",onClick:function(){a({type:"TOGGLE_CART"})}},n.a.createElement("div",null," ",e.length),n.a.createElement("div",null,"My Plate")),n.a.createElement("div",{className:"overlay "+(t?"active":"")},t&&n.a.createElement("div",{className:"visible-when-active"},n.a.createElement("div",{className:"back-btn-container"},n.a.createElement("button",{className:"back-button",onClick:function(){return a({type:"TOGGLE_CART"})}},"Close")),n.a.createElement("div",{className:"item-wrapper"},e.map((function(e,t){return n.a.createElement("div",{key:t,className:"single-item"},n.a.createElement(I,{key:t,item:e}),n.a.createElement("span",{className:"total-item-price"},e.price*e.quantity))}))),n.a.createElement("hr",null),n.a.createElement("div",{className:"cart-total"},n.a.createElement("h1",null," Cart Total: ",function(e){var t=0;return e.forEach((function(e){t+=e.quantity*e.price})),t}(e)))))))};a(41);var k=function(){return n.a.createElement(s.a,{basename:"WTF"},n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:f}),n.a.createElement(m.a,{exact:!0,path:"/tabs",component:T})),n.a.createElement(N,null))},D=a(16),q=a(26),S=Object(D.c)({foodData:E,cartData:w});var V=Object(D.e)(S,Object(D.d)(Object(D.a)(q.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));i.a.render(n.a.createElement(o.a,{store:V},n.a.createElement(k,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e4e28fb0.chunk.js.map