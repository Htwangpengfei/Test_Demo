(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07e460c6"],{"11a5":function(t,e,i){"use strict";i("8998")},"25f0":function(t,e,i){"use strict";var a=i("6eeb"),s=i("825a"),n=i("d039"),o=i("ad6d"),c="toString",r=RegExp.prototype,l=r[c],f=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=c;(f||u)&&a(RegExp.prototype,c,(function(){var t=s(this),e=String(t.source),i=t.flags,a=String(void 0===i&&t instanceof RegExp&&!("flags"in r)?o.call(t):i);return"/"+e+"/"+a}),{unsafe:!0})},"2f5f":function(t,e,i){"use strict";i("9299")},"44c6":function(t,e,i){"use strict";i("59bf")},"51f8":function(t,e,i){},"59bf":function(t,e,i){},"7fe7":function(t,e,i){"use strict";i("51f8")},8418:function(t,e,i){"use strict";var a=i("c04e"),s=i("9bf2"),n=i("5c6c");t.exports=function(t,e,i){var o=a(e);o in t?s.f(t,o,n(0,i)):t[o]=i}},8998:function(t,e,i){},9299:function(t,e,i){},c84b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Navbar",{attrs:{dw:"static"}}),i("Movieinfo",{attrs:{info:t.movieInfo}}),i("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.myTimes,(function(e,a){return i("swiper-slide",{key:a},[i("p",{class:{choose:t.dateIndex==a},on:{click:function(e){return t.changeDate(a)}}},[t._v(" "+t._s(e)+" ")])])})),1),i("selectcard"),i("ul",t._l(t.cinemas,(function(t,e){return i("Cinemacell",{key:e,attrs:{info:t}})})),1)],1)},s=[],n=(i("d3b7"),i("25f0"),i("159b"),i("fb6a"),i("7212")),o=(i("a7a3"),i("eeb9")),c=i("d178"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie-info",style:"background-image:url( "+t.movieImg+" )"},[i("img",{attrs:{src:t.movieImg,alt:""}}),i("div",{staticClass:"info"},[i("p",{staticClass:"name"},[t._v(t._s(t.info.nm))]),i("p",[t._v(t._s(t.info.enm))]),t.info.sc?i("p",{staticClass:"wish"},[t._v(t._s(t.info.sc))]):i("p",{staticClass:"wish"},[t._v(t._s(t.info.wish)+"人想看")]),i("p",[t._v(t._s(t.info.cat))]),i("p",[t._v(t._s(t.info.src)+"/"+t._s(t.info.dur))]),i("p",[t._v(t._s(t.info.pubDesc))])])])},l=[],f=(i("ac1f"),i("5319"),{name:"movieinfo",props:["info"],computed:{movieImg:function(){if(this.info.img)return this.info.img.replace("/w.h","")}}}),u=f,m=(i("2f5f"),i("2877")),d=Object(m["a"])(u,r,l,!1,null,"42929bab",null),p=d.exports,v=i("e3e5"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"cinema-cell"},[i("div",{staticClass:"head"},[i("span",{staticClass:"name"},[t._v(t._s(t.info.nm))]),i("p",{staticClass:"money"},[i("span",{staticClass:"num"},[t._v(t._s(t.info.sellPrice))]),i("span",[t._v("元起")])])]),i("p",{staticClass:"address"},[t._v(t._s(t.info.addr))]),i("p",{staticClass:"tags"},t._l(t.info.labels,(function(e,a){return i("span",{key:a,style:"color:"+e.color+";border-color:"+e.color},[t._v(t._s(e.name))])})),0),t.info.promotion.cardPromotionTag?i("p",{staticClass:"opencard"},[i("span",{staticClass:"card"},[t._v("卡")]),i("span",[t._v(t._s(t.info.promotion.cardPromotionTag))])]):t._e(),i("p",{staticClass:"near"},[t._v("近期场次"+t._s(t.info.showTimes))])])},_=[],g={name:"cinemacell",props:["info"]},w=g,b=(i("11a5"),Object(m["a"])(w,h,_,!1,null,"4ea8e91b",null)),y=b.exports,C={name:"detail",data:function(){return{movieId:"",movieData:"",dateIndex:0,times:[],cinemas:[],movieInfo:{},swiperOption:{slidesPerView:3,spaceBetween:0,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0}}}},components:{Navbar:c["a"],Movieinfo:p,Swiper:n["Swiper"],SwiperSlide:n["SwiperSlide"],selectcard:v["a"],Cinemacell:y},methods:{getNowTime:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return e+"-"+i+"-"+a},changeDate:function(t){var e=this;this.dateIndex=t,this.movieData=this.times[t].date.toString(),o["a"].getDataForCinema(this.movieId,this.$store.state.city.id,this.movieData).then((function(t){e.cinemas=t.data.data.cinemas}))}},computed:{myTimes:function(){var t=["周日","周一","周二","周三","周四","周五","周六"],e=[];return this.times.forEach((function(i,a){var s=new Date(i.date),n="";n=0==a?"今天":1==a?"明天":2==a?"后天":t[s.getDay()];var o=s.getMonth()+1;o<10&&(o="0"+o),n=n+o+"月";var c=s.getDate();c<10&&(c="0"+c),n=n+c+"日",e.push(n)})),e}},created:function(){var t=this;this.movieId=window.location.hash.slice(9,window.location.hash.indexOf("?")),this.$store.commit("hideTabbar"),this.$store.commit("hideNavbar"),this.$store.commit("showMine",{isLeft:!0,title:this.$route.query.title,isRight:!1}),o["a"].getMovieDetail(this.$route.params.movieid).then((function(e){t.movieInfo=e.data.data.movie})),o["a"].getDetailCinemas(this.$route.params.movieid,this.getNowTime(),this.$store.state.city.id).then((function(e){t.cinemas=e.data.data.cinemas})),o["a"].getDetailSelect(this.$route.params.movieid,this.getNowTime(),this.$store.state.city.id).then((function(t){})),o["a"].getDetailTime(this.$route.params.movieid,this.$store.state.city.id).then((function(e){t.times=e.data.data.dates}))},destroyed:function(){this.$store.commit("showTabbar"),this.$store.commit("showNavbar"),this.$store.commit("showMine",{isLeft:!1,title:"咕咕查电影",isRight:!1})}},$=C,D=(i("7fe7"),Object(m["a"])($,a,s,!1,null,"534aee59",null));e["default"]=D.exports},e3e5:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select-card"},[i("p",[t._v("全城 "),i("a-icon",{attrs:{type:"caret-down"}})],1),i("p",[t._v("品牌 "),i("a-icon",{attrs:{type:"caret-down"}})],1),i("p",[t._v("特色 "),i("a-icon",{attrs:{type:"caret-down"}})],1)])},s=[],n={name:"selectcard"},o=n,c=(i("44c6"),i("2877")),r=Object(c["a"])(o,a,s,!1,null,"1c380b64",null);e["a"]=r.exports},fb6a:function(t,e,i){"use strict";var a=i("23e7"),s=i("861d"),n=i("e8b5"),o=i("23cb"),c=i("50c4"),r=i("fc6a"),l=i("8418"),f=i("b622"),u=i("1dde"),m=u("slice"),d=f("species"),p=[].slice,v=Math.max;a({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var i,a,f,u=r(this),m=c(u.length),h=o(t,m),_=o(void 0===e?m:e,m);if(n(u)&&(i=u.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?s(i)&&(i=i[d],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return p.call(u,h,_);for(a=new(void 0===i?Array:i)(v(_-h,0)),f=0;h<_;h++,f++)h in u&&l(a,f,u[h]);return a.length=f,a}})}}]);
//# sourceMappingURL=chunk-07e460c6.2922530d.js.map