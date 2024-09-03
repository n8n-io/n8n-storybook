import{N as m}from"./Notice-Cs0tgsQ7.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./uid-DwaQSI9h.js";const A={title:"Atoms/Notice",component:m,argTypes:{theme:{control:"select",options:["success","warning","danger","info"]}}},c=(i,{argTypes:p})=>({setup:()=>({args:i}),props:Object.keys(p),components:{N8nNotice:m},template:'<n8n-notice v-bind="args">This is a notice! Thread carefully from this point forward.</n8n-notice>'}),d=(i,{argTypes:p})=>({setup:()=>({args:i}),props:Object.keys(p),components:{N8nNotice:m},template:'<n8n-notice v-bind="args"/>'}),e=c.bind({});e.args={theme:"warning"};const n=c.bind({});n.args={theme:"danger"};const s=c.bind({});s.args={theme:"success"};const r=c.bind({});r.args={theme:"info"};const t=d.bind({});t.args={theme:"warning",content:"<script>alert(1)<\/script> This content contains a script tag and is <strong>sanitized</strong>."};const a=d.bind({});a.args={theme:"warning",content:'This is just the summary. <a data-key="toggle-expand">Show more</a>',fullContent:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua. <a data-key="show-less">Show less</a>'};const o=d.bind({});o.args={theme:"warning",content:'This content is long and will be truncated at 150 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <a href="">read the documentation</a> ut labore et dolore magna aliqua.'};var g,l,u;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNotice
  },
  template: '<n8n-notice v-bind="args">This is a notice! Thread carefully from this point forward.</n8n-notice>'
})`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,y,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNotice
  },
  template: '<n8n-notice v-bind="args">This is a notice! Thread carefully from this point forward.</n8n-notice>'
})`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var b,f,N;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNotice
  },
  template: '<n8n-notice v-bind="args">This is a notice! Thread carefully from this point forward.</n8n-notice>'
})`,...(N=(f=s.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var w,S,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNotice
  },
  template: '<n8n-notice v-bind="args">This is a notice! Thread carefully from this point forward.</n8n-notice>'
})`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var j,O,v;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNotice
  },
  template: '<n8n-notice v-bind="args"/>'
})`,...(v=(O=t.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var C,x,z;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNotice
  },
  template: '<n8n-notice v-bind="args"/>'
})`,...(z=(x=a.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var E,_,q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNotice
  },
  template: '<n8n-notice v-bind="args"/>'
})`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const P=["Warning","Danger","Success","Info","Sanitized","FullContent","HtmlEdgeCase"];export{n as Danger,a as FullContent,o as HtmlEdgeCase,r as Info,t as Sanitized,s as Success,e as Warning,P as __namedExportsOrder,A as default};
