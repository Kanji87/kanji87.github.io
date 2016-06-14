/*!
 * Isotope PACKAGED v2.1.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):"object"==typeof exports?i(require("jquery")):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||o()}function o(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var o=s[t];o()}}function n(n){return"complete"===r.readyState?o():(n.bind(r,"DOMContentLoaded",i),n.bind(r,"readystatechange",i),n.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],n):"object"==typeof exports?module.exports=n(require("eventie")):t.docReady=n(t.eventie)}(window),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function n(i){function n(){if(!d){d=!0;var o=t.getComputedStyle;if(p=function(){var t=o?function(t){return o(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||r("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1"),i}}(),h=i("boxSizing")){var n=document.createElement("div");n.style.width="200px",n.style.padding="1px 2px 3px 4px",n.style.borderStyle="solid",n.style.borderWidth="1px 2px 3px 4px",n.style[h]="border-box";var s=document.body||document.documentElement;s.appendChild(n);var a=p(n);f=200===e(a.width),s.removeChild(n)}}}function a(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var i=p(t);if("none"===i.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var a=r.isBorderBox=!(!h||!i[h]||"border-box"!==i[h]),d=0,l=s.length;l>d;d++){var c=s[d],y=i[c];y=u(t,y);var m=parseFloat(y);r[c]=isNaN(m)?0:m}var g=r.paddingLeft+r.paddingRight,v=r.paddingTop+r.paddingBottom,_=r.marginLeft+r.marginRight,I=r.marginTop+r.marginBottom,L=r.borderLeftWidth+r.borderRightWidth,z=r.borderTopWidth+r.borderBottomWidth,b=a&&f,x=e(i.width);x!==!1&&(r.width=x+(b?0:g+L));var S=e(i.height);return S!==!1&&(r.height=S+(b?0:v+z)),r.innerWidth=r.width-(g+L),r.innerHeight=r.height-(v+z),r.outerWidth=r.width+_,r.outerHeight=r.height+I,r}}function u(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var o=e.style,n=o.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),o.left=i,i=o.pixelLeft,o.left=n,s&&(r.left=s),i}var p,h,f,d=!1;return a}var r="undefined"==typeof console?i:function(t){console.error(t)},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("desandro-get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t){function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){i(t);for(var o=t.parentNode.querySelectorAll(e),n=0,r=o.length;r>n;n++)if(o[n]===t)return!0;return!1}function n(t,o){return i(t),e(t,o)}var r,s=function(){if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,o=e.length;o>i;i++){var n=e[i],r=n+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),u=e(a,"div");r=u?e:n}else r=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var o=l[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=c[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property")):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=l(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):d(o)&&(i=o),this[t]=i?l(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=l(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize();var n=this.element.outlayerGUID;delete v[n],delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,d=i[s],l=d.getAttribute(n);try{f=l&&JSON.parse(l)}catch(c){u&&u.error("Error parsing "+n+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var y=new o(d,f);p&&p.data(d,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,d="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):"object"==typeof exports?module.exports=s(require("eventie"),require("doc-ready"),require("wolfy87-eventemitter"),require("get-size"),require("desandro-matches-selector"),require("./item")):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):"object"==typeof exports?module.exports=i(require("../layout-mode"),require("masonry-layout")):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var d=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=u,d.LayoutMode=h,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},d.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e
},d.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){function e(){o.reveal(i.needReveal),o.hide(i.needHide)}this.option(t),this._getIsInstant();var i=this._filter(this.items);this.filteredItems=i.matches;var o=this;this._isInstant?this._noTransition(e):e(),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],o=[],n=[],r=this._getFilterTest(e),s=0,a=t.length;a>s;s++){var u=t[s];if(!u.isIgnored){var p=r(u);p&&i.push(u),p&&u.isHidden?o.push(u):p||u.isHidden||n.push(u)}}return{matches:i,needReveal:o,needHide:n}},d.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.prototype.updateSortData=function(t){var e;t?(t=o(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=d.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},d.prototype._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e).matches;for(i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(c.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):"object"==typeof exports?module.exports=r(require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!function(a){a.fn.appear=function(b,c){var d=a.extend({data:void 0,one:!0,accX:0,accY:0},c);return this.each(function(){var c=a(this);if(c.appeared=!1,!b)return c.trigger("appear",d.data),void 0;var e=a(window),f=function(){if(!c.is(":visible"))return c.appeared=!1,void 0;var a=e.scrollLeft(),b=e.scrollTop(),f=c.offset(),g=f.left,h=f.top,i=d.accX,j=d.accY,k=c.height(),l=e.height(),m=c.width(),n=e.width();h+k+j>=b&&b+l+j>=h&&g+m+i>=a&&a+n+i>=g?c.appeared||c.trigger("appear",d.data):c.appeared=!1},g=function(){if(c.appeared=!0,d.one){e.unbind("scroll",f);var g=a.inArray(f,a.fn.appear.checks);g>=0&&a.fn.appear.checks.splice(g,1)}b.apply(this,arguments)};d.one?c.one("appear",d.data,g):c.bind("appear",d.data,g),e.scroll(f),a.fn.appear.checks.push(f),f()})},a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0)for(;b--;)a.fn.appear.checks[b]()},run:function(){a.fn.appear.timeout&&clearTimeout(a.fn.appear.timeout),a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}}),a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(b,c){var d=a.fn[c];d&&(a.fn[c]=function(){var b=d.apply(this,arguments);return a.fn.appear.run(),b})})}(jQuery);
/***
 * BxSlider v4.2.3 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 ***/

