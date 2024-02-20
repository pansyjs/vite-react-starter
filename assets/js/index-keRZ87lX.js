import{r as A,j as O,R as V}from"./index-JeV3QVIE.js";var s;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(s||(s={}));var X={key:"f97efc35164149d0c0f299e7a8adb3d2",AMap:{version:"2.0",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"2.0.0"}};function Y(e){return"https://webapi.amap.com/maps?callback=__amap_init_callback"+"&v=".concat(e.AMap.version)+"&key=".concat(e.key)+"&plugin=".concat(e.AMap.plugins.join(","))}function $(e){"@babel/helpers - typeof";return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function te(e,t,n){return t=ne(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e){var t=re(e,"string");return $(t)==="symbol"?t:String(t)}function re(e,t){if($(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if($(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var m={AMap:s.notload,AMapUI:s.notload,Loca:s.notload},j={AMap:[],AMapUI:[],Loca:[]},p=ee({},X),z=[];function ae(e){if(typeof e=="function"){if(m.AMap===s.loaded){e(window.AMap);return}z.push(e)}}function x(e){var t=[];return e.AMapUI&&t.push(oe(e.AMapUI)),e.Loca&&t.push(ie(e.Loca)),Promise.all(t)}function oe(e){return new Promise(function(t,n){var r=[];if(e.plugins)for(var a=0;a<e.plugins.length;a+=1)p.AMapUI.plugins.indexOf(e.plugins[a])==-1&&r.push(e.plugins[a]);if(m.AMapUI===s.failed){n("前次请求 AMapUI 失败");return}if(m.AMapUI===s.notload){m.AMapUI=s.loading,p.AMapUI.version=e.version||p.AMapUI.version;var i=p.AMapUI.version,c=document.body||document.head,u=document.createElement("script");u.type="text/javascript",u.src="https://webapi.amap.com/ui/".concat(i,"/main.js"),u.onerror=function(o){m.AMapUI=s.failed,n("请求 AMapUI 失败")},u.onload=function(){if(m.AMapUI=s.loaded,r.length)window.AMapUI.loadUI(r,function(){for(var o=0,l=r.length;o<l;o++){var d=r[o],y=d.split("/").slice(-1)[0];window.AMapUI[y]=arguments[o]}for(t();j.AMapUI.length;)j.AMapUI.splice(0,1)[0]()});else for(t();j.AMapUI.length;)j.AMapUI.splice(0,1)[0]()},c.appendChild(u);return}if(m.AMapUI===s.loaded){e.version&&e.version!==p.AMapUI.version?n("不允许多个版本 AMapUI 混用"):r.length?window.AMapUI.loadUI(r,function(){for(var o=0,l=r.length;o<l;o++){var d=r[o],y=d.split("/").slice(-1)[0];window.AMapUI[y]=arguments[o]}t()}):t();return}e.version&&e.version!==p.AMapUI.version?n("不允许多个版本 AMapUI 混用"):j.AMapUI.push(function(o){o?n(o):r.length?window.AMapUI.loadUI(r,function(){for(var l=0,d=r.length;l<d;l++){var y=r[l],h=y.split("/").slice(-1)[0];window.AMapUI[h]=arguments[l]}t()}):t()})})}function ie(e){return new Promise(function(t,n){if(m.Loca===s.failed){n("前次请求 Loca 失败");return}if(m.Loca===s.notload){m.Loca=s.loading,p.Loca.version=e.version||p.Loca.version;var r=p.Loca.version,a=p.AMap.version.startsWith("2"),i=r.startsWith("2");if(a&&!i||!a&&i){n("JSAPI 与 Loca 版本不对应！！");return}var c=p.key,u=document.body||document.head,o=document.createElement("script");o.type="text/javascript",o.src="https://webapi.amap.com/loca?v=".concat(r,"&key=").concat(c),o.onerror=function(){m.Loca=s.failed,n("请求 Loca 失败")},o.onload=function(){for(m.Loca=s.loaded,t();j.Loca.length;)j.Loca.splice(0,1)[0]()},u.appendChild(o);return}if(m.Loca===s.loaded){e.version&&e.version!==p.Loca.version?n("不允许多个版本 Loca 混用"):t();return}e.version&&e.version!==p.Loca.version?n("不允许多个版本 Loca 混用"):j.Loca.push(function(l){l?n(l):n()})})}function ue(e){return new Promise(function(t,n){if(m.AMap==s.failed){n();return}if(m.AMap==s.notload){var r=e.key,a=r===void 0?p.key:r,i=e.version,c=i===void 0?p.AMap.version:i,u=e.plugins,o=u===void 0?[]:u;p.key=a,p.AMap.version=c,p.AMap.plugins=o,m.AMap=s.loading;var l=document.body||document.head;window.__amap_init_callback=function(f){if(delete window.__amap_init_callback,f){m.AMap=s.failed,n(f);return}for(m.AMap=s.loaded,x(e).then(function(){t(window.AMap)}).catch(n);z.length;)z.splice(0,1)[0]()};var d=document.createElement("script");d.type="text/javascript",d.src=Y(p),d.onerror=function(f){m.AMap=s.failed,n(f)},l.appendChild(d);return}if(m.AMap==s.loaded){if(e.key&&e.key!==p.key){n("多个不一致的 key");return}if(e.version&&e.version!==p.AMap.version){n("不允许多个版本 JSAPI 混用");return}var y=[];if(e.plugins)for(var h=0;h<e.plugins.length;h+=1)p.AMap.plugins.indexOf(e.plugins[h])==-1&&y.push(e.plugins[h]);y.length?window.AMap.plugin(y,function(){x(e).then(function(){t(window.AMap)}).catch(n)}):x(e).then(function(){t(window.AMap)}).catch(n);return}if(e.key&&e.key!==p.key){n("多个不一致的 key");return}if(e.version&&e.version!==p.AMap.version){n("不允许多个版本 JSAPI 混用");return}var b=[];if(e.plugins)for(var h=0;h<e.plugins.length;h+=1)p.AMap.plugins.indexOf(e.plugins[h])==-1&&b.push(e.plugins[h]);ae(function(){b.length?window.AMap.plugin(b,function(){x(e).then(function(){t(window.AMap)}).catch(n)}):x(e).then(function(){t(window.AMap)}).catch(n)})})}var le=typeof window<"u",ce=function(t){return t[0].toUpperCase()+t.slice(1,t.length)},R=function(){return window.AMap||window.proxy.AMap},fe=function(t){if(!t)return null;if("getLng"in t&&"getLat"in t)return t;var n=0,r=0;Array.isArray(t)?(n=t[0],r=t[1]):"lng"in t&&"lat"in t?(n=t.lng,r=t.lat):"longitude"in t&&"latitude"in t&&(n=t.longitude,r=t.latitude);var a=R();return le&&a?new a.LngLat(n,r):null};function pe(e,t){var n=A.useRef(),r=A.useRef(),a=typeof t=="function"?t(r.current,e):!0;return a&&(n.current=r.current,r.current=e),n.current}function se(e,t){return ge(e)||ye(e,t)||ve(e,t)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ve(e,t){if(e){if(typeof e=="string")return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}}function k(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ye(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,c,u=[],o=!0,l=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);o=!0);}catch(d){l=!0,a=d}finally{try{if(!o&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw a}}return u}}function ge(e){if(Array.isArray(e))return e}function me(e,t){var n,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=r.setterMap,i=a===void 0?{}:a,c=r.converterMap,u=c===void 0?{}:c,o=(n=pe(e))!==null&&n!==void 0?n:{},l=A.useRef([]),d=A.useState(!1),y=se(d,2),h=y[0],b=y[1];A.useEffect(function(){t.current&&g(e,!0)},[e]),A.useEffect(function(){return function(){if(t.current)try{"destroy"in t.current&&t.current.destroy(),"hide"in t.current&&t.current.hide(),"map"in e&&"setMap"in t.current&&t.current.setMap(null)}catch{}}},[]);var f=function(v){if(b(!0),"events"in e&&v){var I,w;(I=(w=e.events).created)===null||I===void 0||I.call(w,v)}g(e,!1)},g=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,w=t.current;if(w)try{Object.keys(v).forEach(function(M){if(M==="events")return S(v);var L=!0;if(I&&(L=C(M,v,o)),!!L){var U=v[M];if(M in u&&(U=u[M](v[M])),M in i)i[M](U,w);else{var E="set".concat(ce(M));E in w&&w[E](U)}}})}catch{}},S=function(v){var I=t.current,w=Object.keys(v.events||{});w.length&&w.forEach(function(M){l.current.indexOf(M)===-1&&(l.current.push(M),I.on(M,function(L){return function(){if(v.events&&L in v.events){for(var U=arguments.length,E=new Array(U),W=0;W<U;W++)E[W]=arguments[W];v.events[L].apply(null,E)}}}(M)))})},C=function(v,I,w){return I[v]!==w[v]};return{loaded:h,prevProps:o,onInstanceCreated:f}}function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}var he=["loading","children","onComplete"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function be(e,t,n){return t=Ae(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ae(e){var t=Me(e,"string");return T(t)==="symbol"?t:String(t)}function Me(e,t){if(T(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(T(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Z(e,t){return Se(e)||Pe(e,t)||Oe(e,t)||we()}function we(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oe(e,t){if(e){if(typeof e=="string")return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}}function J(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pe(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,c,u=[],o=!0,l=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);o=!0);}catch(d){l=!0,a=d}finally{try{if(!o&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw a}}return u}}function Se(e){if(Array.isArray(e))return e}function Ie(e,t){if(e==null)return{};var n=je(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function je(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var Ce=function(t){var n=t.loading,r=t.children,a=t.onComplete,i=Ie(t,he),c=A.useState(!1),u=Z(c,2),o=u[0],l=u[1],d=A.useState(!0),y=Z(d,2),h=y[0],b=y[1];return A.useEffect(function(){ue(H(H({},i),{},{key:i.mapKey})).then(function(){var f=R();a==null||a(f),l(!0),b(!1)}).catch(function(f){b(!1)})},[JSON.stringify(i)]),h&&n?O.jsx(O.Fragment,{children:n}):O.jsx(O.Fragment,{children:o&&r})},Ue=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],Q=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],Le=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor","WebGLParams"],Ee={width:"100%",height:"100%",position:"relative"},xe={width:"100%",height:"100%"},$e=Ue.concat(Q,Le),Te={zoom:function(t,n){n&&n.setZoom(t)},cursor:function(t,n){n&&n.setDefaultCursor(t)},labelzIndex:function(t,n){n&&n.setLabelzIndex(t)}},K={center:fe,mapStyle:function(t){return t.indexOf("amap://styles")===0?t:"amap://styles/".concat(t)}},De=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=A.useRef(),r=A.useRef(),a=me(t,r,{setterMap:Te,converterMap:K}),i=a.loaded,c=a.prevProps,u=a.onInstanceCreated;A.useEffect(function(){o().then(function(){var b;(b=t.onMapCreate)===null||b===void 0||b.call(t,r.current),u==null||u(r.current)})},[]),A.useEffect(function(){i&&y(c,t)},[t]);var o=function(){var f=l(),g=R();return r.current=new g.Map(n.current,f),Promise.resolve()},l=function(){var f={};return $e.forEach(function(g){g in t&&(f[g]=d(g,t))}),f},d=function(f,g){return f in K?K[f](g[f]):g[f]},y=function(f,g){var S={},C=!1;Q.forEach(function(P){P in g&&h(P,f,g)&&(C=!0,S[P]=g[P])}),C&&r.current.setStatus(S)},h=function(f,g,S){return g[f]!==S[f]};return O.jsxs("div",{style:Ee,children:[O.jsx("div",{ref:n,style:xe,children:i?null:t.loading}),O.jsx("div",{children:i?t.children:null})]})},We=A.createContext({});function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}var Ke=["mapKey","version","plugins","AMapUI","Loca","loading","onComplete","onMapCreate"];function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(r){ze(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ze(e,t,n){return t=Re(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Re(e){var t=_e(e,"string");return D(t)==="symbol"?t:String(t)}function _e(e,t){if(D(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(D(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function G(e,t){return Ze(e)||He(e,t)||Be(e,t)||ke()}function ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Be(e,t){if(e){if(typeof e=="string")return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}}function q(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function He(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,a,i,c,u=[],o=!0,l=!1;try{if(i=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);o=!0);}catch(d){l=!0,a=d}finally{try{if(!o&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw a}}return u}}function Ze(e){if(Array.isArray(e))return e}function Je(e,t){if(e==null)return{};var n=Ne(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ne(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}var Fe=V.forwardRef(function(e,t){var n=e.mapKey,r=e.version,a=e.plugins,i=e.AMapUI,c=e.Loca,u=e.loading,o=e.onComplete;e.onMapCreate;var l=Je(e,Ke),d=A.useState(),y=G(d,2),h=y[0],b=y[1],f=A.useState(),g=G(f,2),S=g[0],C=g[1];return A.useImperativeHandle(t,function(){return S},[S]),O.jsx(We.Provider,{value:{AMap:h,map:S},children:O.jsx(Ce,{mapKey:n,version:r,plugins:a,Loca:c,AMapUI:i,loading:u,onComplete:function(v){o==null||o(v),b(v)},children:O.jsx(De,F(F({loading:u},l),{},{onMapCreate:function(v){C(v)}}))})})});const qe=()=>O.jsx("div",{style:{height:"100vh"},children:O.jsx(Fe,{})});export{qe as default};