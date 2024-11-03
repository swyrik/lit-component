import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('otw-input-prefix')
export class InputPrefix extends LitElement {
  static formAssociated = true;

  static override styles = css`
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

  private internals: ElementInternals;

  @property({type: String}) name = '';
  @property({type: String}) value = '';
  @property({ type: String }) label = '';
  @property({type: Boolean, reflect: true}) disabled = false;
  @property({type: Boolean}) required = false;
  @property({type: String, attribute: true}) type = 'text';
  @property({type: String}) placeholder = '';
  @property({type: String}) unit = 'px';

  @state() touched = false;
  @state() errorMessage = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  private get inputValue() {
    return `${this.value}${this.unit}`;
  }

//   private get inputElement(): HTMLInputElement {
//     return this.renderRoot?.querySelector('input') as HTMLInputElement;
//   }

//   private get selectElement(): HTMLSelectElement {
//     return this.renderRoot?.querySelector('select') as HTMLSelectElement;
//   }

  private handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.touched = true;
    this.updateFormValue();
    
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.inputValue },
      bubbles: true,
      composed: true
    }));
  }

  private handleUnitChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this.unit = select.value;
    this.updateFormValue();
    
    this.dispatchEvent(new CustomEvent('change', {
      detail: { value: this.inputValue },
      bubbles: true,
      composed: true
    }));
  }

  private updateFormValue() {
    const isValid = this.checkValidity();
    
    if (isValid) {
      this.internals.setFormValue(this.inputValue);
      this.errorMessage = '';
    } else {
      this.internals.setFormValue(null);
    }
  }

  private checkValidity(): boolean {
    if (this.required && !this.value) {
      this.errorMessage = 'This field is required';
      this.internals.setValidity(
        { valueMissing: true },
        'This field is required'
      );
      return false;
    }

    // Add numerical validation if needed
    const numValue = parseFloat(this.value);
    if (this.value && isNaN(numValue)) {
      this.errorMessage = 'Please enter a valid number';
      this.internals.setValidity(
        { typeMismatch: true },
        'Please enter a valid number'
      );
      return false;
    }

    this.internals.setValidity({});
    return true;
  }

  protected override firstUpdated() {
    this.updateFormValue();
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  formResetCallback() {
    this.value = '';
    this.unit = 'px';
    this.touched = false;
    this.errorMessage = '';
    this.updateFormValue();
  }

  formStateRestoreCallback(state: string) {
    if (state) {
      const match = state.match(/^([\d.]+)(.+)$/);
      if (match) {
        this.value = match[1];
        this.unit = match[2];
        this.updateFormValue();
      }
    }
  }

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'otw-input-prefix': InputPrefix;
  }
}