import{B as ne,I as V,r as me}from"./button-BQqsKUsj.js";import{g as pe,L as ye,t as ge,D as X,n as Ce}from"./wrapEmojiText-C987375G.js";import{an as be,a as Ee,ao as Y,H as ie,ac as S,J as ve,F as W,bJ as Le,C as H,P as we,O as z,aF as Se,bK as Ae,cm as Pe,E as xe,am as B,d as se,ad as Oe,i as Z,al as D,h as ke,e as Te,Z as Ne}from"./index-C9ObFnL1.js";import{a as T,d as Fe}from"./page-CCh-lP8j.js";import{S as Ie}from"./scrollable-Bt8ivd2t.js";function Me(n){if(n.key==="Enter"&&!be&&!n.isComposing){if(Ee.settings.sendShortcut==="enter")return n.shiftKey||n.ctrlKey||n.metaKey?void 0:!0;{const t=Y?n.metaKey:n.ctrlKey;if(n.shiftKey||(Y?n.ctrlKey:n.metaKey))return;if(t)return!0}}return!1}function ut(n){n.requestFullscreen?n.requestFullscreen():n.mozRequestFullScreen?n.mozRequestFullScreen():n.webkitRequestFullscreen?n.webkitRequestFullscreen():n.msRequestFullscreen&&n.msRequestFullscreen()}function mt(){document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function Be(n,t,e){const i=e?e.add(n):n.addEventListener.bind(n);"webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange".split(" ").forEach(s=>{i(s,t,!1)})}function oe(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement}function pt(){return!!oe()}const De=(n,t={})=>{const e=n?.split(" ");return ne("btn-icon"+(e?.length>1?" "+e.slice(1).join(" "):""),{icon:e?.[0]||void 0,...t})},He=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Re=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...He]),$e=new Set(["innerHTML","textContent","innerText","children"]),Ue=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),We=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ke(n,t){const e=We[n];return typeof e=="object"?e[t]?e.$:void 0:e}const _e=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),je=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Ge={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function qe(n,t,e){let i=e.length,s=t.length,l=i,r=0,o=0,c=t[s-1].nextSibling,f=null;for(;r<s||o<l;){if(t[r]===e[o]){r++,o++;continue}for(;t[s-1]===e[l-1];)s--,l--;if(s===r){const h=l<i?o?e[o-1].nextSibling:e[l-o]:c;for(;o<l;)n.insertBefore(e[o++],h)}else if(l===o)for(;r<s;)(!f||!f.has(t[r]))&&t[r].remove(),r++;else if(t[r]===e[l-1]&&e[o]===t[s-1]){const h=t[--s].nextSibling;n.insertBefore(e[o++],t[r++].nextSibling),n.insertBefore(e[--l],h),t[s]=e[l]}else{if(!f){f=new Map;let d=o;for(;d<l;)f.set(e[d],d++)}const h=f.get(t[r]);if(h!=null)if(o<h&&h<l){let d=r,y=1,b;for(;++d<s&&d<l&&!((b=f.get(t[d]))==null||b!==h+y);)y++;if(y>h-o){const x=t[r];for(;o<h;)n.insertBefore(e[o++],x)}else n.replaceChild(e[o++],t[r++])}else r++;else t[r++].remove()}}}const J="_$DX_DELEGATE";function Ve(n,t,e,i={}){let s;return ie(l=>{s=l,t===document?n():$(t,n(),t.firstChild?null:void 0,e)},i.owner),()=>{s(),t.textContent=""}}function yt(n,t,e){let i;const s=()=>{const r=document.createElement("template");return r.innerHTML=n,e?r.content.firstChild.firstChild:r.content.firstChild},l=t?()=>W(()=>document.importNode(i||(i=s()),!0)):()=>(i||(i=s())).cloneNode(!0);return l.cloneNode=l,l}function Xe(n,t=window.document){const e=t[J]||(t[J]=new Set);for(let i=0,s=n.length;i<s;i++){const l=n[i];e.has(l)||(e.add(l),t.addEventListener(l,it))}}function R(n,t,e){e==null?n.removeAttribute(t):n.setAttribute(t,e)}function Ye(n,t,e,i){i==null?n.removeAttributeNS(t,e):n.setAttributeNS(t,e,i)}function ze(n,t){t==null?n.removeAttribute("class"):n.className=t}function Ze(n,t,e,i){if(i)Array.isArray(e)?(n[`$$${t}`]=e[0],n[`$$${t}Data`]=e[1]):n[`$$${t}`]=e;else if(Array.isArray(e)){const s=e[0];n.addEventListener(t,e[0]=l=>s.call(n,e[1],l))}else n.addEventListener(t,e)}function Je(n,t,e={}){const i=Object.keys(t||{}),s=Object.keys(e);let l,r;for(l=0,r=s.length;l<r;l++){const o=s[l];!o||o==="undefined"||t[o]||(Q(n,o,!1),delete e[o])}for(l=0,r=i.length;l<r;l++){const o=i[l],c=!!t[o];!o||o==="undefined"||e[o]===c||!c||(Q(n,o,!0),e[o]=c)}return e}function Qe(n,t,e){if(!t)return e?R(n,"style"):t;const i=n.style;if(typeof t=="string")return i.cssText=t;typeof e=="string"&&(i.cssText=e=void 0),e||(e={}),t||(t={});let s,l;for(l in e)t[l]==null&&i.removeProperty(l),delete e[l];for(l in t)s=t[l],s!==e[l]&&(i.setProperty(l,s),e[l]=s);return e}function et(n,t={},e,i){const s={};return i||S(()=>s.children=P(n,t.children,s.children)),S(()=>t.ref&&t.ref(n)),S(()=>tt(n,t,e,!0,s,!0)),s}function gt(n,t,e){return W(()=>n(t,e))}function $(n,t,e,i){if(e!==void 0&&!i&&(i=[]),typeof t!="function")return P(n,t,i,e);S(s=>P(n,t(),s,e),i)}function tt(n,t,e,i,s={},l=!1){t||(t={});for(const r in s)if(!(r in t)){if(r==="children")continue;s[r]=ee(n,r,null,s[r],e,l)}for(const r in t){if(r==="children")continue;const o=t[r];s[r]=ee(n,r,o,s[r],e,l)}}function nt(n){return n.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function Q(n,t,e){const i=t.trim().split(/\s+/);for(let s=0,l=i.length;s<l;s++)n.classList.toggle(i[s],e)}function ee(n,t,e,i,s,l){let r,o,c,f,h;if(t==="style")return Qe(n,e,i);if(t==="classList")return Je(n,e,i);if(e===i)return i;if(t==="ref")l||e(n);else if(t.slice(0,3)==="on:"){const d=t.slice(3);i&&n.removeEventListener(d,i),e&&n.addEventListener(d,e)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);i&&n.removeEventListener(d,i,!0),e&&n.addEventListener(d,e,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),y=_e.has(d);if(!y&&i){const b=Array.isArray(i)?i[0]:i;n.removeEventListener(d,b)}(y||e)&&(Ze(n,d,e,y),y&&Xe([d]))}else if(t.slice(0,5)==="attr:")R(n,t.slice(5),e);else if((h=t.slice(0,5)==="prop:")||(c=$e.has(t))||!s&&((f=Ke(t,n.tagName))||(o=Re.has(t)))||(r=n.nodeName.includes("-")))h&&(t=t.slice(5),o=!0),t==="class"||t==="className"?ze(n,e):r&&!o&&!c?n[nt(t)]=e:n[f||t]=e;else{const d=s&&t.indexOf(":")>-1&&Ge[t.split(":")[0]];d?Ye(n,d,t,e):R(n,Ue[t]||t,e)}return e}function it(n){const t=`$$${n.type}`;let e=n.composedPath&&n.composedPath()[0]||n.target;for(n.target!==e&&Object.defineProperty(n,"target",{configurable:!0,value:e}),Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return e||document}});e;){const i=e[t];if(i&&!e.disabled){const s=e[`${t}Data`];if(s!==void 0?i.call(e,s,n):i.call(e,n),n.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function P(n,t,e,i,s){for(;typeof e=="function";)e=e();if(t===e)return e;const l=typeof t,r=i!==void 0;if(n=r&&e[0]&&e[0].parentNode||n,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let o=e[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),e=w(n,e,i,o)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t;else if(t==null||l==="boolean")e=w(n,e,i);else{if(l==="function")return S(()=>{let o=t();for(;typeof o=="function";)o=o();e=P(n,o,e,i)}),()=>e;if(Array.isArray(t)){const o=[],c=e&&Array.isArray(e);if(U(o,t,e,s))return S(()=>e=P(n,o,e,i,!0)),()=>e;if(o.length===0){if(e=w(n,e,i),r)return e}else c?e.length===0?te(n,o,i):qe(n,e,o):(e&&w(n),te(n,o));e=o}else if(t.nodeType){if(Array.isArray(e)){if(r)return e=w(n,e,i,t);w(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}}return e}function U(n,t,e,i){let s=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],c=e&&e[l],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)n.push(o);else if(Array.isArray(o))s=U(n,o,c)||s;else if(f==="function")if(i){for(;typeof o=="function";)o=o();s=U(n,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||s}else n.push(o),s=!0;else{const h=String(o);c&&c.nodeType===3&&c.data===h?n.push(c):n.push(document.createTextNode(h))}}return s}function te(n,t,e=null){for(let i=0,s=t.length;i<s;i++)n.insertBefore(t[i],e)}function w(n,t,e,i){if(e===void 0)return n.textContent="";const s=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(s!==o){const c=o.parentNode===n;!l&&!r?c?n.replaceChild(s,o):n.insertBefore(s,e):c&&o.remove()}else l=!0}}else n.insertBefore(s,e);return[s]}const st="http://www.w3.org/2000/svg";function le(n,t=!1){return t?document.createElementNS(st,n):document.createElement(n)}function Ct(n){const{useShadow:t}=n,e=document.createTextNode(""),i=()=>n.mount||document.body,s=Ae();let l,r=!!Pe.context;return ve(()=>{l||(l=Le(s,()=>H(()=>n.children)));const o=i();if(o instanceof HTMLHeadElement){const[c,f]=we(!1),h=()=>f(!0);ie(d=>$(o,()=>c()?d():l(),null)),z(h)}else{const c=le(n.isSVG?"g":"div",n.isSVG),f=t&&c.attachShadow?c.attachShadow({mode:"open"}):c;Object.defineProperty(c,"_$host",{get(){return e.parentNode},configurable:!0}),$(f,l),o.appendChild(c),n.ref&&n.ref(c),z(()=>o.removeChild(c))}},void 0,{render:!r}),e}function bt(n){const[t,e]=Se(n,["component"]),i=H(()=>t.component);return H(()=>{const s=i();switch(typeof s){case"function":return W(()=>s(e));case"string":const l=je.has(s),r=le(s,l);return et(r,e,l),r}})}const K=document.body;let A=K;const re=()=>{A=oe()||K,N.reAppend()};Be(K,re);const C=class C extends xe{constructor(t,e={}){if(super(!1),this.element=document.createElement("div"),this.container=document.createElement("div"),this.header=document.createElement("div"),this.title=document.createElement("div"),this.hideWithCallback=i=>{this.addEventListener("closeAfterTimeout",i),this.hide()},this.element.classList.add("popup"),this.element.className="popup"+(t?" "+t:""),this.container.classList.add("popup-container","z-depth-1"),B.isDarkOverlayActive&&(this.night=!0,this.element.classList.add("night")),this.header.classList.add("popup-header"),e.title&&(this.title.classList.add("popup-title"),typeof e.title=="string"?se(this.title,e.title):typeof e.title!="boolean"&&this.title.append(e.title),this.header.append(this.title)),this.isConfirmationNeededOnClose=e.isConfirmationNeededOnClose,this.middlewareHelper=pe(),this.listenerSetter=new ye,this.managers=C.MANAGERS,this.confirmShortcutIsSendShortcut=e.confirmShortcutIsSendShortcut,e.closable&&(this.btnClose=De("",{noRipple:!0}),this.btnClose.classList.add("popup-close"),this.header.prepend(this.btnClose),e.onBackClick?(this.btnCloseAnimatedIcon=document.createElement("div"),this.btnCloseAnimatedIcon.classList.add("animated-close-icon"),this.btnClose.append(this.btnCloseAnimatedIcon)):this.btnClose.append(V("close")),T(this.btnClose,()=>{e.onBackClick&&this.btnCloseAnimatedIcon.classList.contains("state-back")?e.onBackClick()!==!1&&this.btnCloseAnimatedIcon.classList.remove("state-back"):this.hide()},{listenerSetter:this.listenerSetter})),this.withoutOverlay=e.withoutOverlay,this.withoutOverlay&&this.element.classList.add("no-overlay"),e.overlayClosable&&T(this.element,i=>{Oe(i.target,"popup-container")||!i.target.isConnected||this.hide()},{listenerSetter:this.listenerSetter}),e.withConfirm&&(this.btnConfirm=document.createElement("button"),this.btnConfirm.classList.add("btn-primary","btn-color-primary"),e.withConfirm!==!0&&this.btnConfirm.append(Z(e.withConfirm)),this.header.append(this.btnConfirm)),this.container.append(this.header),e.body&&(this.body=document.createElement("div"),this.body.classList.add("popup-body"),this.container.append(this.body)),e.scrollable){const i=this.scrollable=new Ie(this.body);if(this.attachScrollableListeners(),e.floatingHeader){this.attachScrollableListeners(this.header);const s=document.createElement("div");s.classList.add("popup-header-background"),this.header.prepend(s),this.header.classList.add("is-floating")}this.body||this.header.after(i.container)}e.footer&&(this.footer=document.createElement("div"),this.footer.classList.add("popup-footer"),(this.body||this.container).append(this.footer),e.withFooterConfirm&&this.footer.append(this.btnConfirm)),this.btnConfirmOnEnter=this.btnConfirm,this.setButtons(e.buttons),this.element.append(this.container),C.POPUPS.push(this)}setButtons(t){if(this.buttons=t,this.buttonsEl&&(this.buttonsEl.remove(),this.buttonsEl=void 0),!t?.length)return;const e=this.buttonsEl=document.createElement("div");e.classList.add("popup-buttons");const i=t.map(s=>{const l=document.createElement("button");if(l.className="popup-button btn"+(s.isDanger?" danger":" primary"),s.noRipple||me(l),s.text?l.append(s.text):s.langKey&&l.append(Z(s.langKey,s.langArgs)),s.iconLeft||s.iconRight){const r=V(s.iconLeft||s.iconRight,"popup-button-icon",s.iconLeft?"left":"right");l.classList.add("with-icon"),s.iconLeft?l.prepend(r):l.append(r)}return T(l,async r=>{let o=s.callback?.(r);if(o!==void 0&&o instanceof Promise){const c=ge([s.element],!0);try{o=await o}catch{o=!1}o===!1&&c()}o!==!1&&this.hide()},{listenerSetter:this.listenerSetter}),s.element=l});if(!this.btnConfirmOnEnter&&t.length===2){const s=t.find(l=>!l.isCancel);s&&(this.btnConfirmOnEnter=s.element)}t.length>=3&&e.classList.add("is-vertical-layout"),e.append(...i),this.container.append(e)}attachScrollableListeners(t){return this.scrollable.attachBorderListeners(t)}onContentUpdate(){this.scrollable?.onAdditionalScroll?.()}show(){this.navigationItem={type:"popup",onPop:()=>{if(this.isConfirmationNeededOnClose){const t=this.isConfirmationNeededOnClose();if(t)return Promise.resolve(t).then(()=>{this.destroy()}),!1}return this.destroy()}},D.pushItem(this.navigationItem),ke(),A.append(this.element),this.element.offsetWidth,this.element.classList.add("active"),this.onContentUpdate(),this.withoutOverlay||(B.isOverlayActive=!0,X.checkAnimations2(!0)),setTimeout(()=>{this.element.classList.contains("active")&&this.listenerSetter.add(document.body)("keydown",t=>{!this.btnConfirmOnEnter||this.btnConfirmOnEnter.disabled||C.POPUPS[C.POPUPS.length-1]!==this||(this.confirmShortcutIsSendShortcut?Me(t):t.key==="Enter")&&(Fe(this.btnConfirmOnEnter),Te(t))})},0)}hide(){this.destroyed||!this.navigationItem||D.backByItem(this.navigationItem)}forceHide(){return this.destroy()}destroy(){this.destroyed||(this.destroyed=!0,this.dispatchEvent("close"),this.element.classList.add("hiding"),this.element.classList.remove("active"),this.listenerSetter.removeAll(),this.middlewareHelper.destroy(),this.withoutOverlay||(B.isOverlayActive=!1),D.removeItem(this.navigationItem),this.navigationItem=void 0,Ne(C.POPUPS,this),re(),setTimeout(()=>{this.element.remove(),this.dispatchEvent("closeAfterTimeout"),this.cleanup(),this.scrollable?.destroy(),this.withoutOverlay||X.checkAnimations2(!1)},250))}appendSolid(t){const e=document.createElement("div");(this.scrollable||this.body).prepend(e);const i=Ve(t,e);this.addEventListener("closeAfterTimeout",i)}static reAppend(){this.POPUPS.forEach(t=>{const{element:e,container:i}=t,s=e.parentElement;s&&s!==A&&A!==i&&A.append(e)})}static getPopups(t){return this.POPUPS.filter(e=>e instanceof t)}static createPopup(t,...e){return new t(...e)}};C.POPUPS=[];let N=C;const Et=n=>(n.find(e=>e.isCancel)||n.push({langKey:"Cancel",isCancel:!0}),n);function ot(n,t){let e,i,s,l=0,r=0,o=0,c=0,f=0;const h=4,d={},y=50,b=200,x=200;n.complete?_():n.onload=_;function ae(){i.removeEventListener("mousedown",O),i.removeEventListener("touchstart",O),i.removeEventListener("wheel",q),document.removeEventListener("mouseup",E),document.removeEventListener("touchend",E),document.removeEventListener("mousemove",v),document.removeEventListener("touchmove",v),document.removeEventListener("keypress",G),e.remove(),i.remove(),s.remove()}function ce(){i.addEventListener("mousedown",O,!1),i.addEventListener("touchstart",O,!1),i.addEventListener("wheel",q,!1),document.addEventListener("keypress",G,!1)}function _(){n.classList.add("crop-blur"),n.draggable=!1,s=new Image,s.src=n.src,s.draggable=!1,s.classList.add("crop-overlay-image"),t||(t=document.createElement("canvas")),e=document.createElement("div"),e.classList.add("crop-component"),i=document.createElement("div"),i.classList.add("crop-overlay");const a=document.createElement("div");a.classList.add("crop-overlay-color"),e.appendChild(i),n.parentNode.appendChild(e),e.appendChild(s),e.appendChild(n),e.appendChild(a),i.appendChild(s),s.style.maxWidth=n.width+"px",f=n.naturalWidth/n.offsetWidth;const p=n.offsetWidth/2-b/2,m=n.offsetHeight/2-x/2;j(b,x),F(p,m),I(p,m),ce()}function j(a,u){o=a*f,c=u*f,i.style.width=a+"px",i.style.height=u+"px"}function F(a,u){r=u*f,l=a*f,s.style.top=-u+"px",s.style.left=-a+"px"}function I(a,u){i.style.top=u+"px",i.style.left=a+"px"}function de(a){d.container_width=i.offsetWidth,d.container_height=i.offsetHeight,d.container_left=i.offsetLeft,d.container_top=i.offsetTop,d.mouse_x=(a.clientX||a.pageX||a.touches&&a.touches[0].clientX)+window.scrollX,d.mouse_y=(a.clientY||a.pageY||a.touches&&a.touches[0].clientY)+window.scrollY}function M(a){a=a*Math.PI*2;const u=Math.floor(i.clientWidth+a),p=Math.floor(i.clientHeight+a),m=s.clientWidth,k=s.clientHeight;let g,L;if(u<y)return;if(u>m)return;g=i.offsetLeft-a/2,L=i.offsetTop-a/2;const he=g+u,ue=L+p;g<0&&(g=0),L<0&&(L=0),!(he>m)&&(ue>k||(j(u,u),F(g,L),I(g,L)))}function G(a){switch(a.preventDefault(),String.fromCharCode(a.charCode)){case"+":M(h);break;case"-":M(-h);break}}function q(a){a.preventDefault(),M(a.deltaY>0?1:-1)}function O(a){a.preventDefault(),a.stopPropagation(),de(a),document.addEventListener("mousemove",v),document.addEventListener("touchmove",v),document.addEventListener("mouseup",E),document.addEventListener("touchend",E)}function E(a){a.preventDefault(),document.removeEventListener("mouseup",E),document.removeEventListener("touchend",E),document.removeEventListener("mousemove",v),document.removeEventListener("touchmove",v)}function v(a){const u={x:0,y:0};a.preventDefault(),a.stopPropagation(),u.x=a.pageX||a.touches&&a.touches[0].pageX,u.y=a.pageY||a.touches&&a.touches[0].pageY;let p=u.x-(d.mouse_x-d.container_left),m=u.y-(d.mouse_y-d.container_top);const k=i.offsetWidth,g=i.offsetHeight;p<0?p=0:p>s.offsetWidth-k&&(p=s.offsetWidth-k),m<0?m=0:m>s.offsetHeight-g&&(m=s.offsetHeight-g),F(p,m),I(p,m)}function fe(){t.width=o,t.height=c,t.getContext("2d").drawImage(n,l,r,o,c,0,0,o,c)}return{crop:fe,removeHandlers:ae}}function lt(n,t){return new Promise(e=>{const i=new FileReader;i.addEventListener("loadend",s=>{e(s.target.result)}),i[t](n)})}function rt(n){return lt(n,"readAsDataURL")}class vt extends N{constructor(t={}){super("popup-avatar",{closable:!0}),this.image=new Image,this.cropper={crop:()=>{},removeHandlers:()=>{}},this.h6=document.createElement("h6"),se(this.h6,"Popup.Avatar.Title"),this.btnClose.classList.remove("btn-icon"),this.header.append(this.h6),this.cropContainer=document.createElement("div"),this.cropContainer.classList.add("crop"),this.cropContainer.append(this.image),t.isForum&&this.cropContainer.classList.add("is-forum"),this.input=document.createElement("input"),this.input.type="file",this.input.style.display="none",this.listenerSetter.add(this.input)("change",e=>{const i=e.target.files[0];i&&rt(i).then(s=>{this.image=new Image,this.cropContainer.append(this.image),this.image.src=s,this.image.onload=()=>{this.show(),this.cropper=ot(this.image,this.canvas),this.input.value=""}})},!1),this.btnConfirm=ne("btn-primary btn-color-primary btn-circle btn-crop btn-icon z-depth-1",{noRipple:!0,icon:"check"}),T(this.btnConfirm,()=>{this.cropper.crop(),this.hide(),this.canvas.toBlob(e=>{this.blob=e,this.darkenCanvas(),this.resolve()},"image/jpeg",1)},{listenerSetter:this.listenerSetter}),this.container.append(this.cropContainer,this.btnConfirm,this.input),this.addEventListener("closeAfterTimeout",()=>{this.cropper.removeHandlers(),this.image&&this.image.remove()})}resolve(){this.onCrop(()=>Ce.upload(this.blob))}open(t,e){this.canvas=t,this.onCrop=e,this.input.click()}darkenCanvas(){const t=this.canvas.getContext("2d");t.fillStyle="rgba(0, 0, 0, 0.3)",t.fillRect(0,0,this.canvas.width,this.canvas.height)}}export{De as B,bt as D,N as P,vt as a,Je as b,ze as c,et as d,Et as e,Be as f,oe as g,pt as h,$ as i,mt as j,Xe as k,Ve as l,Ct as m,Qe as n,Ze as o,rt as p,Me as q,ut as r,R as s,yt as t,gt as u};
//# sourceMappingURL=avatar-DPagvIVo.js.map
