import{N as i}from"./ActionToggle-2aa92a44.js";import{a as s}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-86b08e70.js";import"./index-4cb8128b.js";import"./index-ddeaf72e.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./index-a6727b26.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-87478f47.js";import"./use-form-item-4955f742.js";import"./_baseSet-3e5455a7.js";import"./_isIndex-af14b756.js";import"./index-f8748455.js";import"./index-2b9737a3.js";import"./error-78e43d3e.js";import"./dropdown-e1be88b6.js";const B={title:"Atoms/ActionToggle",component:i,argTypes:{placement:{type:"select",options:["top","top-end","top-start","bottom","bottom-end","bottom-start"]},size:{type:"select",options:["mini","small","medium"]}},parameters:{backgrounds:{default:"--color-background-light"}}},m={onAction:s("action")},a=(r,{argTypes:p})=>({setup:()=>({args:r}),props:Object.keys(p),components:{N8nActionToggle:i},template:`<div style="height:300px; width:300px; display:flex; align-items:center; justify-content:center">
            <n8n-action-toggle v-bind="args" @action="onAction" />
        </div>`,methods:m}),t=a.bind({});t.args={actions:[{label:"Go",value:"go"},{label:"Stop",value:"stop"}]};var o,e,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
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
})`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const C=["ActionToggle"];export{t as ActionToggle,C as __namedExportsOrder,B as default};
//# sourceMappingURL=ActionToggle.stories-34ba8839.js.map
