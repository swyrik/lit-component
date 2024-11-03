import{i as o,r as e,x as t}from"./lit-element-Cjx9BPvc.js";import{t as r}from"./custom-element-CuiGoCVB.js";const n=o`
    .button {
        color: white;
        background-color: blue;
        border: none;
        padding: 10px 20px;
        font-size: ${24}px;
        cursor: pointer;
    }
`;var c=function(o,e,t,r){var n,c=arguments.length,l=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(n=o[s])&&(l=(c<3?n(l):c>3?n(e,t,l):n(e,t))||l);return c>3&&l&&Object.defineProperty(e,t,l),l};let l=class extends e{constructor(){super(),console.log("swyrik")}addCol(o){console.log(o)}render(){return t`
            <div class="add-col button">
                More Color
                <button @click=${this.addCol}>+</button>
            </div>
        `}};l.styles=[n],l=c([r("add-col")],l);export{l as AddColumn};
//# sourceMappingURL=add-column.js.map
