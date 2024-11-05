import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import "./otw-input.js";
import { FormInput } from "./otw-input.js";

@customElement("otw-search-input")
export class SearchInput extends LitElement {

    static override styles = css`
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

    @query("otw-input") otwInput!: FormInput;
    initialOptions : {label: string, value: string}[] = [];
    @property({type: String}) otwInputWidth!: string;
    @property({ type: Boolean }) showList = false;
    @property({ type: String }) value = '';
    initialValue!: string;
    @property({type: Array}) options: {label: string, value: string}[] = [
        {
            label: "About",
            value: "about.page"
        },
        {
            label: "Home",
            value: "home.page"
        }
        ,{
            label: "Pricing",
            value: "Pricing.page"
        },
        {
            label: "Docs",
            value: "docs.page"
        }
    ];
    static formAssociated = true;
    private internals: ElementInternals;
    searchValue!: string;

    constructor(){
        super();
        this.initialOptions = this.options;
        this.internals = this.attachInternals();
        this.initialValue = this.value;
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        this.otwInputWidth = this.shadowRoot?.firstElementChild?.clientWidth+ 'px';
        this.otwInput.addEventListener("change", (e: Event) => {
            this.searchValue = (e as CustomEvent).detail.value;
            if(this.searchValue.length != 0) {
                this.options = this.initialOptions.filter(option => option.value.toLowerCase().includes(this.searchValue.toLowerCase()));
            } else {
                this.showList = true;
                this.options = this.initialOptions;
            }
        });

        this.otwInput.addEventListener("focus", (_e: Event) => {
            this.showList = true;
        });

        this.otwInput.addEventListener("blur", (_e: Event) => {
            this.showList = false;
        })
    }

    optionClick(e: MouseEvent) {
        const val = (e.target as HTMLLIElement).getAttribute("value");
        this.otwInput.value = val ? val : "";
        this.showList = false;
        this.internals.setFormValue(val);
    }

    formResetCallback(): void {
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


    override render() {
        return html`
            <div>
                <otw-input placeholder="pages"></otw-input>
                <ul ?hidden=${!this.showList} style="width: calc(${this.otwInputWidth} - 2px)">
                ${this.options.map(option => html`<li value=${option.value} @mousedown=${this.optionClick}>${option.value}</li>`)}
                </ul>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "otw-search-input": SearchInput
    }
}
