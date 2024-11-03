import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
// import styles from './styles/button-styles.module.css' with { type: 'css'};
import { buttonStyle } from "./styles/buttonstyle";


@customElement("add-col")
export class AddColumn extends LitElement {

    static override styles = [buttonStyle];
    
    constructor(){
        super();
        console.log("swyrik");
    }

    addCol(e :MouseEvent){
        console.log(e);
    }

    override render(){
        return html`
            <div class="add-col button">
                More Color
                <button @click=${this.addCol}>+</button>
            </div>
        `;
    }

}