import{d as w,r as T,o as i,a as l,y as r,z as j,j as M,N,O,b as c,p,u as $}from"./vue.esm-bundler-CKZLKMJN.js";import{_ as E}from"./AssistantIcon-BEU28d5l.js";import{A as S}from"./AssistantText-C8E-RKwD.js";import{B as z}from"./BetaTag-OUlfXt8J.js";import{u as D}from"./useI18n-BYVGpRei.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as V}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./index-BDe0Wd28.js";import"./v4-CQkTLCs1.js";const A=w({__name:"AskAssistantButton",props:{unreadCount:{}},emits:["click"],setup(o,{emit:a}){const{t:B}=D(),e=T(!1),u=o,h=a,b=t=>h("click",t);function x(){e.value=!0}function C(){e.value=!1}return(t,K)=>(i(),l("button",{class:r(t.$style.button),onMouseenter:x,onMouseleave:C,onClick:b},[u.unreadCount?(i(),l("div",{key:0,class:r(t.$style.num)},j(u.unreadCount),3)):(i(),M(E,{key:1,size:"large",theme:e.value?"blank":"default"},null,8,["theme"])),N(c("div",{class:r(t.$style.text)},[c("div",null,[p(S,{text:$(B)("askAssistantButton.askAssistant")},null,8,["text"])]),c("div",null,[p(z)])],2),[[O,e.value]])],34))}}),q="_button_w66gi_1",F="_num_w66gi_21",L="_text_w66gi_33",G={button:q,num:F,text:L},H={$style:G},v=I(A,[["__cssModules",H]]);A.__docgenInfo={exportName:"default",displayName:"AskAssistantButton",description:"",tags:{},props:[{name:"unreadCount",required:!1,type:{name:"number"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],sourceFiles:["/home/runner/work/n8n-storybook/n8n-storybook/packages/design-system/src/components/AskAssistantButton/AskAssistantButton.vue"]};const st={title:"Assistant/AskAssistantButton",component:v,argTypes:{}},J={onClick:V("click")},_=(o,{argTypes:a})=>({setup:()=>({args:o}),props:Object.keys(a),components:{AskAssistantButton:v},template:'<div style="display: flex; height: 50px; width: 300px; align-items: center; justify-content: center"><AskAssistantButton v-bind="args" @click="onClick" /></div>',methods:J}),n=_.bind({}),s=_.bind({});s.args={unreadCount:1};var m,d,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantButton
  },
  template: '<div style="display: flex; height: 50px; width: 300px; align-items: center; justify-content: center"><AskAssistantButton v-bind="args" @click="onClick" /></div>',
  methods
})`,...(k=(d=n.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantButton
  },
  template: '<div style="display: flex; height: 50px; width: 300px; align-items: center; justify-content: center"><AskAssistantButton v-bind="args" @click="onClick" /></div>',
  methods
})`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const et=["Button","Notifications"];export{n as Button,s as Notifications,et as __namedExportsOrder,st as default};
