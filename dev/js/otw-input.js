import{i as t,r as e,x as i}from"./lit-element-CiB-LLQB.js";import{t as o}from"./custom-element-CuiGoCVB.js";import{n as s}from"./property-B06GLbQC.js";var r,n,a,l=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n},c=function(t,e,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(t):o?o.value:e.get(t)},d=function(t,e,i,o,s){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?s.call(t,i):s?s.value=i:e.set(t,i),i};let h=class extends e{constructor(){super(),r.add(this),this.name="",this.value="",this.label="",this.type="text",this.required=!1,this.placeholder="",this.disabled=!1,n.set(this,""),this.internals=this.attachInternals()}formAssociatedCallback(t){}formDisabledCallback(t){this.disabled=t,this.requestUpdate()}formResetCallback(){this.value=c(this,n,"f"),this.internals.setFormValue(c(this,n,"f")),this.requestUpdate(),this.dispatchEvent(new CustomEvent("rest",{detail:{value:c(this,n,"f")},bubbles:!0,composed:!0}))}formStateRestoreCallback(t,e){this.value=t||"",this.internals.setFormValue(this.value),console.log("Form state restored:",{state:t,mode:e,value:this.value}),this.requestUpdate()}checkValidity(){const t=this.renderRoot?.querySelector("input");if(this.dispatchEvent(new CustomEvent("blur",{bubbles:!0,composed:!0})),t){const e=t.checkValidity();return this.internals.setValidity(t.validity,t.validationMessage,t),e}return!0}handleOnFocus(t){const e=t.target;this.value=e.value,this.dispatchEvent(new CustomEvent("focus",{detail:{value:this.value},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),d(this,n,this.value,"f"),this.internals.setFormValue(this.value)}render(){return i`
      <div class="form-field">
        ${this.label?i`<label for="input">${this.label}</label>`:null}
        <input
          id="input"
          .type=${this.type}
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${c(this,r,"m",a)}
          @blur=${this.checkValidity}
          @focus=${this.handleOnFocus}
        />
      </div>
    `}};n=new WeakMap,r=new WeakSet,a=function(t){const e=t.target;this.value=e.value,this.internals.setFormValue(this.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))},h.styles=t`
    :host {
      display: block;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-size: 14px;
      color: #333;
    }

    input {
      padding: 8px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-size: 16px;
    }

    input[type='color'] {
      padding: unset;
      aspect-ratio: 1/1;
      width: 35px;
      height: 35px;
    }
    input[type='color']::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type='color']::-webkit-color-swatch {
      border: none;
    }

    input:focus,
    input:active,
    input:focus-visible {
      outline: none;
      border: 1px solid rgba(33, 150, 243, 1);
    }

    input:invalid {
      border-color: #dc3545;
    }

    input:disabled {
      background-color: #e9ecef;
      cursor: not-allowed;
    }
  `,h.formAssociated=!0,l([s({type:String})],h.prototype,"name",void 0),l([s({type:String})],h.prototype,"value",void 0),l([s({type:String})],h.prototype,"label",void 0),l([s({type:String})],h.prototype,"type",void 0),l([s({type:Boolean})],h.prototype,"required",void 0),l([s({type:String})],h.prototype,"placeholder",void 0),l([s({type:Boolean})],h.prototype,"disabled",void 0),h=l([o("otw-input")],h);export{h as FormInput};
//# sourceMappingURL=otw-input.js.map
