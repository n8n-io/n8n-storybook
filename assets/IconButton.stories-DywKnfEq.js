import{_ as a}from"./IconButton-CVttJxPa.js";import{a as I}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Button-Du0lO7te.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Spinner-ChPi3gPv.js";import"./v4-CQkTLCs1.js";const M={title:"Atoms/Icon Button",component:a,argTypes:{type:{control:"select",options:["primary","secondary","tertiary","success","warning","danger"]},size:{control:{type:"select"},options:["mini","small","medium","large","xlarge"]}},parameters:{backgrounds:{default:"--color-background-light"}}},O={onClick:I("click")},h=(s,{argTypes:r})=>({setup:()=>({args:s}),props:Object.keys(r),components:{N8nIconButton:a},template:'<n8n-icon-button @click="onClick" v-bind="args" />',methods:O}),n=h.bind({});n.args={icon:"plus",title:"my title"};const c=(s,{argTypes:r})=>({setup:()=>({args:s}),props:Object.keys(r),components:{N8nIconButton:a},template:'<div> <n8n-icon-button v-bind="args" size="xlarge" @click="onClick" /> <n8n-icon-button v-bind="args" size="large" @click="onClick" />  <n8n-icon-button v-bind="args" size="medium" @click="onClick" />  <n8n-icon-button v-bind="args" size="small" @click="onClick" />  <n8n-icon-button v-bind="args" :loading="true" @click="onClick" />  <n8n-icon-button v-bind="args" :disabled="true" @click="onClick" /></div>',methods:O}),i=c.bind({});i.args={icon:"plus",title:"my title",type:"primary"};const t=c.bind({});t.args={icon:"plus",title:"my title",type:"primary",outline:!0};const o=c.bind({});o.args={icon:"plus",title:"my title",type:"tertiary"};const e=c.bind({});e.args={icon:"plus",title:"my title",type:"text"};var l,d,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIconButton
  },
  template: '<n8n-icon-button @click="onClick" v-bind="args" />',
  methods
})`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIconButton
  },
  template: '<div> <n8n-icon-button v-bind="args" size="xlarge" @click="onClick" /> <n8n-icon-button v-bind="args" size="large" @click="onClick" />  <n8n-icon-button v-bind="args" size="medium" @click="onClick" />  <n8n-icon-button v-bind="args" size="small" @click="onClick" />  <n8n-icon-button v-bind="args" :loading="true" @click="onClick" />  <n8n-icon-button v-bind="args" :disabled="true" @click="onClick" /></div>',
  methods
})`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,k,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIconButton
  },
  template: '<div> <n8n-icon-button v-bind="args" size="xlarge" @click="onClick" /> <n8n-icon-button v-bind="args" size="large" @click="onClick" />  <n8n-icon-button v-bind="args" size="medium" @click="onClick" />  <n8n-icon-button v-bind="args" size="small" @click="onClick" />  <n8n-icon-button v-bind="args" :loading="true" @click="onClick" />  <n8n-icon-button v-bind="args" :disabled="true" @click="onClick" /></div>',
  methods
})`,...(v=(k=t.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var y,C,z;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIconButton
  },
  template: '<div> <n8n-icon-button v-bind="args" size="xlarge" @click="onClick" /> <n8n-icon-button v-bind="args" size="large" @click="onClick" />  <n8n-icon-button v-bind="args" size="medium" @click="onClick" />  <n8n-icon-button v-bind="args" size="small" @click="onClick" />  <n8n-icon-button v-bind="args" :loading="true" @click="onClick" />  <n8n-icon-button v-bind="args" :disabled="true" @click="onClick" /></div>',
  methods
})`,...(z=(C=o.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var T,x,B;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nIconButton
  },
  template: '<div> <n8n-icon-button v-bind="args" size="xlarge" @click="onClick" /> <n8n-icon-button v-bind="args" size="large" @click="onClick" />  <n8n-icon-button v-bind="args" size="medium" @click="onClick" />  <n8n-icon-button v-bind="args" size="small" @click="onClick" />  <n8n-icon-button v-bind="args" :loading="true" @click="onClick" />  <n8n-icon-button v-bind="args" :disabled="true" @click="onClick" /></div>',
  methods
})`,...(B=(x=e.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const q=["Button","Primary","Outline","Tertiary","Text"];export{n as Button,t as Outline,i as Primary,o as Tertiary,e as Text,q as __namedExportsOrder,M as default};
