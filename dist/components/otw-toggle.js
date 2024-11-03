var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
let OtwToggle = class OtwToggle extends LitElement {
    constructor() {
        super();
        this.checked = false;
        this.disabled = false;
        this.name = '';
        this.value = 'on';
        this.label = '';
        this.required = false;
        this.errorMessage = '';
        this.validationMessage = '';
        this.internals = this.attachInternals();
    }
    getClasses() {
        return {
            'toggle': true,
            'checked': this.checked,
            'disabled': this.disabled
        };
    }
    willUpdate(changedProperties) {
        if (changedProperties.has('checked')) {
            this.updateFormValue();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateFormValue();
    }
    formDisabledCallback(disabled) {
        this.disabled = disabled;
    }
    formResetCallback() {
        this.checked = false;
        this.updateFormValue();
    }
    formStateRestoreCallback(state) {
        this.checked = state === this.value;
        this.updateFormValue();
    }
    updateFormValue() {
        const value = this.checked ? this.value : "off";
        this.internals.setFormValue(value);
        if (this.required && !this.checked) {
            this.validationMessage = this.errorMessage || 'This field is required';
            this.internals.setValidity({ valueMissing: true }, this.validationMessage);
        }
        else {
            this.validationMessage = '';
            this.internals.setValidity({});
        }
    }
    handleToggle(_e) {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.updateFormValue();
        this.dispatchEvent(new CustomEvent('change', {
            detail: { checked: this.checked },
            bubbles: true,
            composed: true
        }));
    }
    handleKeyDown(e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            this.handleToggle(e);
        }
    }
    render() {
        return html `
      <div class="toggle-wrapper">
        <div 
          class=${classMap(this.getClasses())}
          role="switch"
          aria-checked="${this.checked}"
          aria-disabled="${this.disabled}"
          tabindex="${this.disabled ? -1 : 0}"
          @click=${this.handleToggle}
          @keydown=${this.handleKeyDown}
        >
          <div class="toggle-thumb"></div>
        </div>
        ${this.label
            ? html `
              <label class="label">
                ${this.label}
                ${this.required ? html `<span class="required">*</span>` : null}
              </label>
            `
            : null}
      </div>
      ${this.validationMessage
            ? html `<div class="error-message">${this.validationMessage}</div>`
            : null}
    `;
    }
};
OtwToggle.formAssociated = true;
OtwToggle.styles = css `
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
  `;
__decorate([
    property({ type: Boolean })
], OtwToggle.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], OtwToggle.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], OtwToggle.prototype, "name", void 0);
__decorate([
    property({ type: String })
], OtwToggle.prototype, "value", void 0);
__decorate([
    property({ type: String })
], OtwToggle.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], OtwToggle.prototype, "required", void 0);
__decorate([
    property({ type: String })
], OtwToggle.prototype, "errorMessage", void 0);
__decorate([
    state()
], OtwToggle.prototype, "validationMessage", void 0);
OtwToggle = __decorate([
    customElement('otw-toggle')
], OtwToggle);
export { OtwToggle };
