import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('otw-toggle')
export class OtwToggle extends LitElement {
  static formAssociated = true;

  static override styles = css`
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

  private internals: ElementInternals;

  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) name = '';
  @property({ type: String }) value = 'on';
  @property({ type: String }) label = '';
  @property({ type: Boolean }) required = false;
  @property({ type: String }) errorMessage = '';

  @state() private validationMessage = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  private getClasses() {
    return {
      'toggle': true,
      'checked': this.checked,
      'disabled': this.disabled
    };
  }

  protected override willUpdate(changedProperties: Map<PropertyKey, unknown>) {
    if (changedProperties.has('checked')) {
      this.updateFormValue();
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.updateFormValue();
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  formResetCallback() {
    this.checked = false;
    this.updateFormValue();
  }

  formStateRestoreCallback(state: unknown) {
    this.checked = state === this.value;
    this.updateFormValue();
  }

  private updateFormValue(): void {
    const value = this.checked ? this.value : "off";
    this.internals.setFormValue(value);
    
    if (this.required && !this.checked) {
      this.validationMessage = this.errorMessage || 'This field is required';
      this.internals.setValidity(
        { valueMissing: true },
        this.validationMessage
      );
    } else {
      this.validationMessage = '';
      this.internals.setValidity({});
    }
  }

  private handleToggle(_e: Event): void {
    if (this.disabled) return;

    this.checked = !this.checked;
    this.updateFormValue();

    this.dispatchEvent(new CustomEvent('change', {
      detail: { checked: this.checked },
      bubbles: true,
      composed: true
    }));
  }

  private handleKeyDown(e: KeyboardEvent): void {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      this.handleToggle(e);
    }
  }

  protected override render() {
    return html`
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
          ? html`
              <label class="label">
                ${this.label}
                ${this.required ? html`<span class="required">*</span>` : null}
              </label>
            ` 
          : null}
      </div>
      ${this.validationMessage 
        ? html`<div class="error-message">${this.validationMessage}</div>` 
        : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'otw-toggle': OtwToggle;
  }
}