(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[34625,10887],{111980:t=>{t.exports={"common-tooltip":"common-tooltip-EJBD96zX","common-tooltip--hidden":"common-tooltip--hidden-EJBD96zX","common-tooltip--horizontal":"common-tooltip--horizontal-EJBD96zX","common-tooltip--farther":"common-tooltip--farther-EJBD96zX","common-tooltip--vertical":"common-tooltip--vertical-EJBD96zX","common-tooltip-farther":"common-tooltip-farther-EJBD96zX","common-tooltip--direction_normal":"common-tooltip--direction_normal-EJBD96zX","common-tooltip__body":"common-tooltip__body-EJBD96zX","common-tooltip__button-container":"common-tooltip__button-container-EJBD96zX","common-tooltip__body--no-buttons":"common-tooltip__body--no-buttons-EJBD96zX","common-tooltip__button":"common-tooltip__button-EJBD96zX","common-tooltip--direction_reversed":"common-tooltip--direction_reversed-EJBD96zX","common-tooltip__ear-holder":"common-tooltip__ear-holder-EJBD96zX","common-tooltip__ear-holder--below":"common-tooltip__ear-holder--below-EJBD96zX","common-tooltip__ear-holder--above":"common-tooltip__ear-holder--above-EJBD96zX","common-tooltip__ear-holder--before":"common-tooltip__ear-holder--before-EJBD96zX","common-tooltip__ear-holder--after":"common-tooltip__ear-holder--after-EJBD96zX","common-tooltip__body--with-hotkey":"common-tooltip__body--with-hotkey-EJBD96zX","common-tooltip__body--width_wide":"common-tooltip__body--width_wide-EJBD96zX","common-tooltip__body--width_narrow":"common-tooltip__body--width_narrow-EJBD96zX","common-tooltip__body--no-padding":"common-tooltip__body--no-padding-EJBD96zX","common-tooltip__hotkey-block":"common-tooltip__hotkey-block-EJBD96zX","common-tooltip__hotkey-block--divider":"common-tooltip__hotkey-block--divider-EJBD96zX","common-tooltip__hotkey-text":"common-tooltip__hotkey-text-EJBD96zX","common-tooltip__hotkey-button":"common-tooltip__hotkey-button-EJBD96zX","common-tooltip__plus-sign":"common-tooltip__plus-sign-EJBD96zX"}},764250:(t,e,o)=>{"use strict";o.d(e,{ActionGroup:()=>i});class n{constructor(t,e){this._group=t;const{hotkey:o,handler:n,desc:i,isDisabled:r,element:s=null,isRepeatAccepted:a=!1}=e;this.hotkey=o,this.handler=n,this.desc=i,this.element=s,this.isRepeatAccepted=a,this.isDisabled=r?"function"==typeof r?r:()=>!0:()=>!1}destroy(){this._group&&(this._group.remove(this),this._group=null)}}class i{constructor(t,e){this._actions=new Map,this._manager=t,this.modal=!(!e||!e.modal),e&&(this.desc=e.desc),e&&e.isDisabled?"function"==typeof e.isDisabled?this.isDisabled=e.isDisabled:this.isDisabled=()=>!0:this.isDisabled=()=>!1,this._manager.registerGroup(this)}add(t){let e=this._actions.get(t.hotkey);e||(e=[],this._actions.set(t.hotkey,e));const o=new n(this,t);return e.push(o),o}remove(t){const e=this._actions.get(t.hotkey);if(!e)return;const o=e.findIndex((e=>e===t));o>=0&&(1===e.length?this._actions.delete(t.hotkey):e.splice(o,1))}handleHotkey(t,e){const o=this._actions.get(t);if(!o)return!1
;for(const n of o)if((!n.element||e.target&&n.element.contains(e.target))&&!n.isDisabled())return e.repeat&&!n.isRepeatAccepted||(n.handler(e),this._callMatchedHotkeyHandler(t)),e.preventDefault(),!0;return!1}promote(){this._manager.promoteGroup(this)}destroy(){for(const[,t]of this._actions)for(const e of t)e.destroy();this._actions.clear(),this._manager.unregisterGroup(this)}static setMatchedHotkeyHandler(t){i._matchedHotkeyHandler=t}_callMatchedHotkeyHandler(t){i._matchedHotkeyHandler&&i._matchedHotkeyHandler(t)}}},163586:(t,e,o)=>{"use strict";o.d(e,{ActionManager:()=>c});var n=o(91679),i=o(591800),r=o(607423);class s{constructor(t,e){this.modifiers=t,this.code=e}altOrOptionCode(){return"AltLeft"===this.code||"AltRight"===this.code}controlOrMetaCode(){return i.isMacKeyboard?"MetaLeft"===this.code||"MetaRight"===this.code||"OSLeft"===this.code||"OSRight"===this.code:"ControlLeft"===this.code||"ControlRight"===this.code}}class a extends n.WatchedValue{setValue(t,e){const o=this.value();(e||void 0===o||o.code!==t.code||o.modifiers!==t.modifiers)&&super.setValue(t)}}class c{constructor(){this._groups=[],this._pressedKeys=new n.WatchedValue(0),this._keyboardPressedKeysState=new a(new s(0)),this._keyDownListener=t=>{if(t.defaultPrevented)return;const e=(0,i.hashFromEvent)(t);if(this._pressedKeys.setValue(e),this._keyboardPressedKeysState.setValue(new s((0,i.modifiersFromEvent)(t),t.code)),!(0,r.isNativeUIInteraction)(e,t.target))for(let o=this._groups.length;o-- >0;){const n=this._groups[o];if(!n.isDisabled()){if(n.handleHotkey(e,t))return;if(n.modal)return}}},this._keyUpListener=t=>{const e=(0,i.hashFromEvent)(t);this._pressedKeys.setValue(e),this._keyboardPressedKeysState.setValue(new s((0,i.modifiersFromEvent)(t),""))},this._blurEvent=()=>{this._pressedKeys.setValue(0),this._keyboardPressedKeysState.setValue(new s(0,""))},this._mouseEvent=t=>{var e;const o=(0,i.modifiersFromEvent)(t),n=255&(null!==(e=this._pressedKeys.value())&&void 0!==e?e:0);this._pressedKeys.setValue(o|n)}}listen(t){t.addEventListener("keydown",this._keyDownListener),t.addEventListener("keyup",this._keyUpListener),t.addEventListener("blur",this._blurEvent),t.addEventListener("mousemove",this._mouseEvent)}unlisten(t){t.removeEventListener("keydown",this._keyDownListener),t.removeEventListener("keyup",this._keyUpListener),t.removeEventListener("blur",this._blurEvent),t.removeEventListener("mousemove",this._mouseEvent)}registerGroup(t){this._groups.push(t)}unregisterGroup(t){for(let e=this._groups.length;e--;)this._groups[e]===t&&this._groups.splice(e,1)}promoteGroup(t){let e=this._groups.length-1;for(let o=this._groups.length;o--;){if(this._groups[o]===t)return void(o!==e&&(this._groups.splice(o,1),this._groups.splice(e,0,t)));this._groups[o].modal&&(e=o-1)}}pressedKeys(){return this._pressedKeys.readonly()}keyboardPressedKeysState(){return this._keyboardPressedKeysState.readonly()}}},591800:(t,e,o)=>{"use strict";o.d(e,{Modifiers:()=>r,hashFromEvent:()=>a,hashShiftPlusEnter:()=>c,hotkeyHashToAriaKeyshortcuts:()=>p,humanReadableHash:()=>m,
humanReadableModifiers:()=>l,isMacKeyboard:()=>i,modifiersFromEvent:()=>s});var n=o(167175);const i=n.isMac||n.isIOS;var r;function s(t){let e=0;return t.shiftKey&&(e+=1024),t.altKey&&(e+=512),t.ctrlKey&&(e+=256),t.metaKey&&(e+=2048),e}function a(t){return s(t)|t.keyCode}!function(t){t[t.None=0]="None",t[t.Alt=512]="Alt",t[t.Shift=1024]="Shift",t[t.Mod=i?2048:256]="Mod",t[t.Control=256]="Control",t[t.Meta=2048]="Meta"}(r||(r={}));const c=1037;function l(t,e=!i){let o="";return 256&t&&(o+=h(i?"^":"Ctrl",e)),512&t&&(o+=h(i?"%":"Alt",e)),1024&t&&(o+=h(i?"�":"Shift",e)),2048&t&&(o+=h(i?"":"Win",e)),o}const u={9:"�",13:"�",27:"Esc",8:i?"+":"Backspace",32:"Space",35:"End",36:"Home",37:"�",38:"�",39:"�",40:"�",45:"Ins",46:"Del",188:",",191:"/"},d={9:"Tab",13:"Enter",27:"Esc",8:"Backspace",32:"Space",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Ins",46:"Del",188:",",191:"/"};for(let t=1;t<=16;t++)u[t+111]=`F${t}`,d[t+111]=`F${t}`;function m(t){let e=l(t);const o=255&t;return e+=o in u?u[o]:String.fromCharCode(o),e}function h(t,e){return`${t}${e?" + ":i?" ":""}`}function p(t){const e=[];256&t&&e.push("Ctrl"),512&t&&e.push("Alt"),1024&t&&e.push("Shift"),2048&t&&e.push("Meta");const o=255&t;return o in u?e.push(u[o]):e.push(String.fromCharCode(o)),e.join("+")}},607423:(t,e,o)=>{"use strict";o.d(e,{isNativeUIInteraction:()=>r,isTextEditingField:()=>i});var n=o(591800);function i(t){if("INPUT"===t.tagName){const e=t.type;return"text"===e||"email"===e||"number"===e||"password"===e||"search"===e||"tel"===e||"url"===e}return"TEXTAREA"===t.tagName||t.isContentEditable}function r(t,e){if(!e)return!1;const o=255&t;if(27===o||o>>>4==7)return!1;switch(t^o){case n.Modifiers.Alt:return(38===o||40===o)&&"SELECT"===e.tagName||i(e);case n.Modifiers.Alt+n.Modifiers.Shift:return i(e);case n.Modifiers.Mod:if(67===o||!n.isMacKeyboard&&45===o){const t=e.ownerDocument&&e.ownerDocument.getSelection();if(t&&!t.isCollapsed)return!0}return i(e);case n.Modifiers.Mod+n.Modifiers.Shift:return o>=33&&o<=40&&i(e);case n.Modifiers.Shift:case 0:return 9===o?!(!e.ownerDocument||e===e.ownerDocument.body||e===e.ownerDocument.documentElement):(!function(t){if("BUTTON"===t.tagName)return!0;if("INPUT"===t.tagName){const e=t.type;if("submit"===e||"button"===e||"reset"===e||"checkbox"===e||"radio"===e)return!0}return!1}(e)||13===o||32===o||9===o)&&("form"in e||e.isContentEditable)}return!1}},745269:(t,e,o)=>{"use strict";o.d(e,{CubicBezier:()=>r,color:()=>s,dur:()=>n,easingFunc:()=>i});const n=350,i={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t*t:(4-2*t)*t-1,easeInCubic:t=>t*t*t,easeOutCubic:t=>--t*t*t+1,easeInOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1- --t*t*t*t,easeInOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1+--t*t*t*t*t,easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t};class r{constructor(t,e,o,n){this._mX1=t,this._mY1=e,this._mX2=o,this._mY2=n}easingFunc(t){
return this._mX1===this._mY1&&this._mX2===this._mY2?t:this._calcBezier(this._getTForX(t))}_a(t,e){return 1-3*e+3*t}_b(t,e){return 3*e-6*t}_c(t){return 3*t}_calcBezier(t){return((this._a(this._mY1,this._mY2)*t+this._b(this._mY1,this._mY2))*t+this._c(this._mY1))*t}_getSlope(t){return 3*this._a(this._mX1,this._mX2)*t*t+2*this._b(this._mX1,this._mX2)*t+this._c(this._mX1)}_getTForX(t){let e=t;for(let o=0;o<4;++o){const o=this._getSlope(e);if(0===o)return e;e-=(this._calcBezier(e)-t)/o}return e}}const s={black70:"#4A4A4A",black80:"#535353"}},499994:(t,e,o)=>{"use strict";o.d(e,{getTooltipData:()=>i,setTooltipData:()=>r});const n=new WeakMap;function i(t,e){const o=n.get(t);return o instanceof Function?o(e):o&&o[e]}function r(t,e,o){if(o instanceof Function)return void n.set(t,o);const i=n.get(t),r=void 0===i||i instanceof Function?{}:i;r[e]=o,n.set(t,r)}},779527:(t,e,o)=>{"use strict";o.d(e,{getDataFromTarget:()=>p,getTooltip:()=>f,hideTooltip:()=>v,setStyle:()=>g,showTooltip:()=>y,updateTooltipTextFromTarget:()=>h});var n=o(650151),i=o(571690),r=o(31341),s=(o(586463),o(777466)),a=o(678515),c=o(638456),l=o(529111),u=o(499994),d=o(604286),m=o(111980);function h(t){const e=t.hasAttribute("data-tooltip")?t.getAttribute("data-tooltip"):t.getAttribute("title");return e&&((0,u.setTooltipData)(t,"text",e),t.removeAttribute("title")),(0,u.getTooltipData)(t,"text")||""}function p(t){const e=h(t),o=t.getBoundingClientRect(),n={h:o.height,w:o.width,x:o.left,y:o.top},i=t.getAttribute("data-color-theme")||"",r=t.classList.contains("common-tooltip-html"),s=parseInt(t.getAttribute("data-tooltip-delay")||""),a=parseInt(t.getAttribute("data-tooltip-debounce")||"");let c={type:"none"};return e&&(c={type:r?"html":"text",data:e}),{above:t.classList.contains("common-tooltip-above"),below:t.classList.contains("common-tooltip-below"),otl:t.classList.contains("common-tooltip-otl"),otr:t.classList.contains("common-tooltip-otr"),vertical:t.classList.contains("common-tooltip-vertical"),hotkey:t.getAttribute("data-tooltip-hotkey"),narrow:t.classList.contains("common-tooltip-narrow"),wide:t.classList.contains("common-tooltip-wide"),colorTheme:i,tooltipDelay:s,tooltipDebounce:a,rect:n,content:c,target:t}}function f(t){const e=(0,n.ensureNotNull)(k).cloneNode(!0),o=S(e),{content:i}=t;switch(i.type){case"element":o.innerHTML="",o.appendChild(i.data);break;case"html":o.innerHTML=i.data;break;case"text":if(t.hotkey){const t=(0,n.ensureNotNull)(L).cloneNode(!0);t.innerText=i.data,o.appendChild(t)}else o.innerText=i.data}if(t.hotkey){const e="none"!==i.type,r=(0,n.ensureNotNull)(T).cloneNode(!0),s=(0,d.hotKeyDeserialize)(t.hotkey),a=s.keys.map((t=>`<span class="${m["common-tooltip__hotkey-button"]}">${t}</span>`));r.innerHTML=function(t,e){const o=/{\d}|{hotkey_\d}/gi;return t.replace(o,(t=>{const o=Number(t.match(/\d/));return e[o]}))}(s.text,a).replace(/\s\+\s/g,`<span class="${m["common-tooltip__plus-sign"]}">+</span>`),o.classList.add(m["common-tooltip__body--with-hotkey"]),e&&r.classList.add(m["common-tooltip__hotkey-block--divider"]),o.appendChild(r)}
return e.addEventListener("contextmenu",s.preventDefault),e}function g(t,e){const o=e.rect;if(!o)return;(0,l.setTooltipColorTheme)(t,e.colorTheme||"default"),e.addClass&&t.classList.add(e.addClass);const n=S(t),i=t.querySelector(`.${m["common-tooltip__button-container"]}`);n.classList.toggle(m["common-tooltip__body--width_wide"],Boolean(e.wide)),n.classList.toggle(m["common-tooltip__body--no-padding"],Boolean(e.noPadding)),n.classList.toggle(m["common-tooltip__body--width_narrow"],Boolean(e.narrow)),n.classList.toggle(m["common-tooltip__body--no-buttons"],!0),n.style.left=_(0),n.style.width=_(n.clientWidth+(Boolean(e.noPadding)?0:2));const s=document.body.clientWidth,u=c.CheckMobile.iOS()||c.CheckMobile.Android()||(0,c.supportTouch)()&&(0,c.isMac)()?window.innerHeight:document.body.clientHeight,d=e.vertical,h=e.extendMargin||d&&o.w<20||!d&&o.h<20;t.classList.toggle(m["common-tooltip--farther"],h),t.classList.toggle(m["common-tooltip--vertical"],d),t.classList.toggle(m["common-tooltip--horizontal"],!d);const p=function(t){return t.querySelector(`.${m["common-tooltip__ear-holder"]}`)}(t),f=t.offsetHeight;if(d){const c=10,l=u-10,d=12,h=c+d,g=l-d,y=(0,a.clamp)(o.y+o.h/2,h,g)-f/2,v=y+f;t.style.left=_(o.x+o.w),t.style.top=_(y),y<c?n.style.top=i.style.top=_(c-y):v>l&&(n.style.top=i.style.top=_(l-v));const{right:b}=(t.querySelector(":last-child")||n).getBoundingClientRect(),w=b+10>s;t.classList.toggle(m["common-tooltip--direction_reversed"],w),t.classList.toggle(m["common-tooltip--direction_normal"],!w);let E=w?"after":"before";(0,r.isRtl)()?(E=e.otr?"after":E,E=e.otl?"before":E):(E=e.otr?"before":E,E=e.otl?"after":E),p.classList.toggle(m["common-tooltip__ear-holder--before"],"before"===E),p.classList.toggle(m["common-tooltip__ear-holder--after"],"after"===E),"after"===E&&(t.style.left="auto",t.style.right=_(s-o.x))}else{const r=o.x-(n.offsetWidth-o.w)/2,a=s-t.offsetWidth-20<=0?(s-t.offsetWidth)/2:10,c=s-a-t.offsetWidth,l=Math.max(a,Math.min(r,c));t.style.left=_(l);const d=c<r;t.classList.toggle(m["common-tooltip--direction_reversed"],d),t.classList.toggle(m["common-tooltip--direction_normal"],!d);const h=function(t,e,o,n){if(t.above)return D(e,n)?"above":"below";if(t.below)return function(t,e,o){return o.y+o.h+e+10<t}(e,o,n)?"below":"above";return D(o,n)?"above":"below"}(e,u,f,o);"above"===h?t.style.bottom=_(u-o.y):t.style.top=_(o.y+o.h),p.classList.add("above"===h?m["common-tooltip__ear-holder--above"]:m["common-tooltip__ear-holder--below"]);const{left:g}=n.getBoundingClientRect();let y=Math.trunc(o.x+o.w/2-(g+n.clientWidth/2));t.style.left=_(l+y),t.style.width=_(n.clientWidth+i.clientWidth),y=d?Math.max(0,y):Math.min(0,y),i.style.left=_(-y),n.style.left=_(-y)}}function y(t){t.classList.toggle(m["common-tooltip--hidden"],!1)}function v(t){t.classList.toggle(m["common-tooltip--hidden"],!0)}function _(t){return`${Math.floor(t)}px`}
const b=`\n\t<div id="common-tooltip-wrapper" class="${m["common-tooltip"]}">\n\t\t<div class="${m["common-tooltip__ear-holder"]}" >\n\t\t\t<div class="${m["common-tooltip__body"]} js-tooltip-body"></div>\n\t\t</div>\n\t\t<div class="${m["common-tooltip__button-container"]}"></div>\n\t</div>\n`,w=`\n\t<div class="${m["common-tooltip__hotkey-block"]}"></div>\n`,E=`\n\t<div class="${m["common-tooltip__hotkey-text"]}"></div>\n`,k=(0,i.parseHtmlElement)(b),T=(0,i.parseHtmlElement)(w),L=(0,i.parseHtmlElement)(E);function S(t){return t.querySelector(`.${m["common-tooltip__body"]}`)}function D(t,e){return 10+t<e.y}},604286:(t,e,o)=>{"use strict";o.d(e,{hotKeyDeserialize:()=>r,hotKeySerialize:()=>i});var n=o(919476);function i(t){return(0,n.htmlEscape)(JSON.stringify(t))}function r(t){return JSON.parse((0,n.decodeHTMLEntities)(t))}},630112:(t,e,o)=>{"use strict";o.d(e,{empty:()=>s,setTooltip:()=>a});const n="tooltip-root-element";let i;function r(){const t=document.getElementById(n);t?i=t:(i=document.createElement("div"),i.id=n,document.body.appendChild(i))}function s(){i&&(i.innerHTML="")}function a(t){s(),i&&i.appendChild(t)}"interactive"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)},112539:(t,e,o)=>{"use strict";o.d(e,{clearSchedule:()=>s,scheduleHide:()=>c,scheduleRemove:()=>a,scheduleRender:()=>l});let n=0,i=0,r=0;function s(){clearTimeout(n),clearTimeout(i),clearTimeout(r)}function a(t,e){r=setTimeout(t,e)}function c(t,e){i=setTimeout(t,e)}function l(t,e){n=setTimeout(t,e)}},529111:(t,e,o)=>{"use strict";o.d(e,{setTooltipColorTheme:()=>r});const n={default:"",white:"theme-white",chart:"theme-chart","round-shadow":"theme-round-shadow"},i=Object.keys(n);function r(t,e){const o=i.includes(e)?n[e]:"";t.classList.remove(...i.map((t=>n[t])).filter((t=>!!t))),o&&!t.classList.contains(o)&&t.classList.add(o)}},673747:(t,e,o)=>{"use strict";o.r(e),o.d(e,{hide:()=>b,show:()=>p,showOnElement:()=>h,tempForceHide:()=>_,tooltipClickHandler:()=>g,updateTooltipText:()=>f});var n=o(778785),i=o(650151),r=o(799786),s=o(112539),a=o(630112),c=o(779527);let l=!1,u=null,d=null;n.mobiletouch||document.addEventListener("mouseover",(function(t){var e;if(null===(e=t.sourceCapabilities)||void 0===e?void 0:e.firesTouchEvents)return;const o=t.target,n=t.currentTarget,i=function(t,e,o){const n=[];for(;t&&t!==e;)t.classList&&t.classList.contains(o)&&n.push(t),t=t.parentElement||E(t.parentNode);return n}(o,n,"apply-common-tooltip"),s=()=>{d&&(d.destroy(),d=null)};for(const e of i){if("buttons"in t){if(1&t.buttons)continue}else if(1===t.which)continue;const o=()=>h(e);if(o()){const t=t=>n(null,!0),n=(i,r=!1)=>{e.removeEventListener("common-tooltip-update",o),e.removeEventListener("mouseleave",n),e.removeEventListener("mousedown",n),document.removeEventListener("scroll",t,{capture:!0}),s(),b(r)};e.addEventListener("common-tooltip-update",o),e.addEventListener("mouseleave",n),e.addEventListener("mousedown",n),document.addEventListener("scroll",t,{capture:!0}),null===d&&(d=(0,r.createGroup)({desc:"Tooltip"}),d.add({desc:"Hide",
hotkey:27,handler:n}));break}}}),!0);const m=new MutationObserver((()=>{if(u&&u.options.target){let t;t="isConnected"in u.options.target?u.options.target.isConnected:document.body.contains(u.options.target),t||b()}})),h=(t,e={})=>{const{content:o,...n}=k(e),i=c.getDataFromTarget(t),r=Object.assign(i,n);return"none"!==o.type&&(r.content=o),!("none"===r.content.type&&!r.hotkey)&&(r.target=t,p(r),!0)},p=t=>{const e=k(t),o=c.getTooltip(e);if(u={options:e,element:o},(0,a.setTooltip)(o),(0,s.clearSchedule)(),!l)return c.hideTooltip(o),void(0,s.scheduleRender)((()=>w(o)),function(t){return"number"!=typeof t.tooltipDelay||isNaN(t.tooltipDelay)?500:t.tooltipDelay}(e));const{tooltipDebounce:n}=t;"number"!=typeof n||isNaN(n)?w(o):(0,s.scheduleRender)((()=>w(o)),n)},f=t=>c.updateTooltipTextFromTarget(t);function g(t){var e;n.mobiletouch&&(h(t.currentTarget,{tooltipDelay:0}),document.addEventListener("scroll",y),document.addEventListener("touchstart",y),window.addEventListener("orientationchange",y),null===(e=window.screen.orientation)||void 0===e||e.addEventListener("change",y))}function y(){var t;document.removeEventListener("scroll",y),document.removeEventListener("touchstart",y),window.removeEventListener("orientationchange",y),null===(t=window.screen.orientation)||void 0===t||t.removeEventListener("change",y),b()}function v(){(0,a.empty)(),l=!1,u=null}const _=()=>{if((0,s.clearSchedule)(),(0,i.ensureNotNull)(m).disconnect(),!u||!l)return;const{element:t}=u;c.hideTooltip(t),v()},b=(t,e)=>{if((0,s.clearSchedule)(),(0,i.ensureNotNull)(m).disconnect(),!u)return;if(!t&&!l)return;const{element:o,options:n}=u,r=()=>{o.removeEventListener("mouseleave",r),c.hideTooltip(o),t?v():(0,s.scheduleRemove)((()=>{v()}),250),null==e||e()};n.tooltipHideDelay?(0,s.scheduleHide)((()=>{o.querySelector(":hover")?o.addEventListener("mouseleave",r):r()}),n.tooltipHideDelay):r()};function w(t){const{options:e}=(0,i.ensureNotNull)(u);if(c.setStyle(t,e),c.showTooltip(t),(0,i.ensureNotNull)(m).observe(document,{childList:!0,subtree:!0}),l=!0,e.forceHideOnMove){const t=()=>{document.removeEventListener("mousemove",t),document.removeEventListener("touchmove",t),b()};document.addEventListener("mousemove",t),document.addEventListener("touchmove",t)}}function E(t){return t&&(t.nodeType===Node.ELEMENT_NODE?t:null)}function k(t){if(function(t){return"content"in t}(t))return t;const{inner:e,html:o,text:n,...i}=t;let r={type:"none"};return e&&(r={type:"element",data:e}),n&&(r={type:o?"html":"text",data:n}),{content:r,...i}}},799786:(t,e,o)=>{"use strict";o.r(e),o.d(e,{Modifiers:()=>r.Modifiers,createGroup:()=>n.createGroup,keyboardPressedKeysState:()=>n.keyboardPressedKeysState,pressedKeys:()=>n.pressedKeys,registerWindow:()=>n.registerWindow,unregisterWindow:()=>n.unregisterWindow});var n=o(129592),i=o(764250),r=o(591800),s=o(345848);(0,n.registerWindow)(window),i.ActionGroup.setMatchedHotkeyHandler((t=>{(0,s.trackEvent)("Keyboard Shortcuts",(0,r.humanReadableHash)(t))}))},192784:(t,e,o)=>{"use strict";o.r(e),o.d(e,{flushDelegate:()=>n})
;const n=new(o(707957).Delegate)},62802:(t,e,o)=>{"use strict";t=o.nmd(t),o(638456);var n=o(120780).fetch,i=o(868073).regExpEscape,r=o(226722).TVXWindowEvents,s=o(49437).TVLocalStorage,a=o(707957).Delegate,c=o(244842),l=o(125226).isFeatureEnabled,{flushDelegate:u}=o(192784),d=o(201089).getLogger("Lib.TVSettings"),m=["s.tradingview.com","betacdn.tradingview.com"],h=(c.enabled("use_localstorage_for_settings"),window.TVSettings=function(){var t=!1,e=null,o=!1;function p(){return!(e||window.is_authenticated)}try{t=!TradingView.onWidget()&&parent&&parent!==window&&!!parent.IS_DEMO_PAGE}catch(t){}if(t){var f={"widgetbar.layout-settings":{widgets:{},settings:{minimized:!0}},notShowMainWizard:!0},g=function(t,e,o){var n=f[t];return null==n?e:n},y=function(){};return{loaded:!1,loadedModel:!1,getValue:g,getJSON:g,getBool:g,getFloat:g,getInt:g,setValue:y,setJSON:y,remove:y,keys:function(){return Object.keys(f)},keysMask:function(){return[]},sync:y,onSync:{subscribe:function(){}}}}var v=12e4;"local"===window.environment&&(v=5e3);var _,b,w,E=TradingView.onWidget()?"tradingview-widget":"tradingview",k=E+".",T={},L=[],S=[/^widgetbar\.widget\.watchlist.+/,/.+quicks$/,/^widgetbar\.layout-settings$/,/^ChartSideToolbarWidget\.visible$/,/^onwidget\.watchlist$/,/^chart\.favoriteDrawings$/,/^chart\.favoriteDrawingsPosition$/,/^chart\.favoriteLibraryIndicators$/,/^loadChartDialog.favorites$/,/^ChartFavoriteDrawingToolbarWidget\.visible/,/^trading\.chart\.proterty$/,/^trading_floating_toolbar\.position$/,/^trading\.orderWidgetMode\./,/^symbolWatermark$/,/^pinereference\.size$/,/^pinereference\.position$/,/^hint\.+/,/^ChartDrawingToolbarWidget\.visible/];function D(t){return k+t}function N(t){return t.substring(k.length)}function M(t,e){var o=T[t];return null==o?e:o}function C(t,e,o){o=o||{};var n=""+e;return T[t]!==n&&(T[t]=n,B(t)),o.forceFlush&&!b&&(b=setTimeout((function(){b=void 0,A()}),10)),h}function x(t,e){return e=e||{},null!=T[t]&&(delete T[t],B(t)),e.forceFlush&&A(),h}function O(){_=void 0,L.length&&A()}function B(t){if(e)null==T[t]?e.removeValue(t):e.setValue(t,T[t]);else if(p())try{null==T[t]?s.removeItem(D(t)):s.setItem(D(t),T[t])}catch(t){}else L.push(t),_||(_=setTimeout(O,v));r.emit("settings",JSON.stringify({key:t,value:T[t]}))}function A(t){if(!o&&!w)if(l("disable_save_settings"))d.logWarn("Settings flashing has been skipped because of disable_save_settings featuretoggle");else if(!c.enabled("widget")&&!p()&&0!==L.length){var e=L;L=[];for(var i={},r=e.length;r--;){var s=e[r],a=T[s];void 0===a&&(a=null),i[s]=a}var u=new FormData;u.append("delta",JSON.stringify(i)),t&&navigator.sendBeacon?navigator.sendBeacon("/savesettings/",u):n("/savesettings/",{method:"POST",credentials:"include",body:u}).then((function(o){if(o.ok||(L=L.concat(e)),[429,503].includes(o.status)){var n=1e3*+o.headers.get("retry-after")||3e5;w=setTimeout((()=>{w=void 0,A(t)}),n)}})).catch((function(){L=L.concat(e)}))}}function H(){return Object.keys(T)}function z(t){for(var e=0;e<S.length;++e)if(S[e].exec(t))return!0;return!1}function J(t){
return t.substring(0,k.length)===k}function P(t){T={};const e=0===Object.keys(t).length;e||function(t){Object.keys(t).forEach((function(e){T[e]=t[e]+""}))}(t),function(t){for(var e=s.length;e--;){var o=s.key(e);o&&J(o)&&(t&&C(N(o),s.getItem(o)),s.removeItem(o))}}(e)}r.on("settings",(function(t){var e=JSON.parse(t);null==e.value?delete T[e.key]:T[e.key]=e.value}));var X=new a;return document.addEventListener("visibilitychange",(function(){"hidden"!==document.visibilityState&&!0!==document.hidden||A()})),window.addEventListener("pagehide",(function(){A(!0)})),window.addEventListener("beforeunload",(function(){A(!0)})),u.subscribe(null,(()=>{A()})),{loaded:!1,loadedModel:!1,getValue:M,getJSON:function(t,e){var o=M(t,void 0);if(null==o)return e;try{return JSON.parse(o)}catch(o){return x(t),e}},getBool:function(t,e){var o=M(t);return null==o?e:!(!o||"false"===o||0==+o)},getFloat:function(t,e,o){var n=M(t,void 0);if(null==n)return e;var i=parseFloat(n);if(!isFinite(i))throw new TypeError('"'+n+'" is not float (key: "'+t+'")');return i},getInt:function(t,e,o){var n=M(t,void 0);if(null==n)return e;var i=parseInt(n,10);if(!isFinite(i))throw new TypeError('"'+n+'" is not int (key: "'+t+'")');return i},setValue:C,setJSON:function(t,e,o){return C(t,JSON.stringify(e),o),h},remove:x,keys:H,keysMask:function(t,e){for(var o=H(),n=[],r=(t=new RegExp("^"+i(t).replace(/\\\*\\\*/gi,".+").replace(/\\\*/gi,"[^.]+")+"$","gi"),o.length-1);r>=0;r--)t.test(o[r])&&n.push(o[r]),t.lastIndex=0;return n},sync:function(t){null!==t?(e?P(e.initialSettings||{}):p()?(function(){if(TradingView.onWidget()&&m.includes(window.location.host))for(var t="tradingview.",e=s.length;e--;){var o=s.key(e);if(0===o.indexOf(t)){var n=o.replace(t,E+".");s.setItem(n,s.getItem(o)),s.removeItem(o)}}}(),function(){T={};for(var t=!c.enabled("save_chart_properties_to_local_storage"),e=s.length;e--;){var o=s.key(e);if(o&&J(o)){var n=o.substring(k.length);t&&!z(n)||(T[n]=s.getItem(o))}}}()):P(t||{}),X.fire()):o=!0},onSync:X,setSettingsAdapter:function(t){e=t}}}());setTimeout((function(){o.e(30362).then(o.bind(o,276141)).then((t=>{t.clearOldSettings()}))}),3e4),t&&t.exports&&(t.exports=h)},776734:(t,e,o)=>{"use strict";async function n(){if(!window.user||window.user.do_not_track)return null;{const t=(await Promise.all([o.e(70056),o.e(24081)]).then(o.bind(o,823623))).getTrackerInstance();return t||null}}o.d(e,{getTracker:()=>n})},86746:(t,e,o)=>{"use strict";o.r(e),o.d(e,{StdTheme:()=>a.StdTheme,getStdChartTheme:()=>p,getStdThemeNames:()=>h,getThemeNameIfStdTheme:()=>y,isStdTheme:()=>g,overrideStdTheme:()=>d,translateThemeName:()=>f});var n=o(444372),i=o(724377),r=o(979706),s=o(746518),a=o(61499);let c=r,l=s;function u(t,e){const o={...t};for(const n in e)"object"!=typeof t[n]||null===t[n]||Array.isArray(t[n])?void 0!==e[n]&&(o[n]=e[n]):o[n]=u(t[n],e[n]);return o}function d(t,e){switch(t){case a.StdTheme.Light:c=u(c,e);break;case a.StdTheme.Dark:l=u(l,e)}}function m(){return{[a.StdTheme.Light]:JSON.parse(JSON.stringify(c)),[a.StdTheme.Dark]:JSON.parse(JSON.stringify(l))}}
function h(){return[a.StdTheme.Light,a.StdTheme.Dark]}function p(t){return m()[t]}function f(t){return{[a.StdTheme.Light]:n.t(null,{context:"colorThemeName"},o(669841)),[a.StdTheme.Dark]:n.t(null,{context:"colorThemeName"},o(14642))}[t]||t}function g(t){const e=m();return h().some((o=>v(e[o],t)))}function y(t){const e=m(),o=h();for(const n of o)if(v(e[n],t))return n;return null}function v(t,e){let o=t.content===e.content;return function(t={},e){try{_(t,[],e)}catch(t){return}}(t.content,((t,n)=>{const r=function(t,e={}){let o=e;for(let e=0;e<t.length;e++){if(!o||"object"!=typeof o)return;o=o[t[e]]}if("string"==typeof o||"number"==typeof o)return o;return}(t,e.content);return o=function(t,e){if(t===e)return!0;if("string"!=typeof t||"string"!=typeof e)return!1;try{return function(t,e){return Math.hypot(t[3]*t[0]-e[3]*e[0],t[3]*t[1]-e[3]*e[1],t[3]*t[2]-e[3]*e[2],255*t[3]-255*e[3])<48}((0,i.parseRgba)(t),(0,i.parseRgba)(e))}catch(t){}return!1}(n,r),!o})),o}function _(t,e,o){for(const n in t)if(t.hasOwnProperty(n)){const i=e.concat(n);if("object"==typeof t[n])_(t[n],i,o);else if(o(i,t[n]))throw new Error("exit")}}},345848:(t,e,o)=>{"use strict";o.d(e,{trackEvent:()=>c});var n=o(251954),i=o(244842);const r=(0,o(201089).getLogger)("Common.TrackEvent"),s=[/Study_(Drawing)_(.*)/,/(Study)_(.*)@tv-basicstudies/,/(Study)_(.*)/,/(Chart Style) (.*)/];let a=!1;const c=(t,e,o)=>{if(a)return;if(i.enabled("charting_library_base"))return void((t,e,o)=>{e=e||t||o||"";let i="";for(let t=0;t<s.length;t++){const o=e.match(s[t]);if(o&&3===o.length){e=o[1],i=o[2];break}}(0,n.emit)(e.toLowerCase().replace(" ","_"),{category:t,label:o,value:i})})(t,e,o);let c=(t?t+":":"")+e;o&&(c+=" "+o),r.logNormal(c),i.enabled("widget")||!window._UNIT_TESTS&&window.gtag&&window.gtag("event",e,{event_category:t,event_label:o})};"undefined"!=typeof window&&(window.TradingView=window.TradingView||{},window.TradingView.trackEvent=c)},152633:(t,e,o)=>{"use strict";o.d(e,{createPrimitiveProperty:()=>i});var n=o(354950);function i(t){return new n.Property(t)}},868073:(t,e,o)=>{"use strict";function n(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}o.d(e,{regExpEscape:()=>n})},81979:(t,e,o)=>{"use strict";o.r(e),o.d(e,{CubicBezier:()=>n.CubicBezier,color:()=>n.color,dur:()=>n.dur,easingFunc:()=>n.easingFunc});var n=o(745269)},403009:(t,e,o)=>{"use strict";var n;function i(t){return!(!t||!Object.keys(t).length)}function r(t){return!!t.is_trial}function s(t){return!!(null==t?void 0:t.pro_plan)}function a(t){return s(t)&&!r(t)}function c(t){return t.type===n.ProPlan}function l(t){return t.type===n.Exchange}function u(t){return t.type===n.Coins}function d(t){var e,o,n;return t?l(t)||u(t)?null!==(e=t.text_id)&&void 0!==e?e:"":null!==(n=null!==(o=t.discount_text_id)&&void 0!==o?o:t.text_id)&&void 0!==n?n:"":""}o.d(e,{ProductType:()=>n,getProductId:()=>d,isCoinsProduct:()=>u,isExchange:()=>l,isPaidPro:()=>a,isPlan:()=>c,isPro:()=>s,isProductDefined:()=>i,isTrial:()=>r}),function(t){t[t.ProPlan=1]="ProPlan",t[t.NewsFeed=3]="NewsFeed",t[t.Exchange=4]="Exchange",
t[t.Connection=6]="Connection",t[t.Coins=8]="Coins"}(n||(n={}))},957879:(t,e,o)=>{const n=o(823127);t.exports=n,n(document).ajaxSend(((t,e,o)=>{o.crossDomain&&!o.forceLanguageHeader||(window.locale?e.setRequestHeader("X-Language",window.locale):console.warn("window.locale is not defined"))}))},266325:(t,e,o)=>{"use strict";function n(t){let e=null;return(o,...n)=>(null==e||e.abort(),e=new AbortController,null==o||o.addEventListener("error",(()=>null==e?void 0:e.abort()),{once:!0}),t(e.signal,...n))}function i(t){if(!c(t))throw t}function r(t){if(c(t))throw t}function s(t){return(null==t?void 0:t.aborted)?Promise.reject(a()):new Promise(((e,o)=>{null==t||t.addEventListener("abort",(()=>o(a())),{once:!0})}))}function a(){return new DOMException("Aborted","AbortError")}function c(t){return t instanceof Error&&"AbortError"===t.name}function l(t,e){return Promise.race([s(t),e])}async function u(t,e){let o;try{await l(t,new Promise((t=>{o=setTimeout(t,e)})))}finally{clearTimeout(o)}}o.d(e,{createAbortError:()=>a,delay:()=>u,isAbortError:()=>c,respectAbort:()=>l,respectLatest:()=>n,rethrowAbortError:()=>r,skipAbortError:()=>i})},777466:(t,e,o)=>{"use strict";function n(t){t.preventDefault()}o.d(e,{preventDefault:()=>n,preventDefaultForContextMenu:()=>r});const i=["input:not([type])",'input[type="text"]','input[type="email"]','input[type="password"]','input[type="search"]','input[type="number"]','input[type="url"]',"textarea","a[href]",'*[contenteditable="true"]',"[data-allow-context-menu]"];function r(t){const e=t.target;e&&!e.closest(i.join(", "))&&t.preventDefault()}},490778:(t,e,o)=>{"use strict";t.exports=o.p+"desktop.48bb0acc31aeb2422416.webp"},901896:(t,e,o)=>{"use strict";t.exports=o.p+"tablet.5ed26c209de7e1b5845d.webp"}}]);