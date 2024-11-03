import { LitElement } from 'lit';
export declare class InputPrefix extends LitElement {
    static formAssociated: boolean;
    static styles: import("lit").CSSResult;
    private internals;
    name: string;
    value: string;
    label: string;
    disabled: boolean;
    required: boolean;
    type: string;
    placeholder: string;
    unit: string;
    touched: boolean;
    errorMessage: string;
    constructor();
    private get inputValue();
    private handleInput;
    private handleUnitChange;
    private updateFormValue;
    private checkValidity;
    protected firstUpdated(): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'otw-input-prefix': InputPrefix;
    }
}
//# sourceMappingURL=otw-input-prefix.d.ts.map