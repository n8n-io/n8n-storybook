import{N as n}from"./FormInput-b07dd7d7.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./Input-e2e8c4cc.js";import"./uid-e2c8bb67.js";import"./index-bf139a46.js";import"./constants-5bd8a862.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Option-19347590.js";import"./index-02e7f3ca.js";import"./index-87478f47.js";import"./index-2b9737a3.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-a6727b26.js";import"./isEqual-d33d3be5.js";import"./_isIndex-af14b756.js";import"./index-5bb75181.js";import"./InputLabel-73a3a6f4.js";import"./Text-c7071bfc.js";import"./Tooltip-39565189.js";import"./Button-7453724f.js";import"./Icon-56e50434.js";import"./Spinner-ae3926a4.js";import"./Checkbox-2b7c76c5.js";import"./_baseSet-3e5455a7.js";import"./index-6a651def.js";const K={title:"Modules/FormInput",component:n,argTypes:{}},i={onUpdateModelValue:t("update:modelValue"),onFocus:t("focus"),onChange:t("change")},s=(m,{argTypes:a})=>({setup:()=>({args:m}),props:Object.keys(a),components:{N8nFormInput:n},template:`
        <n8n-form-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />
    `,methods:i,data(){return{val:""}}}),o=s.bind({});o.args={label:"Label",placeholder:"placeholder"};var r,e,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nFormInput
  },
  template: \`
        <n8n-form-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />
    \`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(p=(e=o.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const P=["FormInput"];export{o as FormInput,P as __namedExportsOrder,K as default};
//# sourceMappingURL=FormInput.stories-5f7b250d.js.map
