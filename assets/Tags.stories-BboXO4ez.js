import{T as p}from"./Tags-B8dt9OgI.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Tag-ilb5YINd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Link-CtXf2-9y.js";import"./Text-DFJ1zlSw.js";import"./useI18n-BYVGpRei.js";import"./index-BDe0Wd28.js";const j={title:"Atoms/Tags",component:p,argTypes:{}},m=(c,{argTypes:i})=>({setup:()=>({args:c}),props:Object.keys(i),components:{N8nTags:p},template:'<n8n-tags v-bind="args"></n8n-tags>'}),a=m.bind({});a.args={tags:[{id:1,name:"very long tag name"},{id:2,name:"tag1"},{id:3,name:"tag2 yo"}]};const n=m.bind({});n.args={truncate:!0,tags:[{id:1,name:"very long tag name"},{id:2,name:"tag1"},{id:3,name:"tag2 yo"},{id:4,name:"tag3"},{id:5,name:"tag4"}]};var s,e,t;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTags
  },
  template: '<n8n-tags v-bind="args"></n8n-tags>'
})`,...(t=(e=a.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};var r,o,g;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTags
  },
  template: '<n8n-tags v-bind="args"></n8n-tags>'
})`,...(g=(o=n.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};const k=["Tags","Truncated"];export{a as Tags,n as Truncated,k as __namedExportsOrder,j as default};
