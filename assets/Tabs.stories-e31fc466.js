import{N as s}from"./Tabs-03364d7b.js";import{a as l}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={title:"Atoms/Tabs",component:s,argTypes:{},parameters:{backgrounds:{default:"--color-background-xlight"}}},p={onUpdateModelValue:l("update:modelValue")},m=(o,{argTypes:r})=>({setup:()=>({args:o}),props:Object.keys(r),components:{N8nTabs:s},template:`<n8n-tabs v-model="val" v-bind="args" @update:modelValue="onUpdateModelValue">
        </n8n-tabs>`,methods:p,data(){return{val:""}}}),e=m.bind({});e.args={options:[{label:"Test",value:"test"},{label:"Github",value:"github",href:"https://github.com/"},{label:"Settings",value:"settings",icon:"cog",align:"right"}]};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args, {
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
})`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const h=["Example"];export{e as Example,h as __namedExportsOrder,v as default};
//# sourceMappingURL=Tabs.stories-e31fc466.js.map
