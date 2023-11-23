import{N as a}from"./UserSelect-b3ddefe6.js";import{a as r}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./UserInfo-4fb26edc.js";import"./Text-c7071bfc.js";import"./vue.esm-bundler-3aad6c04.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Avatar-25c3c726.js";import"./Badge-baf26272.js";import"./locale-6fa44ca8.js";import"./index-6a651def.js";import"./Option-19347590.js";import"./index-02e7f3ca.js";import"./constants-5bd8a862.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./index-87478f47.js";import"./index-bf139a46.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./index-2b9737a3.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-a6727b26.js";import"./isEqual-d33d3be5.js";import"./_isIndex-af14b756.js";import"./index-5bb75181.js";const A={title:"Modules/UserSelect",component:a,argTypes:{},parameters:{backgrounds:{default:"--color-background-light"}}},n={onChange:r("change"),onBlur:r("blur"),onFocus:r("focus")},p=(i,{argTypes:m})=>({setup:()=>({args:i}),props:Object.keys(m),components:{N8nUserSelect:a},template:'<n8n-user-select v-bind="args" v-model="val" @change="onChange" @blur="onBlur" @focus="onFocus" />',methods:n,data(){return{val:""}}}),e=p.bind({});e.args={users:[{id:"1",firstName:"Sunny",lastName:"Side",email:"sunny@n8n.io"},{id:"2",firstName:"Kobi",lastName:"Dog",email:"kobi@n8n.io"},{id:"3",email:"invited@n8n.io"}],placeholder:"Select user to transfer to",currentUserId:"1"};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nUserSelect
  },
  template: '<n8n-user-select v-bind="args" v-model="val" @change="onChange" @blur="onBlur" @focus="onFocus" />',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const G=["UserSelect"];export{e as UserSelect,G as __namedExportsOrder,A as default};
//# sourceMappingURL=UserSelect.stories-d3e1f4fd.js.map
