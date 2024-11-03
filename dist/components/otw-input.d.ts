import { LitElement, PropertyValues } from 'lit';
export declare class OtwInput extends LitElement {
    static styles: import("lit").CSSResult;
    static get formAssociated(): boolean;
    internals: ElementInternals;
    constructor();
    protected updated(changedProperties: PropertyValues): void;
    label: String;
    type: String;
    value: String;
    private handleInput;
    render(): import("lit-html").TemplateResult<1>;
}
//# sourceMappingURL=otw-input.d.ts.map