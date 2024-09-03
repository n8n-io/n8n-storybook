import{N as o}from"./Text-DFJ1zlSw.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Atoms/Text",component:o,argTypes:{size:{control:{type:"select"},options:["xsmall","small","medium","large"]},color:{control:{type:"select"},options:["primary","text-dark","text-base","text-light","text-xlight","danger","success"]}}},p=(r,{argTypes:a})=>({setup:()=>({args:r}),props:Object.keys(a),components:{N8nText:o},template:'<n8n-text v-bind="args">hello world</n8n-text>'}),e=p.bind({});var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nText
  },
  template: '<n8n-text v-bind="args">hello world</n8n-text>'
})`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const i=["Text"];export{e as Text,i as __namedExportsOrder,x as default};
