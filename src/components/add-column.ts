import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from './styles/button-styles.css';

@customElement("add-col")
export class AddColumn extends LitElement {

    static override styles = [unsafeCSS(styles)];
    
    constructor(){
        super();
    }

    addCol(e :MouseEvent){
        console.log(e);
    }

    override render(){
        return html`
            <div class="add-col button">
                <button @click=${this.addCol}>+</button>
            </div>
        `;
    }

}