var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
// import styles from './styles/button-styles.module.css' with { type: 'css'};
import { buttonStyle } from "./styles/buttonstyle";
let AddColumn = class AddColumn extends LitElement {
    constructor() {
        super();
        console.log("swyrik");
    }
    addCol(e) {
        console.log(e);
    }
    render() {
        return html `
            <div class="add-col button">
                More Color
                <button @click=${this.addCol}>+</button>
            </div>
        `;
    }
};
AddColumn.styles = [buttonStyle];
AddColumn = __decorate([
    customElement("add-col")
], AddColumn);
export { AddColumn };
