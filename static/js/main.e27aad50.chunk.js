(window["webpackJsonpsight-words"]=window["webpackJsonpsight-words"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[["a","I","am","yellow"],["blue","like","boy","girl"],["green","the","is","see"],["pink","two","we","me","and","my","can","at"]]')},14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),i=(n(19),n(1)),s=n(5),l=n(6),d=n(12),u=n(7),f=n(13),w=n(2),p=n(9),h=n(10),m=n.n(h),v=function(){return r.a.createElement("div",{className:"toolbar"},r.a.createElement("div",{className:"toolbar__swipe-indicator"},"\u2190 Keep Practicing"),r.a.createElement("div",{className:"toolbar__swipe-indicator"},"Perfect \u2192"))},b=function(e){var t,n=e.cardsLeft;switch(n){case 1:t="".concat(n," card left");break;case 0:t="\ud83c\udf89";break;default:t="".concat(n," cards left")}return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer__cards-remaining"},t),r.a.createElement("footer",{className:"footer__footer"},r.a.createElement("p",null,"Made by Delaney's Dad")))},g=(n(24),n(11)),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={wordList:[],correct:[],incorrect:[]},n.componentDidMount=function(){n.loadWords(),Object(p.disableBodyScroll)(document)},n.loadWords=function(){var e,t=m()((e=[]).concat.apply(e,Object(i.a)(g)));n.setState({wordList:t})},n.resetScore=function(){n.setState({correct:[],incorrect:[]})},n.onSwipe=function(){n.setState((function(e){return e.wordList.shift(),{wordList:Object(i.a)(e.wordList)}}))},n.onSwipeLeft=function(e){n.setState({incorrect:[].concat(Object(i.a)(n.state.incorrect),[e])})},n.onSwipeRight=function(e){n.setState({correct:[].concat(Object(i.a)(n.state.correct),[e])})},n.onDoubleTap=function(e){n.setState((function(t){return t.wordList.shift(),{wordList:[].concat(Object(i.a)(t.wordList),[e])}}))},n.resetCards=function(){n.loadWords()},n.renderCardStack=function(){return n.state.wordList.map((function(e){return r.a.createElement(w.a,{key:e,onSwipe:n.onSwipe,onSwipeLeft:n.onSwipeLeft,onSwipeRight:n.onSwipeRight,onDoubleTap:n.onDoubleTap,data:e},e)}))},n.renderResults=function(){var e=n.state.correct;return r.a.createElement("div",{className:"results"},r.a.createElement("h1",null,"Score"),r.a.createElement("p",null,r.a.createElement("span",{className:"results__correct"},e.length)))},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},this.state.wordList.length<1&&r.a.createElement("button",{className:"reset-cards",onClick:function(){return e.resetCards()}},"Reset"),r.a.createElement(v,null),r.a.createElement(w.b,{addEndCard:function(){return e.renderResults()}},this.renderCardStack()),r.a.createElement(b,{cardsLeft:this.state.wordList.length}))}}]),t}(o.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");E?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.e27aad50.chunk.js.map