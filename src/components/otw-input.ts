import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('otw-input')
export class FormInput extends LitElement {
  @property({type: String}) name = '';
  @property({type: String}) value = '';
  @property({type: String}) label = '';
  @property({type: String}) type = 'text';
  @property({type: Boolean}) required = false;
  @property({type: String}) placeholder = '';
  @property({type: Boolean}) disabled = false;

  // Define styles
  static override styles = css`
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
  static formAssociated = true;
  private internals: ElementInternals;
  #initialValue = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  // Called when the element is added to a form
  formAssociatedCallback(_form: HTMLFormElement) {
    // Do nothing
  }

  // Called when the element is disabled via form
  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
    this.requestUpdate();
  }

  // Called when form.reset() is called
  formResetCallback() {
    this.value = this.#initialValue;
    this.internals.setFormValue(this.#initialValue);
    this.requestUpdate();

    // Dispatch reset event
    this.dispatchEvent(
      new CustomEvent('rest', {
        detail: {value: this.#initialValue},
        bubbles: true,
        composed: true,
      })
    );
  }

  // Called after form state is restored (e.g., browser back/forward)
  formStateRestoreCallback(state: string, mode: string) {
    this.value = state || '';
    this.internals.setFormValue(this.value);

    console.log('Form state restored:', {
      state,
      mode, // 'restore' or 'autocomplete'
      value: this.value,
    });

    this.requestUpdate();
  }

  // Handle value changes
  #handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.internals.setFormValue(this.value);

    // Dispatch custom event
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {value: this.value},
        bubbles: true,
        composed: true,
      })
    );
  }

  // Validate the input
  checkValidity() {
    const input = this.renderRoot?.querySelector('input');
    
    this.dispatchEvent(
      new CustomEvent('blur', {
        bubbles: true,
        composed: true,
      })
    );


    if (input) {
      const isValid = input.checkValidity();
      this.internals.setValidity(
        input.validity,
        input.validationMessage,
        input
      );
      return isValid;
    }
    return true;
  }

  handleOnFocus(e: Event){
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(
      new CustomEvent('focus', {
        detail: {value: this.value},
        bubbles: true,
        composed: true,
      })
    );
  }

  // Lifecycle: when element is first connected
  override connectedCallback() {
    super.connectedCallback();
    this.#initialValue = this.value;
    this.internals.setFormValue(this.value);
  }

  override render() {
    return html`
      <div class="form-field">
        ${this.label ? html`<label for="input">${this.label}</label>` : null}
        <input
          id="input"
          .type=${this.type}
          .value=${this.value}
          .placeholder=${this.placeholder}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.#handleInput}
          @blur=${this.checkValidity}
          @focus=${this.handleOnFocus}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'otw-input': FormInput;
  }
}
