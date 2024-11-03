import { LitElement } from 'lit';
export declare class OtwToggle extends LitElement {
    static formAssociated: boolean;
    static styles: import("lit").CSSResult;
    private internals;
    checked: boolean;
    disabled: boolean;
    name: string;
    value: string;
    label: string;
    required: boolean;
    errorMessage: string;
    private validationMessage;
    constructor();
    private getClasses;
    protected willUpdate(changedProperties: Map<PropertyKey, unknown>): void;
    connectedCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: unknown): void;
    private updateFormValue;
    private handleToggle;
    private handleKeyDown;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'otw-toggle': OtwToggle;
    }
}
//# sourceMappingURL=otw-toggle.d.ts.map