;(function($){

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,
		slideZIndex: 50,
		wrapperClass: 'bx-wrapper',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// KEYBOARD
		keyboardEnabled: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		autoSlideForOnePage: false,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function(){ return true },
		onSlideBefore: function(){ return true },
		onSlideAfter: function(){ return true },
		onSlideNext: function(){ return true },
		onSlidePrev: function(){ return true },
		onSliderResize: function(){ return true }
	};

	$.fn.bxSlider = function(options){

		if(this.length === 0){
			return this;
		}

		// support multiple elements
		if(this.length > 1){
			this.each(function(){
				$(this).bxSlider(options);
			});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks a lot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides){ slider.settings.minSlides = slider.children.length; }
			if(slider.children.length < slider.settings.maxSlides){ slider.settings.maxSlides = slider.children.length; }
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart){ slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
			// store active slide information
			slider.active = { index: slider.settings.startSlide };
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel){ slider.settings.preloadImages = 'all'; }
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode === 'vertical'){ slider.settings.maxSlides = slider.settings.minSlides; }
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function(){
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		};

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
			// store a namespace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
				position: 'absolute'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager && !slider.settings.controls){
				slider.viewport.parent().css({
					margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0){ slider.children.css('marginRight', slider.settings.slideMargin); }
			if(slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0){ slider.children.css('marginBottom', slider.settings.slideMargin); }
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode === 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions){ appendCaptions(); }
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video){ el.fitVids(); }
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if(slider.settings.preloadImages === "all" || slider.settings.ticker){ preloadSelector = slider.children; }
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if controls are requested, add them
				if(slider.settings.controls){ appendControls(); }
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls){ appendControlsAuto(); }
				// if pager is requested, add it
				if(slider.settings.pager){ appendPager(); }
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager){ slider.viewport.after(slider.controls.el); }
			// if ticker mode, do not allow a pager
			} else {
				slider.settings.pager = false;
			}
			loadElements(preloadSelector, start);
		};

		var loadElements = function(selector, callback){
			var total = selector.find('img:not([src=""]), iframe').length;
			if(total === 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img:not([src=""]), iframe').each(function(){
				$(this).one('load error', function(){
				  if(++count === total){ callback(); }
				}).each(function(){
				  if(this.complete){ $(this).load(); }
				});
			});
		};

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone(true).addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if(slider.settings.mode === 'vertical'){ slider.settings.adaptiveHeight = true; }
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider,slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if(slider.settings.responsive){ $(window).bind('resize', resizeWindow); }
			// if auto is true and has more than 1 page, start the show
			if(slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)){ initAuto(); }
			// if ticker is true, start the ticker
			if(slider.settings.ticker){ initTicker(); }
			// if pager is requested, make the appropriate pager link active
			if(slider.settings.pager){ updatePagerActive(slider.settings.startSlide); }
			// check for any updates to the controls (like hideControlOnEnd updates)
			if(slider.settings.controls){ updateDirectionControls(); }
			// if touchEnabled is true, setup the touch events
			if(slider.settings.touchEnabled && !slider.settings.ticker){ initTouch(); }
			// if keyboardEnabled is true, setup the keyboard events
			if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
				$(document).keydown(keyPress);
			}
		};

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode === 'vertical'){
				children.each(function(index){
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}

			if(slider.viewport.css('box-sizing') === 'border-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
							parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
			}else if(slider.viewport.css('box-sizing') === 'padding-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
			}

			return height;
		};

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode === 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		};

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth === 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode === 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		};

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than maxThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width() + slider.settings.slideMargin;
					slidesShowing = Math.floor((slider.viewport.width() +
						slider.settings.slideMargin) / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode === 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		};

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = Math.ceil(slider.children.length / getMoveBy());
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0;
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		};

		/**
		 * Returns the number of individual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		};

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			var position;
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if(slider.settings.mode === 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
				}else if(slider.settings.mode === 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if(slider.active.index === getPagerQty() - 1){ slider.active.last = true; }
				// set the respective position
				if(position !== undefined){
					if(slider.settings.mode === 'horizontal'){ setPositionProperty(-position.left, 'reset', 0); }
					else if(slider.settings.mode === 'vertical'){ setPositionProperty(-position.top, 'reset', 0); }
				}
			}
		};

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slide', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type === 'slide'){
					setTimeout(function() {
						// set the property value
						el.css(slider.animProp, propValue);
						// if value 0, just update
						if(value === 0) {
							updateAfterSlideTransition();
						} else {
							// bind a callback method - executes when CSS transition completes
							el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
								// unbind the callback
								el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
								updateAfterSlideTransition();
							});
						}
					}, 0);
				}else if(type === 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type === 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params.resetValue, 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type === 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type === 'reset'){
					el.css(slider.animProp, value);
				}else if(type === 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params.resetValue, 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		};

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			}
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		};

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.on('click touchend', 'a', clickPagerBind);
		};

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click touchend', clickNextBind);
			slider.controls.prev.bind('click touchend', clickPrevBind);
			// if nextSelector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSelector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		};

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
			slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		};

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if(title !== undefined && ('' + title).length){
					$(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
				}
			});
		};

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			e.preventDefault();
			if (slider.controls.el.hasClass('disabled')) {
				return;
			}
			// if auto show is running, stop it
			if(slider.settings.auto){ el.stopAuto(); }
			el.goToNextSlide();
		};

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			e.preventDefault();
			if (slider.controls.el.hasClass('disabled')) {
				return;
			}
			// if auto show is running, stop it
			if(slider.settings.auto){ el.stopAuto(); }
			el.goToPrevSlide();
		};

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		};

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		};

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			e.preventDefault();
			if (slider.controls.el.hasClass('disabled')) {
				return;
			}
			// if auto show is running, stop it
			if(slider.settings.auto){ el.stopAuto(); }
			var pagerLink = $(e.currentTarget);
			if(pagerLink.attr('data-slide-index') !== undefined){
				var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
				// if clicked pager link is not active, continue with the goToSlide call
				if(pagerIndex !== slider.active.index){ el.goToSlide(pagerIndex); }
			}
		};

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType === 'short'){
				if(slider.settings.maxSlides > 1){
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el){ $(el).find('a').eq(slideIndex).addClass('active'); });
		};

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinite loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index === 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index === getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index === slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if(position){
					if(slider.settings.mode === 'horizontal'){ setPositionProperty(-position.left, 'reset', 0); }
					else if(slider.settings.mode === 'vertical'){ setPositionProperty(-position.top, 'reset', 0); }
				}
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		};

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		};

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() === 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if(slider.active.index === 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index === getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		};

		/**
		 * Initializes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();

				//add focus and blur events to ensure its running if timeout gets paused
				$(window).focus(function() {
					el.startAuto();
				}).blur(function() {
					el.stopAuto();
				});


			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true argument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true argument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		};

		/**
		 * Initializes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection === 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover){
				if(slider.usingCSS){
					var value;
					var idx = slider.settings.mode == 'horizontal' ? 4 : 5;
					slider.viewport.hover(function(){
						var transform = el.css('-' + slider.cssPrefix + '-transform');
						value = parseFloat(transform.split(',')[idx]);
						setPositionProperty(value, 'reset', 0);
					}, function(){
						var totalDimens = 0;
						slider.children.each(function(index){
						  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
						});
						// calculate the speed ratio (used to determine the new speed to finish the paused animation)
						var ratio = slider.settings.speed / totalDimens;
						// determine which property to use
						var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
						// calculate the new speed
						var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
						tickerLoop(newSpeed);
					});
				} else {
					// on el hover
					slider.viewport.hover(function(){
						el.stop();
					}, function(){
						// calculate the total width of children (used to calculate the speed ratio)
						var totalDimens = 0;
						slider.children.each(function(index){
						  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
						});
						// calculate the speed ratio (used to determine the new speed to finish the paused animation)
						var ratio = slider.settings.speed / totalDimens;
						// determine which property to use
						var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
						// calculate the new speed
						var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
						tickerLoop(newSpeed);
					});
				}
			}
			// start the ticker loop
			tickerLoop();
		};

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection === 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		};

		/**
		 * Check if el is on screen
		 */
		var isOnScreen = function(el){
			var win = $(window);
			var viewport = {
				top : win.scrollTop(),
				left : win.scrollLeft()
			};
			viewport.right = viewport.left + win.width();
			viewport.bottom = viewport.top + win.height();

			var bounds = el.offset();
			bounds.right = bounds.left + el.outerWidth();
			bounds.bottom = bounds.top + el.outerHeight();

			return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		};

		/**
		 * Initializes keyboard events
		 */
		var keyPress = function(e){
			var activeElementTag = document.activeElement.tagName.toLowerCase();
			var tagFilters='input|textarea';
			var p = new RegExp(activeElementTag,["i"]);
			var result = p.exec(tagFilters);
			if (result == null && isOnScreen(el)) {
				if (e.keyCode == 39) {
					clickNextBind(e);
					return false;
				}
				else if (e.keyCode == 37) {
					clickPrevBind(e);
					return false;
				}
			}
		};

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			};
			slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

			//for browsers that have implemented pointer events and fire a click after
			//every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
			slider.viewport.on('click', '.bxslider a', function(e) {
				if (slider.viewport.hasClass('click-disabled')) {
					e.preventDefault();
					slider.viewport.removeClass('click-disabled');
				}
			});
		};

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			//disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
			slider.controls.el.addClass('disabled');

			if(slider.working){
				e.preventDefault();
				slider.controls.el.removeClass('disabled');
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				var touchPoints = (typeof orig.changedTouches != 'undefined') ? orig.changedTouches : [orig];
				// record the starting touch x, y coordinates
				slider.touch.start.x = touchPoints[0].pageX;
				slider.touch.start.y = touchPoints[0].pageY;

				if (slider.viewport.get(0).setPointerCapture) {
					slider.pointerId = orig.pointerId;
					slider.viewport.get(0).setPointerCapture(slider.pointerId);
				}
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
				slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
			}
		};

		/**
		 * Cancel Pointer for Windows Phone
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onPointerCancel = function(e) {
		/* onPointerCancel handler is needed to deal with situations when a touchend
		doesn't fire after a touchstart (this happens on windows phones only) */
			setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

			//remove handlers
			slider.controls.el.removeClass('disabled');
			slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
			slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
			slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
			if (slider.viewport.get(0).releasePointerCapture) {
				slider.viewport.get(0).releasePointerCapture(slider.pointerId);
 			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			var touchPoints = (typeof orig.changedTouches != 'undefined') ? orig.changedTouches : [orig];
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch){
				var value = 0, change = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode === 'horizontal'){
					change = touchPoints[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					change = touchPoints[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		};

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
			//enable slider controls as soon as user stops interacing with slides
			slider.controls.el.removeClass('disabled');
			var orig = e.originalEvent;
			var touchPoints = (typeof orig.changedTouches != 'undefined') ? orig.changedTouches : [orig];
			var value = 0;
			var distance = 0;
			// record end x, y positions
			slider.touch.end.x = touchPoints[0].pageX;
			slider.touch.end.y = touchPoints[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode === 'fade'){
				distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					if(slider.touch.start.x > slider.touch.end.x){
						el.goToNextSlide();
					} else {
						el.goToPrevSlide();
					}
					el.stopAuto();
				}
			// not fade mode
			}else{
				// calculate distance and el's animate property
				if(slider.settings.mode === 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						if(distance < 0){
							el.goToNextSlide();
						} else {
							el.goToPrevSlide();
						}
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
			if (slider.viewport.get(0).releasePointerCapture) {
				slider.viewport.get(0).releasePointerCapture(slider.pointerId);
			}
		};

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// don't do anything if slider isn't initialized.
			if(!slider.initialized){ return; }
			// Delay if slider working.
			if (slider.working) {
				window.setTimeout(resizeWindow, 10);
			} else {
				// get the new window dimens (again, thank you IE)
				var windowWidthNew = $(window).width();
				var windowHeightNew = $(window).height();
				// make sure that it is a true window resize
				// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
				// are resized. Can you just die already?*
				if(windowWidth !== windowWidthNew || windowHeight !== windowHeightNew){
					// set the new window dimens
					windowWidth = windowWidthNew;
					windowHeight = windowHeightNew;
					// update all dynamic elements
					el.redrawSlider();
					// Call user resize handler
					slider.settings.onSliderResize.call(el, slider.active.index);
				}
			}
		};

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index === slideIndex){ return; }
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			// Allow transition canceling based on returned value
			var performTransition = true;

			performTransition = slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

			if ( typeof(performTransition) !== "undefined" && !performTransition ) {
				slider.active.index = slider.oldIndex; // restore old index
				slider.working = false; // is not in motion
				return;
			}
			if(direction === 'next'){
				// Prevent canceling in future functions or lack there-of from negating previous commands to cancel
				if(!slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)){
					performTransition = false;
				}
			}else if(direction === 'prev'){
				// Prevent canceling in future functions or lack there-of from negating previous commands to cancel
				if(!slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)){
					performTransition = false;
				}
			}

			// If transitions canceled, reset and return
			if ( typeof(performTransition) !== "undefined" && !performTransition ) {
				slider.active.index = slider.oldIndex; // restore old index
				slider.working = false; // is not in motion
				return;
			}

			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager || slider.settings.pagerCustom){ updatePagerActive(slider.active.index); }
			// // check for direction control update
			if(slider.settings.controls){ updateDirectionControls(); }
			// if slider is set to mode: "fade"
			if(slider.settings.mode === 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				var lastChild = null;
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode === 'horizontal'){
						// get the last child position
						lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction === 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction === 'next' && slider.active.index === 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}


				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if("undefined" !== typeof(position)){
					var value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		};

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if(!slider.settings.infiniteLoop && slider.active.last){ return; }
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		};

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if(!slider.settings.infiniteLoop && slider.active.index === 0){ return; }
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		};

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval){ return; }
			// create an interval
			slider.interval = setInterval(function(){
				if(slider.settings.autoDirection === 'next'){
					el.goToNextSlide();
				}else{
					el.goToPrevSlide();
				}
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if(slider.settings.autoControls && preventControlUpdate !== true){ updateAutoControls('stop'); }
		};

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval){ return; }
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if(slider.settings.autoControls && preventControlUpdate !== true){ updateAutoControls('start'); }
		};

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		};

		/**
		 * Returns current slide element
		 */
		el.getCurrentSlideElement = function(){
			return slider.children.eq(slider.active.index);
		};

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		};

		/**
		 * Return slider.working variable
		 */
		el.isWorking = function() {
			return slider.working;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) { setSlidePosition(); }
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		};

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized){ return; }
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function(){
				if($(this).data("origStyle") !== undefined){
					$(this).attr("style", $(this).data("origStyle"));
				} else {
					$(this).removeAttr('style');
				}
			});
			if($(this).data("origStyle") !== undefined){
				this.attr("style", $(this).data("origStyle"));
			} else {
				$(this).removeAttr('style');
			}
			$(this).unwrap().unwrap();
			if(slider.controls.el){ slider.controls.el.remove(); }
			if(slider.controls.next){ slider.controls.next.remove(); }
			if(slider.controls.prev){ slider.controls.prev.remove(); }
			if(slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom){ slider.pagerEl.remove(); }
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl){ slider.controls.autoEl.remove(); }
			clearInterval(slider.interval);
			if(slider.settings.responsive){ $(window).unbind('resize', resizeWindow); }
			if(slider.settings.keyboardEnabled){ $(document).unbind('keydown', keyPress); }
		};

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if(settings !== undefined){ options = settings; }
			el.destroySlider();
			init();
		};

		init();

		// returns the current jQuery object
		return this;
	};

})(jQuery);

!function(a){function b(a,b){return a.toFixed(b.decimals)}a.fn.countTo=function(b){return b=b||{},a(this).each(function(){function k(){i+=e,h++,l(i),"function"==typeof c.onUpdate&&c.onUpdate.call(f,i),h>=d&&(g.removeData("countTo"),clearInterval(j.interval),i=c.to,"function"==typeof c.onComplete&&c.onComplete.call(f,i))}function l(a){var b=c.formatter.call(f,a,c);g.html(b)}var c=a.extend({},a.fn.countTo.defaults,{from:a(this).data("from"),to:a(this).data("to"),speed:a(this).data("speed"),refreshInterval:a(this).data("refresh-interval"),decimals:a(this).data("decimals")},b),d=Math.ceil(c.speed/c.refreshInterval),e=(c.to-c.from)/d,f=this,g=a(this),h=0,i=c.from,j=g.data("countTo")||{};g.data("countTo",j),j.interval&&clearInterval(j.interval),j.interval=setInterval(k,c.refreshInterval),l(i)})},a.fn.countTo.defaults={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:b,onUpdate:null,onComplete:null}}(jQuery);
/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

var $event = $.event,
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

