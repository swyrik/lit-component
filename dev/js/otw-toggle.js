import{T as t,i as e,r as i,x as s}from"./lit-element-CiB-LLQB.js";import{t as o}from"./custom-element-CuiGoCVB.js";import{n as r}from"./property-B06GLbQC.js";import{r as l}from"./state-CTbTw90b.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=1;class h{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends h{constructor(t){if(super(t),t.type!==a||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(e,[i]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const s=e.element.classList;for(const t of this.st)t in i||(s.remove(t),this.st.delete(t));for(const t in i){const e=!!i[t];e===this.st.has(t)||this.nt?.has(t)||(e?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return t}});var c=function(t,e,i,s){var o,r=arguments.length,l=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(r<3?o(l):r>3?o(e,i,l):o(e,i))||l);return r>3&&l&&Object.defineProperty(e,i,l),l};let d=class extends i{constructor(){super(),this.checked=!1,this.disabled=!1,this.name="",this.value="on",this.label="",this.required=!1,this.errorMessage="",this.validationMessage="",this.internals=this.attachInternals()}getClasses(){return{toggle:!0,checked:this.checked,disabled:this.disabled}}willUpdate(t){t.has("checked")&&this.updateFormValue()}connectedCallback(){super.connectedCallback(),this.updateFormValue()}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.checked=!1,this.updateFormValue()}formStateRestoreCallback(t){this.checked=t===this.value,this.updateFormValue()}updateFormValue(){const t=this.checked?this.value:"off";this.internals.setFormValue(t),this.required&&!this.checked?(this.validationMessage=this.errorMessage||"This field is required",this.internals.setValidity({valueMissing:!0},this.validationMessage)):(this.validationMessage="",this.internals.setValidity({}))}handleToggle(t){this.disabled||(this.checked=!this.checked,this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}handleKeyDown(t){"Space"!==t.code&&"Enter"!==t.code||(t.preventDefault(),this.handleToggle(t))}render(){return s`
      <div class="toggle-wrapper">
        <div 
          class=${n(this.getClasses())}
          role="switch"
          aria-checked="${this.checked}"
          aria-disabled="${this.disabled}"
          tabindex="${this.disabled?-1:0}"
          @click=${this.handleToggle}
          @keydown=${this.handleKeyDown}
        >
          <div class="toggle-thumb"></div>
        </div>
        ${this.label?s`
              <label class="label">
                ${this.label}
                ${this.required?s`<span class="required">*</span>`:null}
              </label>
            `:null}
      </div>
      ${this.validationMessage?s`<div class="error-message">${this.validationMessage}</div>`:null}
    `}};d.formAssociated=!0,d.styles=e`
    :host {
      display: inline-block;
      --toggle-width: 48px;
      --toggle-height: 24px;
      --thumb-size: 20px;
      --toggle-padding: 2px;
      --toggle-color: #007bff;
      --toggle-bg: #e0e0e0;
    }

    .toggle-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .toggle {
      position: relative;
      width: var(--toggle-width);
      height: var(--toggle-height);
      background-color: var(--toggle-bg);
      border-radius: calc(var(--toggle-height) / 2);
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    .toggle.checked {
      background-color: var(--toggle-color);
    }

    .toggle.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .toggle-thumb {
      position: absolute;
      top: var(--toggle-padding);
      left: var(--toggle-padding);
      width: var(--thumb-size);
      height: var(--thumb-size);
      background-color: white;
      border-radius: 50%;
      transition: transform 0.2s ease-in-out;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .toggle.checked .toggle-thumb {
      transform: translateX(calc(var(--toggle-width) - var(--thumb-size) - 2 * var(--toggle-padding)));
    }

    .toggle:focus-visible {
      outline: 1px solid #007bff;
      outline-offset: 2px;
    }

    .required {
      color: red;
      margin-left: 4px;
    }

    .label {
      color: var(--color-text, #333);
      user-select: none;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    .error-message {
      color: red;
      font-size: 0.875rem;
      margin-top: 4px;
    }
  `,c([r({type:Boolean})],d.prototype,"checked",void 0),c([r({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0),c([r({type:String})],d.prototype,"name",void 0),c([r({type:String})],d.prototype,"value",void 0),c([r({type:String})],d.prototype,"label",void 0),c([r({type:Boolean})],d.prototype,"required",void 0),c([r({type:String})],d.prototype,"errorMessage",void 0),c([l()],d.prototype,"validationMessage",void 0),d=c([o("otw-toggle")],d);export{d as OtwToggle};
//# sourceMappingURL=otw-toggle.js.map
