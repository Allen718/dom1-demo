parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var o=dom.Create("<div>hi</div>"),e=dom.Create("<div>ha ha</div>");dom.after(test,o),dom.wrap(test,e),console.log(o);var d=dom.empty(window.empty);console.log(d),dom.attr(test,"title","i am frank");var s=dom.attr(test,"title");console.log("title:".concat(s)),dom.text(test,"how are you"),dom.style(test,{border:"1px solid red",color:"blue"}),console.log(dom.style(test,"border")),dom.style(test,"border","1px solid black"),dom.class.add(test,"red"),dom.class.remove(test,"red"),console.log(dom.class.has(test,"red")),dom.on(test,"click",function(o){return console.log("点击了")});var t=dom.find("#siblings")[0];console.log(dom.find("#s2",t)[0]),console.log(dom.parent(s2)),console.log(dom.siblings(s2)),console.log(dom.siblings(dom.find("#s3")[0])),console.log(dom.next(s2)),console.log(dom.previous(s2));var l=dom.find("#travel")[0];dom.each(dom.children(l),fn=function(o){dom.style(o,"border","1px solid red")}),console.log(dom.index(s3));
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.20db35f0.js.map