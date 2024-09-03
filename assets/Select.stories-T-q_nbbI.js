import{N as r,_ as l}from"./Option-DGwcywGk.js";import{N as i}from"./Icon-eGxnSFmd.js";import{a as m}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./index-D72nbeKo.js";import"./constants-B8P1jKxi.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./index-sSNy8MTe.js";import"./index-DfE3_O24.js";import"./index-D_I6V5Px.js";import"./style-BBe7QGW1.js";import"./index-7glOe3YB.js";import"./use-form-common-props-BTlxgw_X.js";import"./icon-CEt9g7ic.js";import"./typescript-Bp3YSIOJ.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-DhSYu2FI.js";import"./error-Cq9Fpw4b.js";import"./index-BJ5l3qGL.js";import"./index-Bt5_zPh1.js";import"./get-DKi1M5QB.js";import"./_baseGet-CJvEpbeR.js";import"./index-_O1BgD2M.js";import"./index-CMauXUsi.js";import"./isEqual-PEmCjIlp.js";import"./hasIn-BxG8bepv.js";import"./_isIndex-CSKNA-QO.js";import"./debounce-aL6TwW6w.js";import"./_baseFindIndex-D7XfJLKM.js";import"./_baseIteratee-DX6pvl7i.js";import"./index-J6MGrStv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Text-DFJ1zlSw.js";import"./v4-CQkTLCs1.js";const gn={title:"Atoms/Select",component:r,argTypes:{disabled:{control:{type:"boolean"}},size:{control:{type:"select"},options:["large","medium","small","mini"]},loading:{control:{type:"boolean"}},filterable:{control:{type:"boolean"}},defaultFirstOption:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},c={onUpdateModelValue:m("update:modelValue"),onChange:m("change")},j=(n,{argTypes:e})=>({setup:()=>({args:n}),props:Object.keys(e),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:'<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>',data(){return{val:""}},methods:c}),s=j.bind({}),t=j.bind({});t.args={filterable:!0,defaultFirstOption:!0};const k=["large","medium","small","mini"].map(n=>`<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange" size="${n}"><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join(""),M=(n,{argTypes:e})=>({setup:()=>({args:n}),props:Object.keys(e),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:`<div class="multi-container">${k}</div>`,methods:c,data(){return{val:""}}}),o=M.bind({});o.args={type:"text",label:"text input:",placeholder:"placeholder..."};const U=["xlarge","large","medium","small","mini"].map(n=>`<n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" size="${n}"><n8n-icon icon="search" slot="prefix" /><n8n-option value="1">op1</n8n-option><n8n-option value="2">op2</n8n-option></n8n-select>`).join(""),W=(n,{argTypes:e})=>({setup:()=>({args:n}),props:Object.keys(e),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:`<div class="multi-container">${U}</div>`,methods:c,data(){return{val:""}}}),a=W.bind({});a.args={type:"text",label:"text input:",placeholder:"placeholder..."};const C=(n,{argTypes:e})=>({setup:()=>({args:n}),props:Object.keys(e),components:{N8nSelect:r,N8nOption:l,N8nIcon:i},template:'<div style="width:100px;"><n8n-select v-bind="args" v-model="val" @update:modelValue="onUpdateModelValue" @change="onChange"><n8n-option value="1" label="opt1 11 1111" /><n8n-option value="2" label="opt2 test very long ipsum"/></n8n-select></div>',data(){return{val:""}},methods:c}),p=C.bind({});p.args={type:"text",label:"text input:",placeholder:"placeholder..."};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(args, {
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
})`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,b,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`(args, {
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
})`,...(T=(S=a.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,x,f;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args, {
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
})`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const vn=["Input","Filterable","Sizes","WithIcon","LimitedWidth"];export{t as Filterable,s as Input,p as LimitedWidth,o as Sizes,a as WithIcon,vn as __namedExportsOrder,gn as default};
