/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || (function( doc, undefined ) {
  "use strict";
  var bool,
      docElem = doc.documentElement,
      refNode = docElem.firstElementChild || docElem.firstChild,
      // fakeBody required for <FF4 when executed in <head>
      fakeBody = doc.createElement( "body" ),
      div = doc.createElement( "div" );
  div.id = "mq-test-1";
  div.style.cssText = "position:absolute;top:-100em";
  fakeBody.style.background = "none";
  fakeBody.appendChild(div);
  return function(q){
    div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";
    docElem.insertBefore( fakeBody, refNode );
    bool = div.offsetWidth === 42;
    docElem.removeChild( fakeBody );
    return {
      matches: bool,
      media: q
    };
  };
}( document ));
// enquire v1.3.0 - Awesome Media Queries in JavaScript
// Copyright (c) 2012 Nick Williams - https://www.github.com/WickyNilliams/enquire.js
// License: MIT (//www.opensource.org/licenses/mit-license.php)
window.enquire=function(a){function b(a,b){var c=0,d=a.length,e;for(c;c<d;c++){e=b(a[c],c);if(e===!1)break}}function c(a){return Object.prototype.toString.apply(a)==="[object Array]"}function d(a){return typeof a=="function"}function e(a){this.initialised=!1,this.options=a,a.deferSetup||this.setup()}function f(a,b){this.query=a,this.handlers=[],this.matched=!1,this.isUnconditional=b}function g(){if(!a)throw new Error("matchMedia is required");var b=new f("only all");this.queries=[],this.listening=!1,this.browserIsIncapable=!b.matchMedia()}return"use strict",e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(a){this.initialised||this.setup(),this.options.match(a)},off:function(a){this.options.unmatch&&this.options.unmatch(a)}},f.prototype={matchMedia:function(){return a(this.query).matches},addHandler:function(a){var b=new e(a);this.handlers.push(b)},assess:function(){this.matchMedia()||this.isUnconditional?this.match():this.unmatch()},match:function(a){if(this.matched)return;b(this.handlers,function(b){b.on(a)}),this.matched=!0},unmatch:function(a){if(!this.matched)return;b(this.handlers,function(b){b.off(a)}),this.matched=!1}},g.prototype={register:function(a,e,g){var h=this.queries,i,j=g&&this.browserIsIncapable;return h.hasOwnProperty(a)||(h[a]=new f(a,j)),i=h[a],d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(a){i.addHandler(a)}),this},fire:function(a){var b=this.queries,c;for(c in b){if(!b.hasOwnProperty(c))continue;b[c].assess()}return this},listen:function(a){function d(d){var e;b(d,function(b){e&&clearTimeout(e),e=setTimeout(function(){c.fire(b)},a)})}var b=window.addEventListener||window.attachEvent,c=this;return a=a||500,this.listening?this:(c.fire(),d("resize"),d("orientationChange"),this.listening=!0,this)}},new g}(window.matchMedia);