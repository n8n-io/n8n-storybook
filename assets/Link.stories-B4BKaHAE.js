import{N as t}from"./Link-CtXf2-9y.js";import{a as p}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const h={title:"Atoms/Link",component:t,argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},a={onClick:p("click")},c=(r,{argTypes:i})=>({setup:()=>({args:r}),props:Object.keys(i),components:{N8nLink:t},template:'<n8n-link v-bind="args" @click="onClick">hello world</n8n-link>',methods:a}),n=c.bind({});n.args={href:"https://n8n.io/"};var o,e,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nLink
  },
  template: '<n8n-link v-bind="args" @click="onClick">hello world</n8n-link>',
  methods
})`,...(s=(e=n.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const y=["Link"];export{n as Link,y as __namedExportsOrder,h as default};
