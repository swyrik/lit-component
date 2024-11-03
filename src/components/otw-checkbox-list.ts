import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface CheckboxOption {
  label: string;
  value: string;
  checked?: boolean;
}

@customElement('otw-checkbox-list')
export class CheckboxList extends LitElement {
  static formAssociated = true;

  static override styles = css`
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

  private internals: ElementInternals;

  @property({ type: Array }) options: CheckboxOption[] = [];
  @property({ type: String }) name = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) errorMessage = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  private handleChange(event: Event, option: CheckboxOption) {
    const checkbox = event.target as HTMLInputElement;
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

  private getSelectedValues(): string[] {
    return this.options
      .filter(option => option.checked)
      .map(option => option.value);
  }

  private updateFormValue() {
    const selectedValues = this.getSelectedValues();
    
    if (this.required && selectedValues.length === 0) {
      this.internals.setValidity(
        { valueMissing: true },
        this.errorMessage || 'Please select at least one option'
      );
      this.internals.setFormValue(null);
    } else {
      this.internals.setValidity({});
      this.internals.setFormValue(selectedValues.join(','));
    }
  }

  protected override firstUpdated() {
    this.updateFormValue();
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  formResetCallback() {
    this.options = this.options.map(option => ({
      ...option,
      checked: false
    }));
    this.updateFormValue();
  }

  formStateRestoreCallback(state: string) {
    if (state) {
      const selectedValues = state.split(',');
      this.options = this.options.map(option => ({
        ...option,
        checked: selectedValues.includes(option.value)
      }));
      this.updateFormValue();
    }
  }

  override render() {
    return html`
      <div class="checkbox-group" role="group">
        ${this.options.map(option => html`
          <label class="checkbox-container ${this.disabled ? 'disabled' : ''}">
            <input
              type="checkbox"
              name="${this.name}"
              .checked=${option.checked || false}
              .value=${option.value}
              ?disabled=${this.disabled}
              @change=${(e: Event) => this.handleChange(e, option)}
            >
            <span class="checkmark"></span>
            <span class="checkbox-label">${option.label}</span>
          </label>
        `)}
      </div>
      ${this.errorMessage ? html`
        <div class="error-message">${this.errorMessage}</div>
      ` : null}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'otw-checkbox-list': CheckboxList;
  }
}