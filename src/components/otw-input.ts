import {LitElement, html, css, PropertyValues } from 'lit';
import {property, customElement}  from 'lit/decorators.js';

@customElement("otw-input")
export class OtwInput extends LitElement {
  
  static override styles = css`
      input {
        width: 100%;
        height: 2em;
        border: 1px solid rgba(0,0,0,0.1);
      border-radius: 4px;
      }
      
      label {
        font-size: 1em;
        font-family: verdana;
        margin-bottom: 1em;
      }
      
      input:hover {
        border: 1px solid rgba(0,0,0,0.4);
      }
      
      `;

  static get formAssociated() { return true;}

  internals: ElementInternals;

  constructor(){
    super();
    this.internals = this.attachInternals();
  }

  protected override updated(changedProperties: PropertyValues): void {
      if(changedProperties.has('value')) {
        this.internals.setFormValue(this.value.toString());
      }
      super.update(changedProperties);

  }

  
  
  @property({attribute: true})
  label!: String;
  
  @property({type: String, attribute: true})
  type: String = "text";

  @property({attribute: true})
  value: String = "";

  // This method ensures the form can access the input's value
  private handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    // Dispatch a custom event to inform the form of the change
    this.dispatchEvent(new CustomEvent('change', {
      detail: { name: this.label, value: this.value },
      bubbles: true,
      composed: true
    }));
  }
  


  
  override render() {
    return html`<label for=${this.label}>${this.label}</label> <input .value=${this.value} name=${this.label} id=${this.label} type=${this.type} @change=${this.handleInput} />`;
  }
  
}