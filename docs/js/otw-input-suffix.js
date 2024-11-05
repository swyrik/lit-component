import{i as t,r as e,x as i}from"./lit-element-CiB-LLQB.js";import{t as s}from"./custom-element-CuiGoCVB.js";import{n as r}from"./property-B06GLbQC.js";import{r as o}from"./state-CTbTw90b.js";var h=function(t,e,i,s){var r,o=arguments.length,h=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(h=(o<3?r(h):o>3?r(e,i,h):r(e,i))||h);return o>3&&h&&Object.defineProperty(e,i,h),h};let n=class extends e{constructor(){super(),this.name="",this.value="",this.label="",this.disabled=!1,this.required=!1,this.type="text",this.placeholder="",this.unit="px",this.touched=!1,this.errorMessage="",this.internals=this.attachInternals()}get inputValue(){return`${this.value}${this.unit}`}handleInput(t){const e=t.target;this.value=e.value,this.touched=!0,this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.inputValue},bubbles:!0,composed:!0}))}handleUnitChange(t){const e=t.target;this.unit=e.value,this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.inputValue},bubbles:!0,composed:!0}))}updateFormValue(){this.checkValidity()?(this.internals.setFormValue(this.inputValue),this.errorMessage=""):this.internals.setFormValue(null)}checkValidity(){if(this.required&&!this.value)return this.errorMessage="This field is required",this.internals.setValidity({valueMissing:!0},"This field is required"),!1;const t=parseFloat(this.value);return this.value&&isNaN(t)?(this.errorMessage="Please enter a valid number",this.internals.setValidity({typeMismatch:!0},"Please enter a valid number"),!1):(this.internals.setValidity({}),!0)}firstUpdated(){this.updateFormValue()}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value="",this.unit="px",this.touched=!1,this.errorMessage="",this.updateFormValue()}formStateRestoreCallback(t){if(t){const e=t.match(/^([\d.]+)(.+)$/);e&&(this.value=e[1],this.unit=e[2],this.updateFormValue())}}render(){return i`
      <input 
        .type=${this.type}
        .value=${this.value}
        ?disabled=${this.disabled}
        ?required=${this.required}
        placeholder=${this.placeholder}
        @input=${this.handleInput}
        class=${this.errorMessage?"error":""}
      />
      <select 
        .value=${this.unit}
        ?disabled=${this.disabled}
        @change=${this.handleUnitChange}
      >
        <option value="px">px</option>
        <option value="%">%</option>
      </select>
    `}};n.formAssociated=!0,n.styles=t`
    :host {
      border: 1px solid rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 75% max(25%, 37px);
      height: 2em;
      border-radius: 4px;
    }

    :host(:focus-within) {
      border: 1px solid rgba(33, 150, 243, 1);
      border-radius: 4px;
    }

    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }

    input {
      border: none;
      border-radius: 4px;
      width: 100%;
      padding: 0 8px;
    }

    input:active,
    input:focus, 
    select:focus, 
    select:focus-visible {
      outline: none;
    }

    select {
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 0 2px;
    }

    .error {
      border-color: #ff0000;
    }
  `,h([r({type:String})],n.prototype,"name",void 0),h([r({type:String})],n.prototype,"value",void 0),h([r({type:String})],n.prototype,"label",void 0),h([r({type:Boolean,reflect:!0})],n.prototype,"disabled",void 0),h([r({type:Boolean})],n.prototype,"required",void 0),h([r({type:String,attribute:!0})],n.prototype,"type",void 0),h([r({type:String})],n.prototype,"placeholder",void 0),h([r({type:String})],n.prototype,"unit",void 0),h([o()],n.prototype,"touched",void 0),h([o()],n.prototype,"errorMessage",void 0),n=h([s("otw-input-prefix")],n);export{n as InputPrefix};
//# sourceMappingURL=otw-input-suffix.js.map
