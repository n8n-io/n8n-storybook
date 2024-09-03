import{a as o}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as i}from"./Sticky-yTg3QZ-s.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Input-C8h2vlZL.js";import"./uid-DwaQSI9h.js";import"./index-DfE3_O24.js";import"./constants-B8P1jKxi.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./index-D_I6V5Px.js";import"./style-BBe7QGW1.js";import"./index-7glOe3YB.js";import"./use-form-common-props-BTlxgw_X.js";import"./icon-CEt9g7ic.js";import"./typescript-Bp3YSIOJ.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-DhSYu2FI.js";import"./error-Cq9Fpw4b.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Markdown-CCO5iGuy.js";import"./index-BLj1J-hq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Loading-D7dM4JAo.js";import"./Text-DFJ1zlSw.js";import"./useI18n-BYVGpRei.js";import"./index-BDe0Wd28.js";const A={title:"Atoms/Sticky",component:i,argTypes:{content:{control:{control:"text"}},height:{control:{control:"number"}},minHeight:{control:{control:"number"}},minWidth:{control:{control:"number"}},readOnly:{control:{control:"Boolean"}},width:{control:{control:"number"}}}},p={onInput:o("update:modelValue"),onResize:o("resize"),onResizeEnd:o("resizeend"),onResizeStart:o("resizestart")},c=(s,{argTypes:m})=>({setup:()=>({args:s}),props:Object.keys(m),components:{N8nSticky:i},template:'<n8n-sticky v-bind="args"  @resize="onResize" @resizeend="onResizeEnd" @resizeStart="onResizeStart" @input="onInput"></n8n-sticky>',methods:p}),t=c.bind({});t.args={height:160,width:150,modelValue:`## I'm a note 
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
})`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const B=["Sticky"];export{t as Sticky,B as __namedExportsOrder,A as default};
