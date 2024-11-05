import { LitElement, TemplateResult } from 'lit';
import { SelectOptions } from './types/types';
export declare class SelectInput extends LitElement {
    #private;
    static styles: import("lit").CSSResult;
    name: string;
    value: string;
    label: string;
    required: boolean;
    disabled: boolean;
    multiple: boolean;
    size: number;
    options: SelectOptions;
    static formAssociated: boolean;
    private internals;
    constructor();
    formAssociatedCallback(form: HTMLFormElement): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: string | null, _mode: 'restore' | 'autocomplete'): void;
    renderSelectOptions(items: SelectOptions): TemplateResult<1>[];
    checkValidity(): boolean;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'otw-select': SelectInput;
    }
}
//# sourceMappingURL=otw-select.d.ts.map