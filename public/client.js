/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */
(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$/,x=/^(?:textarea|input|select)$/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete 
t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean
(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bh(a,d),e=bi(a),g=bi(d);for(h=0;e[h];++h)g[h]&&bh(e[h],g[h])}if(b){bg(a,d);if(c){e=bi(a),g=bi(d);for(h=0;e[h];++h)bg(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=be[l]||be._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bk(k[i]);else bk(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bc.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bm=/alpha\([^)]*\)/i,bn=/opacity=([^)]*)/,bo=/([A-Z]|^ms)/g,bp=/^-?\d+(?:px)?$/i,bq=/^-?\d/,br=/^([\-+])=([\-+.\de]+)/,bs={position:"absolute",visibility:"hidden",display:"block"},bt=["Left","Right"],bu=["Top","Bottom"],bv,bw,bx;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bv(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=br.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bv)return bv(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return by(a,b,d);f.swap(a,bs,function(){e=by(a,b,d)});return e}},set:function(a,b){if(!bp.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bn.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bm,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bm.test(g)?g.replace(bm,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bv(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bw=function(a,c){var d,e,g;c=c.replace(bo,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bx=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bp.test(d)&&bq.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bv=bw||bx,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bz=/%20/g,bA=/\[\]$/,bB=/\r?\n/g,bC=/#.*$/,bD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bF=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bG=/^(?:GET|HEAD)$/,bH=/^\/\//,bI=/\?/,bJ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bK=/^(?:select|textarea)/i,bL=/\s+/,bM=/([?&])_=[^&]*/,bN=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bO=f.fn.load,bP={},bQ={},bR,bS,bT=["*/"]+["*"];try{bR=e.href}catch(bU){bR=c.createElement("a"),bR.href="",bR=bR.href}bS=bN.exec(bR.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bO)return bO.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bJ,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bK.test(this.nodeName)||bE.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bB,"\r\n")}}):{name:b.name,value:c.replace(bB,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?bX(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),bX(a,b);return a},ajaxSettings:{url:bR,isLocal:bF.test(bS[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bT},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bV(bP),ajaxTransport:bV(bQ),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?bZ(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=b$(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bC,"").replace(bH,bS[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bL),d.crossDomain==null&&(r=bN.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bS[1]&&r[2]==bS[2]&&(r[3]||(r[1]==="http:"?80:443))==(bS[3]||(bS[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bW(bP,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bG.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bI.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bM,"$1_="+x);d.url=y+(y===d.url?(bI.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bT+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bW(bQ,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bz,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cq("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cr(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cq("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cq("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cr(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cq("show",1),slideUp:cq("hide",1),slideToggle:cq("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return d.step(a)}var d=this,e=f.fx;this.startTime=cn||co(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&f.timers.push(g)&&!cl&&(cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||co(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cs=/^t(?:able|d|h)$/i,ct=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cu(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cs.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=ct.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!ct.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cu(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cu(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNaN(j)?i:j}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);




/*! Javascript plotting library for jQuery, v. 0.7.
*
* Released under the MIT license by IOLA, December 2007.
*
*/

//first an inline dependency, jquery.colorhelpers.js, we inline it here
//for convenience

/* Plugin for jQuery for working with colors.
* 
* Version 1.1.
* 
* Inspiration from jQuery color animation plugin by John Resig.
*
* Released under the MIT license by Ole Laursen, October 2009.
*
* Examples:
*
*   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
*   var c = $.color.extract($("#mydiv"), 'background-color');
*   console.log(c.r, c.g, c.b, c.a);
*   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
*
* Note that .scale() and .add() return the same modified object
* instead of making a new one.
*
* V. 1.1: Fix error handling so e.g. parsing an empty string does
* produce a color rather than just crashing.
*/ 
(function(B){B.color={};B.color.make=function(F,E,C,D){var G={};G.r=F||0;G.g=E||0;G.b=C||0;G.a=D!=null?D:1;G.add=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]+=I}return G.normalize()};G.scale=function(J,I){for(var H=0;H<J.length;++H){G[J.charAt(H)]*=I}return G.normalize()};G.toString=function(){if(G.a>=1){return"rgb("+[G.r,G.g,G.b].join(",")+")"}else{return"rgba("+[G.r,G.g,G.b,G.a].join(",")+")"}};G.normalize=function(){function H(J,K,I){return K<J?J:(K>I?I:K)}G.r=H(0,parseInt(G.r),255);G.g=H(0,parseInt(G.g),255);G.b=H(0,parseInt(G.b),255);G.a=H(0,G.a,1);return G};G.clone=function(){return B.color.make(G.r,G.b,G.g,G.a)};return G.normalize()};B.color.extract=function(D,C){var E;do{E=D.css(C).toLowerCase();if(E!=""&&E!="transparent"){break}D=D.parent()}while(!B.nodeName(D.get(0),"body"));if(E=="rgba(0, 0, 0, 0)"){E="transparent"}return B.color.parse(E)};B.color.parse=function(F){var E,C=B.color.make;if(E=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10))}if(E=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseInt(E[1],10),parseInt(E[2],10),parseInt(E[3],10),parseFloat(E[4]))}if(E=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55)}if(E=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(F)){return C(parseFloat(E[1])*2.55,parseFloat(E[2])*2.55,parseFloat(E[3])*2.55,parseFloat(E[4]))}if(E=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(F)){return C(parseInt(E[1],16),parseInt(E[2],16),parseInt(E[3],16))}if(E=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(F)){return C(parseInt(E[1]+E[1],16),parseInt(E[2]+E[2],16),parseInt(E[3]+E[3],16))}var D=B.trim(F).toLowerCase();if(D=="transparent"){return C(255,255,255,0)}else{E=A[D]||[0,0,0];return C(E[0],E[1],E[2])}};var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

//the actual Flot code
(function($) {
   function Plot(placeholder, data_, options_, plugins) {
       // data is on the form:
       //   [ series1, series2 ... ]
       // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
       // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }
       
       var series = [],
           options = {
               // the color theme used for graphs
               colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
               legend: {
                   show: true,
                   noColumns: 1, // number of colums in legend table
                   labelFormatter: null, // fn: string -> string
                   labelBoxBorderColor: "#ccc", // border color for the little label boxes
                   container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                   position: "ne", // position of default legend container within plot
                   margin: 5, // distance from grid edge to default legend container within plot
                   backgroundColor: null, // null means auto-detect
                   backgroundOpacity: 0.85 // set to 0 to avoid background
               },
               xaxis: {
                   show: null, // null = auto-detect, true = always, false = never
                   position: "bottom", // or "top"
                   mode: null, // null or "time"
                   color: null, // base color, labels, ticks
                   tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                   transform: null, // null or f: number -> number to transform axis
                   inverseTransform: null, // if transform is set, this should be the inverse function
                   min: null, // min. value to show, null means set automatically
                   max: null, // max. value to show, null means set automatically
                   autoscaleMargin: null, // margin in % to add if auto-setting min/max
                   ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                   tickFormatter: null, // fn: number -> string
                   labelWidth: null, // size of tick labels in pixels
                   labelHeight: null,
                   reserveSpace: null, // whether to reserve space even if axis isn't shown
                   tickLength: null, // size in pixels of ticks, or "full" for whole line
                   alignTicksWithAxis: null, // axis number or null for no sync
                   
                   // mode specific options
                   tickDecimals: null, // no. of decimals, null means auto
                   tickSize: null, // number or [number, "unit"]
                   minTickSize: null, // number or [number, "unit"]
                   monthNames: null, // list of names of months
                   timeformat: null, // format string to use
                   twelveHourClock: false // 12 or 24 time in time mode
               },
               yaxis: {
                   autoscaleMargin: 0.02,
                   position: "left" // or "right"
               },
               xaxes: [],
               yaxes: [],
               series: {
                   points: {
                       show: false,
                       radius: 3,
                       lineWidth: 2, // in pixels
                       fill: true,
                       fillColor: "#ffffff",
                       symbol: "circle" // or callback
                   },
                   lines: {
                       // we don't put in show: false so we can see
                       // whether lines were actively disabled 
                       lineWidth: 2, // in pixels
                       fill: false,
                       fillColor: null,
                       steps: false
                   },
                   bars: {
                       show: false,
                       lineWidth: 2, // in pixels
                       barWidth: 1, // in units of the x axis
                       fill: true,
                       fillColor: null,
                       align: "left", // or "center" 
                       horizontal: false
                   },
                   shadowSize: 3
               },
               grid: {
                   show: true,
                   aboveData: false,
                   color: "#545454", // primary color used for outline and labels
                   backgroundColor: null, // null for transparent, else color
                   borderColor: null, // set if different from the grid color
                   tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                   labelMargin: 5, // in pixels
                   axisMargin: 8, // in pixels
                   borderWidth: 2, // in pixels
                   minBorderMargin: null, // in pixels, null means taken from points radius
                   markings: null, // array of ranges or fn: axes -> array of ranges
                   markingsColor: "#f4f4f4",
                   markingsLineWidth: 2,
                   // interactive stuff
                   clickable: false,
                   hoverable: false,
                   autoHighlight: true, // highlight in case mouse is near
                   mouseActiveRadius: 10 // how far the mouse can be away to activate an item
               },
               hooks: {}
           },
       canvas = null,      // the canvas for the plot itself
       overlay = null,     // canvas for interactive stuff on top of plot
       eventHolder = null, // jQuery object that events should be bound to
       ctx = null, octx = null,
       xaxes = [], yaxes = [],
       plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
       canvasWidth = 0, canvasHeight = 0,
       plotWidth = 0, plotHeight = 0,
       hooks = {
           processOptions: [],
           processRawData: [],
           processDatapoints: [],
           drawSeries: [],
           draw: [],
           bindEvents: [],
           drawOverlay: [],
           shutdown: []
       },
       plot = this;

       // public functions
       plot.setData = setData;
       plot.setupGrid = setupGrid;
       plot.draw = draw;
       plot.getPlaceholder = function() { return placeholder; };
       plot.getCanvas = function() { return canvas; };
       plot.getPlotOffset = function() { return plotOffset; };
       plot.width = function () { return plotWidth; };
       plot.height = function () { return plotHeight; };
       plot.offset = function () {
           var o = eventHolder.offset();
           o.left += plotOffset.left;
           o.top += plotOffset.top;
           return o;
       };
       plot.getData = function () { return series; };
       plot.getAxes = function () {
           var res = {}, i;
           $.each(xaxes.concat(yaxes), function (_, axis) {
               if (axis)
                   res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
           });
           return res;
       };
       plot.getXAxes = function () { return xaxes; };
       plot.getYAxes = function () { return yaxes; };
       plot.c2p = canvasToAxisCoords;
       plot.p2c = axisToCanvasCoords;
       plot.getOptions = function () { return options; };
       plot.highlight = highlight;
       plot.unhighlight = unhighlight;
       plot.triggerRedrawOverlay = triggerRedrawOverlay;
       plot.pointOffset = function(point) {
           return {
               left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left),
               top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top)
           };
       };
       plot.shutdown = shutdown;
       plot.resize = function () {
           getCanvasDimensions();
           resizeCanvas(canvas);
           resizeCanvas(overlay);
       };

       // public attributes
       plot.hooks = hooks;
       
       // initialize
       initPlugins(plot);
       parseOptions(options_);
       setupCanvases();
       setData(data_);
       setupGrid();
       draw();
       bindEvents();


       function executeHooks(hook, args) {
           args = [plot].concat(args);
           for (var i = 0; i < hook.length; ++i)
               hook[i].apply(this, args);
       }

       function initPlugins() {
           for (var i = 0; i < plugins.length; ++i) {
               var p = plugins[i];
               p.init(plot);
               if (p.options)
                   $.extend(true, options, p.options);
           }
       }
       
       function parseOptions(opts) {
           var i;
           
           $.extend(true, options, opts);
           
           if (options.xaxis.color == null)
               options.xaxis.color = options.grid.color;
           if (options.yaxis.color == null)
               options.yaxis.color = options.grid.color;
           
           if (options.xaxis.tickColor == null) // backwards-compatibility
               options.xaxis.tickColor = options.grid.tickColor;
           if (options.yaxis.tickColor == null) // backwards-compatibility
               options.yaxis.tickColor = options.grid.tickColor;

           if (options.grid.borderColor == null)
               options.grid.borderColor = options.grid.color;
           if (options.grid.tickColor == null)
               options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();
           
           // fill in defaults in axes, copy at least always the
           // first as the rest of the code assumes it'll be there
           for (i = 0; i < Math.max(1, options.xaxes.length); ++i)
               options.xaxes[i] = $.extend(true, {}, options.xaxis, options.xaxes[i]);
           for (i = 0; i < Math.max(1, options.yaxes.length); ++i)
               options.yaxes[i] = $.extend(true, {}, options.yaxis, options.yaxes[i]);

           // backwards compatibility, to be removed in future
           if (options.xaxis.noTicks && options.xaxis.ticks == null)
               options.xaxis.ticks = options.xaxis.noTicks;
           if (options.yaxis.noTicks && options.yaxis.ticks == null)
               options.yaxis.ticks = options.yaxis.noTicks;
           if (options.x2axis) {
               options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
               options.xaxes[1].position = "top";
           }
           if (options.y2axis) {
               options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
               options.yaxes[1].position = "right";
           }
           if (options.grid.coloredAreas)
               options.grid.markings = options.grid.coloredAreas;
           if (options.grid.coloredAreasColor)
               options.grid.markingsColor = options.grid.coloredAreasColor;
           if (options.lines)
               $.extend(true, options.series.lines, options.lines);
           if (options.points)
               $.extend(true, options.series.points, options.points);
           if (options.bars)
               $.extend(true, options.series.bars, options.bars);
           if (options.shadowSize != null)
               options.series.shadowSize = options.shadowSize;

           // save options on axes for future reference
           for (i = 0; i < options.xaxes.length; ++i)
               getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
           for (i = 0; i < options.yaxes.length; ++i)
               getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

           // add hooks from options
           for (var n in hooks)
               if (options.hooks[n] && options.hooks[n].length)
                   hooks[n] = hooks[n].concat(options.hooks[n]);

           executeHooks(hooks.processOptions, [options]);
       }

       function setData(d) {
           series = parseData(d);
           fillInSeriesOptions();
           processData();
       }
       
       function parseData(d) {
           var res = [];
           for (var i = 0; i < d.length; ++i) {
               var s = $.extend(true, {}, options.series);

               if (d[i].data != null) {
                   s.data = d[i].data; // move the data instead of deep-copy
                   delete d[i].data;

                   $.extend(true, s, d[i]);

                   d[i].data = s.data;
               }
               else
                   s.data = d[i];
               res.push(s);
           }

           return res;
       }
       
       function axisNumber(obj, coord) {
           var a = obj[coord + "axis"];
           if (typeof a == "object") // if we got a real axis, extract number
               a = a.n;
           if (typeof a != "number")
               a = 1; // default to first axis
           return a;
       }

       function allAxes() {
           // return flat array without annoying null entries
           return $.grep(xaxes.concat(yaxes), function (a) { return a; });
       }
       
       function canvasToAxisCoords(pos) {
           // return an object with x/y corresponding to all used axes 
           var res = {}, i, axis;
           for (i = 0; i < xaxes.length; ++i) {
               axis = xaxes[i];
               if (axis && axis.used)
                   res["x" + axis.n] = axis.c2p(pos.left);
           }

           for (i = 0; i < yaxes.length; ++i) {
               axis = yaxes[i];
               if (axis && axis.used)
                   res["y" + axis.n] = axis.c2p(pos.top);
           }
           
           if (res.x1 !== undefined)
               res.x = res.x1;
           if (res.y1 !== undefined)
               res.y = res.y1;

           return res;
       }
       
       function axisToCanvasCoords(pos) {
           // get canvas coords from the first pair of x/y found in pos
           var res = {}, i, axis, key;

           for (i = 0; i < xaxes.length; ++i) {
               axis = xaxes[i];
               if (axis && axis.used) {
                   key = "x" + axis.n;
                   if (pos[key] == null && axis.n == 1)
                       key = "x";

                   if (pos[key] != null) {
                       res.left = axis.p2c(pos[key]);
                       break;
                   }
               }
           }
           
           for (i = 0; i < yaxes.length; ++i) {
               axis = yaxes[i];
               if (axis && axis.used) {
                   key = "y" + axis.n;
                   if (pos[key] == null && axis.n == 1)
                       key = "y";

                   if (pos[key] != null) {
                       res.top = axis.p2c(pos[key]);
                       break;
                   }
               }
           }
           
           return res;
       }
       
       function getOrCreateAxis(axes, number) {
           if (!axes[number - 1])
               axes[number - 1] = {
                   n: number, // save the number for future reference
                   direction: axes == xaxes ? "x" : "y",
                   options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
               };
               
           return axes[number - 1];
       }

       function fillInSeriesOptions() {
           var i;
           
           // collect what we already got of colors
           var neededColors = series.length,
               usedColors = [],
               assignedColors = [];
           for (i = 0; i < series.length; ++i) {
               var sc = series[i].color;
               if (sc != null) {
                   --neededColors;
                   if (typeof sc == "number")
                       assignedColors.push(sc);
                   else
                       usedColors.push($.color.parse(series[i].color));
               }
           }
           
           // we might need to generate more colors if higher indices
           // are assigned
           for (i = 0; i < assignedColors.length; ++i) {
               neededColors = Math.max(neededColors, assignedColors[i] + 1);
           }

           // produce colors as needed
           var colors = [], variation = 0;
           i = 0;
           while (colors.length < neededColors) {
               var c;
               if (options.colors.length == i) // check degenerate case
                   c = $.color.make(100, 100, 100);
               else
                   c = $.color.parse(options.colors[i]);

               // vary color if needed
               var sign = variation % 2 == 1 ? -1 : 1;
               c.scale('rgb', 1 + sign * Math.ceil(variation / 2) * 0.2)

               // FIXME: if we're getting to close to something else,
               // we should probably skip this one
               colors.push(c);
               
               ++i;
               if (i >= options.colors.length) {
                   i = 0;
                   ++variation;
               }
           }

           // fill in the options
           var colori = 0, s;
           for (i = 0; i < series.length; ++i) {
               s = series[i];
               
               // assign colors
               if (s.color == null) {
                   s.color = colors[colori].toString();
                   ++colori;
               }
               else if (typeof s.color == "number")
                   s.color = colors[s.color].toString();

               // turn on lines automatically in case nothing is set
               if (s.lines.show == null) {
                   var v, show = true;
                   for (v in s)
                       if (s[v] && s[v].show) {
                           show = false;
                           break;
                       }
                   if (show)
                       s.lines.show = true;
               }

               // setup axes
               s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
               s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
           }
       }
       
       function processData() {
           var topSentry = Number.POSITIVE_INFINITY,
               bottomSentry = Number.NEGATIVE_INFINITY,
               fakeInfinity = Number.MAX_VALUE,
               i, j, k, m, length,
               s, points, ps, x, y, axis, val, f, p;

           function updateAxis(axis, min, max) {
               if (min < axis.datamin && min != -fakeInfinity)
                   axis.datamin = min;
               if (max > axis.datamax && max != fakeInfinity)
                   axis.datamax = max;
           }

           $.each(allAxes(), function (_, axis) {
               // init axis
               axis.datamin = topSentry;
               axis.datamax = bottomSentry;
               axis.used = false;
           });
           
           for (i = 0; i < series.length; ++i) {
               s = series[i];
               s.datapoints = { points: [] };
               
               executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
           }
           
           // first pass: clean and copy data
           for (i = 0; i < series.length; ++i) {
               s = series[i];

               var data = s.data, format = s.datapoints.format;

               if (!format) {
                   format = [];
                   // find out how to copy
                   format.push({ x: true, number: true, required: true });
                   format.push({ y: true, number: true, required: true });

                   if (s.bars.show || (s.lines.show && s.lines.fill)) {
                       format.push({ y: true, number: true, required: false, defaultValue: 0 });
                       if (s.bars.horizontal) {
                           delete format[format.length - 1].y;
                           format[format.length - 1].x = true;
                       }
                   }
                   
                   s.datapoints.format = format;
               }

               if (s.datapoints.pointsize != null)
                   continue; // already filled in

               s.datapoints.pointsize = format.length;
               
               ps = s.datapoints.pointsize;
               points = s.datapoints.points;

               insertSteps = s.lines.show && s.lines.steps;
               s.xaxis.used = s.yaxis.used = true;
               
               for (j = k = 0; j < data.length; ++j, k += ps) {
                   p = data[j];

                   var nullify = p == null;
                   if (!nullify) {
                       for (m = 0; m < ps; ++m) {
                           val = p[m];
                           f = format[m];

                           if (f) {
                               if (f.number && val != null) {
                                   val = +val; // convert to number
                                   if (isNaN(val))
                                       val = null;
                                   else if (val == Infinity)
                                       val = fakeInfinity;
                                   else if (val == -Infinity)
                                       val = -fakeInfinity;
                               }

                               if (val == null) {
                                   if (f.required)
                                       nullify = true;
                                   
                                   if (f.defaultValue != null)
                                       val = f.defaultValue;
                               }
                           }
                           
                           points[k + m] = val;
                       }
                   }
                   
                   if (nullify) {
                       for (m = 0; m < ps; ++m) {
                           val = points[k + m];
                           if (val != null) {
                               f = format[m];
                               // extract min/max info
                               if (f.x)
                                   updateAxis(s.xaxis, val, val);
                               if (f.y)
                                   updateAxis(s.yaxis, val, val);
                           }
                           points[k + m] = null;
                       }
                   }
                   else {
                       // a little bit of line specific stuff that
                       // perhaps shouldn't be here, but lacking
                       // better means...
                       if (insertSteps && k > 0
                           && points[k - ps] != null
                           && points[k - ps] != points[k]
                           && points[k - ps + 1] != points[k + 1]) {
                           // copy the point to make room for a middle point
                           for (m = 0; m < ps; ++m)
                               points[k + ps + m] = points[k + m];

                           // middle point has same y
                           points[k + 1] = points[k - ps + 1];

                           // we've added a point, better reflect that
                           k += ps;
                       }
                   }
               }
           }

           // give the hooks a chance to run
           for (i = 0; i < series.length; ++i) {
               s = series[i];
               
               executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
           }

           // second pass: find datamax/datamin for auto-scaling
           for (i = 0; i < series.length; ++i) {
               s = series[i];
               points = s.datapoints.points,
               ps = s.datapoints.pointsize;

               var xmin = topSentry, ymin = topSentry,
                   xmax = bottomSentry, ymax = bottomSentry;
               
               for (j = 0; j < points.length; j += ps) {
                   if (points[j] == null)
                       continue;

                   for (m = 0; m < ps; ++m) {
                       val = points[j + m];
                       f = format[m];
                       if (!f || val == fakeInfinity || val == -fakeInfinity)
                           continue;
                       
                       if (f.x) {
                           if (val < xmin)
                               xmin = val;
                           if (val > xmax)
                               xmax = val;
                       }
                       if (f.y) {
                           if (val < ymin)
                               ymin = val;
                           if (val > ymax)
                               ymax = val;
                       }
                   }
               }
               
               if (s.bars.show) {
                   // make sure we got room for the bar on the dancing floor
                   var delta = s.bars.align == "left" ? 0 : -s.bars.barWidth/2;
                   if (s.bars.horizontal) {
                       ymin += delta;
                       ymax += delta + s.bars.barWidth;
                   }
                   else {
                       xmin += delta;
                       xmax += delta + s.bars.barWidth;
                   }
               }
               
               updateAxis(s.xaxis, xmin, xmax);
               updateAxis(s.yaxis, ymin, ymax);
           }

           $.each(allAxes(), function (_, axis) {
               if (axis.datamin == topSentry)
                   axis.datamin = null;
               if (axis.datamax == bottomSentry)
                   axis.datamax = null;
           });
       }

       function makeCanvas(skipPositioning, cls) {
           var c = document.createElement('canvas');
           c.className = cls;
           c.width = canvasWidth;
           c.height = canvasHeight;
                   
           if (!skipPositioning)
               $(c).css({ position: 'absolute', left: 0, top: 0 });
               
           $(c).appendTo(placeholder);
               
           if (!c.getContext) // excanvas hack
               c = window.G_vmlCanvasManager.initElement(c);

           // used for resetting in case we get replotted
           c.getContext("2d").save();
           
           return c;
       }

       function getCanvasDimensions() {
           canvasWidth = placeholder.width();
           canvasHeight = placeholder.height();
           
           if (canvasWidth <= 0 || canvasHeight <= 0)
               throw "Invalid dimensions for plot, width = " + canvasWidth + ", height = " + canvasHeight;
       }

       function resizeCanvas(c) {
           // resizing should reset the state (excanvas seems to be
           // buggy though)
           if (c.width != canvasWidth)
               c.width = canvasWidth;

           if (c.height != canvasHeight)
               c.height = canvasHeight;

           // so try to get back to the initial state (even if it's
           // gone now, this should be safe according to the spec)
           var cctx = c.getContext("2d");
           cctx.restore();

           // and save again
           cctx.save();
       }
       
       function setupCanvases() {
           var reused,
               existingCanvas = placeholder.children("canvas.base"),
               existingOverlay = placeholder.children("canvas.overlay");

           if (existingCanvas.length == 0 || existingOverlay == 0) {
               // init everything
               
               placeholder.html(""); // make sure placeholder is clear
           
               placeholder.css({ padding: 0 }); // padding messes up the positioning
               
               if (placeholder.css("position") == 'static')
                   placeholder.css("position", "relative"); // for positioning labels and overlay

               getCanvasDimensions();
               
               canvas = makeCanvas(true, "base");
               overlay = makeCanvas(false, "overlay"); // overlay canvas for interactive features

               reused = false;
           }
           else {
               // reuse existing elements

               canvas = existingCanvas.get(0);
               overlay = existingOverlay.get(0);

               reused = true;
           }

           ctx = canvas.getContext("2d");
           octx = overlay.getContext("2d");

           // we include the canvas in the event holder too, because IE 7
           // sometimes has trouble with the stacking order
           eventHolder = $([overlay, canvas]);

           if (reused) {
               // run shutdown in the old plot object
               placeholder.data("plot").shutdown();

               // reset reused canvases
               plot.resize();
               
               // make sure overlay pixels are cleared (canvas is cleared when we redraw)
               octx.clearRect(0, 0, canvasWidth, canvasHeight);
               
               // then whack any remaining obvious garbage left
               eventHolder.unbind();
               placeholder.children().not([canvas, overlay]).remove();
           }

           // save in case we get replotted
           placeholder.data("plot", plot);
       }

       function bindEvents() {
           // bind events
           if (options.grid.hoverable) {
               eventHolder.mousemove(onMouseMove);
               eventHolder.mouseleave(onMouseLeave);
           }

           if (options.grid.clickable)
               eventHolder.click(onClick);

           executeHooks(hooks.bindEvents, [eventHolder]);
       }

       function shutdown() {
           if (redrawTimeout)
               clearTimeout(redrawTimeout);
           
           eventHolder.unbind("mousemove", onMouseMove);
           eventHolder.unbind("mouseleave", onMouseLeave);
           eventHolder.unbind("click", onClick);
           
           executeHooks(hooks.shutdown, [eventHolder]);
       }

       function setTransformationHelpers(axis) {
           // set helper functions on the axis, assumes plot area
           // has been computed already
           
           function identity(x) { return x; }
           
           var s, m, t = axis.options.transform || identity,
               it = axis.options.inverseTransform;
           
           // precompute how much the axis is scaling a point
           // in canvas space
           if (axis.direction == "x") {
               s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
               m = Math.min(t(axis.max), t(axis.min));
           }
           else {
               s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
               s = -s;
               m = Math.max(t(axis.max), t(axis.min));
           }

           // data point to canvas coordinate
           if (t == identity) // slight optimization
               axis.p2c = function (p) { return (p - m) * s; };
           else
               axis.p2c = function (p) { return (t(p) - m) * s; };
           // canvas coordinate to data point
           if (!it)
               axis.c2p = function (c) { return m + c / s; };
           else
               axis.c2p = function (c) { return it(m + c / s); };
       }

       function measureTickLabels(axis) {
           var opts = axis.options, i, ticks = axis.ticks || [], labels = [],
               l, w = opts.labelWidth, h = opts.labelHeight, dummyDiv;

           function makeDummyDiv(labels, width) {
               return $('<div style="position:absolute;top:-10000px;' + width + 'font-size:smaller">' +
                        '<div class="' + axis.direction + 'Axis ' + axis.direction + axis.n + 'Axis">'
                        + labels.join("") + '</div></div>')
                   .appendTo(placeholder);
           }
           
           if (axis.direction == "x") {
               // to avoid measuring the widths of the labels (it's slow), we
               // construct fixed-size boxes and put the labels inside
               // them, we don't need the exact figures and the
               // fixed-size box content is easy to center
               if (w == null)
                   w = Math.floor(canvasWidth / (ticks.length > 0 ? ticks.length : 1));

               // measure x label heights
               if (h == null) {
                   labels = [];
                   for (i = 0; i < ticks.length; ++i) {
                       l = ticks[i].label;
                       if (l)
                           labels.push('<div class="tickLabel" style="float:left;width:' + w + 'px">' + l + '</div>');
                   }

                   if (labels.length > 0) {
                       // stick them all in the same div and measure
                       // collective height
                       labels.push('<div style="clear:left"></div>');
                       dummyDiv = makeDummyDiv(labels, "width:10000px;");
                       h = dummyDiv.height();
                       dummyDiv.remove();
                   }
               }
           }
           else if (w == null || h == null) {
               // calculate y label dimensions
               for (i = 0; i < ticks.length; ++i) {
                   l = ticks[i].label;
                   if (l)
                       labels.push('<div class="tickLabel">' + l + '</div>');
               }
               
               if (labels.length > 0) {
                   dummyDiv = makeDummyDiv(labels, "");
                   if (w == null)
                       w = dummyDiv.children().width();
                   if (h == null)
                       h = dummyDiv.find("div.tickLabel").height();
                   dummyDiv.remove();
               }
           }

           if (w == null)
               w = 0;
           if (h == null)
               h = 0;

           axis.labelWidth = w;
           axis.labelHeight = h;
       }

       function allocateAxisBoxFirstPhase(axis) {
           // find the bounding box of the axis by looking at label
           // widths/heights and ticks, make room by diminishing the
           // plotOffset

           var lw = axis.labelWidth,
               lh = axis.labelHeight,
               pos = axis.options.position,
               tickLength = axis.options.tickLength,
               axismargin = options.grid.axisMargin,
               padding = options.grid.labelMargin,
               all = axis.direction == "x" ? xaxes : yaxes,
               index;

           // determine axis margin
           var samePosition = $.grep(all, function (a) {
               return a && a.options.position == pos && a.reserveSpace;
           });
           if ($.inArray(axis, samePosition) == samePosition.length - 1)
               axismargin = 0; // outermost

           // determine tick length - if we're innermost, we can use "full"
           if (tickLength == null)
               tickLength = "full";

           var sameDirection = $.grep(all, function (a) {
               return a && a.reserveSpace;
           });

           var innermost = $.inArray(axis, sameDirection) == 0;
           if (!innermost && tickLength == "full")
               tickLength = 5;
               
           if (!isNaN(+tickLength))
               padding += +tickLength;

           // compute box
           if (axis.direction == "x") {
               lh += padding;
               
               if (pos == "bottom") {
                   plotOffset.bottom += lh + axismargin;
                   axis.box = { top: canvasHeight - plotOffset.bottom, height: lh };
               }
               else {
                   axis.box = { top: plotOffset.top + axismargin, height: lh };
                   plotOffset.top += lh + axismargin;
               }
           }
           else {
               lw += padding;
               
               if (pos == "left") {
                   axis.box = { left: plotOffset.left + axismargin, width: lw };
                   plotOffset.left += lw + axismargin;
               }
               else {
                   plotOffset.right += lw + axismargin;
                   axis.box = { left: canvasWidth - plotOffset.right, width: lw };
               }
           }

            // save for future reference
           axis.position = pos;
           axis.tickLength = tickLength;
           axis.box.padding = padding;
           axis.innermost = innermost;
       }

       function allocateAxisBoxSecondPhase(axis) {
           // set remaining bounding box coordinates
           if (axis.direction == "x") {
               axis.box.left = plotOffset.left;
               axis.box.width = plotWidth;
           }
           else {
               axis.box.top = plotOffset.top;
               axis.box.height = plotHeight;
           }
       }
       
       function setupGrid() {
           var i, axes = allAxes();

           // first calculate the plot and axis box dimensions

           $.each(axes, function (_, axis) {
               axis.show = axis.options.show;
               if (axis.show == null)
                   axis.show = axis.used; // by default an axis is visible if it's got data
               
               axis.reserveSpace = axis.show || axis.options.reserveSpace;

               setRange(axis);
           });

           allocatedAxes = $.grep(axes, function (axis) { return axis.reserveSpace; });

           plotOffset.left = plotOffset.right = plotOffset.top = plotOffset.bottom = 0;
           if (options.grid.show) {
               $.each(allocatedAxes, function (_, axis) {
                   // make the ticks
                   setupTickGeneration(axis);
                   setTicks(axis);
                   snapRangeToTicks(axis, axis.ticks);

                   // find labelWidth/Height for axis
                   measureTickLabels(axis);
               });

               // with all dimensions in house, we can compute the
               // axis boxes, start from the outside (reverse order)
               for (i = allocatedAxes.length - 1; i >= 0; --i)
                   allocateAxisBoxFirstPhase(allocatedAxes[i]);

               // make sure we've got enough space for things that
               // might stick out
               var minMargin = options.grid.minBorderMargin;
               if (minMargin == null) {
                   minMargin = 0;
                   for (i = 0; i < series.length; ++i)
                       minMargin = Math.max(minMargin, series[i].points.radius + series[i].points.lineWidth/2);
               }
                   
               for (var a in plotOffset) {
                   plotOffset[a] += options.grid.borderWidth;
                   plotOffset[a] = Math.max(minMargin, plotOffset[a]);
               }
           }
           
           plotWidth = canvasWidth - plotOffset.left - plotOffset.right;
           plotHeight = canvasHeight - plotOffset.bottom - plotOffset.top;

           // now we got the proper plotWidth/Height, we can compute the scaling
           $.each(axes, function (_, axis) {
               setTransformationHelpers(axis);
           });

           if (options.grid.show) {
               $.each(allocatedAxes, function (_, axis) {
                   allocateAxisBoxSecondPhase(axis);
               });

               insertAxisLabels();
           }
           
           insertLegend();
       }
       
       function setRange(axis) {
           var opts = axis.options,
               min = +(opts.min != null ? opts.min : axis.datamin),
               max = +(opts.max != null ? opts.max : axis.datamax),
               delta = max - min;

           if (delta == 0.0) {
               // degenerate case
               var widen = max == 0 ? 1 : 0.01;

               if (opts.min == null)
                   min -= widen;
               // always widen max if we couldn't widen min to ensure we
               // don't fall into min == max which doesn't work
               if (opts.max == null || opts.min != null)
                   max += widen;
           }
           else {
               // consider autoscaling
               var margin = opts.autoscaleMargin;
               if (margin != null) {
                   if (opts.min == null) {
                       min -= delta * margin;
                       // make sure we don't go below zero if all values
                       // are positive
                       if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                           min = 0;
                   }
                   if (opts.max == null) {
                       max += delta * margin;
                       if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                           max = 0;
                   }
               }
           }
           axis.min = min;
           axis.max = max;
       }

       function setupTickGeneration(axis) {
           var opts = axis.options;
               
           // estimate number of ticks
           var noTicks;
           if (typeof opts.ticks == "number" && opts.ticks > 0)
               noTicks = opts.ticks;
           else
               // heuristic based on the model a*sqrt(x) fitted to
               // some data points that seemed reasonable
               noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? canvasWidth : canvasHeight);

           var delta = (axis.max - axis.min) / noTicks,
               size, generator, unit, formatter, i, magn, norm;

           if (opts.mode == "time") {
               // pretty handling of time
               
               // map of app. size of time units in milliseconds
               var timeUnitSize = {
                   "second": 1000,
                   "minute": 60 * 1000,
                   "hour": 60 * 60 * 1000,
                   "day": 24 * 60 * 60 * 1000,
                   "month": 30 * 24 * 60 * 60 * 1000,
                   "year": 365.2425 * 24 * 60 * 60 * 1000
               };


               // the allowed tick sizes, after 1 year we use
               // an integer algorithm
               var spec = [
                   [1, "second"], [2, "second"], [5, "second"], [10, "second"],
                   [30, "second"], 
                   [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
                   [30, "minute"], 
                   [1, "hour"], [2, "hour"], [4, "hour"],
                   [8, "hour"], [12, "hour"],
                   [1, "day"], [2, "day"], [3, "day"],
                   [0.25, "month"], [0.5, "month"], [1, "month"],
                   [2, "month"], [3, "month"], [6, "month"],
                   [1, "year"]
               ];

               var minSize = 0;
               if (opts.minTickSize != null) {
                   if (typeof opts.tickSize == "number")
                       minSize = opts.tickSize;
                   else
                       minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
               }

               for (var i = 0; i < spec.length - 1; ++i)
                   if (delta < (spec[i][0] * timeUnitSize[spec[i][1]]
                                + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
                      && spec[i][0] * timeUnitSize[spec[i][1]] >= minSize)
                       break;
               size = spec[i][0];
               unit = spec[i][1];
               
               // special-case the possibility of several years
               if (unit == "year") {
                   magn = Math.pow(10, Math.floor(Math.log(delta / timeUnitSize.year) / Math.LN10));
                   norm = (delta / timeUnitSize.year) / magn;
                   if (norm < 1.5)
                       size = 1;
                   else if (norm < 3)
                       size = 2;
                   else if (norm < 7.5)
                       size = 5;
                   else
                       size = 10;

                   size *= magn;
               }

               axis.tickSize = opts.tickSize || [size, unit];
               
               generator = function(axis) {
                   var ticks = [],
                       tickSize = axis.tickSize[0], unit = axis.tickSize[1],
                       d = new Date(axis.min);
                   
                   var step = tickSize * timeUnitSize[unit];

                   if (unit == "second")
                       d.setUTCSeconds(floorInBase(d.getUTCSeconds(), tickSize));
                   if (unit == "minute")
                       d.setUTCMinutes(floorInBase(d.getUTCMinutes(), tickSize));
                   if (unit == "hour")
                       d.setUTCHours(floorInBase(d.getUTCHours(), tickSize));
                   if (unit == "month")
                       d.setUTCMonth(floorInBase(d.getUTCMonth(), tickSize));
                   if (unit == "year")
                       d.setUTCFullYear(floorInBase(d.getUTCFullYear(), tickSize));
                   
                   // reset smaller components
                   d.setUTCMilliseconds(0);
                   if (step >= timeUnitSize.minute)
                       d.setUTCSeconds(0);
                   if (step >= timeUnitSize.hour)
                       d.setUTCMinutes(0);
                   if (step >= timeUnitSize.day)
                       d.setUTCHours(0);
                   if (step >= timeUnitSize.day * 4)
                       d.setUTCDate(1);
                   if (step >= timeUnitSize.year)
                       d.setUTCMonth(0);


                   var carry = 0, v = Number.NaN, prev;
                   do {
                       prev = v;
                       v = d.getTime();
                       ticks.push(v);
                       if (unit == "month") {
                           if (tickSize < 1) {
                               // a bit complicated - we'll divide the month
                               // up but we need to take care of fractions
                               // so we don't end up in the middle of a day
                               d.setUTCDate(1);
                               var start = d.getTime();
                               d.setUTCMonth(d.getUTCMonth() + 1);
                               var end = d.getTime();
                               d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
                               carry = d.getUTCHours();
                               d.setUTCHours(0);
                           }
                           else
                               d.setUTCMonth(d.getUTCMonth() + tickSize);
                       }
                       else if (unit == "year") {
                           d.setUTCFullYear(d.getUTCFullYear() + tickSize);
                       }
                       else
                           d.setTime(v + step);
                   } while (v < axis.max && v != prev);

                   return ticks;
               };

               formatter = function (v, axis) {
                   var d = new Date(v);

                   // first check global format
                   if (opts.timeformat != null)
                       return $.plot.formatDate(d, opts.timeformat, opts.monthNames);
                   
                   var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
                   var span = axis.max - axis.min;
                   var suffix = (opts.twelveHourClock) ? " %p" : "";
                   
                   if (t < timeUnitSize.minute)
                       fmt = "%h:%M:%S" + suffix;
                   else if (t < timeUnitSize.day) {
                       if (span < 2 * timeUnitSize.day)
                           fmt = "%h:%M" + suffix;
                       else
                           fmt = "%b %d %h:%M" + suffix;
                   }
                   else if (t < timeUnitSize.month)
                       fmt = "%b %d";
                   else if (t < timeUnitSize.year) {
                       if (span < timeUnitSize.year)
                           fmt = "%b";
                       else
                           fmt = "%b %y";
                   }
                   else
                       fmt = "%y";
                   
                   return $.plot.formatDate(d, fmt, opts.monthNames);
               };
           }
           else {
               // pretty rounding of base-10 numbers
               var maxDec = opts.tickDecimals;
               var dec = -Math.floor(Math.log(delta) / Math.LN10);
               if (maxDec != null && dec > maxDec)
                   dec = maxDec;

               magn = Math.pow(10, -dec);
               norm = delta / magn; // norm is between 1.0 and 10.0
               
               if (norm < 1.5)
                   size = 1;
               else if (norm < 3) {
                   size = 2;
                   // special case for 2.5, requires an extra decimal
                   if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                       size = 2.5;
                       ++dec;
                   }
               }
               else if (norm < 7.5)
                   size = 5;
               else
                   size = 10;

               size *= magn;
               
               if (opts.minTickSize != null && size < opts.minTickSize)
                   size = opts.minTickSize;

               axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
               axis.tickSize = opts.tickSize || size;

               generator = function (axis) {
                   var ticks = [];

                   // spew out all possible ticks
                   var start = floorInBase(axis.min, axis.tickSize),
                       i = 0, v = Number.NaN, prev;
                   do {
                       prev = v;
                       v = start + i * axis.tickSize;
                       ticks.push(v);
                       ++i;
                   } while (v < axis.max && v != prev);
                   return ticks;
               };

               formatter = function (v, axis) {
                   return v.toFixed(axis.tickDecimals);
               };
           }

           if (opts.alignTicksWithAxis != null) {
               var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
               if (otherAxis && otherAxis.used && otherAxis != axis) {
                   // consider snapping min/max to outermost nice ticks
                   var niceTicks = generator(axis);
                   if (niceTicks.length > 0) {
                       if (opts.min == null)
                           axis.min = Math.min(axis.min, niceTicks[0]);
                       if (opts.max == null && niceTicks.length > 1)
                           axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                   }
                   
                   generator = function (axis) {
                       // copy ticks, scaled to this axis
                       var ticks = [], v, i;
                       for (i = 0; i < otherAxis.ticks.length; ++i) {
                           v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                           v = axis.min + v * (axis.max - axis.min);
                           ticks.push(v);
                       }
                       return ticks;
                   };
                   
                   // we might need an extra decimal since forced
                   // ticks don't necessarily fit naturally
                   if (axis.mode != "time" && opts.tickDecimals == null) {
                       var extraDec = Math.max(0, -Math.floor(Math.log(delta) / Math.LN10) + 1),
                           ts = generator(axis);

                       // only proceed if the tick interval rounded
                       // with an extra decimal doesn't give us a
                       // zero at end
                       if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                           axis.tickDecimals = extraDec;
                   }
               }
           }

           axis.tickGenerator = generator;
           if ($.isFunction(opts.tickFormatter))
               axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };
           else
               axis.tickFormatter = formatter;
       }
       
       function setTicks(axis) {
           var oticks = axis.options.ticks, ticks = [];
           if (oticks == null || (typeof oticks == "number" && oticks > 0))
               ticks = axis.tickGenerator(axis);
           else if (oticks) {
               if ($.isFunction(oticks))
                   // generate the ticks
                   ticks = oticks({ min: axis.min, max: axis.max });
               else
                   ticks = oticks;
           }

           // clean up/labelify the supplied ticks, copy them over
           var i, v;
           axis.ticks = [];
           for (i = 0; i < ticks.length; ++i) {
               var label = null;
               var t = ticks[i];
               if (typeof t == "object") {
                   v = +t[0];
                   if (t.length > 1)
                       label = t[1];
               }
               else
                   v = +t;
               if (label == null)
                   label = axis.tickFormatter(v, axis);
               if (!isNaN(v))
                   axis.ticks.push({ v: v, label: label });
           }
       }

       function snapRangeToTicks(axis, ticks) {
           if (axis.options.autoscaleMargin && ticks.length > 0) {
               // snap to ticks
               if (axis.options.min == null)
                   axis.min = Math.min(axis.min, ticks[0].v);
               if (axis.options.max == null && ticks.length > 1)
                   axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
           }
       }
     
       function draw() {
           ctx.clearRect(0, 0, canvasWidth, canvasHeight);

           var grid = options.grid;

           // draw background, if any
           if (grid.show && grid.backgroundColor)
               drawBackground();
           
           if (grid.show && !grid.aboveData)
               drawGrid();

           for (var i = 0; i < series.length; ++i) {
               executeHooks(hooks.drawSeries, [ctx, series[i]]);
               drawSeries(series[i]);
           }

           executeHooks(hooks.draw, [ctx]);
           
           if (grid.show && grid.aboveData)
               drawGrid();
       }

       function extractRange(ranges, coord) {
           var axis, from, to, key, axes = allAxes();

           for (i = 0; i < axes.length; ++i) {
               axis = axes[i];
               if (axis.direction == coord) {
                   key = coord + axis.n + "axis";
                   if (!ranges[key] && axis.n == 1)
                       key = coord + "axis"; // support x1axis as xaxis
                   if (ranges[key]) {
                       from = ranges[key].from;
                       to = ranges[key].to;
                       break;
                   }
               }
           }

           // backwards-compat stuff - to be removed in future
           if (!ranges[key]) {
               axis = coord == "x" ? xaxes[0] : yaxes[0];
               from = ranges[coord + "1"];
               to = ranges[coord + "2"];
           }

           // auto-reverse as an added bonus
           if (from != null && to != null && from > to) {
               var tmp = from;
               from = to;
               to = tmp;
           }
           
           return { from: from, to: to, axis: axis };
       }
       
       function drawBackground() {
           ctx.save();
           ctx.translate(plotOffset.left, plotOffset.top);

           ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
           ctx.fillRect(0, 0, plotWidth, plotHeight);
           ctx.restore();
       }

       function drawGrid() {
           var i;
           
           ctx.save();
           ctx.translate(plotOffset.left, plotOffset.top);

           // draw markings
           var markings = options.grid.markings;
           if (markings) {
               if ($.isFunction(markings)) {
                   var axes = plot.getAxes();
                   // xmin etc. is backwards compatibility, to be
                   // removed in the future
                   axes.xmin = axes.xaxis.min;
                   axes.xmax = axes.xaxis.max;
                   axes.ymin = axes.yaxis.min;
                   axes.ymax = axes.yaxis.max;
                   
                   markings = markings(axes);
               }

               for (i = 0; i < markings.length; ++i) {
                   var m = markings[i],
                       xrange = extractRange(m, "x"),
                       yrange = extractRange(m, "y");

                   // fill in missing
                   if (xrange.from == null)
                       xrange.from = xrange.axis.min;
                   if (xrange.to == null)
                       xrange.to = xrange.axis.max;
                   if (yrange.from == null)
                       yrange.from = yrange.axis.min;
                   if (yrange.to == null)
                       yrange.to = yrange.axis.max;

                   // clip
                   if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                       yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                       continue;

                   xrange.from = Math.max(xrange.from, xrange.axis.min);
                   xrange.to = Math.min(xrange.to, xrange.axis.max);
                   yrange.from = Math.max(yrange.from, yrange.axis.min);
                   yrange.to = Math.min(yrange.to, yrange.axis.max);

                   if (xrange.from == xrange.to && yrange.from == yrange.to)
                       continue;

                   // then draw
                   xrange.from = xrange.axis.p2c(xrange.from);
                   xrange.to = xrange.axis.p2c(xrange.to);
                   yrange.from = yrange.axis.p2c(yrange.from);
                   yrange.to = yrange.axis.p2c(yrange.to);
                   
                   if (xrange.from == xrange.to || yrange.from == yrange.to) {
                       // draw line
                       ctx.beginPath();
                       ctx.strokeStyle = m.color || options.grid.markingsColor;
                       ctx.lineWidth = m.lineWidth || options.grid.markingsLineWidth;
                       ctx.moveTo(xrange.from, yrange.from);
                       ctx.lineTo(xrange.to, yrange.to);
                       ctx.stroke();
                   }
                   else {
                       // fill area
                       ctx.fillStyle = m.color || options.grid.markingsColor;
                       ctx.fillRect(xrange.from, yrange.to,
                                    xrange.to - xrange.from,
                                    yrange.from - yrange.to);
                   }
               }
           }
           
           // draw the ticks
           var axes = allAxes(), bw = options.grid.borderWidth;

           for (var j = 0; j < axes.length; ++j) {
               var axis = axes[j], box = axis.box,
                   t = axis.tickLength, x, y, xoff, yoff;
               if (!axis.show || axis.ticks.length == 0)
                   continue
               
               ctx.strokeStyle = axis.options.tickColor || $.color.parse(axis.options.color).scale('a', 0.22).toString();
               ctx.lineWidth = 1;

               // find the edges
               if (axis.direction == "x") {
                   x = 0;
                   if (t == "full")
                       y = (axis.position == "top" ? 0 : plotHeight);
                   else
                       y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
               }
               else {
                   y = 0;
                   if (t == "full")
                       x = (axis.position == "left" ? 0 : plotWidth);
                   else
                       x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
               }
               
               // draw tick bar
               if (!axis.innermost) {
                   ctx.beginPath();
                   xoff = yoff = 0;
                   if (axis.direction == "x")
                       xoff = plotWidth;
                   else
                       yoff = plotHeight;
                   
                   if (ctx.lineWidth == 1) {
                       x = Math.floor(x) + 0.5;
                       y = Math.floor(y) + 0.5;
                   }

                   ctx.moveTo(x, y);
                   ctx.lineTo(x + xoff, y + yoff);
                   ctx.stroke();
               }

               // draw ticks
               ctx.beginPath();
               for (i = 0; i < axis.ticks.length; ++i) {
                   var v = axis.ticks[i].v;
                   
                   xoff = yoff = 0;

                   if (v < axis.min || v > axis.max
                       // skip those lying on the axes if we got a border
                       || (t == "full" && bw > 0
                           && (v == axis.min || v == axis.max)))
                       continue;

                   if (axis.direction == "x") {
                       x = axis.p2c(v);
                       yoff = t == "full" ? -plotHeight : t;
                       
                       if (axis.position == "top")
                           yoff = -yoff;
                   }
                   else {
                       y = axis.p2c(v);
                       xoff = t == "full" ? -plotWidth : t;
                       
                       if (axis.position == "left")
                           xoff = -xoff;
                   }

                   if (ctx.lineWidth == 1) {
                       if (axis.direction == "x")
                           x = Math.floor(x) + 0.5;
                       else
                           y = Math.floor(y) + 0.5;
                   }

                   ctx.moveTo(x, y);
                   ctx.lineTo(x + xoff, y + yoff);
               }
               
               ctx.stroke();
           }
           
           
           // draw border
           if (bw) {
               ctx.lineWidth = bw;
               ctx.strokeStyle = options.grid.borderColor;
               ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
           }

           ctx.restore();
       }

       function insertAxisLabels() {
           placeholder.find(".tickLabels").remove();
           
           var html = ['<div class="tickLabels" style="font-size:smaller">'];

           var axes = allAxes();
           for (var j = 0; j < axes.length; ++j) {
               var axis = axes[j], box = axis.box;
               if (!axis.show)
                   continue;
               //debug: html.push('<div style="position:absolute;opacity:0.10;background-color:red;left:' + box.left + 'px;top:' + box.top + 'px;width:' + box.width +  'px;height:' + box.height + 'px"></div>')
               html.push('<div class="' + axis.direction + 'Axis ' + axis.direction + axis.n + 'Axis" style="color:' + axis.options.color + '">');
               for (var i = 0; i < axis.ticks.length; ++i) {
                   var tick = axis.ticks[i];
                   if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                       continue;

                   var pos = {}, align;
                   
                   if (axis.direction == "x") {
                       align = "center";
                       pos.left = Math.round(plotOffset.left + axis.p2c(tick.v) - axis.labelWidth/2);
                       if (axis.position == "bottom")
                           pos.top = box.top + box.padding;
                       else
                           pos.bottom = canvasHeight - (box.top + box.height - box.padding);
                   }
                   else {
                       pos.top = Math.round(plotOffset.top + axis.p2c(tick.v) - axis.labelHeight/2);
                       if (axis.position == "left") {
                           pos.right = canvasWidth - (box.left + box.width - box.padding)
                           align = "right";
                       }
                       else {
                           pos.left = box.left + box.padding;
                           align = "left";
                       }
                   }

                   pos.width = axis.labelWidth;

                   var style = ["position:absolute", "text-align:" + align ];
                   for (var a in pos)
                       style.push(a + ":" + pos[a] + "px")
                   
                   html.push('<div class="tickLabel" style="' + style.join(';') + '">' + tick.label + '</div>');
               }
               html.push('</div>');
           }

           html.push('</div>');

           placeholder.append(html.join(""));
       }

       function drawSeries(series) {
           if (series.lines.show)
               drawSeriesLines(series);
           if (series.bars.show)
               drawSeriesBars(series);
           if (series.points.show)
               drawSeriesPoints(series);
       }
       
       function drawSeriesLines(series) {
           function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
               var points = datapoints.points,
                   ps = datapoints.pointsize,
                   prevx = null, prevy = null;
               
               ctx.beginPath();
               for (var i = ps; i < points.length; i += ps) {
                   var x1 = points[i - ps], y1 = points[i - ps + 1],
                       x2 = points[i], y2 = points[i + 1];
                   
                   if (x1 == null || x2 == null)
                       continue;

                   // clip with ymin
                   if (y1 <= y2 && y1 < axisy.min) {
                       if (y2 < axisy.min)
                           continue;   // line segment is outside
                       // compute new intersection point
                       x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y1 = axisy.min;
                   }
                   else if (y2 <= y1 && y2 < axisy.min) {
                       if (y1 < axisy.min)
                           continue;
                       x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y2 = axisy.min;
                   }

                   // clip with ymax
                   if (y1 >= y2 && y1 > axisy.max) {
                       if (y2 > axisy.max)
                           continue;
                       x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y1 = axisy.max;
                   }
                   else if (y2 >= y1 && y2 > axisy.max) {
                       if (y1 > axisy.max)
                           continue;
                       x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y2 = axisy.max;
                   }

                   // clip with xmin
                   if (x1 <= x2 && x1 < axisx.min) {
                       if (x2 < axisx.min)
                           continue;
                       y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x1 = axisx.min;
                   }
                   else if (x2 <= x1 && x2 < axisx.min) {
                       if (x1 < axisx.min)
                           continue;
                       y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x2 = axisx.min;
                   }

                   // clip with xmax
                   if (x1 >= x2 && x1 > axisx.max) {
                       if (x2 > axisx.max)
                           continue;
                       y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x1 = axisx.max;
                   }
                   else if (x2 >= x1 && x2 > axisx.max) {
                       if (x1 > axisx.max)
                           continue;
                       y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x2 = axisx.max;
                   }

                   if (x1 != prevx || y1 != prevy)
                       ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);
                   
                   prevx = x2;
                   prevy = y2;
                   ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
               }
               ctx.stroke();
           }

           function plotLineArea(datapoints, axisx, axisy) {
               var points = datapoints.points,
                   ps = datapoints.pointsize,
                   bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                   i = 0, top, areaOpen = false,
                   ypos = 1, segmentStart = 0, segmentEnd = 0;

               // we process each segment in two turns, first forward
               // direction to sketch out top, then once we hit the
               // end we go backwards to sketch the bottom
               while (true) {
                   if (ps > 0 && i > points.length + ps)
                       break;

                   i += ps; // ps is negative if going backwards

                   var x1 = points[i - ps],
                       y1 = points[i - ps + ypos],
                       x2 = points[i], y2 = points[i + ypos];

                   if (areaOpen) {
                       if (ps > 0 && x1 != null && x2 == null) {
                           // at turning point
                           segmentEnd = i;
                           ps = -ps;
                           ypos = 2;
                           continue;
                       }

                       if (ps < 0 && i == segmentStart + ps) {
                           // done with the reverse sweep
                           ctx.fill();
                           areaOpen = false;
                           ps = -ps;
                           ypos = 1;
                           i = segmentStart = segmentEnd + ps;
                           continue;
                       }
                   }

                   if (x1 == null || x2 == null)
                       continue;

                   // clip x values
                   
                   // clip with xmin
                   if (x1 <= x2 && x1 < axisx.min) {
                       if (x2 < axisx.min)
                           continue;
                       y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x1 = axisx.min;
                   }
                   else if (x2 <= x1 && x2 < axisx.min) {
                       if (x1 < axisx.min)
                           continue;
                       y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x2 = axisx.min;
                   }

                   // clip with xmax
                   if (x1 >= x2 && x1 > axisx.max) {
                       if (x2 > axisx.max)
                           continue;
                       y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x1 = axisx.max;
                   }
                   else if (x2 >= x1 && x2 > axisx.max) {
                       if (x1 > axisx.max)
                           continue;
                       y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                       x2 = axisx.max;
                   }

                   if (!areaOpen) {
                       // open area
                       ctx.beginPath();
                       ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                       areaOpen = true;
                   }
                   
                   // now first check the case where both is outside
                   if (y1 >= axisy.max && y2 >= axisy.max) {
                       ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                       ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                       continue;
                   }
                   else if (y1 <= axisy.min && y2 <= axisy.min) {
                       ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                       ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                       continue;
                   }
                   
                   // else it's a bit more complicated, there might
                   // be a flat maxed out rectangle first, then a
                   // triangular cutout or reverse; to find these
                   // keep track of the current x values
                   var x1old = x1, x2old = x2;

                   // clip the y values, without shortcutting, we
                   // go through all cases in turn
                   
                   // clip with ymin
                   if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                       x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y1 = axisy.min;
                   }
                   else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                       x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y2 = axisy.min;
                   }

                   // clip with ymax
                   if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                       x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y1 = axisy.max;
                   }
                   else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                       x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                       y2 = axisy.max;
                   }

                   // if the x value was changed we got a rectangle
                   // to fill
                   if (x1 != x1old) {
                       ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                       // it goes to (x1, y1), but we fill that below
                   }
                   
                   // fill triangular section, this sometimes result
                   // in redundant points if (x1, y1) hasn't changed
                   // from previous line to, but we just ignore that
                   ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                   ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                   // fill the other rectangle if it's there
                   if (x2 != x2old) {
                       ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                       ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                   }
               }
           }

           ctx.save();
           ctx.translate(plotOffset.left, plotOffset.top);
           ctx.lineJoin = "round";

           var lw = series.lines.lineWidth,
               sw = series.shadowSize;
           // FIXME: consider another form of shadow when filling is turned on
           if (lw > 0 && sw > 0) {
               // draw shadow as a thick and thin line with transparency
               ctx.lineWidth = sw;
               ctx.strokeStyle = "rgba(0,0,0,0.1)";
               // position shadow at angle from the mid of line
               var angle = Math.PI/18;
               plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
               ctx.lineWidth = sw/2;
               plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
           }

           ctx.lineWidth = lw;
           ctx.strokeStyle = series.color;
           var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
           if (fillStyle) {
               ctx.fillStyle = fillStyle;
               plotLineArea(series.datapoints, series.xaxis, series.yaxis);
           }

           if (lw > 0)
               plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
           ctx.restore();
       }

       function drawSeriesPoints(series) {
           function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
               var points = datapoints.points, ps = datapoints.pointsize;

               for (var i = 0; i < points.length; i += ps) {
                   var x = points[i], y = points[i + 1];
                   if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                       continue;
                   
                   ctx.beginPath();
                   x = axisx.p2c(x);
                   y = axisy.p2c(y) + offset;
                   if (symbol == "circle")
                       ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                   else
                       symbol(ctx, x, y, radius, shadow);
                   ctx.closePath();
                   
                   if (fillStyle) {
                       ctx.fillStyle = fillStyle;
                       ctx.fill();
                   }
                   ctx.stroke();
               }
           }
           
           ctx.save();
           ctx.translate(plotOffset.left, plotOffset.top);

           var lw = series.points.lineWidth,
               sw = series.shadowSize,
               radius = series.points.radius,
               symbol = series.points.symbol;
           if (lw > 0 && sw > 0) {
               // draw shadow in two steps
               var w = sw / 2;
               ctx.lineWidth = w;
               ctx.strokeStyle = "rgba(0,0,0,0.1)";
               plotPoints(series.datapoints, radius, null, w + w/2, true,
                          series.xaxis, series.yaxis, symbol);

               ctx.strokeStyle = "rgba(0,0,0,0.2)";
               plotPoints(series.datapoints, radius, null, w/2, true,
                          series.xaxis, series.yaxis, symbol);
           }

           ctx.lineWidth = lw;
           ctx.strokeStyle = series.color;
           plotPoints(series.datapoints, radius,
                      getFillStyle(series.points, series.color), 0, false,
                      series.xaxis, series.yaxis, symbol);
           ctx.restore();
       }

       function drawBar(x, y, b, barLeft, barRight, offset, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
           var left, right, bottom, top,
               drawLeft, drawRight, drawTop, drawBottom,
               tmp;

           // in horizontal mode, we start the bar from the left
           // instead of from the bottom so it appears to be
           // horizontal rather than vertical
           if (horizontal) {
               drawBottom = drawRight = drawTop = true;
               drawLeft = false;
               left = b;
               right = x;
               top = y + barLeft;
               bottom = y + barRight;

               // account for negative bars
               if (right < left) {
                   tmp = right;
                   right = left;
                   left = tmp;
                   drawLeft = true;
                   drawRight = false;
               }
           }
           else {
               drawLeft = drawRight = drawTop = true;
               drawBottom = false;
               left = x + barLeft;
               right = x + barRight;
               bottom = b;
               top = y;

               // account for negative bars
               if (top < bottom) {
                   tmp = top;
                   top = bottom;
                   bottom = tmp;
                   drawBottom = true;
                   drawTop = false;
               }
           }
          
           // clip
           if (right < axisx.min || left > axisx.max ||
               top < axisy.min || bottom > axisy.max)
               return;
           
           if (left < axisx.min) {
               left = axisx.min;
               drawLeft = false;
           }

           if (right > axisx.max) {
               right = axisx.max;
               drawRight = false;
           }

           if (bottom < axisy.min) {
               bottom = axisy.min;
               drawBottom = false;
           }
           
           if (top > axisy.max) {
               top = axisy.max;
               drawTop = false;
           }

           left = axisx.p2c(left);
           bottom = axisy.p2c(bottom);
           right = axisx.p2c(right);
           top = axisy.p2c(top);
           
           // fill the bar
           if (fillStyleCallback) {
               c.beginPath();
               c.moveTo(left, bottom);
               c.lineTo(left, top);
               c.lineTo(right, top);
               c.lineTo(right, bottom);
               c.fillStyle = fillStyleCallback(bottom, top);
               c.fill();
           }

           // draw outline
           if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
               c.beginPath();

               // FIXME: inline moveTo is buggy with excanvas
               c.moveTo(left, bottom + offset);
               if (drawLeft)
                   c.lineTo(left, top + offset);
               else
                   c.moveTo(left, top + offset);
               if (drawTop)
                   c.lineTo(right, top + offset);
               else
                   c.moveTo(right, top + offset);
               if (drawRight)
                   c.lineTo(right, bottom + offset);
               else
                   c.moveTo(right, bottom + offset);
               if (drawBottom)
                   c.lineTo(left, bottom + offset);
               else
                   c.moveTo(left, bottom + offset);
               c.stroke();
           }
       }
       
       function drawSeriesBars(series) {
           function plotBars(datapoints, barLeft, barRight, offset, fillStyleCallback, axisx, axisy) {
               var points = datapoints.points, ps = datapoints.pointsize;
               
               for (var i = 0; i < points.length; i += ps) {
                   if (points[i] == null)
                       continue;
                   drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, offset, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
               }
           }

           ctx.save();
           ctx.translate(plotOffset.left, plotOffset.top);

           // FIXME: figure out a way to add shadows (for instance along the right edge)
           ctx.lineWidth = series.bars.lineWidth;
           ctx.strokeStyle = series.color;
           var barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;
           var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
           plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, 0, fillStyleCallback, series.xaxis, series.yaxis);
           ctx.restore();
       }

       function getFillStyle(filloptions, seriesColor, bottom, top) {
           var fill = filloptions.fill;
           if (!fill)
               return null;

           if (filloptions.fillColor)
               return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);
           
           var c = $.color.parse(seriesColor);
           c.a = typeof fill == "number" ? fill : 0.4;
           c.normalize();
           return c.toString();
       }
       
       function insertLegend() {
           placeholder.find(".legend").remove();

           if (!options.legend.show)
               return;
           
           var fragments = [], rowStarted = false,
               lf = options.legend.labelFormatter, s, label;
           for (var i = 0; i < series.length; ++i) {
               s = series[i];
               label = s.label;
               if (!label)
                   continue;
               
               if (i % options.legend.noColumns == 0) {
                   if (rowStarted)
                       fragments.push('</tr>');
                   fragments.push('<tr>');
                   rowStarted = true;
               }

               if (lf)
                   label = lf(label, s);
               
               fragments.push(
                   '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + s.color + ';overflow:hidden"></div></div></td>' +
                   '<td class="legendLabel">' + label + '</td>');
           }
           if (rowStarted)
               fragments.push('</tr>');
           
           if (fragments.length == 0)
               return;

           var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
           if (options.legend.container != null)
               $(options.legend.container).html(table);
           else {
               var pos = "",
                   p = options.legend.position,
                   m = options.legend.margin;
               if (m[0] == null)
                   m = [m, m];
               if (p.charAt(0) == "n")
                   pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
               else if (p.charAt(0) == "s")
                   pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
               if (p.charAt(1) == "e")
                   pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
               else if (p.charAt(1) == "w")
                   pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
               var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
               if (options.legend.backgroundOpacity != 0.0) {
                   // put in the transparent background
                   // separately to avoid blended labels and
                   // label boxes
                   var c = options.legend.backgroundColor;
                   if (c == null) {
                       c = options.grid.backgroundColor;
                       if (c && typeof c == "string")
                           c = $.color.parse(c);
                       else
                           c = $.color.extract(legend, 'background-color');
                       c.a = 1;
                       c = c.toString();
                   }
                   var div = legend.children();
                   $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
               }
           }
       }


       // interactive features
       
       var highlights = [],
           redrawTimeout = null;
       
       // returns the data item the mouse is over, or null if none is found
       function findNearbyItem(mouseX, mouseY, seriesFilter) {
           var maxDistance = options.grid.mouseActiveRadius,
               smallestDistance = maxDistance * maxDistance + 1,
               item = null, foundPoint = false, i, j;

           for (i = series.length - 1; i >= 0; --i) {
               if (!seriesFilter(series[i]))
                   continue;
               
               var s = series[i],
                   axisx = s.xaxis,
                   axisy = s.yaxis,
                   points = s.datapoints.points,
                   ps = s.datapoints.pointsize,
                   mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                   my = axisy.c2p(mouseY),
                   maxx = maxDistance / axisx.scale,
                   maxy = maxDistance / axisy.scale;

               // with inverse transforms, we can't use the maxx/maxy
               // optimization, sadly
               if (axisx.options.inverseTransform)
                   maxx = Number.MAX_VALUE;
               if (axisy.options.inverseTransform)
                   maxy = Number.MAX_VALUE;
               
               if (s.lines.show || s.points.show) {
                   for (j = 0; j < points.length; j += ps) {
                       var x = points[j], y = points[j + 1];
                       if (x == null)
                           continue;
                       
                       // For points and lines, the cursor must be within a
                       // certain distance to the data point
                       if (x - mx > maxx || x - mx < -maxx ||
                           y - my > maxy || y - my < -maxy)
                           continue;

                       // We have to calculate distances in pixels, not in
                       // data units, because the scales of the axes may be different
                       var dx = Math.abs(axisx.p2c(x) - mouseX),
                           dy = Math.abs(axisy.p2c(y) - mouseY),
                           dist = dx * dx + dy * dy; // we save the sqrt

                       // use <= to ensure last point takes precedence
                       // (last generally means on top of)
                       if (dist < smallestDistance) {
                           smallestDistance = dist;
                           item = [i, j / ps];
                       }
                   }
               }
                   
               if (s.bars.show && !item) { // no other point can be nearby
                   var barLeft = s.bars.align == "left" ? 0 : -s.bars.barWidth/2,
                       barRight = barLeft + s.bars.barWidth;
                   
                   for (j = 0; j < points.length; j += ps) {
                       var x = points[j], y = points[j + 1], b = points[j + 2];
                       if (x == null)
                           continue;
 
                       // for a bar graph, the cursor must be inside the bar
                       if (series[i].bars.horizontal ? 
                           (mx <= Math.max(b, x) && mx >= Math.min(b, x) && 
                            my >= y + barLeft && my <= y + barRight) :
                           (mx >= x + barLeft && mx <= x + barRight &&
                            my >= Math.min(b, y) && my <= Math.max(b, y)))
                               item = [i, j / ps];
                   }
               }
           }

           if (item) {
               i = item[0];
               j = item[1];
               ps = series[i].datapoints.pointsize;
               
               return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                        dataIndex: j,
                        series: series[i],
                        seriesIndex: i };
           }
           
           return null;
       }

       function onMouseMove(e) {
           if (options.grid.hoverable)
               triggerClickHoverEvent("plothover", e,
                                      function (s) { return s["hoverable"] != false; });
       }

       function onMouseLeave(e) {
           if (options.grid.hoverable)
               triggerClickHoverEvent("plothover", e,
                                      function (s) { return false; });
       }

       function onClick(e) {
           triggerClickHoverEvent("plotclick", e,
                                  function (s) { return s["clickable"] != false; });
       }

       // trigger click or hover event (they send the same parameters
       // so we share their code)
       function triggerClickHoverEvent(eventname, event, seriesFilter) {
           var offset = eventHolder.offset(),
               canvasX = event.pageX - offset.left - plotOffset.left,
               canvasY = event.pageY - offset.top - plotOffset.top,
           pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

           pos.pageX = event.pageX;
           pos.pageY = event.pageY;

           var item = findNearbyItem(canvasX, canvasY, seriesFilter);

           if (item) {
               // fill in mouse pos for any listeners out there
               item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left);
               item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top);
           }

           if (options.grid.autoHighlight) {
               // clear auto-highlights
               for (var i = 0; i < highlights.length; ++i) {
                   var h = highlights[i];
                   if (h.auto == eventname &&
                       !(item && h.series == item.series &&
                         h.point[0] == item.datapoint[0] &&
                         h.point[1] == item.datapoint[1]))
                       unhighlight(h.series, h.point);
               }
               
               if (item)
                   highlight(item.series, item.datapoint, eventname);
           }
           
           placeholder.trigger(eventname, [ pos, item ]);
       }

       function triggerRedrawOverlay() {
           if (!redrawTimeout)
               redrawTimeout = setTimeout(drawOverlay, 30);
       }

       function drawOverlay() {
           redrawTimeout = null;

           // draw highlights
           octx.save();
           octx.clearRect(0, 0, canvasWidth, canvasHeight);
           octx.translate(plotOffset.left, plotOffset.top);
           
           var i, hi;
           for (i = 0; i < highlights.length; ++i) {
               hi = highlights[i];

               if (hi.series.bars.show)
                   drawBarHighlight(hi.series, hi.point);
               else
                   drawPointHighlight(hi.series, hi.point);
           }
           octx.restore();
           
           executeHooks(hooks.drawOverlay, [octx]);
       }
       
       function highlight(s, point, auto) {
           if (typeof s == "number")
               s = series[s];

           if (typeof point == "number") {
               var ps = s.datapoints.pointsize;
               point = s.datapoints.points.slice(ps * point, ps * (point + 1));
           }

           var i = indexOfHighlight(s, point);
           if (i == -1) {
               highlights.push({ series: s, point: point, auto: auto });

               triggerRedrawOverlay();
           }
           else if (!auto)
               highlights[i].auto = false;
       }
           
       function unhighlight(s, point) {
           if (s == null && point == null) {
               highlights = [];
               triggerRedrawOverlay();
           }
           
           if (typeof s == "number")
               s = series[s];

           if (typeof point == "number")
               point = s.data[point];

           var i = indexOfHighlight(s, point);
           if (i != -1) {
               highlights.splice(i, 1);

               triggerRedrawOverlay();
           }
       }
       
       function indexOfHighlight(s, p) {
           for (var i = 0; i < highlights.length; ++i) {
               var h = highlights[i];
               if (h.series == s && h.point[0] == p[0]
                   && h.point[1] == p[1])
                   return i;
           }
           return -1;
       }
       
       function drawPointHighlight(series, point) {
           var x = point[0], y = point[1],
               axisx = series.xaxis, axisy = series.yaxis;
           
           if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
               return;
           
           var pointRadius = series.points.radius + series.points.lineWidth / 2;
           octx.lineWidth = pointRadius;
           octx.strokeStyle = $.color.parse(series.color).scale('a', 0.5).toString();
           var radius = 1.5 * pointRadius,
               x = axisx.p2c(x),
               y = axisy.p2c(y);
           
           octx.beginPath();
           if (series.points.symbol == "circle")
               octx.arc(x, y, radius, 0, 2 * Math.PI, false);
           else
               series.points.symbol(octx, x, y, radius, false);
           octx.closePath();
           octx.stroke();
       }

       function drawBarHighlight(series, point) {
           octx.lineWidth = series.bars.lineWidth;
           octx.strokeStyle = $.color.parse(series.color).scale('a', 0.5).toString();
           var fillStyle = $.color.parse(series.color).scale('a', 0.5).toString();
           var barLeft = series.bars.align == "left" ? 0 : -series.bars.barWidth/2;
           drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                   0, function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
       }

       function getColorOrGradient(spec, bottom, top, defaultColor) {
           if (typeof spec == "string")
               return spec;
           else {
               // assume this is a gradient spec; IE currently only
               // supports a simple vertical gradient properly, so that's
               // what we support too
               var gradient = ctx.createLinearGradient(0, top, 0, bottom);
               
               for (var i = 0, l = spec.colors.length; i < l; ++i) {
                   var c = spec.colors[i];
                   if (typeof c != "string") {
                       var co = $.color.parse(defaultColor);
                       if (c.brightness != null)
                           co = co.scale('rgb', c.brightness)
                       if (c.opacity != null)
                           co.a *= c.opacity;
                       c = co.toString();
                   }
                   gradient.addColorStop(i / (l - 1), c);
               }
               
               return gradient;
           }
       }
   }

   $.plot = function(placeholder, data, options) {
       //var t0 = new Date();
       var plot = new Plot($(placeholder), data, options, $.plot.plugins);
       //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
       return plot;
   };

   $.plot.version = "0.7";
   
   $.plot.plugins = [];

   // returns a string with the date d formatted according to fmt
   $.plot.formatDate = function(d, fmt, monthNames) {
       var leftPad = function(n) {
           n = "" + n;
           return n.length == 1 ? "0" + n : n;
       };
       
       var r = [];
       var escape = false, padNext = false;
       var hours = d.getUTCHours();
       var isAM = hours < 12;
       if (monthNames == null)
           monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

       if (fmt.search(/%p|%P/) != -1) {
           if (hours > 12) {
               hours = hours - 12;
           } else if (hours == 0) {
               hours = 12;
           }
       }
       for (var i = 0; i < fmt.length; ++i) {
           var c = fmt.charAt(i);
           
           if (escape) {
               switch (c) {
               case 'h': c = "" + hours; break;
               case 'H': c = leftPad(hours); break;
               case 'M': c = leftPad(d.getUTCMinutes()); break;
               case 'S': c = leftPad(d.getUTCSeconds()); break;
               case 'd': c = "" + d.getUTCDate(); break;
               case 'm': c = "" + (d.getUTCMonth() + 1); break;
               case 'y': c = "" + d.getUTCFullYear(); break;
               case 'b': c = "" + monthNames[d.getUTCMonth()]; break;
               case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
               case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
               case '0': c = ""; padNext = true; break;
               }
               if (c && padNext) {
                   c = leftPad(c);
                   padNext = false;
               }
               r.push(c);
               if (!padNext)
                   escape = false;
           }
           else {
               if (c == "%")
                   escape = true;
               else
                   r.push(c);
           }
       }
       return r.join("");
   };
   
   // round to nearby lower multiple of base
   function floorInBase(n, base) {
       return base * Math.floor(n / base);
   }
   
})(jQuery);

