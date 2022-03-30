var F={exports:{}},H={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ed=Object.getOwnPropertySymbols,OE=Object.prototype.hasOwnProperty,PE=Object.prototype.propertyIsEnumerable;function xE(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function DE(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var _d=DE()?Object.assign:function(t,e){for(var n,r=xE(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)OE.call(n,o)&&(r[o]=n[o]);if(Ed){i=Ed(n);for(var a=0;a<i.length;a++)PE.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ql=_d,dr=60103,Id=60106;H.Fragment=60107;H.StrictMode=60108;H.Profiler=60114;var Td=60109,Sd=60110,kd=60112;H.Suspense=60113;var Cd=60115,Rd=60116;if(typeof Symbol=="function"&&Symbol.for){var ft=Symbol.for;dr=ft("react.element"),Id=ft("react.portal"),H.Fragment=ft("react.fragment"),H.StrictMode=ft("react.strict_mode"),H.Profiler=ft("react.profiler"),Td=ft("react.provider"),Sd=ft("react.context"),kd=ft("react.forward_ref"),H.Suspense=ft("react.suspense"),Cd=ft("react.memo"),Rd=ft("react.lazy")}var Ad=typeof Symbol=="function"&&Symbol.iterator;function LE(t){return t===null||typeof t!="object"?null:(t=Ad&&t[Ad]||t["@@iterator"],typeof t=="function"?t:null)}function _i(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Od={};function pr(t,e,n){this.props=t,this.context=e,this.refs=Od,this.updater=n||Nd}pr.prototype.isReactComponent={};pr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(_i(85));this.updater.enqueueSetState(this,t,e,"setState")};pr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pd(){}Pd.prototype=pr.prototype;function Yl(t,e,n){this.props=t,this.context=e,this.refs=Od,this.updater=n||Nd}var Xl=Yl.prototype=new Pd;Xl.constructor=Yl;Ql(Xl,pr.prototype);Xl.isPureReactComponent=!0;var Jl={current:null},xd=Object.prototype.hasOwnProperty,Dd={key:!0,ref:!0,__self:!0,__source:!0};function Ld(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xd.call(e,r)&&!Dd.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:dr,type:t,key:s,ref:o,props:i,_owner:Jl.current}}function ME(t,e){return{$$typeof:dr,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zl(t){return typeof t=="object"&&t!==null&&t.$$typeof===dr}function $E(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Md=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$E(""+t.key):e.toString(36)}function vo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case dr:case Id:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eu(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Md,"$&/")+"/"),vo(i,e,n,"",function(u){return u})):i!=null&&(Zl(i)&&(i=ME(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Md,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+eu(s,a);o+=vo(s,e,n,l,i)}else if(l=LE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+eu(s,a++),o+=vo(s,e,n,l,i);else if(s==="object")throw e=""+t,Error(_i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function wo(t,e,n){if(t==null)return t;var r=[],i=0;return vo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bE(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var $d={current:null};function Ot(){var t=$d.current;if(t===null)throw Error(_i(321));return t}var UE={ReactCurrentDispatcher:$d,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Jl,IsSomeRendererActing:{current:!1},assign:Ql};H.Children={map:wo,forEach:function(t,e,n){wo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wo(t,function(){e++}),e},toArray:function(t){return wo(t,function(e){return e})||[]},only:function(t){if(!Zl(t))throw Error(_i(143));return t}};H.Component=pr;H.PureComponent=Yl;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE;H.cloneElement=function(t,e,n){if(t==null)throw Error(_i(267,t));var r=Ql({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xd.call(e,l)&&!Dd.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:dr,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Sd,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Td,_context:t},t.Consumer=t};H.createElement=Ld;H.createFactory=function(t){var e=Ld.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:kd,render:t}};H.isValidElement=Zl;H.lazy=function(t){return{$$typeof:Rd,_payload:{_status:-1,_result:t},_init:bE}};H.memo=function(t,e){return{$$typeof:Cd,type:t,compare:e===void 0?null:e}};H.useCallback=function(t,e){return Ot().useCallback(t,e)};H.useContext=function(t,e){return Ot().useContext(t,e)};H.useDebugValue=function(){};H.useEffect=function(t,e){return Ot().useEffect(t,e)};H.useImperativeHandle=function(t,e,n){return Ot().useImperativeHandle(t,e,n)};H.useLayoutEffect=function(t,e){return Ot().useLayoutEffect(t,e)};H.useMemo=function(t,e){return Ot().useMemo(t,e)};H.useReducer=function(t,e,n){return Ot().useReducer(t,e,n)};H.useRef=function(t){return Ot().useRef(t)};H.useState=function(t){return Ot().useState(t)};H.version="17.0.2";F.exports=H;var HP=F.exports,bd={exports:{}},rt={},Ud={exports:{}},Fd={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,c=function(){if(l!==null)try{var k=t.unstable_now();l(!0,k),l=null}catch(b){throw setTimeout(c,0),b}};e=function(k){l!==null?setTimeout(e,0,k):(l=k,setTimeout(c,0))},n=function(k,b){u=setTimeout(k,b)},r=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var w=!1,E=null,h=-1,f=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<k?Math.floor(1e3/k):5};var v=new MessageChannel,y=v.port2;v.port1.onmessage=function(){if(E!==null){var k=t.unstable_now();m=k+f;try{E(!0,k)?y.postMessage(null):(w=!1,E=null)}catch(b){throw y.postMessage(null),b}}else w=!1},e=function(k){E=k,w||(w=!0,y.postMessage(null))},n=function(k,b){h=p(function(){k(t.unstable_now())},b)},r=function(){d(h),h=-1}}function R(k,b){var B=k.length;k.push(b);e:for(;;){var ie=B-1>>>1,we=k[ie];if(we!==void 0&&0<L(we,b))k[ie]=b,k[B]=we,B=ie;else break e}}function T(k){return k=k[0],k===void 0?null:k}function O(k){var b=k[0];if(b!==void 0){var B=k.pop();if(B!==b){k[0]=B;e:for(var ie=0,we=k.length;ie<we;){var kn=2*(ie+1)-1,Cn=k[kn],Ei=kn+1,fr=k[Ei];if(Cn!==void 0&&0>L(Cn,B))fr!==void 0&&0>L(fr,Cn)?(k[ie]=fr,k[Ei]=B,ie=Ei):(k[ie]=Cn,k[kn]=B,ie=kn);else if(fr!==void 0&&0>L(fr,B))k[ie]=fr,k[Ei]=B,ie=Ei;else break e}}return b}return null}function L(k,b){var B=k.sortIndex-b.sortIndex;return B!==0?B:k.id-b.id}var P=[],ue=[],Hl=1,nt=null,Ne=3,yo=!1,Sn=!1,wi=!1;function Wl(k){for(var b=T(ue);b!==null;){if(b.callback===null)O(ue);else if(b.startTime<=k)O(ue),b.sortIndex=b.expirationTime,R(P,b);else break;b=T(ue)}}function Kl(k){if(wi=!1,Wl(k),!Sn)if(T(P)!==null)Sn=!0,e(Gl);else{var b=T(ue);b!==null&&n(Kl,b.startTime-k)}}function Gl(k,b){Sn=!1,wi&&(wi=!1,r()),yo=!0;var B=Ne;try{for(Wl(b),nt=T(P);nt!==null&&(!(nt.expirationTime>b)||k&&!t.unstable_shouldYield());){var ie=nt.callback;if(typeof ie=="function"){nt.callback=null,Ne=nt.priorityLevel;var we=ie(nt.expirationTime<=b);b=t.unstable_now(),typeof we=="function"?nt.callback=we:nt===T(P)&&O(P),Wl(b)}else O(P);nt=T(P)}if(nt!==null)var kn=!0;else{var Cn=T(ue);Cn!==null&&n(Kl,Cn.startTime-b),kn=!1}return kn}finally{nt=null,Ne=B,yo=!1}}var NE=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){Sn||yo||(Sn=!0,e(Gl))},t.unstable_getCurrentPriorityLevel=function(){return Ne},t.unstable_getFirstCallbackNode=function(){return T(P)},t.unstable_next=function(k){switch(Ne){case 1:case 2:case 3:var b=3;break;default:b=Ne}var B=Ne;Ne=b;try{return k()}finally{Ne=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=NE,t.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var B=Ne;Ne=k;try{return b()}finally{Ne=B}},t.unstable_scheduleCallback=function(k,b,B){var ie=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ie+B:ie):B=ie,k){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=B+we,k={id:Hl++,callback:b,priorityLevel:k,startTime:B,expirationTime:we,sortIndex:-1},B>ie?(k.sortIndex=B,R(ue,k),T(P)===null&&k===T(ue)&&(wi?r():wi=!0,n(Kl,B-ie))):(k.sortIndex=we,R(P,k),Sn||yo||(Sn=!0,e(Gl))),k},t.unstable_wrapCallback=function(k){var b=Ne;return function(){var B=Ne;Ne=b;try{return k.apply(this,arguments)}finally{Ne=B}}}})(Fd);Ud.exports=Fd;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=F.exports,ee=_d,fe=Ud.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Eo)throw Error(I(227));var Vd=new Set,Ii={};function Rn(t,e){mr(t,e),mr(t+"Capture",e)}function mr(t,e){for(Ii[t]=e,t=0;t<e.length;t++)Vd.add(e[t])}var Pt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),FE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd=Object.prototype.hasOwnProperty,Bd={},zd={};function VE(t){return jd.call(zd,t)?!0:jd.call(Bd,t)?!1:FE.test(t)?zd[t]=!0:(Bd[t]=!0,!1)}function jE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BE(t,e,n,r){if(e===null||typeof e=="undefined"||jE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var tu=/[\-:]([a-z])/g;function nu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tu,nu);Ee[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tu,nu);Ee[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tu,nu);Ee[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function ru(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(BE(e,n,i,r)&&(n=null),r||i===null?VE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=Eo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ti=60103,Nn=60106,zt=60107,iu=60108,Si=60114,su=60109,ou=60110,_o=60112,ki=60113,Io=60120,To=60115,au=60116,lu=60121,uu=60128,qd=60129,cu=60130,hu=60131;if(typeof Symbol=="function"&&Symbol.for){var de=Symbol.for;Ti=de("react.element"),Nn=de("react.portal"),zt=de("react.fragment"),iu=de("react.strict_mode"),Si=de("react.profiler"),su=de("react.provider"),ou=de("react.context"),_o=de("react.forward_ref"),ki=de("react.suspense"),Io=de("react.suspense_list"),To=de("react.memo"),au=de("react.lazy"),lu=de("react.block"),de("react.scope"),uu=de("react.opaque.id"),qd=de("react.debug_trace_mode"),cu=de("react.offscreen"),hu=de("react.legacy_hidden")}var Hd=typeof Symbol=="function"&&Symbol.iterator;function Ci(t){return t===null||typeof t!="object"?null:(t=Hd&&t[Hd]||t["@@iterator"],typeof t=="function"?t:null)}var fu;function Ri(t){if(fu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fu=e&&e[1]||""}return`
`+fu+t}var du=!1;function So(t,e){if(!t||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ri(t):""}function zE(t){switch(t.tag){case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return t=So(t.type,!1),t;case 11:return t=So(t.type.render,!1),t;case 22:return t=So(t.type._render,!1),t;case 1:return t=So(t.type,!0),t;default:return""}}function gr(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zt:return"Fragment";case Nn:return"Portal";case Si:return"Profiler";case iu:return"StrictMode";case ki:return"Suspense";case Io:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ou:return(t.displayName||"Context")+".Consumer";case su:return(t._context.displayName||"Context")+".Provider";case _o:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case To:return gr(t.type);case lu:return gr(t._render);case au:e=t._payload,t=t._init;try{return gr(t(e))}catch{}}return null}function qt(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Wd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qE(t){var e=Wd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=qE(t))}function Kd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function pu(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Gd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qd(t,e){e=e.checked,e!=null&&ru(t,"checked",e,!1)}function mu(t,e){Qd(t,e);var n=qt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&gu(t,e.type,qt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gu(t,e,n){(e!=="number"||Co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function HE(t){var e="";return Eo.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function yu(t,e){return t=ee({children:void 0},e),(e=HE(e.children))&&(t.children=e),t}function yr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qt(n)}}function Jd(t,e){var n=qt(e.value),r=qt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var wu={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function ep(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ep(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,tp=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==wu.svg||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ai(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ni={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WE=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(t){WE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ni[e]=Ni[t]})});function np(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ni.hasOwnProperty(t)&&Ni[t]?(""+e).trim():e+"px"}function rp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=np(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KE=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(KE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Tu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Su=null,vr=null,wr=null;function ip(t){if(t=Gi(t)){if(typeof Su!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ho(e),Su(t.stateNode,t.type,e))}}function sp(t){vr?wr?wr.push(t):wr=[t]:vr=t}function op(){if(vr){var t=vr,e=wr;if(wr=vr=null,ip(t),e)for(t=0;t<e.length;t++)ip(e[t])}}function ku(t,e){return t(e)}function ap(t,e,n,r,i){return t(e,n,r,i)}function Cu(){}var lp=ku,On=!1,Ru=!1;function Au(){(vr!==null||wr!==null)&&(Cu(),op())}function GE(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return lp(t,e,n)}finally{Ru=!1,Au()}}function Oi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Nu=!1;if(Pt)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Nu=!1}function QE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xi=!1,Ao=null,No=!1,Ou=null,YE={onError:function(t){xi=!0,Ao=t}};function XE(t,e,n,r,i,s,o,a,l){xi=!1,Ao=null,QE.apply(YE,arguments)}function JE(t,e,n,r,i,s,o,a,l){if(XE.apply(this,arguments),xi){if(xi){var u=Ao;xi=!1,Ao=null}else throw Error(I(198));No||(No=!0,Ou=u)}}function Pn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function up(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cp(t){if(Pn(t)!==t)throw Error(I(188))}function ZE(t){var e=t.alternate;if(!e){if(e=Pn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cp(i),t;if(s===r)return cp(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function hp(t){if(t=ZE(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function fp(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var dp,Pu,pp,mp,xu=!1,yt=[],Ht=null,Wt=null,Kt=null,Di=new Map,Li=new Map,Mi=[],gp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Du(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function yp(t,e){switch(t){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":Di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(e.pointerId)}}function $i(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Du(e,n,r,i,s),e!==null&&(e=Gi(e),e!==null&&Pu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function e1(t,e,n,r,i){switch(e){case"focusin":return Ht=$i(Ht,t,e,n,r,i),!0;case"dragenter":return Wt=$i(Wt,t,e,n,r,i),!0;case"mouseover":return Kt=$i(Kt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Di.set(s,$i(Di.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Li.set(s,$i(Li.get(s)||null,t,e,n,r,i)),!0}return!1}function t1(t){var e=xn(t.target);if(e!==null){var n=Pn(e);if(n!==null){if(e=n.tag,e===13){if(e=up(n),e!==null){t.blockedOn=e,mp(t.lanePriority,function(){fe.unstable_runWithPriority(t.priority,function(){pp(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Gi(n),e!==null&&Pu(e),t.blockedOn=n,!1;e.shift()}return!0}function vp(t,e,n){Oo(t)&&n.delete(e)}function n1(){for(xu=!1;0<yt.length;){var t=yt[0];if(t.blockedOn!==null){t=Gi(t.blockedOn),t!==null&&dp(t);break}for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&yt.shift()}Ht!==null&&Oo(Ht)&&(Ht=null),Wt!==null&&Oo(Wt)&&(Wt=null),Kt!==null&&Oo(Kt)&&(Kt=null),Di.forEach(vp),Li.forEach(vp)}function bi(t,e){t.blockedOn===e&&(t.blockedOn=null,xu||(xu=!0,fe.unstable_scheduleCallback(fe.unstable_NormalPriority,n1)))}function wp(t){function e(i){return bi(i,t)}if(0<yt.length){bi(yt[0],t);for(var n=1;n<yt.length;n++){var r=yt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ht!==null&&bi(Ht,t),Wt!==null&&bi(Wt,t),Kt!==null&&bi(Kt,t),Di.forEach(e),Li.forEach(e),n=0;n<Mi.length;n++)r=Mi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mi.length&&(n=Mi[0],n.blockedOn===null);)t1(n),n.blockedOn===null&&Mi.shift()}function Po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Er={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},Lu={},Ep={};Pt&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function xo(t){if(Lu[t])return Lu[t];if(!Er[t])return t;var e=Er[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ep)return Lu[t]=e[n];return t}var _p=xo("animationend"),Ip=xo("animationiteration"),Tp=xo("animationstart"),Sp=xo("transitionend"),kp=new Map,Mu=new Map,r1=["abort","abort",_p,"animationEnd",Ip,"animationIteration",Tp,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Sp,"transitionEnd","waiting","waiting"];function $u(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Mu.set(r,e),kp.set(r,i),Rn(i,[r])}}var i1=fe.unstable_now;i1();var G=8;function _r(t){if((1&t)!=0)return G=15,1;if((2&t)!=0)return G=14,2;if((4&t)!=0)return G=13,4;var e=24&t;return e!==0?(G=12,e):(t&32)!=0?(G=11,32):(e=192&t,e!==0?(G=10,e):(t&256)!=0?(G=9,256):(e=3584&t,e!==0?(G=8,e):(t&4096)!=0?(G=7,4096):(e=4186112&t,e!==0?(G=6,e):(e=62914560&t,e!==0?(G=5,e):t&67108864?(G=4,67108864):(t&134217728)!=0?(G=3,134217728):(e=805306368&t,e!==0?(G=2,e):(1073741824&t)!=0?(G=1,1073741824):(G=8,t))))))}function s1(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function o1(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(I(358,t))}}function Ui(t,e){var n=t.pendingLanes;if(n===0)return G=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=G=15;else if(s=n&134217727,s!==0){var l=s&~o;l!==0?(r=_r(l),i=G):(a&=s,a!==0&&(r=_r(a),i=G))}else s=n&~o,s!==0?(r=_r(s),i=G):a!==0&&(r=_r(a),i=G);if(r===0)return 0;if(r=31-Gt(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(_r(e),i<=G)return e;G=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function Cp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Do(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Ir(24&~e),t===0?Do(10,e):t;case 10:return t=Ir(192&~e),t===0?Do(8,e):t;case 8:return t=Ir(3584&~e),t===0&&(t=Ir(4186112&~e),t===0&&(t=512)),t;case 2:return e=Ir(805306368&~e),e===0&&(e=268435456),e}throw Error(I(358,t))}function Ir(t){return t&-t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Gt(e),t[e]=n}var Gt=Math.clz32?Math.clz32:u1,a1=Math.log,l1=Math.LN2;function u1(t){return t===0?32:31-(a1(t)/l1|0)|0}var c1=fe.unstable_UserBlockingPriority,h1=fe.unstable_runWithPriority,Mo=!0;function f1(t,e,n,r){On||Cu();var i=Uu,s=On;On=!0;try{ap(i,t,e,n,r)}finally{(On=s)||Au()}}function d1(t,e,n,r){h1(c1,Uu.bind(null,t,e,n,r))}function Uu(t,e,n,r){if(Mo){var i;if((i=(e&4)==0)&&0<yt.length&&-1<gp.indexOf(t))t=Du(null,t,e,n,r),yt.push(t);else{var s=Fu(t,e,n,r);if(s===null)i&&yp(t,r);else{if(i){if(-1<gp.indexOf(t)){t=Du(s,t,e,n,r),yt.push(t);return}if(e1(s,t,e,n,r))return;yp(t,r)}nm(t,e,r,null,n)}}}}function Fu(t,e,n,r){var i=Tu(r);if(i=xn(i),i!==null){var s=Pn(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=up(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return nm(t,e,r,i,n),null}var Qt=null,Vu=null,$o=null;function Rp(){if($o)return $o;var t,e=Vu,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $o=i.slice(t,1<r?1-r:void 0)}function bo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function Ap(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:Ap,this.isPropagationStopped=Ap,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=Ye(Tr),Fi=ee({},Tr,{view:0,detail:0}),p1=Ye(Fi),Bu,zu,Vi,Fo=ee({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(Bu=t.screenX-Vi.screenX,zu=t.screenY-Vi.screenY):zu=Bu=0,Vi=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Np=Ye(Fo),m1=ee({},Fo,{dataTransfer:0}),g1=Ye(m1),y1=ee({},Fi,{relatedTarget:0}),qu=Ye(y1),v1=ee({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),w1=Ye(v1),E1=ee({},Tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_1=Ye(E1),I1=ee({},Tr,{data:0}),Op=Ye(I1),T1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k1[t])?!!e[t]:!1}function Hu(){return C1}var R1=ee({},Fi,{key:function(t){if(t.key){var e=T1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?S1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),A1=Ye(R1),N1=ee({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Ye(N1),O1=ee({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),P1=Ye(O1),x1=ee({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),D1=Ye(x1),L1=ee({},Fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M1=Ye(L1),$1=[9,13,27,32],Wu=Pt&&"CompositionEvent"in window,ji=null;Pt&&"documentMode"in document&&(ji=document.documentMode);var b1=Pt&&"TextEvent"in window&&!ji,xp=Pt&&(!Wu||ji&&8<ji&&11>=ji),Dp=String.fromCharCode(32),Lp=!1;function Mp(t,e){switch(t){case"keyup":return $1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function U1(t,e){switch(t){case"compositionend":return $p(e);case"keypress":return e.which!==32?null:(Lp=!0,Dp);case"textInput":return t=e.data,t===Dp&&Lp?null:t;default:return null}}function F1(t,e){if(Sr)return t==="compositionend"||!Wu&&Mp(t,e)?(t=Rp(),$o=Vu=Qt=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xp&&e.locale!=="ko"?null:e.data;default:return null}}var V1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V1[t.type]:e==="textarea"}function Up(t,e,n,r){sp(r),e=jo(e,"onChange"),0<e.length&&(n=new ju("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Bi=null,zi=null;function j1(t){Xp(t,0)}function Vo(t){var e=Nr(t);if(Kd(e))return t}function B1(t,e){if(t==="change")return e}var Fp=!1;if(Pt){var Ku;if(Pt){var Gu="oninput"in document;if(!Gu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Gu=typeof Vp.oninput=="function"}Ku=Gu}else Ku=!1;Fp=Ku&&(!document.documentMode||9<document.documentMode)}function jp(){Bi&&(Bi.detachEvent("onpropertychange",Bp),zi=Bi=null)}function Bp(t){if(t.propertyName==="value"&&Vo(zi)){var e=[];if(Up(e,zi,t,Tu(t)),t=j1,On)t(e);else{On=!0;try{ku(t,e)}finally{On=!1,Au()}}}}function z1(t,e,n){t==="focusin"?(jp(),Bi=e,zi=n,Bi.attachEvent("onpropertychange",Bp)):t==="focusout"&&jp()}function q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vo(zi)}function H1(t,e){if(t==="click")return Vo(e)}function W1(t,e){if(t==="input"||t==="change")return Vo(e)}function K1(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var it=typeof Object.is=="function"?Object.is:K1,G1=Object.prototype.hasOwnProperty;function qi(t,e){if(it(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!G1.call(e,n[r])||!it(t[n[r]],e[n[r]]))return!1;return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qp(t,e){var n=zp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zp(n)}}function Hp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wp(){for(var t=window,e=Co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Co(t.document)}return e}function Qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Q1=Pt&&"documentMode"in document&&11>=document.documentMode,kr=null,Yu=null,Hi=null,Xu=!1;function Kp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||kr==null||kr!==Co(r)||(r=kr,"selectionStart"in r&&Qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&qi(Hi,r)||(Hi=r,r=jo(Yu,"onSelect"),0<r.length&&(e=new ju("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=kr)))}$u("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);$u("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);$u(r1,2);for(var Gp="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ju=0;Ju<Gp.length;Ju++)Mu.set(Gp[Ju],0);mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Yp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,JE(r,e,void 0,t),t.currentTarget=null}function Xp(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yp(i,a,u),s=l}}}if(No)throw t=Ou,No=!1,Ou=null,t}function Y(t,e){var n=lm(e),r=t+"__bubble";n.has(r)||(tm(e,t,2,!1),n.add(r))}var Jp="_reactListening"+Math.random().toString(36).slice(2);function Zp(t){t[Jp]||(t[Jp]=!0,Vd.forEach(function(e){Qp.has(e)||em(e,!1,t,null),em(e,!0,t,null)}))}function em(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&Qp.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=lm(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),tm(s,t,i,e),o.add(a))}function tm(t,e,n,r){var i=Mu.get(e);switch(i===void 0?2:i){case 0:i=f1;break;case 1:i=d1;break;default:i=Uu}n=i.bind(null,e,n,t),i=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function nm(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}GE(function(){var u=s,c=Tu(n),p=[];e:{var d=kp.get(t);if(d!==void 0){var g=ju,w=t;switch(t){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":g=A1;break;case"focusin":w="focus",g=qu;break;case"focusout":w="blur",g=qu;break;case"beforeblur":case"afterblur":g=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=P1;break;case _p:case Ip:case Tp:g=w1;break;case Sp:g=D1;break;case"scroll":g=p1;break;case"wheel":g=M1;break;case"copy":case"cut":case"paste":g=_1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Pp}var E=(e&4)!=0,h=!E&&t==="scroll",f=E?d!==null?d+"Capture":null:d;E=[];for(var m=u,v;m!==null;){v=m;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Oi(m,f),y!=null&&E.push(Ki(m,y,v)))),h)break;m=m.return}0<E.length&&(d=new g(d,w,null,n,c),p.push({event:d,listeners:E}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(w=n.relatedTarget||n.fromElement)&&(xn(w)||w[Ar]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?xn(w):null,w!==null&&(h=Pn(w),w!==h||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(E=Np,y="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(E=Pp,y="onPointerLeave",f="onPointerEnter",m="pointer"),h=g==null?d:Nr(g),v=w==null?d:Nr(w),d=new E(y,m+"leave",g,n,c),d.target=h,d.relatedTarget=v,y=null,xn(c)===u&&(E=new E(f,m+"enter",w,n,c),E.target=v,E.relatedTarget=h,y=E),h=y,g&&w)t:{for(E=g,f=w,m=0,v=E;v;v=Cr(v))m++;for(v=0,y=f;y;y=Cr(y))v++;for(;0<m-v;)E=Cr(E),m--;for(;0<v-m;)f=Cr(f),v--;for(;m--;){if(E===f||f!==null&&E===f.alternate)break t;E=Cr(E),f=Cr(f)}E=null}else E=null;g!==null&&rm(p,d,g,E,!1),w!==null&&h!==null&&rm(p,h,w,E,!0)}}e:{if(d=u?Nr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var R=B1;else if(bp(d))if(Fp)R=W1;else{R=q1;var T=z1}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=H1);if(R&&(R=R(t,u))){Up(p,R,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&gu(d,"number",d.value)}switch(T=u?Nr(u):window,t){case"focusin":(bp(T)||T.contentEditable==="true")&&(kr=T,Yu=u,Hi=null);break;case"focusout":Hi=Yu=kr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Kp(p,n,c);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":Kp(p,n,c)}var O;if(Wu)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Sr?Mp(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(xp&&n.locale!=="ko"&&(Sr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Sr&&(O=Rp()):(Qt=c,Vu="value"in Qt?Qt.value:Qt.textContent,Sr=!0)),T=jo(u,L),0<T.length&&(L=new Op(L,t,null,n,c),p.push({event:L,listeners:T}),O?L.data=O:(O=$p(n),O!==null&&(L.data=O)))),(O=b1?U1(t,n):F1(t,n))&&(u=jo(u,"onBeforeInput"),0<u.length&&(c=new Op("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=O))}Xp(p,e)})}function Ki(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oi(t,n),s!=null&&r.unshift(Ki(t,s,i)),s=Oi(t,e),s!=null&&r.push(Ki(t,s,i))),t=t.return}return r}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Oi(n,s),l!=null&&o.unshift(Ki(n,l,a))):i||(l=Oi(n,s),l!=null&&o.push(Ki(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Bo(){}var Zu=null,ec=null;function im(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function tc(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sm=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0;function nc(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rc=0;function X1(t){return{$$typeof:uu,toString:t,valueOf:t}}var zo=Math.random().toString(36).slice(2),Yt="__reactFiber$"+zo,qo="__reactProps$"+zo,Ar="__reactContainer$"+zo,am="__reactEvents$"+zo;function xn(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=om(t);t!==null;){if(n=t[Yt])return n;t=om(t)}return e}t=n,n=t.parentNode}return null}function Gi(t){return t=t[Yt]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Nr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ho(t){return t[qo]||null}function lm(t){var e=t[am];return e===void 0&&(e=t[am]=new Set),e}var ic=[],Or=-1;function Xt(t){return{current:t}}function X(t){0>Or||(t.current=ic[Or],ic[Or]=null,Or--)}function ne(t,e){Or++,ic[Or]=t.current,t.current=e}var Jt={},Oe=Xt(Jt),ze=Xt(!1),Dn=Jt;function Pr(t,e){var n=t.type.contextTypes;if(!n)return Jt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function Wo(){X(ze),X(Oe)}function um(t,e,n){if(Oe.current!==Jt)throw Error(I(168));ne(Oe,e),ne(ze,n)}function cm(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,gr(e)||"Unknown",i));return ee({},n,r)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jt,Dn=Oe.current,ne(Oe,t),ne(ze,ze.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=cm(t,e,Dn),r.__reactInternalMemoizedMergedChildContext=t,X(ze),X(Oe),ne(Oe,t)):X(ze),ne(ze,n)}var sc=null,Ln=null,J1=fe.unstable_runWithPriority,oc=fe.unstable_scheduleCallback,ac=fe.unstable_cancelCallback,Z1=fe.unstable_shouldYield,fm=fe.unstable_requestPaint,lc=fe.unstable_now,e_=fe.unstable_getCurrentPriorityLevel,Go=fe.unstable_ImmediatePriority,dm=fe.unstable_UserBlockingPriority,pm=fe.unstable_NormalPriority,mm=fe.unstable_LowPriority,gm=fe.unstable_IdlePriority,uc={},t_=fm!==void 0?fm:function(){},xt=null,Qo=null,cc=!1,ym=lc(),Pe=1e4>ym?lc:function(){return lc()-ym};function xr(){switch(e_()){case Go:return 99;case dm:return 98;case pm:return 97;case mm:return 96;case gm:return 95;default:throw Error(I(332))}}function vm(t){switch(t){case 99:return Go;case 98:return dm;case 97:return pm;case 96:return mm;case 95:return gm;default:throw Error(I(332))}}function Mn(t,e){return t=vm(t),J1(t,e)}function Qi(t,e,n){return t=vm(t),oc(t,e,n)}function vt(){if(Qo!==null){var t=Qo;Qo=null,ac(t)}wm()}function wm(){if(!cc&&xt!==null){cc=!0;var t=0;try{var e=xt;Mn(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),xt=null}catch(n){throw xt!==null&&(xt=xt.slice(t+1)),oc(Go,vt),n}finally{cc=!1}}}var n_=An.ReactCurrentBatchConfig;function dt(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Yo=Xt(null),Xo=null,Dr=null,Jo=null;function hc(){Jo=Dr=Xo=null}function fc(t){var e=Yo.current;X(Yo),t.type._context._currentValue=e}function Em(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Lr(t,e){Xo=t,Jo=Dr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(pt=!0),t.firstContext=null)}function st(t,e){if(Jo!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Jo=t,e=1073741823),e={context:t,observedBits:e,next:null},Dr===null){if(Xo===null)throw Error(I(308));Dr=e,Xo.dependencies={lanes:0,firstContext:e,responders:null}}else Dr=Dr.next=e;return t._currentValue}var Zt=!1;function dc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function _m(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function en(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Im(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yi(t,e,n,r){var i=t.updateQueue;Zt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;if(c!==null){c=c.updateQueue;var p=c.lastBaseUpdate;p!==o&&(p===null?c.firstBaseUpdate=u:p.next=u,c.lastBaseUpdate=l)}}if(s!==null){p=i.baseState,o=0,c=u=l=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,w=s;switch(a=e,d=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){p=g.call(d,p,a);break e}p=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=w.payload,a=typeof g=="function"?g.call(d,p,a):g,a==null)break e;p=ee({},p,a);break e;case 2:Zt=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=d,l=p):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,ls|=o,t.lanes=o,t.memoizedState=p}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Sm=new Eo.Component().refs;function Zo(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ea={isMounted:function(t){return(t=t._reactInternals)?Pn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=sn(t),s=en(r,i);s.payload=e,n!=null&&(s.callback=n),tn(t,s),on(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=sn(t),s=en(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),tn(t,s),on(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=sn(t),i=en(n,r);i.tag=2,e!=null&&(i.callback=e),tn(t,i),on(t,r,n)}};function km(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qi(n,r)||!qi(i,s):!0}function Cm(t,e,n){var r=!1,i=Jt,s=e.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=qe(e)?Dn:Oe.current,r=e.contextTypes,s=(r=r!=null)?Pr(t,i):Jt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ea,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ea.enqueueReplaceState(e,e.state,null)}function pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Sm,dc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=qe(e)?Dn:Oe.current,i.context=Pr(t,s)),Yi(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zo(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ea.enqueueReplaceState(i,i.state,null),Yi(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var ta=Array.isArray;function Xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Sm&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function na(t,e){if(t.type!=="textarea")throw Error(I(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Am(t){function e(h,f){if(t){var m=h.lastEffect;m!==null?(m.nextEffect=f,h.lastEffect=f):h.firstEffect=h.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(h,f){if(!t)return null;for(;f!==null;)e(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function i(h,f){return h=un(h,f),h.index=0,h.sibling=null,h}function s(h,f,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags=2,f):m):(h.flags=2,f)):f}function o(h){return t&&h.alternate===null&&(h.flags=2),h}function a(h,f,m,v){return f===null||f.tag!==6?(f=Yc(m,h.mode,v),f.return=h,f):(f=i(f,m),f.return=h,f)}function l(h,f,m,v){return f!==null&&f.elementType===m.type?(v=i(f,m.props),v.ref=Xi(h,f,m),v.return=h,v):(v=Ea(m.type,m.key,m.props,null,h.mode,v),v.ref=Xi(h,f,m),v.return=h,v)}function u(h,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Xc(m,h.mode,v),f.return=h,f):(f=i(f,m.children||[]),f.return=h,f)}function c(h,f,m,v,y){return f===null||f.tag!==7?(f=Br(m,h.mode,v,y),f.return=h,f):(f=i(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"||typeof f=="number")return f=Yc(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ti:return m=Ea(f.type,f.key,f.props,null,h.mode,m),m.ref=Xi(h,null,f),m.return=h,m;case Nn:return f=Xc(f,h.mode,m),f.return=h,f}if(ta(f)||Ci(f))return f=Br(f,h.mode,m,null),f.return=h,f;na(h,f)}return null}function d(h,f,m,v){var y=f!==null?f.key:null;if(typeof m=="string"||typeof m=="number")return y!==null?null:a(h,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ti:return m.key===y?m.type===zt?c(h,f,m.props.children,v,y):l(h,f,m,v):null;case Nn:return m.key===y?u(h,f,m,v):null}if(ta(m)||Ci(m))return y!==null?null:c(h,f,m,v,null);na(h,m)}return null}function g(h,f,m,v,y){if(typeof v=="string"||typeof v=="number")return h=h.get(m)||null,a(f,h,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ti:return h=h.get(v.key===null?m:v.key)||null,v.type===zt?c(f,h,v.props.children,y,v.key):l(f,h,v,y);case Nn:return h=h.get(v.key===null?m:v.key)||null,u(f,h,v,y)}if(ta(v)||Ci(v))return h=h.get(m)||null,c(f,h,v,y,null);na(f,v)}return null}function w(h,f,m,v){for(var y=null,R=null,T=f,O=f=0,L=null;T!==null&&O<m.length;O++){T.index>O?(L=T,T=null):L=T.sibling;var P=d(h,T,m[O],v);if(P===null){T===null&&(T=L);break}t&&T&&P.alternate===null&&e(h,T),f=s(P,f,O),R===null?y=P:R.sibling=P,R=P,T=L}if(O===m.length)return n(h,T),y;if(T===null){for(;O<m.length;O++)T=p(h,m[O],v),T!==null&&(f=s(T,f,O),R===null?y=T:R.sibling=T,R=T);return y}for(T=r(h,T);O<m.length;O++)L=g(T,h,O,m[O],v),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?O:L.key),f=s(L,f,O),R===null?y=L:R.sibling=L,R=L);return t&&T.forEach(function(ue){return e(h,ue)}),y}function E(h,f,m,v){var y=Ci(m);if(typeof y!="function")throw Error(I(150));if(m=y.call(m),m==null)throw Error(I(151));for(var R=y=null,T=f,O=f=0,L=null,P=m.next();T!==null&&!P.done;O++,P=m.next()){T.index>O?(L=T,T=null):L=T.sibling;var ue=d(h,T,P.value,v);if(ue===null){T===null&&(T=L);break}t&&T&&ue.alternate===null&&e(h,T),f=s(ue,f,O),R===null?y=ue:R.sibling=ue,R=ue,T=L}if(P.done)return n(h,T),y;if(T===null){for(;!P.done;O++,P=m.next())P=p(h,P.value,v),P!==null&&(f=s(P,f,O),R===null?y=P:R.sibling=P,R=P);return y}for(T=r(h,T);!P.done;O++,P=m.next())P=g(T,h,O,P.value,v),P!==null&&(t&&P.alternate!==null&&T.delete(P.key===null?O:P.key),f=s(P,f,O),R===null?y=P:R.sibling=P,R=P);return t&&T.forEach(function(Hl){return e(h,Hl)}),y}return function(h,f,m,v){var y=typeof m=="object"&&m!==null&&m.type===zt&&m.key===null;y&&(m=m.props.children);var R=typeof m=="object"&&m!==null;if(R)switch(m.$$typeof){case Ti:e:{for(R=m.key,y=f;y!==null;){if(y.key===R){switch(y.tag){case 7:if(m.type===zt){n(h,y.sibling),f=i(y,m.props.children),f.return=h,h=f;break e}break;default:if(y.elementType===m.type){n(h,y.sibling),f=i(y,m.props),f.ref=Xi(h,y,m),f.return=h,h=f;break e}}n(h,y);break}else e(h,y);y=y.sibling}m.type===zt?(f=Br(m.props.children,h.mode,v,m.key),f.return=h,h=f):(v=Ea(m.type,m.key,m.props,null,h.mode,v),v.ref=Xi(h,f,m),v.return=h,h=v)}return o(h);case Nn:e:{for(y=m.key;f!==null;){if(f.key===y)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=i(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else e(h,f);f=f.sibling}f=Xc(m,h.mode,v),f.return=h,h=f}return o(h)}if(typeof m=="string"||typeof m=="number")return m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=i(f,m),f.return=h,h=f):(n(h,f),f=Yc(m,h.mode,v),f.return=h,h=f),o(h);if(ta(m))return w(h,f,m,v);if(Ci(m))return E(h,f,m,v);if(R&&na(h,m),typeof m=="undefined"&&!y)switch(h.tag){case 1:case 22:case 0:case 11:case 15:throw Error(I(152,gr(h.type)||"Component"))}return n(h,f)}}var ra=Am(!0),Nm=Am(!1),Ji={},wt=Xt(Ji),Zi=Xt(Ji),es=Xt(Ji);function $n(t){if(t===Ji)throw Error(I(174));return t}function mc(t,e){switch(ne(es,e),ne(Zi,t),ne(wt,Ji),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eu(e,t)}X(wt),ne(wt,e)}function Mr(){X(wt),X(Zi),X(es)}function Om(t){$n(es.current);var e=$n(wt.current),n=Eu(e,t.type);e!==n&&(ne(Zi,t),ne(wt,n))}function gc(t){Zi.current===t&&(X(wt),X(Zi))}var re=Xt(0);function ia(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dt=null,nn=null,Et=!1;function Pm(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function yc(t){if(Et){var e=nn;if(e){var n=e;if(!xm(t,e)){if(e=Rr(n.nextSibling),!e||!xm(t,e)){t.flags=t.flags&-1025|2,Et=!1,Dt=t;return}Pm(Dt,n)}Dt=t,nn=Rr(e.firstChild)}else t.flags=t.flags&-1025|2,Et=!1,Dt=t}}function Dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function sa(t){if(t!==Dt)return!1;if(!Et)return Dm(t),Et=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!tc(e,t.memoizedProps))for(e=nn;e;)Pm(t,e),e=Rr(e.nextSibling);if(Dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=Dt?Rr(t.stateNode.nextSibling):null;return!0}function vc(){nn=Dt=null,Et=!1}var $r=[];function wc(){for(var t=0;t<$r.length;t++)$r[t]._workInProgressVersionPrimary=null;$r.length=0}var ts=An.ReactCurrentDispatcher,ot=An.ReactCurrentBatchConfig,ns=0,se=null,xe=null,_e=null,oa=!1,rs=!1;function He(){throw Error(I(321))}function Ec(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!it(t[n],e[n]))return!1;return!0}function _c(t,e,n,r,i,s){if(ns=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ts.current=t===null||t.memoizedState===null?i_:s_,t=n(r,i),rs){s=0;do{if(rs=!1,!(25>s))throw Error(I(301));s+=1,_e=xe=null,e.updateQueue=null,ts.current=o_,t=n(r,i)}while(rs)}if(ts.current=ca,e=xe!==null&&xe.next!==null,ns=0,_e=xe=se=null,oa=!1,e)throw Error(I(300));return t}function bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?se.memoizedState=_e=t:_e=_e.next=t,_e}function Un(){if(xe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=_e===null?se.memoizedState:_e.next;if(e!==null)_e=e,xe=t;else{if(t===null)throw Error(I(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},_e===null?se.memoizedState=_e=t:_e=_e.next=t}return _e}function _t(t,e){return typeof e=="function"?e(t):e}function is(t){var e=Un(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((ns&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===t?l.eagerState:t(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,se.lanes|=u,ls|=u}l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,it(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function ss(t){var e=Un(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);it(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Lm(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(ns&t)===t)&&(e._workInProgressVersionPrimary=r,$r.push(e))),t)return n(e._source);throw $r.push(e),Error(I(350))}function Mm(t,e,n,r){var i=be;if(i===null)throw Error(I(349));var s=e._getVersion,o=s(e._source),a=ts.current,l=a.useState(function(){return Lm(i,e,n)}),u=l[1],c=l[0];l=_e;var p=t.memoizedState,d=p.refs,g=d.getSnapshot,w=p.source;p=p.subscribe;var E=se;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=u;var h=s(e._source);if(!it(o,h)){h=n(e._source),it(c,h)||(u(h),h=sn(E),i.mutableReadLanes|=h&i.pendingLanes),h=i.mutableReadLanes,i.entangledLanes|=h;for(var f=i.entanglements,m=h;0<m;){var v=31-Gt(m),y=1<<v;f[v]|=h,m&=~y}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var h=d.getSnapshot,f=d.setSnapshot;try{f(h(e._source));var m=sn(E);i.mutableReadLanes|=m&i.pendingLanes}catch(v){f(function(){throw v})}})},[e,r]),it(g,n)&&it(w,e)&&it(p,r)||(t={pending:null,dispatch:null,lastRenderedReducer:_t,lastRenderedState:c},t.dispatch=u=kc.bind(null,se,t),l.queue=t,l.baseQueue=null,c=Lm(i,e,n),l.memoizedState=l.baseState=c),c}function $m(t,e,n){var r=Un();return Mm(r,t,e,n)}function os(t){var e=bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:_t,lastRenderedState:t},t=t.dispatch=kc.bind(null,se,t),[e.memoizedState,t]}function aa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bm(t){var e=bn();return t={current:t},e.memoizedState=t}function la(){return Un().memoizedState}function Ic(t,e,n,r){var i=bn();se.flags|=t,i.memoizedState=aa(1|e,n,void 0,r===void 0?null:r)}function Tc(t,e,n,r){var i=Un();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Ec(r,o.deps)){aa(e,n,s,r);return}}se.flags|=t,i.memoizedState=aa(1|e,n,s,r)}function Um(t,e){return Ic(516,4,t,e)}function ua(t,e){return Tc(516,4,t,e)}function Fm(t,e){return Tc(4,2,t,e)}function Vm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jm(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4,2,Vm.bind(null,e,t),n)}function Sc(){}function Bm(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ec(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zm(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ec(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function r_(t,e){var n=xr();Mn(98>n?98:n,function(){t(!0)}),Mn(97<n?97:n,function(){var r=ot.transition;ot.transition=1;try{t(!1),e()}finally{ot.transition=r}})}function kc(t,e,n){var r=Xe(),i=sn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===se||o!==null&&o===se)rs=oa=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,it(l,a))return}catch{}finally{}on(t,i,r)}}var ca={readContext:st,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useOpaqueIdentifier:He,unstable_isNewReconciler:!1},i_={readContext:st,useCallback:function(t,e){return bn().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:Um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ic(4,2,Vm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ic(4,2,t,e)},useMemo:function(t,e){var n=bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=kc.bind(null,se,t),[r.memoizedState,t]},useRef:bm,useState:os,useDebugValue:Sc,useDeferredValue:function(t){var e=os(t),n=e[0],r=e[1];return Um(function(){var i=ot.transition;ot.transition=1;try{r(t)}finally{ot.transition=i}},[t]),n},useTransition:function(){var t=os(!1),e=t[0];return t=r_.bind(null,t[1]),bm(t),[t,e]},useMutableSource:function(t,e,n){var r=bn();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Mm(r,t,e,n)},useOpaqueIdentifier:function(){if(Et){var t=!1,e=X1(function(){throw t||(t=!0,n("r:"+(rc++).toString(36))),Error(I(355))}),n=os(e)[1];return(se.mode&2)==0&&(se.flags|=516,aa(5,function(){n("r:"+(rc++).toString(36))},void 0,null)),e}return e="r:"+(rc++).toString(36),os(e),e},unstable_isNewReconciler:!1},s_={readContext:st,useCallback:Bm,useContext:st,useEffect:ua,useImperativeHandle:jm,useLayoutEffect:Fm,useMemo:zm,useReducer:is,useRef:la,useState:function(){return is(_t)},useDebugValue:Sc,useDeferredValue:function(t){var e=is(_t),n=e[0],r=e[1];return ua(function(){var i=ot.transition;ot.transition=1;try{r(t)}finally{ot.transition=i}},[t]),n},useTransition:function(){var t=is(_t)[0];return[la().current,t]},useMutableSource:$m,useOpaqueIdentifier:function(){return is(_t)[0]},unstable_isNewReconciler:!1},o_={readContext:st,useCallback:Bm,useContext:st,useEffect:ua,useImperativeHandle:jm,useLayoutEffect:Fm,useMemo:zm,useReducer:ss,useRef:la,useState:function(){return ss(_t)},useDebugValue:Sc,useDeferredValue:function(t){var e=ss(_t),n=e[0],r=e[1];return ua(function(){var i=ot.transition;ot.transition=1;try{r(t)}finally{ot.transition=i}},[t]),n},useTransition:function(){var t=ss(_t)[0];return[la().current,t]},useMutableSource:$m,useOpaqueIdentifier:function(){return ss(_t)[0]},unstable_isNewReconciler:!1},a_=An.ReactCurrentOwner,pt=!1;function We(t,e,n,r){e.child=t===null?Nm(e,null,n,r):ra(e,t.child,n,r)}function qm(t,e,n,r,i){n=n.render;var s=e.ref;return Lr(e,i),r=_c(t,e,n,r,s,i),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Lt(t,e,i)):(e.flags|=1,We(t,e,r,i),e.child)}function Hm(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Gc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Wm(t,e,o,r,i,s)):(t=Ea(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:qi,n(i,r)&&t.ref===e.ref)?Lt(t,e,s):(e.flags|=1,t=un(o,r),t.ref=e.ref,t.return=e,e.child=t)}function Wm(t,e,n,r,i,s){if(t!==null&&qi(t.memoizedProps,r)&&t.ref===e.ref)if(pt=!1,(s&i)!=0)(t.flags&16384)!=0&&(pt=!0);else return e.lanes=t.lanes,Lt(t,e,s);return Rc(t,e,n,r,s)}function Cc(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},wa(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},wa(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},wa(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,wa(e,r);return We(t,e,i,n),e.child}function Km(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Rc(t,e,n,r,i){var s=qe(n)?Dn:Oe.current;return s=Pr(e,s),Lr(e,i),n=_c(t,e,n,r,s,i),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Lt(t,e,i)):(e.flags|=1,We(t,e,n,i),e.child)}function Gm(t,e,n,r,i){if(qe(n)){var s=!0;Ko(e)}else s=!1;if(Lr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Cm(e,n,r),pc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=qe(n)?Dn:Oe.current,u=Pr(e,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Rm(e,o,r,u),Zt=!1;var d=e.memoizedState;o.state=d,Yi(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ze.current||Zt?(typeof c=="function"&&(Zo(e,n,c,r),l=e.memoizedState),(a=Zt||km(e,n,a,r,d,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,_m(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:dt(e.type,a),o.props=u,p=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=st(l):(l=qe(n)?Dn:Oe.current,l=Pr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||d!==l)&&Rm(e,o,r,l),Zt=!1,d=e.memoizedState,o.state=d,Yi(e,r,o,i);var w=e.memoizedState;a!==p||d!==w||ze.current||Zt?(typeof g=="function"&&(Zo(e,n,g,r),w=e.memoizedState),(u=Zt||km(e,n,u,r,d,w,l))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Ac(t,e,n,r,s,i)}function Ac(t,e,n,r,i,s){Km(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&hm(e,n,!1),Lt(t,e,s);r=e.stateNode,a_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ra(e,t.child,null,s),e.child=ra(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function Qm(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),mc(t,e.containerInfo)}var ha={dehydrated:null,retryLane:0};function Ym(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ne(re,i&1),t===null?(r.fallback!==void 0&&yc(e),t=r.children,i=r.fallback,s?(t=Xm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ha,t):typeof r.unstable_expectedLoadTime=="number"?(t=Xm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ha,e.lanes=33554432,t):(n=Qc({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=Zm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ha,r):(n=Jm(t,e,r.children,n),e.memoizedState=null,n):s?(r=Zm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ha,r):(n=Jm(t,e,r.children,n),e.memoizedState=null,n)}function Xm(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Qc(e,i,0,null),n=Br(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Jm(t,e,n,r){var i=t.child;return t=i.sibling,n=un(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Zm(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=un(o,a),t!==null?r=un(t,r):(r=Br(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function eg(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Em(t.return,e)}function Nc(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function tg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=re.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,n);else if(t.tag===19)eg(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(re,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ia(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nc(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ia(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nc(e,!0,n,null,s,e.lastEffect);break;case"together":Nc(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=un(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=un(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var ng,Oc,rg,ig;ng=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oc=function(){};rg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$n(wt.current);var s=null;switch(n){case"input":i=pu(t,i),r=pu(t,r),s=[];break;case"option":i=yu(t,i),r=yu(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=vu(t,i),r=vu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bo)}_u(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Y("scroll",t),s||a===l||(s=[])):typeof l=="object"&&l!==null&&l.$$typeof===uu?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ig=function(t,e,n,r){n!==r&&(e.flags|=4)};function as(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function l_(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return qe(e.type)&&Wo(),null;case 3:return Mr(),X(ze),X(Oe),wc(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Oc(e),null;case 5:gc(e);var i=$n(es.current);if(n=e.type,t!==null&&e.stateNode!=null)rg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(I(166));return null}if(t=$n(wt.current),sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[qo]=s,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(t=0;t<Wi.length;t++)Y(Wi[t],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Gd(r,s),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Y("invalid",r);break;case"textarea":Xd(r,s),Y("invalid",r)}_u(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Ii.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Y("scroll",r));switch(n){case"input":ko(r),Yd(r,s,!0);break;case"textarea":ko(r),Zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bo)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===wu.html&&(t=ep(n)),t===wu.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[qo]=r,ng(t,e,!1,!1),e.stateNode=t,o=Iu(n,r),n){case"dialog":Y("cancel",t),Y("close",t),i=r;break;case"iframe":case"object":case"embed":Y("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)Y(Wi[i],t);i=r;break;case"source":Y("error",t),i=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),i=r;break;case"details":Y("toggle",t),i=r;break;case"input":Gd(t,r),i=pu(t,r),Y("invalid",t);break;case"option":i=yu(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),Y("invalid",t);break;case"textarea":Xd(t,r),i=vu(t,r),Y("invalid",t);break;default:i=r}_u(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?rp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ai(t,l):typeof l=="number"&&Ai(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ii.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Y("scroll",t):l!=null&&ru(t,s,l,o))}switch(n){case"input":ko(t),Yd(t,r,!1);break;case"textarea":ko(t),Zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yr(t,!!r.multiple,s,!1):r.defaultValue!=null&&yr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bo)}im(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)ig(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));n=$n(es.current),$n(wt.current),sa(e)?(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r)}return null;case 13:return X(re),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&sa(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(re.current&1)!=0?Ie===0&&(Ie=3):((Ie===0||Ie===3)&&(Ie=4),be===null||(ls&134217727)==0&&(Ur&134217727)==0||Vr(be,De))),(r||n)&&(e.flags|=4),null);case 4:return Mr(),Oc(e),t===null&&Zp(e.stateNode.containerInfo),null;case 10:return fc(e),null;case 17:return qe(e.type)&&Wo(),null;case 19:if(X(re),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)as(r,!1);else{if(Ie!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=ia(t),o!==null){for(e.flags|=64,as(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(re,re.current&1|2),e.child}t=t.sibling}r.tail!==null&&Pe()>jc&&(e.flags|=64,s=!0,as(r,!1),e.lanes=33554432)}else{if(!s)if(t=ia(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),as(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Et)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Pe()-r.renderingStartTime>jc&&n!==1073741824&&(e.flags|=64,s=!0,as(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Pe(),n.sibling=null,e=re.current,ne(re,s?e&1|2:e&1),n):null;case 23:case 24:return Kc(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(I(156,e.tag))}function u_(t){switch(t.tag){case 1:qe(t.type)&&Wo();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Mr(),X(ze),X(Oe),wc(),e=t.flags,(e&64)!=0)throw Error(I(285));return t.flags=e&-4097|64,t;case 5:return gc(t),null;case 13:return X(re),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return X(re),null;case 4:return Mr(),null;case 10:return fc(t),null;case 23:case 24:return Kc(),null;default:return null}}function Pc(t,e){try{var n="",r=e;do n+=zE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var c_=typeof WeakMap=="function"?WeakMap:Map;function sg(t,e,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pa||(pa=!0,Bc=r),xc(t,e)},n}function og(t,e,n){n=en(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return xc(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(It===null?It=new Set([this]):It.add(this),xc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var h_=typeof WeakSet=="function"?WeakSet:Set;function ag(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){ln(t,n)}else e.current=null}function f_(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:dt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&nc(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(I(163))}function d_(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(Ig(n,t),__(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:dt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Tm(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Tm(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&im(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&wp(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(I(163))}function lg(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=np("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ug(t,e){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(sc,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)Ig(e,n);else{r=e;try{i()}catch(s){ln(r,s)}}n=n.next}while(n!==t)}break;case 1:if(ag(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){ln(e,s)}break;case 5:ag(e);break;case 4:dg(t,e)}}function cg(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function hg(t){return t.tag===5||t.tag===3||t.tag===4}function fg(t){e:{for(var e=t.return;e!==null;){if(hg(e))break e;e=e.return}throw Error(I(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(I(161))}n.flags&16&&(Ai(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||hg(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Dc(t,n,e):Lc(t,n,e)}function Dc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bo));else if(r!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}function Lc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lc(t,e,n),t=t.sibling;t!==null;)Lc(t,e,n),t=t.sibling}function dg(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(I(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,l=a;;)if(ug(o,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(ug(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Mc(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[qo]=r,t==="input"&&r.type==="radio"&&r.name!=null&&Qd(n,r),Iu(t,i),e=Iu(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?rp(n,a):o==="dangerouslySetInnerHTML"?tp(n,a):o==="children"?Ai(n,a):ru(n,o,a,e)}switch(t){case"input":mu(n,r);break;case"textarea":Jd(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?yr(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?yr(n,!!r.multiple,r.defaultValue,!0):yr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(I(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,wp(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Vc=Pe(),lg(e.child,!0)),pg(e);return;case 19:pg(e);return;case 17:return;case 23:case 24:lg(e,e.memoizedState!==null);return}throw Error(I(163))}function pg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new h_),e.forEach(function(r){var i=S_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function p_(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var m_=Math.ceil,fa=An.ReactCurrentDispatcher,$c=An.ReactCurrentOwner,$=0,be=null,ce=null,De=0,Fn=0,bc=Xt(0),Ie=0,da=null,br=0,ls=0,Ur=0,Uc=0,Fc=null,Vc=0,jc=1/0;function Fr(){jc=Pe()+500}var A=null,pa=!1,Bc=null,It=null,rn=!1,us=null,cs=90,zc=[],qc=[],Mt=null,hs=0,Hc=null,ma=-1,$t=0,ga=0,fs=null,ya=!1;function Xe(){return($&48)!=0?Pe():ma!==-1?ma:ma=Pe()}function sn(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return xr()===99?1:2;if($t===0&&($t=br),n_.transition!==0){ga!==0&&(ga=Fc!==null?Fc.pendingLanes:0),t=$t;var e=4186112&~ga;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=xr(),($&4)!=0&&t===98?t=Do(12,$t):(t=s1(t),t=Do(t,$t)),t}function on(t,e,n){if(50<hs)throw hs=0,Hc=null,Error(I(185));if(t=va(t,e),t===null)return null;Lo(t,e,n),t===be&&(Ur|=e,Ie===4&&Vr(t,De));var r=xr();e===1?($&8)!=0&&($&48)==0?Wc(t):(at(t,n),$===0&&(Fr(),vt())):(($&4)==0||r!==98&&r!==99||(Mt===null?Mt=new Set([t]):Mt.add(t)),at(t,n)),Fc=t}function va(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function at(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Gt(o),l=1<<a,u=s[a];if(u===-1){if((l&r)==0||(l&i)!=0){u=e,_r(l);var c=G;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=e&&(t.expiredLanes|=l);o&=~l}if(r=Ui(t,t===be?De:0),e=G,r===0)n!==null&&(n!==uc&&ac(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==uc&&ac(n)}e===15?(n=Wc.bind(null,t),xt===null?(xt=[n],Qo=oc(Go,wm)):xt.push(n),n=uc):e===14?n=Qi(99,Wc.bind(null,t)):(n=o1(e),n=Qi(n,mg.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function mg(t){if(ma=-1,ga=$t=0,($&48)!=0)throw Error(I(327));var e=t.callbackNode;if(an()&&t.callbackNode!==e)return null;var n=Ui(t,t===be?De:0);if(n===0)return null;var r=n,i=$;$|=16;var s=wg();(be!==t||De!==r)&&(Fr(),jr(t,r));do try{v_();break}catch(a){vg(t,a)}while(1);if(hc(),fa.current=s,$=i,ce!==null?r=0:(be=null,De=0,r=Ie),(br&Ur)!=0)jr(t,0);else if(r!==0){if(r===2&&($|=64,t.hydrate&&(t.hydrate=!1,nc(t.containerInfo)),n=Cp(t),n!==0&&(r=ds(t,n))),r===1)throw e=da,jr(t,0),Vr(t,n),at(t,Pe()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(I(345));case 2:Vn(t);break;case 3:if(Vr(t,n),(n&62914560)===n&&(r=Vc+500-Pe(),10<r)){if(Ui(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=sm(Vn.bind(null,t),r);break}Vn(t);break;case 4:if(Vr(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Gt(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*m_(n/1960))-n,10<n){t.timeoutHandle=sm(Vn.bind(null,t),n);break}Vn(t);break;case 5:Vn(t);break;default:throw Error(I(329))}}return at(t,Pe()),t.callbackNode===e?mg.bind(null,t):null}function Vr(t,e){for(e&=~Uc,e&=~Ur,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Wc(t){if(($&48)!=0)throw Error(I(327));if(an(),t===be&&(t.expiredLanes&De)!=0){var e=De,n=ds(t,e);(br&Ur)!=0&&(e=Ui(t,e),n=ds(t,e))}else e=Ui(t,0),n=ds(t,e);if(t.tag!==0&&n===2&&($|=64,t.hydrate&&(t.hydrate=!1,nc(t.containerInfo)),e=Cp(t),e!==0&&(n=ds(t,e))),n===1)throw n=da,jr(t,0),Vr(t,e),at(t,Pe()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t),at(t,Pe()),null}function g_(){if(Mt!==null){var t=Mt;Mt=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,at(e,Pe())})}vt()}function gg(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Fr(),vt())}}function yg(t,e){var n=$;$&=-2,$|=8;try{return t(e)}finally{$=n,$===0&&(Fr(),vt())}}function wa(t,e){ne(bc,Fn),Fn|=e,br|=e}function Kc(){Fn=bc.current,X(bc)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y1(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Mr(),X(ze),X(Oe),wc();break;case 5:gc(r);break;case 4:Mr();break;case 13:X(re);break;case 19:X(re);break;case 10:fc(r);break;case 23:case 24:Kc()}n=n.return}be=t,ce=un(t.current,null),De=Fn=br=e,Ie=0,da=null,Uc=Ur=ls=0}function vg(t,e){do{var n=ce;try{if(hc(),ts.current=ca,oa){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oa=!1}if(ns=0,_e=xe=se=null,rs=!1,$c.current=null,n===null||n.return===null){Ie=1,da=e,ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var p=(re.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var w=d.memoizedState;if(w!==null)g=w.dehydrated!==null;else{var E=d.memoizedProps;g=E.fallback===void 0?!1:E.unstable_avoidThisFallback!==!0?!0:!p}}if(g){var h=d.updateQueue;if(h===null){var f=new Set;f.add(u),d.updateQueue=f}else h.add(u);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=en(-1,1);m.tag=2,tn(a,m)}a.lanes|=1;break e}l=void 0,a=e;var v=s.pingCache;if(v===null?(v=s.pingCache=new c_,l=new Set,v.set(u,l)):(l=v.get(u),l===void 0&&(l=new Set,v.set(u,l))),!l.has(a)){l.add(a);var y=T_.bind(null,s,u,a);u.then(y,y)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);l=Error((gr(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ie!==5&&(Ie=2),l=Pc(l,a),d=o;do{switch(d.tag){case 3:s=l,d.flags|=4096,e&=-e,d.lanes|=e;var R=sg(d,s,e);Im(d,R);break e;case 1:s=l;var T=d.type,O=d.stateNode;if((d.flags&64)==0&&(typeof T.getDerivedStateFromError=="function"||O!==null&&typeof O.componentDidCatch=="function"&&(It===null||!It.has(O)))){d.flags|=4096,e&=-e,d.lanes|=e;var L=og(d,s,e);Im(d,L);break e}}d=d.return}while(d!==null)}_g(n)}catch(P){e=P,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function wg(){var t=fa.current;return fa.current=ca,t===null?ca:t}function ds(t,e){var n=$;$|=16;var r=wg();be===t&&De===e||jr(t,e);do try{y_();break}catch(i){vg(t,i)}while(1);if(hc(),$=n,fa.current=r,ce!==null)throw Error(I(261));return be=null,De=0,Ie}function y_(){for(;ce!==null;)Eg(ce)}function v_(){for(;ce!==null&&!Z1();)Eg(ce)}function Eg(t){var e=Sg(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?_g(t):ce=e,$c.current=null}function _g(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=l_(n,e,Fn),n!==null){ce=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Fn&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=u_(e),n!==null){n.flags&=2047,ce=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);Ie===0&&(Ie=5)}function Vn(t){var e=xr();return Mn(99,w_.bind(null,t,e)),null}function w_(t,e){do an();while(us!==null);if(($&48)!=0)throw Error(I(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var l=31-Gt(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(Mt!==null&&(r&24)==0&&Mt.has(t)&&Mt.delete(t),t===be&&(ce=be=null,De=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=$,$|=32,$c.current=null,Zu=Mo,o=Wp(),Qu(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,p=-1,d=-1,g=0,w=0,E=o,h=null;t:for(;;){for(var f;E!==a||s!==0&&E.nodeType!==3||(p=c+s),E!==l||u!==0&&E.nodeType!==3||(d=c+u),E.nodeType===3&&(c+=E.nodeValue.length),(f=E.firstChild)!==null;)h=E,E=f;for(;;){if(E===o)break t;if(h===a&&++g===s&&(p=c),h===l&&++w===u&&(d=c),(f=E.nextSibling)!==null)break;E=h,h=E.parentNode}E=f}a=p===-1||d===-1?null:{start:p,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;ec={focusedElem:o,selectionRange:a},Mo=!1,fs=null,ya=!1,A=r;do try{E_()}catch(P){if(A===null)throw Error(I(330));ln(A,P),A=A.nextEffect}while(A!==null);fs=null,A=r;do try{for(o=t;A!==null;){var m=A.flags;if(m&16&&Ai(A.stateNode,""),m&128){var v=A.alternate;if(v!==null){var y=v.ref;y!==null&&(typeof y=="function"?y(null):y.current=null)}}switch(m&1038){case 2:fg(A),A.flags&=-3;break;case 6:fg(A),A.flags&=-3,Mc(A.alternate,A);break;case 1024:A.flags&=-1025;break;case 1028:A.flags&=-1025,Mc(A.alternate,A);break;case 4:Mc(A.alternate,A);break;case 8:a=A,dg(o,a);var R=a.alternate;cg(a),R!==null&&cg(R)}A=A.nextEffect}}catch(P){if(A===null)throw Error(I(330));ln(A,P),A=A.nextEffect}while(A!==null);if(y=ec,v=Wp(),m=y.focusedElem,o=y.selectionRange,v!==m&&m&&m.ownerDocument&&Hp(m.ownerDocument.documentElement,m)){for(o!==null&&Qu(m)&&(v=o.start,y=o.end,y===void 0&&(y=v),"selectionStart"in m?(m.selectionStart=v,m.selectionEnd=Math.min(y,m.value.length)):(y=(v=m.ownerDocument||document)&&v.defaultView||window,y.getSelection&&(y=y.getSelection(),a=m.textContent.length,R=Math.min(o.start,a),o=o.end===void 0?R:Math.min(o.end,a),!y.extend&&R>o&&(a=o,o=R,R=a),a=qp(m,R),s=qp(m,o),a&&s&&(y.rangeCount!==1||y.anchorNode!==a.node||y.anchorOffset!==a.offset||y.focusNode!==s.node||y.focusOffset!==s.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),y.removeAllRanges(),R>o?(y.addRange(v),y.extend(s.node,s.offset)):(v.setEnd(s.node,s.offset),y.addRange(v)))))),v=[],y=m;y=y.parentNode;)y.nodeType===1&&v.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<v.length;m++)y=v[m],y.element.scrollLeft=y.left,y.element.scrollTop=y.top}Mo=!!Zu,ec=Zu=null,t.current=n,A=r;do try{for(m=t;A!==null;){var T=A.flags;if(T&36&&d_(m,A.alternate,A),T&128){v=void 0;var O=A.ref;if(O!==null){var L=A.stateNode;switch(A.tag){case 5:v=L;break;default:v=L}typeof O=="function"?O(v):O.current=v}}A=A.nextEffect}}catch(P){if(A===null)throw Error(I(330));ln(A,P),A=A.nextEffect}while(A!==null);A=null,t_(),$=i}else t.current=n;if(rn)rn=!1,us=t,cs=e;else for(A=r;A!==null;)e=A.nextEffect,A.nextEffect=null,A.flags&8&&(T=A,T.sibling=null,T.stateNode=null),A=e;if(r=t.pendingLanes,r===0&&(It=null),r===1?t===Hc?hs++:(hs=0,Hc=t):hs=0,n=n.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(sc,n,void 0,(n.current.flags&64)==64)}catch{}if(at(t,Pe()),pa)throw pa=!1,t=Bc,Bc=null,t;return($&8)!=0||vt(),null}function E_(){for(;A!==null;){var t=A.alternate;ya||fs===null||((A.flags&8)!=0?fp(A,fs)&&(ya=!0):A.tag===13&&p_(t,A)&&fp(A,fs)&&(ya=!0));var e=A.flags;(e&256)!=0&&f_(t,A),(e&512)==0||rn||(rn=!0,Qi(97,function(){return an(),null})),A=A.nextEffect}}function an(){if(cs!==90){var t=97<cs?97:cs;return cs=90,Mn(t,I_)}return!1}function __(t,e){zc.push(e,t),rn||(rn=!0,Qi(97,function(){return an(),null}))}function Ig(t,e){qc.push(e,t),rn||(rn=!0,Qi(97,function(){return an(),null}))}function I_(){if(us===null)return!1;var t=us;if(us=null,($&48)!=0)throw Error(I(331));var e=$;$|=32;var n=qc;qc=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(l){if(s===null)throw Error(I(330));ln(s,l)}}for(n=zc,zc=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(s===null)throw Error(I(330));ln(s,l)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return $=e,vt(),!0}function Tg(t,e,n){e=Pc(n,e),e=sg(t,e,1),tn(t,e),e=Xe(),t=va(t,1),t!==null&&(Lo(t,1,e),at(t,e))}function ln(t,e){if(t.tag===3)Tg(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Tg(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(It===null||!It.has(r))){t=Pc(e,t);var i=og(n,t,1);if(tn(n,i),i=Xe(),n=va(n,1),n!==null)Lo(n,1,i),at(n,i);else if(typeof r.componentDidCatch=="function"&&(It===null||!It.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function T_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(De&n)===n&&(Ie===4||Ie===3&&(De&62914560)===De&&500>Pe()-Vc?jr(t,0):Uc|=n),at(t,e)}function S_(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=xr()===99?1:2:($t===0&&($t=br),e=Ir(62914560&~$t),e===0&&(e=4194304))),n=Xe(),t=va(t,e),t!==null&&(Lo(t,e,n),at(t,n))}var Sg;Sg=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)pt=!0;else if((n&r)!=0)pt=(t.flags&16384)!=0;else{switch(pt=!1,e.tag){case 3:Qm(e),vc();break;case 5:Om(e);break;case 1:qe(e.type)&&Ko(e);break;case 4:mc(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ne(Yo,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?Ym(t,e,n):(ne(re,re.current&1),e=Lt(t,e,n),e!==null?e.sibling:null);ne(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return tg(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(re,re.current),r)break;return null;case 23:case 24:return e.lanes=0,Cc(t,e,n)}return Lt(t,e,n)}else pt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Pr(e,Oe.current),Lr(e,n),i=_c(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)){var s=!0;Ko(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dc(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Zo(e,r,o,t),i.updater=ea,e.stateNode=i,i._reactInternals=e,pc(e,r,t,n),e=Ac(null,e,r,!0,s,n)}else e.tag=0,We(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=C_(i),t=dt(i,t),s){case 0:e=Rc(null,e,i,t,n);break e;case 1:e=Gm(null,e,i,t,n);break e;case 11:e=qm(null,e,i,t,n);break e;case 14:e=Hm(null,e,i,dt(i.type,t),r,n);break e}throw Error(I(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Rc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Gm(t,e,r,i,n);case 3:if(Qm(e),r=e.updateQueue,t===null||r===null)throw Error(I(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,_m(t,e),Yi(e,r,null,n),r=e.memoizedState.element,r===i)vc(),e=Lt(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(nn=Rr(e.stateNode.containerInfo.firstChild),Dt=e,s=Et=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],$r.push(s);for(n=Nm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else We(t,e,r,n),vc();e=e.child}return e;case 5:return Om(e),t===null&&yc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,tc(r,i)?o=null:s!==null&&tc(r,s)&&(e.flags|=16),Km(t,e),We(t,e,o,n),e.child;case 6:return t===null&&yc(e),null;case 13:return Ym(t,e,n);case 4:return mc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ra(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),qm(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ne(Yo,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=it(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!ze.current){e=Lt(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&s)!=0){a.tag===1&&(u=en(-1,n&-n),u.tag=2,tn(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Em(a.return,n),l.lanes|=n;break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Lr(e,n),i=st(i,s.unstable_observedBits),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return i=e.type,s=dt(i,e.pendingProps),s=dt(i.type,s),Hm(t,e,i,s,r,n);case 15:return Wm(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,qe(r)?(t=!0,Ko(e)):t=!1,Lr(e,n),Cm(e,r,i),pc(e,r,i,n),Ac(null,e,r,!0,t,n);case 19:return tg(t,e,n);case 23:return Cc(t,e,n);case 24:return Cc(t,e,n)}throw Error(I(156,e.tag))};function k_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new k_(t,e,n,r)}function Gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C_(t){if(typeof t=="function")return Gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_o)return 11;if(t===To)return 14}return 2}function un(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ea(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zt:return Br(n.children,i,s,e);case qd:o=8,i|=16;break;case iu:o=8,i|=1;break;case Si:return t=lt(12,n,e,i|8),t.elementType=Si,t.type=Si,t.lanes=s,t;case ki:return t=lt(13,n,e,i),t.type=ki,t.elementType=ki,t.lanes=s,t;case Io:return t=lt(19,n,e,i),t.elementType=Io,t.lanes=s,t;case cu:return Qc(n,i,s,e);case hu:return t=lt(24,n,e,i),t.elementType=hu,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case su:o=10;break e;case ou:o=9;break e;case _o:o=11;break e;case To:o=14;break e;case au:o=16,r=null;break e;case lu:o=22;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Qc(t,e,n,r){return t=lt(23,t,r,e),t.elementType=cu,t.lanes=n,t}function Yc(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function Xc(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function R_(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.mutableSourceEagerHydrationData=null}function A_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _a(t,e,n,r){var i=e.current,s=Xe(),o=sn(i);e:if(n){n=n._reactInternals;t:{if(Pn(n)!==n||n.tag!==1)throw Error(I(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(qe(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(I(171))}if(n.tag===1){var l=n.type;if(qe(l)){n=cm(n,l,a);break e}}n=a}else n=Jt;return e.context===null?e.context=n:e.pendingContext=n,e=en(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),tn(i,e),on(i,o,s),o}function Jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zc(t,e){kg(t,e),(t=t.alternate)&&kg(t,e)}function N_(){return null}function eh(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new R_(t,e,n!=null&&n.hydrate===!0),e=lt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,dc(e),t[Ar]=n.current,Zp(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}eh.prototype.render=function(t){_a(t,this._internalRoot,null,null)};eh.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;_a(null,t,null,function(){e[Ar]=null})};function ps(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function O_(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new eh(t,0,e?{hydrate:!0}:void 0)}function Ia(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Jc(o);a.call(u)}}_a(e,o,t,i)}else{if(s=n._reactRootContainer=O_(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Jc(o);l.call(u)}}yg(function(){_a(e,o,t,i)})}return Jc(o)}dp=function(t){if(t.tag===13){var e=Xe();on(t,4,e),Zc(t,4)}};Pu=function(t){if(t.tag===13){var e=Xe();on(t,67108864,e),Zc(t,67108864)}};pp=function(t){if(t.tag===13){var e=Xe(),n=sn(t);on(t,n,e),Zc(t,n)}};mp=function(t,e){return e()};Su=function(t,e,n){switch(e){case"input":if(mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ho(r);if(!i)throw Error(I(90));Kd(r),mu(r,i)}}}break;case"textarea":Jd(t,n);break;case"select":e=n.value,e!=null&&yr(t,!!n.multiple,e,!1)}};ku=gg;ap=function(t,e,n,r,i){var s=$;$|=4;try{return Mn(98,t.bind(null,e,n,r,i))}finally{$=s,$===0&&(Fr(),vt())}};Cu=function(){($&49)==0&&(g_(),an())};lp=function(t,e){var n=$;$|=2;try{return t(e)}finally{$=n,$===0&&(Fr(),vt())}};function Cg(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(e))throw Error(I(200));return A_(t,e,null,n)}var P_={Events:[Gi,Nr,Ho,sp,op,an,{current:!1}]},ms={findFiberByHostInstance:xn,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},x_={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=hp(t),t===null?null:t.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||N_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{sc=Ta.inject(x_),Ln=Ta}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_;rt.createPortal=Cg;rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):Error(I(268,Object.keys(t)));return t=hp(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t,e){var n=$;if((n&48)!=0)return t(e);$|=1;try{if(t)return Mn(99,t.bind(null,e))}finally{$=n,vt()}};rt.hydrate=function(t,e,n){if(!ps(e))throw Error(I(200));return Ia(null,t,e,!0,n)};rt.render=function(t,e,n){if(!ps(e))throw Error(I(200));return Ia(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!ps(t))throw Error(I(40));return t._reactRootContainer?(yg(function(){Ia(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};rt.unstable_batchedUpdates=gg;rt.unstable_createPortal=function(t,e){return Cg(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ps(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Ia(t,e,n,!1,r)};rt.version="17.0.2";function Rg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rg)}catch(t){console.error(t)}}Rg(),bd.exports=rt;var WP=bd.exports,th={exports:{}},gs={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_=F.exports,Ag=60103;gs.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Ng=Symbol.for;Ag=Ng("react.element"),gs.Fragment=Ng("react.fragment")}var L_=D_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M_=Object.prototype.hasOwnProperty,$_={key:!0,ref:!0,__self:!0,__source:!0};function Og(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)M_.call(e,r)&&!$_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ag,type:t,key:s,ref:o,props:i,_owner:L_.current}}gs.jsx=Og;gs.jsxs=Og;th.exports=gs;const KP=th.exports.jsx,GP=th.exports.jsxs;function Sa(){return Sa=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sa.apply(this,arguments)}var jn,nh=jn||(jn={});nh.Pop="POP";nh.Push="PUSH";nh.Replace="REPLACE";var Pg=function(t){return t};function xg(t){t.preventDefault(),t.returnValue=""}function Dg(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(n){return n!==e})}},call:function(e){t.forEach(function(n){return n&&n(e)})}}}function b_(){return Math.random().toString(36).substr(2,8)}function rh(t){var e=t.pathname;e=e===void 0?"/":e;var n=t.search;return n=n===void 0?"":n,t=t.hash,t=t===void 0?"":t,n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function Bn(t){var e={};if(t){var n=t.indexOf("#");0<=n&&(e.hash=t.substr(n),t=t.substr(0,n)),n=t.indexOf("?"),0<=n&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function U_(t){function e(){var h=l.location,f=u.state||{};return[f.idx,Pg({pathname:h.pathname,search:h.search,hash:h.hash,state:f.usr||null,key:f.key||"default"})]}function n(h){return typeof h=="string"?h:rh(h)}function r(h,f){return f===void 0&&(f=null),Pg(Sa({pathname:g.pathname,hash:"",search:""},typeof h=="string"?Bn(h):h,{state:f,key:b_()}))}function i(h){p=h,h=e(),d=h[0],g=h[1],w.call({action:p,location:g})}function s(h,f){function m(){s(h,f)}var v=jn.Push,y=r(h,f);if(!E.length||(E.call({action:v,location:y,retry:m}),!1)){var R=[{usr:y.state,key:y.key,idx:d+1},n(y)];y=R[0],R=R[1];try{u.pushState(y,"",R)}catch{l.location.assign(R)}i(v)}}function o(h,f){function m(){o(h,f)}var v=jn.Replace,y=r(h,f);E.length&&(E.call({action:v,location:y,retry:m}),1)||(y=[{usr:y.state,key:y.key,idx:d},n(y)],u.replaceState(y[0],"",y[1]),i(v))}function a(h){u.go(h)}t===void 0&&(t={}),t=t.window;var l=t===void 0?document.defaultView:t,u=l.history,c=null;l.addEventListener("popstate",function(){if(c)E.call(c),c=null;else{var h=jn.Pop,f=e(),m=f[0];if(f=f[1],E.length){if(m!=null){var v=d-m;v&&(c={action:h,location:f,retry:function(){a(-1*v)}},a(v))}}else i(h)}});var p=jn.Pop;t=e();var d=t[0],g=t[1],w=Dg(),E=Dg();return d==null&&(d=0,u.replaceState(Sa({},u.state,{idx:d}),"")),{get action(){return p},get location(){return g},createHref:n,push:s,replace:o,go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(h){return w.push(h)},block:function(h){var f=E.push(h);return E.length===1&&l.addEventListener("beforeunload",xg),function(){f(),E.length||l.removeEventListener("beforeunload",xg)}}}}/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tt(t,e){if(!t)throw new Error(e)}const ih=F.exports.createContext(null),sh=F.exports.createContext(null),zr=F.exports.createContext({outlet:null,matches:[]});function F_(t){return H_(t.context)}function V_(t){Tt(!1)}function j_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:s,static:o=!1}=t;ys()&&Tt(!1);let a=hI(e),l=F.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Bn(r));let{pathname:u="/",search:c="",hash:p="",state:d=null,key:g="default"}=r,w=F.exports.useMemo(()=>{let E=Ug(u,a);return E==null?null:{pathname:E,search:c,hash:p,state:d,key:g}},[a,u,c,p,d,g]);return w==null?null:F.exports.createElement(ih.Provider,{value:l},F.exports.createElement(sh.Provider,{children:n,value:{location:w,navigationType:i}}))}function QP(t){let{children:e,location:n}=t;return W_(oh(e),n)}function B_(t){ys()||Tt(!1);let{basename:e,navigator:n}=F.exports.useContext(ih),{hash:r,pathname:i,search:s}=Lg(t),o=i;if(e!=="/"){let a=cI(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):cn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function ys(){return F.exports.useContext(sh)!=null}function ka(){return ys()||Tt(!1),F.exports.useContext(sh).location}function z_(){ys()||Tt(!1);let{basename:t,navigator:e}=F.exports.useContext(ih),{matches:n}=F.exports.useContext(zr),{pathname:r}=ka(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=F.exports.useRef(!1);return F.exports.useEffect(()=>{s.current=!0}),F.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=bg(a,JSON.parse(i),r);t!=="/"&&(u.pathname=cn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}const q_=F.exports.createContext(null);function H_(t){let e=F.exports.useContext(zr).outlet;return e&&F.exports.createElement(q_.Provider,{value:t},e)}function YP(){let{matches:t}=F.exports.useContext(zr),e=t[t.length-1];return e?e.params:{}}function Lg(t){let{matches:e}=F.exports.useContext(zr),{pathname:n}=ka(),r=JSON.stringify(e.map(i=>i.pathnameBase));return F.exports.useMemo(()=>bg(t,JSON.parse(r),n),[t,r,n])}function W_(t,e){ys()||Tt(!1);let{matches:n}=F.exports.useContext(zr),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=ka(),a;if(e){var l;let d=typeof e=="string"?Bn(e):e;s==="/"||((l=d.pathname)==null?void 0:l.startsWith(s))||Tt(!1),a=d}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",p=K_(t,{pathname:c});return iI(p&&p.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:cn([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:cn([s,d.pathnameBase])})),n)}function oh(t){let e=[];return F.exports.Children.forEach(t,n=>{if(!F.exports.isValidElement(n))return;if(n.type===F.exports.Fragment){e.push.apply(e,oh(n.props.children));return}n.type!==V_&&Tt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=oh(n.props.children)),e.push(r)}),e}function K_(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Bn(e):e,i=Ug(r.pathname||"/",n);if(i==null)return null;let s=Mg(t);G_(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=rI(s[a],i);return o}function Mg(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Tt(!1),o.relativePath=o.relativePath.slice(r.length));let a=cn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Tt(!1),Mg(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:tI(a,i.index),routesMeta:l})}),e}function G_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:nI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Q_=/^:\w+$/,Y_=3,X_=2,J_=1,Z_=10,eI=-2,$g=t=>t==="*";function tI(t,e){let n=t.split("/"),r=n.length;return n.some($g)&&(r+=eI),e&&(r+=X_),n.filter(i=>!$g(i)).reduce((i,s)=>i+(Q_.test(s)?Y_:s===""?J_:Z_),r)}function nI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function rI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=sI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let p=a.route;s.push({params:r,pathname:cn([i,c.pathname]),pathnameBase:cn([i,c.pathnameBase]),route:p}),c.pathnameBase!=="/"&&(i=cn([i,c.pathnameBase]))}return s}function iI(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>F.exports.createElement(zr.Provider,{children:r.route.element!==void 0?r.route.element:F.exports.createElement(F_,null),value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function sI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=oI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,p)=>{if(c==="*"){let d=a[p]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=aI(a[p]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function oI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function aI(t,e){try{return decodeURIComponent(t)}catch{return t}}function lI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Bn(t):t;return{pathname:n?n.startsWith("/")?n:uI(n,e):e,search:fI(r),hash:dI(i)}}function uI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bg(t,e,n){let r=typeof t=="string"?Bn(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=lI(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function cI(t){return t===""||t.pathname===""?"/":typeof t=="string"?Bn(t).pathname:t.pathname}function Ug(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const cn=t=>t.join("/").replace(/\/\/+/g,"/"),hI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ah(){return ah=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ah.apply(this,arguments)}function pI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const mI=["onClick","reloadDocument","replace","state","target","to"];function XP(t){let{basename:e,children:n,window:r}=t,i=F.exports.useRef();i.current==null&&(i.current=U_({window:r}));let s=i.current,[o,a]=F.exports.useState({action:s.action,location:s.location});return F.exports.useLayoutEffect(()=>s.listen(a),[s]),F.exports.createElement(j_,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function gI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const JP=F.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=pI(e,mI),c=B_(l),p=yI(l,{replace:s,state:o,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&p(g)}return F.exports.createElement("a",ah({},u,{href:c,onClick:d,ref:n,target:a}))});function yI(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=z_(),o=ka(),a=Lg(t);return F.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!gI(l)){l.preventDefault();let u=!!r||rh(o)===rh(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},EI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,p=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(n[c],n[p],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),p!==64){const w=u<<6&192|p;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_I=function(t){try{return EI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function lh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){return pe().indexOf("Electron/")>=0}function jg(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SI(){return pe().indexOf("MSAppHost/")>=0}function kI(){return typeof indexedDB=="object"}function CI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function RI(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="FirebaseError";class St extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=AI,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new St(i,a,r)}}function NI(t,e){return t.replace(OI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OI=/\{\$([^}]+)}/g;function PI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bg(s)&&Bg(o)){if(!vs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Es(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function _s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xI(t,e){const n=new DI(t,e);return n.subscribe.bind(n)}class DI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=uh),i.error===void 0&&(i.error=uh),i.complete===void 0&&(i.complete=uh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=1e3,$I=2,bI=4*60*60*1e3,UI=.5;function zg(t,e=MI,n=$I){const r=e*Math.pow(n,t),i=Math.round(UI*r*(Math.random()-.5)*2);return Math.min(bI,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new II;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jI(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VI(t){return t===qn?void 0:t}function jI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const zI={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},qI=W.INFO,HI={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},WI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=HI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=qI,this._logHandler=WI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",qg="0.7.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=new Ca("@firebase/app"),QI="@firebase/app-compat",YI="@firebase/analytics-compat",XI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",eT="@firebase/auth",tT="@firebase/auth-compat",nT="@firebase/database",rT="@firebase/database-compat",iT="@firebase/functions",sT="@firebase/functions-compat",oT="@firebase/installations",aT="@firebase/installations-compat",lT="@firebase/messaging",uT="@firebase/messaging-compat",cT="@firebase/performance",hT="@firebase/performance-compat",fT="@firebase/remote-config",dT="@firebase/remote-config-compat",pT="@firebase/storage",mT="@firebase/storage-compat",gT="@firebase/firestore",yT="@firebase/firestore-compat",vT="firebase",wT="9.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="[DEFAULT]",ET={[ch]:"fire-core",[QI]:"fire-core-compat",[XI]:"fire-analytics",[YI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[eT]:"fire-auth",[tT]:"fire-auth-compat",[nT]:"fire-rtdb",[rT]:"fire-rtdb-compat",[iT]:"fire-fn",[sT]:"fire-fn-compat",[oT]:"fire-iid",[aT]:"fire-iid-compat",[lT]:"fire-fcm",[uT]:"fire-fcm-compat",[cT]:"fire-perf",[hT]:"fire-perf-compat",[fT]:"fire-rc",[dT]:"fire-rc-compat",[pT]:"fire-gcs",[mT]:"fire-gcs-compat",[gT]:"fire-fst",[yT]:"fire-fst-compat","fire-js":"fire-js",[vT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map,fh=new Map;function _T(t,e){try{t.container.addComponent(e)}catch(n){hh.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(fh.has(e))return hh.debug(`There were multiple attempts to register component ${e}.`),!1;fh.set(e,t);for(const n of Ra.values())_T(n,t);return!0}function hn(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Aa=new zn("app","Firebase",IT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Aa.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=wT;function ZP(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Hg,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Aa.create("bad-app-name",{appName:String(r)});const i=Ra.get(r);if(i){if(vs(t,i.options)&&vs(n,i.config))return i;throw Aa.create("duplicate-app",{appName:r})}const s=new BI(r);for(const a of fh.values())s.addComponent(a);const o=new TT(t,n,s);return Ra.set(r,o),o}function Na(t=Hg){const e=Ra.get(t);if(!e)throw Aa.create("no-app",{appName:t});return e}function Ke(t,e,n){var r;let i=(r=ET[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hh.warn(a.join(" "));return}kt(new mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){kt(new mt("platform-logger",e=>new KI(e),"PRIVATE")),Ke(ch,qg,t),Ke(ch,qg,"esm2017"),Ke("fire-js","")}ST("");var kT="firebase",CT="9.6.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(kT,CT,"app");function RT(t){return Array.prototype.slice.call(t)}function Wg(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function dh(t,e,n){var r,i=new Promise(function(s,o){r=t[e].apply(t,n),Wg(r).then(s,o)});return i.request=r,i}function AT(t,e,n){var r=dh(t,e,n);return r.then(function(i){if(!!i)return new Is(i,r.request)})}function Hr(t,e,n){n.forEach(function(r){Object.defineProperty(t.prototype,r,{get:function(){return this[e][r]},set:function(i){this[e][r]=i}})})}function ph(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return dh(this[e],i,arguments)})})}function Oa(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return this[e][i].apply(this[e],arguments)})})}function Kg(t,e,n,r){r.forEach(function(i){i in n.prototype&&(t.prototype[i]=function(){return AT(this[e],i,arguments)})})}function Hn(t){this._index=t}Hr(Hn,"_index",["name","keyPath","multiEntry","unique"]);ph(Hn,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]);Kg(Hn,"_index",IDBIndex,["openCursor","openKeyCursor"]);function Is(t,e){this._cursor=t,this._request=e}Hr(Is,"_cursor",["direction","key","primaryKey","value"]);ph(Is,"_cursor",IDBCursor,["update","delete"]);["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(Is.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),Wg(e._request).then(function(r){if(!!r)return new Is(r,e._request)})})})});function Ct(t){this._store=t}Ct.prototype.createIndex=function(){return new Hn(this._store.createIndex.apply(this._store,arguments))};Ct.prototype.index=function(){return new Hn(this._store.index.apply(this._store,arguments))};Hr(Ct,"_store",["name","keyPath","indexNames","autoIncrement"]);ph(Ct,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]);Kg(Ct,"_store",IDBObjectStore,["openCursor","openKeyCursor"]);Oa(Ct,"_store",IDBObjectStore,["deleteIndex"]);function Ts(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}Ts.prototype.objectStore=function(){return new Ct(this._tx.objectStore.apply(this._tx,arguments))};Hr(Ts,"_tx",["objectStoreNames","mode"]);Oa(Ts,"_tx",IDBTransaction,["abort"]);function Pa(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new Ts(n)}Pa.prototype.createObjectStore=function(){return new Ct(this._db.createObjectStore.apply(this._db,arguments))};Hr(Pa,"_db",["name","version","objectStoreNames"]);Oa(Pa,"_db",IDBDatabase,["deleteObjectStore","close"]);function xa(t){this._db=t}xa.prototype.transaction=function(){return new Ts(this._db.transaction.apply(this._db,arguments))};Hr(xa,"_db",["name","version","objectStoreNames"]);Oa(xa,"_db",IDBDatabase,["close"]);["openCursor","openKeyCursor"].forEach(function(t){[Ct,Hn].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var n=RT(arguments),r=n[n.length-1],i=this._store||this._index,s=i[t].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})})});[Hn,Ct].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(s){r.iterateCursor(e,function(o){if(!o){s(i);return}if(i.push(o.value),n!==void 0&&i.length==n){s(i);return}o.continue()})})})});function NT(t,e,n){var r=dh(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(s){n&&n(new Pa(i.result,s.oldVersion,i.transaction))}),r.then(function(s){return new xa(s)})}const Gg="@firebase/installations",mh="0.5.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=1e4,Yg=`w:${mh}`,Xg="FIS_v2",OT="https://firebaseinstallations.googleapis.com/v1",PT=60*60*1e3,xT="installations",DT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Wn=new zn(xT,DT,LT);function Jg(t){return t instanceof St&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg({projectId:t}){return`${OT}/projects/${t}/installations`}function ey(t){return{token:t.token,requestStatus:2,expiresIn:$T(t.expiresIn),creationTime:Date.now()}}async function ty(t,e){const r=(await e.json()).error;return Wn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ny({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function MT(t,{refreshToken:e}){const n=ny(t);return n.append("Authorization",bT(e)),n}async function ry(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $T(t){return Number(t.replace("s","000"))}function bT(t){return`${Xg} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,{fid:e}){const n=Zg(t),r=ny(t),i={fid:e,authVersion:Xg,appId:t.appId,sdkVersion:Yg},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await ry(()=>fetch(n,s));if(o.ok){const a=await o.json();return{fid:a.fid||e,registrationStatus:2,refreshToken:a.refreshToken,authToken:ey(a.authToken)}}else throw await ty("Create Installation",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=/^[cdef][\w-]{21}$/,gh="";function jT(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BT(t);return VT.test(n)?n:gh}catch{return gh}}function BT(t){return FT(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Map;function oy(t,e){const n=Da(t);ay(n,e),zT(n,e)}function ay(t,e){const n=sy.get(t);if(!!n)for(const r of n)r(e)}function zT(t,e){const n=qT();n&&n.postMessage({key:t,fid:e}),HT()}let Kn=null;function qT(){return!Kn&&"BroadcastChannel"in self&&(Kn=new BroadcastChannel("[Firebase] FID Change"),Kn.onmessage=t=>{ay(t.data.key,t.data.fid)}),Kn}function HT(){sy.size===0&&Kn&&(Kn.close(),Kn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="firebase-installations-database",KT=1,Gn="firebase-installations-store";let yh=null;function vh(){return yh||(yh=NT(WT,KT,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Gn)}})),yh}async function La(t,e){const n=Da(t),i=(await vh()).transaction(Gn,"readwrite"),s=i.objectStore(Gn),o=await s.get(n);return await s.put(e,n),await i.complete,(!o||o.fid!==e.fid)&&oy(t,e.fid),e}async function ly(t){const e=Da(t),r=(await vh()).transaction(Gn,"readwrite");await r.objectStore(Gn).delete(e),await r.complete}async function Ma(t,e){const n=Da(t),i=(await vh()).transaction(Gn,"readwrite"),s=i.objectStore(Gn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.complete,a&&(!o||o.fid!==a.fid)&&oy(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wh(t){let e;const n=await Ma(t,r=>{const i=GT(r),s=QT(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===gh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GT(t){const e=t||{fid:jT(),registrationStatus:0};return cy(e)}function QT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=YT(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XT(t)}:{installationEntry:e}}async function YT(t,e){try{const n=await UT(t,e);return La(t,n)}catch(n){throw Jg(n)&&n.customData.serverCode===409?await ly(t):await La(t,{fid:e.fid,registrationStatus:0}),n}}async function XT(t){let e=await uy(t);for(;e.registrationStatus===1;)await iy(100),e=await uy(t);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await wh(t);return r||n}return e}function uy(t){return Ma(t,e=>{if(!e)throw Wn.create("installation-not-found");return cy(e)})}function cy(t){return JT(t)?{fid:t.fid,registrationStatus:0}:t}function JT(t){return t.registrationStatus===1&&t.registrationTime+Qg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT({appConfig:t,platformLoggerProvider:e},n){const r=eS(t,n),i=MT(t,n),s=e.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:Yg}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ry(()=>fetch(r,a));if(l.ok){const u=await l.json();return ey(u)}else throw await ty("Generate Auth Token",l)}function eS(t,{fid:e}){return`${Zg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(t,e=!1){let n;const r=await Ma(t.appConfig,s=>{if(!fy(s))throw Wn.create("not-registered");const o=s.authToken;if(!e&&rS(o))return s;if(o.requestStatus===1)return n=tS(t,e),s;{if(!navigator.onLine)throw Wn.create("app-offline");const a=sS(s);return n=nS(t,a),a}});return n?await n:r.authToken}async function tS(t,e){let n=await hy(t.appConfig);for(;n.authToken.requestStatus===1;)await iy(100),n=await hy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Eh(t,e):r}function hy(t){return Ma(t,e=>{if(!fy(e))throw Wn.create("not-registered");const n=e.authToken;return oS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function nS(t,e){try{const n=await ZT(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await La(t.appConfig,r),n}catch(n){if(Jg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ly(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await La(t.appConfig,r)}throw n}}function fy(t){return t!==void 0&&t.registrationStatus===2}function rS(t){return t.requestStatus===2&&!iS(t)}function iS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PT}function sS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function oS(t){return t.requestStatus===1&&t.requestTime+Qg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(t){const e=t,{installationEntry:n,registrationPromise:r}=await wh(e.appConfig);return r?r.catch(console.error):Eh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e=!1){const n=t;return await uS(n.appConfig),(await Eh(n,e)).token}async function uS(t){const{registrationPromise:e}=await wh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){if(!t||!t.options)throw _h("App Configuration");if(!t.name)throw _h("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _h(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _h(t){return Wn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="installations",hS="installations-internal",fS=t=>{const e=t.getProvider("app").getImmediate(),n=cS(e),r=hn(e,"platform-logger");return{app:e,appConfig:n,platformLoggerProvider:r,_delete:()=>Promise.resolve()}},dS=t=>{const e=t.getProvider("app").getImmediate(),n=hn(e,dy).getImmediate();return{getId:()=>aS(n),getToken:i=>lS(n,i)}};function pS(){kt(new mt(dy,fS,"PUBLIC")),kt(new mt(hS,dS,"PRIVATE"))}pS();Ke(Gg,mh);Ke(Gg,mh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="analytics",mS="firebase_id",gS="origin",yS=60*1e3,vS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",py="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Ca("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function wS(t,e){const n=document.createElement("script");n.src=`${py}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function ES(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _S(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await my(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Je.error(a)}t("config",i,s)}async function IS(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await my(n);for(const l of o){const u=a.find(p=>p.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Je.error(s)}}function TS(t,e,n,r){async function i(s,o,a){try{s==="event"?await IS(t,e,n,o,a):s==="config"?await _S(t,e,n,r,o,a):t("set",o)}catch(l){Je.error(l)}}return i}function SS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=TS(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function kS(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(py))return e;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ut=new zn("analytics","Analytics",CS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=30,AS=1e3;class NS{constructor(e={},n=AS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gy=new NS;function OS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function PS(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:OS(r)},s=vS.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();((e=l.error)===null||e===void 0?void 0:e.message)&&(a=l.error.message)}catch{}throw ut.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function xS(t,e=gy,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new MS;return setTimeout(async()=>{a.abort()},n!==void 0?n:yS),yy({appId:r,apiKey:i,measurementId:s},o,a,e)}async function yy(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=gy){const{appId:s,measurementId:o}=t;try{await DS(r,e)}catch(a){if(o)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}try{const a=await PS(t);return i.deleteThrottleMetadata(s),a}catch(a){if(!LS(a)){if(i.deleteThrottleMetadata(s),o)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:s,measurementId:o};throw a}const l=Number(a.customData.httpStatus)===503?zg(n,i.intervalMillis,RS):zg(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(s,u),Je.debug(`Calling attemptFetch again in ${l} millis`),yy(t,u,r,i)}}function DS(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function LS(t){if(!(t instanceof St)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class MS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(){if(kI())try{await CI()}catch(t){return Je.warn(ut.create("indexeddb-unavailable",{errorInfo:t}).message),!1}else return Je.warn(ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bS(t,e,n,r,i,s,o){var a;const l=xS(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Je.error(g)),e.push(l);const u=$S().then(g=>{if(g)return r.getId()}),[c,p]=await Promise.all([l,u]);kS()||wS(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[gS]="firebase",d.update=!0,p!=null&&(d[mS]=p),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.app=e}_delete(){return delete Ss[this.app.options.appId],Promise.resolve()}}let Ss={},vy=[];const wy={};let Ih="dataLayer",FS="gtag",Ey,_y,Iy=!1;function VS(){const t=[];if(lh()&&t.push("This is a browser extension environment."),RI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ut.create("invalid-analytics-context",{errorInfo:e});Je.warn(n.message)}}function jS(t,e,n){VS();const r=t.options.appId;if(!r)throw ut.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ut.create("no-api-key");if(Ss[r]!=null)throw ut.create("already-exists",{id:r});if(!Iy){ES(Ih);const{wrappedGtag:s,gtagCore:o}=SS(Ss,vy,wy,Ih,FS);_y=s,Ey=o,Iy=!0}return Ss[r]=bS(t,vy,wy,e,Ey,Ih,n),new US(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}function ex(t=Na()){t=he(t);const e=hn(t,$a);return e.isInitialized()?e.getImmediate():zS(t)}function zS(t,e={}){const n=hn(t,$a);if(n.isInitialized()){const i=n.getImmediate();if(vs(e,n.getOptions()))return i;throw ut.create("already-initialized")}return n.initialize({options:e})}function qS(t,e,n,r){t=he(t),BS(_y,Ss[t.app.options.appId],e,n,r).catch(i=>Je.error(i))}const Ty="@firebase/analytics",Sy="0.7.5";function HS(){kt(new mt($a,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return jS(r,i,n)},"PUBLIC")),kt(new mt("analytics-internal",t,"PRIVATE")),Ke(Ty,Sy),Ke(Ty,Sy,"esm2017");function t(e){try{const n=e.getProvider($a).getImmediate();return{logEvent:(r,i,s)=>qS(n,r,i,s)}}catch(n){throw ut.create("interop-component-reg-failed",{reason:n})}}}HS();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Th(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ky(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WS=ky,Cy=new zn("auth","Firebase",ky());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry=new Ca("@firebase/auth");function ba(t,...e){Ry.logLevel<=W.ERROR&&Ry.error(`Auth (${qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw Sh(t,...e)}function Rt(t,...e){return Sh(t,...e)}function Ay(t,e,n){const r=Object.assign(Object.assign({},WS()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function KS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),Ay(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cy.create(t,...e)}function M(t,e,...n){if(!t)throw Sh(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ba(e),new Error(e)}function Ut(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=new Map;function Ft(t){Ut(t instanceof Function,"Expected a class definition");let e=Ny.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ny.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t,e){const n=hn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vs(s,e!=null?e:{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function QS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YS(){return Oy()==="http:"||Oy()==="https:"}function Oy(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YS()||lh()||"connection"in navigator)?navigator.onLine:!0}function JS(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=Fg()||Vg()}get(){return XS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=new ks(3e4,6e4);function Wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kr(t,e,n,r,i={}){return xy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ws(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Py.fetch()(Dy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function xy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZS),e);try{const i=new tk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rh(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rh(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Rh(t,"email-already-in-use",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ay(t,c,u);ct(t,c)}}catch(i){if(i instanceof St)throw i;ct(t,"network-request-failed")}}async function Cs(t,e,n,r,i={}){const s=await Kr(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Dy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ch(t.config,i):`${t.config.apiScheme}://${i}`}class tk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),ek.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rh(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,e){return Kr(t,"POST","/v1/accounts:delete",e)}async function rk(t,e){return Kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(t,e=!1){const n=he(t),r=await n.getIdToken(e),i=Nh(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Rs(Ah(i.auth_time)),issuedAtTime:Rs(Ah(i.iat)),expirationTime:Rs(Ah(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ah(t){return Number(t)*1e3}function Nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=_I(n);return i?JSON.parse(i):(ba("Failed to decode base64 JWT payload"),null)}catch(i){return ba("Caught error parsing JWT payload as JSON",i),null}}function sk(t){const e=Nh(t);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&ok(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ok({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rs(this.lastLoginAt),this.creationTime=Rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t){var e;const n=t.auth,r=await t.getIdToken(),i=await As(t,rk(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?ck(s.providerUserInfo):[],a=uk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ly(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,p)}async function lk(t){const e=he(t);await Ua(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ck(t){return t.map(e=>{var{providerId:n}=e,r=Th(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hk(t,e){const n=await xy(t,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Dy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Py.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):sk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ns;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){M(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ly(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await As(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ik(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ua(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await As(this,nk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,h=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:y,isAnonymous:R,providerData:T,stsTokenManager:O}=n;M(v&&O,e,"internal-error");const L=Ns.fromJSON(this.name,O);M(typeof v=="string",e,"internal-error"),fn(p,e.name),fn(d,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof R=="boolean",e,"internal-error"),fn(g,e.name),fn(w,e.name),fn(E,e.name),fn(h,e.name),fn(f,e.name),fn(m,e.name);const P=new Qn({uid:v,auth:e,email:d,emailVerified:y,displayName:p,isAnonymous:R,photoURL:w,phoneNumber:g,tenantId:E,stsTokenManager:L,createdAt:f,lastLoginAt:m});return T&&Array.isArray(T)&&(P.providerData=T.map(ue=>Object.assign({},ue))),h&&(P._redirectEventId=h),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ns;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ua(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}My.type="NONE";const $y=My;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(Ft($y),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft($y);const o=Fa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const p=Qn._fromJSON(e,c);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Gr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Gr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(By(e))return"Blackberry";if(zy(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if(jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Uy(t=pe()){return/firefox\//i.test(t)}function Oh(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(t=pe()){return/crios\//i.test(t)}function Vy(t=pe()){return/iemobile/i.test(t)}function jy(t=pe()){return/android/i.test(t)}function By(t=pe()){return/blackberry/i.test(t)}function zy(t=pe()){return/webos/i.test(t)}function Va(t=pe()){return/iphone|ipad|ipod/i.test(t)}function fk(t=pe()){var e;return Va(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function dk(){return jg()&&document.documentMode===10}function qy(t=pe()){return Va(t)||jy(t)||zy(t)||By(t)||/windows phone/i.test(t)||Vy(t)}function pk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e=[]){let n;switch(t){case"Browser":n=by(pe());break;case"Worker":n=`${by(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wy(this),this.idTokenSubscription=new Wy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ua(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?he(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Os(t){return he(t)}class Wy{constructor(e){this.auth=e,this.observer=null,this.addObserver=xI(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}async function gk(t,e){return Kr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(t,e){return Cs(t,"POST","/v1/accounts:signInWithPassword",Wr(t,e))}async function vk(t,e){return Kr(t,"POST","/v1/accounts:sendOobCode",Wr(t,e))}async function wk(t,e){return vk(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e){return Cs(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}async function _k(t,e){return Cs(t,"POST","/v1/accounts:signInWithEmailLink",Wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Ph{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ps(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ps(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return yk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ek(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return _k(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(t,e){return Cs(t,"POST","/v1/accounts:signInWithIdp",Wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="http://localhost";class Yn extends Ph{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Th(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qr(e,n)}buildRequest(){const e={requestUri:Ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ws(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sk(t){const e=Es(_s(t)).link,n=e?Es(_s(e)).deep_link_id:null,r=Es(_s(t)).deep_link_id;return(r?Es(_s(r)).link:null)||r||n||e||t}class xh{constructor(e){var n,r,i,s,o,a;const l=Es(_s(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Tk((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Sk(e);try{return new xh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,n){return Ps._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xh.parseLink(n);return M(r,"argument-error"),Ps._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Dh{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends xs{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends xs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends xs{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends xs{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e){return Cs(t,"POST","/v1/accounts:signUp",Wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Qn._fromIdTokenResponse(e,r,i),o=Ky(r);return new Xn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ky(r);return new Xn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends St{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,ja.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ja(e,n,r,i)}}function Gy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ja._fromErrorAndOperation(t,s,e,r):s})}async function Ck(t,e,n=!1){const r=await As(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await As(t,Gy(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Nh(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Xn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(t,e,n=!1){const r="signIn",i=await Gy(t,r,e),s=await Xn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ak(t,e){return Qy(Os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t,e,n){var r;M(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),M(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(M(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(M(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e,n){const r=he(t),i={requestType:"PASSWORD_RESET",email:e};n&&Nk(r,i,n),await wk(r,i)}async function nx(t,e,n){const r=Os(t),i=await kk(r,{returnSecureToken:!0,email:e,password:n}),s=await Xn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function rx(t,e,n){return Ak(he(t),Yr.credential(e,n))}function Ok(t,e,n,r){return he(t).onAuthStateChanged(e,n,r)}function ix(t){return he(t).signOut()}const Ba="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(){const t=pe();return Oh(t)||Va(t)}const xk=1e3,Dk=10;class Xy extends Yy{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pk()&&pk(),this.fallbackToPolling=qy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);dk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xy.type="LOCAL";const Lk=Xy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy extends Yy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jy.type="SESSION";const Zy=Jy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new za(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Mk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Lh("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const d=p;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function bk(t){At().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(){return typeof At().WorkerGlobalScope!="undefined"&&typeof At().importScripts=="function"}async function Uk(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vk(){return ev()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="firebaseLocalStorageDb",jk=1,qa="firebaseLocalStorage",nv="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ha(t,e){return t.transaction([qa],e?"readwrite":"readonly").objectStore(qa)}function Bk(){const t=indexedDB.deleteDatabase(tv);return new Ds(t).toPromise()}function Mh(){const t=indexedDB.open(tv,jk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qa,{keyPath:nv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qa)?e(r):(r.close(),await Bk(),e(await Mh()))})})}async function rv(t,e,n){const r=Ha(t,!0).put({[nv]:e,value:n});return new Ds(r).toPromise()}async function zk(t,e){const n=Ha(t,!1).get(e),r=await new Ds(n).toPromise();return r===void 0?null:r.value}function iv(t,e){const n=Ha(t,!0).delete(e);return new Ds(n).toPromise()}const qk=800,Hk=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(Vk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uk(),!this.activeServiceWorker)return;this.sender=new $k(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mh();return await rv(e,Ba,"1"),await iv(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ha(i,!1).getAll();return new Ds(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const Wk=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kk().appendChild(r)})}function Qk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ks(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t,e){return e?Ft(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h extends Ph{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yk(t){return Qy(t.auth,new $h(t),t.bypassAuthState)}function Xk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Rk(n,new $h(t),t.bypassAuthState)}async function Jk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Ck(n,new $h(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yk;case"linkViaPopup":case"linkViaRedirect":return Jk;case"reauthViaPopup":case"reauthViaRedirect":return Xk;default:ct(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new ks(2e3,1e4);async function sx(t,e,n){const r=Os(t);KS(t,e,Dh);const i=ov(r,n);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}class Jn extends av{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zk.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="pendingRedirect",bh=new Map;class tC extends av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=bh.get(this.auth._key());if(!e){try{const r=await nC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bh.set(this.auth._key(),e)}return this.bypassAuthState||bh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nC(t,e){const n=iC(e),r=rC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rC(t){return Ft(t._redirectPersistence)}function iC(t){return Fa(eC,t.config.apiKey,t.name)}async function sC(t,e,n=!1){const r=Os(t),i=ov(r,e),o=await new tC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=10*60*1e3;class aC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oC&&this.cachedEventUids.clear(),this.cachedEventUids.has(lv(e))}saveEventToCache(e){this.cachedEventUids.add(lv(e)),this.lastProcessedEventTime=Date.now()}}function lv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e={}){return Kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hC=/^https?/;async function fC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uC(t);for(const n of e)try{if(dC(n))return}catch{}ct(t,"unauthorized-domain")}function dC(t){const e=kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hC.test(n))return!1;if(cC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new ks(3e4,6e4);function cv(){const t=At().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mC(t){return new Promise((e,n)=>{var r,i,s;function o(){cv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cv(),n(Rt(t,"network-request-failed"))},timeout:pC.get()})}if((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=At().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Qk("iframefcb");return At()[a]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Gk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wa=null,e})}let Wa=null;function gC(t){return Wa=Wa||mC(t),Wa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=new ks(5e3,15e3),vC="__/auth/iframe",wC="emulator/auth/iframe",EC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ch(e,wC):`https://${t.config.authDomain}/${vC}`,r={apiKey:e.apiKey,appName:t.name,v:qr},i=_C.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ws(r).slice(1)}`}async function TC(t){const e=await gC(t),n=At().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:IC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=At().setTimeout(()=>{s(o)},yC.get());function l(){At().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kC=500,CC=600,RC="_blank",AC="http://localhost";class hv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=kC,i=CC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pe().toLowerCase();n&&(a=Fy(u)?RC:n),Uy(u)&&(e=e||AC,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(fk(u)&&a!=="_self")return OC(e||"",a),new hv(null);const p=window.open(e||"",a,c);M(p,t,"popup-blocked");try{p.focus()}catch{}return new hv(p)}function OC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="__/auth/handler",xC="emulator/auth/handler";function fv(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qr,eventId:i};if(e instanceof Dh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof xs){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${DC(t)}?${ws(a).slice(1)}`}function DC({config:t}){return t.emulator?Ch(t,xC):`https://${t.authDomain}/${PC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="webStorageSupport";class LC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zy,this._completeRedirectFn=sC}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=fv(e,n,r,kh(),i);return NC(e,o,Lh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),bk(fv(e,n,r,kh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TC(e),r=new aC(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uh,{type:Uh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uh];o!==void 0&&n(!!o),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qy()||Oh()||Va()}}const MC=LC;var dv="@firebase/auth",pv="0.19.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function UC(t){kt(new mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{M(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),M(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hy(t)},l=new mk(o,a);return QS(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kt(new mt("auth-internal",e=>{const n=Os(e.getProvider("auth").getImmediate());return(r=>new $C(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(dv,pv,bC(t)),Ke(dv,pv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(t=Na()){const e=hn(t,"auth");return e.isInitialized()?e.getImmediate():GS(t,{popupRedirectResolver:MC,persistence:[Wk,Lk,Zy]})}UC("Browser");var FC=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},C,Fh=Fh||{},U=FC||self;function Ka(){}function Vh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ls(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VC(t){return Object.prototype.hasOwnProperty.call(t,jh)&&t[jh]||(t[jh]=++jC)}var jh="closure_uid_"+(1e9*Math.random()>>>0),jC=0;function BC(t,e,n){return t.call.apply(t.bind,arguments)}function zC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Te(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Te=BC:Te=zC,Te.apply(null,arguments)}function Ga(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Se(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function yn(){this.s=this.s,this.o=this.o}var qC=0,HC={};yn.prototype.s=!1;yn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),qC!=0)){var t=VC(this);delete HC[t]}};yn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},gv=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function WC(t){e:{var e=bR;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function yv(t){return Array.prototype.concat.apply([],arguments)}function Bh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qa(t){return/^[\s\xa0]*$/.test(t)}var vv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ue(t,e){return t.indexOf(e)!=-1}function zh(t,e){return t<e?-1:t>e?1:0}var Fe;e:{var wv=U.navigator;if(wv){var Ev=wv.userAgent;if(Ev){Fe=Ev;break e}}Fe=""}function qh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _v(t){const e={};for(const n in t)e[n]=t[n];return e}var Iv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Iv.length;s++)n=Iv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hh(t){return Hh[" "](t),t}Hh[" "]=Ka;function KC(t){var e=YC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var GC=Ue(Fe,"Opera"),Xr=Ue(Fe,"Trident")||Ue(Fe,"MSIE"),Sv=Ue(Fe,"Edge"),Wh=Sv||Xr,kv=Ue(Fe,"Gecko")&&!(Ue(Fe.toLowerCase(),"webkit")&&!Ue(Fe,"Edge"))&&!(Ue(Fe,"Trident")||Ue(Fe,"MSIE"))&&!Ue(Fe,"Edge"),QC=Ue(Fe.toLowerCase(),"webkit")&&!Ue(Fe,"Edge");function Cv(){var t=U.document;return t?t.documentMode:void 0}var Ya;e:{var Kh="",Gh=function(){var t=Fe;if(kv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sv)return/Edge\/([\d\.]+)/.exec(t);if(Xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QC)return/WebKit\/(\S+)/.exec(t);if(GC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gh&&(Kh=Gh?Gh[1]:""),Xr){var Qh=Cv();if(Qh!=null&&Qh>parseFloat(Kh)){Ya=String(Qh);break e}}Ya=Kh}var YC={};function XC(){return KC(function(){let t=0;const e=vv(String(Ya)).split("."),n=vv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=zh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||zh(i[2].length==0,s[2].length==0)||zh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Yh;if(U.document&&Xr){var Rv=Cv();Yh=Rv||parseInt(Ya,10)||void 0}else Yh=void 0;var JC=Yh,ZC=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",Ka,e),U.removeEventListener("test",Ka,e)}catch{}return t}();function Le(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};function Ms(t,e){if(Le.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kv){e:{try{Hh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ms.Z.h.call(this)}}Se(Ms,Le);var eR={2:"touch",3:"pen",4:"mouse"};Ms.prototype.h=function(){Ms.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $s="closure_listenable_"+(1e6*Math.random()|0),tR=0;function nR(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++tR,this.ca=this.fa=!1}function Xa(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ja(t){this.src=t,this.g={},this.h=0}Ja.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Jh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new nR(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Xh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=mv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Zh="closure_lm_"+(1e6*Math.random()|0),ef={};function Av(t,e,n,r,i){if(r&&r.once)return Ov(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Av(t,e[s],n,r,i);return null}return n=sf(n),t&&t[$s]?t.N(e,n,Ls(r)?!!r.capture:!!r,i):Nv(t,e,n,!1,r,i)}function Nv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ls(i)?!!i.capture:!!i,a=nf(t);if(a||(t[Zh]=a=new Ja(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=rR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(xv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rR(){function t(n){return e.call(t.src,t.listener,n)}var e=iR;return t}function Ov(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ov(t,e[s],n,r,i);return null}return n=sf(n),t&&t[$s]?t.O(e,n,Ls(r)?!!r.capture:!!r,i):Nv(t,e,n,!0,r,i)}function Pv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Pv(t,e[s],n,r,i);else r=Ls(r)?!!r.capture:!!r,n=sf(n),t&&t[$s]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Jh(s,n,r,i),-1<n&&(Xa(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=nf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jh(e,n,r,i)),(n=-1<t?e[t]:null)&&tf(n))}function tf(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[$s])Xh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(xv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=nf(e))?(Xh(n,t),n.h==0&&(n.src=null,e[Zh]=null)):Xa(t)}}}function xv(t){return t in ef?ef[t]:ef[t]="on"+t}function iR(t,e){if(t.ca)t=!0;else{e=new Ms(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&tf(t),t=n.call(r,e)}return t}function nf(t){return t=t[Zh],t instanceof Ja?t:null}var rf="__closure_events_fn_"+(1e9*Math.random()>>>0);function sf(t){return typeof t=="function"?t:(t[rf]||(t[rf]=function(e){return t.handleEvent(e)}),t[rf])}function me(){yn.call(this),this.i=new Ja(this),this.P=this,this.I=null}Se(me,yn);me.prototype[$s]=!0;me.prototype.removeEventListener=function(t,e,n,r){Pv(this,t,e,n,r)};function ke(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Le(e,t);else if(e instanceof Le)e.target=e.target||t;else{var i=e;e=new Le(r,t),Tv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Za(o,r,!0,e)&&i}if(o=e.g=t,i=Za(o,r,!0,e)&&i,i=Za(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Za(o,r,!1,e)&&i}me.prototype.M=function(){if(me.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xa(n[r]);delete t.g[e],t.h--}}this.I=null};me.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};me.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Za(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Xh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var of=U.JSON.stringify;function sR(){var t=Lv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oR{constructor(){this.h=this.g=null}add(e,n){const r=Dv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Dv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aR,t=>t.reset());class aR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lR(t){U.setTimeout(()=>{throw t},0)}function af(t,e){lf||uR(),uf||(lf(),uf=!0),Lv.add(t,e)}var lf;function uR(){var t=U.Promise.resolve(void 0);lf=function(){t.then(cR)}}var uf=!1,Lv=new oR;function cR(){for(var t;t=sR();){try{t.h.call(t.g)}catch(n){lR(n)}var e=Dv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}uf=!1}function el(t,e){me.call(this),this.h=t||1,this.g=e||U,this.j=Te(this.kb,this),this.l=Date.now()}Se(el,me);C=el.prototype;C.da=!1;C.S=null;C.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ke(this,"tick"),this.da&&(cf(this),this.start()))}};C.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cf(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}C.M=function(){el.Z.M.call(this),cf(this),delete this.g};function hf(t,e,n){if(typeof t=="function")n&&(t=Te(t,n));else if(t&&typeof t.handleEvent=="function")t=Te(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function Mv(t){t.g=hf(()=>{t.g=null,t.i&&(t.i=!1,Mv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hR extends yn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mv(this)}M(){super.M(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(t){yn.call(this),this.h=t,this.g={}}Se(bs,yn);var $v=[];function bv(t,e,n,r){Array.isArray(n)||(n&&($v[0]=n.toString()),n=$v);for(var i=0;i<n.length;i++){var s=Av(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Uv(t){qh(t.g,function(e,n){this.g.hasOwnProperty(n)&&tf(e)},t),t.g={}}bs.prototype.M=function(){bs.Z.M.call(this),Uv(this)};bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tl(){this.g=!0}tl.prototype.Aa=function(){this.g=!1};function fR(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var p=c.split("_");o=2<=p.length&&p[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function dR(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Jr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mR(t,n)+(r?" "+r:"")})}function pR(t,e){t.info(function(){return"TIMEOUT: "+e})}tl.prototype.info=function(){};function mR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return of(n)}catch{return e}}var Zn={},Fv=null;function nl(){return Fv=Fv||new me}Zn.Ma="serverreachability";function Vv(t){Le.call(this,Zn.Ma,t)}Se(Vv,Le);function Us(t){const e=nl();ke(e,new Vv(e,t))}Zn.STAT_EVENT="statevent";function jv(t,e){Le.call(this,Zn.STAT_EVENT,t),this.stat=e}Se(jv,Le);function Ve(t){const e=nl();ke(e,new jv(e,t))}Zn.Na="timingevent";function Bv(t,e){Le.call(this,Zn.Na,t),this.size=e}Se(Bv,Le);function Fs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var rl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},zv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ff(){}ff.prototype.h=null;function qv(t){return t.h||(t.h=t.i())}function Hv(){}var Vs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function df(){Le.call(this,"d")}Se(df,Le);function pf(){Le.call(this,"c")}Se(pf,Le);var mf;function il(){}Se(il,ff);il.prototype.g=function(){return new XMLHttpRequest};il.prototype.i=function(){return{}};mf=new il;function js(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new bs(this),this.P=gR,t=Wh?125:void 0,this.W=new el(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Wv}function Wv(){this.i=null,this.g="",this.h=!1}var gR=45e3,gf={},sl={};C=js.prototype;C.setTimeout=function(t){this.P=t};function yf(t,e,n){t.K=1,t.v=cl(Vt(e)),t.s=n,t.U=!0,Kv(t,null)}function Kv(t,e){t.F=Date.now(),Bs(t),t.A=Vt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),n0(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Wv,t.g=k0(t.l,n?e:null,!t.s),0<t.O&&(t.L=new hR(Te(t.Ia,t,t.g),t.O)),bv(t.V,t.g,"readystatechange",t.gb),e=t.H?_v(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Us(1),fR(t.j,t.u,t.A,t.m,t.X,t.s)}C.gb=function(t){t=t.target;const e=this.L;e&&jt(t)==3?e.l():this.Ia(t)};C.Ia=function(t){try{if(t==this.g)e:{const c=jt(this.g);var e=this.g.Da();const p=this.g.ba();if(!(3>c)&&(c!=3||Wh||this.g&&(this.h.h||this.g.ga()||p0(this.g)))){this.I||c!=4||e==7||(e==8||0>=p?Us(3):Us(2)),ol(this);var n=this.g.ba();this.N=n;t:if(Gv(this)){var r=p0(this.g);t="";var i=r.length,s=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){er(this),zs(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,dR(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qa(a)){var u=a;break t}}u=null}if(n=u)Jr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vf(this,n);else{this.i=!1,this.o=3,Ve(12),er(this),zs(this);break e}}this.U?(Qv(this,c,o),Wh&&this.i&&c==3&&(bv(this.V,this.W,"tick",this.fb),this.W.start())):(Jr(this.j,this.m,o,null),vf(this,o)),c==4&&er(this),this.i&&!this.I&&(c==4?_0(this.l,this):(this.i=!1,Bs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),er(this),zs(this)}}}catch{}finally{}};function Gv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Qv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=yR(t,n),i==sl){e==4&&(t.o=4,Ve(14),r=!1),Jr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==gf){t.o=4,Ve(15),Jr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Jr(t.j,t.m,i,null),vf(t,i);Gv(t)&&i!=sl&&i!=gf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Nf(e),e.L=!0,Ve(11))):(Jr(t.j,t.m,n,"[Invalid Chunked Response]"),er(t),zs(t))}C.fb=function(){if(this.g){var t=jt(this.g),e=this.g.ga();this.C<e.length&&(ol(this),Qv(this,t,e),this.i&&t!=4&&Bs(this))}};function yR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?sl:(n=Number(e.substring(n,r)),isNaN(n)?gf:(r+=1,r+n>e.length?sl:(e=e.substr(r,n),t.C=r+n,e)))}C.cancel=function(){this.I=!0,er(this)};function Bs(t){t.Y=Date.now()+t.P,Yv(t,t.P)}function Yv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Fs(Te(t.eb,t),e)}function ol(t){t.B&&(U.clearTimeout(t.B),t.B=null)}C.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pR(this.j,this.A),this.K!=2&&(Us(3),Ve(17)),er(this),this.o=2,zs(this)):Yv(this,this.Y-t)};function zs(t){t.l.G==0||t.I||_0(t.l,t)}function er(t){ol(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,cf(t.W),Uv(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_f(n.i,t))){if(n.I=t.N,!t.J&&_f(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)gl(n),pl(n);else break e;Af(n),Ve(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Fs(Te(n.ab,n),6e3));if(1>=s0(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else rr(n,11)}else if((t.J||n.g==t)&&gl(n),!Qa(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const p=u[4];p!=null&&(n.za=p,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;!s.g&&(Ue(w,"spdy")||Ue(w,"quic")||Ue(w,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(If(s,s.h),s.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,te(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=S0(r,r.H?r.la:null,r.W),o.J){o0(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(ol(a),Bs(a)),r.g=o}else w0(r);0<n.l.length&&ml(n)}else u[0]!="stop"&&u[0]!="close"||rr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?rr(n,7):Cf(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Us(4)}catch{}}function vR(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Vh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function wf(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vh(t)||typeof t=="string")gv(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Vh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=vR(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Zr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Zr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}C=Zr.prototype;C.R=function(){Ef(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};C.T=function(){return Ef(this),this.g.concat()};function Ef(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];tr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],tr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}C.get=function(t,e){return tr(this.h,t)?this.h[t]:e};C.set=function(t,e){tr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};C.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Xv=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function wR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function nr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof nr){this.g=e!==void 0?e:t.g,al(this,t.j),this.s=t.s,ll(this,t.i),ul(this,t.m),this.l=t.l,e=t.h;var n=new Ws;n.i=e.i,e.g&&(n.g=new Zr(e.g),n.h=e.h),Jv(this,n),this.o=t.o}else t&&(n=String(t).match(Xv))?(this.g=!!e,al(this,n[1]||"",!0),this.s=qs(n[2]||""),ll(this,n[3]||"",!0),ul(this,n[4]),this.l=qs(n[5]||"",!0),Jv(this,n[6]||"",!0),this.o=qs(n[7]||"")):(this.g=!!e,this.h=new Ws(null,this.g))}nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Hs(e,Zv,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Hs(e,Zv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Hs(n,n.charAt(0)=="/"?SR:TR,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Hs(n,CR)),t.join("")};function Vt(t){return new nr(t)}function al(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ll(t,e,n){t.i=n?qs(e,!0):e}function ul(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jv(t,e,n){e instanceof Ws?(t.h=e,RR(t.h,t.g)):(n||(e=Hs(e,kR)),t.h=new Ws(e,t.g))}function te(t,e,n){t.h.set(e,n)}function cl(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ER(t){return t instanceof nr?Vt(t):new nr(t,void 0)}function _R(t,e,n,r){var i=new nr(null,void 0);return t&&al(i,t),e&&ll(i,e),n&&ul(i,n),r&&(i.l=r),i}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Hs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zv=/[#\/\?@]/g,TR=/[#\?:]/g,SR=/[#\?]/g,kR=/[#\?@]/g,CR=/#/g;function Ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function vn(t){t.g||(t.g=new Zr,t.h=0,t.i&&wR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}C=Ws.prototype;C.add=function(t,e){vn(this),this.i=null,t=ei(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function e0(t,e){vn(t),e=ei(t,e),tr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,tr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ef(t)))}function t0(t,e){return vn(t),e=ei(t,e),tr(t.g.h,e)}C.forEach=function(t,e){vn(this),this.g.forEach(function(n,r){gv(n,function(i){t.call(e,i,r,this)},this)},this)};C.T=function(){vn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};C.R=function(t){vn(this);var e=[];if(typeof t=="string")t0(this,t)&&(e=yv(e,this.g.get(ei(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=yv(e,t[n])}return e};C.set=function(t,e){return vn(this),this.i=null,t=ei(this,t),t0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};C.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function n0(t,e,n){e0(t,e),0<n.length&&(t.i=null,t.g.set(ei(t,e),Bh(n)),t.h+=n.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ei(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RR(t,e){e&&!t.j&&(vn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(e0(this,r),n0(this,i,n))},t)),t.j=e}var AR=class{constructor(t,e){this.h=t,this.g=e}};function r0(t){this.l=t||NR,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ea&&U.g.Ea()&&U.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NR=10;function i0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function s0(t){return t.h?1:t.g?t.g.size:0}function _f(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function If(t,e){t.g?t.g.add(e):t.h=e}function o0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}r0.prototype.cancel=function(){if(this.i=a0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function a0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bh(t.i)}function Tf(){}Tf.prototype.stringify=function(t){return U.JSON.stringify(t,void 0)};Tf.prototype.parse=function(t){return U.JSON.parse(t,void 0)};function OR(){this.g=new Tf}function PR(t,e,n){const r=n||"";try{wf(t,function(i,s){let o=i;Ls(i)&&(o=of(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xR(t,e){const n=new tl;if(U.Image){const r=new Image;r.onload=Ga(hl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ga(hl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ga(hl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ga(hl,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function hl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ks(t){this.l=t.$b||null,this.j=t.ib||!1}Se(Ks,ff);Ks.prototype.g=function(){return new fl(this.l,this.j)};Ks.prototype.i=function(t){return function(){return t}}({});function fl(t,e){me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Se(fl,me);var Sf=0;C=fl.prototype;C.open=function(t,e){if(this.readyState!=Sf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qs(this)};C.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||U).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=Sf};C.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof U.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;l0(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function l0(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}C.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Gs(this):Qs(this),this.readyState==3&&l0(this)}};C.Ua=function(t){this.g&&(this.response=this.responseText=t,Gs(this))};C.Ta=function(t){this.g&&(this.response=t,Gs(this))};C.ha=function(){this.g&&Gs(this)};function Gs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qs(t)}C.setRequestHeader=function(t,e){this.v.append(t,e)};C.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var DR=U.JSON.parse;function oe(t){me.call(this),this.headers=new Zr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=u0,this.K=this.L=!1}Se(oe,me);var u0="",LR=/^https?$/i,MR=["POST","PUT"];C=oe.prototype;C.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():mf.g(),this.C=this.u?qv(this.u):qv(mf),this.g.onreadystatechange=Te(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){c0(this,s);return}t=n||"";const i=new Zr(this.headers);r&&wf(r,function(s,o){i.set(o,s)}),r=WC(i.T()),n=U.FormData&&t instanceof U.FormData,!(0<=mv(MR,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{d0(this),0<this.B&&((this.K=$R(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Te(this.pa,this)):this.A=hf(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){c0(this,s)}};function $R(t){return Xr&&XC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function bR(t){return t.toLowerCase()=="content-type"}C.pa=function(){typeof Fh!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function c0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,h0(t),dl(t)}function h0(t){t.D||(t.D=!0,ke(t,"complete"),ke(t,"error"))}C.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ke(this,"complete"),ke(this,"abort"),dl(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dl(this,!0)),oe.Z.M.call(this)};C.Fa=function(){this.s||(this.F||this.v||this.l?f0(this):this.cb())};C.cb=function(){f0(this)};function f0(t){if(t.h&&typeof Fh!="undefined"&&(!t.C[1]||jt(t)!=4||t.ba()!=2)){if(t.v&&jt(t)==4)hf(t.Fa,0,t);else if(ke(t,"readystatechange"),jt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Xv)[1]||null;if(!i&&U.self&&U.self.location){var s=U.self.location.protocol;i=s.substr(0,s.length-1)}r=!LR.test(i?i.toLowerCase():"")}n=r}if(n)ke(t,"complete"),ke(t,"success");else{t.m=6;try{var o=2<jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",h0(t)}}finally{dl(t)}}}}function dl(t,e){if(t.g){d0(t);const n=t.g,r=t.C[0]?Ka:null;t.g=null,t.C=null,e||ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function d0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}function jt(t){return t.g?t.g.readyState:0}C.ba=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}};C.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),DR(e)}};function p0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case u0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}C.Da=function(){return this.m};C.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function UR(t){let e="";return qh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function kf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=UR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function m0(t){this.za=0,this.l=[],this.h=new tl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ys("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ys("baseRetryDelayMs",5e3,t),this.$a=Ys("retryDelaySeedMs",1e4,t),this.Ya=Ys("forwardChannelMaxRetries",2,t),this.ra=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new r0(t&&t.concurrentRequestLimit),this.Ca=new OR,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}C=m0.prototype;C.ma=8;C.G=1;function Cf(t){if(g0(t),t.G==3){var e=t.V++,n=Vt(t.F);te(n,"SID",t.J),te(n,"RID",e),te(n,"TYPE","terminate"),Xs(t,n),e=new js(t,t.h,e,void 0),e.K=2,e.v=cl(Vt(n)),n=!1,U.navigator&&U.navigator.sendBeacon&&(n=U.navigator.sendBeacon(e.v.toString(),"")),!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=k0(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Bs(e)}T0(t)}C.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function pl(t){t.g&&(Nf(t),t.g.cancel(),t.g=null)}function g0(t){pl(t),t.u&&(U.clearTimeout(t.u),t.u=null),gl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function Rf(t,e){t.l.push(new AR(t.Za++,e)),t.G==3&&ml(t)}function ml(t){i0(t.i)||t.m||(t.m=!0,af(t.Ha,t),t.C=0)}function FR(t,e){return s0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Fs(Te(t.Ha,t,e),I0(t,t.C)),t.C++,!0)}C.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new js(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=_v(s),Tv(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=v0(this,i,e),n=Vt(this.F),te(n,"RID",t),te(n,"CVER",22),this.D&&te(n,"X-HTTP-Session-Id",this.D),Xs(this,n),this.o&&s&&kf(n,this.o,s),If(this.i,i),this.Ra&&te(n,"TYPE","init"),this.ja?(te(n,"$req",e),te(n,"SID","null"),i.$=!0,yf(i,n,null)):yf(i,n,e),this.G=2}}else this.G==3&&(t?y0(this,t):this.l.length==0||i0(this.i)||y0(this))};function y0(t,e){var n;e?n=e.m:n=t.V++;const r=Vt(t.F);te(r,"SID",t.J),te(r,"RID",n),te(r,"AID",t.U),Xs(t,r),t.o&&t.s&&kf(r,t.o,t.s),n=new js(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=v0(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),If(t.i,n),yf(n,r,e)}function Xs(t,e){t.j&&wf({},function(n,r){te(e,r,n)})}function v0(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Te(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{PR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function w0(t){t.g||t.u||(t.Y=1,af(t.Ga,t),t.A=0)}function Af(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Fs(Te(t.Ga,t),I0(t,t.A)),t.A++,!0)}C.Ga=function(){if(this.u=null,E0(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Fs(Te(this.bb,this),t)}};C.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ve(10),pl(this),E0(this))};function Nf(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function E0(t){t.g=new js(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Vt(t.oa);te(e,"RID","rpc"),te(e,"SID",t.J),te(e,"CI",t.N?"0":"1"),te(e,"AID",t.U),Xs(t,e),te(e,"TYPE","xmlhttp"),t.o&&t.s&&kf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=cl(Vt(e)),n.s=null,n.U=!0,Kv(n,t)}C.ab=function(){this.v!=null&&(this.v=null,pl(this),Af(this),Ve(19))};function gl(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function _0(t,e){var n=null;if(t.g==e){gl(t),Nf(t),t.g=null;var r=2}else if(_f(t.i,e))n=e.D,o0(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=nl(),ke(r,new Bv(r,n,e,i)),ml(t)}else w0(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&FR(t,e)||r==2&&Af(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:rr(t,5);break;case 4:rr(t,10);break;case 3:rr(t,6);break;default:rr(t,2)}}}function I0(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function rr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Te(t.jb,t);n||(n=new nr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||al(n,"https"),cl(n)),xR(n.toString(),r)}else Ve(2);t.G=0,t.j&&t.j.va(e),T0(t),g0(t)}C.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ve(2)):(this.h.info("Failed to ping google.com"),Ve(1))};function T0(t){t.G=0,t.I=-1,t.j&&((a0(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Bh(t.l),t.l.length=0),t.j.ua())}function S0(t,e,n){let r=ER(n);if(r.i!="")e&&ll(r,e+"."+r.i),ul(r,r.m);else{const i=U.location;r=_R(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&qh(t.aa,function(i,s){te(r,s,i)}),e=t.D,n=t.sa,e&&n&&te(r,e,n),te(r,"VER",t.ma),Xs(t,r),r}function k0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new oe(new Ks({ib:!0})):new oe(t.qa),e.L=t.H,e}function C0(){}C=C0.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Oa=function(){};function yl(){if(Xr&&!(10<=Number(JC)))throw Error("Environmental error: no available transport.")}yl.prototype.g=function(t,e){return new Ze(t,e)};function Ze(t,e){me.call(this),this.g=new m0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Qa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ti(this)}Se(Ze,me);Ze.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),af(Te(t.hb,t,e))),Ve(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=S0(t,null,t.W),ml(t)};Ze.prototype.close=function(){Cf(this.g)};Ze.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Rf(this.g,e)}else this.v?(e={},e.__data__=of(t),Rf(this.g,e)):Rf(this.g,t)};Ze.prototype.M=function(){this.g.j=null,delete this.j,Cf(this.g),delete this.g,Ze.Z.M.call(this)};function R0(t){df.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Se(R0,df);function A0(){pf.call(this),this.status=1}Se(A0,pf);function ti(t){this.g=t}Se(ti,C0);ti.prototype.xa=function(){ke(this.g,"a")};ti.prototype.wa=function(t){ke(this.g,new R0(t))};ti.prototype.va=function(t){ke(this.g,new A0(t))};ti.prototype.ua=function(){ke(this.g,"b")};yl.prototype.createWebChannel=yl.prototype.g;Ze.prototype.send=Ze.prototype.u;Ze.prototype.open=Ze.prototype.m;Ze.prototype.close=Ze.prototype.close;rl.NO_ERROR=0;rl.TIMEOUT=8;rl.HTTP_ERROR=6;zv.COMPLETE="complete";Hv.EventType=Vs;Vs.OPEN="a";Vs.CLOSE="b";Vs.ERROR="c";Vs.MESSAGE="d";me.prototype.listen=me.prototype.N;oe.prototype.listenOnce=oe.prototype.O;oe.prototype.getLastError=oe.prototype.La;oe.prototype.getLastErrorCode=oe.prototype.Da;oe.prototype.getStatus=oe.prototype.ba;oe.prototype.getResponseJson=oe.prototype.Qa;oe.prototype.getResponseText=oe.prototype.ga;oe.prototype.send=oe.prototype.ea;var VR=function(){return new yl},jR=function(){return nl()},Of=rl,BR=zv,zR=Zn,N0={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},qR=Ks,vl=Hv,HR=oe;const O0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="9.6.7";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Ca("@firebase/firestore");function P0(){return ir.logLevel}function x(t,...e){if(ir.logLevel<=W.DEBUG){const n=e.map(Pf);ir.debug(`Firestore (${ni}): ${t}`,...n)}}function wn(t,...e){if(ir.logLevel<=W.ERROR){const n=e.map(Pf);ir.error(`Firestore (${ni}): ${t}`,...n)}}function x0(t,...e){if(ir.logLevel<=W.WARN){const n=e.map(Pf);ir.warn(`Firestore (${ni}): ${t}`,...n)}}function Pf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t="Unexpected state"){const e=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function Q(t,e){t||V()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends St{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class GR{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new En;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new En,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new WR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new Ge(e)}}class QR{constructor(e,n,r){this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class YR{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new QR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JR{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.p=n.token,new XR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xf.A=-1;class D0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function ri(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new et(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function M0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Js.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Js?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class J extends Js{construct(e,n,r){return new J(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new J(n)}static emptyPath(){return new J([])}}const eA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Js{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return eA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new N(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.fields=e,e.sort(Qe.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ri(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ce(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ce(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const tA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(Q(!!t),typeof t=="string"){let e=0;const n=tA.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(t.seconds),nanos:ae(t.nanos)}}function ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?Ce.fromBase64String(t):Ce.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function b0(t){const e=t.mapValue.fields.__previous_value__;return $0(e)?b0(e):e}function Zs(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function rA(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(J.fromString(e))}static fromName(e){return new D(J.fromString(e).popFirst(5))}static empty(){return new D(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return J.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new J(e.slice()))}}function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$0(t)?4:10:V()}function Nt(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zs(t).isEqual(Zs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=_n(r.timestampValue),o=_n(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return si(r.bytesValue).isEqual(si(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ae(r.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(r.geoPointValue.longitude)===ae(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ae(r.integerValue)===ae(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ae(r.doubleValue),o=ae(i.doubleValue);return s===o?wl(s)===wl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ri(t.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(L0(s)!==L0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Nt(s[a],o[a])))return!1;return!0}(t,e);default:return V()}}function eo(t,e){return(t.values||[]).find(n=>Nt(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=sr(t),r=sr(e);if(n!==r)return K(n,r);switch(n){case 0:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ae(i.integerValue||i.doubleValue),a=ae(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return U0(t.timestampValue,e.timestampValue);case 4:return U0(Zs(t),Zs(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,s){const o=si(i),a=si(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=K(o[l],a[l]);if(u!==0)return u}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=K(ae(i.latitude),ae(s.latitude));return o!==0?o:K(ae(i.longitude),ae(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=li(o[l],a[l]);if(u)return u}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const p=K(a[c],u[c]);if(p!==0)return p;const d=li(o[a[c]],l[u[c]]);if(d!==0)return d}return K(a.length,u.length)}(t.mapValue,e.mapValue);default:throw V()}}function U0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=_n(t),r=_n(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function ui(t){return Lf(t)}function Lf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=_n(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?si(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Lf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Lf(r.fields[a])}`;return s+"}"}(t.mapValue):V();var e,n}function F0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mf(t){return!!t&&"integerValue"in t}function $f(t){return!!t&&"arrayValue"in t}function V0(t){return!!t&&"nullValue"in t}function j0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function to(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=to(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=to(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=to(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=to(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];El(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(to(this.value))}}function B0(t){const e=[];return ii(t.fields,(n,r)=>{const i=new Qe([n]);if(El(r)){const s=B0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Df(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Me(e,0,z.min(),z.min(),gt.empty(),0)}static newFoundDocument(e,n,r){return new Me(e,1,n,z.min(),r,0)}static newNoDocument(e,n){return new Me(e,2,n,z.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,z.min(),gt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.P=null}}function z0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new iA(t,e,n,r,i,s,o)}function bf(t){const e=j(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ai(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ui(r)).join(",")),e.P=n}return e.P}function sA(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ui(r.value)}`;var r}).join(", ")}]`),ai(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ui(n)).join(",")),`Target(${e})`}function Uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!dA(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Nt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!W0(t.startAt,e.startAt)&&W0(t.endAt,e.endAt)}function Ff(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class je extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.v(e,n,r):new oA(e,n,r):n==="array-contains"?new uA(e,r):n==="in"?new cA(e,r):n==="not-in"?new hA(e,r):n==="array-contains-any"?new fA(e,r):new je(e,n,r)}static v(e,n,r){return n==="in"?new aA(e,r):new lA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.V(li(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.V(li(n,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class oA extends je{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.V(n)}}class aA extends je{constructor(e,n){super(e,"in",n),this.keys=q0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lA extends je{constructor(e,n){super(e,"not-in",n),this.keys=q0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function q0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class uA extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $f(n)&&eo(n.arrayValue,this.value)}}class cA extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&eo(this.value.arrayValue,n)}}class hA extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!eo(this.value.arrayValue,n)}}class fA extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$f(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>eo(this.value.arrayValue,r))}}class _l{constructor(e,n){this.position=e,this.inclusive=n}}class no{constructor(e,n="asc"){this.field=e,this.dir=n}}function dA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function H0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function W0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.D=null,this.C=null,this.startAt,this.endAt}}function pA(t,e,n,r,i,s,o,a){return new ro(t,e,n,r,i,s,o,a)}function K0(t){return new ro(t)}function Il(t){return!ai(t.limit)&&t.limitType==="F"}function Tl(t){return!ai(t.limit)&&t.limitType==="L"}function G0(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Q0(t){for(const e of t.filters)if(e.S())return e.field;return null}function Y0(t){return t.collectionGroup!==null}function io(t){const e=j(t);if(e.D===null){e.D=[];const n=Q0(e),r=G0(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new no(n)),e.D.push(new no(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.D.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new no(Qe.keyField(),s))}}}return e.D}function or(t){const e=j(t);if(!e.C)if(e.limitType==="F")e.C=z0(e.path,e.collectionGroup,io(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of io(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new no(s.field,o))}const r=e.endAt?new _l(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new _l(e.startAt.position,!e.startAt.inclusive):null;e.C=z0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function mA(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sl(t,e){return Uf(or(t),or(e))&&t.limitType===e.limitType}function X0(t){return`${bf(or(t))}|lt:${t.limitType}`}function Vf(t){return`Query(target=${sA(or(t))}; limitType=${t.limitType})`}function jf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=H0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,io(n),r)||n.endAt&&!function(i,s,o){const a=H0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,io(n),r))}(t,e)}function J0(t){return(e,n)=>{let r=!1;for(const i of io(t)){const s=gA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gA(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?li(a,l):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function ew(t){return{integerValue:""+t}}function yA(t,e){return rA(e)?ew(e):Z0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this._=void 0}}function vA(t,e,n){return t instanceof Cl?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof so?nw(t,e):t instanceof oo?rw(t,e):function(r,i){const s=tw(r,i),o=iw(s)+iw(r.k);return Mf(s)&&Mf(r.k)?ew(o):Z0(r.O,o)}(t,e)}function wA(t,e,n){return t instanceof so?nw(t,e):t instanceof oo?rw(t,e):n}function tw(t,e){return t instanceof Rl?Mf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Cl extends kl{}class so extends kl{constructor(e){super(),this.elements=e}}function nw(t,e){const n=sw(e);for(const r of t.elements)n.some(i=>Nt(i,r))||n.push(r);return{arrayValue:{values:n}}}class oo extends kl{constructor(e){super(),this.elements=e}}function rw(t,e){let n=sw(e);for(const r of t.elements)n=n.filter(i=>!Nt(i,r));return{arrayValue:{values:n}}}class Rl extends kl{constructor(e,n){super(),this.O=e,this.k=n}}function iw(t){return ae(t.integerValue||t.doubleValue)}function sw(t){return $f(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function EA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof so&&r instanceof so||n instanceof oo&&r instanceof oo?ri(n.elements,r.elements,Nt):n instanceof Rl&&r instanceof Rl?Nt(n.k,r.k):n instanceof Cl&&r instanceof Cl}(t.transform,e.transform)}class _A{constructor(e,n){this.version=e,this.transformResults=n}}class ci{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ci}static exists(e){return new ci(void 0,e)}static updateTime(e){return new ci(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Al(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nl{}function IA(t,e,n){t instanceof Ol?function(r,i,s){const o=r.value.clone(),a=uw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ao?function(r,i,s){if(!Al(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=uw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(lw(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Bf(t,e,n){t instanceof Ol?function(r,i,s){if(!Al(r.precondition,i))return;const o=r.value.clone(),a=cw(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(aw(i),o).setHasLocalMutations()}(t,e,n):t instanceof ao?function(r,i,s){if(!Al(r.precondition,i))return;const o=cw(r.fieldTransforms,s,i),a=i.data;a.setAll(lw(r)),a.setAll(o),i.convertToFoundDocument(aw(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Al(r.precondition,i)&&i.convertToNoDocument(z.min())}(t,e)}function TA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tw(r.transform,i||null);s!=null&&(n==null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function ow(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ri(n,r,(i,s)=>EA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function aw(t){return t.isFoundDocument()?t.version:z.min()}class Ol extends Nl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class ao extends Nl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function lw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function uw(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wA(o,a,n[i]))}return r}function cw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vA(s,o,e))}return r}class SA extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class kA extends Nl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,q;function RA(t){switch(t){default:return V();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function hw(t){if(t===void 0)return wn("GRPC error has no .code"),_.UNKNOWN;switch(t){case le.OK:return _.OK;case le.CANCELLED:return _.CANCELLED;case le.UNKNOWN:return _.UNKNOWN;case le.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case le.INTERNAL:return _.INTERNAL;case le.UNAVAILABLE:return _.UNAVAILABLE;case le.UNAUTHENTICATED:return _.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case le.NOT_FOUND:return _.NOT_FOUND;case le.ALREADY_EXISTS:return _.ALREADY_EXISTS;case le.PERMISSION_DENIED:return _.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case le.ABORTED:return _.ABORTED;case le.OUT_OF_RANGE:return _.OUT_OF_RANGE;case le.UNIMPLEMENTED:return _.UNIMPLEMENTED;case le.DATA_LOSS:return _.DATA_LOSS;default:return V()}}(q=le||(le={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){this.comparator=e,this.root=n||Re.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Re.RED,this.left=i!=null?i:Re.EMPTY,this.right=s!=null?s:Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Re(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Re(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fw(this.data.getIterator())}getIteratorFrom(e){return new fw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ae(this.comparator);return n.data=e,n}}class fw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new ge(D.comparator);function ar(){return AA}const NA=new ge(D.comparator);function zf(){return NA}const OA=new ge(D.comparator),PA=new Ae(D.comparator);function Z(...t){let e=PA;for(const n of t)e=e.add(n);return e}const xA=new Ae(K);function dw(){return xA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n)),new xl(z.min(),r,dw(),ar(),Z())}}class lo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new lo(Ce.EMPTY_BYTE_STRING,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r,i){this.M=e,this.removedTargetIds=n,this.key=r,this.$=i}}class pw{constructor(e,n){this.targetId=e,this.F=n}}class mw{constructor(e,n,r=Ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gw{constructor(){this.B=0,this.L=vw(),this.U=Ce.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Z(),n=Z(),r=Z();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new lo(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=vw()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class DA{constructor(e){this.nt=e,this.st=new Map,this.it=ar(),this.rt=yw(),this.ot=new Ae(K)}ct(e){for(const n of e.M)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.F.count,i=this.wt(n);if(i){const s=i.target;if(Ff(s))if(r===0){const o=new D(s.path);this.at(n,o,Me.newNoDocument(o,z.min()))}else Q(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Ff(a.target)){const l=new D(a.target.path);this.it.get(l)!==null||this.It(o,l)||this.at(o,l,Me.newNoDocument(l,e))}s.j&&(n.set(o,s.H()),s.J())}});let r=Z();this.rt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.wt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.it.forEach((s,o)=>o.setReadTime(e));const i=new xl(e,n,this.ot,this.it,r);return this.it=ar(),this.rt=yw(),this.ot=new Ae(K),i}ut(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Et(n.key).add(e))}at(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Et(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new gw,this.st.set(e,n)),n}Et(e){let n=this.rt.get(e);return n||(n=new Ae(K),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new gw),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function yw(){return new ge(D.comparator)}function vw(){return new ge(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),MA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class $A{constructor(e,n){this.databaseId=e,this.N=n}}function Ll(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ww(t,e){return t.N?e.toBase64():e.toUint8Array()}function bA(t,e){return Ll(t,e.toTimestamp())}function Bt(t){return Q(!!t),z.fromTimestamp(function(e){const n=_n(e);return new et(n.seconds,n.nanos)}(t))}function qf(t,e){return function(n){return new J(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ew(t){const e=J.fromString(t);return Q(Sw(e)),e}function Hf(t,e){return qf(t.databaseId,e.path)}function Wf(t,e){const n=Ew(e);if(n.get(1)!==t.databaseId.projectId)throw new N(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(_w(n))}function Kf(t,e){return qf(t.databaseId,e)}function UA(t){const e=Ew(t);return e.length===4?J.emptyPath():_w(e)}function Gf(t){return new J(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _w(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Iw(t,e,n){return{name:Hf(t,e),fields:n.value.mapValue.fields}}function FA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.N?(Q(u===void 0||typeof u=="string"),Ce.fromBase64String(u||"")):(Q(u===void 0||u instanceof Uint8Array),Ce.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:hw(l.code);return new N(u,l.message||"")}(o);n=new mw(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wf(t,r.document.name),s=Bt(r.document.updateTime),o=new gt({mapValue:{fields:r.document.fields}}),a=Me.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Dl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wf(t,r.document),s=r.readTime?Bt(r.readTime):z.min(),o=Me.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wf(t,r.document),s=r.removedTargetIds||[];n=new Dl([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new CA(i),o=r.targetId;n=new pw(o,s)}}return n}function VA(t,e){let n;if(e instanceof Ol)n={update:Iw(t,e.key,e.value)};else if(e instanceof SA)n={delete:Hf(t,e.key)};else if(e instanceof ao)n={update:Iw(t,e.key,e.data),updateMask:YA(e.fieldMask)};else{if(!(e instanceof kA))return V();n={verify:Hf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Cl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof so)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof oo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rl)return{fieldPath:s.field.canonicalString(),increment:o.k};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:bA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:V()}(t,e.precondition)),n}function jA(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Bt(r.updateTime):Bt(i);return s.isEqual(z.min())&&(s=Bt(i)),new _A(s,r.transformResults||[])}(n,e))):[]}function BA(t,e){return{documents:[Kf(t,e.path)]}}function zA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Kf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(p){if(p.op==="=="){if(j0(p.value))return{unaryFilter:{field:hi(p.field),op:"IS_NAN"}};if(V0(p.value))return{unaryFilter:{field:hi(p.field),op:"IS_NULL"}}}else if(p.op==="!="){if(j0(p.value))return{unaryFilter:{field:hi(p.field),op:"IS_NOT_NAN"}};if(V0(p.value))return{unaryFilter:{field:hi(p.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(p.field),op:KA(p.op),value:p.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:hi(c.field),direction:WA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.N||ai(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function qA(t){let e=UA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Tw(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(p){return new no(fi(p.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(c)));let a=null;n.limit&&(a=function(c){let p;return p=typeof c=="object"?c.value:c,ai(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(c){const p=!!c.before,d=c.values||[];return new _l(d,p)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const p=!c.before,d=c.values||[];return new _l(d,p)}(n.endAt)),pA(e,i,o,s,a,"F",l,u)}function HA(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tw(t){return t?t.unaryFilter!==void 0?[QA(t)]:t.fieldFilter!==void 0?[GA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Tw(e)).reduce((e,n)=>e.concat(n)):V():[]}function WA(t){return LA[t]}function KA(t){return MA[t]}function hi(t){return{fieldPath:t.canonicalString()}}function fi(t){return Qe.fromServerFormat(t.fieldPath)}function GA(t){return je.create(fi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function QA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fi(t.unaryFilter.field);return je.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fi(t.unaryFilter.field);return je.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fi(t.unaryFilter.field);return je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fi(t.unaryFilter.field);return je.create(i,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function YA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}function uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IA(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Bf(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Bf(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&ri(this.mutations,e.mutations,(n,r)=>ow(n,r))&&ri(this.baseMutations,e.baseMutations,(n,r)=>ow(n,r))}}class Qf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=OA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.Ht=e}}function nN(t){const e=qA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mA(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.xe=new iN}addToCollectionParentIndex(e,n){return this.xe.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.xe.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n,r){return S.resolve(Z())}getFieldIndex(e,n){return S.resolve(null)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class iN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ae(J.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new di(0)}static Je(){return new di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==XA)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return M0(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.changes=new ho(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Me.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,n,r){this.qn=e,this.gs=n,this.indexManager=r}ys(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.ps(e,n,r))}ps(e,n,r){return this.qn.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Is(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Es(e,n){return this.qn.getEntries(e,n).next(r=>this.Ts(e,r).next(()=>r))}Ts(e,n){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Is(n,r))}As(e,n,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Rs(e,n.path):Y0(n)?this.Ps(e,n,r):this.bs(e,n,r)}Rs(e,n){return this.ys(e,new D(n)).next(r=>{let i=zf();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ps(e,n,r){const i=n.collectionGroup;let s=zf();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new ro(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.bs(e,l,r).next(u=>{u.forEach((c,p)=>{s=s.insert(c,p)})})}).next(()=>s))}bs(e,n,r){let i;return this.qn.getAll(e,n.path,r).next(s=>(i=s,this.gs.getAllMutationBatchesAffectingQuery(e,n))).next(s=>{for(const o of s)for(const a of o.mutations){const l=a.key;let u=i.get(l);u==null&&(u=Me.newInvalidDocument(l),i=i.insert(l,u)),Bf(a,u,o.localWriteTime),u.isFoundDocument()||(i=i.remove(l))}}).next(()=>(i.forEach((s,o)=>{jf(n,o)||(i=i.remove(s))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.vs=r,this.Vs=i}static Ss(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{Ds(e){this.Cs=e}As(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(z.min())?this.Ns(e,n):this.Cs.Es(e,i).next(s=>{const o=this.xs(n,s);return(Il(n)||Tl(n))&&this.ks(n.limitType,o,i,r)?this.Ns(e,n):(P0()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vf(n)),this.Cs.As(e,n,r).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}xs(e,n){let r=new Ae(J0(e));return n.forEach((i,s)=>{jf(e,s)&&(r=r.add(s))}),r}ks(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ns(e,n){return P0()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Vf(n)),this.Cs.As(e,n,z.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,i){this.persistence=e,this.Os=n,this.O=i,this.Ms=new ge(K),this.$s=new ho(s=>bf(s),Uf),this.Fs=z.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(r)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new oN(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function uN(t,e,n,r){return new lN(t,e,n,r)}async function kw(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.gs.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.gs.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.Us.Es(r,l).next(u=>({qs:u,removedBatchIds:o,addedBatchIds:a}))})})}function cN(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,p=c.keys();let d=S.resolve();return p.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(w=>{const E=l.docVersions.get(g);Q(E!==null),w.version.compareTo(E)<0&&(c.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),d.next(()=>o.gs.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.gs.performConsistencyCheck(r)).next(()=>n.Us.Es(r,i))})}function Cw(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Un.getLastRemoteSnapshotVersion(n))}function hN(t,e){const n=j(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];e.targetChanges.forEach((u,c)=>{const p=i.get(c);if(!p)return;a.push(n.Un.removeMatchingKeys(s,u.removedDocuments,c).next(()=>n.Un.addMatchingKeys(s,u.addedDocuments,c)));let d=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(Ce.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(c,d),function(g,w,E){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(p,d,u)&&a.push(n.Un.updateTargetData(s,d))});let l=ar();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(fN(s,o,e.documentUpdates).next(u=>{l=u})),!r.isEqual(z.min())){const u=n.Un.getLastRemoteSnapshotVersion(s).next(c=>n.Un.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.Us.Ts(s,l)).next(()=>l)}).then(s=>(n.Ms=i,s))}function fN(t,e,n){let r=Z();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let s=ar();return n.forEach((o,a)=>{const l=i.get(o);a.isNoDocument()&&a.version.isEqual(z.min())?(e.removeEntry(o,a.readTime),s=s.insert(o,a)):!l.isValidDocument()||a.version.compareTo(l.version)>0||a.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(a),s=s.insert(o,a)):x("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",a.version)}),s})}function dN(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.gs.getNextMutationBatchAfterBatchId(r,e)))}function pN(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Un.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Un.allocateTargetId(r).next(o=>(i=new lr(e,o,0,r.currentSequenceNumber),n.Un.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.$s.set(e,r.targetId)),r})}async function Xf(t,e,n){const r=j(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!uo(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.$s.delete(i.target)}function Rw(t,e,n){const r=j(t);let i=z.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=j(a),p=c.$s.get(u);return p!==void 0?S.resolve(c.Ms.get(p)):c.Un.getTargetData(l,u)}(r,o,or(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Os.As(o,e,n?i:z.min(),n?s:Z())).next(a=>({documents:a,Ks:s})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,n){return S.resolve(this.Ws.get(n))}saveBundleMetadata(e,n){var r;return this.Ws.set(n.id,{id:(r=n).id,version:r.version,createTime:Bt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.zs.get(n))}saveNamedQuery(e,n){return this.zs.set(n.name,function(r){return{name:r.name,query:nN(r.bundledQuery),readTime:Bt(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.overlays=new ge(D.comparator),this.Hs=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach(i=>{this.Yt(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Hs.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Hs.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=new Map,s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ge((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=new Map,s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=new Map,l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(c,u)),!(a.size>=i)););return S.resolve(a)}Yt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);i!==null&&this.Hs.get(i.largestBatchId).delete(r.key),this.overlays=this.overlays.insert(r.key,new eN(n,r));let s=this.Hs.get(n);s===void 0&&(s=new Set,this.Hs.set(n,s)),s.add(r.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Js=new Ae(ye.Ys),this.Xs=new Ae(ye.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,n){const r=new ye(e,n);this.Js=this.Js.add(r),this.Xs=this.Xs.add(r)}ti(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ei(new ye(e,n))}ni(e,n){e.forEach(r=>this.removeReference(r,n))}si(e){const n=new D(new J([])),r=new ye(n,e),i=new ye(n,e+1),s=[];return this.Xs.forEachInRange([r,i],o=>{this.ei(o),s.push(o.key)}),s}ii(){this.Js.forEach(e=>this.ei(e))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const n=new D(new J([])),r=new ye(n,e),i=new ye(n,e+1);let s=Z();return this.Xs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ye(e,0),r=this.Js.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,n){this.key=e,this.oi=n}static Ys(e,n){return D.comparator(e.key,n.key)||K(e.oi,n.oi)}static Zs(e,n){return K(e.oi,n.oi)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.gs=[],this.ci=1,this.ui=new Ae(ye.Ys)}checkEmpty(e){return S.resolve(this.gs.length===0)}addMutationBatch(e,n,r,i){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const o=new ZA(s,n,r,i);this.gs.push(o);for(const a of i)this.ui=this.ui.add(new ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ai(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.hi(r),s=i<0?0:i;return S.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.gs.length===0?-1:this.ci-1)}getAllMutationBatches(e){return S.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ye(n,0),i=new ye(n,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([r,i],o=>{const a=this.ai(o.oi);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ae(K);return n.forEach(i=>{const s=new ye(i,0),o=new ye(i,Number.POSITIVE_INFINITY);this.ui.forEachInRange([s,o],a=>{r=r.add(a.oi)})}),S.resolve(this.li(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new ye(new D(s),0);let a=new Ae(K);return this.ui.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.oi)),!0)},o),S.resolve(this.li(a))}li(e){const n=[];return e.forEach(r=>{const i=this.ai(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.fi(n.batchId,"removed")===0),this.gs.shift();let r=this.ui;return S.forEach(n.mutations,i=>{const s=new ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ui=r})}Qe(e){}containsKey(e,n){const r=new ye(n,0),i=this.ui.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.gs.length,S.resolve()}fi(e,n){return this.hi(e)}hi(e){return this.gs.length===0?0:e-this.gs[0].batchId}ai(e){const n=this.hi(e);return n<0||n>=this.gs.length?null:this.gs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e){this.di=e,this.docs=new ge(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.di(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Me.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Me.newInvalidDocument(i))}),S.resolve(r)}getAll(e,n,r){let i=ar();const s=new D(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||l.readTime.compareTo(r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}_i(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wN(this)}getSize(e){return S.resolve(this.size)}}class wN extends sN{constructor(e){super(),this.Tn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Tn.addEntry(e,i)):this.Tn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Tn.getEntry(e,n)}getAllFromCache(e,n){return this.Tn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.persistence=e,this.wi=new ho(n=>bf(n),Uf),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.mi=0,this.gi=new Jf,this.targetCount=0,this.yi=di.He()}forEachTarget(e,n){return this.wi.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.mi&&(this.mi=n),S.resolve()}Ze(e){this.wi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.yi=new di(n),this.highestTargetId=n),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,n){return this.Ze(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Ze(n),S.resolve()}removeTargetData(e,n){return this.wi.delete(n.target),this.gi.si(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.wi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.wi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.wi.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.gi.ti(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.gi.ni(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.gi.si(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.gi.ri(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.gi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.pi={},this.overlays={},this.Nn=new xf(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new EN(this),this.indexManager=new rN,this.qn=function(r){return new vN(r)}(r=>this.referenceDelegate.Ii(r)),this.O=new tN(n),this.Kn=new mN(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.pi[e.toKey()];return r||(r=new yN(n,this.referenceDelegate),this.pi[e.toKey()]=r),r}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new IN(this.Nn.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return S.or(Object.values(this.pi).map(r=>()=>r.containsKey(e,n)))}}class IN extends JA{constructor(e){super(),this.currentSequenceNumber=e}}class Zf{constructor(e){this.persistence=e,this.Ri=new Jf,this.Pi=null}static bi(e){return new Zf(e)}get vi(){if(this.Pi)return this.Pi;throw V()}addReference(e,n,r){return this.Ri.addReference(r,n),this.vi.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.vi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.vi.add(n.toString()),S.resolve()}removeTarget(e,n){this.Ri.si(n.targetId).forEach(i=>this.vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Pi=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.vi,r=>{const i=D.fromPath(r);return this.Vi(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.Pi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Vi(e,n).next(r=>{r?this.vi.delete(n.toString()):this.vi.add(n.toString())})}Ii(e){return 0}Vi(e,n){return S.or([()=>S.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Aw{constructor(){this.activeTargetIds=dw()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TN{constructor(){this._r=new Aw,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,n,r){this.wr[e]=n}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new Aw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{mr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.kr=n+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,n,r,i,s){const o=this.$r(e,n);x("RestConnection","Sending: ",o,r);const a={};return this.Fr(a,i,s),this.Br(e,o,a,r).then(l=>(x("RestConnection","Received: ",l),l),l=>{throw x0("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}Lr(e,n,r,i,s){return this.Mr(e,n,r,i,s)}Fr(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ni,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}$r(e,n){const r=kN[e];return`${this.kr}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,n,r,i){return new Promise((s,o)=>{const a=new HR;a.listenOnce(BR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Of.NO_ERROR:const u=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Of.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new N(_.DEADLINE_EXCEEDED,"Request time out"));break;case Of.HTTP_ERROR:const c=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const p=a.getResponseJson().error;if(p&&p.status&&p.message){const d=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(w)>=0?w:_.UNKNOWN}(p.status);o(new N(d,p.message))}else o(new N(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(_.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}Ur(e,n,r){const i=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=VR(),o=jR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new qR({})),this.Fr(a.initMessageHeaders,n,r),Fg()||Vg()||TI()||jg()||SI()||lh()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");x("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,p=!1;const d=new CN({Ar:w=>{p?x("Connection","Not sending because WebChannel is closed:",w):(c||(x("Connection","Opening WebChannel transport."),u.open(),c=!0),x("Connection","WebChannel sending:",w),u.send(w))},Rr:()=>u.close()}),g=(w,E,h)=>{w.listen(E,f=>{try{h(f)}catch(m){setTimeout(()=>{throw m},0)}})};return g(u,vl.EventType.OPEN,()=>{p||x("Connection","WebChannel transport opened.")}),g(u,vl.EventType.CLOSE,()=>{p||(p=!0,x("Connection","WebChannel transport closed"),d.Cr())}),g(u,vl.EventType.ERROR,w=>{p||(p=!0,x0("Connection","WebChannel transport errored:",w),d.Cr(new N(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,vl.EventType.MESSAGE,w=>{var E;if(!p){const h=w.data[0];Q(!!h);const f=h,m=f.error||((E=f[0])===null||E===void 0?void 0:E.error);if(m){x("Connection","WebChannel received error:",m);const v=m.status;let y=function(T){const O=le[T];if(O!==void 0)return hw(O)}(v),R=m.message;y===void 0&&(y=_.INTERNAL,R="Unknown error status: "+v+" with message "+m.message),p=!0,d.Cr(new N(y,R)),u.close()}else x("Connection","WebChannel received:",h),d.Nr(h)}}),g(o,zR.STAT_EVENT,w=>{w.stat===N0.PROXY?x("Connection","Detected buffering proxy"):w.stat===N0.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Dr()},0),d}}function ed(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t){return new $A(t,!0)}class Ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Sn=e,this.timerId=n,this.qr=r,this.Kr=i,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const n=Math.floor(this.jr+this.Jr()),r=Math.max(0,Date.now()-this.Wr),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.jr} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,i,()=>(this.Wr=Date.now(),e())),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){this.Qr!==null&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){this.Qr!==null&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,r,i,s,o,a,l){this.Sn=e,this.Xr=r,this.Zr=i,this.eo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Ow(e,n)}oo(){return this.state===1||this.state===5||this.co()}co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&this.so===null&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,()=>this.lo()))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,n){this._o(),this.wo(),this.ro.cancel(),this.no++,e!==4?this.ro.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(n)}mo(){}auth(){this.state=1;const e=this.yo(this.no),n=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.no===n&&this.po(r,i)},r=>{e(()=>{const i=new N(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Io(i)})})}po(e,n){const r=this.yo(this.no);this.stream=this.Eo(e,n),this.stream.Pr(()=>{r(()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,()=>(this.co()&&(this.state=3),Promise.resolve())),this.listener.Pr()))}),this.stream.vr(i=>{r(()=>this.Io(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}uo(){this.state=5,this.ro.Hr(async()=>{this.state=0,this.start()})}Io(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return n=>{this.Sn.enqueueAndForget(()=>this.no===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AN extends Pw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.O=s}Eo(e,n){return this.eo.Ur("Listen",e,n)}onMessage(e){this.ro.reset();const n=FA(this.O,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?Bt(s.readTime):z.min()}(e);return this.listener.To(n,r)}Ao(e){const n={};n.database=Gf(this.O),n.addTarget=function(i,s){let o;const a=s.target;return o=Ff(a)?{documents:BA(i,a)}:{query:zA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=ww(i,s.resumeToken):s.snapshotVersion.compareTo(z.min())>0&&(o.readTime=Ll(i,s.snapshotVersion.toTimestamp())),o}(this.O,e);const r=HA(this.O,e);r&&(n.labels=r),this.fo(n)}Ro(e){const n={};n.database=Gf(this.O),n.removeTarget=e,this.fo(n)}}class NN extends Pw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,n){return this.eo.Ur("Write",e,n)}onMessage(e){if(Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const n=jA(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.Vo(r,n)}return Q(!e.writeResults||e.writeResults.length===0),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Gf(this.O),this.fo(e)}vo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>VA(this.O,r))};this.fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.eo=r,this.O=i,this.Co=!1}No(){if(this.Co)throw new N(_.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Mr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(_.UNKNOWN,i.toString())})}Lr(e,n,r){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.eo.Lr(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(_.UNKNOWN,i.toString())})}terminate(){this.Co=!0}}class PN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){this.xo===0&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve())))}Bo(e){this.state==="Online"?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,e==="Online"&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(wn(n),this.Oo=!1):x("OnlineStateTracker",n)}Lo(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr(o=>{r.enqueueAndForget(async()=>{ur(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=j(a);l.Ko.add(4),await fo(l),l.Qo.set("Unknown"),l.Ko.delete(4),await $l(l)}(this))})}),this.Qo=new PN(r,i)}}async function $l(t){if(ur(t))for(const e of t.Go)await e(!0)}async function fo(t){for(const e of t.Go)await e(!1)}function xw(t,e){const n=j(t);n.qo.has(e.targetId)||(n.qo.set(e.targetId,e),rd(n)?nd(n):pi(n).co()&&td(n,e))}function Dw(t,e){const n=j(t),r=pi(n);n.qo.delete(e),r.co()&&Lw(n,e),n.qo.size===0&&(r.co()?r.ho():ur(n)&&n.Qo.set("Unknown"))}function td(t,e){t.Wo.Z(e.targetId),pi(t).Ao(e)}function Lw(t,e){t.Wo.Z(e),pi(t).Ro(e)}function nd(t){t.Wo=new DA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qo.get(e)||null}),pi(t).start(),t.Qo.Mo()}function rd(t){return ur(t)&&!pi(t).oo()&&t.qo.size>0}function ur(t){return j(t).Ko.size===0}function Mw(t){t.Wo=void 0}async function DN(t){t.qo.forEach((e,n)=>{td(t,e)})}async function LN(t,e){Mw(t),rd(t)?(t.Qo.Bo(e),nd(t)):t.Qo.set("Unknown")}async function MN(t,e,n){if(t.Qo.set("Online"),e instanceof mw&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qo.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qo.delete(o),r.Wo.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Dl?t.Wo.ct(e):e instanceof pw?t.Wo._t(e):t.Wo.ht(e),!n.isEqual(z.min()))try{const r=await Cw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Wo.yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.qo.get(l);u&&i.qo.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.qo.get(a);if(!l)return;i.qo.set(a,l.withResumeToken(Ce.EMPTY_BYTE_STRING,l.snapshotVersion)),Lw(i,a);const u=new lr(l.target,a,1,l.sequenceNumber);td(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!uo(e))throw e;t.Ko.add(1),await fo(t),t.Qo.set("Offline"),n||(n=()=>Cw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.Ko.delete(1),await $l(t)})}function $w(t,e){return e().catch(n=>bl(t,n,e))}async function Ul(t){const e=j(t),n=In(e);let r=e.Uo.length>0?e.Uo[e.Uo.length-1].batchId:-1;for(;$N(e);)try{const i=await dN(e.localStore,r);if(i===null){e.Uo.length===0&&n.ho();break}r=i.batchId,bN(e,i)}catch(i){await bl(e,i)}bw(e)&&Uw(e)}function $N(t){return ur(t)&&t.Uo.length<10}function bN(t,e){t.Uo.push(e);const n=In(t);n.co()&&n.bo&&n.vo(e.mutations)}function bw(t){return ur(t)&&!In(t).oo()&&t.Uo.length>0}function Uw(t){In(t).start()}async function UN(t){In(t).Do()}async function FN(t){const e=In(t);for(const n of t.Uo)e.vo(n.mutations)}async function VN(t,e,n){const r=t.Uo.shift(),i=Qf.from(r,e,n);await $w(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ul(t)}async function jN(t,e){e&&In(t).bo&&await async function(n,r){if(i=r.code,RA(i)&&i!==_.ABORTED){const s=n.Uo.shift();In(n).ao(),await $w(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ul(n)}var i}(t,e),bw(t)&&Uw(t)}async function Fw(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=ur(n);n.Ko.add(3),await fo(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ko.delete(3),await $l(n)}async function BN(t,e){const n=j(t);e?(n.Ko.delete(2),await $l(n)):e||(n.Ko.add(2),await fo(n),n.Qo.set("Unknown"))}function pi(t){return t.zo||(t.zo=function(e,n,r){const i=j(e);return i.No(),new AN(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:DN.bind(null,t),vr:LN.bind(null,t),To:MN.bind(null,t)}),t.Go.push(async e=>{e?(t.zo.ao(),rd(t)?nd(t):t.Qo.set("Unknown")):(await t.zo.stop(),Mw(t))})),t.zo}function In(t){return t.Ho||(t.Ho=function(e,n,r){const i=j(e);return i.No(),new NN(n,i.eo,i.authCredentials,i.appCheckCredentials,i.O,r)}(t.datastore,t.asyncQueue,{Pr:UN.bind(null,t),vr:jN.bind(null,t),So:FN.bind(null,t),Vo:VN.bind(null,t)}),t.Go.push(async e=>{e?(t.Ho.ao(),await Ul(t)):(await t.Ho.stop(),t.Uo.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Uo.length} pending writes`),t.Uo=[]))})),t.Ho}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new id(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sd(t,e){if(wn("AsyncQueue",`${e}: ${t}`),uo(t))return new N(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=zf(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.Jo=new ge(D.comparator)}track(e){const n=e.doc.key,r=this.Jo.get(n);r?e.type!==0&&r.type===3?this.Jo=this.Jo.insert(n,e):e.type===3&&r.type!==1?this.Jo=this.Jo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jo=this.Jo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jo=this.Jo.remove(n):e.type===1&&r.type===2?this.Jo=this.Jo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jo=this.Jo.insert(n,{type:2,doc:e.doc}):V():this.Jo=this.Jo.insert(n,e)}Yo(){const e=[];return this.Jo.inorderTraversal((n,r)=>{e.push(r)}),e}}class gi{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new gi(e,n,mi.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(){this.Xo=void 0,this.listeners=[]}}class qN{constructor(){this.queries=new ho(e=>X0(e),Sl),this.onlineState="Unknown",this.Zo=new Set}}async function HN(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zN),i)try{s.Xo=await n.onListen(r)}catch(o){const a=sd(o,`Initialization of query '${Vf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.tc(n.onlineState),s.Xo&&e.ec(s.Xo)&&od(n)}async function WN(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KN(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.ec(i)&&(r=!0);o.Xo=i}}r&&od(n)}function GN(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function od(t){t.Zo.forEach(e=>{e.next()})}class QN{constructor(e,n,r){this.query=e,this.nc=n,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=r||{}}ec(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.sc?this.rc(e)&&(this.nc.next(e),n=!0):this.oc(e,this.onlineState)&&(this.cc(e),n=!0),this.ic=e,n}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let n=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),n=!0),n}oc(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uc||!r)&&(!e.docs.isEmpty()||n==="Offline")}rc(e){if(e.docChanges.length>0)return!0;const n=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}cc(e){e=gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.key=e}}class Bw{constructor(e){this.key=e}}class YN{constructor(e,n){this.query=e,this.dc=n,this._c=null,this.current=!1,this.wc=Z(),this.mutatedKeys=Z(),this.mc=J0(e),this.gc=new mi(this.mc)}get yc(){return this.dc}Ic(e,n){const r=n?n.Ec:new Vw,i=n?n.gc:this.gc;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=Il(this.query)&&i.size===this.query.limit?i.last():null,u=Tl(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,p)=>{const d=i.get(c),g=jf(this.query,p)?p:null,w=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let h=!1;d&&g?d.data.isEqual(g.data)?w!==E&&(r.track({type:3,doc:g}),h=!0):this.Tc(d,g)||(r.track({type:2,doc:g}),h=!0,(l&&this.mc(g,l)>0||u&&this.mc(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),h=!0):d&&!g&&(r.track({type:1,doc:d}),h=!0,(l||u)&&(a=!0)),h&&(g?(o=o.add(g),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),Il(this.query)||Tl(this.query))for(;o.size>this.query.limit;){const c=Il(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{gc:o,Ec:r,ks:a,mutatedKeys:s}}Tc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const s=e.Ec.Yo();s.sort((u,c)=>function(p,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return g(p)-g(d)}(u.type,c.type)||this.mc(u.doc,c.doc)),this.Ac(r);const o=n?this.Rc():[],a=this.wc.size===0&&this.current?1:0,l=a!==this._c;return this._c=a,s.length!==0||l?{snapshot:new gi(this.query,e.gc,i,s,e.mutatedKeys,a===0,l,!1),Pc:o}:{Pc:o}}tc(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Vw,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach(n=>this.dc=this.dc.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.dc=this.dc.delete(n)),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=Z(),this.gc.forEach(r=>{this.bc(r.key)&&(this.wc=this.wc.add(r.key))});const n=[];return e.forEach(r=>{this.wc.has(r)||n.push(new Bw(r))}),this.wc.forEach(r=>{e.has(r)||n.push(new jw(r))}),n}vc(e){this.dc=e.Ks,this.wc=Z();const n=this.Ic(e.documents);return this.applyChanges(n,!0)}Vc(){return gi.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,this._c===0)}}class XN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JN{constructor(e){this.key=e,this.Sc=!1}}class ZN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Dc={},this.Cc=new ho(a=>X0(a),Sl),this.Nc=new Map,this.xc=new Set,this.kc=new ge(D.comparator),this.Oc=new Map,this.Mc=new Jf,this.$c={},this.Fc=new Map,this.Bc=di.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return this.Lc===!0}}async function eO(t,e){const n=cO(t);let r,i;const s=n.Cc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Vc();else{const o=await pN(n.localStore,or(e));n.isPrimaryClient&&xw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await tO(n,e,r,a==="current")}return i}async function tO(t,e,n,r){t.Uc=(c,p,d)=>async function(g,w,E,h){let f=w.view.Ic(E);f.ks&&(f=await Rw(g.localStore,w.query,!1).then(({documents:y})=>w.view.Ic(y,f)));const m=h&&h.targetChanges.get(w.targetId),v=w.view.applyChanges(f,g.isPrimaryClient,m);return Gw(g,w.targetId,v.Pc),v.snapshot}(t,c,p,d);const i=await Rw(t.localStore,e,!0),s=new YN(e,i.Ks),o=s.Ic(i.documents),a=lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Gw(t,n,l.Pc);const u=new XN(e,n,s);return t.Cc.set(e,u),t.Nc.has(n)?t.Nc.get(n).push(e):t.Nc.set(n,[e]),l.snapshot}async function nO(t,e){const n=j(t),r=n.Cc.get(e),i=n.Nc.get(r.targetId);if(i.length>1)return n.Nc.set(r.targetId,i.filter(s=>!Sl(s,e))),void n.Cc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Dw(n.remoteStore,r.targetId),ad(n,r.targetId)}).catch(co)):(ad(n,r.targetId),await Xf(n.localStore,r.targetId,!0))}async function rO(t,e,n){const r=hO(t);try{const i=await function(s,o){const a=j(s),l=et.now(),u=o.reduce((p,d)=>p.add(d.key),Z());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>a.Us.Es(p,u).next(d=>{c=d;const g=[];for(const w of o){const E=TA(w,c.get(w.key));E!=null&&g.push(new ao(w.key,E,B0(E.value.mapValue),ci.exists(!0)))}return a.gs.addMutationBatch(p,l,g,o)})).then(p=>(p.applyToLocalDocumentSet(c),{batchId:p.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.$c[s.currentUser.toKey()];l||(l=new ge(K)),l=l.insert(o,a),s.$c[s.currentUser.toKey()]=l}(r,i.batchId,n),await po(r,i.changes),await Ul(r.remoteStore)}catch(i){const s=sd(i,"Failed to persist write");n.reject(s)}}async function zw(t,e){const n=j(t);try{const r=await hN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Oc.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Sc=!0:i.modifiedDocuments.size>0?Q(o.Sc):i.removedDocuments.size>0&&(Q(o.Sc),o.Sc=!1))}),await po(n,r,e)}catch(r){await co(r)}}function qw(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Cc.forEach((s,o)=>{const a=o.view.tc(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=j(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const p of c.listeners)p.tc(o)&&(l=!0)}),l&&od(a)}(r.eventManager,e),i.length&&r.Dc.To(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iO(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Oc.get(e),s=i&&i.key;if(s){let o=new ge(D.comparator);o=o.insert(s,Me.newNoDocument(s,z.min()));const a=Z().add(s),l=new xl(z.min(),new Map,new Ae(K),o,a);await zw(r,l),r.kc=r.kc.remove(s),r.Oc.delete(e),ld(r)}else await Xf(r.localStore,e,!1).then(()=>ad(r,e,n)).catch(co)}async function sO(t,e){const n=j(t),r=e.batch.batchId;try{const i=await cN(n.localStore,e);Ww(n,r,null),Hw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,i)}catch(i){await co(i)}}async function oO(t,e,n){const r=j(t);try{const i=await function(s,o){const a=j(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.gs.lookupMutationBatch(l,o).next(c=>(Q(c!==null),u=c.keys(),a.gs.removeMutationBatch(l,c))).next(()=>a.gs.performConsistencyCheck(l)).next(()=>a.Us.Es(l,u))})}(r.localStore,e);Ww(r,e,n),Hw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,i)}catch(i){await co(i)}}function Hw(t,e){(t.Fc.get(e)||[]).forEach(n=>{n.resolve()}),t.Fc.delete(e)}function Ww(t,e,n){const r=j(t);let i=r.$c[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.$c[r.currentUser.toKey()]=i}}function ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Nc.get(e))t.Cc.delete(r),n&&t.Dc.qc(r,n);t.Nc.delete(e),t.isPrimaryClient&&t.Mc.si(e).forEach(r=>{t.Mc.containsKey(r)||Kw(t,r)})}function Kw(t,e){t.xc.delete(e.path.canonicalString());const n=t.kc.get(e);n!==null&&(Dw(t.remoteStore,n),t.kc=t.kc.remove(e),t.Oc.delete(n),ld(t))}function Gw(t,e,n){for(const r of n)r instanceof jw?(t.Mc.addReference(r.key,e),aO(t,r)):r instanceof Bw?(x("SyncEngine","Document no longer in limbo: "+r.key),t.Mc.removeReference(r.key,e),t.Mc.containsKey(r.key)||Kw(t,r.key)):V()}function aO(t,e){const n=e.key,r=n.path.canonicalString();t.kc.get(n)||t.xc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.xc.add(r),ld(t))}function ld(t){for(;t.xc.size>0&&t.kc.size<t.maxConcurrentLimboResolutions;){const e=t.xc.values().next().value;t.xc.delete(e);const n=new D(J.fromString(e)),r=t.Bc.next();t.Oc.set(r,new JN(n)),t.kc=t.kc.insert(n,r),xw(t.remoteStore,new lr(or(K0(n.path)),r,2,xf.A))}}async function po(t,e,n){const r=j(t),i=[],s=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach((a,l)=>{o.push(r.Uc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Yf.Ss(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Dc.To(i),await async function(a,l){const u=j(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,p=>S.forEach(p.vs,d=>u.persistence.referenceDelegate.addReference(c,p.targetId,d)).next(()=>S.forEach(p.Vs,d=>u.persistence.referenceDelegate.removeReference(c,p.targetId,d)))))}catch(c){if(!uo(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const p=c.targetId;if(!c.fromCache){const d=u.Ms.get(p),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);u.Ms=u.Ms.insert(p,w)}}}(r.localStore,s))}async function lO(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await kw(n.localStore,e);n.currentUser=e,function(i,s){i.Fc.forEach(o=>{o.forEach(a=>{a.reject(new N(_.CANCELLED,s))})}),i.Fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.qs)}}function uO(t,e){const n=j(t),r=n.Oc.get(e);if(r&&r.Sc)return Z().add(r.key);{let i=Z();const s=n.Nc.get(e);if(!s)return i;for(const o of s){const a=n.Cc.get(o);i=i.unionWith(a.view.yc)}return i}}function cO(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iO.bind(null,e),e.Dc.To=KN.bind(null,e.eventManager),e.Dc.qc=GN.bind(null,e.eventManager),e}function hO(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oO.bind(null,e),e}class fO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Ml(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return uN(this.persistence,new aN,e.initialUser,this.O)}jc(e){return new _N(Zf.bi,this.O)}Gc(e){return new TN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lO.bind(null,this.syncEngine),await BN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qN}createDatastore(e){const n=Ml(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new RN(i));var i;return function(s,o,a,l){return new ON(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>qw(this.syncEngine,a,0),o=Nw.Vt()?new Nw:new SN,new xN(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new ZN(r,i,s,o,a,l);return u&&(c.Lc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=j(e);x("RemoteStore","RemoteStore shutting down."),n.Ko.add(5),await fo(n),n.jo.shutdown(),n.Qo.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=D0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gO(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function yO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vO(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Fw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Fw(e.remoteStore,s)),t.onlineComponents=e}async function vO(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await gO(t,new fO)),t.offlineComponents}async function Qw(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await yO(t,new dO)),t.onlineComponents}function wO(t){return Qw(t).then(e=>e.syncEngine)}async function EO(t){const e=await Qw(t),n=e.eventManager;return n.onListen=eO.bind(null,e.syncEngine),n.onUnlisten=nO.bind(null,e.syncEngine),n}function _O(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new pO({next:p=>{s.enqueueAndForget(()=>WN(i,c)),p.fromCache&&a.source==="server"?l.reject(new N(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),c=new QN(o,u,{includeMetadataChanges:!0,uc:!0});return HN(i,c)}(await EO(t),t.asyncQueue,e,n,r)),r.promise}const Yw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e,n){if(!n)throw new N(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IO(t,e,n,r){if(e===!0&&r===!0)throw new N(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jw(t){if(!D.isDocumentKey(t))throw new N(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Zw(t){if(D.isDocumentKey(t))throw new N(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function ud(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fl(t);throw new N(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,IO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eE({}),this._settingsFrozen=!1,e instanceof oi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new N(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(i.options.projectId)}(e))}get app(){if(!this._app)throw new N(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new KR;switch(n.type){case"gapi":const r=n.client;return Q(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new YR(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new N(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Yw.get(e);n&&(x("ComponentProvider","Removing Datastore"),Yw.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class mo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mo(this.firestore,e,this._query)}}class Tn extends mo{constructor(e,n,r){super(e,n,K0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new D(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function ax(t,e,...n){if(t=he(t),Xw("collection","path",e),t instanceof cd){const r=J.fromString(e,...n);return Zw(r),new Tn(t,null,r)}{if(!(t instanceof ht||t instanceof Tn))throw new N(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return Zw(r),new Tn(t.firestore,null,r)}}function TO(t,e,...n){if(t=he(t),arguments.length===1&&(e=D0.R()),Xw("doc","path",e),t instanceof cd){const r=J.fromString(e,...n);return Jw(r),new ht(t,null,new D(r))}{if(!(t instanceof ht||t instanceof Tn))throw new N(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return Jw(r),new ht(t.firestore,t instanceof Tn?t.converter:null,new D(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Ow(this,"async_queue_retry"),this.yu=()=>{const n=ed();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ro.Yr()};const e=ed();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const n=ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise(()=>{});const n=new En;return this.Iu(()=>this.fu&&this.mu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.lu.push(e),this.Eu()))}async Eu(){if(this.lu.length!==0){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!uo(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr(()=>this.Eu())}}Iu(e){const n=this.hu.then(()=>(this.wu=!0,e().catch(r=>{this._u=r,this.wu=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.wu=!1,r))));return this.hu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.gu.indexOf(e)>-1&&(n=0);const i=id.createAndSchedule(this,e,n,r,s=>this.Tu(s));return this.du.push(i),i}pu(){this._u&&V()}verifyOperationInProgress(){}async Au(){let e;do e=this.hu,await e;while(e!==this.hu)}Ru(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}Pu(e){return this.Au().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Au()})}bu(e){this.gu.push(e)}Tu(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class hd extends cd{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new SO,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||nE(this),this._firestoreClient.terminate()}}function lx(t=Na()){return hn(t,"firestore").getImmediate()}function tE(t){return t._firestoreClient||nE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new nA(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new mO(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yi(Ce.fromBase64String(e))}catch(n){throw new N(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new yi(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=/^__.*__$/;class CO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ao(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ol(e,this.data,n,this.fieldTransforms)}}function iE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class pd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.O=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new pd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.Nu(e),i}xu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Su({path:r,Cu:!1});return i.vu(),i}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Vl(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(e.length===0)throw this.Ou("Document fields must not be empty");if(iE(this.Vu)&&kO.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class RO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.O=r||Ml(e)}Fu(e,n,r,i=!1){return new pd({Vu:e,methodName:n,$u:r,path:Qe.emptyPath(),Cu:!1,Mu:i},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function sE(t){const e=t._freezeSettings(),n=Ml(t._databaseId);return new RO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function AO(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);lE("Data must be an object, but it was:",o,r);const a=oE(r,o);let l,u;if(s.merge)l=new Df(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const p of s.mergeFields){const d=OO(e,p,n);if(!o.contains(d))throw new N(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xO(c,d)||c.push(d)}l=new Df(c),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new CO(new gt(a),l,u)}function NO(t,e,n,r=!1){return md(n,t.Fu(r?4:3,e))}function md(t,e){if(aE(t=he(t)))return lE("Unsupported field value:",e,t),oE(t,e);if(t instanceof rE)return function(n,r){if(!iE(r.Vu))throw r.Ou(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Ou(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Cu&&e.Vu!==4)throw e.Ou("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=md(o,r.ku(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=he(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yA(r.O,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=et.fromDate(n);return{timestampValue:Ll(r.O,i)}}if(n instanceof et){const i=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ll(r.O,i)}}if(n instanceof dd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof yi)return{bytesValue:ww(r.O,n._byteString)};if(n instanceof ht){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Ou(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Ou(`Unsupported field value: ${Fl(n)}`)}(t,e)}function oE(t,e){const n={};return M0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=md(i,e.Du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function aE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof dd||t instanceof yi||t instanceof ht||t instanceof rE)}function lE(t,e,n){if(!aE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Fl(n);throw r==="an object"?e.Ou(t+" a custom object"):e.Ou(t+" "+r)}}function OO(t,e,n){if((e=he(e))instanceof fd)return e._internalPath;if(typeof e=="string")return uE(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const PO=new RegExp("[~\\*/\\[\\]]");function uE(t,e,n){if(e.search(PO)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fd(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(_.INVALID_ARGUMENT,a+t+l)}function xO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DO extends cE{data(){return super.data()}}function gd(t,e){return typeof e=="string"?uE(t,e):e instanceof fd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LO extends cE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bl extends LO{data(e={}){return super.data(e)}}class MO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new jl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new jl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new jl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new jl(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:$O(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $O(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(t){if(Tl(t)&&t.explicitOrderBy.length===0)throw new N(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UO{}function ux(t,...e){for(const n of e)t=n._apply(t);return t}class FO extends UO{constructor(e,n,r){super(),this.Uu=e,this.qu=n,this.Ku=r,this.type="where"}_apply(e){const n=sE(e.firestore),r=function(i,s,o,a,l,u,c){let p;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new N(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){fE(c,u);const g=[];for(const w of c)g.push(hE(a,i,w));p={arrayValue:{values:g}}}else p=hE(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||fE(c,u),p=NO(o,s,c,u==="in"||u==="not-in");const d=je.create(l,u,p);return function(g,w){if(w.S()){const h=Q0(g);if(h!==null&&!h.isEqual(w.field))throw new N(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${h.toString()}' and '${w.field.toString()}'`);const f=G0(g);f!==null&&VO(g,w.field,f)}const E=function(h,f){for(const m of h.filters)if(f.indexOf(m.op)>=0)return m.op;return null}(g,function(h){switch(h){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(w.op));if(E!==null)throw E===w.op?new N(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${w.op.toString()}' filter.`):new N(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${w.op.toString()}' filters with '${E.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Uu,this.qu,this.Ku);return new mo(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new ro(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function cx(t,e,n){const r=e,i=gd("where",t);return new FO(i,r,n)}function hE(t,e,n){if(typeof(n=he(n))=="string"){if(n==="")throw new N(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Y0(e)&&n.indexOf("/")!==-1)throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!D.isDocumentKey(r))throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return F0(t,new D(r))}if(n instanceof ht)return F0(t,n._key);throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fl(n)}.`)}function fE(t,e){if(!Array.isArray(t)||t.length===0)throw new N(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new N(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function VO(t,e,n){if(!n.isEqual(e))throw new N(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return ii(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new dd(ae(e.latitude),ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=b0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zs(e));default:return null}}convertTimestamp(e){const n=_n(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=J.fromString(e);Q(Sw(r));const i=new oi(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class zO extends jO{constructor(e){super(),this.firestore=e}convertBytes(e){return new yi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function hx(t){t=ud(t,mo);const e=ud(t.firestore,hd),n=tE(e),r=new zO(e);return bO(t._query),_O(n,t._query).then(i=>new MO(e,r,t,i))}function fx(t,e){const n=ud(t.firestore,hd),r=TO(t),i=BO(t.converter,e);return qO(n,[AO(sE(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ci.exists(!1))]).then(()=>r)}function qO(t,e){return function(n,r){const i=new En;return n.asyncQueue.enqueueAndForget(async()=>rO(await wO(n),r,i)),i.promise}(tE(t),e)}(function(t,e=!0){(function(n){ni=n})(qr),kt(new mt("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new hd(i,new GR(n.getProvider("auth-internal")),new JR(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Ke(O0,"3.4.5",t),Ke(O0,"3.4.5","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebasestorage.googleapis.com",pE="storageBucket",HO=2*60*1e3,WO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends St{constructor(e,n){super(yd(e),`Firebase Storage: ${n} (${yd(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}_codeEquals(e){return yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function yd(t){return"storage/"+t}function mE(){const t="An unknown error occurred, please check the error payload for server response.";return new ve("unknown",t)}function KO(t){return new ve("object-not-found","Object '"+t+"' does not exist.")}function GO(t){return new ve("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve("unauthenticated",t)}function YO(){return new ve("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function XO(t){return new ve("unauthorized","User does not have permission to access '"+t+"'.")}function JO(){return new ve("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ZO(){return new ve("canceled","User canceled the upload/download.")}function eP(t){return new ve("invalid-url","Invalid URL '"+t+"'.")}function tP(t){return new ve("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function nP(){return new ve("no-default-bucket","No default bucket found. Did you set the '"+pE+"' property when initializing the app?")}function rP(){return new ve("no-download-url","The given file does not have any download URLs.")}function vd(t){return new ve("invalid-argument",t)}function gE(){return new ve("app-deleted","The Firebase app was deleted.")}function iP(t){return new ve("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function go(t){throw new ve("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tt.makeFromUrl(e,n)}catch{return new tt(e,"")}if(r.path==="")return r;throw tP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${p}/${c}/b/${i}/o${d}`,"i"),w={bucket:1,path:3},E=n===dE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",f=new RegExp(`^https?://${E}/${i}/${h}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:w,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<v.length;y++){const R=v[y],T=R.regex.exec(e);if(T){const O=T[R.indices.bucket];let L=T[R.indices.path];L||(L=""),r=new tt(O,L),R.postModify(r);break}}if(r==null)throw eP(e);return r}}class sP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...h){u||(u=!0,e.apply(null,h))}function p(h){i=setTimeout(()=>{i=null,t(g,l())},h)}function d(){s&&clearTimeout(s)}function g(h,...f){if(u){d();return}if(h){d(),c.call(null,h,...f);return}if(l()||o){d(),c.call(null,h,...f);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,p(v)}let w=!1;function E(h){w||(w=!0,d(),!u&&(i!==null?(h||(a=2),clearTimeout(i),p(0)):h||(a=1)))}return p(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function aP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){return t!==void 0}function uP(t){return typeof t=="object"&&!Array.isArray(t)}function yE(t){return typeof t=="string"||t instanceof String}function vE(t,e,n,r){if(r<e)throw vd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function EE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cr||(cr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n,r,i,s,o,a,l,u,c,p){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===cr.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===cr.ABORT;r(!1,new zl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new zl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lP(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=mE();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?gE():ZO();o(l)}else{const l=JO();o(l)}};this.canceled_?n(!1,new zl(!1,null,!0)):this.backoffId_=oP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class zl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function hP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function dP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mP(t,e,n,r,i,s){const o=EE(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return dP(l,e),hP(l,n),fP(l,s),pP(l,r),new cP(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){let e;try{e=JSON.parse(t)}catch{return null}return uP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function IE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e){return e}class Be{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||vP}}let ql=null;function wP(t){return!yE(t)||t.length<2?t:IE(t)}function EP(){if(ql)return ql;const t=[];t.push(new Be("bucket")),t.push(new Be("generation")),t.push(new Be("metageneration")),t.push(new Be("name","fullPath",!0));function e(s,o){return wP(o)}const n=new Be("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Be("size");return i.xform=r,t.push(i),t.push(new Be("timeCreated")),t.push(new Be("updated")),t.push(new Be("md5Hash",null,!0)),t.push(new Be("cacheControl",null,!0)),t.push(new Be("contentDisposition",null,!0)),t.push(new Be("contentEncoding",null,!0)),t.push(new Be("contentLanguage",null,!0)),t.push(new Be("contentType",null,!0)),t.push(new Be("metadata","customMetadata",!0)),ql=t,ql}function _P(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function IP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return _P(r,t),r}function TP(t,e,n){const r=_E(e);return r===null?null:IP(t,r,n)}function SP(t,e,n,r){const i=_E(e);if(i===null||!yE(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,p=t.fullPath,d="/b/"+o(c)+"/o/"+o(p),g=wE(d,n,r),w=EE({alt:"media",token:u});return g+w})[0]}class kP{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){if(!t)throw mE()}function RP(t,e){function n(r,i){const s=TP(t,i,e);return CP(s!==null),SP(s,i,t.host,t._protocol)}return n}function AP(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=YO():i=QO():n.getStatus()===402?i=GO(t.bucket):n.getStatus()===403?i=XO(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function NP(t){const e=AP(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=KO(t.path)),s.serverResponse=i.serverResponse,s}return n}function OP(t,e,n){const r=e.fullServerUrl(),i=wE(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new kP(i,s,RP(t,n),o);return a.errorHandler=NP(e),a}class PP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw go("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw go("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw go("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw go("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw go("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xP extends PP{initXhr(){this.xhr_.responseType="text"}}function DP(){return new xP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){this._service=e,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hr(e,n)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IE(this._location.path)}get storage(){return this._service}get parent(){const e=gP(this._location.path);if(e===null)return null;const n=new tt(this._location.bucket,e);return new hr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iP(e)}}function LP(t){t._throwIfRoot("getDownloadURL");const e=OP(t.storage,t._location,EP());return t.storage.makeRequestWithTokens(e,DP).then(n=>{if(n===null)throw rP();return n})}function MP(t,e){const n=yP(t._location.path,e),r=new tt(t._location.bucket,n);return new hr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){return/^[A-Za-z]+:\/\//.test(t)}function bP(t,e){return new hr(t,e)}function TE(t,e){if(t instanceof wd){const n=t;if(n._bucket==null)throw nP();const r=new hr(n,n._bucket);return e!=null?TE(r,e):r}else return e!==void 0?MP(t,e):t}function UP(t,e){if(e&&$P(e)){if(t instanceof wd)return bP(t,e);throw vd("To use ref(service, url), the first argument must be a Storage instance.")}else return TE(t,e)}function SE(t,e){const n=e==null?void 0:e[pE];return n==null?null:tt.makeFromBucketSpec(n,t)}class wd{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=dE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HO,this._maxUploadRetryTime=WO,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=SE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=SE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hr(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new sP(gE());{const s=mP(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const kE="@firebase/storage",CE="0.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="storage";function dx(t){return t=he(t),LP(t)}function px(t,e){return t=he(t),UP(t,e)}function mx(t=Na(),e){return t=he(t),hn(t,RE).getImmediate({identifier:e})}function FP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wd(n,r,i,e,qr)}function VP(){kt(new mt(RE,FP,"PUBLIC").setMultipleInstances(!0)),Ke(kE,CE,""),Ke(kE,CE,"esm2017")}VP();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function jP(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(p){o(p)}}function l(c){try{u(r.throw(c))}catch(p){o(p)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function BP(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vi=function(){return vi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vi.apply(this,arguments)},AE=function(t){return{loading:t==null,value:t}},zP=function(){return function(t,e){switch(e.type){case"error":return vi(vi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return AE(e.defaultValue);case"value":return vi(vi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},qP=function(t){var e=t?t():void 0,n=F.exports.useReducer(zP(),AE(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return F.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},gx=function(t,e){var n=qP(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;F.exports.useEffect(function(){var u=Ok(t,function(c){return jP(void 0,void 0,void 0,function(){var p;return BP(this,function(d){switch(d.label){case 0:if(!(e==null?void 0:e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return d.sent(),[3,4];case 3:return p=d.sent(),s(p),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]);var l=[a,i,r];return F.exports.useMemo(function(){return l},l)};export{XP as B,pn as G,JP as L,QP as R,KP as a,mx as b,ox as c,lx as d,dx as e,cx as f,ex as g,rx as h,ZP as i,GP as j,tx as k,ix as l,nx as m,ax as n,F as o,z_ as p,hx as q,px as r,sx as s,YP as t,gx as u,V_ as v,ux as w,WP as x,HP as y,fx as z};