!function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],f="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";d.className="fit-vids-style",d.id="fit-vids-style",d.style.display="none",d.innerHTML=f,e.parentNode.insertBefore(d,e)}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);
if ( typeof(google) !== "undefined" ) {
/**
 * jQuery gMap v3
 *
 * @url         http://www.smashinglabs.pl/gmap
 * @author      Sebastian Poreba <sebastian.poreba@gmail.com>
 * @version     3.3.3
 * @date        27.12.2012
 */
(function(j){var p=function(){this.markers=[];this.mainMarker=!1;this.icon="http://www.google.com/mapfiles/marker.png"};p.prototype.dist=function(a){return Math.sqrt(Math.pow(this.markers[0].latitude-a.latitude,2)+Math.pow(this.markers[0].longitude-a.longitude,2))};p.prototype.setIcon=function(a){this.icon=a};p.prototype.addMarker=function(a){this.markers[this.markers.length]=a};p.prototype.getMarker=function(){if(this.mainmarker)return this.mainmarker;var a,b;1<this.markers.length?(a=new e.MarkerImage("http://thydzik.com/thydzikGoogleMap/markerlink.php?text="+
    this.markers.length+"&color=EF9D3F"),b="cluster of "+this.markers.length+" markers"):(a=new e.MarkerImage(this.icon),b=this.markers[0].title);return this.mainmarker=new e.Marker({position:new e.LatLng(this.markers[0].latitude,this.markers[0].longitude),icon:a,title:b,map:null})};var e=google.maps,q=new e.Geocoder,l=0,r=0,f={},f={init:function(a){var b,c=j.extend({},j.fn.gMap.defaults,a);for(b in j.fn.gMap.defaults.icon)c.icon[b]||(c.icon[b]=j.fn.gMap.defaults.icon[b]);return this.each(function(){var a=
    j(this),b=f._getMapCenter.apply(a,[c]);"fit"==c.zoom&&(c.zoomFit=!0,c.zoom=f._autoZoom.apply(a,[c]));var g={zoom:c.zoom,center:b,mapTypeControl:c.mapTypeControl,mapTypeControlOptions:{},zoomControl:c.zoomControl,zoomControlOptions:{},panControl:c.panControl,panControlOptions:{},scaleControl:c.scaleControl,scaleControlOptions:{},streetViewControl:c.streetViewControl,streetViewControlOptions:{},mapTypeId:c.maptype,scrollwheel:c.scrollwheel,maxZoom:c.maxZoom,minZoom:c.minZoom};c.controlsPositions.mapType&&
(g.mapTypeControlOptions.position=c.controlsPositions.mapType);c.controlsPositions.zoom&&(g.zoomControlOptions.position=c.controlsPositions.zoom);c.controlsPositions.pan&&(g.panControlOptions.position=c.controlsPositions.pan);c.controlsPositions.scale&&(g.scaleControlOptions.position=c.controlsPositions.scale);c.controlsPositions.streetView&&(g.streetViewControlOptions.position=c.controlsPositions.streetView);c.styles&&(g.styles=c.styles);g.mapTypeControlOptions.style=c.controlsStyle.mapType;g.zoomControlOptions.style=
    c.controlsStyle.zoom;g=new e.Map(this,g);c.log&&console.log("map center is:");c.log&&console.log(b);a.data("$gmap",g);a.data("gmap",{opts:c,gmap:g,markers:[],markerKeys:{},infoWindow:null,clusters:[]});if(0!==c.controls.length)for(b=0;b<c.controls.length;b+=1)g.controls[c.controls[b].pos].push(c.controls[b].div);c.clustering.enabled?(b=a.data("gmap"),b.markers=c.markers,f._renderCluster.apply(a,[]),e.event.addListener(g,"bounds_changed",function(){f._renderCluster.apply(a,[])})):0!==c.markers.length&&
    f.addMarkers.apply(a,[c.markers]);f._onComplete.apply(a,[])})},_delayedMode:!1,_onComplete:function(){var a=this.data("gmap"),b=this;if(0!==l)window.setTimeout(function(){f._onComplete.apply(b,[])},100);else{if(f._delayedMode){var c=f._getMapCenter.apply(this,[a.opts,!0]);f._setMapCenter.apply(this,[c]);a.opts.zoomFit&&(c=f._autoZoom.apply(this,[a.opts,!0]),a.gmap.setZoom(c))}a.opts.onComplete()}},_setMapCenter:function(a){var b=this.data("gmap");b&&b.opts.log&&console.log("delayed setMapCenter called");
  if(b&&void 0!==b.gmap&&0==l)b.gmap.setCenter(a);else{var c=this;window.setTimeout(function(){f._setMapCenter.apply(c,[a])},100)}},_boundaries:null,_getBoundaries:function(a){var b=a.markers,c,h=1E3,d=-1E3,g=1E3,e=-1E3;if(b){for(c=0;c<b.length;c+=1)b[c].latitude&&b[c].longitude&&(h>b[c].latitude&&(h=b[c].latitude),d<b[c].longitude&&(d=b[c].longitude),g>b[c].longitude&&(g=b[c].longitude),e<b[c].latitude&&(e=b[c].latitude),a.log&&console.log(b[c].latitude,b[c].longitude,h,d,g,e));f._boundaries={N:h,
  E:d,W:g,S:e}}-1E3==h&&(f._boundaries={N:0,E:0,W:0,S:0});return f._boundaries},_getBoundariesFromMarkers:function(){var a=this.data("gmap").markers,b,c=1E3,h=-1E3,d=1E3,g=-1E3;if(a){for(b=0;b<a.length;b+=1)c>a[b].getPosition().lat()&&(c=a[b].getPosition().lat()),h<a[b].getPosition().lng()&&(h=a[b].getPosition().lng()),d>a[b].getPosition().lng()&&(d=a[b].getPosition().lng()),g<a[b].getPosition().lat()&&(g=a[b].getPosition().lat());f._boundaries={N:c,E:h,W:d,S:g}}-1E3==c&&(f._boundaries={N:0,E:0,W:0,
  S:0});return f._boundaries},_getMapCenter:function(a,b){var c,h=this,d,g;if(a.markers.length&&("fit"==a.latitude||"fit"==a.longitude))return d=b?f._getBoundariesFromMarkers.apply(this):f._getBoundaries(a),c=new e.LatLng((d.N+d.S)/2,(d.E+d.W)/2),a.log&&console.log(b,d,c),c;if(a.latitude&&a.longitude)return c=new e.LatLng(a.latitude,a.longitude);c=new e.LatLng(0,0);if(a.address)return q.geocode({address:a.address},function(b,c){c===google.maps.GeocoderStatus.OK?f._setMapCenter.apply(h,[b[0].geometry.location]):
    a.log&&console.log("Geocode was not successful for the following reason: "+c)}),c;if(0<a.markers.length){g=null;for(d=0;d<a.markers.length;d+=1)if(a.markers[d].setCenter){g=a.markers[d];break}if(null===g)for(d=0;d<a.markers.length;d+=1){if(a.markers[d].latitude&&a.markers[d].longitude){g=a.markers[d];break}a.markers[d].address&&(g=a.markers[d])}if(null===g)return c;if(g.latitude&&g.longitude)return new e.LatLng(g.latitude,g.longitude);g.address&&q.geocode({address:g.address},function(b,c){c===google.maps.GeocoderStatus.OK?
    f._setMapCenter.apply(h,[b[0].geometry.location]):a.log&&console.log("Geocode was not successful for the following reason: "+c)})}return c},_renderCluster:function(){var a=this.data("gmap"),b=a.markers,c=a.clusters,h=a.opts,d;for(d=0;d<c.length;d+=1)c[d].getMarker().setMap(null);c.length=0;if(d=a.gmap.getBounds()){var g=d.getNorthEast(),e=d.getSouthWest(),k=[],m=(g.lat()-e.lat())*h.clustering.clusterSize/100;for(d=0;d<b.length;d+=1)b[d].latitude<g.lat()&&(b[d].latitude>e.lat()&&b[d].longitude<g.lng()&&
    b[d].longitude>e.lng())&&(k[k.length]=b[d]);h.log&&console.log("number of markers "+k.length+"/"+b.length);h.log&&console.log("cluster radius: "+m);for(d=0;d<k.length;d+=1){g=-1;for(b=0;b<c.length&&!(e=c[b].dist(k[d]),e<m&&(g=b,h.clustering.fastClustering));b+=1);-1===g?(b=new p,b.addMarker(k[d]),c[c.length]=b):c[g].addMarker(k[d])}h.log&&console.log("Total clusters in viewport: "+c.length);for(b=0;b<c.length;b+=1)c[b].getMarker().setMap(a.gmap)}else{var j=this;window.setTimeout(function(){f._renderCluster.apply(j)},
    1E3)}},_processMarker:function(a,b,c,h){var d=this.data("gmap"),g=d.gmap,f=d.opts,k;void 0===h&&(h=new e.LatLng(a.latitude,a.longitude));if(!b){var j={image:f.icon.image,iconSize:new e.Size(f.icon.iconsize[0],f.icon.iconsize[1]),iconAnchor:new e.Point(f.icon.iconanchor[0],f.icon.iconanchor[1]),infoWindowAnchor:new e.Size(f.icon.infowindowanchor[0],f.icon.infowindowanchor[1])};b=new e.MarkerImage(j.image,j.iconSize,null,j.iconAnchor)}c||(new e.Size(f.icon.shadowsize[0],f.icon.shadowsize[1]),j&&j.iconAnchor||
    new e.Point(f.icon.iconanchor[0],f.icon.iconanchor[1]));b={position:h,icon:b,title:a.title,map:null,draggable:!0===a.draggable?!0:!1};f.clustering.enabled||(b.map=g);k=new e.Marker(b);k.setShadow(c);d.markers.push(k);a.key&&(d.markerKeys[a.key]=k);var n;a.html&&(c={content:"string"===typeof a.html?f.html_prepend+a.html+f.html_append:a.html,pixelOffset:a.infoWindowAnchor},f.log&&console.log("setup popup with data"),f.log&&console.log(c),n=new e.InfoWindow(c),e.event.addListener(k,"click",function(){f.log&&
console.log("opening popup "+a.html);f.singleInfoWindow&&d.infoWindow&&d.infoWindow.close();n.open(g,k);d.infoWindow=n}));a.html&&a.popup&&(f.log&&console.log("opening popup "+a.html),n.open(g,k),d.infoWindow=n);a.onDragEnd&&e.event.addListener(k,"dragend",function(b){f.log&&console.log("drag end");a.onDragEnd(b)})},_geocodeMarker:function(a,b,c){var h=this;q.geocode({address:a.address},function(d,g){g===e.GeocoderStatus.OK?(l-=1,h.data("gmap").opts.log&&console.log("Geocode was successful with point: ",
    d[0].geometry.location),f._processMarker.apply(h,[a,b,c,d[0].geometry.location])):(g===e.GeocoderStatus.OVER_QUERY_LIMIT&&(!h.data("gmap").opts.noAlerts&&0===r&&alert("Error: too many geocoded addresses! Switching to 1 marker/s mode."),r+=1E3,window.setTimeout(function(){f._geocodeMarker.apply(h,[a,b,c])},r)),h.data("gmap").opts.log&&console.log("Geocode was not successful for the following reason: "+g))})},_autoZoom:function(a,b){var c=j(this).data("gmap"),e=j.extend({},c?c.opts:{},a),d,g,c=39135.758482;
  e.log&&console.log("autozooming map");d=b?f._getBoundariesFromMarkers.apply(this):f._getBoundaries(e);e=111E3*(d.E-d.W)/this.width();g=111E3*(d.S-d.N)/this.height();for(d=2;20>d&&!(e>c||g>c);d+=1)c/=2;return d-2},addMarkers:function(a){var b=this.data("gmap").opts;if(0!==a.length){b.log&&console.log("adding "+a.length+" markers");for(b=0;b<a.length;b+=1)f.addMarker.apply(this,[a[b]])}},addMarker:function(a){var b=this.data("gmap").opts;b.log&&console.log("putting marker at "+a.latitude+", "+a.longitude+
    " with address "+a.address+" and html "+a.html);var c=b.icon.image,h=new e.Size(b.icon.iconsize[0],b.icon.iconsize[1]),d=new e.Point(b.icon.iconanchor[0],b.icon.iconanchor[1]),g=new e.Size(b.icon.infowindowanchor[0],b.icon.infowindowanchor[1]),j=b.icon.shadow,k=new e.Size(b.icon.shadowsize[0],b.icon.shadowsize[1]),m=new e.Point(b.icon.shadowanchor[0],b.icon.shadowanchor[1]);a.infoWindowAnchor=g;a.icon&&(a.icon.image&&(c=a.icon.image),a.icon.iconsize&&(h=new e.Size(a.icon.iconsize[0],a.icon.iconsize[1])),
    a.icon.iconanchor&&(d=new e.Point(a.icon.iconanchor[0],a.icon.iconanchor[1])),a.icon.infowindowanchor&&new e.Size(a.icon.infowindowanchor[0],a.icon.infowindowanchor[1]),a.icon.shadow&&(j=a.icon.shadow),a.icon.shadowsize&&(k=new e.Size(a.icon.shadowsize[0],a.icon.shadowsize[1])),a.icon.shadowanchor&&(m=new e.Point(a.icon.shadowanchor[0],a.icon.shadowanchor[1])));c=new e.MarkerImage(c,h,null,d);j=new e.MarkerImage(j,k,null,m);a.address?("_address"===a.html&&(a.html=a.address),"_address"==a.title&&(a.title=
    a.address),b.log&&console.log("geocoding marker: "+a.address),l+=1,f._delayedMode=!0,f._geocodeMarker.apply(this,[a,c,j])):("_latlng"===a.html&&(a.html=a.latitude+", "+a.longitude),"_latlng"==a.title&&(a.title=a.latitude+", "+a.longitude),b=new e.LatLng(a.latitude,a.longitude),f._processMarker.apply(this,[a,c,j,b]))},removeAllMarkers:function(){var a=this.data("gmap").markers,b;for(b=0;b<a.length;b+=1)a[b].setMap(null),delete a[b];a.length=0},getMarker:function(a){return this.data("gmap").markerKeys[a]},
  fixAfterResize:function(a){var b=this.data("gmap");e.event.trigger(b.gmap,"resize");a&&b.gmap.panTo(new google.maps.LatLng(0,0));b.gmap.panTo(this.gMap("_getMapCenter",b.opts))},setZoom:function(a,b,c){var e=this.data("gmap").gmap;"fit"===a&&(a=f._autoZoom.apply(this,[b,c]));e.setZoom(parseInt(a))},changeSettings:function(a){var b=this.data("gmap"),c=[],e;for(e=0;e<b.markers.length;e+=1)c[e]={latitude:b.markers[e].getPosition().lat(),longitude:b.markers[e].getPosition().lng()};a.markers=c;a.zoom&&
  f.setZoom.apply(this,[a.zoom,a]);(a.latitude||a.longitude)&&b.gmap.panTo(f._getMapCenter.apply(this,[a]))},mapclick:function(a){google.maps.event.addListener(this.data("gmap").gmap,"click",function(b){a(b.latLng)})},geocode:function(a,b,c){q.geocode({address:a},function(a,d){d===e.GeocoderStatus.OK?b(a[0].geometry.location):c&&c(a,d)})},getRoute:function(a){var b=this.data("gmap"),c=b.gmap,f=new e.DirectionsRenderer,d=new e.DirectionsService,g={BYCAR:e.DirectionsTravelMode.DRIVING,BYBICYCLE:e.DirectionsTravelMode.BICYCLING,
    BYFOOT:e.DirectionsTravelMode.WALKING},l={MILES:e.DirectionsUnitSystem.IMPERIAL,KM:e.DirectionsUnitSystem.METRIC},k=null,m=null,n=null;void 0!==a.routeDisplay?k=a.routeDisplay instanceof jQuery?a.routeDisplay[0]:"string"==typeof a.routeDisplay?j(a.routeDisplay)[0]:null:null!==b.opts.routeFinder.routeDisplay&&(k=b.opts.routeFinder.routeDisplay instanceof jQuery?b.opts.routeFinder.routeDisplay[0]:"string"==typeof b.opts.routeFinder.routeDisplay?j(b.opts.routeFinder.routeDisplay)[0]:null);f.setMap(c);
    null!==k&&f.setPanel(k);m=void 0!==g[b.opts.routeFinder.travelMode]?g[b.opts.routeFinder.travelMode]:g.BYCAR;n=void 0!==l[b.opts.routeFinder.travelUnit]?l[b.opts.routeFinder.travelUnit]:l.KM;d.route({origin:a.from,destination:a.to,travelMode:m,unitSystem:n},function(a,c){c==e.DirectionsStatus.OK?f.setDirections(a):null!==k&&j(k).html(b.opts.routeFinder.routeErrors[c])});return this}};j.fn.gMap=function(a){if(f[a])return f[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"===typeof a||
    !a)return f.init.apply(this,arguments);j.error("Method "+a+" does not exist on jQuery.gmap")};j.fn.gMap.defaults={log:!1,address:"",latitude:null,longitude:null,zoom:3,maxZoom:null,minZoom:null,markers:[],controls:{},scrollwheel:!0,maptype:google.maps.MapTypeId.ROADMAP,mapTypeControl:!0,zoomControl:!0,panControl:!1,scaleControl:!1,streetViewControl:!0,controlsPositions:{mapType:null,zoom:null,pan:null,scale:null,streetView:null},controlsStyle:{mapType:google.maps.MapTypeControlStyle.DEFAULT,zoom:google.maps.ZoomControlStyle.DEFAULT},
  singleInfoWindow:!0,html_prepend:'<div class="gmap_marker">',html_append:"</div>",icon:{image:"http://www.google.com/mapfiles/marker.png",iconsize:[20,34],iconanchor:[9,34],infowindowanchor:[9,2],shadow:"http://www.google.com/mapfiles/shadow50.png",shadowsize:[37,34],shadowanchor:[9,34]},onComplete:function(){},routeFinder:{travelMode:"BYCAR",travelUnit:"KM",routeDisplay:null,routeErrors:{INVALID_REQUEST:"The provided request is invalid.",NOT_FOUND:"One or more of the given addresses could not be found.",
    OVER_QUERY_LIMIT:"A temporary error occured. Please try again in a few minutes.",REQUEST_DENIED:"An error occured. Please contact us.",UNKNOWN_ERROR:"An unknown error occured. Please try again.",ZERO_RESULTS:"No route could be found within the given addresses."}},clustering:{enabled:!1,fastClustering:!1,clusterCount:10,clusterSize:40}}})(jQuery);
};

function onYouTubePlayerAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}var ytp=ytp||{};!function(jQuery,ytp){var nAgt=navigator.userAgent;if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.msie=!1,jQuery.browser.ua=nAgt,jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.fn.CSSAnimate=function(a,b,c,d,e){function f(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function g(a,b){return"string"!=typeof a||a.match(/^[\-0-9\.]+$/)?""+a+b:a}return jQuery.support.CSStransition=function(){var a=(document.body||document.documentElement).style;return void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition}(),this.each(function(){var h=this,i=jQuery(this);h.id=h.id||"CSSA_"+(new Date).getTime();var j=j||{type:"noEvent"};if(h.CSSAIsRunning&&h.eventType==j.type)h.CSSqueue=function(){i.CSSAnimate(a,b,c,d,e)};else if(h.CSSqueue=null,h.eventType=j.type,0!==i.length&&a){if(h.CSSAIsRunning=!0,"function"==typeof b&&(e=b,b=jQuery.fx.speeds._default),"function"==typeof c&&(e=c,c=0),"function"==typeof d&&(e=d,d="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof b)for(var k in jQuery.fx.speeds){if(b==k){b=jQuery.fx.speeds[k];break}b=jQuery.fx.speeds._default}if(b||(b=jQuery.fx.speeds._default),jQuery.support.CSStransition){j={"default":"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},j[d]&&(d=j[d]);var l="",m="transitionEnd";jQuery.browser.webkit?(l="-webkit-",m="webkitTransitionEnd"):jQuery.browser.mozilla?(l="-moz-",m="transitionend"):jQuery.browser.opera?(l="-o-",m="otransitionend"):jQuery.browser.msie&&(l="-ms-",m="msTransitionEnd"),j=[];for(n in a)k=n,"transform"===k&&(k=l+"transform",a[k]=a[n],delete a[n]),"filter"===k&&(k=l+"filter",a[k]=a[n],delete a[n]),("transform-origin"===k||"origin"===k)&&(k=l+"transform-origin",a[k]=a[n],delete a[n]),"x"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateX("+g(a[n],"px")+")",delete a[n]),"y"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateY("+g(a[n],"px")+")",delete a[n]),"z"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" translateZ("+g(a[n],"px")+")",delete a[n]),"rotate"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotate("+g(a[n],"deg")+")",delete a[n]),"rotateX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateX("+g(a[n],"deg")+")",delete a[n]),"rotateY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateY("+g(a[n],"deg")+")",delete a[n]),"rotateZ"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" rotateZ("+g(a[n],"deg")+")",delete a[n]),"scale"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scale("+g(a[n],"")+")",delete a[n]),"scaleX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleX("+g(a[n],"")+")",delete a[n]),"scaleY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleY("+g(a[n],"")+")",delete a[n]),"scaleZ"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" scaleZ("+g(a[n],"")+")",delete a[n]),"skew"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skew("+g(a[n],"deg")+")",delete a[n]),"skewX"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skewX("+g(a[n],"deg")+")",delete a[n]),"skewY"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" skewY("+g(a[n],"deg")+")",delete a[n]),"perspective"===k&&(k=l+"transform",a[k]=a[k]||"",a[k]+=" perspective("+g(a[n],"px")+")",delete a[n]),0>j.indexOf(k)&&j.push(f(k));var n=j.join(","),o=function(){i.off(m+"."+h.id),clearTimeout(h.timeout),i.css(l+"transition",""),"function"==typeof e&&e(i),h.called=!0,h.CSSAIsRunning=!1,"function"==typeof h.CSSqueue&&(h.CSSqueue(),h.CSSqueue=null)},p={};jQuery.extend(p,a),p[l+"transition-property"]=n,p[l+"transition-duration"]=b+"ms",p[l+"transition-delay"]=c+"ms",p[l+"transition-style"]="preserve-3d",p[l+"transition-timing-function"]=d,setTimeout(function(){i.one(m+"."+h.id,o),i.css(p)},1),h.timeout=setTimeout(function(){i.called||!e?(i.called=!1,h.CSSAIsRunning=!1):(i.css(l+"transition",""),e(i),h.CSSAIsRunning=!1,"function"==typeof h.CSSqueue&&(h.CSSqueue(),h.CSSqueue=null))},b+c+100)}else{for(var n in a)"transform"===n&&delete a[n],"filter"===n&&delete a[n],"transform-origin"===n&&delete a[n],"auto"===a[n]&&delete a[n];e&&"string"!=typeof e||(e="linear"),i.animate(a,b,e)}}})};var getYTPVideoID=function(a){var b,c;return a.indexOf("youtu.be")>0?(b=a.substr(a.lastIndexOf("/")+1,a.length),c=b.indexOf("?list=")>0?b.substr(b.lastIndexOf("="),b.length):null,b=c?b.substr(0,b.lastIndexOf("?")):b):a.indexOf("http")>-1?(b=a.match(/[\\?&]v=([^&#]*)/)[1],c=a.indexOf("list=")>0?a.match(/[\\?&]list=([^&#]*)/)[1]:null):(b=a.length>15?null:a,c=b?null:a),{videoID:b,playlistID:c}};jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"2.8.0",author:"Matteo Bicocchi",defaults:{containment:"body",ratio:"auto",videoURL:null,playlistURL:null,startAt:0,stopAt:0,autoPlay:!0,vol:100,addRaster:!1,opacity:1,quality:"default",mute:!1,loop:!0,showControls:!0,showAnnotations:!1,showYTLogo:!0,stopMovieOnClick:!1,stopMovieOnBlur:!0,realfullscreen:!0,gaTrack:!0,optimizeDisplay:!0,onReady:function(){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},locationProtocol:"https:",buildPlayer:function(options){return this.each(function(){var YTPlayer=this,$YTPlayer=jQuery(YTPlayer);YTPlayer.loop=0,YTPlayer.opt={},$YTPlayer.addClass("mb_YTPlayer");var property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"undefined"!=typeof property&&"undefined"!=typeof property.vol&&(property.vol=0==property.vol?property.vol=1:property.vol),jQuery.extend(YTPlayer.opt,jQuery.mbYTPlayer.defaults,options,property);var isIframe=function(){var a=!1;try{self.location.href!=top.location.href&&(a=!0)}catch(b){a=!0}return a},canGoFullScreen=!(jQuery.browser.msie||jQuery.browser.opera||isIframe());canGoFullScreen||(YTPlayer.opt.realfullscreen=!1),$YTPlayer.attr("id")||$YTPlayer.attr("id","video_"+(new Date).getTime());var playerID="mbYTP_"+YTPlayer.id;YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0;var videoID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).videoID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).videoID:!1,playlistID=this.opt.videoURL?getYTPVideoID(this.opt.videoURL).playlistID:$YTPlayer.attr("href")?getYTPVideoID($YTPlayer.attr("href")).playlistID:!1;YTPlayer.videoID=videoID,YTPlayer.playlistID=playlistID,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"0":"3";var playerVars={autoplay:0,modestbranding:1,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:YTPlayer.opt.showAnnotations},v=document.createElement("video");v.canPlayType&&jQuery.extend(playerVars,{html5:1}),jQuery.browser.msie&&jQuery.browser.version<9&&(this.opt.opacity=1);var playerBox=jQuery("<div/>").attr("id",playerID).addClass("playerBox"),overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay");if(YTPlayer.isSelf="self"==YTPlayer.opt.containment,YTPlayer.opt.containment="self"==YTPlayer.opt.containment?jQuery(this):jQuery(YTPlayer.opt.containment),YTPlayer.isBackground="body"==YTPlayer.opt.containment.get(0).tagName.toLowerCase(),!YTPlayer.isBackground||!ytp.backgroundIsInited){var isPlayer=YTPlayer.opt.containment.is(jQuery(this));if(YTPlayer.canPlayOnMobile=isPlayer&&0==jQuery(this).children().length,isPlayer?YTPlayer.isPlayer=!0:$YTPlayer.hide(),jQuery.browser.mobile&&!YTPlayer.canPlayOnMobile)return $YTPlayer.remove(),void 0;if(YTPlayer.opt.addRaster){var classN="dot"==YTPlayer.opt.addRaster?"raster-dot":"raster",retina=window.retina||window.devicePixelRatio>1;overlay.addClass(retina?classN+" retina":classN)}else overlay.removeClass(function(a,b){var c=b.split(" "),d=[];return jQuery.each(c,function(a,b){/raster-.*/.test(b)&&d.push(b)}),d.push("retina"),d.join(" ")});var wrapper=jQuery("<div/>").addClass("mbYTP_wrapper").attr("id","wrapper_"+playerID);if(wrapper.css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}),playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden"}),wrapper.append(playerBox),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"==jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),wrapper.css({position:"fixed",top:0,left:0,zIndex:0,webkitTransform:"translateZ(0)"}),$YTPlayer.hide()):"static"==YTPlayer.opt.containment.css("position")&&YTPlayer.opt.containment.css({position:"relative"}),YTPlayer.opt.containment.prepend(wrapper),YTPlayer.wrapper=wrapper,playerBox.css({opacity:1}),jQuery.browser.mobile||(playerBox.after(overlay),YTPlayer.overlay=overlay),YTPlayer.isBackground||overlay.on("mouseenter",function(){$YTPlayer.find(".mb_YTPBar").addClass("visible")}).on("mouseleave",function(){$YTPlayer.find(".mb_YTPBar").removeClass("visible")}),ytp.YTAPIReady)setTimeout(function(){jQuery(document).trigger("YTAPIReady")},100);else{jQuery("#YTAPI").remove();var tag=jQuery("<script></script>").attr({src:jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/player_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head title").after(tag)}jQuery(document).on("YTAPIReady",function(){YTPlayer.isBackground&&ytp.backgroundIsInited||YTPlayer.isInit||(YTPlayer.isBackground&&YTPlayer.opt.stopMovieOnClick&&jQuery(document).off("mousedown.ytplayer").on("mousedown.ytplayer",function(a){var b=jQuery(a.target);(b.is("a")||b.parents().is("a"))&&$YTPlayer.pauseYTP()}),YTPlayer.isBackground&&(ytp.backgroundIsInited=!0),YTPlayer.opt.autoPlay="undefined"==typeof YTPlayer.opt.autoPlay?YTPlayer.isBackground?!0:!1:YTPlayer.opt.autoPlay,YTPlayer.opt.vol=YTPlayer.opt.vol?YTPlayer.opt.vol:100,jQuery.mbYTPlayer.getDataFromFeed(YTPlayer),jQuery(YTPlayer).on("YTPChanged",function(){return YTPlayer.isInit?void 0:(YTPlayer.isInit=!0,jQuery.browser.mobile&&YTPlayer.canPlayOnMobile?(new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),height:"100%",width:"100%",videoId:YTPlayer.videoID,events:{onReady:function(a){YTPlayer.player=a.target,playerBox.css({opacity:1}),YTPlayer.wrapper.css({opacity:YTPlayer.opt.opacity}),$YTPlayer.optimizeDisplay()},onStateChange:function(){}}}),void 0):(new YT.Player(playerID,{videoId:YTPlayer.videoID.toString(),playerVars:playerVars,events:{onReady:function(a){if(YTPlayer.player=a.target,!YTPlayer.isReady){YTPlayer.isReady=!0,YTPlayer.playerEl=YTPlayer.player.getIframe(),$YTPlayer.optimizeDisplay(),YTPlayer.videoID=videoID,jQuery(window).on("resize.YTP",function(){$YTPlayer.optimizeDisplay()}),YTPlayer.opt.showControls&&jQuery(YTPlayer).buildYTPControls();var b=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),jQuery.mbYTPlayer.checkForState(YTPlayer),YTPlayer.checkForStartAt=setInterval(function(){var a=jQuery.browser.mozilla&&!window.MediaSource?!0:YTPlayer.player.getVideoLoadedFraction()>b/YTPlayer.player.getDuration();YTPlayer.player.getDuration()>0&&YTPlayer.player.getCurrentTime()>=b&&a?(clearInterval(YTPlayer.checkForStartAt),YTPlayer.player.setVolume(0),jQuery(YTPlayer).muteYTPVolume(),"function"==typeof YTPlayer.opt.onReady&&YTPlayer.opt.onReady(YTPlayer),YTPlayer.opt.mute||jQuery(YTPlayer).unmuteYTP(),YTPlayer.player.pauseVideo(),setTimeout(function(){YTPlayer.canTrigger=!0,YTPlayer.opt.autoPlay?($YTPlayer.playYTP(),$YTPlayer.css("background-image","none"),YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},2e3)):YTPlayer.player.pauseVideo()},100)):(YTPlayer.player.playVideo(),YTPlayer.player.seekTo(b,!0))},1e3)}},onStateChange:function(event){if("function"==typeof event.target.getPlayerState){var state=event.target.getPlayerState();if(YTPlayer.state!=state){YTPlayer.state=state;var controls=jQuery("#controlBar_"+YTPlayer.id),eventType;switch(state){case-1:eventType="YTPUnstarted";break;case 0:eventType="YTPEnd";break;case 1:eventType="YTPStart",controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)&&_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.videoTitle||YTPlayer.videoID.toString()]),"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.videoTitle||YTPlayer.videoID.toString());break;case 2:eventType="YTPPause",controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);break;case 3:jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),eventType="YTPBuffering",jQuery.browser.chrome||YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play),setTimeout(function(){controls.show(1e3)},2e3);break;case 5:eventType="YTPCued"}var YTPevent=jQuery.Event(eventType);YTPevent.time=YTPlayer.player.time,YTPlayer.canTrigger&&jQuery(YTPlayer).trigger(YTPevent)}}},onPlaybackQualityChange:function(a){var b=a.target.getPlaybackQuality(),c=jQuery.Event("YTPQualityChange");c.quality=b,jQuery(YTPlayer).trigger(c)},onError:function(a){150==a.data&&(console.log("Embedding this video is restricted by Youtube."),YTPlayer.isPlayList&&jQuery(YTPlayer).playNext()),2==a.data&&YTPlayer.isPlayList&&jQuery(YTPlayer).playNext(),"function"==typeof YTPlayer.opt.onError&&YTPlayer.opt.onError($YTPlayer,a)}}}),void 0))}))})}})},getDataFromFeed:function(a){jQuery.browser.msie&&jQuery.browser.version<=9?("auto"==a.opt.ratio?a.opt.ratio="16/9":a.opt.ratio,a.hasData||(a.hasData=!0,setTimeout(function(){jQuery(a).trigger("YTPChanged")},100))):(jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol+"//gdata.youtube.com/feeds/api/videos/"+a.videoID+"?v=2&alt=jsonc",function(b){a.dataReceived=!0,a.videoData=b.data,jQuery(a).trigger("YTPChanged");var e=jQuery.Event("YTPData");e.prop={};for(var f in a.videoData)e.prop[f]=a.videoData[f];if(jQuery(a).trigger(e),a.videoTitle=a.videoData.title,"auto"==a.opt.ratio&&(a.opt.ratio=a.videoData.aspectRatio&&"widescreen"===a.videoData.aspectRatio?"16/9":"4/3"),!a.hasData&&(a.hasData=!0,a.isPlayer)){var g=a.videoData.thumbnail.hqDefault;a.opt.containment.css({background:"rgba(0,0,0,0.5) url("+g+") center center",backgroundSize:"cover"})}}),setTimeout(function(){a.dataReceived||a.hasData||(a.hasData=!0,jQuery(a).trigger("YTPChanged"))},1500))},getVideoData:function(){var a=this.get(0);return a.videoData},getVideoID:function(){var a=this.get(0);return a.videoID||!1},setVideoQuality:function(a){var b=this.get(0);jQuery.browser.chrome||b.player.setPlaybackQuality(a)},YTPlaylist:function(a,b,c){var d=this.get(0);d.isPlayList=!0,b&&(a=jQuery.shuffle(a)),d.videoID||(d.videos=a,d.videoCounter=0,d.videoLength=a.length,jQuery(d).data("property",a[0]),jQuery(d).mb_YTPlayer()),"function"==typeof c&&jQuery(d).on("YTPChanged",function(){c(d)}),jQuery(d).on("YTPEnd",function(){jQuery(d).playNext()})},playNext:function(){var a=this.get(0);a.videoCounter++,a.videoCounter>=a.videoLength&&(a.videoCounter=0),jQuery(a.playerEl).css({opacity:0}),jQuery(a).changeMovie(a.videos[a.videoCounter])},playPrev:function(){var a=this.get(0);a.videoCounter--,a.videoCounter<0&&(a.videoCounter=a.videoLength-1),jQuery(a.playerEl).css({opacity:0}),jQuery(a).changeMovie(a.videos[a.videoCounter])},changeMovie:function(a){var b=this.get(0);b.opt.startAt=0,b.opt.stopAt=0,b.opt.mute=!0,a&&jQuery.extend(b.opt,a),b.videoID=getYTPVideoID(b.opt.videoURL).videoID,jQuery(b).pauseYTP();var c=jQuery.browser.msie?1e3:0;if(jQuery(b.playerEl).CSSAnimate({opacity:0},c),setTimeout(function(){var a=jQuery.browser.chrome?"default":b.opt.quality;jQuery(b).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/v/"+b.videoID),1,a),jQuery(b).playYTP(),jQuery(b).one("YTPStart",function(){b.wrapper.CSSAnimate({opacity:b.isAlone?1:b.opt.opacity},1e3),jQuery(b.playerEl).CSSAnimate({opacity:1},c),b.opt.startAt&&b.player.seekTo(b.opt.startAt),jQuery.mbYTPlayer.checkForState(b),b.opt.autoPlay||jQuery(b).pauseYTP()}),b.opt.mute?jQuery(b).muteYTPVolume():jQuery(b).unmuteYTP()},c),b.opt.addRaster){var d=window.retina||window.devicePixelRatio>1;b.overlay.addClass(d?"raster retina":"raster")}else b.overlay.removeClass("raster"),b.overlay.removeClass("retina");jQuery("#controlBar_"+b.id).remove(),b.opt.showControls&&jQuery(b).buildYTPControls(),jQuery.mbYTPlayer.getDataFromFeed(b),jQuery(b).optimizeDisplay()},getPlayer:function(){return jQuery(this).get(0).player},playerDestroy:function(){var a=this.get(0);ytp.YTAPIReady=!1,ytp.backgroundIsInited=!1,a.isInit=!1,a.videoID=null;var b=a.wrapper;b.remove(),jQuery("#controlBar_"+a.id).remove()},fullscreen:function(real){function RunPrefixMethod(a,b){for(var e,f,c=["webkit","moz","ms","o",""],d=0;d<c.length&&!a[e];){if(e=b,""==c[d]&&(e=e.substr(0,1).toLowerCase()+e.substr(1)),e=c[d]+e,f=typeof a[e],"undefined"!=f)return c=[c[d]],"function"==f?a[e]():a[e];d++}}function launchFullscreen(a){RunPrefixMethod(a,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}var YTPlayer=this.get(0);"undefined"==typeof real&&(real=YTPlayer.opt.realfullscreen),real=eval(real);var controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isSelf?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){var fullscreenchange=jQuery.browser.mozilla?"mozfullscreenchange":jQuery.browser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(fullscreenchange).on(fullscreenchange,function(){var a=RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen");a?(jQuery(YTPlayer).setVideoQuality("default"),jQuery(YTPlayer).trigger("YTPFullScreenStart")):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("fullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}YTPlayer.isAlone?(real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},500),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1):(real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("fullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},1e3),YTPlayer.wrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},500)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},1e3),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0)},playYTP:function(){var a=this.get(0);if("undefined"!=typeof a.player){var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");c.html(jQuery.mbYTPlayer.controls.pause),a.player.playVideo(),a.wrapper.CSSAnimate({opacity:a.isAlone?1:a.opt.opacity},2e3),jQuery(a).on("YTPStart",function(){jQuery(a).css("background-image","none")})}},toggleLoops:function(){var a=this.get(0),b=a.opt;1==b.loop?b.loop=0:(b.startAt?a.player.seekTo(b.startAt):a.player.playVideo(),b.loop=1)},stopYTP:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPPlaypause");c.html(jQuery.mbYTPlayer.controls.play),a.player.stopVideo()},pauseYTP:function(){var a=this.get(0);a.opt;var c=jQuery("#controlBar_"+a.id),d=c.find(".mb_YTPPlaypause");d.html(jQuery.mbYTPlayer.controls.play),a.player.pauseVideo()},seekToYTP:function(a){var b=this.get(0);b.player.seekTo(a,!0)},setYTPVolume:function(a){var b=this.get(0);a||b.opt.vol||0!=b.player.getVolume()?!a&&b.player.getVolume()>0||a&&b.player.getVolume()==a?jQuery(b).muteYTPVolume():b.opt.vol=a:jQuery(b).unmuteYTP(),b.player.setVolume(b.opt.vol)},muteYTP:function(){var a=this.get(0);a.player.mute(),a.player.setVolume(0);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.unmute),jQuery(a).addClass("isMuted"),jQuery(a).trigger("YTPMuted")},unmuteYTP:function(){var a=this.get(0);a.player.unMute(),a.player.setVolume(a.opt.vol);var b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPMuteUnmute");c.html(jQuery.mbYTPlayer.controls.mute),jQuery(a).removeClass("isMuted"),jQuery(a).trigger("YTPUnmuted")},manageYTPProgress:function(){var a=this.get(0),b=jQuery("#controlBar_"+a.id),c=b.find(".mb_YTPProgress"),d=b.find(".mb_YTPLoaded"),e=b.find(".mb_YTPseekbar"),f=c.outerWidth(),g=Math.floor(a.player.getCurrentTime()),h=Math.floor(a.player.getDuration()),i=g*f/h,j=0,k=100*a.player.getVideoLoadedFraction();return d.css({left:j,width:k+"%"}),e.css({left:0,width:i}),{totalTime:h,currentTime:g}},buildYTPControls:function(){var YTPlayer=this.get(0),data=YTPlayer.opt;if(data.showYTLogo=data.showYTLogo||data.printUrl,!jQuery("#controlBar_"+YTPlayer.id).length){var controlBar=jQuery("<span/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide();YTPlayer.controlBar=controlBar;var buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlaypause ytpicon").click(function(){1==YTPlayer.player.getPlayerState()?jQuery(YTPlayer).pauseYTP():jQuery(YTPlayer).playYTP()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function(){0==YTPlayer.player.getVolume()?jQuery(YTPlayer).unmuteYTP():jQuery(YTPlayer).muteYTP()}),idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=data.videoURL?data.videoURL:"";vURL.indexOf("http")<0&&(vURL=jQuery.mbYTPlayer.locationProtocol+"//www.youtube.com/watch?v="+data.videoURL);var movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(){jQuery(YTPlayer).fullscreen(data.realfullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").click(function(a){timeBar.css({width:a.clientX-timeBar.offset().left}),YTPlayer.timeW=a.clientX-timeBar.offset().left,controlBar.find(".mb_YTPLoaded").css({width:0});var b=Math.floor(YTPlayer.player.getDuration());YTPlayer.goto=timeBar.outerWidth()*b/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer.goto),!0),controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(idx),data.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realfullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(controlBar):(controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(controlBar))}},checkForState:function(YTPlayer){var interval=YTPlayer.opt.showControls?10:1e3;clearInterval(YTPlayer.getState),YTPlayer.getState=setInterval(function(){var prog=jQuery(YTPlayer).manageYTPProgress(),$YTPlayer=jQuery(YTPlayer),controlBar=jQuery("#controlBar_"+YTPlayer.id),data=YTPlayer.opt,startAt=YTPlayer.opt.startAt?YTPlayer.opt.startAt:1,stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.player.time!=prog.currentTime){var YTPevent=jQuery.Event("YTPTime");YTPevent.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPevent)}if(YTPlayer.player.time=prog.currentTime,0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&(YTPlayer.hasFocus=!0,$YTPlayer.playYTP()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,$YTPlayer.pauseYTP())),1==YTPlayer.player.getPlayerState()&&(parseFloat(YTPlayer.player.getDuration()-3)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},2e3),YTPlayer.isPlayList){clearInterval(YTPlayer.getState);var YTPEnd=jQuery.Event("YTPEnd");return YTPEnd.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(YTPEnd),void 0}data.loop?YTPlayer.player.seekTo(startAt,!0):(YTPlayer.player.pauseVideo(),YTPlayer.wrapper.CSSAnimate({opacity:0},1e3,function(){var a=jQuery.Event("YTPEnd");if(a.time=YTPlayer.player.time,jQuery(YTPlayer).trigger(a),YTPlayer.player.seekTo(startAt,!0),!YTPlayer.isBackground){var b=YTPlayer.videoData.thumbnail.hqDefault;jQuery(YTPlayer).css({background:"rgba(0,0,0,0.5) url("+b+") center center",backgroundSize:"cover"})}}))}},interval)},formatTime:function(a){var b=Math.floor(a/60),c=Math.floor(a-60*b);return(9>=b?"0"+b:b)+" : "+(9>=c?"0"+c:c)}},jQuery.fn.toggleVolume=function(){var a=this.get(0);if(a)return a.player.isMuted()?(jQuery(a).unmuteYTP(),!0):(jQuery(a).muteYTP(),!1)},jQuery.fn.optimizeDisplay=function(){var a=this.get(0),b=a.opt,c=jQuery(a.playerEl),d={},e=a.wrapper;d.width=e.outerWidth(),d.height=e.outerHeight();var f=24,g=100,h={};b.optimizeDisplay?(h.width=d.width+d.width*f/100,h.height="16/9"==b.ratio?Math.ceil(9*d.width/16):Math.ceil(3*d.width/4),h.marginTop=-((h.height-d.height)/2),h.marginLeft=-(d.width*(f/2)/100),h.height<d.height&&(h.height=d.height+d.height*f/100,h.width="16/9"==b.ratio?Math.floor(16*d.height/9):Math.floor(4*d.height/3),h.marginTop=-(d.height*(f/2)/100),h.marginLeft=-((h.width-d.width)/2)),h.width+=g,h.height+=g,h.marginTop-=g/2,h.marginLeft-=g/2):(h.width="100%",h.height="100%",h.marginTop=0,h.marginLeft-=0),c.css({width:h.width,height:h.height,marginTop:h.marginTop,marginLeft:h.marginLeft})},jQuery.shuffle=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.YTPlaylist,jQuery.fn.playNext=jQuery.mbYTPlayer.playNext,jQuery.fn.playPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.changeMovie=jQuery.mbYTPlayer.changeMovie,jQuery.fn.getVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.getPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.playerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.fullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.buildYTPControls=jQuery.mbYTPlayer.buildYTPControls,jQuery.fn.playYTP=jQuery.mbYTPlayer.playYTP,jQuery.fn.toggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.stopYTP=jQuery.mbYTPlayer.stopYTP,jQuery.fn.pauseYTP=jQuery.mbYTPlayer.pauseYTP,jQuery.fn.seekToYTP=jQuery.mbYTPlayer.seekToYTP,jQuery.fn.muteYTP=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTP=jQuery.mbYTPlayer.unmuteYTP,jQuery.fn.setYTPVolume=jQuery.mbYTPlayer.setYTPVolume,jQuery.fn.setVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.manageYTPProgress=jQuery.mbYTPlayer.manageYTPProgress,jQuery.fn.getDataFromFeed=jQuery.mbYTPlayer.getVideoData,jQuery.fn.mb_YTPlayer=jQuery.fn.YTPlayer,jQuery.fn.muteYTPVolume=jQuery.mbYTPlayer.muteYTP,jQuery.fn.unmuteYTPVolume=jQuery.mbYTPlayer.unmuteYTP}(jQuery,ytp);

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it	
		function update (){
			
			$this.each(function(){
								
				firstTop = $this.offset().top;
			});
	
			if (outerHeight) {
				getHeight = function(jqo) {
					return jqo.outerHeight(true);
				};
			} else {
				getHeight = function(jqo) {
					return jqo.height();
				};
			}
				
			// setup defaults if arguments aren't specified
			if (arguments.length < 1 || xpos === null) xpos = "50%";
			if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
			if (arguments.length < 3 || outerHeight === null) outerHeight = true;
			
			// function to be called whenever the window is scrolled or resized
			
				var pos = $window.scrollTop();				
	
				$this.each(function(){
					var $element = $(this);
					var top = $element.offset().top;
					var height = getHeight($element);
	
					// Check if totally above or totally below viewport
					if (top + height < pos || top > pos + windowHeight) {
						return;
					}
					
					$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
					
				});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

/*! http://mths.be/placeholder v2.0.7 by @mathias */
!function(a,b,c){function k(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function l(a,b){var d=this,e=c(d);if(d.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){if(e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id")),a===!0)return e[0].value=b;e.focus()}else d.value="",e.removeClass("placeholder"),d==n()&&d.select()}function m(){var a,b=this,d=c(b),e=this.id;if(""==b.value){if("password"==b.type){if(!d.data("placeholder-textinput")){try{a=d.clone().attr({type:"text"})}catch(f){a=c("<input>").attr(c.extend(k(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":d,"placeholder-id":e}).bind("focus.placeholder",l),d.data({"placeholder-textinput":a,"placeholder-id":e}).before(a)}d=d.removeAttr("id").hide().prev().attr("id",e).show()}d.addClass("placeholder"),d[0].value=d.attr("placeholder")}else d.removeClass("placeholder")}function n(){try{return b.activeElement}catch(a){}}var i,j,d="placeholder"in b.createElement("input"),e="placeholder"in b.createElement("textarea"),f=c.fn,g=c.valHooks,h=c.propHooks;d&&e?(j=f.placeholder=function(){return this},j.input=j.textarea=!0):(j=f.placeholder=function(){var a=this;return a.filter((d?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":m}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},j.input=d,j.textarea=e,i={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),e=d.data("placeholder-password");return e?e[0].value=b:d.data("placeholder-enabled")?(""==b?(a.value=b,a!=n()&&m.call(a)):d.hasClass("placeholder")?l.call(a,!0,b)||(a.value=b):a.value=b,d):a.value=b}},d||(g.input=i,h.value=i),e||(g.textarea=i,h.value=i),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(l);setTimeout(function(){a.each(m)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.5
------------------------------------------------------------------------- */
(function($) {
	$.prettyPhoto = {version: '3.1.5'};
	
	$.fn.prettyPhoto = function(pp_settings) {
		pp_settings = jQuery.extend({
			hook: 'rel', /* the attribute tag to use for prettyPhoto hooks. default: 'rel'. For HTML5, use "data-rel" or similar. */
			animation_speed: 'fast', /* fast/slow/normal */
			ajaxcallback: function() {},
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			allow_expand: true, /* Allow the user to expand a resized image. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			horizontal_padding: 20, /* The padding on each side of the picture */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			overlay_gallery_max: 30, /* Maximum number of pictures in the overlay gallery */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when prettyPhoto is closed */
			ie6_fallback: true,
			markup: '<div class="pp_pic_holder"> \
						<div class="ppt">&nbsp;</div> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											<div class="pp_social">{pp_social}</div> \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \
								<a href="#" class="pp_arrow_previous">Previous</a> \
								<div> \
									<ul> \
										{gallery} \
									</ul> \
								</div> \
								<a href="#" class="pp_arrow_next">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: '',
			social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */
		}, pp_settings);
		
		// Global variables accessible only by prettyPhoto
		var matchedObjects = this, percentBased = false, pp_dimensions, pp_open,
		
		// prettyPhoto container specific
		pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,
		
		// Window size
		windowHeight = $(window).height(), windowWidth = $(window).width(),

		// Global elements
		pp_slideshow;
		
		doresize = true, scroll_pos = _get_scroll();
	
		// Window/Keyboard events
		$(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){ _center_overlay(); _resize_overlay(); });
		
		if(pp_settings.keyboard_shortcuts) {
			$(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){
				if(typeof $pp_pic_holder != 'undefined'){
					if($pp_pic_holder.is(':visible')){
						switch(e.keyCode){
							case 37:
								$.prettyPhoto.changePage('previous');
								e.preventDefault();
								break;
							case 39:
								$.prettyPhoto.changePage('next');
								e.preventDefault();
								break;
							case 27:
								if(!settings.modal)
								$.prettyPhoto.close();
								e.preventDefault();
								break;
						};
						// return false;
					};
				};
			});
		};
		
		/**
		* Initialize prettyPhoto.
		*/
		$.prettyPhoto.initialize = function() {
			
			settings = pp_settings;
			
			if(settings.theme == 'pp_default') settings.horizontal_padding = 16;
			
			// Find out if the picture is part of a set
			theRel = $(this).attr(settings.hook);
			galleryRegExp = /\[(?:.*)\]/;
			isSet = (galleryRegExp.exec(theRel)) ? true : false;
			
			// Put the SRCs, TITLEs, ALTs into an array.
			pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
			pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
			pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
			
			if(pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
			
			set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned
			rel_index = (isSet) ? set_position : $("a["+settings.hook+"^='"+theRel+"']").index($(this));
			
			_build_overlay(this); // Build the overlay {this} being the caller
			
			if(settings.allow_resize)
				$(window).bind('scroll.prettyphoto',function(){ _center_overlay(); });
			
			
			$.prettyPhoto.open();
			
			return false;
		}


		/**
		* Opens the prettyPhoto modal box.
		* @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
		* @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
		* @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
		*/
		$.prettyPhoto.open = function(event) {
			if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
				settings = pp_settings;
				pp_images = $.makeArray(arguments[0]);
				pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
				pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
				isSet = (pp_images.length > 1) ? true : false;
				set_position = (arguments[3])? arguments[3]: 0;
				_build_overlay(event.target); // Build the overlay {this} being the caller
			}
			
			if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden'); // Hide the flash

			_checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.
		
			$('.pp_loaderIcon').show();
		
			if(settings.deeplinking)
				setHashtag();
		
			// Rebuild Facebook Like Button with updated href
			if(settings.social_tools){
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 
				$pp_pic_holder.find('.pp_social').html(facebook_like_link);
			}
			
			// Fade the content in
			if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
			$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

			// Display the current position
			$pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());

			// Set the description
			if(typeof pp_descriptions[set_position] != 'undefined' && pp_descriptions[set_position] != ""){
				$pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
			}else{
				$pp_pic_holder.find('.pp_description').hide();
			}
			
			// Get the dimensions
			movie_width = ( parseFloat(getParam('width',pp_images[set_position])) ) ? getParam('width',pp_images[set_position]) : settings.default_width.toString();
			movie_height = ( parseFloat(getParam('height',pp_images[set_position])) ) ? getParam('height',pp_images[set_position]) : settings.default_height.toString();
			
			// If the size is % based, calculate according to window dimensions
			percentBased=false;
			if(movie_height.indexOf('%') != -1) { movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150); percentBased = true; }
			if(movie_width.indexOf('%') != -1) { movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150); percentBased = true; }
			
			// Fade the holder
			$pp_pic_holder.fadeIn(function(){
				// Set the title
				(settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html('&nbsp;');
				
				imgPreloader = "";
				skipInjection = false;
				
				// Inject the proper content
				switch(_getFileType(pp_images[set_position])){
					case 'image':
						imgPreloader = new Image();

						// Preload the neighbour images
						nextImage = new Image();
						if(isSet && set_position < $(pp_images).size() -1) nextImage.src = pp_images[set_position + 1];
						prevImage = new Image();
						if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

						$pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g,pp_images[set_position]);

						imgPreloader.onload = function(){
							// Fit item to viewport
							pp_dimensions = _fitToViewport(imgPreloader.width,imgPreloader.height);

							_showContent();
						};

						imgPreloader.onerror = function(){
							alert('Image cannot be loaded. Make sure the path is correct and image exist.');
							$.prettyPhoto.close();
						};
					
						imgPreloader.src = pp_images[set_position];
					break;
				
					case 'youtube':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						
						// Regular youtube link
						movie_id = getParam('v',pp_images[set_position]);
						
						// youtu.be link
						if(movie_id == ""){
							movie_id = pp_images[set_position].split('youtu.be/');
							movie_id = movie_id[1];
							if(movie_id.indexOf('?') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('?')); // Strip anything after the ?

							if(movie_id.indexOf('&') > 0)
								movie_id = movie_id.substr(0,movie_id.indexOf('&')); // Strip anything after the &
						}

						movie = 'http://www.youtube.com/embed/'+movie_id;
						(getParam('rel',pp_images[set_position])) ? movie+="?rel="+getParam('rel',pp_images[set_position]) : movie+="?rel=1";
							
						if(settings.autoplay) movie += "&autoplay=1";
					
						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
					break;
				
					case 'vimeo':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						movie_id = pp_images[set_position];
						var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
						var match = movie_id.match(regExp);
						
						movie = 'http://player.vimeo.com/video/'+ match[3] +'?title=0&amp;byline=0&amp;portrait=0';
						if(settings.autoplay) movie += "&autoplay=1;";
				
						vimeo_width = pp_dimensions['width'] + '/embed/?moog_width='+ pp_dimensions['width'];
				
						toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);
					break;
				
					case 'quicktime':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						pp_dimensions['height']+=15; pp_dimensions['contentHeight']+=15; pp_dimensions['containerHeight']+=15; // Add space for the control bar
				
						toInject = settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
					break;
				
					case 'flash':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						flash_vars = pp_images[set_position];
						flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

						filename = pp_images[set_position];
						filename = filename.substring(0,filename.indexOf('?'));
					
						toInject =  settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
					break;
				
					case 'iframe':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
				
						frame_url = pp_images[set_position];
						frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

						toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);
					break;
					
					case 'ajax':
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport(movie_width,movie_height);
						doresize = true; // Reset the dimensions
					
						skipInjection = true;
						$.get(pp_images[set_position],function(responseHTML){
							toInject = settings.inline_markup.replace(/{content}/g,responseHTML);
							$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
							_showContent();
						});
						
					break;
					
					case 'custom':
						pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						toInject = settings.custom_markup;
					break;
				
					case 'inline':
						// to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
						myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
						doresize = false; // Make sure the dimensions are not resized.
						pp_dimensions = _fitToViewport($(myClone).width(),$(myClone).height());
						doresize = true; // Reset the dimensions
						$(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
					break;
				};

				if(!imgPreloader && !skipInjection){
					$pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
				
					// Show content
					_showContent();
				};
			});

			return false;
		};

	
		/**
		* Change page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changePage = function(direction){
			currentGalleryPage = 0;
			
			if(direction == 'previous') {
				set_position--;
				if (set_position < 0) set_position = $(pp_images).size()-1;
			}else if(direction == 'next'){
				set_position++;
				if(set_position > $(pp_images).size()-1) set_position = 0;
			}else{
				set_position=direction;
			};
			
			rel_index = set_position;

			if(!doresize) doresize = true; // Allow the resizing of the images
			if(settings.allow_expand) {
				$('.pp_contract').removeClass('pp_contract').addClass('pp_expand');
			}

			_hideContent(function(){ $.prettyPhoto.open(); });
		};


		/**
		* Change gallery page in the prettyPhoto modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.prettyPhoto.changeGalleryPage = function(direction){
			if(direction=='next'){
				currentGalleryPage ++;

				if(currentGalleryPage > totalPage) currentGalleryPage = 0;
			}else if(direction=='previous'){
				currentGalleryPage --;

				if(currentGalleryPage < 0) currentGalleryPage = totalPage;
			}else{
				currentGalleryPage = direction;
			};
			
			slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;

			slide_to = currentGalleryPage * (itemsPerPage * itemWidth);

			$pp_gallery.find('ul').animate({left:-slide_to},slide_speed);
		};


		/**
		* Start the slideshow...
		*/
		$.prettyPhoto.startSlideshow = function(){
			if(typeof pp_slideshow == 'undefined'){
				$pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				pp_slideshow = setInterval($.prettyPhoto.startSlideshow,settings.slideshow);
			}else{
				$.prettyPhoto.changePage('next');	
			};
		}


		/**
		* Stop the slideshow...
		*/
		$.prettyPhoto.stopSlideshow = function(){
			$pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
				$.prettyPhoto.startSlideshow();
				return false;
			});
			clearInterval(pp_slideshow);
			pp_slideshow=undefined;
		}


		/**
		* Closes prettyPhoto.
		*/
		$.prettyPhoto.close = function(){
			if($pp_overlay.is(":animated")) return;
			
			$.prettyPhoto.stopSlideshow();
			
			$pp_pic_holder.stop().find('object,embed').css('visibility','hidden');
			
			$('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
			
			$pp_overlay.fadeOut(settings.animation_speed, function(){
				
				if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible'); // Show the flash
				
				$(this).remove(); // No more need for the prettyPhoto markup
				
				$(window).unbind('scroll.prettyphoto');
				
				clearHashtag();
				
				settings.callback();
				
				doresize = true;
				
				pp_open = false;
				
				delete settings;
			});
		};
	
		/**
		* Set the proper sizes on the containers and animate the content in.
		*/
		function _showContent(){
			$('.pp_loaderIcon').hide();

			// Calculate the opened top position of the pic holder
			projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (pp_dimensions['containerHeight']/2));
			if(projectedTop < 0) projectedTop = 0;

			$ppt.fadeTo(settings.animation_speed,1);

			// Resize the content holder
			$pp_pic_holder.find('.pp_content')
				.animate({
					height:pp_dimensions['contentHeight'],
					width:pp_dimensions['contentWidth']
				},settings.animation_speed);
			
			// Resize picture the holder
			$pp_pic_holder.animate({
				'top': projectedTop,
				'left': ((windowWidth/2) - (pp_dimensions['containerWidth']/2) < 0) ? 0 : (windowWidth/2) - (pp_dimensions['containerWidth']/2),
				width:pp_dimensions['containerWidth']
			},settings.animation_speed,function(){
				$pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);

				$pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

				// Show the nav
				if(isSet && _getFileType(pp_images[set_position])=="image") { $pp_pic_holder.find('.pp_hoverContainer').show(); }else{ $pp_pic_holder.find('.pp_hoverContainer').hide(); }
			
				if(settings.allow_expand) {
					if(pp_dimensions['resized']){ // Fade the resizing link if the image is resized
						$('a.pp_expand,a.pp_contract').show();
					}else{
						$('a.pp_expand').hide();
					}
				}
				
				if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
				
				settings.changepicturecallback(); // Callback!
				
				pp_open = true;
			});
			
			_insert_gallery();
			pp_settings.ajaxcallback();
		};
		
		/**
		* Hide the content...DUH!
		*/
		function _hideContent(callback){
			// Fade out the current picture
			$pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
			$pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
				$('.pp_loaderIcon').show();
				
				callback();
			});
		};
	
		/**
		* Check the item position in the gallery array, hide or show the navigation links
		* @param setCount {integer} The total number of items in the set
		*/
		function _checkPosition(setCount){
			(setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
		};
	
		/**
		* Resize the item dimensions if it's bigger than the viewport
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		* @return An array containin the "fitted" dimensions
		*/
		function _fitToViewport(width,height){
			resized = false;

			_getDimensions(width,height);
			
			// Define them in case there's no resize needed
			imageWidth = width, imageHeight = height;

			if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
				resized = true, fitting = false;
			
				while (!fitting){
					if((pp_containerWidth > windowWidth)){
						imageWidth = (windowWidth - 200);
						imageHeight = (height/width) * imageWidth;
					}else if((pp_containerHeight > windowHeight)){
						imageHeight = (windowHeight - 200);
						imageWidth = (width/height) * imageHeight;
					}else{
						fitting = true;
					};

					pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
				};
			

				
				if((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)){
					_fitToViewport(pp_containerWidth,pp_containerHeight)
				};
				
				_getDimensions(imageWidth,imageHeight);
			};
			
			return {
				width:Math.floor(imageWidth),
				height:Math.floor(imageHeight),
				containerHeight:Math.floor(pp_containerHeight),
				containerWidth:Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2),
				contentHeight:Math.floor(pp_contentHeight),
				contentWidth:Math.floor(pp_contentWidth),
				resized:resized
			};
		};
		
		/**
		* Get the containers dimensions according to the item size
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		*/
		function _getDimensions(width,height){
			width = parseFloat(width);
			height = parseFloat(height);
			
			// Get the details height, to do so, I need to clone it since it's invisible
			$pp_details = $pp_pic_holder.find('.pp_details');
			$pp_details.width(width);
			detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
			
			$pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			detailsHeight += $pp_details.height();
			detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
			$pp_details.remove();
			
			// Get the titles height, to do so, I need to clone it since it's invisible
			$pp_title = $pp_pic_holder.find('.ppt');
			$pp_title.width(width);
			titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
			$pp_title = $pp_title.clone().appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			titleHeight += $pp_title.height();
			$pp_title.remove();
			
			// Get the container size, to resize the holder to the right dimensions
			pp_contentHeight = height + detailsHeight;
			pp_contentWidth = width;
			pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
			pp_containerWidth = width;
		}
	
		function _getFileType(itemSrc){
			if (itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i)) {
				return 'youtube';
			}else if (itemSrc.match(/vimeo\.com/i)) {
				return 'vimeo';
			}else if(itemSrc.match(/\b.mov\b/i)){ 
				return 'quicktime';
			}else if(itemSrc.match(/\b.swf\b/i)){
				return 'flash';
			}else if(itemSrc.match(/\biframe=true\b/i)){
				return 'iframe';
			}else if(itemSrc.match(/\bajax=true\b/i)){
				return 'ajax';
			}else if(itemSrc.match(/\bcustom=true\b/i)){
				return 'custom';
			}else if(itemSrc.substr(0,1) == '#'){
				return 'inline';
			}else{
				return 'image';
			};
		};
	
		function _center_overlay(){
			if(doresize && typeof $pp_pic_holder != 'undefined') {
				scroll_pos = _get_scroll();
				contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

				projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
				if(projectedTop < 0) projectedTop = 0;
				
				if(contentHeight > windowHeight)
					return;

				$pp_pic_holder.css({
					'top': projectedTop,
					'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
				});
			};
		};
	
		function _get_scroll(){
			if (self.pageYOffset) {
				return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
			} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
				return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
			} else if (document.body) {// all other Explorers
				return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
			};
		};
	
		function _resize_overlay() {
			windowHeight = $(window).height(), windowWidth = $(window).width();
			
			if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth);
		};
	
		function _insert_gallery(){
			if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image") {
				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30; // Define the arrow width depending on the theme
				
				itemsPerPage = Math.floor((pp_dimensions['containerWidth'] - 100 - navWidth) / itemWidth);
				itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
				totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

				// Hide the nav in the case there's no need for links
				if(totalPage == 0){
					navWidth = 0; // No nav means no width!
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
				}else{
					$pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();
				};

				galleryWidth = itemsPerPage * itemWidth;
				fullGalleryWidth = pp_images.length * itemWidth;
				
				// Set the proper width to the gallery items
				$pp_gallery
					.css('margin-left',-((galleryWidth/2) + (navWidth/2)))
					.find('div:first').width(galleryWidth+5)
					.find('ul').width(fullGalleryWidth)
					.find('li.selected').removeClass('selected');
				
				goToPage = (Math.floor(set_position/itemsPerPage) < totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;

				$.prettyPhoto.changeGalleryPage(goToPage);
				
				$pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');
			}else{
				$pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
				// $pp_gallery.hide();
			}
		}
	
		function _build_overlay(caller){
			// Inject Social Tool markup into General markup
			if(settings.social_tools)
				facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 

			settings.markup = settings.markup.replace('{pp_social}',''); 
			
			$('body').append(settings.markup); // Inject the markup
			
			$pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors
			
			// Inject the inline gallery!
			if(isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var i=0; i < pp_images.length; i++) {
					if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){
						classname = 'default';
						img_src = '';
					}else{
						classname = '';
						img_src = pp_images[i];
					}
					toInject += "<li class='"+classname+"'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				};
				
				toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
				
				$pp_pic_holder.find('#pp_full_res').after(toInject);
				
				$pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li'); // Set the gallery selectors
				
				$pp_gallery.find('.pp_arrow_next').click(function(){
					$.prettyPhoto.changeGalleryPage('next');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_gallery.find('.pp_arrow_previous').click(function(){
					$.prettyPhoto.changeGalleryPage('previous');
					$.prettyPhoto.stopSlideshow();
					return false;
				});
				
				$pp_pic_holder.find('.pp_content').hover(
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
					},
					function(){
						$pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
					});

				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				$pp_gallery_li.each(function(i){
					$(this)
						.find('a')
						.click(function(){
							$.prettyPhoto.changePage(i);
							$.prettyPhoto.stopSlideshow();
							return false;
						});
				});
			};
			
			
			// Inject the play/pause if it's a slideshow
			if(settings.slideshow){
				$pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
				$pp_pic_holder.find('.pp_nav .pp_play').click(function(){
					$.prettyPhoto.startSlideshow();
					return false;
				});
			}
			
			$pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme
			
			$pp_overlay
				.css({
					'opacity':0,
					'height':$(document).height(),
					'width':$(window).width()
					})
				.bind('click',function(){
					if(!settings.modal) $.prettyPhoto.close();
				});

			$('a.pp_close').bind('click',function(){ $.prettyPhoto.close(); return false; });


			if(settings.allow_expand) {
				$('a.pp_expand').bind('click',function(e){
					// Expand the image
					if($(this).hasClass('pp_expand')){
						$(this).removeClass('pp_expand').addClass('pp_contract');
						doresize = false;
					}else{
						$(this).removeClass('pp_contract').addClass('pp_expand');
						doresize = true;
					};
				
					_hideContent(function(){ $.prettyPhoto.open(); });
			
					return false;
				});
			}
		
			$pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
				$.prettyPhoto.changePage('previous');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
		
			$pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
				$.prettyPhoto.changePage('next');
				$.prettyPhoto.stopSlideshow();
				return false;
			});
			
			_center_overlay(); // Center it
		};

		if(!pp_alreadyInitialized && getHashtag()){
			pp_alreadyInitialized = true;
			
			// Grab the rel index to trigger the click on the correct element
			hashIndex = getHashtag();
			hashRel = hashIndex;
			hashIndex = hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);
			hashRel = hashRel.substring(0,hashRel.indexOf('/'));

			// Little timeout to make sure all the prettyPhoto initialize scripts has been run.
			// Useful in the event the page contain several init scripts.
			setTimeout(function(){ $("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click'); },50);
		}
		
		return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
	};
	
	function getHashtag(){
		var url = location.href;
		hashtag = (url.indexOf('#prettyPhoto') !== -1) ? decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)) : false;

		return hashtag;
	};
	
	function setHashtag(){
		if(typeof theRel == 'undefined') return; // theRel is set on normal calls, it's impossible to deeplink using the API
		location.hash = theRel + '/'+rel_index+'/';
	};
	
	function clearHashtag(){
		if ( location.href.indexOf('#prettyPhoto') !== -1 ) location.hash = "prettyPhoto";
	}
	
	function getParam(name,url){
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( url );
	  return ( results == null ) ? "" : results[1];
	}
	
})(jQuery);

