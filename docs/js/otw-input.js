import{i as t,r as e,x as i}from"./lit-element-CiB-LLQB.js";import{t as o}from"./custom-element-CuiGoCVB.js";import{n as r}from"./property-B06GLbQC.js";var s,n,a,l=function(t,e,i,o){var r,s=arguments.length,n=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n},p=function(t,e,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(t):o?o.value:e.get(t)},c=function(t,e,i,o,r){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?r.call(t,i):r?r.value=i:e.set(t,i),i};let d=class extends e{constructor(){super(),s.add(this),this.name="",this.value="",this.label="",this.type="text",this.required=!1,this.placeholder="",this.disabled=!1,n.set(this,""),this.internals=this.attachInternals()}formAssociatedCallback(t){}formDisabledCallback(t){this.disabled=t,this.requestUpdate()}formResetCallback(){this.value=p(this,n,"f"),this.internals.setFormValue(p(this,n,"f")),this.requestUpdate(),this.dispatchEvent(new CustomEvent("rest",{detail:{value:p(this,n,"f")},bubbles:!0,composed:!0}))}formStateRestoreCallback(t,e){this.value=t||"",this.internals.setFormValue(this.value),console.log("Form state restored:",{state:t,mode:e,value:this.value}),this.requestUpdate()}checkValidity(){const t=this.renderRoot?.querySelector("input");if(t){const e=t.checkValidity();return this.internals.setValidity(t.validity,t.validationMessage,t),e}return!0}connectedCallback(){super.connectedCallback(),c(this,n,this.value,"f"),this.internals.setFormValue(this.value)}render(){return i`
      <div class="form-field">
        ${this.label?i`<label for="input">${this.label}</label>`:null}
        <input
          id="input"
          .type=${this.type}
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${p(this,s,"m",a)}
          @blur=${this.checkValidity}
        />
      </div>
    `}};n=new WeakMap,s=new WeakSet,a=function(t){const e=t.target;this.value=e.value,this.internals.setFormValue(this.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))},d.styles=t`
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

    input[type='color'] {
      -webkit-appearance: none;
      border: none;
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
  `,d.formAssociated=!0,l([r({type:String})],d.prototype,"name",void 0),l([r({type:String})],d.prototype,"value",void 0),l([r({type:String})],d.prototype,"label",void 0),l([r({type:String})],d.prototype,"type",void 0),l([r({type:Boolean})],d.prototype,"required",void 0),l([r({type:String})],d.prototype,"placeholder",void 0),l([r({type:Boolean})],d.prototype,"disabled",void 0),d=l([o("otw-input")],d);export{d as FormInput};
//# sourceMappingURL=otw-input.js.map
