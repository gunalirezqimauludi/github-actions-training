(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{0:function(n,e,t){"use strict";e.a=function(n,e){var t=document.createElement("template");return t.innerHTML="\n    <style>\n      ".concat(e,"\n    </style>\n    ").concat(n,"\n  "),t}},10:function(n,e,t){"use strict";var r={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(n);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){n=n.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}};e.a=r},12:function(n,t,r){"use strict";(function(a){var i=r(9),o=r(18),s=r(4);function c(n,e,t,r,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return t(n),0}s.done?e(c):Promise.resolve(c).then(r,a)}function n(s){return function(){var n=this,o=arguments;return new Promise(function(e,t){var r=s.apply(n,o);function a(n){c(r,e,t,a,i,"next",n)}function i(n){c(r,e,t,a,i,"throw",n)}a(void 0)})}}r(15),r(56),r(58),r(16),r(17);var e={render:function(){return n(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="container">\n            <hero-image title="Let\'s explore good food near you."></hero-image>\n            <div class="main-list">\n                <div class="main-header">\n                    <div class="main-title">\n                        <h1>Recomended Restaurant</h1>\n                        <p>Try these and thank us later!</p>\n                    </div>\n                    <a href="#">See All</a>\n                </div>\n                <div class="main-content">\n                    <div class="shimmer-container-restaurants">\n                      <shimmer-card-restaurant></shimmer-card-restaurant>\n                      <shimmer-card-restaurant></shimmer-card-restaurant>\n                      <shimmer-card-restaurant></shimmer-card-restaurant>\n                      <shimmer-card-restaurant></shimmer-card-restaurant>\n                      <shimmer-card-restaurant></shimmer-card-restaurant>\n                    </div>\n                    <card-restaurant></card-restaurant>\n                </div>\n            </div>\n            <div class="main-list">\n                <div class="main-header">\n                    <div class="main-title">\n                        <h1>Recomended Food</h1>\n                        <p>Try these and thank us later!</p>\n                    </div>\n                    <a href="#">See All</a>\n                </div>\n                <div class="main-content">\n                    <div class="shimmer-container-foods">\n                      <shimmer-card-food></shimmer-card-food>\n                      <shimmer-card-food></shimmer-card-food>\n                      <shimmer-card-food></shimmer-card-food>\n                      <shimmer-card-food></shimmer-card-food>\n                      <shimmer-card-food></shimmer-card-food>\n                      <shimmer-card-food></shimmer-card-food>\n                    </div>\n                    <card-food></card-food>\n                </div>\n            </div>\n        </div>\n    ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return n(regeneratorRuntime.mark(function n(){var e,t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("card-restaurant"),n.prev=1,n.next=4,i.a.listRestaurant();case 4:r=n.sent,e.content=r,a(".shimmer-container-restaurants").remove(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),Object(s.a)(n.t0);case 12:return t=document.querySelector("card-food"),n.prev=13,n.next=16,o.a.listFood();case 16:r=n.sent,t.content=r,a(".shimmer-container-foods").remove(),n.next=24;break;case 21:n.prev=21,n.t1=n.catch(13),Object(s.a)(n.t1);case 24:case"end":return n.stop()}},n,null,[[1,9],[13,21]])}))()}};t.a=e}).call(this,r(2))},29:function(n,t,a){"use strict";(function(o){var n=a(8),r=a.n(n),s=a(10),c=a(9),m=a(30),d=a(4),u=a(5);function l(n,e,t,r,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return t(n),0}s.done?e(c):Promise.resolve(c).then(r,a)}function e(s){return function(){var n=this,o=arguments;return new Promise(function(e,t){var r=s.apply(n,o);function a(n){l(r,e,t,a,i,"next",n)}function i(n){l(r,e,t,a,i,"throw",n)}a(void 0)})}}a(64),a(66),a(68),a(17);n={render:function(){return e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="main-header">\n          <app-breadcrumb title=""></app-breadcrumb>\n          <shimmer-header-restaurant></shimmer-header-restaurant>\n          <header-restaurant></header-restaurant>\n      </div>\n      <div class="container">\n          <div class="main-menu">\n            <div class="shimmer-container-foods">\n              <shimmer-card-food></shimmer-card-food>\n              <shimmer-card-food></shimmer-card-food>\n              <shimmer-card-food></shimmer-card-food>\n              <shimmer-card-food></shimmer-card-food>\n              <shimmer-card-food></shimmer-card-food>\n              <shimmer-card-food></shimmer-card-food>\n            </div>\n          </div>\n          <div class="main-list" style="margin-top: 40px;">\n              <div class="main-header">\n                  <div class="main-title">\n                      <h1>Review</h1>\n                  </div>\n              </div>\n              <form class="main-form">\n                  <div class="col-form">\n                      <label for="name">Name</label>\n                      <input type="text" id="name" name="name" placeholder="Enter your name" value="">\n                  </div>\n                  <div class="col-form">\n                      <label for="review">Review</label>\n                      <textarea id="review" name="review" placeholder="Your review here..." rows="5"></textarea>\n                  </div>\n                  <button id="submitReview" aria-label="submit review" class="btn btn-warning">Submit</button>\n              </form>\n              <div class="main-review"></div>\n          </div>\n          <div id="likeButtonContainer"></div>\n      </div>\n    ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){var i=this;return e(regeneratorRuntime.mark(function n(){var e,t,r,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.a.parseActiveUrlWithoutCombiner(),t=document.querySelector("header-restaurant"),r=document.querySelector("app-breadcrumb"),n.prev=3,n.next=6,c.a.detailRestaurant(e.id);case 6:return a=n.sent,t.content=a,o("shimmer-header-restaurant").remove(),r.title=a.name,o(".main-menu").html(""),Object.keys(a.menus).map(function(n){return o(".main-menu").append(Object(u.d)(n,a.menus))}),a.customerReviews.map(function(n){return o(".main-review").append(Object(u.a)(n))}),window.scrollTo(0,0),n.next=16,i.addCustomerReviews(e.id);case 16:return n.next=18,m.a.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:{id:a.id,name:a.name,pictureId:a.pictureId,rating:a.rating,city:a.city,description:a.description}});case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(3),Object(d.a)(n.t0);case 23:case"end":return n.stop()}},n,null,[[3,20]])}))()},addCustomerReviews:function(t){return e(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o("#submitReview").click(function(){var n=document.getElementById("name").value,e=document.getElementById("review").value;""!==n||""!==e?(e={id:t,name:n,review:e},c.a.reviewRestaurant(e).then(function(n){n.customerReviews&&(r()("Thank You for Your Review","Your review has been sent successfully","success"),o(".main-review").html(""),n.customerReviews.map(function(n){return o(".main-review").append(Object(u.a)(n))}))})):r()("Sorry!","Please fill out the form completely to add your review!","error")});case 1:case"end":return n.stop()}},n)}))()}};t.a=n}).call(this,a(2))},30:function(n,e,t){"use strict";var r=t(6),a=t(5);function c(n,e,t,r,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return t(n),0}s.done?e(c):Promise.resolve(c).then(r,a)}function i(s){return function(){var n=this,o=arguments;return new Promise(function(e,t){var r=s.apply(n,o);function a(n){c(r,e,t,a,i,"next",n)}function i(n){c(r,e,t,a,i,"throw",n)}a(void 0)})}}t={init:function(r){var a=this;return i(regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.likeButtonContainer,t=r.restaurant,a._likeButtonContainer=e,a._restaurant=t,n.next=5,a._renderButton();case 5:case"end":return n.stop()}},n)}))()},_renderButton:function(){var t=this;return i(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t._restaurant.id,n.next=3,t._isrestaurantExist(e);case 3:if(!n.sent){n.next=7;break}t._renderLiked(),n.next=8;break;case 7:t._renderLike();case 8:case"end":return n.stop()}},n)}))()},_isrestaurantExist:function(t){return i(regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.getRestaurant(t);case 2:return e=n.sent,n.abrupt("return",!!e);case 4:case"end":return n.stop()}},n)}))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML=Object(a.b)(),document.querySelector("#likeButton").addEventListener("click",i(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.putRestaurant(e._restaurant);case 2:e._renderButton();case 3:case"end":return n.stop()}},n)})))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML=Object(a.c)(),document.querySelector("#likeButton").addEventListener("click",i(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return n.stop()}},n)})))}};e.a=t},4:function(n,e,t){"use strict";var r=t(8),a=t.n(r);e.a=function(n){return a()("Error!",n,"error")}},40:function(n,t,o){"use strict";(function(r){var a=o(6),i=o(4);function c(n,e,t,r,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return t(n),0}s.done?e(c):Promise.resolve(c).then(r,a)}function n(s){return function(){var n=this,o=arguments;return new Promise(function(e,t){var r=s.apply(n,o);function a(n){c(r,e,t,a,i,"next",n)}function i(n){c(r,e,t,a,i,"throw",n)}a(void 0)})}}o(15),o(16);var e={render:function(){return n(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <style>\n            .main-content .empty-favorite {\n                text-align: center;\n            }\n\n            .main-content .empty-favorite img {\n                width: 35%;\n            }\n\n            /* Medium devices (tablets, 768px and up) */\n            @media (max-width: 991.98px) {\n                .main-content card-restaurant {\n                    display: grid!important;\n                    grid-template-columns: 1fr;\n                    gap: 20px;\n                }\n\n                .main-content card-restaurant .main-card {\n                    width: 97%!important;\n                }\n\n                .main-content card-restaurant .main-card .col-image {\n                    height: 265px!important;\n                }\n            }\n\n            /* Large devices (desktops, 992px and up) */\n            @media (min-width: 992px) and (max-width: 1199.98px) {\n                .main-content card-restaurant {\n                    display: grid!important;\n                    grid-template-columns: 1fr 1fr 1fr 1fr;\n                    gap: 15px;\n                }\n\n                .main-content card-restaurant .main-card {\n                    width: 215px!important;\n                }\n\n                .main-content card-restaurant .main-card .col-image {\n                    height: 155px!important;\n                }\n            }\n\n            /* Extra large devices (large desktops, 1200px and up) */\n            @media (min-width: 1200px) {\n                .main-content card-restaurant {\n                    display: grid!important;\n                    grid-template-columns: 1fr 1fr 1fr 1fr;\n                    gap: 15px;\n                }\n\n                .main-content card-restaurant .main-card {\n                    width: 261px!important;\n                }\n\n                .main-content card-restaurant .main-card .col-image {\n                    height: 175px!important;\n                }\n            }\n        </style>\n        <div class="container">\n            <div class="main-list" style="margin-top: 80px;">\n                <div class="main-header">\n                    <div class="main-title">\n                        <h1>Favorited Restaurant</h1>\n                    </div>\n                </div>\n                <div class="main-content">\n                    <div class="shimmer-container-favorite">\n                        <shimmer-card-restaurant></shimmer-card-restaurant>\n                        <shimmer-card-restaurant></shimmer-card-restaurant>\n                        <shimmer-card-restaurant></shimmer-card-restaurant>\n                        <shimmer-card-restaurant></shimmer-card-restaurant>\n                        <shimmer-card-restaurant></shimmer-card-restaurant>\n                    </div>\n                    <card-restaurant></card-restaurant>\n                </div>\n            </div>\n        </div>\n    ');case 1:case"end":return n.stop()}},n)}))()},afterRender:function(){return n(regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("card-restaurant"),n.prev=1,n.next=4,a.a.getAllRestaurant();case 4:0===(t=n.sent).length?r(".main-content").html('<div class="empty-favorite">\n            <img src="/assets/images/empty-favorite.png">\n            <p>favorite restaurant data not found</p>\n        </div>'):e.content=t,r(".shimmer-container-favorite").remove(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),Object(i.a)(n.t0);case 12:case"end":return n.stop()}},n,null,[[1,9]])}))()}};t.a=e}).call(this,o(2))},41:function(n,e,t){"use strict";var r=t(42),a=t.n(r);function s(n,e,t,r,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return t(n),0}s.done?e(c):Promise.resolve(c).then(r,a)}var c,i,r=(c=regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("serviceWorker"in navigator)return n.next=3,a.a.register();n.next=4;break;case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}},n)}),i=function(){var n=this,o=arguments;return new Promise(function(e,t){var r=c.apply(n,o);function a(n){s(r,e,t,a,i,"next",n)}function i(n){s(r,e,t,a,i,"throw",n)}a(void 0)})},function(){return i.apply(this,arguments)});e.a=r},45:function(n,e,t){"use strict";var r={init:function(n){var e=this,t=n.button,r=n.drawer,n=n.content;t.addEventListener("click",function(n){e._toggleDrawer(n,r)}),n.addEventListener("click",function(n){e._closeDrawer(n,r)})},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}},a=t(10),i=t(12),o=t(29),t=t(40),s={"/":i.a,"/home":i.a,"/detail/:id":o.a,"/favorite":t.a};function c(n,e,t,r,a,i,o){try{var s=n[i](o),c=s.value}catch(n){return t(n),0}s.done?e(c):Promise.resolve(c).then(r,a)}function m(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var d,u,t=(o=l,t=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(d=regeneratorRuntime.mark(function n(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.a.parseActiveUrlWithCombiner(),e=s[e],n.next=4,e.render();case 4:return this._content.innerHTML=n.sent,n.next=7,e.afterRender();case 7:case"end":return n.stop()}},n,this)}),u=function(){var n=this,o=arguments;return new Promise(function(e,t){var r=d.apply(n,o);function a(n){c(r,e,t,a,i,"next",n)}function i(n){c(r,e,t,a,i,"throw",n)}a(void 0)})},function(){return u.apply(this,arguments)})}],m(o.prototype,t),l);function l(n){var e=n.button,t=n.drawer,n=n.content;!function(n){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(this),this._button=e,this._drawer=t,this._content=n,this._initialAppShell()}e.a=t},49:function(n,e,t){var r=t(50),t=t(51);"string"==typeof(t=t.__esModule?t.default:t)&&(t=[[n.i,t,""]]);r(t,{insert:"head",singleton:!1}),n.exports=t.locals||{}},5:function(n,e,t){"use strict";t.d(e,"d",function(){return r}),t.d(e,"a",function(){return a}),t.d(e,"b",function(){return i}),t.d(e,"c",function(){return o}),t(62);var r=function(n,e){return'\n  <div class="main-list" style="'.concat("drinks"===n?"margin-top: 40px;":"",'">\n      <div class="main-header">\n          <div class="main-title">\n              <h1>').concat(n,'</h1>\n          </div>\n      </div>\n      <div class="main-content">\n          <card-menu data-category="').concat(n,'" items="').concat(encodeURIComponent(JSON.stringify("foods"===n?e.foods:e.drinks)),'"></card-menu>\n      </div>\n  </div>\n')},a=function(n){return'\n  <div class="main-card">\n      <div class="col-image">\n          <img class="lazyload" src="assets/images/loading.gif" data-src="/assets/images/customer-review-medium.png"\n            data-srcset="/assets/images/customer-review-small.png 480w, /assets/images/customer-review-large.png 800w"\n            sizes="(max-width: 600px) 480px, 800px"\n            alt="'.concat(n.name,'" crossorigin="anonymous"/>\n      </div>\n      <div class="col-info">\n          <h4>').concat(n.name,'</h4>\n          <p class="note">').concat(n.review,'</p>\n          <p class="date">').concat(n.date,"</p>\n      </div>\n  </div>\n")},i=function(){return'\n  <button aria-label="like this restaurant" id="likeButton" class="btn btn-fab">\n    <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n'},o=function(){return'\n  <button aria-label="unlike this restaurant" id="likeButton" class="btn btn-fab">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n'}},51:function(n,e,t){var r=t(3),t=t(52);(e=r(!1)).i(t),e.push([n.i,'@font-face{font-family:\'Lato\';font-style:normal;font-weight:300;src:url("/assets/fonts/lato-v16-latin-300.eot");src:local("Lato Light"),local("Lato-Light"),url("/assets/fonts/lato-v16-latin-300.eot?#iefix") format("embedded-opentype"),url("/assets/fonts/lato-v16-latin-300.woff2") format("woff2"),url("/assets/fonts/lato-v16-latin-300.woff") format("woff"),url("/assets/fonts/lato-v16-latin-300.ttf") format("truetype"),url("/assets/fonts/lato-v16-latin-300.svg#Lato") format("svg");font-display:swap}@font-face{font-family:\'Lato\';font-style:normal;font-weight:400;src:url("/assets/fonts/lato-v16-latin-regular.eot");src:local("Lato Regular"),local("Lato-Regular"),url("/assets/fonts/lato-v16-latin-regular.eot?#iefix") format("embedded-opentype"),url("/assets/fonts/lato-v16-latin-regular.woff2") format("woff2"),url("/assets/fonts/lato-v16-latin-regular.woff") format("woff"),url("/assets/fonts/lato-v16-latin-regular.ttf") format("truetype"),url("/assets/fonts/lato-v16-latin-regular.svg#Lato") format("svg");font-display:swap}@font-face{font-family:\'Lato\';font-style:normal;font-weight:700;src:url("/assets/fonts/lato-v16-latin-700.eot");src:local("Lato Bold"),local("Lato-Bold"),url("/assets/fonts/lato-v16-latin-700.eot?#iefix") format("embedded-opentype"),url("/assets/fonts/lato-v16-latin-700.woff2") format("woff2"),url("/assets/fonts/lato-v16-latin-700.woff") format("woff"),url("/assets/fonts/lato-v16-latin-700.ttf") format("truetype"),url("/assets/fonts/lato-v16-latin-700.svg#Lato") format("svg");font-display:swap}ol.breadcrumb{padding:.8rem;margin-top:3.5rem;list-style:none}ol.breadcrumb li{display:inline;font-size:.8rem}ol.breadcrumb li+li:before{padding:8px;color:#3d3c3c;content:"/\\00a0"}ol.breadcrumb li a{color:#ffc107;text-decoration:none}ol.breadcrumb li a:hover{color:#ff9800}main .main-list .main-review{display:grid;grid-template-rows:1fr}main .main-list .main-review .main-card{display:grid;grid-template-columns:10% 90%;background-color:#fff;border-radius:10px;box-shadow:0 5px 10px 0 rgba(51,54,69,0.1);margin-bottom:15px}main .main-list .main-review .main-card .col-image{padding:10px;height:100%}main .main-list .main-review .main-card .col-image img{width:100%;border-radius:10px;object-fit:cover}main .main-list .main-review .main-card .col-info{padding:15px 5px}main .main-list .main-review .main-card .col-info h4{margin-top:10px;margin-bottom:0px}main .main-list .main-review .main-card .col-info p{font-size:10px;text-overflow:ellipsis;overflow:hidden;max-height:5.6em;line-height:1.8em;color:#6d6d6d;margin-bottom:0}main .main-list .main-review .main-card .col-info p.note{margin-top:5px}main .main-list .main-review .main-card .col-info p.date{font-size:8px;font-style:italic}main .main-list .main-form{padding:1.5rem;background-color:#fff;border-radius:10px;box-shadow:0 5px 10px 0 rgba(51,54,69,0.1);margin-bottom:15px}main .main-list .main-form .col-form{width:100%;display:grid;margin-bottom:15px}main .main-list .main-form .col-form label{margin-bottom:10px}main .main-list .main-form .col-form input,main .main-list .main-form .col-form textarea{width:auto}input,textarea{width:100%;padding:10px;border:1px solid #9a9a9a;border-radius:5px;outline-color:#ff9800;font-family:"Lato", sans-serif}@media (max-width: 767.98px){main .main-list .main-review .main-card{grid-template-columns:30% 70%}}.container{margin-right:auto;margin-left:auto}.shimmer-container-restaurants{display:flex;overflow-x:scroll;overflow-y:hidden;padding-bottom:20px;margin-right:-0.8rem;margin-left:-1.2rem;padding-left:1.2rem}.shimmer-container-foods{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:2fr;gap:5px}.shimmer-container-favorite{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:2fr;gap:5px}.empty-state{text-align:center;margin-top:2rem;display:grid}.empty-state span{font-size:1rem;color:#737373}.btn{display:block;padding:0.9rem;border:none;border-radius:5px;font-weight:bold;text-align:center;cursor:pointer}.btn.btn-warning{background-color:#ffc107}.btn.btn-warning:hover{background-color:#ff9800}.btn.btn-fab{background-color:#ffc107;position:fixed;width:60px;height:60px;right:20px;bottom:20px;border-radius:50%;color:white;box-shadow:0 5px 10px 0 rgba(51,54,69,0.1)}.btn.btn-fab i{font-size:24px}.btn.btn-fab:hover{background-color:#ff9800}.skip-link{position:fixed;top:-50px;left:0;background-color:#ffc107;color:#293a46;font-weight:bold;font-size:12px;padding:0.8rem 1rem;border-radius:5px;z-index:1030}.skip-link:focus{top:16px;left:16px}body{background-color:#ededf5;font-family:"Lato", sans-serif;color:#3c4f5c;padding:5px}a{outline:none;text-decoration:none;color:#3c4f5c}hr.separator{border:1px solid #00000008}main .main-list .main-header{display:grid;grid-template-columns:2fr 1fr;margin-top:20px;margin-bottom:15px}main .main-list .main-header .main-title h1{margin-top:0;margin-bottom:5px;color:#293a46;text-transform:capitalize;font-size:1em}main .main-list .main-header .main-title p{margin-top:0;margin-bottom:0;font-size:12px}main .main-list .main-header a{background:#ffc107;margin-top:auto;margin-bottom:auto;margin-left:auto;color:#fff;padding:.5rem 1rem;width:fit-content;border-radius:5px;font-size:12px}main .main-list .main-header a:hover{background:#ff9800}footer .container{text-align:center;font-size:10px;margin-top:3px;padding:10px 0}@media (min-width: 576px) and (max-width: 767.98px){.container{max-width:540px}}@media (min-width: 768px) and (max-width: 991.98px){.container{max-width:720px}}@media (min-width: 992px) and (max-width: 1199.98px){.container{max-width:960px}.shimmer-container-favorite{display:grid !important;grid-template-columns:1fr 1fr 1fr 1fr;gap:15px}}@media (min-width: 1200px){.container{max-width:1140px}.shimmer-container-favorite{display:grid !important;grid-template-columns:1fr 1fr 1fr 1fr;gap:15px}}@media (min-width: 992px){footer .container{margin-top:1.2rem}}@media (max-width: 991.98px){.shimmer-container-favorite{display:grid !important;grid-template-columns:1fr;gap:20px}.shimmer-container-favorite .shimmer-card-restaurant{width:97% !important}}\n',""]),n.exports=e}}]);