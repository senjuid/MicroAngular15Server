(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5168],{5062:(_,g,o)=>{o.d(g,{i:()=>l});const l=n=>n&&""!==n.dir?"rtl"===n.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},7864:(_,g,o)=>{o.d(g,{a:()=>h,b:()=>p,c:()=>d,d:()=>u,h:()=>m});const l={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){var t;const e=window;return!!this.getEngine()&&("web"!==(null===(t=e.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:a})},notification(t){const e=this.getEngine();if(!e)return;const a=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},n=()=>l.available(),d=()=>{n()&&l.selection()},h=()=>{n()&&l.selectionStart()},p=()=>{n()&&l.selectionChanged()},m=()=>{n()&&l.selectionEnd()},u=t=>{n()&&l.impact(t)}},109:(_,g,o)=>{o.d(g,{a:()=>l,b:()=>f,c:()=>u,d:()=>b,e:()=>w,f:()=>m,g:()=>i,h:()=>d,i:()=>n,j:()=>k,k:()=>M,l:()=>t,m:()=>a,n:()=>s,o:()=>e,p:()=>p,q:()=>h,r:()=>x,s:()=>y,t:()=>v,u:()=>r,v:()=>c});const l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5168:(_,g,o)=>{o.r(g),o.d(g,{ion_toggle:()=>v});var l=o(5861),n=o(1308),d=o(109),h=o(5179),p=o(5730),m=o(7864),u=o(5062),t=o(2854);const v=class{constructor(i){(0,n.r)(this,i),this.ionChange=(0,n.e)(this,"ionChange",7),this.ionFocus=(0,n.e)(this,"ionFocus",7),this.ionBlur=(0,n.e)(this,"ionBlur",7),this.ionStyle=(0,n.e)(this,"ionStyle",7),this.inputId="ion-tg-"+b++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.enableOnOffLabels=h.c.get("toggleOnOffLabels"),this.onClick=s=>{s.preventDefault(),this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.getSwitchLabelIcon=(s,r)=>"md"===s?r?d.f:d.r:r?d.r:d.g}checkedChanged(i){this.ionChange.emit({checked:i,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}connectedCallback(){var i=this;return(0,l.Z)(function*(){i.gesture=(yield Promise.resolve().then(o.bind(o,1898))).createGesture({el:i.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>i.onStart(),onMove:s=>i.onMove(s),onEnd:s=>i.onEnd(s)}),i.disabledChanged()})()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(i){f((0,u.i)(this.el),this.checked,i.deltaX,-10)&&(this.checked=!this.checked,(0,m.c)())}onEnd(i){this.activated=!1,this.lastDrag=Date.now(),i.event.preventDefault(),i.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.focusEl&&this.focusEl.focus()}renderOnOffSwitchLabels(i,s){const r=this.getSwitchLabelIcon(i,s);return(0,n.h)("ion-icon",{class:{"toggle-switch-icon":!0,"toggle-switch-icon-checked":s},icon:r,"aria-hidden":"true"})}render(){const{activated:i,color:s,checked:r,disabled:c,el:x,inputId:k,name:M,enableOnOffLabels:y}=this,w=(0,h.b)(this),{label:C,labelId:E,labelText:S}=(0,p.d)(x,k),B=this.getValue(),O=(0,u.i)(x)?"rtl":"ltr";return(0,p.e)(!0,x,M,r?B:"",c),(0,n.h)(n.H,{onClick:this.onClick,"aria-labelledby":C?E:null,"aria-checked":`${r}`,"aria-hidden":c?"true":null,role:"switch",class:(0,t.c)(s,{[w]:!0,"in-item":(0,t.h)("ion-item",x),"toggle-activated":i,"toggle-checked":r,"toggle-disabled":c,interactive:!0,[`toggle-${O}`]:!0})},(0,n.h)("div",{class:"toggle-icon",part:"track"},y&&"ios"===w&&[this.renderOnOffSwitchLabels(w,!0),this.renderOnOffSwitchLabels(w,!1)],(0,n.h)("div",{class:"toggle-icon-wrapper"},(0,n.h)("div",{class:"toggle-inner",part:"handle"},y&&"md"===w&&this.renderOnOffSwitchLabels(w,r)))),(0,n.h)("label",{htmlFor:k},S),(0,n.h)("input",{type:"checkbox",role:"switch","aria-checked":`${r}`,disabled:c,id:k,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:L=>this.focusEl=L}))}get el(){return(0,n.i)(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}},f=(i,s,r,c)=>s?!i&&c>r||i&&-c<r:!i&&-c<r||i&&c>r;let b=0;v.style={ios:":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;width:51px;height:32px;contain:strict;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 300ms, color 300ms;transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}",md:":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{-webkit-transition:background-color 160ms;transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{padding-left:1px;padding-right:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toggle-inner .toggle-switch-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px}}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"}},2854:(_,g,o)=>{o.d(g,{c:()=>d,g:()=>p,h:()=>n,o:()=>u});var l=o(5861);const n=(t,e)=>null!==e.closest(t),d=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,p=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(a=>null!=a).map(a=>a.trim()).filter(a=>""!==a):[])(t).forEach(a=>e[a]=!0),e},m=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=(0,l.Z)(function*(e,a,v,f){if(null!=e&&"#"!==e[0]&&!m.test(e)){const b=document.querySelector("ion-router");if(b)return null!=a&&a.preventDefault(),b.push(e,v,f)}return!1});return function(a,v,f,b){return t.apply(this,arguments)}}()}}]);