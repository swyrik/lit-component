import { LitElement, PropertyValues } from "lit";
import "./otw-input.js";
import { FormInput } from "./otw-input.js";
export declare class SearchInput extends LitElement {
    static styles: import("lit").CSSResult;
    otwInput: FormInput;
    initialOptions: {
        label: string;
        value: string;
    }[];
    otwInputWidth: string;
    showList: boolean;
    value: string;
    initialValue: string;
    options: {
        label: string;
        value: string;
    }[];
    static formAssociated: boolean;
    private internals;
    searchValue: string;
    constructor();
    protected firstUpdated(_changedProperties: PropertyValues): void;
    liClick(e: MouseEvent): void;
    formResetCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "otw-search-input": SearchInput;
    }
}
//# sourceMappingURL=otw-search-input.d.ts.map