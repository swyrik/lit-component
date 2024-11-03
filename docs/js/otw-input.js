import{u as t,f as e,i,r,x as o}from"./lit-element-Cjx9BPvc.js";import{t as s}from"./custom-element-CuiGoCVB.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:e},a=(t=n,e,i)=>{const{kind:r,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.P(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};function h(t){return(e,i)=>"object"==typeof i?a(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var l=function(t,e,i,r){var o,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,i,n):o(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let c=class extends r{static get formAssociated(){return!0}constructor(){super(),this.type="text",this.value="",this.internals=this.attachInternals()}updated(t){t.has("value")&&this.internals.setFormValue(this.value.toString()),super.update(t)}handleInput(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("change",{detail:{name:this.label,value:this.value},bubbles:!0,composed:!0}))}render(){return o`<label for=${this.label}>${this.label}</label> <input .value=${this.value} name=${this.label} id=${this.label} type=${this.type} @change=${this.handleInput} />`}};c.styles=i`
      input {
        width: 100%;
        height: 2em;
        border: 1px solid rgba(0,0,0,0.1);
      border-radius: 4px;
      }
      
      label {
        font-size: 1em;
        font-family: verdana;
        margin-bottom: 1em;
      }
      
      input:hover {
        border: 1px solid rgba(0,0,0,0.4);
      }
      
      `,l([h({attribute:!0})],c.prototype,"label",void 0),l([h({type:String,attribute:!0})],c.prototype,"type",void 0),l([h({attribute:!0})],c.prototype,"value",void 0),c=l([s("otw-input")],c);export{c as OtwInput};
//# sourceMappingURL=otw-input.js.map
