import{N as m}from"./Notice-073687d4.js";import"./vue.esm-bundler-3aad6c04.js";import"./_commonjsHelpers-de833af9.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./locale-6fa44ca8.js";import"./index-6a651def.js";import"./uid-e2c8bb67.js";const F={title:"Atoms/Notice",component:m,argTypes:{theme:{control:"select",options:["success","warning","danger","info"]}}},c=(i,{argTypes:p})=>({setup:()=>({args:i}),props:Object.keys(p),components:{N8nNotice:m},template:'<n8n-notice v-bind="args">This is a notice! Thread carefully from this point forward.</n8n-notice>'}),d=(i,{argTypes:p})=>({setup:()=>({args:i}),props:Object.keys(p),components:{N8nNotice:m},template:'<n8n-notice v-bind="args"/>'}),e=c.bind({});e.args={theme:"warning"};const r=c.bind({});r.args={theme:"danger"};const s=c.bind({});s.args={theme:"success"};const t=c.bind({});t.args={theme:"info"};const a=d.bind({});a.args={theme:"warning",content:"<script>alert(1)<\/script> This content contains a script tag and is <strong>sanitized</strong>."};const o=d.bind({});o.args={theme:"warning",truncate:!0,content:"This content is long and will be truncated at 150 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."};const n=d.bind({});n.args={theme:"warning",truncate:!0,content:'This content is long and will be truncated at 150 characters. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <a href="">read the documentation</a> ut labore et dolore magna aliqua.'};var g,u,l;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`(args, {
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
})`,...(l=(u=e.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var T,h,b;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`(args, {
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
})`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,f,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
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
})`,...(N=(f=s.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var w,S,O;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`(args, {
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
})`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var j,k,v;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`(args, {
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
})`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var z,E,_;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`(args, {
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
})`,...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var q,x,C;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`(args, {
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
})`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const G=["Warning","Danger","Success","Info","Sanitized","Truncated","HtmlEdgeCase"];export{r as Danger,n as HtmlEdgeCase,t as Info,a as Sanitized,s as Success,o as Truncated,e as Warning,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Notice.stories-6b324758.js.map
