import{a as o}from"./chunk-AY7I2SME-c7b6cf8a.js";import{S as i}from"./Sticky-f9996837.js";import"./Input-e2e8c4cc.js";import"./vue.esm-bundler-3aad6c04.js";import"./uid-e2c8bb67.js";import"./index-bf139a46.js";import"./constants-5bd8a862.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Markdown-7dd2b9c4.js";import"./Loading-3935dca9.js";import"./_commonjsHelpers-de833af9.js";import"./ResizeWrapper-ad1cebcb.js";import"./Text-c7071bfc.js";import"./locale-6fa44ca8.js";import"./index-6a651def.js";const G={title:"Atoms/Sticky",component:i,argTypes:{content:{control:{control:"text"}},height:{control:{control:"number"}},minHeight:{control:{control:"number"}},minWidth:{control:{control:"number"}},readOnly:{control:{control:"Boolean"}},width:{control:{control:"number"}}}},p={onInput:o("update:modelValue"),onResize:o("resize"),onResizeEnd:o("resizeend"),onResizeStart:o("resizestart")},c=(s,{argTypes:m})=>({setup:()=>({args:s}),props:Object.keys(m),components:{N8nSticky:i},template:'<n8n-sticky v-bind="args"  @resize="onResize" @resizeend="onResizeEnd" @resizeStart="onResizeStart" @input="onInput"></n8n-sticky>',methods:p}),t=c.bind({});t.args={height:160,width:150,content:`## I'm a note 
**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)`,defaultText:`## I'm a note 
**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)`,minHeight:80,minWidth:150,readOnly:!1};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSticky
  },
  template: '<n8n-sticky v-bind="args"  @resize="onResize" @resizeend="onResizeEnd" @resizeStart="onResizeStart" @input="onInput"></n8n-sticky>',
  methods
})`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const H=["Sticky"];export{t as Sticky,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Sticky.stories-23faaf40.js.map
