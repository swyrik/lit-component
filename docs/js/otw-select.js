import{i as e,r as t,x as i}from"./lit-element-CiB-LLQB.js";import{t as o}from"./custom-element-CuiGoCVB.js";import{n as s}from"./property-B06GLbQC.js";var r,n,l,a,c,p=function(e,t,i,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n},h=function(e,t,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(e):o?o.value:t.get(e)},d=function(e,t,i,o,s){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?s.call(e,i):s?s.value=i:t.set(e,i),i};let u=class extends t{constructor(){super(),r.add(this),this.name="",this.value="",this.label="",this.required=!1,this.disabled=!1,this.multiple=!1,this.size=1,this.options=[],n.set(this,""),this.internals=this.attachInternals()}formAssociatedCallback(e){console.log("Associated with form:",e)}formDisabledCallback(e){this.disabled=e,this.requestUpdate()}formResetCallback(){this.value=h(this,n,"f"),this.internals.setFormValue(h(this,n,"f")),this.requestUpdate(),this.dispatchEvent(new CustomEvent("select-input-reset",{detail:{value:h(this,n,"f")},bubbles:!0,composed:!0}))}formStateRestoreCallback(e,t){this.value=e||h(this,n,"f"),this.internals.setFormValue(this.value),this.requestUpdate()}renderSelectOptions(e){return e.map((e=>h(this,r,"m",c).call(this,e)?i`
          <optgroup 
            label=${e.label}
            ?disabled=${e.disabled}
          >
            ${this.renderSelectOptions(e.options)}
          </optgroup>
        `:i`
          <option
            value=${e.value}
            ?disabled=${e.disabled}
            ?selected=${h(this,r,"m",a).call(this,e.value)}
          >
            ${e.label}
          </option>
        `))}checkValidity(){const e=this.renderRoot?.querySelector("select");if(e){const t=e.checkValidity();return this.internals.setValidity(e.validity,e.validationMessage,e),t}return!0}connectedCallback(){super.connectedCallback(),d(this,n,this.value,"f")}render(){return i`
      <div class="select-field">
        ${this.label?i`<label for="select-input">${this.label}</label>`:null}
        <div class="select-wrapper">
          <select
            id="select-input"
            .value=${this.value}
            ?required=${this.required}
            ?disabled=${this.disabled}
            ?multiple=${this.multiple}
            .size=${this.size}
            @change=${h(this,r,"m",l)}
            @blur=${this.checkValidity}
          >
            ${this.renderSelectOptions(this.options)}
          </select>
        </div>
      </div>
    `}};n=new WeakMap,r=new WeakSet,l=function(e){const t=e.target;if(this.multiple){const e=Array.from(t.selectedOptions);this.value=e.map((e=>e.value)).join(",")}else this.value=t.value;this.internals.setFormValue(this.value),this.dispatchEvent(new CustomEvent("select-input-change",{detail:{value:this.value,selectedOptions:this.multiple?this.value.split(","):[this.value]},bubbles:!0,composed:!0}))},a=function(e){return this.multiple?this.value.split(",").includes(e):this.value===e},c=function(e){return"options"in e},u.styles=e`
    :host {
      display: block;
    }
    
    .select-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-size: 14px;
      color: #333;
    }

    .select-wrapper {
      position: relative;
      display: inline-block;
    }

    select {
      appearance: none;
      -webkit-appearance: none;
      padding: 8px 32px 8px 12px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: white;
      width: 100%;
      min-width: 200px;
    }

    select[multiple] {
      padding-right: 12px;
    }

    select:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
    }

    select:disabled {
      background-color: #e9ecef;
      cursor: not-allowed;
    }

    .select-arrow {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      fill: #666;
    }

    select[multiple] + .select-arrow {
      display: none;
    }

    optgroup {
      font-weight: bold;
      color: #666;
    }

    option {
      padding: 4px 8px;
    }

    option:disabled {
      color: #999;
    }

    select option:hover {
      background-color: #f5f5f5;
    }

    select[multiple] option {
      padding: 8px 12px;
    }
  `,u.formAssociated=!0,p([s({type:String})],u.prototype,"name",void 0),p([s({type:String})],u.prototype,"value",void 0),p([s({type:String})],u.prototype,"label",void 0),p([s({type:Boolean})],u.prototype,"required",void 0),p([s({type:Boolean})],u.prototype,"disabled",void 0),p([s({type:Boolean})],u.prototype,"multiple",void 0),p([s({type:Number})],u.prototype,"size",void 0),p([s({type:Array,converter:{fromAttribute:e=>{try{return JSON.parse(e)}catch{return[]}},toAttribute:e=>{try{return JSON.stringify(e)}catch{return"[]"}}}})],u.prototype,"options",void 0),u=p([o("otw-select")],u);export{u as SelectInput};
//# sourceMappingURL=otw-select.js.map
