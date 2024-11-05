import{i as t,r as i,x as e}from"./lit-element-CiB-LLQB.js";import{t as s}from"./custom-element-CuiGoCVB.js";import{n as o}from"./property-B06GLbQC.js";import"./otw-input.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r=function(t,i,e,s){var o,r=arguments.length,l=r<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,i,e,s);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(l=(r<3?o(l):r>3?o(i,e,l):o(i,e))||l);return r>3&&l&&Object.defineProperty(i,e,l),l};let l=class extends i{constructor(){super(),this.initialOptions=[],this.showList=!1,this.value="",this.options=[{label:"About",value:"about.page"},{label:"Home",value:"home.page"},{label:"Pricing",value:"Pricing.page"},{label:"Docs",value:"docs.page"}],this.initialOptions=this.options,this.internals=this.attachInternals(),this.initialValue=this.value}firstUpdated(t){this.otwInputWidth=this.shadowRoot?.firstElementChild?.clientWidth+"px",this.otwInput.addEventListener("change",(t=>{this.searchValue=t.detail.value,0!=this.searchValue.length?this.options=this.initialOptions.filter((t=>t.value.toLowerCase().includes(this.searchValue.toLowerCase()))):(this.showList=!0,this.options=this.initialOptions)})),this.otwInput.addEventListener("focus",(t=>{this.showList=!0})),this.otwInput.addEventListener("blur",(t=>{this.showList=!1}))}liClick(t){const i=t.target.getAttribute("value");this.otwInput.value=i||"",this.showList=!1,this.internals.setFormValue(i)}formResetCallback(){this.value=this.initialValue,this.otwInput.value=this.value,this.internals.setFormValue(this.initialValue),this.requestUpdate(),this.dispatchEvent(new CustomEvent("input-search-reset",{detail:{value:this.initialValue},bubbles:!0,composed:!0}))}render(){return e`
            <div>
                <otw-input placeholder="pages"></otw-input>
                <ul ?hidden=${!this.showList} style="width: calc(${this.otwInputWidth} - 2px)">
                ${this.options.map((t=>e`<li value=${t.value} @mousedown=${this.liClick}>${t.value}</li>`))}
                </ul>
            </div>
        `}};l.styles=t`
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
    `,l.formAssociated=!0,r([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t){return(i,e,s)=>((t,i,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&"object"!=typeof i&&Object.defineProperty(t,i,e),e))(i,e,{get(){return(i=>i.renderRoot?.querySelector(t)??null)(this)}})}("otw-input")],l.prototype,"otwInput",void 0),r([o({type:String})],l.prototype,"otwInputWidth",void 0),r([o({type:Boolean})],l.prototype,"showList",void 0),r([o({type:String})],l.prototype,"value",void 0),r([o({type:Array})],l.prototype,"options",void 0),l=r([s("otw-search-input")],l);export{l as SearchInput};
//# sourceMappingURL=otw-search-input.js.map
