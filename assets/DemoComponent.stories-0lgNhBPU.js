import{d as D,r as k,f as h,g as A,o as M,a as N,p,b as z,y as O}from"./vue.esm-bundler-CKZLKMJN.js";import{A as j}from"./AssistantLoadingMessage-XKbD6x91.js";import{N as x}from"./Notice-Cs0tgsQ7.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AssistantAvatar-Ymgo_BLG.js";import"./AssistantIcon-BEU28d5l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Text-DFJ1zlSw.js";import"./uid-DwaQSI9h.js";const v=D({__name:"DemoComponent",props:{animationType:{default:"slide-vertical"}},setup(r){const o=["Analyzing the error...","Searching the n8n documentation...","Checking the n8n community for answers.."],a=k(0),T=h(()=>o[a.value]),b=()=>{setInterval(()=>{a.value=(a.value+1)%o.length},2e3)};return A(()=>{b()}),(m,F)=>(M(),N("div",null,[p(x,{type:"warning",content:"This component is for demo purposes only"}),z("div",{class:O(m.$style["loading-message"])},[p(j,{message:T.value,"animation-type":m.animationType},null,8,["message","animation-type"])],2)]))}}),w={"loading-message":"_loading-message_ft91g_1"},B={$style:w},C=S(v,[["__cssModules",B]]);v.__docgenInfo={exportName:"default",displayName:"DemoComponent",description:"",tags:{},props:[{name:"animationType",required:!1,type:{name:"union",elements:[{name:'"slide-vertical"'},{name:'"slide-horizontal"'},{name:'"fade"'}]},defaultValue:{func:!1,value:"'slide-vertical'"}}],sourceFiles:["/home/runner/work/n8n-storybook/n8n-storybook/packages/design-system/src/components/AskAssistantLoadingMessage/DemoComponent.vue"]};const J={title:"Assistant/AskAssistantLoadingMessageTransitions",component:C,argTypes:{}},t=(r,{argTypes:o})=>({setup:()=>({args:r}),props:Object.keys(o),components:{DemoComponent:C},template:'<DemoComponent v-bind="args" />'}),e=t.bind({});e.args={};const n=t.bind({});n.args={animationType:"slide-horizontal"};const s=t.bind({});s.args={animationType:"fade"};var i,c,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    DemoComponent
  },
  template: '<DemoComponent v-bind="args" />'
})`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    DemoComponent
  },
  template: '<DemoComponent v-bind="args" />'
})`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,f,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    DemoComponent
  },
  template: '<DemoComponent v-bind="args" />'
})`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};const K=["Default","Horizontal","Fade"];export{e as Default,s as Fade,n as Horizontal,K as __namedExportsOrder,J as default};
