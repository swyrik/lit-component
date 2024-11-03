var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CheckboxList = class CheckboxList extends LitElement {
    constructor() {
        super();
        this.options = [];
        this.name = '';
        this.required = false;
        this.disabled = false;
        this.errorMessage = '';
        this.internals = this.attachInternals();
    }
    handleChange(event, option) {
        const checkbox = event.target;
        option.checked = checkbox.checked;
        this.requestUpdate();
        this.updateFormValue();
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                value: this.getSelectedValues(),
                options: this.options
            },
            bubbles: true,
            composed: true
        }));
    }
    getSelectedValues() {
        return this.options
            .filter(option => option.checked)
            .map(option => option.value);
    }
    updateFormValue() {
        const selectedValues = this.getSelectedValues();
        if (this.required && selectedValues.length === 0) {
            this.internals.setValidity({ valueMissing: true }, this.errorMessage || 'Please select at least one option');
            this.internals.setFormValue(null);
        }
        else {
            this.internals.setValidity({});
            this.internals.setFormValue(selectedValues.join(','));
        }
    }
    firstUpdated() {
        this.updateFormValue();
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    formResetCallback() {
        this.options = this.options.map(option => ({
            ...option,
            checked: false
        }));
        this.updateFormValue();
    }
    formStateRestoreCallback(state) {
        if (state) {
            const selectedValues = state.split(',');
            this.options = this.options.map(option => ({
                ...option,
                checked: selectedValues.includes(option.value)
            }));
            this.updateFormValue();
        }
    }
    render() {
        return html `
      <div class="checkbox-group" role="group">
        ${this.options.map(option => html `
          <label class="checkbox-container ${this.disabled ? 'disabled' : ''}">
            <input
              type="checkbox"
              name="${this.name}"
              .checked=${option.checked || false}
              .value=${option.value}
              ?disabled=${this.disabled}
              @change=${(e) => this.handleChange(e, option)}
            >
            <span class="checkmark"></span>
            <span class="checkbox-label">${option.label}</span>
          </label>
        `)}
      </div>
      ${this.errorMessage ? html `
        <div class="error-message">${this.errorMessage}</div>
      ` : null}
    `;
    }
};
CheckboxList.formAssociated = true;
CheckboxList.styles = css `
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
  `;
__decorate([
    property({ type: Array })
], CheckboxList.prototype, "options", void 0);
__decorate([
    property({ type: String })
], CheckboxList.prototype, "name", void 0);
__decorate([
    property({ type: Boolean })
], CheckboxList.prototype, "required", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], CheckboxList.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], CheckboxList.prototype, "errorMessage", void 0);
CheckboxList = __decorate([
    customElement('otw-checkbox-list')
], CheckboxList);
export { CheckboxList };
