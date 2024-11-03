import { LitElement } from 'lit';
interface CheckboxOption {
    label: string;
    value: string;
    checked?: boolean;
}
export declare class CheckboxList extends LitElement {
    static formAssociated: boolean;
    static styles: import("lit").CSSResult;
    private internals;
    options: CheckboxOption[];
    name: string;
    required: boolean;
    disabled: boolean;
    errorMessage: string;
    constructor();
    private handleChange;
    private getSelectedValues;
    private updateFormValue;
    protected firstUpdated(): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'otw-checkbox-list': CheckboxList;
    }
}
export {};
//# sourceMappingURL=otw-checkbox-list.d.ts.map