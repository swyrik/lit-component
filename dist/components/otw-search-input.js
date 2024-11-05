var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import "./otw-input.js";
let SearchInput = class SearchInput extends LitElement {
    constructor() {
        super();
        this.initialOptions = [];
        this.showList = false;
        this.value = '';
        this.options = [
            {
                label: "About",
                value: "about.page"
            },
            {
                label: "Home",
                value: "home.page"
            },
            {
                label: "Pricing",
                value: "Pricing.page"
            },
            {
                label: "Docs",
                value: "docs.page"
            }
        ];
        this.initialOptions = this.options;
        this.internals = this.attachInternals();
        this.initialValue = this.value;
    }
    firstUpdated(_changedProperties) {
        this.otwInputWidth = this.shadowRoot?.firstElementChild?.clientWidth + 'px';
        this.otwInput.addEventListener("change", (e) => {
            this.searchValue = e.detail.value;
            if (this.searchValue.length != 0) {
                this.options = this.initialOptions.filter(option => option.value.toLowerCase().includes(this.searchValue.toLowerCase()));
            }
            else {
                this.showList = true;
                this.options = this.initialOptions;
            }
        });
        this.otwInput.addEventListener("focus", (_e) => {
            this.showList = true;
        });
        this.otwInput.addEventListener("blur", (_e) => {
            this.showList = false;
        });
    }
    liClick(e) {
        const val = e.target.getAttribute("value");
        this.otwInput.value = val ? val : "";
        this.showList = false;
        this.internals.setFormValue(val);
    }
    formResetCallback() {
        this.value = this.initialValue;
        this.otwInput.value = this.value;
        this.internals.setFormValue(this.initialValue);
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('input-search-reset', {
            detail: { value: this.initialValue },
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html `
            <div>
                <otw-input placeholder="pages"></otw-input>
                <ul ?hidden=${!this.showList} style="width: calc(${this.otwInputWidth} - 2px)">
                ${this.options.map(option => html `<li value=${option.value} @mousedown=${this.liClick}>${option.value}</li>`)}
                </ul>
            </div>
        `;
    }
};
SearchInput.styles = css `
        ul{
            list-style: none;
            margin: 0px;
            padding: 0px;
            position: absolute;
            max-height: 100px;
            overflow-y: scroll;
            border-radius: 4px;
            border: 1px solid rgba(0,0,0,0.1);
            z-index: 20;
            margin-top: 4px;
            box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
        }

        li {
            padding: 10px;
            border: 4px;
            cursor: pointer;
        }
        li:hover {
            background-color: #f7f7f7;
        }
    `;
SearchInput.formAssociated = true;
__decorate([
    query("otw-input")
], SearchInput.prototype, "otwInput", void 0);
__decorate([
    property({ type: String })
], SearchInput.prototype, "otwInputWidth", void 0);
__decorate([
    property({ type: Boolean })
], SearchInput.prototype, "showList", void 0);
__decorate([
    property({ type: String })
], SearchInput.prototype, "value", void 0);
__decorate([
    property({ type: Array })
], SearchInput.prototype, "options", void 0);
SearchInput = __decorate([
    customElement("otw-search-input")
], SearchInput);
export { SearchInput };
