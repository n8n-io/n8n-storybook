import{N as s,a as r}from"./Option-19347590.js";import{N as i}from"./Icon-56e50434.js";import{a as d}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./vue.esm-bundler-3aad6c04.js";import"./index-02e7f3ca.js";import"./constants-5bd8a862.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./index-87478f47.js";import"./index-bf139a46.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./index-2b9737a3.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-a6727b26.js";import"./isEqual-d33d3be5.js";import"./_isIndex-af14b756.js";import"./index-5bb75181.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Text-c7071bfc.js";const ae={title:"Atoms/Select",component:s,argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"select"},options:["large","medium","small","mini"]},loading:{control:{type:"boolean"}},filterable:{control:{type:"boolean"}},defaultFirstOption:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},c={onUpdateModelValue:d("update:modelValue"),onChange:d("change")},k=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:s,N8nOption:r,N8nIcon:i},template:'<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',data(){return{val:""}},methods:c}),l=k.bind({}),t=k.bind({});t.args={filterable:!0,defaultFirstOption:!0};const f=["large","medium","small","mini"].map(e=>`<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" size="${e}"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join(""),M=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:s,N8nOption:r,N8nIcon:i},template:`<div class="multi-container">${f}</div>`,methods:c,data(){return{val:""}}}),o=M.bind({});o.args={type:"text",label:"text input:",placeholder:"placeholder..."};const U=["xlarge","large","medium","small","mini"].map(e=>`<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" size="${e}"><n8n-icon icon="search" slot="prefix" /><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join(""),W=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:s,N8nOption:r,N8nIcon:i},template:`<div class="multi-container">${U}</div>`,methods:c,data(){return{val:""}}}),a=W.bind({});a.args={type:"text",label:"text input:",placeholder:"placeholder..."};const C=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nSelect:s,N8nOption:r,N8nIcon:i},template:'<div style="width:100px;"><n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1" label="opt1 11 1111" /><n8n-option value="2" label="opt2 test very long ipsum"/></n8n-select></div>',data(){return{val:""}},methods:c}),p=C.bind({});p.args={type:"text",label:"text input:",placeholder:"placeholder..."};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: '<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,b,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: '<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,N,O;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: \`<div class="multi-container">\${selects}</div>\`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,S,T;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: \`<div class="multi-container">\${selectsWithIcon}</div>\`,
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,x,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nSelect,
    N8nOption,
    N8nIcon
  },
  template: '<div style="width:100px;"><n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1" label="opt1 11 1111" /><n8n-option value="2" label="opt2 test very long ipsum"/></n8n-select></div>',
  data() {
    return {
      val: ''
    };
  },
  methods
})`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const pe=["Input","Filterable","Sizes","WithIcon","LimitedWidth"];export{t as Filterable,l as Input,p as LimitedWidth,o as Sizes,a as WithIcon,pe as __namedExportsOrder,ae as default};
//# sourceMappingURL=Select.stories-c5d455e6.js.map
