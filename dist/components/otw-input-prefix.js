var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
let InputPrefix = class InputPrefix extends LitElement {
    constructor() {
        super();
        this.name = '';
        this.value = '';
        this.label = '';
        this.disabled = false;
        this.required = false;
        this.type = 'text';
        this.placeholder = '';
        this.unit = 'px';
        this.touched = false;
        this.errorMessage = '';
        this.internals = this.attachInternals();
    }
    get inputValue() {
        return `${this.value}${this.unit}`;
    }
    //   private get inputElement(): HTMLInputElement {
    //     return this.renderRoot?.querySelector('input') as HTMLInputElement;
    //   }
    //   private get selectElement(): HTMLSelectElement {
    //     return this.renderRoot?.querySelector('select') as HTMLSelectElement;
    //   }
    handleInput(e) {
        const input = e.target;
        this.value = input.value;
        this.touched = true;
        this.updateFormValue();
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.inputValue },
            bubbles: true,
            composed: true
        }));
    }
    handleUnitChange(e) {
        const select = e.target;
        this.unit = select.value;
        this.updateFormValue();
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: this.inputValue },
            bubbles: true,
            composed: true
        }));
    }
    updateFormValue() {
        const isValid = this.checkValidity();
        if (isValid) {
            this.internals.setFormValue(this.inputValue);
            this.errorMessage = '';
        }
        else {
            this.internals.setFormValue(null);
        }
    }
    checkValidity() {
        if (this.required && !this.value) {
            this.errorMessage = 'This field is required';
            this.internals.setValidity({ valueMissing: true }, 'This field is required');
            return false;
        }
        // Add numerical validation if needed
        const numValue = parseFloat(this.value);
        if (this.value && isNaN(numValue)) {
            this.errorMessage = 'Please enter a valid number';
            this.internals.setValidity({ typeMismatch: true }, 'Please enter a valid number');
            return false;
        }
        this.internals.setValidity({});
        return true;
    }
    firstUpdated() {
        this.updateFormValue();
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    formResetCallback() {
        this.value = '';
        this.unit = 'px';
        this.touched = false;
        this.errorMessage = '';
        this.updateFormValue();
    }
    formStateRestoreCallback(state) {
        if (state) {
            const match = state.match(/^([\d.]+)(.+)$/);
            if (match) {
                this.value = match[1];
                this.unit = match[2];
                this.updateFormValue();
            }
        }
    }
    render() {
        return html `
      <input 
        .type=${this.type}
        .value=${this.value}
        ?disabled=${this.disabled}
        ?required=${this.required}
        placeholder=${this.placeholder}
        @input=${this.handleInput}
        class=${this.errorMessage ? 'error' : ''}
      />
      <select 
        .value=${this.unit}
        ?disabled=${this.disabled}
        @change=${this.handleUnitChange}
      >
        <option value="px">px</option>
        <option value="%">%</option>
      </select>
    `;
    }
};
InputPrefix.formAssociated = true;
InputPrefix.styles = css `
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
  `;
__decorate([
    property({ type: String })
], InputPrefix.prototype, "name", void 0);
__decorate([
    property({ type: String })
], InputPrefix.prototype, "value", void 0);
__decorate([
    property({ type: String })
], InputPrefix.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], InputPrefix.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], InputPrefix.prototype, "required", void 0);
__decorate([
    property({ type: String, attribute: true })
], InputPrefix.prototype, "type", void 0);
__decorate([
    property({ type: String })
], InputPrefix.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], InputPrefix.prototype, "unit", void 0);
__decorate([
    state()
], InputPrefix.prototype, "touched", void 0);
__decorate([
    state()
], InputPrefix.prototype, "errorMessage", void 0);
InputPrefix = __decorate([
    customElement('otw-input-prefix')
], InputPrefix);
export { InputPrefix };
