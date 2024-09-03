import{d as kn,f as T,w as Gn,x as Kn,o as Vn,j as Jn,n as Qn,p as Zn,y as ne,u as ln,m as ee}from"./vue.esm-bundler-CKZLKMJN.js";import{N as te}from"./Text-DFJ1zlSw.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function L(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(e){return typeof e}:L=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(n)}function ae(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function ie(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function oe(n,e,r){return e&&ie(n.prototype,e),n}function se(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function u(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),t.forEach(function(a){se(n,a,r[a])})}return n}function xn(n,e){return le(n)||fe(n,e)||ce()}function le(n){if(Array.isArray(n))return n}function fe(n,e){var r=[],t=!0,a=!1,i=void 0;try{for(var o=n[Symbol.iterator](),s;!(t=(s=o.next()).done)&&(r.push(s.value),!(e&&r.length===e));t=!0);}catch(f){a=!0,i=f}finally{try{!t&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}function ce(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var fn=function(){},tn={},_n={},ue=null,On={mark:fn,measure:fn};try{typeof window<"u"&&(tn=window),typeof document<"u"&&(_n=document),typeof MutationObserver<"u"&&(ue=MutationObserver),typeof performance<"u"&&(On=performance)}catch{}var me=tn.navigator||{},cn=me.userAgent,un=cn===void 0?"":cn,X=tn,g=_n,D=On;X.document;var rn=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function";~un.indexOf("MSIE")||~un.indexOf("Trident/");var P="___FONT_AWESOME___",In="fa",zn="svg-inline--fa",de="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var q={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},An=X.FontAwesomeConfig||{};function pe(n){var e=g.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function he(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(g&&typeof g.querySelector=="function"){var ve=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ve.forEach(function(n){var e=xn(n,2),r=e[0],t=e[1],a=he(pe(r));a!=null&&(An[t]=a)})}var ge={familyPrefix:In,replacementClass:zn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},J=u({},ge,An);J.autoReplaceSvg||(J.observeMutations=!1);var b=u({},J);X.FontAwesomeConfig=b;var C=X||{};C[P]||(C[P]={});C[P].styles||(C[P].styles={});C[P].hooks||(C[P].hooks={});C[P].shims||(C[P].shims=[]);var O=C[P],ye=[],be=function n(){g.removeEventListener("DOMContentLoaded",n),Q=1,ye.map(function(e){return e()})},Q=!1;rn&&(Q=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Q||g.addEventListener("DOMContentLoaded",be));var an="pending",Sn="settled",F="fulfilled",$="rejected",we=function(){},Pn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",ke=typeof setImmediate>"u"?setTimeout:setImmediate,j=[],Z;function xe(){for(var n=0;n<j.length;n++)j[n][0](j[n][1]);j=[],Z=!1}function W(n,e){j.push([n,e]),Z||(Z=!0,ke(xe,0))}function _e(n,e){function r(a){on(e,a)}function t(a){R(e,a)}try{n(r,t)}catch(a){t(a)}}function Cn(n){var e=n.owner,r=e._state,t=e._data,a=n[r],i=n.then;if(typeof a=="function"){r=F;try{t=a(t)}catch(o){R(i,o)}}En(i,t)||(r===F&&on(i,t),r===$&&R(i,t))}function En(n,e){var r;try{if(n===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||L(e)==="object")){var t=e.then;if(typeof t=="function")return t.call(e,function(a){r||(r=!0,e===a?Mn(n,a):on(n,a))},function(a){r||(r=!0,R(n,a))}),!0}}catch(a){return r||R(n,a),!0}return!1}function on(n,e){(n===e||!En(n,e))&&Mn(n,e)}function Mn(n,e){n._state===an&&(n._state=Sn,n._data=e,W(Oe,n))}function R(n,e){n._state===an&&(n._state=Sn,n._data=e,W(Ie,n))}function Tn(n){n._then=n._then.forEach(Cn)}function Oe(n){n._state=F,Tn(n)}function Ie(n){n._state=$,Tn(n),!n._handled&&Pn&&global.process.emit("unhandledRejection",n._data,n)}function ze(n){global.process.emit("rejectionHandled",n)}function k(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof k))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],_e(n,this)}k.prototype={constructor:k,_state:an,_then:null,_data:void 0,_handled:!1,then:function(e,r){var t={owner:this,then:new this.constructor(we),fulfilled:e,rejected:r};return(r||e)&&!this._handled&&(this._handled=!0,this._state===$&&Pn&&W(ze,this)),this._state===F||this._state===$?W(Cn,t):this._then.push(t),t.then},catch:function(e){return this.then(null,e)}};k.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new k(function(e,r){var t=[],a=0;function i(f){return a++,function(m){t[f]=m,--a||e(t)}}for(var o=0,s;o<n.length;o++)s=n[o],s&&typeof s.then=="function"?s.then(i(o),r):t[o]=s;a||e(t)})};k.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new k(function(e,r){for(var t=0,a;t<n.length;t++)a=n[t],a&&typeof a.then=="function"?a.then(e,r):e(a)})};k.resolve=function(n){return n&&L(n)==="object"&&n.constructor===k?n:new k(function(e){e(n)})};k.reject=function(n){return new k(function(e,r){r(n)})};var N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ae(n){if(!(!n||!rn)){var e=g.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var r=g.head.childNodes,t=null,a=r.length-1;a>-1;a--){var i=r[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(t=i)}return g.head.insertBefore(e,t),n}}var Se="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){for(var n=12,e="";n-- >0;)e+=Se[Math.random()*62|0];return e}function Nn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pe(n){return Object.keys(n||{}).reduce(function(e,r){return e+"".concat(r,'="').concat(Nn(n[r]),'" ')},"").trim()}function jn(n){return Object.keys(n||{}).reduce(function(e,r){return e+"".concat(r,": ").concat(n[r],";")},"")}function Ln(n){return n.size!==N.size||n.x!==N.x||n.y!==N.y||n.rotate!==N.rotate||n.flipX||n.flipY}function Rn(n){var e=n.transform,r=n.containerWidth,t=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},m={transform:"translate(".concat(t/2*-1," -256)")};return{outer:a,inner:f,path:m}}var G={x:0,y:0,width:"100%",height:"100%"};function mn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function Ce(n){return n.tag==="g"?n.children:[n]}function Ee(n){var e=n.children,r=n.attributes,t=n.main,a=n.mask,i=n.maskId,o=n.transform,s=t.width,f=t.icon,m=a.width,d=a.icon,v=Rn({transform:o,containerWidth:m,iconWidth:s}),I={tag:"rect",attributes:u({},G,{fill:"white"})},E=f.children?{children:f.children.map(mn)}:{},z={tag:"g",attributes:u({},v.inner),children:[mn(u({tag:f.tag,attributes:u({},f.attributes,v.path)},E))]},x={tag:"g",attributes:u({},v.outer),children:[z]},w="mask-".concat(i||U()),l="clip-".concat(i||U()),c={tag:"mask",attributes:u({},G,{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,x]},p={tag:"defs",children:[{tag:"clipPath",attributes:{id:l},children:Ce(d)},c]};return e.push(p,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(l,")"),mask:"url(#".concat(w,")")},G)}),{children:e,attributes:r}}function Me(n){var e=n.children,r=n.attributes,t=n.main,a=n.transform,i=n.styles,o=jn(i);if(o.length>0&&(r.style=o),Ln(a)){var s=Rn({transform:a,containerWidth:t.width,iconWidth:t.width});e.push({tag:"g",attributes:u({},s.outer),children:[{tag:"g",attributes:u({},s.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:u({},t.icon.attributes,s.path)}]}]})}else e.push(t.icon);return{children:e,attributes:r}}function Te(n){var e=n.children,r=n.main,t=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(Ln(o)&&r.found&&!t.found){var s=r.width,f=r.height,m={x:s/f/2,y:.5};a.style=jn(u({},i,{"transform-origin":"".concat(m.x+o.x/16,"em ").concat(m.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Ne(n){var e=n.prefix,r=n.iconName,t=n.children,a=n.attributes,i=n.symbol,o=i===!0?"".concat(e,"-").concat(b.familyPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u({},a,{id:o}),children:t}]}]}function je(n){var e=n.icons,r=e.main,t=e.mask,a=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,m=n.maskId,d=n.titleId,v=n.extra,I=n.watchable,E=I===void 0?!1:I,z=t.found?t:r,x=z.width,w=z.height,l=a==="fak",c=l?"":"fa-w-".concat(Math.ceil(x/w*16)),p=[b.replacementClass,i?"".concat(b.familyPrefix,"-").concat(i):"",c].filter(function(B){return v.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(v.classes).join(" "),h={children:[],attributes:u({},v.attributes,{"data-prefix":a,"data-icon":i,class:p,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(w)})},A=l&&!~v.classes.indexOf("fa-fw")?{width:"".concat(x/w*16*.0625,"em")}:{};E&&(h.attributes[de]=""),f&&h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(d||U())},children:[f]});var _=u({},h,{prefix:a,iconName:i,main:r,mask:t,maskId:m,transform:o,symbol:s,styles:u({},A,v.styles)}),M=t.found&&r.found?Ee(_):Me(_),Hn=M.children,qn=M.attributes;return _.children=Hn,_.attributes=qn,s?Ne(_):Te(_)}var dn=function(){};b.measurePerformance&&D&&D.mark&&D.measure;var K=function(e,r,t,a){var i=Object.keys(e),o=i.length,s=r,f,m,d;for(t===void 0?(f=1,d=e[i[0]]):(f=0,d=t);f<o;f++)m=i[f],d=s(d,e[m],m,e);return d};function Bn(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=r.skipHooks,a=t===void 0?!1:t,i=Object.keys(e).reduce(function(o,s){var f=e[s],m=!!f.icon;return m?o[f.iconName]=f.icon:o[s]=f,o},{});typeof O.hooks.addPack=="function"&&!a?O.hooks.addPack(n,i):O.styles[n]=u({},O.styles[n]||{},i),n==="fas"&&Bn("fa",e)}var pn=O.styles,Le=O.shims,Dn=function(){var e=function(a){return K(pn,function(i,o,s){return i[s]=K(o,a,{}),i},{})};e(function(t,a,i){return a[3]&&(t[a[3]]=i),t}),e(function(t,a,i){var o=a[2];return t[i]=i,o.forEach(function(s){t[s]=i}),t});var r="far"in pn;K(Le,function(t,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!r&&(o="fas"),t[i]={prefix:o,iconName:s},t},{})};Dn();O.styles;function hn(n,e,r){if(n&&n[e]&&n[e][r])return{prefix:e,iconName:r,icon:n[e][r]}}function Fn(n){var e=n.tag,r=n.attributes,t=r===void 0?{}:r,a=n.children,i=a===void 0?[]:a;return typeof n=="string"?Nn(n):"<".concat(e," ").concat(Pe(t),">").concat(i.map(Fn).join(""),"</").concat(e,">")}var Re=function(e){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(t,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return t.flipX=!0,t;if(o&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(o){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},r):r};function nn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}nn.prototype=Object.create(Error.prototype);nn.prototype.constructor=nn;var H={fill:"currentColor"},$n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u({},H,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var sn=u({},$n,{attributeName:"opacity"});u({},H,{cx:"256",cy:"364",r:"28"}),u({},$n,{attributeName:"r",values:"28;14;28;28;14;28;"}),u({},sn,{values:"1;0;1;1;0;1;"});u({},H,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),u({},sn,{values:"1;0;0;0;0;1;"});u({},H,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),u({},sn,{values:"0;0;1;1;0;0;"});O.styles;function vn(n){var e=n[0],r=n[1],t=n.slice(4),a=xn(t,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.familyPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:r,icon:o}}O.styles;var Be=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function De(){var n=In,e=zn,r=b.familyPrefix,t=b.replacementClass,a=Be;if(r!==n||t!==e){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(t))}return a}var Fe=function(){function n(){ae(this,n),this.definitions={}}return oe(n,[{key:"add",value:function(){for(var r=this,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){r.definitions[s]=u({},r.definitions[s]||{},o[s]),Bn(s,o[s]),Dn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,t){var a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,m=o.icon;r[s]||(r[s]={}),r[s][f]=m}),r}}]),n}();function $e(){b.autoAddCss&&!yn&&(Ae(De()),yn=!0)}function We(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(t){return Fn(t)})}}),Object.defineProperty(n,"node",{get:function(){if(rn){var t=g.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function gn(n){var e=n.prefix,r=e===void 0?"fa":e,t=n.iconName;if(t)return hn(Ye.definitions,r,t)||hn(O.styles,r,t)}function Ue(n){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(e||{}).icon?e:gn(e||{}),a=r.mask;return a&&(a=(a||{}).icon?a:gn(a||{})),n(t,u({},r,{mask:a}))}}var Ye=new Fe,yn=!1,en={transform:function(e){return Re(e)}},Xe=Ue(function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,t=r===void 0?N:r,a=e.symbol,i=a===void 0?!1:a,o=e.mask,s=o===void 0?null:o,f=e.maskId,m=f===void 0?null:f,d=e.title,v=d===void 0?null:d,I=e.titleId,E=I===void 0?null:I,z=e.classes,x=z===void 0?[]:z,w=e.attributes,l=w===void 0?{}:w,c=e.styles,p=c===void 0?{}:c;if(n){var h=n.prefix,A=n.iconName,_=n.icon;return We(u({type:"icon"},n),function(){return $e(),b.autoA11y&&(v?l["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(E||U()):(l["aria-hidden"]="true",l.focusable="false")),je({icons:{main:vn(_),mask:s?vn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:A,transform:u({},N,t),symbol:i,title:v,maskId:m,titleId:E,extra:{attributes:l,styles:p,classes:x}})})}});function bn(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function S(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?bn(Object(r),!0).forEach(function(t){y(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):bn(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Y(n){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(n)}function y(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function He(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,i;for(i=0;i<t.length;i++)a=t[i],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function qe(n,e){if(n==null)return{};var r=He(n,e),t,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wn={exports:{}};(function(n){(function(e){var r=function(l,c,p){if(!m(c)||v(c)||I(c)||E(c)||f(c))return c;var h,A=0,_=0;if(d(c))for(h=[],_=c.length;A<_;A++)h.push(r(l,c[A],p));else{h={};for(var M in c)Object.prototype.hasOwnProperty.call(c,M)&&(h[l(M,p)]=r(l,c[M],p))}return h},t=function(l,c){c=c||{};var p=c.separator||"_",h=c.split||/(?=[A-Z])/;return l.split(h).join(p)},a=function(l){return z(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(c,p){return p?p.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))},i=function(l){var c=a(l);return c.substr(0,1).toUpperCase()+c.substr(1)},o=function(l,c){return t(l,c).toLowerCase()},s=Object.prototype.toString,f=function(l){return typeof l=="function"},m=function(l){return l===Object(l)},d=function(l){return s.call(l)=="[object Array]"},v=function(l){return s.call(l)=="[object Date]"},I=function(l){return s.call(l)=="[object RegExp]"},E=function(l){return s.call(l)=="[object Boolean]"},z=function(l){return l=l-0,l===l},x=function(l,c){var p=c&&"process"in c?c.process:c;return typeof p!="function"?l:function(h,A){return p(h,l,A)}},w={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(l,c){return r(x(a,c),l)},decamelizeKeys:function(l,c){return r(x(o,c),l,c)},pascalizeKeys:function(l,c){return r(x(i,c),l)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=w:e.humps=w})(Ge)})(Wn);var Ke=Wn.exports,Ve=["class","style"];function Je(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,r){var t=r.indexOf(":"),a=Ke.camelize(r.slice(0,t)),i=r.slice(t+1).trim();return e[a]=i,e},{})}function Qe(n){return n.split(/\s+/).reduce(function(e,r){return e[r]=!0,e},{})}function Un(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var t=(n.children||[]).map(function(f){return Un(f)}),a=Object.keys(n.attributes||{}).reduce(function(f,m){var d=n.attributes[m];switch(m){case"class":f.class=Qe(d);break;case"style":f.style=Je(d);break;default:f.attrs[m]=d}return f},{attrs:{},class:{},style:{}});r.class;var i=r.style,o=i===void 0?{}:i,s=qe(r,Ve);return Kn(n.tag,S(S(S({},e),{},{class:a.class,style:S(S({},a.style),o)},a.attrs),s),t)}var Yn=!1;try{Yn=!0}catch{}function Ze(){if(!Yn&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function V(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?y({},n,e):{}}function nt(n){var e,r=(e={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip":n.flip===!0,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},y(e,"fa-".concat(n.size),n.size!==null),y(e,"fa-rotate-".concat(n.rotation),n.rotation!==null),y(e,"fa-pull-".concat(n.pull),n.pull!==null),y(e,"fa-swap-opacity",n.swapOpacity),y(e,"fa-bounce",n.bounce),y(e,"fa-shake",n.shake),y(e,"fa-beat",n.beat),y(e,"fa-fade",n.fade),y(e,"fa-beat-fade",n.beatFade),y(e,"fa-flash",n.flash),y(e,"fa-spin-pulse",n.spinPulse),y(e,"fa-spin-reverse",n.spinReverse),e);return Object.keys(r).map(function(t){return r[t]?t:null}).filter(function(t){return t})}function wn(n){if(n&&Y(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(en.icon)return en.icon(n);if(n===null)return null;if(Y(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var et=kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,r){var t=r.attrs,a=T(function(){return wn(e.icon)}),i=T(function(){return V("classes",nt(e))}),o=T(function(){return V("transform",typeof e.transform=="string"?en.transform(e.transform):e.transform)}),s=T(function(){return V("mask",wn(e.mask))}),f=T(function(){return Xe(a.value,S(S(S(S({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});Gn(f,function(d){if(!d)return Ze("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var m=T(function(){return f.value?Un(f.value.abstract[0],{},t):null});return function(){return m.value}}});const Xn=kn({name:"N8nIcon",__name:"Icon",props:{icon:{},size:{default:"medium"},spin:{default:!1},color:{}},setup(n){return(e,r)=>(Vn(),Jn(ln(te),ee({size:e.size,color:e.color,compact:!0,class:"n8n-icon"},e.$attrs),{default:Qn(()=>[Zn(ln(et),{icon:e.icon,spin:e.spin,class:ne(e.$style[e.size])},null,8,["icon","spin","class"])]),_:1},16,["size","color"]))}}),tt="_xlarge_1pnjy_1",rt="_large_1pnjy_5",at="_medium_1pnjy_9",it="_small_1pnjy_13",ot="_xsmall_1pnjy_17",st={xlarge:tt,large:rt,medium:at,small:it,xsmall:ot},lt={$style:st},mt=re(Xn,[["__cssModules",lt]]);Xn.__docgenInfo={name:"N8nIcon",exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"icon",required:!0,type:{name:"TSIndexedAccessType"}},{name:"size",required:!1,type:{name:"IconSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"spin",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}},{name:"color",required:!1,type:{name:"IconColor"}}],sourceFiles:["/home/runner/work/n8n-storybook/n8n-storybook/packages/design-system/src/components/N8nIcon/Icon.vue"]};export{et as F,mt as N,Ye as l};
