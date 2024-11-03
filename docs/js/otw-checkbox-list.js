import{i as e,r as t,x as o}from"./lit-element-CiB-LLQB.js";import{t as s}from"./custom-element-CuiGoCVB.js";import{n as i}from"./property-B06GLbQC.js";var c=function(e,t,o,s){var i,c=arguments.length,r=c<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(r=(c<3?i(r):c>3?i(t,o,r):i(t,o))||r);return c>3&&r&&Object.defineProperty(t,o,r),r};let r=class extends t{constructor(){super(),this.options=[],this.name="",this.required=!1,this.disabled=!1,this.errorMessage="",this.internals=this.attachInternals()}handleChange(e,t){const o=e.target;t.checked=o.checked,this.requestUpdate(),this.updateFormValue(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.getSelectedValues(),options:this.options},bubbles:!0,composed:!0}))}getSelectedValues(){return this.options.filter((e=>e.checked)).map((e=>e.value))}updateFormValue(){const e=this.getSelectedValues();this.required&&0===e.length?(this.internals.setValidity({valueMissing:!0},this.errorMessage||"Please select at least one option"),this.internals.setFormValue(null)):(this.internals.setValidity({}),this.internals.setFormValue(e.join(",")))}firstUpdated(){this.updateFormValue()}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.options=this.options.map((e=>({...e,checked:!1}))),this.updateFormValue()}formStateRestoreCallback(e){if(e){const t=e.split(",");this.options=this.options.map((e=>({...e,checked:t.includes(e.value)}))),this.updateFormValue()}}render(){return o`
      <div class="checkbox-group" role="group">
        ${this.options.map((e=>o`
          <label class="checkbox-container ${this.disabled?"disabled":""}">
            <input
              type="checkbox"
              name="${this.name}"
              .checked=${e.checked||!1}
              .value=${e.value}
              ?disabled=${this.disabled}
              @change=${t=>this.handleChange(t,e)}
            >
            <span class="checkmark"></span>
            <span class="checkbox-label">${e.label}</span>
          </label>
        `))}
      </div>
      ${this.errorMessage?o`
        <div class="error-message">${this.errorMessage}</div>
      `:null}
    `}};r.formAssociated=!0,r.styles=e`
    :host {
      display: block;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .checkbox-container {
      display: flex;
      align-items: center;
      gap: 8px;
      position: relative;
      padding-left: 28px;
      cursor: pointer;
      user-select: none;
    }

    /* Hide default checkbox */
    .checkbox-container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    /* Custom checkbox */
    .checkmark {
      position: absolute;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #fff;
      border: 2px solid #ccc;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
    }

    /* Hover state */
    .checkbox-container:hover .checkmark {
      border-color: #007bff;
    }

    /* Checked state */
    .checkbox-container input:checked ~ .checkmark {
      background-color: #007bff;
      border-color: #007bff;
    }

    /* Focus state */
    .checkbox-container input:focus-visible ~ .checkmark {
      outline: 1px solid #007bff;
      outline-offset: 2px;
    }

    /* Checkmark icon */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
      left: 6px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* Show checkmark when checked */
    .checkbox-container input:checked ~ .checkmark:after {
      display: block;
    }

    /* Disabled state */
    .checkbox-container.disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Error state */
    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 4px;
    }

    .checkbox-label {
      line-height: 20px;
      color: #333;
    }
  `,c([i({type:Array})],r.prototype,"options",void 0),c([i({type:String})],r.prototype,"name",void 0),c([i({type:Boolean})],r.prototype,"required",void 0),c([i({type:Boolean,reflect:!0})],r.prototype,"disabled",void 0),c([i({type:String})],r.prototype,"errorMessage",void 0),r=c([s("otw-checkbox-list")],r);export{r as CheckboxList};
//# sourceMappingURL=otw-checkbox-list.js.map