var pp_alreadyInitialized = false; // Used for the deep linking to make sure not to call the same function several times.

;(function($, window, document, undefined) {

	var pluginName = 'stellar',
		defaults = {
			scrollProperty: 'scroll',
			positionProperty: 'position',
			horizontalScrolling: true,
			verticalScrolling: true,
			horizontalOffset: 0,
			verticalOffset: 0,
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			hideDistantElements: true,
			hideElement: function($elem) { $elem.hide(); },
			showElement: function($elem) { $elem.show(); }
		},

		scrollProperty = {
			scroll: {
				getLeft: function($elem) { return $elem.scrollLeft(); },
				setLeft: function($elem, val) { $elem.scrollLeft(val); },

				getTop: function($elem) { return $elem.scrollTop();	},
				setTop: function($elem, val) { $elem.scrollTop(val); }
			},
			position: {
				getLeft: function($elem) { return parseInt($elem.css('left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('top'), 10) * -1; }
			},
			margin: {
				getLeft: function($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
			},
			transform: {
				getLeft: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
				},
				getTop: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
				}
			}
		},

		positionProperty = {
			position: {
				setLeft: function($elem, left) { $elem.css('left', left); },
				setTop: function($elem, top) { $elem.css('top', top); }
			},
			transform: {
				setPosition: function($elem, left, startingLeft, top, startingTop) {
					$elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
				}
			}
		},

		// Returns a function which adds a vendor prefix to any CSS property name
		vendorPrefix = (function() {
			var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				style = $('script')[0].style,
				prefix = '',
				prop;

			for (prop in style) {
				if (prefixes.test(prop)) {
					prefix = prop.match(prefixes)[0];
					break;
				}
			}

			if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
			if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

			return function(property) {
				return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
			};
		}()),

		prefixedTransform = vendorPrefix('transform'),

		supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

		setBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem, x, y) {
				$elem.css({
					'background-position-x': x,
					'background-position-y': y
				});
			} :
			function($elem, x, y) {
				$elem.css('background-position', x + ' ' + y);
			}
		),

		getBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem) {
				return [
					$elem.css('background-position-x'),
					$elem.css('background-position-y')
				];
			} :
			function($elem) {
				return $elem.css('background-position').split(' ');
			}
		),

		requestAnimFrame = (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback) {
				setTimeout(callback, 1000 / 60);
			}
		);

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {
		init: function() {
			this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

			this._defineElements();
			this._defineGetters();
			this._defineSetters();
			this._handleWindowLoadAndResize();
			this._detectViewport();

			this.refresh({ firstLoad: true });

			if (this.options.scrollProperty === 'scroll') {
				this._handleScrollEvent();
			} else {
				this._startAnimationLoop();
			}
		},
		_defineElements: function() {
			if (this.element === document.body) this.element = window;
			this.$scrollElement = $(this.element);
			this.$element = (this.element === window ? $('body') : this.$scrollElement);
			this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()) );
		},
		_defineGetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

			this._getScrollLeft = function() {
				return scrollPropertyAdapter.getLeft(self.$scrollElement);
			};

			this._getScrollTop = function() {
				return scrollPropertyAdapter.getTop(self.$scrollElement);
			};
		},
		_defineSetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
				positionPropertyAdapter = positionProperty[self.options.positionProperty],
				setScrollLeft = scrollPropertyAdapter.setLeft,
				setScrollTop = scrollPropertyAdapter.setTop;

			this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {
				setScrollLeft(self.$scrollElement, val);
			} : $.noop);

			this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {
				setScrollTop(self.$scrollElement, val);
			} : $.noop);

			this._setPosition = positionPropertyAdapter.setPosition ||
				function($elem, left, startingLeft, top, startingTop) {
					if (self.options.horizontalScrolling) {
						positionPropertyAdapter.setLeft($elem, left, startingLeft);
					}

					if (self.options.verticalScrolling) {
						positionPropertyAdapter.setTop($elem, top, startingTop);
					}
				};
		},
		_handleWindowLoadAndResize: function() {
			var self = this,
				$window = $(window);

			if (self.options.responsive) {
				$window.bind('load.' + this.name, function() {
					self.refresh();
				});
			}

			$window.bind('resize.' + this.name, function() {
				self._detectViewport();

				if (self.options.responsive) {
					self.refresh();
				}
			});
		},
		refresh: function(options) {
			var self = this,
				oldLeft = self._getScrollLeft(),
				oldTop = self._getScrollTop();

			if (!options || !options.firstLoad) {
				this._reset();
			}

			this._setScrollLeft(0);
			this._setScrollTop(0);

			this._setOffsets();
			this._findParticles();
			this._findBackgrounds();

			// Fix for WebKit background rendering bug
			if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
				$(window).load(function() {
					var oldLeft = self._getScrollLeft(),
						oldTop = self._getScrollTop();

					self._setScrollLeft(oldLeft + 1);
					self._setScrollTop(oldTop + 1);

					self._setScrollLeft(oldLeft);
					self._setScrollTop(oldTop);
				});
			}

			this._setScrollLeft(oldLeft);
			this._setScrollTop(oldTop);
		},
		_detectViewport: function() {
			var viewportOffsets = this.$viewportElement.offset(),
				hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

			this.viewportWidth = this.$viewportElement.width();
			this.viewportHeight = this.$viewportElement.height();

			this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
			this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
		},
		_findParticles: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop();

			if (this.particles !== undefined) {
				for (var i = this.particles.length - 1; i >= 0; i--) {
					this.particles[i].$element.data('stellar-elementIsActive', undefined);
				}
			}

			this.particles = [];

			if (!this.options.parallaxElements) return;

			this.$element.find('[data-stellar-ratio]').each(function(i) {
				var $this = $(this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					$offsetParent,
					offsetLeft,
					offsetTop,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-elementIsActive')) {
					$this.data('stellar-elementIsActive', this);
				} else if ($this.data('stellar-elementIsActive') !== this) {
					return;
				}

				self.options.showElement($this);

				// Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
				if (!$this.data('stellar-startingLeft')) {
					$this.data('stellar-startingLeft', $this.css('left'));
					$this.data('stellar-startingTop', $this.css('top'));
				} else {
					$this.css('left', $this.data('stellar-startingLeft'));
					$this.css('top', $this.data('stellar-startingTop'));
				}

				positionLeft = $this.position().left;
				positionTop = $this.position().top;

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft;
				offsetTop = $this.offset().top - marginTop;

				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				// Add our object to the particles collection
				self.particles.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('position') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingPositionLeft: positionLeft,
					startingPositionTop: positionTop,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
					width: $this.outerWidth(true),
					height: $this.outerHeight(true),
					isHidden: false
				});
			});
		},
		_findBackgrounds: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				$backgroundElements;

			this.backgrounds = [];

			if (!this.options.parallaxBackgrounds) return;

			$backgroundElements = this.$element.find('[data-stellar-background-ratio]');

			if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
			}

			$backgroundElements.each(function() {
				var $this = $(this),
					backgroundPosition = getBackgroundPosition($this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					offsetLeft,
					offsetTop,
					$offsetParent,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-backgroundIsActive')) {
					$this.data('stellar-backgroundIsActive', this);
				} else if ($this.data('stellar-backgroundIsActive') !== this) {
					return;
				}

				// Save/restore the original top and left CSS values in case we destroy the instance
				if (!$this.data('stellar-backgroundStartingLeft')) {
					$this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
					$this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
				} else {
					setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
				}

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft - scrollLeft;
				offsetTop = $this.offset().top - marginTop - scrollTop;

				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				self.backgrounds.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('background-attachment') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingValueLeft: backgroundPosition[0],
					startingValueTop: backgroundPosition[1],
					startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
					startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
					startingPositionLeft: $this.position().left,
					startingPositionTop: $this.position().top,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
				});
			});
		},
		_reset: function() {
			var particle,
				startingPositionLeft,
				startingPositionTop,
				background,
				i;

			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];
				startingPositionLeft = particle.$element.data('stellar-startingLeft');
				startingPositionTop = particle.$element.data('stellar-startingTop');

				this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

				this.options.showElement(particle.$element);

				particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
			}

			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

				setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
			}
		},
		destroy: function() {
			this._reset();

			this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
			this._animationLoop = $.noop;

			$(window).unbind('load.' + this.name).unbind('resize.' + this.name);
		},
		_setOffsets: function() {
			var self = this,
				$window = $(window);

			$window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

			if (typeof this.options.horizontalOffset === 'function') {
				this.horizontalOffset = this.options.horizontalOffset();
				$window.bind('resize.horizontal-' + this.name, function() {
					self.horizontalOffset = self.options.horizontalOffset();
				});
			} else {
				this.horizontalOffset = this.options.horizontalOffset;
			}

			if (typeof this.options.verticalOffset === 'function') {
				this.verticalOffset = this.options.verticalOffset();
				$window.bind('resize.vertical-' + this.name, function() {
					self.verticalOffset = self.options.verticalOffset();
				});
			} else {
				this.verticalOffset = this.options.verticalOffset;
			}
		},
		_repositionElements: function() {
			var scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				horizontalOffset,
				verticalOffset,
				particle,
				fixedRatioOffset,
				background,
				bgLeft,
				bgTop,
				isVisibleVertical = true,
				isVisibleHorizontal = true,
				newPositionLeft,
				newPositionTop,
				newOffsetLeft,
				newOffsetTop,
				i;

			// First check that the scroll position or container size has changed
			if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
				return;
			} else {
				this.currentScrollLeft = scrollLeft;
				this.currentScrollTop = scrollTop;
				this.currentWidth = this.viewportWidth;
				this.currentHeight = this.viewportHeight;
			}

			// Reposition elements
			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];

				fixedRatioOffset = (particle.isFixed ? 1 : 0);

				// Calculate position, then calculate what the particle's new offset will be (for visibility check)
				if (this.options.horizontalScrolling) {
					newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
					newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
				} else {
					newPositionLeft = particle.startingPositionLeft;
					newOffsetLeft = particle.startingOffsetLeft;
				}

				if (this.options.verticalScrolling) {
					newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
					newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
				} else {
					newPositionTop = particle.startingPositionTop;
					newOffsetTop = particle.startingOffsetTop;
				}

				// Check visibility
				if (this.options.hideDistantElements) {
					isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
					isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
				}

				if (isVisibleHorizontal && isVisibleVertical) {
					if (particle.isHidden) {
						this.options.showElement(particle.$element);
						particle.isHidden = false;
					}

					this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
				} else {
					if (!particle.isHidden) {
						this.options.hideElement(particle.$element);
						particle.isHidden = true;
					}
				}
			}

			// Reposition backgrounds
			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				fixedRatioOffset = (background.isFixed ? 0 : 1);
				bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
				bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

				setBackgroundPosition(background.$element, bgLeft, bgTop);
			}
		},
		_handleScrollEvent: function() {
			var self = this,
				ticking = false;

			var update = function() {
				self._repositionElements();
				ticking = false;
			};

			var requestTick = function() {
				if (!ticking) {
					requestAnimFrame(update);
					ticking = true;
				}
			};

			this.$scrollElement.bind('scroll.' + this.name, requestTick);
			requestTick();
		},
		_startAnimationLoop: function() {
			var self = this;

			this._animationLoop = function() {
				requestAnimFrame(self._animationLoop);
				self._repositionElements();
			};
			this._animationLoop();
		}
	};

	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function') {
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});
		}
	};

	$[pluginName] = function(options) {
		var $window = $(window);
		return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
	};

	// Expose the scroll and position property function hashes so they can be extended
	$[pluginName].scrollProperty = scrollProperty;
	$[pluginName].positionProperty = positionProperty;

	// Expose the plugin class so it can be modified
	window.Stellar = Plugin;
}(jQuery, this, document));
!function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"]},a.expr[":"].uncached=function(b){if(!a(b).is('img[src!=""]'))return!1;var c=new Image;return c.src=b.src,!c.complete},a.fn.waitForImages=function(c,d,e){var f=0,g=0;if(a.isPlainObject(arguments[0])&&(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var h=a(this),i=[],j=a.waitForImages.hasImageProperties||[],k=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?h.find("*").addBack().each(function(){var b=a(this);b.is("img:uncached")&&i.push({src:b.attr("src"),element:b[0]}),a.each(j,function(a,c){var e,d=b.css(c);if(!d)return!0;for(;e=k.exec(d);)i.push({src:e[2],element:b[0]})})}):h.find("img:uncached").each(function(){i.push({src:this.src,element:this})}),f=i.length,g=0,0===f&&c.call(h[0]),a.each(i,function(e,i){var j=new Image;a(j).on("load."+b+" error."+b,function(a){return g++,d.call(i.element,g,f,"load"==a.type),g==f?(c.call(h[0]),!1):void 0}),j.src=i.src})})}}(jQuery);