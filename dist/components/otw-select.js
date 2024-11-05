var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _SelectInput_instances, _SelectInput_initialValue, _SelectInput_handleChange, _SelectInput_isSelected, _SelectInput_isOptionGroup;
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let SelectInput = class SelectInput extends LitElement {
    constructor() {
        super();
        _SelectInput_instances.add(this);
        this.name = '';
        this.value = '';
        this.label = '';
        this.required = false;
        this.disabled = false;
        this.multiple = false;
        this.size = 1;
        this.options = [];
        _SelectInput_initialValue.set(this, '');
        this.internals = this.attachInternals();
    }
    formAssociatedCallback(form) {
        console.log('Associated with form:', form);
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
        this.requestUpdate();
    }
    formResetCallback() {
        this.value = __classPrivateFieldGet(this, _SelectInput_initialValue, "f");
        this.internals.setFormValue(__classPrivateFieldGet(this, _SelectInput_initialValue, "f"));
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('select-input-reset', {
            detail: { value: __classPrivateFieldGet(this, _SelectInput_initialValue, "f") },
            bubbles: true,
            composed: true
        }));
    }
    formStateRestoreCallback(state, _mode) {
        this.value = state || __classPrivateFieldGet(this, _SelectInput_initialValue, "f");
        this.internals.setFormValue(this.value);
        this.requestUpdate();
    }
    renderSelectOptions(items) {
        return items.map(item => {
            if (__classPrivateFieldGet(this, _SelectInput_instances, "m", _SelectInput_isOptionGroup).call(this, item)) {
                return html `
          <optgroup 
            label=${item.label}
            ?disabled=${item.disabled}
          >
            ${this.renderSelectOptions(item.options)}
          </optgroup>
        `;
            }
            else {
                return html `
          <option
            value=${item.value}
            ?disabled=${item.disabled}
            ?selected=${__classPrivateFieldGet(this, _SelectInput_instances, "m", _SelectInput_isSelected).call(this, item.value)}
          >
            ${item.label}
          </option>
        `;
            }
        });
    }
    checkValidity() {
        const select = this.renderRoot?.querySelector('select');
        if (select) {
            const isValid = select.checkValidity();
            this.internals.setValidity(select.validity, select.validationMessage, select);
            return isValid;
        }
        return true;
    }
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldSet(this, _SelectInput_initialValue, this.value, "f");
    }
    render() {
        return html `
      <div class="select-field">
        ${this.label
            ? html `<label for="select-input">${this.label}</label>`
            : null}
        <div class="select-wrapper">
          <select
            id="select-input"
            .value=${this.value}
            ?required=${this.required}
            ?disabled=${this.disabled}
            ?multiple=${this.multiple}
            .size=${this.size}
            @change=${__classPrivateFieldGet(this, _SelectInput_instances, "m", _SelectInput_handleChange)}
            @blur=${this.checkValidity}
          >
            ${this.renderSelectOptions(this.options)}
          </select>
        </div>
      </div>
    `;
    }
};
_SelectInput_initialValue = new WeakMap();
_SelectInput_instances = new WeakSet();
_SelectInput_handleChange = function _SelectInput_handleChange(e) {
    const select = e.target;
    if (this.multiple) {
        const selectedOptions = Array.from(select.selectedOptions);
        this.value = selectedOptions.map(opt => opt.value).join(',');
    }
    else {
        this.value = select.value;
    }
    this.internals.setFormValue(this.value);
    this.dispatchEvent(new CustomEvent('select-input-change', {
        detail: {
            value: this.value,
            selectedOptions: this.multiple ?
                this.value.split(',') :
                [this.value]
        },
        bubbles: true,
        composed: true
    }));
};
_SelectInput_isSelected = function _SelectInput_isSelected(optionValue) {
    if (this.multiple) {
        return this.value.split(',').includes(optionValue);
    }
    return this.value === optionValue;
};
_SelectInput_isOptionGroup = function _SelectInput_isOptionGroup(item) {
    return 'options' in item;
};
SelectInput.styles = css `
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
  `;
SelectInput.formAssociated = true;
__decorate([
    property({ type: String })
], SelectInput.prototype, "name", void 0);
__decorate([
    property({ type: String })
], SelectInput.prototype, "value", void 0);
__decorate([
    property({ type: String })
], SelectInput.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], SelectInput.prototype, "required", void 0);
__decorate([
    property({ type: Boolean })
], SelectInput.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], SelectInput.prototype, "multiple", void 0);
__decorate([
    property({ type: Number })
], SelectInput.prototype, "size", void 0);
__decorate([
    property({
        type: Array,
        converter: {
            fromAttribute: (value) => {
                try {
                    return JSON.parse(value);
                }
                catch {
                    return [];
                }
            },
            toAttribute: (value) => {
                try {
                    return JSON.stringify(value);
                }
                catch {
                    return '[]';
                }
            }
        }
    })
], SelectInput.prototype, "options", void 0);
SelectInput = __decorate([
    customElement('otw-select')
], SelectInput);
export { SelectInput };
