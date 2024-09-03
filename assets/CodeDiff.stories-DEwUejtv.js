import{C as J}from"./CodeDiff-CbQbiCDd.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useI18n-BYVGpRei.js";import"./index-BDe0Wd28.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ne={title:"Assistant/CodeDiff",component:J,argTypes:{}},Q={},e=(K,{argTypes:P})=>({setup:()=>({args:K}),props:Object.keys(P),components:{CodeDiff:J},template:'<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',methods:Q}),n=e.bind({});n.args={title:"Lao Tzu example unified diff",content:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can be named is not the eternal name.
The Nameless is the origin of Heaven and Earth;
-The Named is the mother of all things.
+The named is the mother of all things.
+
Therefore let there always be non-being,
so we may see their subtlety,
And let there always be being,
@@ -9,3 +8,6 @@
 The two are the same,
 But after they are produced,
 they have different names.
+They both may be called deep and profound.
+Deeper and more profound,
+The door of all subtleties!`};const t=e.bind({});t.args={};const a=e.bind({});a.args={title:"Fix reference to the node and remove unsupported 'require' statement.",content:`--- original.js
+++ modified.js
@@ -1,2 +1,2 @@
-const SIGNING_SECRET = $input.first().json.slack_secret_signature;
-const item = $('Webhook to call for Slack command').first();
+const SIGNING_SECRET = items[0].json.slack_secret_signature;
+const item = items[0];
@@ -7,8 +7,6 @@
}

-const crypto = require('crypto');
-
 const { binary: { data } } = item;

 if (
@@ -22,7 +20,7 @@
 const rawBody = Buffer.from(data.data, 'base64').toString()
 
 // compute the `,streaming:!0};const r=e.bind({});r.args={streaming:!0};const s=e.bind({});s.args={streaming:!0,title:"Hello world"};const o=e.bind({});o.args={streaming:!0,title:"Hello world",content:`@@ -1,7 +1,6 @@
-The Way that can be told of is not th`};const i=e.bind({});i.args={streaming:!0,title:"Hello world",content:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can b`};const d=e.bind({});d.args={title:"Lao Tzu example unified diff",content:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can be named is not the eternal name.
The Nameless is the origin of Heaven and Earth;
-The Named is the mother of all things.
+The named is the mother of all things.
+
Therefore let there always be non-being,
so we may see their subtlety,
And let there always be being,
@@ -9,3 +8,6 @@
 The two are the same,
 But after they are produced,
 they have different names.
+They both may be called deep and profound.
+Deeper and more profound,
+The door of all subtleties!`,streaming:!0};const h=e.bind({});h.args={title:"Lao Tzu example unified diff",content:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can be named is not the eternal name.
The Nameless is the origin of Heaven and Earth;
-The Named is the mother of all things.
+The named is the mother of all things.
+
Therefore let there always be non-being,
so we may see their subtlety,
And let there always be being,
@@ -9,3 +8,6 @@
 The two are the same,
 But after they are produced,
 they have different names.
+They both may be called deep and profound.
+Deeper and more profound,
+The door of all subtleties!`,replaced:!0};const p=e.bind({});p.args={title:"Lao Tzu example unified diff",content:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can be named is not the eternal name.
The Nameless is the origin of Heaven and Earth;
-The Named is the mother of all things.
+The named is the mother of all things.
+
Therefore let there always be non-being,
so we may see their subtlety,
And let there always be being,
@@ -9,3 +8,6 @@
 The two are the same,
 But after they are produced,
 they have different names.
+They both may be called deep and profound.
+Deeper and more profound,
+The door of all subtleties!`,replacing:!0};const m=e.bind({});m.args={title:"Lao Tzu example unified diff",content:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can be named is not the eternal name.
The Nameless is the origin of Heaven and Earth;
-The Named is the mother of all things.
+The named is the mother of all things.
+
Therefore let there always be non-being,
so we may see their subtlety,
And let there always be being,
@@ -9,3 +8,6 @@
 The two are the same,
 But after they are produced,
 they have different names.
+They both may be called deep and profound.
+Deeper and more profound,
+The door of all subtleties!`,error:!0};var l,c,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var f,y,u;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(u=(y=t.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var b,T,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(v=(T=a.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var w,S,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var x,W,D;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(D=(W=s.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var E,j,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var O,N,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(L=(N=i.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var _,H,B;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(B=(H=d.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var A,M,R;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(R=(M=h.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var z,G,I;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var q,$,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    CodeDiff
  },
  template: '<div style="width:300px; height:100%"><code-diff v-bind="args" /></div>',
  methods
})`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const te=["Example","Empty","Code","StreamingTitleEmpty","StreamingTitle","StreamingContentWithOneLine","StreamingContentWithMultipleLines","StreamingWithManyManyLines","Replaced","Replacing","Error"];export{a as Code,t as Empty,m as Error,n as Example,h as Replaced,p as Replacing,i as StreamingContentWithMultipleLines,o as StreamingContentWithOneLine,s as StreamingTitle,r as StreamingTitleEmpty,d as StreamingWithManyManyLines,te as __namedExportsOrder,ne as default};
