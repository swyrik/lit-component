import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("add-col")
export class AddColumn extends LitElement {
    
    constructor(){
        super();
    }

    addCol(e :MouseEvent){
        console.log(e);
    }

    override render(){
        return html`
            <div class="add-col">
                <button @click=${this.addCol}>+</button>
            </div>
        `;
    }

}