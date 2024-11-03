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
var _FormInput_instances, _FormInput_initialValue, _FormInput_handleInput;
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let FormInput = class FormInput extends LitElement {
    constructor() {
        super();
        _FormInput_instances.add(this);
        this.name = '';
        this.value = '';
        this.label = '';
        this.type = 'text';
        this.required = false;
        this.placeholder = '';
        this.disabled = false;
        _FormInput_initialValue.set(this, '');
        this.internals = this.attachInternals();
    }
    // Called when the element is added to a form
    formAssociatedCallback(_form) {
        // Do nothing
    }
    // Called when the element is disabled via form
    formDisabledCallback(disabled) {
        this.disabled = disabled;
        this.requestUpdate();
    }
    // Called when form.reset() is called
    formResetCallback() {
        this.value = __classPrivateFieldGet(this, _FormInput_initialValue, "f");
        this.internals.setFormValue(__classPrivateFieldGet(this, _FormInput_initialValue, "f"));
        this.requestUpdate();
        // Dispatch reset event
        this.dispatchEvent(new CustomEvent('rest', {
            detail: { value: __classPrivateFieldGet(this, _FormInput_initialValue, "f") },
            bubbles: true,
            composed: true,
        }));
    }
    // Called after form state is restored (e.g., browser back/forward)
    formStateRestoreCallback(state, mode) {
        this.value = state || '';
        this.internals.setFormValue(this.value);
        console.log('Form state restored:', {
            state,
            mode, // 'restore' or 'autocomplete'
            value: this.value,
        });
        this.requestUpdate();
    }
    // Validate the input
    checkValidity() {
        const input = this.renderRoot?.querySelector('input');
        if (input) {
            const isValid = input.checkValidity();
            this.internals.setValidity(input.validity, input.validationMessage, input);
            return isValid;
        }
        return true;
    }
    // Lifecycle: when element is first connected
    connectedCallback() {
        super.connectedCallback();
        __classPrivateFieldSet(this, _FormInput_initialValue, this.value, "f");
        this.internals.setFormValue(this.value);
    }
    render() {
        return html `
      <div class="form-field">
        ${this.label ? html `<label for="input">${this.label}</label>` : null}
        <input
          id="input"
          .type=${this.type}
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${__classPrivateFieldGet(this, _FormInput_instances, "m", _FormInput_handleInput)}
          @blur=${this.checkValidity}
        />
      </div>
    `;
    }
};
_FormInput_initialValue = new WeakMap();
_FormInput_instances = new WeakSet();
_FormInput_handleInput = function _FormInput_handleInput(e) {
    const input = e.target;
    this.value = input.value;
    this.internals.setFormValue(this.value);
    // Dispatch custom event
    this.dispatchEvent(new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
    }));
};
// Define styles
FormInput.styles = css `
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
  `;
// Make the element form-associated
FormInput.formAssociated = true;
__decorate([
    property({ type: String })
], FormInput.prototype, "name", void 0);
__decorate([
    property({ type: String })
], FormInput.prototype, "value", void 0);
__decorate([
    property({ type: String })
], FormInput.prototype, "label", void 0);
__decorate([
    property({ type: String })
], FormInput.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], FormInput.prototype, "required", void 0);
__decorate([
    property({ type: String })
], FormInput.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean })
], FormInput.prototype, "disabled", void 0);
FormInput = __decorate([
    customElement('otw-input')
], FormInput);
export { FormInput };
