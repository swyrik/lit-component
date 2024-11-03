var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
let OtwInput = class OtwInput extends LitElement {
    static get formAssociated() { return true; }
    constructor() {
        super();
        this.type = "text";
        this.value = "";
        this.internals = this.attachInternals();
    }
    updated(changedProperties) {
        if (changedProperties.has('value')) {
            this.internals.setFormValue(this.value.toString());
        }
        super.update(changedProperties);
    }
    // This method ensures the form can access the input's value
    handleInput(e) {
        const input = e.target;
        this.value = input.value;
        // Dispatch a custom event to inform the form of the change
        this.dispatchEvent(new CustomEvent('change', {
            detail: { name: this.label, value: this.value },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `<label for=${this.label}>${this.label}</label> <input .value=${this.value} name=${this.label} id=${this.label} type=${this.type} @change=${this.handleInput} />`;
    }
};
OtwInput.styles = css `
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
__decorate([
    property({ attribute: true })
], OtwInput.prototype, "label", void 0);
__decorate([
    property({ type: String, attribute: true })
], OtwInput.prototype, "type", void 0);
__decorate([
    property({ attribute: true })
], OtwInput.prototype, "value", void 0);
OtwInput = __decorate([
    customElement("otw-input")
], OtwInput);
export { OtwInput };
