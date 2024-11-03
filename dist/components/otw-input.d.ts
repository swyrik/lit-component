import { LitElement } from 'lit';
export declare class FormInput extends LitElement {
    #private;
    name: string;
    value: string;
    label: string;
    type: string;
    required: boolean;
    placeholder: string;
    disabled: boolean;
    static styles: import("lit").CSSResult;
    static formAssociated: boolean;
    private internals;
    constructor();
    formAssociatedCallback(_form: HTMLFormElement): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string, mode: string): void;
    checkValidity(): boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'otw-input': FormInput;
    }
}
//# sourceMappingURL=otw-input.d.ts.map