import{N as a}from"./RadioButtons-414a7f0e.js";import{a as l}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={title:"Atoms/RadioButtons",component:a,argTypes:{size:{type:"select",options:["small","medium"]}},parameters:{backgrounds:{default:"--color-background-xlight"}}},p={onInput:l("update:modelValue")},d=(s,{argTypes:r})=>({setup:()=>({args:s}),props:Object.keys(r),components:{N8nRadioButtons:a},template:`<n8n-radio-buttons v-model="val" v-bind="args" @update:modelValue="onInput">
        </n8n-radio-buttons>`,methods:p,data(){return{val:""}}}),t=d.bind({});t.args={options:[{label:"Test",value:"test"},{label:"World",value:"world"},{label:"Hello",value:"hello"}]};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nRadioButtons
  },
  template: \`<n8n-radio-buttons v-model="val" v-bind="args" @update:modelValue="onInput">
        </n8n-radio-buttons>\`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["Example"];export{t as Example,g as __namedExportsOrder,b as default};
//# sourceMappingURL=RadioButtons.stories-18ad0fb8.js.map
