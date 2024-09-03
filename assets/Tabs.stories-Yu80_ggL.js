import{N as o}from"./Tabs-C2dcErBX.js";import{a as l}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./v4-CQkTLCs1.js";const h={title:"Atoms/Tabs",component:o,argTypes:{},parameters:{backgrounds:{default:"--color-background-xlight"}}},p={onUpdateModelValue:l("update:modelValue")},d=(s,{argTypes:r})=>({setup:()=>({args:s}),props:Object.keys(r),components:{N8nTabs:o},template:`<n8n-tabs v-model="val" v-bind="args" @update:modelValue="onUpdateModelValue">
        </n8n-tabs>`,methods:p,data(){return{val:""}}}),e=d.bind({});e.args={options:[{label:"First",value:"first"},{label:"Second",value:"second"},{label:"Github",value:"github",href:"https://github.com/"},{label:"Settings",value:"settings",icon:"cog",align:"right"}]};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTabs
  },
  template: \`<n8n-tabs v-model="val" v-bind="args" @update:modelValue="onUpdateModelValue">
        </n8n-tabs>\`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const T=["Example"];export{e as Example,T as __namedExportsOrder,h as default};
