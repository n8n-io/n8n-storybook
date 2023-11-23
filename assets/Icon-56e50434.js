import{f as xn,G as N,w as Kn,h as Vn,g as ln,o as Jn,j as Qn,y as Zn,m as ne,x as ee,n as te}from"./vue.esm-bundler-3aad6c04.js";import{N as re}from"./Text-c7071bfc.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function L(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(e){return typeof e}:L=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(n)}function ie(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function fn(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function oe(n,e,r){return e&&fn(n.prototype,e),r&&fn(n,r),n}function se(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function u(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),t.forEach(function(a){se(n,a,r[a])})}return n}function _n(n,e){return le(n)||fe(n,e)||ce()}function le(n){if(Array.isArray(n))return n}function fe(n,e){var r=[],t=!0,a=!1,i=void 0;try{for(var o=n[Symbol.iterator](),s;!(t=(s=o.next()).done)&&(r.push(s.value),!(e&&r.length===e));t=!0);}catch(f){a=!0,i=f}finally{try{!t&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}function ce(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var cn=function(){},tn={},On={},ue=null,In={mark:cn,measure:cn};try{typeof window<"u"&&(tn=window),typeof document<"u"&&(On=document),typeof MutationObserver<"u"&&(ue=MutationObserver),typeof performance<"u"&&(In=performance)}catch{}var de=tn.navigator||{},un=de.userAgent,dn=un===void 0?"":un,X=tn,v=On,D=In;X.document;var rn=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function";~dn.indexOf("MSIE")||~dn.indexOf("Trident/");var P="___FONT_AWESOME___",zn="fa",An="svg-inline--fa",me="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var G={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sn=X.FontAwesomeConfig||{};function pe(n){var e=v.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function he(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(v&&typeof v.querySelector=="function"){var ge=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ge.forEach(function(n){var e=_n(n,2),r=e[0],t=e[1],a=he(pe(r));a!=null&&(Sn[t]=a)})}var ve={familyPrefix:zn,replacementClass:An,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},J=u({},ve,Sn);J.autoReplaceSvg||(J.observeMutations=!1);var b=u({},J);X.FontAwesomeConfig=b;var C=X||{};C[P]||(C[P]={});C[P].styles||(C[P].styles={});C[P].hooks||(C[P].hooks={});C[P].shims||(C[P].shims=[]);var O=C[P],ye=[],be=function n(){v.removeEventListener("DOMContentLoaded",n),Q=1,ye.map(function(e){return e()})},Q=!1;rn&&(Q=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),Q||v.addEventListener("DOMContentLoaded",be));var an="pending",Pn="settled",$="fulfilled",F="rejected",we=function(){},Cn=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",ke=typeof setImmediate>"u"?setTimeout:setImmediate,j=[],Z;function xe(){for(var n=0;n<j.length;n++)j[n][0](j[n][1]);j=[],Z=!1}function W(n,e){j.push([n,e]),Z||(Z=!0,ke(xe,0))}function _e(n,e){function r(a){on(e,a)}function t(a){R(e,a)}try{n(r,t)}catch(a){t(a)}}function En(n){var e=n.owner,r=e._state,t=e._data,a=n[r],i=n.then;if(typeof a=="function"){r=$;try{t=a(t)}catch(o){R(i,o)}}Mn(i,t)||(r===$&&on(i,t),r===F&&R(i,t))}function Mn(n,e){var r;try{if(n===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||L(e)==="object")){var t=e.then;if(typeof t=="function")return t.call(e,function(a){r||(r=!0,e===a?Nn(n,a):on(n,a))},function(a){r||(r=!0,R(n,a))}),!0}}catch(a){return r||R(n,a),!0}return!1}function on(n,e){(n===e||!Mn(n,e))&&Nn(n,e)}function Nn(n,e){n._state===an&&(n._state=Pn,n._data=e,W(Oe,n))}function R(n,e){n._state===an&&(n._state=Pn,n._data=e,W(Ie,n))}function Tn(n){n._then=n._then.forEach(En)}function Oe(n){n._state=$,Tn(n)}function Ie(n){n._state=F,Tn(n),!n._handled&&Cn&&global.process.emit("unhandledRejection",n._data,n)}function ze(n){global.process.emit("rejectionHandled",n)}function k(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof k))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],_e(n,this)}k.prototype={constructor:k,_state:an,_then:null,_data:void 0,_handled:!1,then:function(e,r){var t={owner:this,then:new this.constructor(we),fulfilled:e,rejected:r};return(r||e)&&!this._handled&&(this._handled=!0,this._state===F&&Cn&&W(ze,this)),this._state===$||this._state===F?W(En,t):this._then.push(t),t.then},catch:function(e){return this.then(null,e)}};k.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new k(function(e,r){var t=[],a=0;function i(f){return a++,function(d){t[f]=d,--a||e(t)}}for(var o=0,s;o<n.length;o++)s=n[o],s&&typeof s.then=="function"?s.then(i(o),r):t[o]=s;a||e(t)})};k.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new k(function(e,r){for(var t=0,a;t<n.length;t++)a=n[t],a&&typeof a.then=="function"?a.then(e,r):e(a)})};k.resolve=function(n){return n&&L(n)==="object"&&n.constructor===k?n:new k(function(e){e(n)})};k.reject=function(n){return new k(function(e,r){r(n)})};var T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ae(n){if(!(!n||!rn)){var e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;for(var r=v.head.childNodes,t=null,a=r.length-1;a>-1;a--){var i=r[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(t=i)}return v.head.insertBefore(e,t),n}}var Se="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){for(var n=12,e="";n-- >0;)e+=Se[Math.random()*62|0];return e}function jn(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pe(n){return Object.keys(n||{}).reduce(function(e,r){return e+"".concat(r,'="').concat(jn(n[r]),'" ')},"").trim()}function Ln(n){return Object.keys(n||{}).reduce(function(e,r){return e+"".concat(r,": ").concat(n[r],";")},"")}function Rn(n){return n.size!==T.size||n.x!==T.x||n.y!==T.y||n.rotate!==T.rotate||n.flipX||n.flipY}function Bn(n){var e=n.transform,r=n.containerWidth,t=n.iconWidth,a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},d={transform:"translate(".concat(t/2*-1," -256)")};return{outer:a,inner:f,path:d}}var q={x:0,y:0,width:"100%",height:"100%"};function mn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function Ce(n){return n.tag==="g"?n.children:[n]}function Ee(n){var e=n.children,r=n.attributes,t=n.main,a=n.mask,i=n.maskId,o=n.transform,s=t.width,f=t.icon,d=a.width,m=a.icon,g=Bn({transform:o,containerWidth:d,iconWidth:s}),I={tag:"rect",attributes:u({},q,{fill:"white"})},E=f.children?{children:f.children.map(mn)}:{},z={tag:"g",attributes:u({},g.inner),children:[mn(u({tag:f.tag,attributes:u({},f.attributes,g.path)},E))]},x={tag:"g",attributes:u({},g.outer),children:[z]},w="mask-".concat(i||U()),l="clip-".concat(i||U()),c={tag:"mask",attributes:u({},q,{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,x]},p={tag:"defs",children:[{tag:"clipPath",attributes:{id:l},children:Ce(m)},c]};return e.push(p,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(l,")"),mask:"url(#".concat(w,")")},q)}),{children:e,attributes:r}}function Me(n){var e=n.children,r=n.attributes,t=n.main,a=n.transform,i=n.styles,o=Ln(i);if(o.length>0&&(r.style=o),Rn(a)){var s=Bn({transform:a,containerWidth:t.width,iconWidth:t.width});e.push({tag:"g",attributes:u({},s.outer),children:[{tag:"g",attributes:u({},s.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:u({},t.icon.attributes,s.path)}]}]})}else e.push(t.icon);return{children:e,attributes:r}}function Ne(n){var e=n.children,r=n.main,t=n.mask,a=n.attributes,i=n.styles,o=n.transform;if(Rn(o)&&r.found&&!t.found){var s=r.width,f=r.height,d={x:s/f/2,y:.5};a.style=Ln(u({},i,{"transform-origin":"".concat(d.x+o.x/16,"em ").concat(d.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Te(n){var e=n.prefix,r=n.iconName,t=n.children,a=n.attributes,i=n.symbol,o=i===!0?"".concat(e,"-").concat(b.familyPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u({},a,{id:o}),children:t}]}]}function je(n){var e=n.icons,r=e.main,t=e.mask,a=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,d=n.maskId,m=n.titleId,g=n.extra,I=n.watchable,E=I===void 0?!1:I,z=t.found?t:r,x=z.width,w=z.height,l=a==="fak",c=l?"":"fa-w-".concat(Math.ceil(x/w*16)),p=[b.replacementClass,i?"".concat(b.familyPrefix,"-").concat(i):"",c].filter(function(B){return g.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(g.classes).join(" "),h={children:[],attributes:u({},g.attributes,{"data-prefix":a,"data-icon":i,class:p,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(w)})},A=l&&!~g.classes.indexOf("fa-fw")?{width:"".concat(x/w*16*.0625,"em")}:{};E&&(h.attributes[me]=""),f&&h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(m||U())},children:[f]});var _=u({},h,{prefix:a,iconName:i,main:r,mask:t,maskId:d,transform:o,symbol:s,styles:u({},A,g.styles)}),M=t.found&&r.found?Ee(_):Me(_),Gn=M.children,qn=M.attributes;return _.children=Gn,_.attributes=qn,s?Te(_):Ne(_)}var pn=function(){};b.measurePerformance&&D&&D.mark&&D.measure;var Le=function(e,r){return function(t,a,i,o){return e.call(r,t,a,i,o)}},K=function(e,r,t,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Le(r,a):r,f,d,m;for(t===void 0?(f=1,m=e[i[0]]):(f=0,m=t);f<o;f++)d=i[f],m=s(m,e[d],d,e);return m};function Dn(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=r.skipHooks,a=t===void 0?!1:t,i=Object.keys(e).reduce(function(o,s){var f=e[s],d=!!f.icon;return d?o[f.iconName]=f.icon:o[s]=f,o},{});typeof O.hooks.addPack=="function"&&!a?O.hooks.addPack(n,i):O.styles[n]=u({},O.styles[n]||{},i),n==="fas"&&Dn("fa",e)}var hn=O.styles,Re=O.shims,$n=function(){var e=function(a){return K(hn,function(i,o,s){return i[s]=K(o,a,{}),i},{})};e(function(t,a,i){return a[3]&&(t[a[3]]=i),t}),e(function(t,a,i){var o=a[2];return t[i]=i,o.forEach(function(s){t[s]=i}),t});var r="far"in hn;K(Re,function(t,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!r&&(o="fas"),t[i]={prefix:o,iconName:s},t},{})};$n();O.styles;function gn(n,e,r){if(n&&n[e]&&n[e][r])return{prefix:e,iconName:r,icon:n[e][r]}}function Fn(n){var e=n.tag,r=n.attributes,t=r===void 0?{}:r,a=n.children,i=a===void 0?[]:a;return typeof n=="string"?jn(n):"<".concat(e," ").concat(Pe(t),">").concat(i.map(Fn).join(""),"</").concat(e,">")}var Be=function(e){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(t,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return t.flipX=!0,t;if(o&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(o){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},r):r};function nn(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}nn.prototype=Object.create(Error.prototype);nn.prototype.constructor=nn;var H={fill:"currentColor"},Wn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u({},H,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var sn=u({},Wn,{attributeName:"opacity"});u({},H,{cx:"256",cy:"364",r:"28"}),u({},Wn,{attributeName:"r",values:"28;14;28;28;14;28;"}),u({},sn,{values:"1;0;1;1;0;1;"});u({},H,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),u({},sn,{values:"1;0;0;0;0;1;"});u({},H,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),u({},sn,{values:"0;0;1;1;0;0;"});O.styles;function vn(n){var e=n[0],r=n[1],t=n.slice(4),a=_n(t,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.familyPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.familyPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:r,icon:o}}O.styles;var De=`svg:not(:root).svg-inline--fa {
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
}`;function $e(){var n=zn,e=An,r=b.familyPrefix,t=b.replacementClass,a=De;if(r!==n||t!==e){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(t))}return a}var Fe=function(){function n(){ie(this,n),this.definitions={}}return oe(n,[{key:"add",value:function(){for(var r=this,t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){r.definitions[s]=u({},r.definitions[s]||{},o[s]),Dn(s,o[s]),$n()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,t){var a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,d=o.icon;r[s]||(r[s]={}),r[s][f]=d}),r}}]),n}();function We(){b.autoAddCss&&!bn&&(Ae($e()),bn=!0)}function Ue(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(t){return Fn(t)})}}),Object.defineProperty(n,"node",{get:function(){if(rn){var t=v.createElement("div");return t.innerHTML=n.html,t.children}}}),n}function yn(n){var e=n.prefix,r=e===void 0?"fa":e,t=n.iconName;if(t)return gn(Xe.definitions,r,t)||gn(O.styles,r,t)}function Ye(n){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(e||{}).icon?e:yn(e||{}),a=r.mask;return a&&(a=(a||{}).icon?a:yn(a||{})),n(t,u({},r,{mask:a}))}}var Xe=new Fe,bn=!1,en={transform:function(e){return Be(e)}},He=Ye(function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,t=r===void 0?T:r,a=e.symbol,i=a===void 0?!1:a,o=e.mask,s=o===void 0?null:o,f=e.maskId,d=f===void 0?null:f,m=e.title,g=m===void 0?null:m,I=e.titleId,E=I===void 0?null:I,z=e.classes,x=z===void 0?[]:z,w=e.attributes,l=w===void 0?{}:w,c=e.styles,p=c===void 0?{}:c;if(n){var h=n.prefix,A=n.iconName,_=n.icon;return Ue(u({type:"icon"},n),function(){return We(),b.autoA11y&&(g?l["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(E||U()):(l["aria-hidden"]="true",l.focusable="false")),je({icons:{main:vn(_),mask:s?vn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:A,transform:u({},T,t),symbol:i,title:g,maskId:d,titleId:E,extra:{attributes:l,styles:p,classes:x}})})}});function wn(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,t)}return r}function S(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?wn(Object(r),!0).forEach(function(t){y(n,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):wn(Object(r)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))})}return n}function Y(n){"@babel/helpers - typeof";return Y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(n)}function y(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Ge(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,i;for(i=0;i<t.length;i++)a=t[i],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}function qe(n,e){if(n==null)return{};var r=Ge(n,e),t,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var Ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Un={exports:{}};(function(n){(function(e){var r=function(l,c,p){if(!d(c)||g(c)||I(c)||E(c)||f(c))return c;var h,A=0,_=0;if(m(c))for(h=[],_=c.length;A<_;A++)h.push(r(l,c[A],p));else{h={};for(var M in c)Object.prototype.hasOwnProperty.call(c,M)&&(h[l(M,p)]=r(l,c[M],p))}return h},t=function(l,c){c=c||{};var p=c.separator||"_",h=c.split||/(?=[A-Z])/;return l.split(h).join(p)},a=function(l){return z(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(c,p){return p?p.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))},i=function(l){var c=a(l);return c.substr(0,1).toUpperCase()+c.substr(1)},o=function(l,c){return t(l,c).toLowerCase()},s=Object.prototype.toString,f=function(l){return typeof l=="function"},d=function(l){return l===Object(l)},m=function(l){return s.call(l)=="[object Array]"},g=function(l){return s.call(l)=="[object Date]"},I=function(l){return s.call(l)=="[object RegExp]"},E=function(l){return s.call(l)=="[object Boolean]"},z=function(l){return l=l-0,l===l},x=function(l,c){var p=c&&"process"in c?c.process:c;return typeof p!="function"?l:function(h,A){return p(h,l,A)}},w={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(l,c){return r(x(a,c),l)},decamelizeKeys:function(l,c){return r(x(o,c),l,c)},pascalizeKeys:function(l,c){return r(x(i,c),l)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=w:e.humps=w})(Ke)})(Un);var Ve=Un.exports,Je=["class","style"];function Qe(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,r){var t=r.indexOf(":"),a=Ve.camelize(r.slice(0,t)),i=r.slice(t+1).trim();return e[a]=i,e},{})}function Ze(n){return n.split(/\s+/).reduce(function(e,r){return e[r]=!0,e},{})}function Yn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var t=(n.children||[]).map(function(f){return Yn(f)}),a=Object.keys(n.attributes||{}).reduce(function(f,d){var m=n.attributes[d];switch(d){case"class":f.class=Ze(m);break;case"style":f.style=Qe(m);break;default:f.attrs[d]=m}return f},{attrs:{},class:{},style:{}});r.class;var i=r.style,o=i===void 0?{}:i,s=qe(r,Je);return Vn(n.tag,S(S(S({},e),{},{class:a.class,style:S(S({},a.style),o)},a.attrs),s),t)}var Xn=!1;try{Xn=!0}catch{}function nt(){if(!Xn&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function V(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?y({},n,e):{}}function et(n){var e,r=(e={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip":n.flip===!0,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},y(e,"fa-".concat(n.size),n.size!==null),y(e,"fa-rotate-".concat(n.rotation),n.rotation!==null),y(e,"fa-pull-".concat(n.pull),n.pull!==null),y(e,"fa-swap-opacity",n.swapOpacity),y(e,"fa-bounce",n.bounce),y(e,"fa-shake",n.shake),y(e,"fa-beat",n.beat),y(e,"fa-fade",n.fade),y(e,"fa-beat-fade",n.beatFade),y(e,"fa-flash",n.flash),y(e,"fa-spin-pulse",n.spinPulse),y(e,"fa-spin-reverse",n.spinReverse),e);return Object.keys(r).map(function(t){return r[t]?t:null}).filter(function(t){return t})}function kn(n){if(n&&Y(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(en.icon)return en.icon(n);if(n===null)return null;if(Y(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var tt=xn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,r){var t=r.attrs,a=N(function(){return kn(e.icon)}),i=N(function(){return V("classes",et(e))}),o=N(function(){return V("transform",typeof e.transform=="string"?en.transform(e.transform):e.transform)}),s=N(function(){return V("mask",kn(e.mask))}),f=N(function(){return He(a.value,S(S(S(S({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});Kn(f,function(m){if(!m)return nt("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var d=N(function(){return f.value?Yn(f.value.abstract[0],{},t):null});return function(){return d.value}}});const Hn=xn({name:"n8n-icon",components:{FontAwesomeIcon:tt,N8nText:re},props:{icon:{required:!0},size:{type:String,default:"medium"},spin:{type:Boolean,default:!1},color:{type:String}}}),rt="_xlarge_1pnjy_1",at="_large_1pnjy_5",it="_medium_1pnjy_9",ot="_small_1pnjy_13",st="_xsmall_1pnjy_17",lt={xlarge:rt,large:at,medium:it,small:ot,xsmall:st};function ft(n,e,r,t,a,i){const o=ln("font-awesome-icon"),s=ln("n8n-text");return Jn(),Qn(s,ne({size:n.size,color:n.color,compact:!0,class:"n8n-icon"},n.$attrs),{default:Zn(()=>[ee(o,{icon:n.icon,spin:n.spin,class:te(n.$style[n.size])},null,8,["icon","spin","class"])]),_:1},16,["size","color"])}const ct={$style:lt},pt=ae(Hn,[["render",ft],["__cssModules",ct]]);Hn.__docgenInfo={displayName:"n8n-icon",exportName:"default",description:"",tags:{},props:[{name:"icon",required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}},{name:"spin",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"string"}}]};export{tt as F,pt as N,Xe as l};
//# sourceMappingURL=Icon-56e50434.js.map
