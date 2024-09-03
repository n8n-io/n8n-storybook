import{N as n}from"./ActionToggle-ByhIm0Sd.js";import{a as s}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BwcWkopo.js";import"./index-CtRVoKFK.js";import"./index-D_I6V5Px.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./constants-B8P1jKxi.js";import"./style-BBe7QGW1.js";import"./index-CMauXUsi.js";import"./index-_O1BgD2M.js";import"./get-DKi1M5QB.js";import"./_baseGet-CJvEpbeR.js";import"./index-sSNy8MTe.js";import"./use-form-common-props-BTlxgw_X.js";import"./_baseSet-BrV51Xo_.js";import"./_baseAssignValue-BjKO3dwM.js";import"./_isIndex-CSKNA-QO.js";import"./use-form-item-DhSYu2FI.js";import"./index-7glOe3YB.js";import"./icon-CEt9g7ic.js";import"./index-r5W6hzzQ.js";import"./index-BJ5l3qGL.js";import"./error-Cq9Fpw4b.js";import"./dropdown-DgpGeiLd.js";import"./v4-CQkTLCs1.js";const I={title:"Atoms/ActionToggle",component:n,argTypes:{placement:{type:"select",options:["top","top-end","top-start","bottom","bottom-end","bottom-start"]},size:{type:"select",options:["mini","small","medium"]}},parameters:{backgrounds:{default:"--color-background-light"}}},m={onAction:s("action")},a=(r,{argTypes:p})=>({setup:()=>({args:r}),props:Object.keys(p),components:{N8nActionToggle:n},template:`<div style="height:300px; width:300px; display:flex; align-items:center; justify-content:center">
            <n8n-action-toggle v-bind="args" @action="onAction" />
        </div>`,methods:m}),t=a.bind({});t.args={actions:[{label:"Go",value:"go"},{label:"Stop",value:"stop"}]};var o,e,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nActionToggle
  },
  template: \`<div style="height:300px; width:300px; display:flex; align-items:center; justify-content:center">
            <n8n-action-toggle v-bind="args" @action="onAction" />
        </div>\`,
  methods
})`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const J=["ActionToggle"];export{t as ActionToggle,J as __namedExportsOrder,I as default};
