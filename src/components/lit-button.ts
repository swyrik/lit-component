import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators';

@customElement('lit-button')
export class LitButton extends LitElement {

  handleClick() {
    console.log('Hello World');
  }

  override render() {
    return html` <button @click=${this.handleClick}>Click me!</button> `;
  }
}
