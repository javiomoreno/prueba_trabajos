(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3Pt+":function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return dt})),n.d(e,"c",(function(){return vt})),n.d(e,"d",(function(){return gt})),n.d(e,"e",(function(){return yt})),n.d(e,"f",(function(){return Et})),n.d(e,"g",(function(){return w})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return V})),n.d(e,"j",(function(){return O})),n.d(e,"k",(function(){return G})),n.d(e,"l",(function(){return wt})),n.d(e,"m",(function(){return Vt})),n.d(e,"n",(function(){return k})),n.d(e,"o",(function(){return Z})),n.d(e,"p",(function(){return _t}));var r=n("fXoL"),s=n("ofXK"),i=n("HDdC"),o=n("DH7j"),a=n("lJxs"),l=n("XoHu"),u=n("Cfvw");function h(t,e){return new i.a(n=>{const r=t.length;if(0===r)return void n.complete();const s=new Array(r);let i=0,o=0;for(let a=0;a<r;a++){const l=Object(u.a)(t[a]);let h=!1;n.add(l.subscribe({next:t=>{h||(h=!0,o++),s[a]=t},error:t=>n.error(t),complete:()=>{i++,i!==r&&h||(o===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}const c=new r.q("NgValueAccessor"),d={provide:c,useExisting:Object(r.T)(()=>g),multi:!0};let g=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.E),r.Kb(r.l))},t.\u0275dir=r.Fb({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(t,e){1&t&&r.ac("change",(function(t){return e.onChange(t.target.checked)}))("blur",(function(){return e.onTouched()}))},features:[r.xb([d])]}),t})();const p={provide:c,useExisting:Object(r.T)(()=>f),multi:!0},_=new r.q("CompositionEventMode");let f=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(s.z)()?Object(s.z)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.E),r.Kb(r.l),r.Kb(_,8))},t.\u0275dir=r.Fb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&r.ac("input",(function(t){return e._handleInput(t.target.value)}))("blur",(function(){return e.onTouched()}))("compositionstart",(function(){return e._compositionStart()}))("compositionend",(function(t){return e._compositionEnd(t.target.value)}))},features:[r.xb([p])]}),t})(),m=(()=>{class t{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Fb({type:t}),t})(),y=(()=>{class t extends m{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return C(e||t)},t.\u0275dir=r.Fb({type:t,features:[r.vb]}),t})();const C=r.Rb(y);class v extends m{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null,this._rawValidators=[],this._rawAsyncValidators=[]}get validator(){}get asyncValidator(){}}class b{constructor(t){this._cd=t}get ngClassUntouched(){return!!this._cd.control&&this._cd.control.untouched}get ngClassTouched(){return!!this._cd.control&&this._cd.control.touched}get ngClassPristine(){return!!this._cd.control&&this._cd.control.pristine}get ngClassDirty(){return!!this._cd.control&&this._cd.control.dirty}get ngClassValid(){return!!this._cd.control&&this._cd.control.valid}get ngClassInvalid(){return!!this._cd.control&&this._cd.control.invalid}get ngClassPending(){return!!this._cd.control&&this._cd.control.pending}}let V=(()=>{class t extends b{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(v,2))},t.\u0275dir=r.Fb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Cb("ng-untouched",e.ngClassUntouched)("ng-touched",e.ngClassTouched)("ng-pristine",e.ngClassPristine)("ng-dirty",e.ngClassDirty)("ng-valid",e.ngClassValid)("ng-invalid",e.ngClassInvalid)("ng-pending",e.ngClassPending)},features:[r.vb]}),t})(),O=(()=>{class t extends b{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(y,2))},t.\u0275dir=r.Fb({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Cb("ng-untouched",e.ngClassUntouched)("ng-touched",e.ngClassTouched)("ng-pristine",e.ngClassPristine)("ng-dirty",e.ngClassDirty)("ng-valid",e.ngClassValid)("ng-invalid",e.ngClassInvalid)("ng-pending",e.ngClassPending)},features:[r.vb]}),t})();function A(t){return null==t||0===t.length}function E(t){return null!=t&&"number"==typeof t.length}const w=new r.q("NgValidators"),S=new r.q("NgAsyncValidators"),T=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class k{static min(t){return e=>{if(A(e.value)||A(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(A(e.value)||A(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return A(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return A(t.value)||T.test(t.value)?null:{email:!0}}static minLength(t){return e=>A(e.value)||!E(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}static maxLength(t){return e=>E(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}static pattern(t){if(!t)return k.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(A(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(M);return 0==e.length?null:function(t){return D(x(t,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(M);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(o.a)(e))return h(e,null);if(Object(l.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return h(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return h(t=1===t.length&&Object(o.a)(t[0])?t[0]:t,null).pipe(Object(a.a)(t=>e(...t)))}return h(t,null)}(x(t,e).map(P)).pipe(Object(a.a)(D))}}}function M(t){return null!=t}function P(t){const e=Object(r.qb)(t)?Object(u.a)(t):t;return Object(r.pb)(e),e}function D(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function x(t,e){return e.map(e=>e(t))}function j(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}const F={provide:c,useExisting:Object(r.T)(()=>N),multi:!0};let N=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.E),r.Kb(r.l))},t.\u0275dir=r.Fb({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,e){1&t&&r.ac("input",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},features:[r.xb([F])]}),t})();const K={provide:c,useExisting:Object(r.T)(()=>q),multi:!0};let R=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})(),q=(()=>{class t{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(v),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.E),r.Kb(r.l),r.Kb(R),r.Kb(r.r))},t.\u0275dir=r.Fb({type:t,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,e){1&t&&r.ac("change",(function(){return e.onChange()}))("blur",(function(){return e.onTouched()}))},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[r.xb([K])]}),t})();const I={provide:c,useExisting:Object(r.T)(()=>U),multi:!0};let U=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=e=>{t(""==e?null:parseFloat(e))}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.E),r.Kb(r.l))},t.\u0275dir=r.Fb({type:t,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(t,e){1&t&&r.ac("change",(function(t){return e.onChange(t.target.value)}))("input",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},features:[r.xb([I])]}),t})();const W={provide:c,useExisting:Object(r.T)(()=>$),multi:!0};function B(t,e){return null==t?""+e:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let $=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=B(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.E),r.Kb(r.l))},t.\u0275dir=r.Fb({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&r.ac("change",(function(t){return e.onChange(t.target.value)}))("blur",(function(){return e.onTouched()}))},inputs:{compareWith:"compareWith"},features:[r.xb([W])]}),t})(),G=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(B(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.l),r.Kb(r.E),r.Kb($,9))},t.\u0275dir=r.Fb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();const z={provide:c,useExisting:Object(r.T)(()=>H),multi:!0};function L(t,e){return null==t?""+e:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let H=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),s=this._getOptionValue(r.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.E),r.Kb(r.l))},t.\u0275dir=r.Fb({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&r.ac("change",(function(t){return e.onChange(t.target)}))("blur",(function(){return e.onTouched()}))},inputs:{compareWith:"compareWith"},features:[r.xb([z])]}),t})(),Z=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(L(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(L(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(r.l),r.Kb(r.E),r.Kb(H,9))},t.\u0275dir=r.Fb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();function J(t,e){t.validator=k.compose([t.validator,e.validator]),t.asyncValidator=k.composeAsync([t.asyncValidator,e.asyncValidator]),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&X(t,e)})}(t,e),function(t,e){t.registerOnChange((t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&X(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),e.valueAccessor.setDisabledState&&t.registerOnDisabledChange(t=>{e.valueAccessor.setDisabledState(t)}),e._rawValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())}),e._rawAsyncValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())})}function X(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Q(t,e){t.validator=k.compose([t.validator,e.validator]),t.asyncValidator=k.composeAsync([t.asyncValidator,e.asyncValidator])}function Y(t){return null!=t?k.compose(j(t)):null}function tt(t){return null!=t?k.composeAsync(j(t)):null}const et=[g,U,N,$,H,q],nt="VALID",rt="INVALID",st="PENDING",it="DISABLED";function ot(t){return(ht(t)?t.validators:t)||null}function at(t){return Array.isArray(t)?Y(t):t||null}function lt(t,e){return(ht(e)?e.asyncValidators:t)||null}function ut(t){return Array.isArray(t)?tt(t):t||null}function ht(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class ct{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=at(this._rawValidators),this._composedAsyncValidatorFn=ut(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===nt}get invalid(){return this.status===rt}get pending(){return this.status==st}get disabled(){return this.status===it}get enabled(){return this.status!==it}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=at(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=ut(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=st,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=it,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=nt,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==nt&&this.status!==st||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?it:nt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=st,this._hasOwnPendingAsyncValidator=!0;const e=P(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof gt?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof pt&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.n,this.statusChanges=new r.n}_calculateStatus(){return this._allControlsDisabled()?it:this.errors?rt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(st)?st:this._anyControlsHaveStatus(rt)?rt:nt}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){ht(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}}class dt extends ct{constructor(t=null,e,n){super(ot(e),lt(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=()=>{}}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class gt extends ct{constructor(t,e,n){super(ot(e),lt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof dt?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class pt extends ct{constructor(t,e,n){super(ot(e),lt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof dt?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error("Cannot find form control at index "+t)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let _t=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Fb({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})();const ft=new r.q("NgModelWithFormControlWarning"),mt={provide:y,useExisting:Object(r.T)(()=>yt)};let yt=(()=>{class t extends y{constructor(t,e){super(),this._validators=t,this._asyncValidators=e,this.submitted=!1,this.directives=[],this.form=null,this.ngSubmit=new r.n}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations())}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return J(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){!function(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}(this.directives,t)}addFormGroup(t){const e=this.form.get(t.path);Q(e,t),e.updateValueAndValidity({emitEvent:!1})}removeFormGroup(t){}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){const e=this.form.get(t.path);Q(e,t),e.updateValueAndValidity({emitEvent:!1})}removeFormArray(t){}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,e=this.directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=this.form.get(t.path);t.control!==e&&(function(t,e){const n=()=>{};e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n),e._rawValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(null)}),e._rawAsyncValidators.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(null)}),t&&t._clearChangeFns()}(t.control,t),e&&J(e,t),t.control=e)}),this.form._updateTreeValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(()=>this._updateDomValue()),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{}),this._oldForm=this.form}_updateValidators(){const t=Y(this._validators);this.form.validator=k.compose([this.form.validator,t]);const e=tt(this._asyncValidators);this.form.asyncValidator=k.composeAsync([this.form.asyncValidator,e])}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(w,10),r.Kb(S,10))},t.\u0275dir=r.Fb({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&r.ac("submit",(function(t){return e.onSubmit(t)}))("reset",(function(){return e.onReset()}))},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r.xb([mt]),r.vb,r.wb]}),t})();const Ct={provide:v,useExisting:Object(r.T)(()=>vt)};let vt=(()=>{class t extends v{constructor(t,e,n,s,i){super(),this._ngModelWarningConfig=i,this._added=!1,this.update=new r.n,this._ngModelWarningSent=!1,this._parent=t,this._rawValidators=e||[],this._rawAsyncValidators=n||[],this.valueAccessor=function(t,e){if(!e)return null;Array.isArray(e);let n=void 0,r=void 0,s=void 0;return e.forEach(t=>{var e;t.constructor===f?n=t:(e=t,et.some(t=>e.constructor===t)?r=t:s=t)}),s||r||n||null}(0,s)}set isDisabled(t){}ngOnChanges(e){var n,s;this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(e,this.viewModel)&&(n=t,this,s=this._ngModelWarningConfig,Object(r.U)()&&"never"!==s&&((null!==s&&"once"!==s||n._ngModelWarningSentOnce)&&("always"!==s||this._ngModelWarningSent)||(n._ngModelWarningSentOnce=!0,this._ngModelWarningSent=!0)),this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return t=null==this.name?this.name:this.name.toString(),[...this._parent.path,t];var t}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return Y(this._rawValidators)}get asyncValidator(){return tt(this._rawAsyncValidators)}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(r.Kb(y,13),r.Kb(w,10),r.Kb(S,10),r.Kb(c,10),r.Kb(ft,8))},t.\u0275dir=r.Fb({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r.xb([Ct]),r.vb,r.wb]}),t._ngModelWarningSentOnce=!1,t})();const bt={provide:w,useExisting:Object(r.T)(()=>Vt),multi:!0};let Vt=(()=>{class t{constructor(){this._required=!1}get required(){return this._required}set required(t){this._required=null!=t&&!1!==t&&""+t!="false",this._onChange&&this._onChange()}validate(t){return this.required?k.required(t):null}registerOnValidatorChange(t){this._onChange=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Fb({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,e){2&t&&r.zb("required",e.required?"":null)},inputs:{required:"required"},features:[r.xb([bt])]}),t})(),Ot=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)}}),t})(),At=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let r=null,s=null,i=void 0;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(r=null!=e.validators?e.validators:null,s=null!=e.asyncValidators?e.asyncValidators:null,i=null!=e.updateOn?e.updateOn:void 0):(r=null!=e.validator?e.validator:null,s=null!=e.asyncValidator?e.asyncValidator:null)),new gt(n,{asyncValidators:s,updateOn:i,validators:r})}control(t,e,n){return new dt(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new pt(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof dt||t instanceof gt||t instanceof pt?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Gb({token:t,factory:t.\u0275fac}),t})(),Et=(()=>{class t{}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},providers:[R],imports:[Ot]}),t})(),wt=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ft,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275mod=r.Ib({type:t}),t.\u0275inj=r.Hb({factory:function(e){return new(e||t)},providers:[At,R],imports:[Ot]}),t})()}}]);