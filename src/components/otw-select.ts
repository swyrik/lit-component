import { LitElement, html, css, TemplateResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SelectOption, SelectOptions, OptionGroup } from './types/types';

@customElement('otw-select')
export class SelectInput extends LitElement {

    static override styles = css`
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

  @property({ type: String }) name = '';
  @property({ type: String }) value = '';
  @property({ type: String }) label = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) multiple = false;
  @property({ type: Number }) size = 1;
  @property({ 
    type: Array,
    converter: {
      fromAttribute: (value: string): SelectOptions => {
        try {
          return JSON.parse(value);
        } catch {
          return [];
        }
      },
      toAttribute: (value: SelectOptions): string => {
        try {
          return JSON.stringify(value);
        } catch {
          return '[]';
        }
      }
    }
  }) options: SelectOptions = [];

  static formAssociated = true;
  private internals: ElementInternals;
  #initialValue = '';

  constructor() {
    super();
    this.internals = this.attachInternals();
  }

  formAssociatedCallback(form: HTMLFormElement): void {
    console.log('Associated with form:', form);
  }

  formDisabledCallback(disabled: boolean): void {
    this.disabled = disabled;
    this.requestUpdate();
  }

  formResetCallback(): void {
    this.value = this.#initialValue;
    this.internals.setFormValue(this.#initialValue);
    this.requestUpdate();
    
    this.dispatchEvent(new CustomEvent('select-input-reset', {
      detail: { value: this.#initialValue },
      bubbles: true,
      composed: true
    }));
  }

  formStateRestoreCallback(state: string | null, _mode: 'restore' | 'autocomplete'): void {
    this.value = state || this.#initialValue;
    this.internals.setFormValue(this.value);
    this.requestUpdate();
  }

  #handleChange(e: Event): void {
    const select = e.target as HTMLSelectElement;
    if (this.multiple) {
      const selectedOptions = Array.from(select.selectedOptions);
      this.value = selectedOptions.map(opt => opt.value).join(',');
    } else {
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
  }

  #isSelected(optionValue: string): boolean {
    if (this.multiple) {
      return this.value.split(',').includes(optionValue);
    }
    return this.value === optionValue;
  }

  #isOptionGroup(item: SelectOption | OptionGroup): item is OptionGroup {
    return 'options' in item;
  }

  renderSelectOptions(items: SelectOptions) : TemplateResult<1>[] {
    return items.map(item => {
      if (this.#isOptionGroup(item)) {
        return html`
          <optgroup 
            label=${item.label}
            ?disabled=${item.disabled}
          >
            ${this.renderSelectOptions(item.options)}
          </optgroup>
        `;
      } else {
        return html`
          <option
            value=${item.value}
            ?disabled=${item.disabled}
            ?selected=${this.#isSelected(item.value)}
          >
            ${item.label}
          </option>
        `;
      }
    });
  }

  checkValidity(): boolean {
    const select = this.renderRoot?.querySelector('select');
    if (select) {
      const isValid = select.checkValidity();
      this.internals.setValidity(
        select.validity,
        select.validationMessage,
        select
      );
      return isValid;
    }
    return true;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.#initialValue = this.value;
  }

  override render() {
    return html`
      <div class="select-field">
        ${this.label 
          ? html`<label for="select-input">${this.label}</label>` 
          : null}
        <div class="select-wrapper">
          <select
            id="select-input"
            .value=${this.value}
            ?required=${this.required}
            ?disabled=${this.disabled}
            ?multiple=${this.multiple}
            .size=${this.size}
            @change=${this.#handleChange}
            @blur=${this.checkValidity}
          >
            ${this.renderSelectOptions(this.options)}
          </select>
        </div>
      </div>
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'otw-select': SelectInput;
    }
  }