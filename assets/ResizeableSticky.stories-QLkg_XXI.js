import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{_ as n}from"./ResizeableSticky-CGUQyj29.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./ResizeWrapper-V1iYg7VF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Sticky-yTg3QZ-s.js";import"./Input-C8h2vlZL.js";import"./uid-DwaQSI9h.js";import"./index-DfE3_O24.js";import"./constants-B8P1jKxi.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./index-D_I6V5Px.js";import"./style-BBe7QGW1.js";import"./index-7glOe3YB.js";import"./use-form-common-props-BTlxgw_X.js";import"./icon-CEt9g7ic.js";import"./typescript-Bp3YSIOJ.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-DhSYu2FI.js";import"./error-Cq9Fpw4b.js";import"./Markdown-CCO5iGuy.js";import"./index-BLj1J-hq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Loading-D7dM4JAo.js";import"./Text-DFJ1zlSw.js";import"./useI18n-BYVGpRei.js";import"./index-BDe0Wd28.js";const D={title:"Atoms/ResizeableSticky",component:n,argTypes:{content:{control:{control:"text"}},height:{control:{control:"number"}},minHeight:{control:{control:"number"}},minWidth:{control:{control:"number"}},readOnly:{control:{control:"Boolean"}},width:{control:{control:"number"}}}},p={onInput:t("update:modelValue"),onResize:t("resize"),onResizeEnd:t("resizeend"),onResizeStart:t("resizestart")},a=(s,{argTypes:m})=>({setup:()=>({args:s}),props:Object.keys(m),components:{N8nResizeableSticky:n},template:'<n8n-resizeable-sticky v-bind="args"  @resize="onResize" @resizeend="onResizeEnd" @resizeStart="onResizeStart" @input="onInput"></n8n-resizeable-sticky>',methods:p}),e=a.bind({});e.args={height:160,width:150,modelValue:`## I'm a note 
**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)`,minHeight:80,minWidth:150,readOnly:!1};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nResizeableSticky
  },
  template: '<n8n-resizeable-sticky v-bind="args"  @resize="onResize" @resizeend="onResizeEnd" @resizeStart="onResizeStart" @input="onInput"></n8n-resizeable-sticky>',
  methods
})`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const G=["ResizeableSticky"];export{e as ResizeableSticky,G as __namedExportsOrder,D as default};
