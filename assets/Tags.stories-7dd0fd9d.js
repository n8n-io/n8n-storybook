import{T as p}from"./Tags-2db9ae63.js";import"./Tag-c02fc8b4.js";import"./vue.esm-bundler-3aad6c04.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Link-6832d0b5.js";import"./Text-c7071bfc.js";import"./locale-6fa44ca8.js";import"./index-6a651def.js";const j={title:"Atoms/Tags",component:p,argTypes:{}},m=(c,{argTypes:i})=>({setup:()=>({args:c}),props:Object.keys(i),components:{N8nTags:p},template:'<n8n-tags v-bind="args"></n8n-tags>'}),a=m.bind({});a.args={tags:[{id:1,name:"very long tag name"},{id:2,name:"tag1"},{id:3,name:"tag2 yo"}]};const s=m.bind({});s.args={truncate:!0,tags:[{id:1,name:"very long tag name"},{id:2,name:"tag1"},{id:3,name:"tag2 yo"},{id:4,name:"tag3"},{id:5,name:"tag4"}]};var e,t,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
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
})`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var n,o,g;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`(args, {
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
})`,...(g=(o=s.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};const k=["Tags","Truncated"];export{a as Tags,s as Truncated,k as __namedExportsOrder,j as default};
//# sourceMappingURL=Tags.stories-7dd0fd9d.js.map