/**
 * jQuery.timers - Timer abstractions for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/10/16
 *
 * @author Blair Mitchelmore
 * @version 1.2
 *
 **/

jQuery.fn.extend({
	everyTime: function(interval, label, fn, times) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, times);
		});
	},
	oneTime: function(interval, label, fn) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, 1);
		});
	},
	stopTime: function(label, fn) {
		return this.each(function() {
			jQuery.timer.remove(this, label, fn);
		});
	}
});

jQuery.extend({
	timer: {
		global: [],
		guid: 1,
		dataKey: "jQuery.timer",
		regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
		powers: {
			// Yeah this is major overkill...
			'ms': 1,
			'cs': 10,
			'ds': 100,
			's': 1000,
			'das': 10000,
			'hs': 100000,
			'ks': 1000000
		},
		timeParse: function(value) {
			if (value == undefined || value == null)
				return null;
			var result = this.regex.exec(jQuery.trim(value.toString()));
			if (result[2]) {
				var num = parseFloat(result[1]);
				var mult = this.powers[result[2]] || 1;
				return num * mult;
			} else {
				return value;
			}
		},
		add: function(element, interval, label, fn, times) {
			var counter = 0;
			
			if (jQuery.isFunction(label)) {
				if (!times) 
					times = fn;
				fn = label;
				label = interval;
			}
			
			interval = jQuery.timer.timeParse(interval);

			if (typeof interval != 'number' || isNaN(interval) || interval < 0)
				return;

			if (typeof times != 'number' || isNaN(times) || times < 0) 
				times = 0;
			
			times = times || 0;
			
			var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
			
			if (!timers[label])
				timers[label] = {};
			
			fn.timerID = fn.timerID || this.guid++;
			
			var handler = function() {
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
			};
			
			handler.timerID = fn.timerID;
			
			if (!timers[label][fn.timerID])
				timers[label][fn.timerID] = window.setInterval(handler,interval);
			
			this.global.push( element );
			
		},
		remove: function(element, label, fn) {
			var timers = jQuery.data(element, this.dataKey), ret;
			
			if ( timers ) {
				
				if (!label) {
					for ( label in timers )
						this.remove(element, label, fn);
				} else if ( timers[label] ) {
					if ( fn ) {
						if ( fn.timerID ) {
							window.clearInterval(timers[label][fn.timerID]);
							delete timers[label][fn.timerID];
						}
					} else {
						for ( var fn in timers[label] ) {
							window.clearInterval(timers[label][fn]);
							delete timers[label][fn];
						}
					}
					
					for ( ret in timers[label] ) break;
					if ( !ret ) {
						ret = null;
						delete timers[label];
					}
				}
				
				for ( ret in timers ) break;
				if ( !ret ) 
					jQuery.removeData(element, this.dataKey);
			}
		}
	}
});

