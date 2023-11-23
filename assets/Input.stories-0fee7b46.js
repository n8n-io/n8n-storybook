import{N as p}from"./Input-e2e8c4cc.js";import{N as U}from"./Icon-56e50434.js";import{a as d}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./uid-e2c8bb67.js";import"./index-bf139a46.js";import"./constants-5bd8a862.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Text-c7071bfc.js";const L={title:"Atoms/Input",component:p,argTypes:{type:{control:"select",options:["text","textarea","number","password","email"]},placeholder:{control:"text"},disabled:{control:{type:"boolean"}},size:{control:"select",options:["xlarge","large","medium","small","mini"]}},parameters:{backgrounds:{default:"--color-background-light"}}},r={onUpdateModelValue:d("update:modelValue"),onFocus:d("focus"),onChange:d("change")},T=(e,{argTypes:o})=>({setup:()=>({args:e}),props:Object.keys(o),components:{N8nInput:p},template:'<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />',data(){return{val:""}},methods:r}),a=T.bind({});a.args={placeholder:"placeholder..."};const I=(e,{argTypes:o})=>({setup:()=>({args:e}),props:Object.keys(o),components:{N8nInput:p},template:'<div class="multi-container"> <n8n-input size="xlarge" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> </div> ',methods:r,data(){return{val:""}}}),n=I.bind({});n.args={type:"text",placeholder:"placeholder..."};const t=I.bind({});t.args={type:"textarea",placeholder:"placeholder..."};const k=(e,{argTypes:o})=>({setup:()=>({args:e}),props:Object.keys(o),components:{N8nIcon:U,N8nInput:p},template:'<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="prefix" /></n8n-input>',data(){return{val:""}},methods:r}),s=k.bind({});s.args={placeholder:"placeholder..."};const z=(e,{argTypes:o})=>({setup:()=>({args:e}),props:Object.keys(o),components:{N8nIcon:U,N8nInput:p},template:'<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="suffix" /></n8n-input>',data(){return{val:""}},methods:r}),l=z.bind({});l.args={placeholder:"placeholder..."};var u,c,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInput
  },
  template: '<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" />',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,g,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInput
  },
  template: '<div class="multi-container"> <n8n-input size="xlarge" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> </div> ',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,V,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nInput
  },
  template: '<div class="multi-container"> <n8n-input size="xlarge" v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="medium" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" size="small" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> <n8n-input v-bind="args" v-model="val" size="mini" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus" /> </div> ',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(f=(V=t.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var b,x,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIcon,
    N8nInput
  },
  template: '<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="prefix" /></n8n-input>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var M,C,F;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIcon,
    N8nInput
  },
  template: '<n8n-input v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" @focus="onFocus"><n8n-icon icon="clock" slot="suffix" /></n8n-input>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Q=["Input","Text","TextArea","WithPrefixIcon","WithSuffixIcon"];export{a as Input,n as Text,t as TextArea,s as WithPrefixIcon,l as WithSuffixIcon,Q as __namedExportsOrder,L as default};
//# sourceMappingURL=Input.stories-0fee7b46.js.map
