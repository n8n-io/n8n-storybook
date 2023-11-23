import{N as p}from"./FormBox-9e48575d.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./FormInputs-7ad4e67f.js";import"./FormInput-b07dd7d7.js";import"./Input-e2e8c4cc.js";import"./uid-e2c8bb67.js";import"./index-bf139a46.js";import"./constants-5bd8a862.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Option-19347590.js";import"./index-02e7f3ca.js";import"./index-87478f47.js";import"./index-2b9737a3.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-a6727b26.js";import"./isEqual-d33d3be5.js";import"./_isIndex-af14b756.js";import"./index-5bb75181.js";import"./InputLabel-73a3a6f4.js";import"./Text-c7071bfc.js";import"./Tooltip-39565189.js";import"./Button-7453724f.js";import"./Icon-56e50434.js";import"./Spinner-ae3926a4.js";import"./Checkbox-2b7c76c5.js";import"./_baseSet-3e5455a7.js";import"./index-6a651def.js";import"./event-bus-f500010e.js";import"./Heading-ee299d22.js";import"./Link-6832d0b5.js";const Q={title:"Modules/FormBox",component:p,argTypes:{},parameters:{backgrounds:{default:"--color-background-light"}}},s={onSubmit:t("submit"),onChange:t("update")},n=(i,{argTypes:a})=>({setup:()=>({args:i}),props:Object.keys(a),components:{N8nFormBox:p},template:'<n8n-form-box v-bind="args" @submit="onSubmit" @update="onUpdate" />',methods:s}),o=n.bind({});o.args={title:"Form title",inputs:[{name:"email",properties:{label:"Your Email",type:"email",required:!0,validationRules:[{name:"VALID_EMAIL"}]}},{name:"message",properties:{label:"Please contact someone someday.",type:"text"}},{name:"password",properties:{label:"Your Password",type:"password",required:!0,validationRules:[{name:"DEFAULT_PASSWORD_RULES"}]}},{name:"nickname",properties:{label:"Your Nickname",placeholder:"Monty"}}],buttonText:"Action",redirectText:"Go somewhere",redirectLink:"https://n8n.io"};var r,e,m;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nFormBox
  },
  template: '<n8n-form-box v-bind="args" @submit="onSubmit" @update="onUpdate" />',
  methods
})`,...(m=(e=o.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};const X=["FormBox"];export{o as FormBox,X as __namedExportsOrder,Q as default};
//# sourceMappingURL=FormBox.stories-ec387d1a.js.map
