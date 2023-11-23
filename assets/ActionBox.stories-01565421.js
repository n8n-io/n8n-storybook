import{N as n}from"./ActionBox-f5d5bb7a.js";import{a as c}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./Button-7453724f.js";import"./vue.esm-bundler-3aad6c04.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Spinner-ae3926a4.js";import"./Heading-ee299d22.js";import"./Callout-ba144999.js";const A={title:"Atoms/ActionBox",component:n,argTypes:{calloutTheme:{control:{type:"select"},options:["info","success","warning","danger","custom"]}},parameters:{backgrounds:{default:"--color-background-light"}}},a={onClick:c("click")},p=(i,{argTypes:r})=>({setup:()=>({args:i}),props:Object.keys(r),components:{N8nActionBox:n},template:'<n8n-action-box v-bind="args" @click="onClick" />',methods:a}),o=p.bind({});o.args={emoji:"😿",heading:"Headline you need to know",description:"Long description that you should know something is the way it is because of how it is. ",buttonText:"Do something"};var t,e,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
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
})`,...(s=(e=o.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const f=["ActionBox"];export{o as ActionBox,f as __namedExportsOrder,A as default};
//# sourceMappingURL=ActionBox.stories-01565421.js.map
