import{N as s}from"./ActionBox-DXiAt4yf.js";import{a as c}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Button-Du0lO7te.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Spinner-ChPi3gPv.js";import"./Heading-SURK61zY.js";import"./Callout-WjG9-cFi.js";import"./Tooltip-CJegQ77R.js";import"./index-sSNy8MTe.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./constants-B8P1jKxi.js";import"./v4-CQkTLCs1.js";const j={title:"Atoms/ActionBox",component:s,argTypes:{calloutTheme:{control:{type:"select"},options:["info","success","warning","danger","custom"]}},parameters:{backgrounds:{default:"--color-background-light"}}},a={onClick:c("click")},p=(i,{argTypes:r})=>({setup:()=>({args:i}),props:Object.keys(r),components:{N8nActionBox:s},template:'<n8n-action-box v-bind="args" @click="onClick" />',methods:a}),o=p.bind({});o.args={emoji:"😿",heading:"Headline you need to know",description:"Long description that you should know something is the way it is because of how it is. ",buttonText:"Do something"};var t,n,e;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nActionBox
  },
  template: '<n8n-action-box v-bind="args" @click="onClick" />',
  methods
})`,...(e=(n=o.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const C=["ActionBox"];export{o as ActionBox,C as __namedExportsOrder,j as default};
