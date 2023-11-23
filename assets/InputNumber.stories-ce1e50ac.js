import{N as n}from"./InputNumber-11f6d027.js";import{a as i}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./index-bf139a46.js";import"./constants-5bd8a862.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={title:"Atoms/Input Number",component:n,argTypes:{placeholder:{control:"text"},disabled:{control:{type:"boolean"}},controls:{control:{type:"boolean"}},precision:{control:{type:"number"}},min:{control:{type:"number"}},max:{control:{type:"number"}},step:{control:{type:"number"}},title:{control:"text"}},parameters:{backgrounds:{default:"--color-background-light"}}},u={onUpdateModelValue:i("update:modelValue")},c=(o,{argTypes:a})=>({setup:()=>({args:o}),props:Object.keys(a),components:{N8nInputNumber:n},template:'<n8n-input-number v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" />',data(){return{val:null}},methods:u}),e=c.bind({});e.args={placeholder:"placeholder...",controls:!1};const b=(o,{argTypes:a})=>({setup:()=>({args:o}),props:Object.keys(a),components:{N8nInputNumber:n},template:'<div> <n8n-input-number style="margin-bottom:10px" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" /> <n8n-input-number style="margin-bottom:10px" v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" /> <n8n-input-number style="margin-bottom:10px" v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" /> <n8n-input-number style="margin-bottom:10px" v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" /> </div>',methods:u,data(){return{val:""}}}),t=b.bind({});t.args={placeholder:"placeholder...",controls:!1};var r,l,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInputNumber
  },
  template: '<n8n-input-number v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" />',
  data() {
    return {
      val: null
    };
  },
  methods
})`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,s,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInputNumber
  },
  template: '<div> <n8n-input-number style="margin-bottom:10px" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" /> <n8n-input-number style="margin-bottom:10px" v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" /> <n8n-input-number style="margin-bottom:10px" v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" /> <n8n-input-number style="margin-bottom:10px" v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" /> </div>',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const _=["Input","Sizes"];export{e as Input,t as Sizes,_ as __namedExportsOrder,S as default};
//# sourceMappingURL=InputNumber.stories-ce1e50ac.js.map
