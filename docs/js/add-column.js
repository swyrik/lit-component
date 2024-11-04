import{i as o,r as e,x as t}from"./lit-element-CiB-LLQB.js";import{t as r}from"./custom-element-CuiGoCVB.js";const n=o`
    .button {
        color: white;
        background-color: blue;
        border: none;
        padding: 10px 20px;
        font-size: ${24}px;
        cursor: pointer;
    }

    .button:focus-visible {
        outline: 1px solid rgba(0,0,0,0.1);
        outline-offset: 5px;
    }
`;var l=function(o,e,t,r){var n,l=arguments.length,c=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,t,r);else for(var s=o.length-1;s>=0;s--)(n=o[s])&&(c=(l<3?n(c):l>3?n(e,t,c):n(e,t))||c);return l>3&&c&&Object.defineProperty(e,t,c),c};let c=class extends e{constructor(){super(),console.log("swyrik")}addCol(o){console.log(o)}render(){return t`
            <div class="add-col button">
                More Color
                <button @click=${this.addCol}>+</button>
            </div>
        `}};c.styles=[n],c=l([r("add-col")],c);export{c as AddColumn};
//# sourceMappingURL=add-column.js.map
