import{N as d}from"./RadioButtons-V3mUcAtc.js";import{a as i}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const h={title:"Atoms/RadioButtons",component:d,argTypes:{size:{type:"select",options:["small","medium"]}},parameters:{backgrounds:{default:"--color-background-xlight"}}},c={onInput:i("update:modelValue")},p=(u,{argTypes:m})=>({setup:()=>({args:u}),props:Object.keys(m),components:{N8nRadioButtons:d},template:`<n8n-radio-buttons v-model="val" v-bind="args" @update:modelValue="onInput">
        </n8n-radio-buttons>`,methods:c,data(){return{val:""}}}),e=p.bind({});e.args={options:[{label:"Test",value:"test"},{label:"World",value:"world"},{label:"Hello",value:"hello"}]};const n=p.bind({});n.args={modelValue:"enabled",options:[{label:"Enabled",value:"enabled"},{label:"Disabled",value:"disabled",disabled:!0}]};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args, {
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
})`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,r,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args, {
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
})`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const k=["Example","Disabled"];export{n as Disabled,e as Example,k as __namedExportsOrder,h as default};