jQuery(window).bind("unload", function() {
	jQuery.each(jQuery.timer.global, function(index, item) {
		jQuery.timer.remove(item);
	});
});




/*
 * File:        jquery.dataTables.min.js
 * Version:     1.7.3
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Info:        www.datatables.net
 * 
 * Copyright 2008-2010 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, as supplied with this software.
 * 
 * This source file is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */
(function(j,Y,p){j.fn.dataTableSettings=[];var E=j.fn.dataTableSettings;j.fn.dataTableExt={};var n=j.fn.dataTableExt;n.sVersion="1.7.3";n.sErrMode="alert";n.iApiIndex=0;n.oApi={};n.afnFiltering=[];n.aoFeatures=[];n.ofnSearch={};n.afnSortData=[];n.oStdClasses={sPagePrevEnabled:"paginate_enabled_previous",sPagePrevDisabled:"paginate_disabled_previous",sPageNextEnabled:"paginate_enabled_next",sPageNextDisabled:"paginate_disabled_next",sPageJUINext:"",sPageJUIPrev:"",sPageButton:"paginate_button",sPageButtonActive:"paginate_active",
sPageButtonStaticDisabled:"paginate_button",sPageFirst:"first",sPagePrevious:"previous",sPageNext:"next",sPageLast:"last",sStripOdd:"odd",sStripEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",
sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sFooterTH:""};n.oJUIClasses={sPagePrevEnabled:"fg-button ui-button ui-state-default ui-corner-left",sPagePrevDisabled:"fg-button ui-button ui-state-default ui-corner-left ui-state-disabled",
sPageNextEnabled:"fg-button ui-button ui-state-default ui-corner-right",sPageNextDisabled:"fg-button ui-button ui-state-default ui-corner-right ui-state-disabled",sPageJUINext:"ui-icon ui-icon-circle-arrow-e",sPageJUIPrev:"ui-icon ui-icon-circle-arrow-w",sPageButton:"fg-button ui-button ui-state-default",sPageButtonActive:"fg-button ui-button ui-state-default ui-state-disabled",sPageButtonStaticDisabled:"fg-button ui-button ui-state-default ui-state-disabled",sPageFirst:"first ui-corner-tl ui-corner-bl",
sPagePrevious:"previous",sPageNext:"next",sPageLast:"last ui-corner-tr ui-corner-br",sStripOdd:"odd",sStripEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"ui-state-default",sSortDesc:"ui-state-default",sSortable:"ui-state-default",sSortableAsc:"ui-state-default",
sSortableDesc:"ui-state-default",sSortableNone:"ui-state-default",sSortColumn:"sorting_",sSortJUIAsc:"css_right ui-icon ui-icon-triangle-1-n",sSortJUIDesc:"css_right ui-icon ui-icon-triangle-1-s",sSortJUI:"css_right ui-icon ui-icon-carat-2-n-s",sSortJUIAscAllowed:"css_right ui-icon ui-icon-carat-1-n",sSortJUIDescAllowed:"css_right ui-icon ui-icon-carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead ui-state-default",sScrollHeadInner:"dataTables_scrollHeadInner",
sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot ui-state-default",sScrollFootInner:"dataTables_scrollFootInner",sFooterTH:"ui-state-default"};n.oPagination={two_button:{fnInit:function(g,l,r){var s,v,y;if(g.bJUI){s=p.createElement("a");v=p.createElement("a");y=p.createElement("span");y.className=g.oClasses.sPageJUINext;v.appendChild(y);y=p.createElement("span");y.className=g.oClasses.sPageJUIPrev;s.appendChild(y)}else{s=p.createElement("div");v=p.createElement("div")}s.className=
g.oClasses.sPagePrevDisabled;v.className=g.oClasses.sPageNextDisabled;s.title=g.oLanguage.oPaginate.sPrevious;v.title=g.oLanguage.oPaginate.sNext;l.appendChild(s);l.appendChild(v);j(s).click(function(){g.oApi._fnPageChange(g,"previous")&&r(g)});j(v).click(function(){g.oApi._fnPageChange(g,"next")&&r(g)});j(s).bind("selectstart",function(){return false});j(v).bind("selectstart",function(){return false});if(g.sTableId!==""&&typeof g.aanFeatures.p=="undefined"){l.setAttribute("id",g.sTableId+"_paginate");
s.setAttribute("id",g.sTableId+"_previous");v.setAttribute("id",g.sTableId+"_next")}},fnUpdate:function(g){if(g.aanFeatures.p)for(var l=g.aanFeatures.p,r=0,s=l.length;r<s;r++)if(l[r].childNodes.length!==0){l[r].childNodes[0].className=g._iDisplayStart===0?g.oClasses.sPagePrevDisabled:g.oClasses.sPagePrevEnabled;l[r].childNodes[1].className=g.fnDisplayEnd()==g.fnRecordsDisplay()?g.oClasses.sPageNextDisabled:g.oClasses.sPageNextEnabled}}},iFullNumbersShowPages:5,full_numbers:{fnInit:function(g,l,r){var s=
p.createElement("span"),v=p.createElement("span"),y=p.createElement("span"),D=p.createElement("span"),w=p.createElement("span");s.innerHTML=g.oLanguage.oPaginate.sFirst;v.innerHTML=g.oLanguage.oPaginate.sPrevious;D.innerHTML=g.oLanguage.oPaginate.sNext;w.innerHTML=g.oLanguage.oPaginate.sLast;var x=g.oClasses;s.className=x.sPageButton+" "+x.sPageFirst;v.className=x.sPageButton+" "+x.sPagePrevious;D.className=x.sPageButton+" "+x.sPageNext;w.className=x.sPageButton+" "+x.sPageLast;l.appendChild(s);l.appendChild(v);
l.appendChild(y);l.appendChild(D);l.appendChild(w);j(s).click(function(){g.oApi._fnPageChange(g,"first")&&r(g)});j(v).click(function(){g.oApi._fnPageChange(g,"previous")&&r(g)});j(D).click(function(){g.oApi._fnPageChange(g,"next")&&r(g)});j(w).click(function(){g.oApi._fnPageChange(g,"last")&&r(g)});j("span",l).bind("mousedown",function(){return false}).bind("selectstart",function(){return false});if(g.sTableId!==""&&typeof g.aanFeatures.p=="undefined"){l.setAttribute("id",g.sTableId+"_paginate");
s.setAttribute("id",g.sTableId+"_first");v.setAttribute("id",g.sTableId+"_previous");D.setAttribute("id",g.sTableId+"_next");w.setAttribute("id",g.sTableId+"_last")}},fnUpdate:function(g,l){if(g.aanFeatures.p){var r=n.oPagination.iFullNumbersShowPages,s=Math.floor(r/2),v=Math.ceil(g.fnRecordsDisplay()/g._iDisplayLength),y=Math.ceil(g._iDisplayStart/g._iDisplayLength)+1,D="",w,x=g.oClasses;if(v<r){s=1;w=v}else if(y<=s){s=1;w=r}else if(y>=v-s){s=v-r+1;w=v}else{s=y-Math.ceil(r/2)+1;w=s+r-1}for(r=s;r<=
w;r++)D+=y!=r?'<span class="'+x.sPageButton+'">'+r+"</span>":'<span class="'+x.sPageButtonActive+'">'+r+"</span>";w=g.aanFeatures.p;var z,C=function(){g._iDisplayStart=(this.innerHTML*1-1)*g._iDisplayLength;l(g);return false},L=function(){return false};r=0;for(s=w.length;r<s;r++)if(w[r].childNodes.length!==0){z=j("span:eq(2)",w[r]);z.html(D);j("span",z).click(C).bind("mousedown",L).bind("selectstart",L);z=w[r].getElementsByTagName("span");z=[z[0],z[1],z[z.length-2],z[z.length-1]];j(z).removeClass(x.sPageButton+
" "+x.sPageButtonActive+" "+x.sPageButtonStaticDisabled);if(y==1){z[0].className+=" "+x.sPageButtonStaticDisabled;z[1].className+=" "+x.sPageButtonStaticDisabled}else{z[0].className+=" "+x.sPageButton;z[1].className+=" "+x.sPageButton}if(v===0||y==v||g._iDisplayLength==-1){z[2].className+=" "+x.sPageButtonStaticDisabled;z[3].className+=" "+x.sPageButtonStaticDisabled}else{z[2].className+=" "+x.sPageButton;z[3].className+=" "+x.sPageButton}}}}}};n.oSort={"string-asc":function(g,l){g=g.toLowerCase();
l=l.toLowerCase();return g<l?-1:g>l?1:0},"string-desc":function(g,l){g=g.toLowerCase();l=l.toLowerCase();return g<l?1:g>l?-1:0},"html-asc":function(g,l){g=g.replace(/<.*?>/g,"").toLowerCase();l=l.replace(/<.*?>/g,"").toLowerCase();return g<l?-1:g>l?1:0},"html-desc":function(g,l){g=g.replace(/<.*?>/g,"").toLowerCase();l=l.replace(/<.*?>/g,"").toLowerCase();return g<l?1:g>l?-1:0},"date-asc":function(g,l){g=Date.parse(g);l=Date.parse(l);if(isNaN(g)||g==="")g=Date.parse("01/01/1970 00:00:00");if(isNaN(l)||
l==="")l=Date.parse("01/01/1970 00:00:00");return g-l},"date-desc":function(g,l){g=Date.parse(g);l=Date.parse(l);if(isNaN(g)||g==="")g=Date.parse("01/01/1970 00:00:00");if(isNaN(l)||l==="")l=Date.parse("01/01/1970 00:00:00");return l-g},"numeric-asc":function(g,l){return(g=="-"||g===""?0:g*1)-(l=="-"||l===""?0:l*1)},"numeric-desc":function(g,l){return(l=="-"||l===""?0:l*1)-(g=="-"||g===""?0:g*1)}};n.aTypes=[function(g){if(g.length===0)return"numeric";var l,r=false;l=g.charAt(0);if("0123456789-".indexOf(l)==
-1)return null;for(var s=1;s<g.length;s++){l=g.charAt(s);if("0123456789.".indexOf(l)==-1)return null;if(l=="."){if(r)return null;r=true}}return"numeric"},function(g){var l=Date.parse(g);if(l!==null&&!isNaN(l)||g.length===0)return"date";return null},function(g){if(g.indexOf("<")!=-1&&g.indexOf(">")!=-1)return"html";return null}];n.fnVersionCheck=function(g){var l=function(w,x){for(;w.length<x;)w+="0";return w},r=n.sVersion.split(".");g=g.split(".");for(var s="",v="",y=0,D=g.length;y<D;y++){s+=l(r[y],
3);v+=l(g[y],3)}return parseInt(s,10)>=parseInt(v,10)};n._oExternConfig={iNextUnique:0};j.fn.dataTable=function(g){function l(){this.fnRecordsTotal=function(){return this.oFeatures.bServerSide?this._iRecordsTotal:this.aiDisplayMaster.length};this.fnRecordsDisplay=function(){return this.oFeatures.bServerSide?this._iRecordsDisplay:this.aiDisplay.length};this.fnDisplayEnd=function(){return this.oFeatures.bServerSide?this.oFeatures.bPaginate===false||this._iDisplayLength==-1?this._iDisplayStart+this.aiDisplay.length:
Math.min(this._iDisplayStart+this._iDisplayLength,this._iRecordsDisplay):this._iDisplayEnd};this.sInstance=this.oInstance=null;this.oFeatures={bPaginate:true,bLengthChange:true,bFilter:true,bSort:true,bInfo:true,bAutoWidth:true,bProcessing:false,bSortClasses:true,bStateSave:false,bServerSide:false};this.oScroll={sX:"",sXInner:"",sY:"",bCollapse:false,bInfinite:false,iLoadGap:100,iBarWidth:0};this.aanFeatures=[];this.oLanguage={sProcessing:"Processing...",sLengthMenu:"Show _MENU_ entries",sZeroRecords:"No matching records found",
sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sSearch:"Search:",sUrl:"",oPaginate:{sFirst:"First",sPrevious:"Previous",sNext:"Next",sLast:"Last"},fnInfoCallback:null};this.aoData=[];this.aiDisplay=[];this.aiDisplayMaster=[];this.aoColumns=[];this.iNextId=0;this.asDataSearch=[];this.oPreviousSearch={sSearch:"",bRegex:false,bSmart:true};this.aoPreSearchCols=
[];this.aaSorting=[[0,"asc",0]];this.aaSortingFixed=null;this.asStripClasses=[];this.asDestoryStrips=[];this.sDestroyWidth=0;this.fnFooterCallback=this.fnHeaderCallback=this.fnRowCallback=null;this.aoDrawCallback=[];this.fnInitComplete=null;this.sTableId="";this.nTableWrapper=this.nTBody=this.nTFoot=this.nTHead=this.nTable=null;this.iDefaultSortIndex=0;this.bInitialised=false;this.aoOpenRows=[];this.sDom="lfrtip";this.sPaginationType="two_button";this.iCookieDuration=7200;this.sCookiePrefix="SpryMedia_DataTables_";
this.sAjaxSource=this.fnCookieCallback=null;this.bAjaxDataGet=true;this.fnServerData=function(a,b,c){j.ajax({url:a,data:b,success:c,dataType:"json",cache:false,error:function(){alert("DataTables warning: JSON data from server failed to load or be parsed. This is most likely to be caused by a JSON formatting error.")}})};this.fnFormatNumber=function(a){if(a<1E3)return a;else{var b=a+"";a=b.split("");var c="";b=b.length;for(var d=0;d<b;d++){if(d%3===0&&d!==0)c=","+c;c=a[b-d-1]+c}}return c};this.aLengthMenu=
[10,25,50,100];this.bDrawing=this.iDraw=0;this.iDrawError=-1;this._iDisplayLength=10;this._iDisplayStart=0;this._iDisplayEnd=10;this._iRecordsDisplay=this._iRecordsTotal=0;this.bJUI=false;this.oClasses=n.oStdClasses;this.bSorted=this.bFiltered=false;this.oInit=null}function r(a){return function(){var b=[B(this[n.iApiIndex])].concat(Array.prototype.slice.call(arguments));return n.oApi[a].apply(this,b)}}function s(a){var b,c;if(a.bInitialised===false)setTimeout(function(){s(a)},200);else{oa(a);z(a);
a.oFeatures.bAutoWidth&&Z(a);b=0;for(c=a.aoColumns.length;b<c;b++)if(a.aoColumns[b].sWidth!==null)a.aoColumns[b].nTh.style.width=u(a.aoColumns[b].sWidth);if(a.oFeatures.bSort)O(a);else{a.aiDisplay=a.aiDisplayMaster.slice();F(a);C(a)}if(a.sAjaxSource!==null&&!a.oFeatures.bServerSide){K(a,true);a.fnServerData.call(a.oInstance,a.sAjaxSource,[],function(d){for(b=0;b<d.aaData.length;b++)w(a,d.aaData[b]);a.iInitDisplayStart=a._iDisplayStart;if(a.oFeatures.bSort)O(a);else{a.aiDisplay=a.aiDisplayMaster.slice();
F(a);C(a)}K(a,false);typeof a.fnInitComplete=="function"&&a.fnInitComplete.call(a.oInstance,a,d)})}else a.oFeatures.bServerSide||K(a,false)}}function v(a,b,c){o(a.oLanguage,b,"sProcessing");o(a.oLanguage,b,"sLengthMenu");o(a.oLanguage,b,"sEmptyTable");o(a.oLanguage,b,"sZeroRecords");o(a.oLanguage,b,"sInfo");o(a.oLanguage,b,"sInfoEmpty");o(a.oLanguage,b,"sInfoFiltered");o(a.oLanguage,b,"sInfoPostFix");o(a.oLanguage,b,"sSearch");if(typeof b.oPaginate!="undefined"){o(a.oLanguage.oPaginate,b.oPaginate,
"sFirst");o(a.oLanguage.oPaginate,b.oPaginate,"sPrevious");o(a.oLanguage.oPaginate,b.oPaginate,"sNext");o(a.oLanguage.oPaginate,b.oPaginate,"sLast")}typeof b.sEmptyTable=="undefined"&&typeof b.sZeroRecords!="undefined"&&o(a.oLanguage,b,"sZeroRecords","sEmptyTable");c&&s(a)}function y(a,b){a.aoColumns[a.aoColumns.length++]={sType:null,_bAutoType:true,bVisible:true,bSearchable:true,bSortable:true,asSorting:["asc","desc"],sSortingClass:a.oClasses.sSortable,sSortingClassJUI:a.oClasses.sSortJUI,sTitle:b?
b.innerHTML:"",sName:"",sWidth:null,sWidthOrig:null,sClass:null,fnRender:null,bUseRendered:true,iDataSort:a.aoColumns.length-1,sSortDataType:"std",nTh:b?b:p.createElement("th"),nTf:null};b=a.aoColumns.length-1;if(typeof a.aoPreSearchCols[b]=="undefined"||a.aoPreSearchCols[b]===null)a.aoPreSearchCols[b]={sSearch:"",bRegex:false,bSmart:true};else{if(typeof a.aoPreSearchCols[b].bRegex=="undefined")a.aoPreSearchCols[b].bRegex=true;if(typeof a.aoPreSearchCols[b].bSmart=="undefined")a.aoPreSearchCols[b].bSmart=
true}D(a,b,null)}function D(a,b,c){b=a.aoColumns[b];if(typeof c!="undefined"&&c!==null){if(typeof c.sType!="undefined"){b.sType=c.sType;b._bAutoType=false}o(b,c,"bVisible");o(b,c,"bSearchable");o(b,c,"bSortable");o(b,c,"sTitle");o(b,c,"sName");o(b,c,"sWidth");o(b,c,"sWidth","sWidthOrig");o(b,c,"sClass");o(b,c,"fnRender");o(b,c,"bUseRendered");o(b,c,"iDataSort");o(b,c,"asSorting");o(b,c,"sSortDataType")}if(!a.oFeatures.bSort)b.bSortable=false;if(!b.bSortable||j.inArray("asc",b.asSorting)==-1&&j.inArray("desc",
b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortableNone;b.sSortingClassJUI=""}else if(j.inArray("asc",b.asSorting)!=-1&&j.inArray("desc",b.asSorting)==-1){b.sSortingClass=a.oClasses.sSortableAsc;b.sSortingClassJUI=a.oClasses.sSortJUIAscAllowed}else if(j.inArray("asc",b.asSorting)==-1&&j.inArray("desc",b.asSorting)!=-1){b.sSortingClass=a.oClasses.sSortableDesc;b.sSortingClassJUI=a.oClasses.sSortJUIDescAllowed}}function w(a,b){if(b.length!=a.aoColumns.length&&a.iDrawError!=a.iDraw){I(a,0,"Added data (size "+
b.length+") does not match known number of columns ("+a.aoColumns.length+")");a.iDrawError=a.iDraw;return-1}b=b.slice();var c=a.aoData.length;a.aoData.push({nTr:p.createElement("tr"),_iId:a.iNextId++,_aData:b,_anHidden:[],_sRowStripe:""});for(var d,f,e=0;e<b.length;e++){d=p.createElement("td");if(b[e]===null)b[e]="";if(typeof a.aoColumns[e].fnRender=="function"){f=a.aoColumns[e].fnRender({iDataRow:c,iDataColumn:e,aData:b,oSettings:a});d.innerHTML=f;if(a.aoColumns[e].bUseRendered)a.aoData[c]._aData[e]=
f}else d.innerHTML=b[e];if(typeof b[e]!="string")b[e]+="";b[e]=j.trim(b[e]);if(a.aoColumns[e].sClass!==null)d.className=a.aoColumns[e].sClass;if(a.aoColumns[e]._bAutoType&&a.aoColumns[e].sType!="string"){f=$(a.aoData[c]._aData[e]);if(a.aoColumns[e].sType===null)a.aoColumns[e].sType=f;else if(a.aoColumns[e].sType!=f)a.aoColumns[e].sType="string"}if(a.aoColumns[e].bVisible)a.aoData[c].nTr.appendChild(d);else a.aoData[c]._anHidden[e]=d}a.aiDisplayMaster.push(c);return c}function x(a){var b,c,d,f,e,i,
h,k;if(a.sAjaxSource===null){h=a.nTBody.childNodes;b=0;for(c=h.length;b<c;b++)if(h[b].nodeName.toUpperCase()=="TR"){i=a.aoData.length;a.aoData.push({nTr:h[b],_iId:a.iNextId++,_aData:[],_anHidden:[],_sRowStripe:""});a.aiDisplayMaster.push(i);k=a.aoData[i]._aData;i=h[b].childNodes;d=e=0;for(f=i.length;d<f;d++)if(i[d].nodeName.toUpperCase()=="TD"){k[e]=j.trim(i[d].innerHTML);e++}}}h=S(a);i=[];b=0;for(c=h.length;b<c;b++){d=0;for(f=h[b].childNodes.length;d<f;d++){e=h[b].childNodes[d];e.nodeName.toUpperCase()==
"TD"&&i.push(e)}}i.length!=h.length*a.aoColumns.length&&I(a,1,"Unexpected number of TD elements. Expected "+h.length*a.aoColumns.length+" and got "+i.length+". DataTables does not support rowspan / colspan in the table body, and there must be one cell for each row/column combination.");h=0;for(d=a.aoColumns.length;h<d;h++){if(a.aoColumns[h].sTitle===null)a.aoColumns[h].sTitle=a.aoColumns[h].nTh.innerHTML;f=a.aoColumns[h]._bAutoType;e=typeof a.aoColumns[h].fnRender=="function";k=a.aoColumns[h].sClass!==
null;var m=a.aoColumns[h].bVisible,q,t;if(f||e||k||!m){b=0;for(c=a.aoData.length;b<c;b++){q=i[b*d+h];if(f)if(a.aoColumns[h].sType!="string"){t=$(a.aoData[b]._aData[h]);if(a.aoColumns[h].sType===null)a.aoColumns[h].sType=t;else if(a.aoColumns[h].sType!=t)a.aoColumns[h].sType="string"}if(e){t=a.aoColumns[h].fnRender({iDataRow:b,iDataColumn:h,aData:a.aoData[b]._aData,oSettings:a});q.innerHTML=t;if(a.aoColumns[h].bUseRendered)a.aoData[b]._aData[h]=t}if(k)q.className+=" "+a.aoColumns[h].sClass;if(!m){a.aoData[b]._anHidden[h]=
q;q.parentNode.removeChild(q)}}}}}function z(a){var b,c,d,f=0;if(a.nTHead.getElementsByTagName("th").length!==0){b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;if(a.aoColumns[b].bVisible){if(a.aoColumns[b].sTitle!=c.innerHTML)c.innerHTML=a.aoColumns[b].sTitle}else{c.parentNode.removeChild(c);f++}}}else{f=p.createElement("tr");b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;c.innerHTML=a.aoColumns[b].sTitle;if(a.aoColumns[b].bVisible){if(a.aoColumns[b].sClass!==null)c.className=
a.aoColumns[b].sClass;f.appendChild(c)}}j(a.nTHead).html("")[0].appendChild(f)}if(a.bJUI){b=0;for(d=a.aoColumns.length;b<d;b++){c=a.aoColumns[b].nTh;f=p.createElement("div");f.className=a.oClasses.sSortJUIWrapper;j(c).contents().appendTo(f);f.appendChild(p.createElement("span"));c.appendChild(f)}}d=function(){this.onselectstart=function(){return false};return false};if(a.oFeatures.bSort)for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable!==false){aa(a,a.aoColumns[b].nTh,b);j(a.aoColumns[b].nTh).mousedown(d)}else j(a.aoColumns[b].nTh).addClass(a.oClasses.sSortableNone);
if(a.nTFoot!==null){f=0;c=a.nTFoot.getElementsByTagName("th");b=0;for(d=c.length;b<d;b++)if(typeof a.aoColumns[b]!="undefined"){a.aoColumns[b].nTf=c[b-f];if(a.oClasses.sFooterTH!=="")a.aoColumns[b].nTf.className+=" "+a.oClasses.sFooterTH;if(!a.aoColumns[b].bVisible){c[b-f].parentNode.removeChild(c[b-f]);f++}}}}function C(a){var b,c,d=[],f=0,e=false;b=a.asStripClasses.length;c=a.aoOpenRows.length;a.bDrawing=true;if(typeof a.iInitDisplayStart!="undefined"&&a.iInitDisplayStart!=-1){a._iDisplayStart=
a.oFeatures.bServerSide?a.iInitDisplayStart:a.iInitDisplayStart>=a.fnRecordsDisplay()?0:a.iInitDisplayStart;a.iInitDisplayStart=-1;F(a)}if(!(a.oFeatures.bServerSide&&!pa(a))){a.oFeatures.bServerSide||a.iDraw++;if(a.aiDisplay.length!==0){var i=a._iDisplayStart,h=a._iDisplayEnd;if(a.oFeatures.bServerSide){i=0;h=a.aoData.length}for(i=i;i<h;i++){var k=a.aoData[a.aiDisplay[i]],m=k.nTr;if(b!==0){var q=a.asStripClasses[f%b];if(k._sRowStripe!=q){j(m).removeClass(k._sRowStripe).addClass(q);k._sRowStripe=q}}if(typeof a.fnRowCallback==
"function"){m=a.fnRowCallback.call(a.oInstance,m,a.aoData[a.aiDisplay[i]]._aData,f,i);if(!m&&!e){I(a,0,"A node was not returned by fnRowCallback");e=true}}d.push(m);f++;if(c!==0)for(k=0;k<c;k++)m==a.aoOpenRows[k].nParent&&d.push(a.aoOpenRows[k].nTr)}}else{d[0]=p.createElement("tr");if(typeof a.asStripClasses[0]!="undefined")d[0].className=a.asStripClasses[0];e=p.createElement("td");e.setAttribute("valign","top");e.colSpan=T(a);e.className=a.oClasses.sRowEmpty;e.innerHTML=typeof a.oLanguage.sEmptyTable!=
"undefined"&&a.fnRecordsTotal()===0?a.oLanguage.sEmptyTable:a.oLanguage.sZeroRecords.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()));d[f].appendChild(e)}typeof a.fnHeaderCallback=="function"&&a.fnHeaderCallback.call(a.oInstance,j(">tr",a.nTHead)[0],U(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay);typeof a.fnFooterCallback=="function"&&a.fnFooterCallback.call(a.oInstance,j(">tr",a.nTFoot)[0],U(a),a._iDisplayStart,a.fnDisplayEnd(),a.aiDisplay);f=p.createDocumentFragment();b=p.createDocumentFragment();
if(a.nTBody){e=a.nTBody.parentNode;b.appendChild(a.nTBody);if(!a.oScroll.bInfinite||!a._bInitComplete||a.bSorted||a.bFiltered){c=a.nTBody.childNodes;for(b=c.length-1;b>=0;b--)c[b].parentNode.removeChild(c[b])}b=0;for(c=d.length;b<c;b++)f.appendChild(d[b]);a.nTBody.appendChild(f);e!==null&&e.appendChild(a.nTBody)}b=0;for(c=a.aoDrawCallback.length;b<c;b++)a.aoDrawCallback[b].fn.call(a.oInstance,a);a.bSorted=false;a.bFiltered=false;a.bDrawing=false;if(typeof a._bInitComplete=="undefined"){a._bInitComplete=
true;if(typeof a.fnInitComplete=="function"&&(a.oFeatures.bServerSide||a.sAjaxSource===null))a.fnInitComplete.call(a.oInstance,a)}}}function L(a){if(a.oFeatures.bSort)O(a,a.oPreviousSearch);else if(a.oFeatures.bFilter)P(a,a.oPreviousSearch);else{F(a);C(a)}}function pa(a){if(a.bAjaxDataGet){K(a,true);var b=a.aoColumns.length,c=[],d;a.iDraw++;c.push({name:"sEcho",value:a.iDraw});c.push({name:"iColumns",value:b});c.push({name:"sColumns",value:ba(a)});c.push({name:"iDisplayStart",value:a._iDisplayStart});
c.push({name:"iDisplayLength",value:a.oFeatures.bPaginate!==false?a._iDisplayLength:-1});if(a.oFeatures.bFilter!==false){c.push({name:"sSearch",value:a.oPreviousSearch.sSearch});c.push({name:"bRegex",value:a.oPreviousSearch.bRegex});for(d=0;d<b;d++){c.push({name:"sSearch_"+d,value:a.aoPreSearchCols[d].sSearch});c.push({name:"bRegex_"+d,value:a.aoPreSearchCols[d].bRegex});c.push({name:"bSearchable_"+d,value:a.aoColumns[d].bSearchable})}}if(a.oFeatures.bSort!==false){var f=a.aaSortingFixed!==null?a.aaSortingFixed.length:
0,e=a.aaSorting.length;c.push({name:"iSortingCols",value:f+e});for(d=0;d<f;d++){c.push({name:"iSortCol_"+d,value:a.aaSortingFixed[d][0]});c.push({name:"sSortDir_"+d,value:a.aaSortingFixed[d][1]})}for(d=0;d<e;d++){c.push({name:"iSortCol_"+(d+f),value:a.aaSorting[d][0]});c.push({name:"sSortDir_"+(d+f),value:a.aaSorting[d][1]})}for(d=0;d<b;d++)c.push({name:"bSortable_"+d,value:a.aoColumns[d].bSortable})}a.fnServerData.call(a.oInstance,a.sAjaxSource,c,function(i){qa(a,i)});return false}else return true}
function qa(a,b){if(typeof b.sEcho!="undefined")if(b.sEcho*1<a.iDraw)return;else a.iDraw=b.sEcho*1;if(!a.oScroll.bInfinite||a.oScroll.bInfinite&&(a.bSorted||a.bFiltered))ca(a);a._iRecordsTotal=b.iTotalRecords;a._iRecordsDisplay=b.iTotalDisplayRecords;var c=ba(a);if(c=typeof b.sColumns!="undefined"&&c!==""&&b.sColumns!=c)var d=ra(a,b.sColumns);for(var f=0,e=b.aaData.length;f<e;f++)if(c){for(var i=[],h=0,k=a.aoColumns.length;h<k;h++)i.push(b.aaData[f][d[h]]);w(a,i)}else w(a,b.aaData[f]);a.aiDisplay=
a.aiDisplayMaster.slice();a.bAjaxDataGet=false;C(a);a.bAjaxDataGet=true;K(a,false)}function oa(a){var b=p.createElement("div");a.nTable.parentNode.insertBefore(b,a.nTable);a.nTableWrapper=p.createElement("div");a.nTableWrapper.className=a.oClasses.sWrapper;a.sTableId!==""&&a.nTableWrapper.setAttribute("id",a.sTableId+"_wrapper");for(var c=a.nTableWrapper,d=a.sDom.split(""),f,e,i,h,k,m,q,t=0;t<d.length;t++){e=0;i=d[t];if(i=="<"){h=p.createElement("div");k=d[t+1];if(k=="'"||k=='"'){m="";for(q=2;d[t+
q]!=k;){m+=d[t+q];q++}if(m=="H")m="fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix";else if(m=="F")m="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix";if(m.indexOf(".")!=-1){k=m.split(".");h.setAttribute("id",k[0].substr(1,k[0].length-1));h.className=k[1]}else if(m.charAt(0)=="#")h.setAttribute("id",m.substr(1,m.length-1));else h.className=m;t+=q}c.appendChild(h);c=h}else if(i==">")c=c.parentNode;else if(i=="l"&&a.oFeatures.bPaginate&&
a.oFeatures.bLengthChange){f=sa(a);e=1}else if(i=="f"&&a.oFeatures.bFilter){f=ta(a);e=1}else if(i=="r"&&a.oFeatures.bProcessing){f=ua(a);e=1}else if(i=="t"){f=va(a);e=1}else if(i=="i"&&a.oFeatures.bInfo){f=wa(a);e=1}else if(i=="p"&&a.oFeatures.bPaginate){f=xa(a);e=1}else if(n.aoFeatures.length!==0){h=n.aoFeatures;q=0;for(k=h.length;q<k;q++)if(i==h[q].cFeature){if(f=h[q].fnInit(a))e=1;break}}if(e==1&&f!==null){if(typeof a.aanFeatures[i]!="object")a.aanFeatures[i]=[];a.aanFeatures[i].push(f);c.appendChild(f)}}b.parentNode.replaceChild(a.nTableWrapper,
b)}function va(a){if(a.oScroll.sX===""&&a.oScroll.sY==="")return a.nTable;var b=p.createElement("div"),c=p.createElement("div"),d=p.createElement("div"),f=p.createElement("div"),e=p.createElement("div"),i=p.createElement("div"),h=a.nTable.cloneNode(false),k=a.nTable.cloneNode(false),m=a.nTable.getElementsByTagName("thead")[0],q=a.nTable.getElementsByTagName("tfoot").length===0?null:a.nTable.getElementsByTagName("tfoot")[0],t=typeof g.bJQueryUI!="undefined"&&g.bJQueryUI?n.oJUIClasses:n.oStdClasses;
c.appendChild(d);e.appendChild(i);f.appendChild(a.nTable);b.appendChild(c);b.appendChild(f);d.appendChild(h);h.appendChild(m);if(q!==null){b.appendChild(e);i.appendChild(k);k.appendChild(q)}b.className=t.sScrollWrapper;c.className=t.sScrollHead;d.className=t.sScrollHeadInner;f.className=t.sScrollBody;e.className=t.sScrollFoot;i.className=t.sScrollFootInner;c.style.overflow="hidden";e.style.overflow="hidden";f.style.overflow="auto";c.style.border="0";e.style.border="0";d.style.width="150%";h.removeAttribute("id");
h.style.marginLeft="0";a.nTable.style.marginLeft="0";if(q!==null){k.removeAttribute("id");k.style.marginLeft="0"}d=j(">caption",a.nTable);i=0;for(k=d.length;i<k;i++)h.appendChild(d[i]);if(a.oScroll.sX!==""){c.style.width=u(a.oScroll.sX);f.style.width=u(a.oScroll.sX);if(q!==null)e.style.width=u(a.oScroll.sX);j(f).scroll(function(){c.scrollLeft=this.scrollLeft;if(q!==null)e.scrollLeft=this.scrollLeft})}if(a.oScroll.sY!=="")f.style.height=u(a.oScroll.sY);a.aoDrawCallback.push({fn:ya,sName:"scrolling"});
a.oScroll.bInfinite&&j(f).scroll(function(){if(!a.bDrawing)if(j(this).scrollTop()+j(this).height()>j(a.nTable).height()-a.oScroll.iLoadGap)if(a.fnDisplayEnd()<a.fnRecordsDisplay()){da(a,"next");F(a);C(a)}});a.nScrollHead=c;a.nScrollFoot=e;return b}function ya(a){var b=a.nScrollHead.getElementsByTagName("div")[0],c=b.getElementsByTagName("table")[0],d=a.nTable.parentNode,f,e,i,h,k,m,q,t,H=[];i=a.nTable.getElementsByTagName("thead");i.length>0&&a.nTable.removeChild(i[0]);if(a.nTFoot!==null){k=a.nTable.getElementsByTagName("tfoot");
k.length>0&&a.nTable.removeChild(k[0])}i=a.nTHead.cloneNode(true);a.nTable.insertBefore(i,a.nTable.childNodes[0]);if(a.nTFoot!==null){k=a.nTFoot.cloneNode(true);a.nTable.insertBefore(k,a.nTable.childNodes[1])}var J=ea(i);f=0;for(e=J.length;f<e;f++){q=fa(a,f);J[f].style.width=a.aoColumns[q].sWidth}a.nTFoot!==null&&M(function(A){A.style.width=""},k.getElementsByTagName("tr"));f=j(a.nTable).outerWidth();if(a.oScroll.sX===""){a.nTable.style.width="100%";if(j.browser.msie&&j.browser.version<=7)a.nTable.style.width=
u(j(a.nTable).outerWidth()-a.oScroll.iBarWidth)}else if(a.oScroll.sXInner!=="")a.nTable.style.width=u(a.oScroll.sXInner);else if(f==j(d).width()&&j(d).height()<j(a.nTable).height()){a.nTable.style.width=u(f-a.oScroll.iBarWidth);if(j(a.nTable).outerWidth()>f-a.oScroll.iBarWidth)a.nTable.style.width=u(f)}else a.nTable.style.width=u(f);f=j(a.nTable).outerWidth();e=a.nTHead.getElementsByTagName("tr");i=i.getElementsByTagName("tr");M(function(A,G){m=A.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth=
"0";m.borderBottomWidth="0";m.height=0;t=j(A).width();G.style.width=u(t);H.push(t)},i,e);j(i).height(0);if(a.nTFoot!==null){h=k.getElementsByTagName("tr");k=a.nTFoot.getElementsByTagName("tr");M(function(A,G){m=A.style;m.paddingTop="0";m.paddingBottom="0";m.borderTopWidth="0";m.borderBottomWidth="0";t=j(A).width();G.style.width=u(t);H.push(t)},h,k);j(h).height(0)}M(function(A){A.innerHTML="";A.style.width=u(H.shift())},i);a.nTFoot!==null&&M(function(A){A.innerHTML="";A.style.width=u(H.shift())},h);
if(j(a.nTable).outerWidth()<f)if(a.oScroll.sX==="")I(a,1,"The table cannot fit into the current element which will cause column misalignment. It is suggested that you enable x-scrolling or increase the width the table has in which to be drawn");else a.oScroll.sXInner!==""&&I(a,1,"The table cannot fit into the current element which will cause column misalignment. It is suggested that you increase the sScrollXInner property to allow it to draw in a larger area, or simply remove that parameter to allow automatic calculation");
if(a.oScroll.sY==="")if(j.browser.msie&&j.browser.version<=7)d.style.height=u(a.nTable.offsetHeight+a.oScroll.iBarWidth);if(a.oScroll.sY!==""&&a.oScroll.bCollapse){d.style.height=u(a.oScroll.sY);h=a.oScroll.sX!==""&&a.nTable.offsetWidth>d.offsetWidth?a.oScroll.iBarWidth:0;if(a.nTable.offsetHeight<d.offsetHeight)d.style.height=u(j(a.nTable).height()+h)}c.style.width=u(j(a.nTable).outerWidth());b.style.width=u(j(a.nTable).outerWidth()+a.oScroll.iBarWidth);if(a.nTFoot!==null){b=a.nScrollFoot.getElementsByTagName("div")[0];
c=b.getElementsByTagName("table")[0];b.style.width=u(a.nTable.offsetWidth+a.oScroll.iBarWidth);c.style.width=u(a.nTable.offsetWidth)}if(a.bSorted||a.bFiltered)d.scrollTop=0}function V(a){if(a.oFeatures.bAutoWidth===false)return false;Z(a);for(var b=0,c=a.aoColumns.length;b<c;b++)a.aoColumns[b].nTh.style.width=a.aoColumns[b].sWidth}function ta(a){var b=p.createElement("div");a.sTableId!==""&&typeof a.aanFeatures.f=="undefined"&&b.setAttribute("id",a.sTableId+"_filter");b.className=a.oClasses.sFilter;
b.innerHTML=a.oLanguage.sSearch+(a.oLanguage.sSearch===""?"":" ")+'<input type="text" />';var c=j("input",b);c.val(a.oPreviousSearch.sSearch.replace('"',"&quot;"));c.keyup(function(){for(var d=a.aanFeatures.f,f=0,e=d.length;f<e;f++)d[f]!=this.parentNode&&j("input",d[f]).val(this.value);P(a,{sSearch:this.value,bRegex:a.oPreviousSearch.bRegex,bSmart:a.oPreviousSearch.bSmart})});c.keypress(function(d){if(d.keyCode==13)return false});return b}function P(a,b,c){za(a,b.sSearch,c,b.bRegex,b.bSmart);for(b=
0;b<a.aoPreSearchCols.length;b++)Aa(a,a.aoPreSearchCols[b].sSearch,b,a.aoPreSearchCols[b].bRegex,a.aoPreSearchCols[b].bSmart);n.afnFiltering.length!==0&&Ba(a);a.bFiltered=true;a._iDisplayStart=0;F(a);C(a);Q(a,0)}function Ba(a){for(var b=n.afnFiltering,c=0,d=b.length;c<d;c++)for(var f=0,e=0,i=a.aiDisplay.length;e<i;e++){var h=a.aiDisplay[e-f];if(!b[c](a,a.aoData[h]._aData,h)){a.aiDisplay.splice(e-f,1);f++}}}function Aa(a,b,c,d,f){if(b!==""){var e=0;b=ga(b,d,f);for(d=a.aiDisplay.length-1;d>=0;d--){f=
ha(a.aoData[a.aiDisplay[d]]._aData[c],a.aoColumns[c].sType);if(!b.test(f)){a.aiDisplay.splice(d,1);e++}}}}function za(a,b,c,d,f){var e=ga(b,d,f);if(typeof c=="undefined"||c===null)c=0;if(n.afnFiltering.length!==0)c=1;if(b.length<=0){a.aiDisplay.splice(0,a.aiDisplay.length);a.aiDisplay=a.aiDisplayMaster.slice()}else if(a.aiDisplay.length==a.aiDisplayMaster.length||a.oPreviousSearch.sSearch.length>b.length||c==1||b.indexOf(a.oPreviousSearch.sSearch)!==0){a.aiDisplay.splice(0,a.aiDisplay.length);Q(a,
1);for(c=0;c<a.aiDisplayMaster.length;c++)e.test(a.asDataSearch[c])&&a.aiDisplay.push(a.aiDisplayMaster[c])}else{var i=0;for(c=0;c<a.asDataSearch.length;c++)if(!e.test(a.asDataSearch[c])){a.aiDisplay.splice(c-i,1);i++}}a.oPreviousSearch.sSearch=b;a.oPreviousSearch.bRegex=d;a.oPreviousSearch.bSmart=f}function Q(a,b){a.asDataSearch.splice(0,a.asDataSearch.length);var c=p.createElement("div");b=typeof b!="undefined"&&b==1?a.aiDisplayMaster:a.aiDisplay;for(var d=0,f=b.length;d<f;d++){a.asDataSearch[d]=
"";for(var e=0,i=a.aoColumns.length;e<i;e++)if(a.aoColumns[e].bSearchable)a.asDataSearch[d]+=ha(a.aoData[b[d]]._aData[e],a.aoColumns[e].sType)+"  ";if(a.asDataSearch[d].indexOf("&")!==-1){c.innerHTML=a.asDataSearch[d];a.asDataSearch[d]=c.textContent?c.textContent:c.innerText;a.asDataSearch[d]=a.asDataSearch[d].replace(/\n/g," ").replace(/\r/g,"")}}}function ga(a,b,c){if(c){a=b?a.split(" "):ia(a).split(" ");a="^(?=.*?"+a.join(")(?=.*?")+").*$";return new RegExp(a,"i")}else{a=b?a:ia(a);return new RegExp(a,
"i")}}function ha(a,b){if(typeof n.ofnSearch[b]=="function")return n.ofnSearch[b](a);else if(b=="html")return a.replace(/\n/g," ").replace(/<.*?>/g,"");else if(typeof a=="string")return a.replace(/\n/g," ");return a}function O(a,b){var c=[],d=n.oSort,f=a.aoData,e,i,h,k;if(!a.oFeatures.bServerSide&&(a.aaSorting.length!==0||a.aaSortingFixed!==null)){c=a.aaSortingFixed!==null?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();for(h=0;h<c.length;h++){e=c[h][0];i=N(a,e);k=a.aoColumns[e].sSortDataType;
if(typeof n.afnSortData[k]!="undefined"){var m=n.afnSortData[k](a,e,i);i=0;for(k=f.length;i<k;i++)f[i]._aData[e]=m[i]}}if(Y.runtime){var q=[],t=c.length;for(h=0;h<t;h++){e=a.aoColumns[c[h][0]].iDataSort;q.push([e,a.aoColumns[e].sType+"-"+c[h][1]])}a.aiDisplayMaster.sort(function(H,J){for(var A,G=0;G<t;G++){A=d[q[G][1]](f[H]._aData[q[G][0]],f[J]._aData[q[G][0]]);if(A!==0)return A}return 0})}else{this.ClosureDataTables={fn:function(){},data:f,sort:n.oSort,master:a.aiDisplayMaster.slice()};k="this.ClosureDataTables.fn = function(a,b){var iTest, oSort=this.ClosureDataTables.sort, aoData=this.ClosureDataTables.data, aiOrig=this.ClosureDataTables.master;";
for(h=0;h<c.length-1;h++){e=a.aoColumns[c[h][0]].iDataSort;i=a.aoColumns[e].sType;k+="iTest = oSort['"+i+"-"+c[h][1]+"']( aoData[a]._aData["+e+"], aoData[b]._aData["+e+"] ); if ( iTest === 0 )"}if(c.length>0){e=a.aoColumns[c[c.length-1][0]].iDataSort;i=a.aoColumns[e].sType;k+="iTest = oSort['"+i+"-"+c[c.length-1][1]+"']( aoData[a]._aData["+e+"], aoData[b]._aData["+e+"] );if (iTest===0) return oSort['numeric-asc'](jQuery.inArray(a,aiOrig), jQuery.inArray(b,aiOrig)); return iTest;}";eval(k);a.aiDisplayMaster.sort(this.ClosureDataTables.fn)}this.ClosureDataTables=
undefined}}if(typeof b=="undefined"||b)W(a);a.bSorted=true;if(a.oFeatures.bFilter)P(a,a.oPreviousSearch,1);else{a.aiDisplay=a.aiDisplayMaster.slice();a._iDisplayStart=0;F(a);C(a)}}function aa(a,b,c,d){j(b).click(function(f){if(a.aoColumns[c].bSortable!==false){var e=function(){var i,h;if(f.shiftKey){for(var k=false,m=0;m<a.aaSorting.length;m++)if(a.aaSorting[m][0]==c){k=true;i=a.aaSorting[m][0];h=a.aaSorting[m][2]+1;if(typeof a.aoColumns[i].asSorting[h]=="undefined")a.aaSorting.splice(m,1);else{a.aaSorting[m][1]=
a.aoColumns[i].asSorting[h];a.aaSorting[m][2]=h}break}k===false&&a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])}else if(a.aaSorting.length==1&&a.aaSorting[0][0]==c){i=a.aaSorting[0][0];h=a.aaSorting[0][2]+1;if(typeof a.aoColumns[i].asSorting[h]=="undefined")h=0;a.aaSorting[0][1]=a.aoColumns[i].asSorting[h];a.aaSorting[0][2]=h}else{a.aaSorting.splice(0,a.aaSorting.length);a.aaSorting.push([c,a.aoColumns[c].asSorting[0],0])}O(a)};if(a.oFeatures.bProcessing){K(a,true);setTimeout(function(){e();
a.oFeatures.bServerSide||K(a,false)},0)}else e();typeof d=="function"&&d(a)}})}function W(a){var b,c,d,f,e,i=a.aoColumns.length,h=a.oClasses;for(b=0;b<i;b++)a.aoColumns[b].bSortable&&j(a.aoColumns[b].nTh).removeClass(h.sSortAsc+" "+h.sSortDesc+" "+a.aoColumns[b].sSortingClass);f=a.aaSortingFixed!==null?a.aaSortingFixed.concat(a.aaSorting):a.aaSorting.slice();for(b=0;b<a.aoColumns.length;b++)if(a.aoColumns[b].bSortable){e=a.aoColumns[b].sSortingClass;d=-1;for(c=0;c<f.length;c++)if(f[c][0]==b){e=f[c][1]==
"asc"?h.sSortAsc:h.sSortDesc;d=c;break}j(a.aoColumns[b].nTh).addClass(e);if(a.bJUI){c=j("span",a.aoColumns[b].nTh);c.removeClass(h.sSortJUIAsc+" "+h.sSortJUIDesc+" "+h.sSortJUI+" "+h.sSortJUIAscAllowed+" "+h.sSortJUIDescAllowed);c.addClass(d==-1?a.aoColumns[b].sSortingClassJUI:f[d][1]=="asc"?h.sSortJUIAsc:h.sSortJUIDesc)}}else j(a.aoColumns[b].nTh).addClass(a.aoColumns[b].sSortingClass);e=h.sSortColumn;if(a.oFeatures.bSort&&a.oFeatures.bSortClasses){d=X(a);if(d.length>=i)for(b=0;b<i;b++)if(d[b].className.indexOf(e+
"1")!=-1){c=0;for(a=d.length/i;c<a;c++)d[i*c+b].className=j.trim(d[i*c+b].className.replace(e+"1",""))}else if(d[b].className.indexOf(e+"2")!=-1){c=0;for(a=d.length/i;c<a;c++)d[i*c+b].className=j.trim(d[i*c+b].className.replace(e+"2",""))}else if(d[b].className.indexOf(e+"3")!=-1){c=0;for(a=d.length/i;c<a;c++)d[i*c+b].className=j.trim(d[i*c+b].className.replace(" "+e+"3",""))}h=1;var k;for(b=0;b<f.length;b++){k=parseInt(f[b][0],10);c=0;for(a=d.length/i;c<a;c++)d[i*c+k].className+=" "+e+h;h<3&&h++}}}
function xa(a){if(a.oScroll.bInfinite)return null;var b=p.createElement("div");b.className=a.oClasses.sPaging+a.sPaginationType;n.oPagination[a.sPaginationType].fnInit(a,b,function(c){F(c);C(c)});typeof a.aanFeatures.p=="undefined"&&a.aoDrawCallback.push({fn:function(c){n.oPagination[c.sPaginationType].fnUpdate(c,function(d){F(d);C(d)})},sName:"pagination"});return b}function da(a,b){var c=a._iDisplayStart;if(b=="first")a._iDisplayStart=0;else if(b=="previous"){a._iDisplayStart=a._iDisplayLength>=
0?a._iDisplayStart-a._iDisplayLength:0;if(a._iDisplayStart<0)a._iDisplayStart=0}else if(b=="next")if(a._iDisplayLength>=0){if(a._iDisplayStart+a._iDisplayLength<a.fnRecordsDisplay())a._iDisplayStart+=a._iDisplayLength}else a._iDisplayStart=0;else if(b=="last")if(a._iDisplayLength>=0){b=parseInt((a.fnRecordsDisplay()-1)/a._iDisplayLength,10)+1;a._iDisplayStart=(b-1)*a._iDisplayLength}else a._iDisplayStart=0;else I(a,0,"Unknown paging action: "+b);return c!=a._iDisplayStart}function wa(a){var b=p.createElement("div");
b.className=a.oClasses.sInfo;if(typeof a.aanFeatures.i=="undefined"){a.aoDrawCallback.push({fn:Ca,sName:"information"});a.sTableId!==""&&b.setAttribute("id",a.sTableId+"_info")}return b}function Ca(a){if(!(!a.oFeatures.bInfo||a.aanFeatures.i.length===0)){var b=a._iDisplayStart+1,c=a.fnDisplayEnd(),d=a.fnRecordsTotal(),f=a.fnRecordsDisplay(),e=a.fnFormatNumber(b),i=a.fnFormatNumber(c),h=a.fnFormatNumber(d),k=a.fnFormatNumber(f);if(a.oScroll.bInfinite)e=a.fnFormatNumber(1);e=a.fnRecordsDisplay()===
0&&a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfoEmpty+a.oLanguage.sInfoPostFix:a.fnRecordsDisplay()===0?a.oLanguage.sInfoEmpty+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",h)+a.oLanguage.sInfoPostFix:a.fnRecordsDisplay()==a.fnRecordsTotal()?a.oLanguage.sInfo.replace("_START_",e).replace("_END_",i).replace("_TOTAL_",k)+a.oLanguage.sInfoPostFix:a.oLanguage.sInfo.replace("_START_",e).replace("_END_",i).replace("_TOTAL_",k)+" "+a.oLanguage.sInfoFiltered.replace("_MAX_",a.fnFormatNumber(a.fnRecordsTotal()))+
a.oLanguage.sInfoPostFix;if(a.oLanguage.fnInfoCallback!==null)e=a.oLanguage.fnInfoCallback(a,b,c,d,f,e);a=a.aanFeatures.i;b=0;for(c=a.length;b<c;b++)j(a[b]).html(e)}}function sa(a){if(a.oScroll.bInfinite)return null;var b='<select size="1" '+(a.sTableId===""?"":'name="'+a.sTableId+'_length"')+">",c,d;if(a.aLengthMenu.length==2&&typeof a.aLengthMenu[0]=="object"&&typeof a.aLengthMenu[1]=="object"){c=0;for(d=a.aLengthMenu[0].length;c<d;c++)b+='<option value="'+a.aLengthMenu[0][c]+'">'+a.aLengthMenu[1][c]+
"</option>"}else{c=0;for(d=a.aLengthMenu.length;c<d;c++)b+='<option value="'+a.aLengthMenu[c]+'">'+a.aLengthMenu[c]+"</option>"}b+="</select>";var f=p.createElement("div");a.sTableId!==""&&typeof a.aanFeatures.l=="undefined"&&f.setAttribute("id",a.sTableId+"_length");f.className=a.oClasses.sLength;f.innerHTML=a.oLanguage.sLengthMenu.replace("_MENU_",b);j('select option[value="'+a._iDisplayLength+'"]',f).attr("selected",true);j("select",f).change(function(){var e=j(this).val(),i=a.aanFeatures.l;c=
0;for(d=i.length;c<d;c++)i[c]!=this.parentNode&&j("select",i[c]).val(e);a._iDisplayLength=parseInt(e,10);F(a);if(a.fnDisplayEnd()==a.fnRecordsDisplay()){a._iDisplayStart=a.fnDisplayEnd()-a._iDisplayLength;if(a._iDisplayStart<0)a._iDisplayStart=0}if(a._iDisplayLength==-1)a._iDisplayStart=0;C(a)});return f}function ua(a){var b=p.createElement("div");a.sTableId!==""&&typeof a.aanFeatures.r=="undefined"&&b.setAttribute("id",a.sTableId+"_processing");b.innerHTML=a.oLanguage.sProcessing;b.className=a.oClasses.sProcessing;
a.nTable.parentNode.insertBefore(b,a.nTable);return b}function K(a,b){if(a.oFeatures.bProcessing){a=a.aanFeatures.r;for(var c=0,d=a.length;c<d;c++)a[c].style.visibility=b?"visible":"hidden"}}function fa(a,b){for(var c=-1,d=0;d<a.aoColumns.length;d++){a.aoColumns[d].bVisible===true&&c++;if(c==b)return d}return null}function N(a,b){for(var c=-1,d=0;d<a.aoColumns.length;d++){a.aoColumns[d].bVisible===true&&c++;if(d==b)return a.aoColumns[d].bVisible===true?c:null}return null}function R(a,b){var c,d;c=
a._iDisplayStart;for(d=a._iDisplayEnd;c<d;c++)if(a.aoData[a.aiDisplay[c]].nTr==b)return a.aiDisplay[c];c=0;for(d=a.aoData.length;c<d;c++)if(a.aoData[c].nTr==b)return c;return null}function T(a){for(var b=0,c=0;c<a.aoColumns.length;c++)a.aoColumns[c].bVisible===true&&b++;return b}function F(a){a._iDisplayEnd=a.oFeatures.bPaginate===false?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength>a.aiDisplay.length||a._iDisplayLength==-1?a.aiDisplay.length:a._iDisplayStart+a._iDisplayLength}function Da(a,
b){if(!a||a===null||a==="")return 0;if(typeof b=="undefined")b=p.getElementsByTagName("body")[0];var c=p.createElement("div");c.style.width=a;b.appendChild(c);a=c.offsetWidth;b.removeChild(c);return a}function Z(a){var b=0,c,d=0,f=a.aoColumns.length,e,i=j("th",a.nTHead);for(e=0;e<f;e++)if(a.aoColumns[e].bVisible){d++;if(a.aoColumns[e].sWidth!==null){c=Da(a.aoColumns[e].sWidthOrig,a.nTable.parentNode);if(c!==null)a.aoColumns[e].sWidth=u(c);b++}}if(f==i.length&&b===0&&d==f&&a.oScroll.sX===""&&a.oScroll.sY===
"")for(e=0;e<a.aoColumns.length;e++){c=j(i[e]).width();if(c!==null)a.aoColumns[e].sWidth=u(c)}else{b=a.nTable.cloneNode(false);e=p.createElement("tbody");c=p.createElement("tr");b.removeAttribute("id");b.appendChild(a.nTHead.cloneNode(true));if(a.nTFoot!==null){b.appendChild(a.nTFoot.cloneNode(true));M(function(h){h.style.width=""},b.getElementsByTagName("tr"))}b.appendChild(e);e.appendChild(c);e=j("thead th",b);if(e.length===0)e=j("tbody tr:eq(0)>td",b);e.each(function(h){this.style.width="";h=fa(a,
h);if(h!==null&&a.aoColumns[h].sWidthOrig!=="")this.style.width=a.aoColumns[h].sWidthOrig});for(e=0;e<f;e++)if(a.aoColumns[e].bVisible){d=Ea(a,e);if(d!==null){d=d.cloneNode(true);c.appendChild(d)}}e=a.nTable.parentNode;e.appendChild(b);if(a.oScroll.sX!==""&&a.oScroll.sXInner!=="")b.style.width=u(a.oScroll.sXInner);else if(a.oScroll.sX!==""){b.style.width="";if(j(b).width()<e.offsetWidth)b.style.width=u(e.offsetWidth)}else if(a.oScroll.sY!=="")b.style.width=u(e.offsetWidth);b.style.visibility="hidden";
Fa(a,b);f=j("tbody tr:eq(0)>td",b);if(f.length===0)f=j("thead tr:eq(0)>th",b);for(e=c=0;e<a.aoColumns.length;e++)if(a.aoColumns[e].bVisible){d=j(f[c]).width();if(d!==null&&d>0)a.aoColumns[e].sWidth=u(d);c++}a.nTable.style.width=u(j(b).outerWidth());b.parentNode.removeChild(b)}}function Fa(a,b){if(a.oScroll.sX===""&&a.oScroll.sY!==""){j(b).width();b.style.width=u(j(b).outerWidth()-a.oScroll.iBarWidth)}else if(a.oScroll.sX!=="")b.style.width=u(j(b).outerWidth())}function Ea(a,b,c){if(typeof c=="undefined"||
c){c=Ga(a,b);b=N(a,b);if(c<0)return null;return a.aoData[c].nTr.getElementsByTagName("td")[b]}var d=-1,f,e;c=-1;var i=p.createElement("div");i.style.visibility="hidden";i.style.position="absolute";p.body.appendChild(i);f=0;for(e=a.aoData.length;f<e;f++){i.innerHTML=a.aoData[f]._aData[b];if(i.offsetWidth>d){d=i.offsetWidth;c=f}}p.body.removeChild(i);if(c>=0){b=N(a,b);if(a=a.aoData[c].nTr.getElementsByTagName("td")[b])return a}return null}function Ga(a,b){for(var c=-1,d=-1,f=0;f<a.aoData.length;f++){var e=
a.aoData[f]._aData[b];if(e.length>c){c=e.length;d=f}}return d}function u(a){if(a===null)return"0px";if(typeof a=="number"){if(a<0)return"0px";return a+"px"}if(a.indexOf("em")!=-1||a.indexOf("%")!=-1||a.indexOf("ex")!=-1||a.indexOf("px")!=-1)return a;return a+"px"}function La(a,b){if(a.length!=b.length)return 1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return 2;return 0}function $(a){for(var b=n.aTypes,c=b.length,d=0;d<c;d++){var f=b[d](a);if(f!==null)return f}return"string"}function B(a){for(var b=
0;b<E.length;b++)if(E[b].nTable==a)return E[b];return null}function U(a){for(var b=[],c=a.aoData.length,d=0;d<c;d++)b.push(a.aoData[d]._aData);return b}function S(a){for(var b=[],c=a.aoData.length,d=0;d<c;d++)b.push(a.aoData[d].nTr);return b}function X(a){var b=S(a),c=[],d,f=[],e,i,h,k;e=0;for(i=b.length;e<i;e++){c=[];h=0;for(k=b[e].childNodes.length;h<k;h++){d=b[e].childNodes[h];d.nodeName.toUpperCase()=="TD"&&c.push(d)}h=d=0;for(k=a.aoColumns.length;h<k;h++)if(a.aoColumns[h].bVisible)f.push(c[h-
d]);else{f.push(a.aoData[e]._anHidden[h]);d++}}return f}function ia(a){return a.replace(new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^)","g"),"\\$1")}function ja(a,b){for(var c=-1,d=0,f=a.length;d<f;d++)if(a[d]==b)c=d;else a[d]>b&&a[d]--;c!=-1&&a.splice(c,1)}function ra(a,b){b=b.split(",");for(var c=[],d=0,f=a.aoColumns.length;d<f;d++)for(var e=0;e<f;e++)if(a.aoColumns[d].sName==b[e]){c.push(e);break}return c}function ba(a){for(var b="",c=0,d=a.aoColumns.length;c<d;c++)b+=
a.aoColumns[c].sName+",";if(b.length==d)return"";return b.slice(0,-1)}function I(a,b,c){a=a.sTableId===""?"DataTables warning: "+c:"DataTables warning (table id = '"+a.sTableId+"'): "+c;if(b===0)if(n.sErrMode=="alert")alert(a);else throw a;else typeof console!="undefined"&&typeof console.log!="undefined"&&console.log(a)}function ca(a){a.aoData.splice(0,a.aoData.length);a.aiDisplayMaster.splice(0,a.aiDisplayMaster.length);a.aiDisplay.splice(0,a.aiDisplay.length);F(a)}function ka(a){if(!(!a.oFeatures.bStateSave||
typeof a.bDestroying!="undefined")){var b,c="{";c+='"iCreate":'+(new Date).getTime()+",";c+='"iStart":'+a._iDisplayStart+",";c+='"iEnd":'+a._iDisplayEnd+",";c+='"iLength":'+a._iDisplayLength+",";c+='"sFilter":"'+encodeURIComponent(a.oPreviousSearch.sSearch)+'",';c+='"sFilterEsc":'+!a.oPreviousSearch.bRegex+",";c+='"aaSorting":[ ';for(b=0;b<a.aaSorting.length;b++)c+="["+a.aaSorting[b][0]+',"'+a.aaSorting[b][1]+'"],';c=c.substring(0,c.length-1);c+="],";c+='"aaSearchCols":[ ';for(b=0;b<a.aoPreSearchCols.length;b++)c+=
'["'+encodeURIComponent(a.aoPreSearchCols[b].sSearch)+'",'+!a.aoPreSearchCols[b].bRegex+"],";c=c.substring(0,c.length-1);c+="],";c+='"abVisCols":[ ';for(b=0;b<a.aoColumns.length;b++)c+=a.aoColumns[b].bVisible+",";c=c.substring(0,c.length-1);c+="]";c+="}";Ha(a.sCookiePrefix+a.sInstance,c,a.iCookieDuration,a.sCookiePrefix,a.fnCookieCallback)}}function Ia(a,b){if(a.oFeatures.bStateSave){var c,d=la(a.sCookiePrefix+a.sInstance);if(d!==null&&d!==""){try{c=typeof j.parseJSON=="function"?j.parseJSON(d.replace(/'/g,
'"')):eval("("+d+")")}catch(f){return}a._iDisplayStart=c.iStart;a.iInitDisplayStart=c.iStart;a._iDisplayEnd=c.iEnd;a._iDisplayLength=c.iLength;a.oPreviousSearch.sSearch=decodeURIComponent(c.sFilter);a.aaSorting=c.aaSorting.slice();a.saved_aaSorting=c.aaSorting.slice();if(typeof c.sFilterEsc!="undefined")a.oPreviousSearch.bRegex=!c.sFilterEsc;if(typeof c.aaSearchCols!="undefined")for(d=0;d<c.aaSearchCols.length;d++)a.aoPreSearchCols[d]={sSearch:decodeURIComponent(c.aaSearchCols[d][0]),bRegex:!c.aaSearchCols[d][1]};
if(typeof c.abVisCols!="undefined"){b.saved_aoColumns=[];for(d=0;d<c.abVisCols.length;d++){b.saved_aoColumns[d]={};b.saved_aoColumns[d].bVisible=c.abVisCols[d]}}}}}function Ha(a,b,c,d,f){var e=new Date;e.setTime(e.getTime()+c*1E3);c=Y.location.pathname.split("/");a=a+"_"+c.pop().replace(/[\/:]/g,"").toLowerCase();var i;if(f!==null){i=typeof j.parseJSON=="function"?j.parseJSON(b):eval("("+b+")");b=f(a,i,e.toGMTString(),c.join("/")+"/")}else b=a+"="+encodeURIComponent(b)+"; expires="+e.toGMTString()+
"; path="+c.join("/")+"/";f="";e=9999999999999;if((la(a)!==null?p.cookie.length:b.length+p.cookie.length)+10>4096){a=p.cookie.split(";");for(var h=0,k=a.length;h<k;h++)if(a[h].indexOf(d)!=-1){var m=a[h].split("=");try{i=eval("("+decodeURIComponent(m[1])+")")}catch(q){continue}if(typeof i.iCreate!="undefined"&&i.iCreate<e){f=m[0];e=i.iCreate}}if(f!=="")p.cookie=f+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path="+c.join("/")+"/"}p.cookie=b}function la(a){var b=Y.location.pathname.split("/");a=a+"_"+
b[b.length-1].replace(/[\/:]/g,"").toLowerCase()+"=";b=p.cookie.split(";");for(var c=0;c<b.length;c++){for(var d=b[c];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(a)===0)return decodeURIComponent(d.substring(a.length,d.length))}return null}function ea(a){a=a.getElementsByTagName("tr");if(a.length==1)return a[0].getElementsByTagName("th");var b=[],c=[],d,f,e,i,h,k,m=function(G,Ma,ma){for(;typeof G[Ma][ma]!="undefined";)ma++;return ma},q=function(G){if(typeof b[G]=="undefined")b[G]=[]};
d=0;for(i=a.length;d<i;d++){q(d);var t=0,H=[];f=0;for(h=a[d].childNodes.length;f<h;f++)if(a[d].childNodes[f].nodeName.toUpperCase()=="TD"||a[d].childNodes[f].nodeName.toUpperCase()=="TH")H.push(a[d].childNodes[f]);f=0;for(h=H.length;f<h;f++){var J=H[f].getAttribute("colspan")*1,A=H[f].getAttribute("rowspan")*1;if(!J||J===0||J===1){k=m(b,d,t);b[d][k]=H[f].nodeName.toUpperCase()=="TD"?4:H[f];if(A||A===0||A===1)for(e=1;e<A;e++){q(d+e);b[d+e][k]=2}t++}else{k=m(b,d,t);for(e=0;e<J;e++)b[d][k+e]=3;t+=J}}}d=
0;for(i=b.length;d<i;d++){f=0;for(h=b[d].length;f<h;f++)if(typeof b[d][f]=="object")c[f]=b[d][f]}return c}function Ja(){var a=p.createElement("p"),b=a.style;b.width="100%";b.height="200px";var c=p.createElement("div");b=c.style;b.position="absolute";b.top="0px";b.left="0px";b.visibility="hidden";b.width="200px";b.height="150px";b.overflow="hidden";c.appendChild(a);p.body.appendChild(c);b=a.offsetWidth;c.style.overflow="scroll";a=a.offsetWidth;if(b==a)a=c.clientWidth;p.body.removeChild(c);return b-
a}function M(a,b,c){for(var d=0,f=b.length;d<f;d++)for(var e=0,i=b[d].childNodes.length;e<i;e++)if(b[d].childNodes[e].nodeType==1)typeof c!="undefined"?a(b[d].childNodes[e],c[d].childNodes[e]):a(b[d].childNodes[e])}function o(a,b,c,d){if(typeof d=="undefined")d=c;if(typeof b[c]!="undefined")a[d]=b[c]}this.oApi={};this.fnDraw=function(a){var b=B(this[n.iApiIndex]);if(typeof a!="undefined"&&a===false){F(b);C(b)}else L(b)};this.fnFilter=function(a,b,c,d,f){var e=B(this[n.iApiIndex]);if(e.oFeatures.bFilter){if(typeof c==
"undefined")c=false;if(typeof d=="undefined")d=true;if(typeof f=="undefined")f=true;if(typeof b=="undefined"||b===null){P(e,{sSearch:a,bRegex:c,bSmart:d},1);if(f&&typeof e.aanFeatures.f!="undefined"){b=e.aanFeatures.f;c=0;for(d=b.length;c<d;c++)j("input",b[c]).val(a)}}else{e.aoPreSearchCols[b].sSearch=a;e.aoPreSearchCols[b].bRegex=c;e.aoPreSearchCols[b].bSmart=d;P(e,e.oPreviousSearch,1)}}};this.fnSettings=function(){return B(this[n.iApiIndex])};this.fnVersionCheck=n.fnVersionCheck;this.fnSort=function(a){var b=
B(this[n.iApiIndex]);b.aaSorting=a;O(b)};this.fnSortListener=function(a,b,c){aa(B(this[n.iApiIndex]),a,b,c)};this.fnAddData=function(a,b){if(a.length===0)return[];var c=[],d,f=B(this[n.iApiIndex]);if(typeof a[0]=="object")for(var e=0;e<a.length;e++){d=w(f,a[e]);if(d==-1)return c;c.push(d)}else{d=w(f,a);if(d==-1)return c;c.push(d)}f.aiDisplay=f.aiDisplayMaster.slice();Q(f,1);if(typeof b=="undefined"||b)L(f);return c};this.fnDeleteRow=function(a,b,c){var d=B(this[n.iApiIndex]);a=typeof a=="object"?
R(d,a):a;var f=d.aoData.splice(a,1);ja(d.aiDisplayMaster,a);ja(d.aiDisplay,a);Q(d,1);typeof b=="function"&&b.call(this,d,f);if(d._iDisplayStart>=d.aiDisplay.length){d._iDisplayStart-=d._iDisplayLength;if(d._iDisplayStart<0)d._iDisplayStart=0}if(typeof c=="undefined"||c){F(d);C(d)}return f};this.fnClearTable=function(a){var b=B(this[n.iApiIndex]);ca(b);if(typeof a=="undefined"||a)C(b)};this.fnOpen=function(a,b,c){var d=B(this[n.iApiIndex]);this.fnClose(a);var f=p.createElement("tr"),e=p.createElement("td");
f.appendChild(e);e.className=c;e.colSpan=T(d);e.innerHTML=b;b=j("tr",d.nTBody);j.inArray(a,b)!=-1&&j(f).insertAfter(a);d.aoOpenRows.push({nTr:f,nParent:a});return f};this.fnClose=function(a){for(var b=B(this[n.iApiIndex]),c=0;c<b.aoOpenRows.length;c++)if(b.aoOpenRows[c].nParent==a){(a=b.aoOpenRows[c].nTr.parentNode)&&a.removeChild(b.aoOpenRows[c].nTr);b.aoOpenRows.splice(c,1);return 0}return 1};this.fnGetData=function(a){var b=B(this[n.iApiIndex]);if(typeof a!="undefined"){a=typeof a=="object"?R(b,
a):a;return b.aoData[a]._aData}return U(b)};this.fnGetNodes=function(a){var b=B(this[n.iApiIndex]);if(typeof a!="undefined")return b.aoData[a].nTr;return S(b)};this.fnGetPosition=function(a){var b=B(this[n.iApiIndex]);if(a.nodeName.toUpperCase()=="TR")return R(b,a);else if(a.nodeName.toUpperCase()=="TD")for(var c=R(b,a.parentNode),d=0,f=0;f<b.aoColumns.length;f++)if(b.aoColumns[f].bVisible){if(b.aoData[c].nTr.getElementsByTagName("td")[f-d]==a)return[c,f-d,f]}else d++;return null};this.fnUpdate=function(a,
b,c,d,f){var e=B(this[n.iApiIndex]),i=typeof b=="object"?R(e,b):b;if(typeof a!="object"){b=a;e.aoData[i]._aData[c]=b;if(e.aoColumns[c].fnRender!==null){b=e.aoColumns[c].fnRender({iDataRow:i,iDataColumn:c,aData:e.aoData[i]._aData,oSettings:e});if(e.aoColumns[c].bUseRendered)e.aoData[i]._aData[c]=b}c=N(e,c);if(c!==null)e.aoData[i].nTr.getElementsByTagName("td")[c].innerHTML=b}else{if(a.length!=e.aoColumns.length){I(e,0,"An array passed to fnUpdate must have the same number of columns as the table in question - in this case "+
e.aoColumns.length);return 1}for(var h=0;h<a.length;h++){b=a[h];e.aoData[i]._aData[h]=b;if(e.aoColumns[h].fnRender!==null){b=e.aoColumns[h].fnRender({iDataRow:i,iDataColumn:h,aData:e.aoData[i]._aData,oSettings:e});if(e.aoColumns[h].bUseRendered)e.aoData[i]._aData[h]=b}c=N(e,h);if(c!==null)e.aoData[i].nTr.getElementsByTagName("td")[c].innerHTML=b}}if(typeof f=="undefined"||f){Q(e,1);V(e)}if(typeof d=="undefined"||d)L(e);return 0};this.fnSetColumnVis=function(a,b){var c=B(this[n.iApiIndex]),d,f;f=c.aoColumns.length;
var e,i;if(c.aoColumns[a].bVisible!=b){e=j(">tr",c.nTHead)[0];var h=j(">tr",c.nTFoot)[0],k=[],m=[];for(d=0;d<f;d++){k.push(c.aoColumns[d].nTh);m.push(c.aoColumns[d].nTf)}if(b){for(d=b=0;d<a;d++)c.aoColumns[d].bVisible&&b++;if(b>=T(c)){e.appendChild(k[a]);h&&h.appendChild(m[a]);d=0;for(f=c.aoData.length;d<f;d++){e=c.aoData[d]._anHidden[a];c.aoData[d].nTr.appendChild(e)}}else{for(d=a;d<f;d++){i=N(c,d);if(i!==null)break}e.insertBefore(k[a],e.getElementsByTagName("th")[i]);h&&h.insertBefore(m[a],h.getElementsByTagName("th")[i]);
X(c);d=0;for(f=c.aoData.length;d<f;d++){e=c.aoData[d]._anHidden[a];c.aoData[d].nTr.insertBefore(e,j(">td:eq("+i+")",c.aoData[d].nTr)[0])}}c.aoColumns[a].bVisible=true}else{e.removeChild(k[a]);h&&h.removeChild(m[a]);i=X(c);d=0;for(f=c.aoData.length;d<f;d++){e=i[d*c.aoColumns.length+a*1];c.aoData[d]._anHidden[a]=e;e.parentNode.removeChild(e)}c.aoColumns[a].bVisible=false}d=0;for(f=c.aoOpenRows.length;d<f;d++)c.aoOpenRows[d].nTr.colSpan=T(c);V(c);C(c);ka(c)}};this.fnPageChange=function(a,b){var c=B(this[n.iApiIndex]);
da(c,a);F(c);if(typeof b=="undefined"||b)C(c)};this.fnDestroy=function(){var a=B(this[n.iApiIndex]),b=a.nTableWrapper.parentNode,c=a.nTBody,d,f;a.bDestroying=true;d=0;for(f=a.aoColumns.length;d<f;d++)a.aoColumns[d].bVisible===false&&this.fnSetColumnVis(d,true);j("tbody>tr>td."+a.oClasses.sRowEmpty,a.nTable).parent().remove();if(a.nTable!=a.nTHead.parentNode){j(">thead",a.nTable).remove();a.nTable.appendChild(a.nTHead)}if(a.nTFoot&&a.nTable!=a.nTFoot.parentNode){j(">tfoot",a.nTable).remove();a.nTable.appendChild(a.nTFoot)}a.nTable.parentNode.removeChild(a.nTable);
j(a.nTableWrapper).remove();a.aaSorting=[];a.aaSortingFixed=[];W(a);j(S(a)).removeClass(a.asStripClasses.join(" "));if(a.bJUI){j("th",a.nTHead).removeClass([n.oStdClasses.sSortable,n.oJUIClasses.sSortableAsc,n.oJUIClasses.sSortableDesc,n.oJUIClasses.sSortableNone].join(" "));j("th span",a.nTHead).remove()}else j("th",a.nTHead).removeClass([n.oStdClasses.sSortable,n.oStdClasses.sSortableAsc,n.oStdClasses.sSortableDesc,n.oStdClasses.sSortableNone].join(" "));b.appendChild(a.nTable);d=0;for(f=a.aoData.length;d<
f;d++)c.appendChild(a.aoData[d].nTr);a.nTable.style.width=u(a.sDestroyWidth);j(">tr:even",c).addClass(a.asDestoryStrips[0]);j(">tr:odd",c).addClass(a.asDestoryStrips[1]);d=0;for(f=E.length;d<f;d++)E[d]==a&&E.splice(d,1)};this.fnAdjustColumnSizing=function(a){V(B(this[n.iApiIndex]));if(typeof a=="undefined"||a)this.fnDraw(false)};for(var na in n.oApi)if(na)this[na]=r(na);this.oApi._fnExternApiFunc=r;this.oApi._fnInitalise=s;this.oApi._fnLanguageProcess=v;this.oApi._fnAddColumn=y;this.oApi._fnColumnOptions=
D;this.oApi._fnAddData=w;this.oApi._fnGatherData=x;this.oApi._fnDrawHead=z;this.oApi._fnDraw=C;this.oApi._fnReDraw=L;this.oApi._fnAjaxUpdate=pa;this.oApi._fnAjaxUpdateDraw=qa;this.oApi._fnAddOptionsHtml=oa;this.oApi._fnFeatureHtmlTable=va;this.oApi._fnScrollDraw=ya;this.oApi._fnAjustColumnSizing=V;this.oApi._fnFeatureHtmlFilter=ta;this.oApi._fnFilterComplete=P;this.oApi._fnFilterCustom=Ba;this.oApi._fnFilterColumn=Aa;this.oApi._fnFilter=za;this.oApi._fnBuildSearchArray=Q;this.oApi._fnFilterCreateSearch=
ga;this.oApi._fnDataToSearch=ha;this.oApi._fnSort=O;this.oApi._fnSortAttachListener=aa;this.oApi._fnSortingClasses=W;this.oApi._fnFeatureHtmlPaginate=xa;this.oApi._fnPageChange=da;this.oApi._fnFeatureHtmlInfo=wa;this.oApi._fnUpdateInfo=Ca;this.oApi._fnFeatureHtmlLength=sa;this.oApi._fnFeatureHtmlProcessing=ua;this.oApi._fnProcessingDisplay=K;this.oApi._fnVisibleToColumnIndex=fa;this.oApi._fnColumnIndexToVisible=N;this.oApi._fnNodeToDataIndex=R;this.oApi._fnVisbleColumns=T;this.oApi._fnCalculateEnd=
F;this.oApi._fnConvertToWidth=Da;this.oApi._fnCalculateColumnWidths=Z;this.oApi._fnScrollingWidthAdjust=Fa;this.oApi._fnGetWidestNode=Ea;this.oApi._fnGetMaxLenString=Ga;this.oApi._fnStringToCss=u;this.oApi._fnArrayCmp=La;this.oApi._fnDetectType=$;this.oApi._fnSettingsFromNode=B;this.oApi._fnGetDataMaster=U;this.oApi._fnGetTrNodes=S;this.oApi._fnGetTdNodes=X;this.oApi._fnEscapeRegex=ia;this.oApi._fnDeleteIndex=ja;this.oApi._fnReOrderIndex=ra;this.oApi._fnColumnOrdering=ba;this.oApi._fnLog=I;this.oApi._fnClearTable=
ca;this.oApi._fnSaveState=ka;this.oApi._fnLoadState=Ia;this.oApi._fnCreateCookie=Ha;this.oApi._fnReadCookie=la;this.oApi._fnGetUniqueThs=ea;this.oApi._fnScrollBarWidth=Ja;this.oApi._fnApplyToChildren=M;this.oApi._fnMap=o;var Ka=this;return this.each(function(){var a=0,b,c,d,f;a=0;for(b=E.length;a<b;a++){if(E[a].nTable==this)if(typeof g=="undefined"||typeof g.bRetrieve!="undefined"&&g.bRetrieve===true)return E[a].oInstance;else if(typeof g.bDestroy!="undefined"&&g.bDestroy===true){E[a].oInstance.fnDestroy();
break}else{I(E[a],0,"Cannot reinitialise DataTable.\n\nTo retrieve the DataTables object for this table, please pass either no arguments to the dataTable() function, or set bRetrieve to true. Alternatively, to destory the old table and create a new one, set bDestroy to true (note that a lot of changes to the configuration can be made through the API which is usually much faster).");return}if(E[a].sTableId!==""&&E[a].sTableId==this.getAttribute("id")){E.splice(a,1);break}}var e=new l;E.push(e);var i=
false,h=false;a=this.getAttribute("id");if(a!==null){e.sTableId=a;e.sInstance=a}else e.sInstance=n._oExternConfig.iNextUnique++;if(this.nodeName.toLowerCase()!="table")I(e,0,"Attempted to initialise DataTables on a node which is not a table: "+this.nodeName);else{e.oInstance=Ka;e.nTable=this;e.oApi=Ka.oApi;e.sDestroyWidth=j(this).width();if(typeof g!="undefined"&&g!==null){e.oInit=g;o(e.oFeatures,g,"bPaginate");o(e.oFeatures,g,"bLengthChange");o(e.oFeatures,g,"bFilter");o(e.oFeatures,g,"bSort");o(e.oFeatures,
g,"bInfo");o(e.oFeatures,g,"bProcessing");o(e.oFeatures,g,"bAutoWidth");o(e.oFeatures,g,"bSortClasses");o(e.oFeatures,g,"bServerSide");o(e.oScroll,g,"sScrollX","sX");o(e.oScroll,g,"sScrollXInner","sXInner");o(e.oScroll,g,"sScrollY","sY");o(e.oScroll,g,"bScrollCollapse","bCollapse");o(e.oScroll,g,"bScrollInfinite","bInfinite");o(e.oScroll,g,"iScrollLoadGap","iLoadGap");o(e,g,"asStripClasses");o(e,g,"fnRowCallback");o(e,g,"fnHeaderCallback");o(e,g,"fnFooterCallback");o(e,g,"fnCookieCallback");o(e,g,
"fnInitComplete");o(e,g,"fnServerData");o(e,g,"fnFormatNumber");o(e,g,"aaSorting");o(e,g,"aaSortingFixed");o(e,g,"aLengthMenu");o(e,g,"sPaginationType");o(e,g,"sAjaxSource");o(e,g,"iCookieDuration");o(e,g,"sCookiePrefix");o(e,g,"sDom");o(e,g,"oSearch","oPreviousSearch");o(e,g,"aoSearchCols","aoPreSearchCols");o(e,g,"iDisplayLength","_iDisplayLength");o(e,g,"bJQueryUI","bJUI");o(e.oLanguage,g,"fnInfoCallback");typeof g.fnDrawCallback=="function"&&e.aoDrawCallback.push({fn:g.fnDrawCallback,sName:"user"});
e.oFeatures.bServerSide&&e.oFeatures.bSort&&e.oFeatures.bSortClasses&&e.aoDrawCallback.push({fn:W,sName:"server_side_sort_classes"});if(typeof g.bJQueryUI!="undefined"&&g.bJQueryUI){e.oClasses=n.oJUIClasses;if(typeof g.sDom=="undefined")e.sDom='<"H"lfr>t<"F"ip>'}if(e.oScroll.sX!==""||e.oScroll.sY!=="")e.oScroll.iBarWidth=Ja();if(typeof g.iDisplayStart!="undefined"&&typeof e.iInitDisplayStart=="undefined"){e.iInitDisplayStart=g.iDisplayStart;e._iDisplayStart=g.iDisplayStart}if(typeof g.bStateSave!=
"undefined"){e.oFeatures.bStateSave=g.bStateSave;Ia(e,g);e.aoDrawCallback.push({fn:ka,sName:"state_save"})}if(typeof g.aaData!="undefined")h=true;if(typeof g!="undefined"&&typeof g.aoData!="undefined")g.aoColumns=g.aoData;if(typeof g.oLanguage!="undefined")if(typeof g.oLanguage.sUrl!="undefined"&&g.oLanguage.sUrl!==""){e.oLanguage.sUrl=g.oLanguage.sUrl;j.getJSON(e.oLanguage.sUrl,null,function(q){v(e,q,true)});i=true}else v(e,g.oLanguage,false)}else g={};if(typeof g.asStripClasses=="undefined"){e.asStripClasses.push(e.oClasses.sStripOdd);
e.asStripClasses.push(e.oClasses.sStripEven)}c=false;d=j("tbody>tr",this);a=0;for(b=e.asStripClasses.length;a<b;a++)if(d.filter(":lt(2)").hasClass(e.asStripClasses[a])){c=true;break}if(c){e.asDestoryStrips=["",""];if(j(d[0]).hasClass(e.oClasses.sStripOdd))e.asDestoryStrips[0]+=e.oClasses.sStripOdd+" ";if(j(d[0]).hasClass(e.oClasses.sStripEven))e.asDestoryStrips[0]+=e.oClasses.sStripEven;if(j(d[1]).hasClass(e.oClasses.sStripOdd))e.asDestoryStrips[1]+=e.oClasses.sStripOdd+" ";if(j(d[1]).hasClass(e.oClasses.sStripEven))e.asDestoryStrips[1]+=
e.oClasses.sStripEven;d.removeClass(e.asStripClasses.join(" "))}a=this.getElementsByTagName("thead");c=a.length===0?[]:ea(a[0]);var k;if(typeof g.aoColumns=="undefined"){k=[];a=0;for(b=c.length;a<b;a++)k.push(null)}else k=g.aoColumns;a=0;for(b=k.length;a<b;a++){if(typeof g.saved_aoColumns!="undefined"&&g.saved_aoColumns.length==b){if(k[a]===null)k[a]={};k[a].bVisible=g.saved_aoColumns[a].bVisible}y(e,c?c[a]:null)}if(typeof g.aoColumnDefs!="undefined")for(a=g.aoColumnDefs.length-1;a>=0;a--){var m=
g.aoColumnDefs[a].aTargets;c=0;for(d=m.length;c<d;c++)if(typeof m[c]=="number"&&m[c]>=0){for(;e.aoColumns.length<=m[c];)y(e);D(e,m[c],g.aoColumnDefs[a])}else if(typeof m[c]=="number"&&m[c]<0)D(e,e.aoColumns.length+m[c],g.aoColumnDefs[a]);else if(typeof m[c]=="string"){b=0;for(f=e.aoColumns.length;b<f;b++)if(m[c]=="_all"||e.aoColumns[b].nTh.className.indexOf(m[c])!=-1)D(e,b,g.aoColumnDefs[a])}}if(typeof k!="undefined"){a=0;for(b=k.length;a<b;a++)D(e,a,k[a])}a=0;for(b=e.aaSorting.length;a<b;a++){k=
e.aoColumns[e.aaSorting[a][0]];if(typeof e.aaSorting[a][2]=="undefined")e.aaSorting[a][2]=0;if(typeof g.aaSorting=="undefined"&&typeof e.saved_aaSorting=="undefined")e.aaSorting[a][1]=k.asSorting[0];c=0;for(d=k.asSorting.length;c<d;c++)if(e.aaSorting[a][1]==k.asSorting[c]){e.aaSorting[a][2]=c;break}}this.getElementsByTagName("thead").length===0&&this.appendChild(p.createElement("thead"));this.getElementsByTagName("tbody").length===0&&this.appendChild(p.createElement("tbody"));e.nTHead=this.getElementsByTagName("thead")[0];
e.nTBody=this.getElementsByTagName("tbody")[0];if(this.getElementsByTagName("tfoot").length>0)e.nTFoot=this.getElementsByTagName("tfoot")[0];if(h)for(a=0;a<g.aaData.length;a++)w(e,g.aaData[a]);else x(e);e.aiDisplay=e.aiDisplayMaster.slice();e.bInitialised=true;i===false&&s(e)}})}})(jQuery,window,document);

$.fn.dataTableExt.oApi.fnReloadAjax = function ( oSettings, sNewSource, fnCallback ){
	if ( typeof sNewSource != 'undefined' ){
		oSettings.sAjaxSource = sNewSource;
	}
	this.oApi._fnProcessingDisplay( oSettings, true );
	var that = this;
	
	oSettings.fnServerData( oSettings.sAjaxSource, null, function(json) {
		/* Clear the old information from the table */
		that.oApi._fnClearTable( oSettings );
		
		/* Got the data - add it to the table */
		for ( var i=0 ; i<json.aaData.length ; i++ ){
			that.oApi._fnAddData( oSettings, json.aaData[i] );
		}
		
		oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
		that.fnDraw( that );
		that.oApi._fnProcessingDisplay( oSettings, false );
		
		/* Callback user function - for event handlers etc */
		if ( typeof fnCallback == 'function' ){
			fnCallback( oSettings );
		}
	});
}

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}