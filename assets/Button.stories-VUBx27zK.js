import{N as p}from"./Button-Du0lO7te.js";import{a as R}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Spinner-ChPi3gPv.js";import"./v4-CQkTLCs1.js";const an={title:"Atoms/Button",component:p,argTypes:{type:{control:"select",options:["primary","secondary","tertiary","success","warning","danger"]},size:{control:{type:"select"},options:["mini","small","medium","large","xlarge"]},float:{type:"select",options:["left","right"]}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/DxLbnIyMK8X0uLkUguFV4n/n8n-design-system_v1?node-id=5%3A1147"}}},k={onClick:R("click")},Y=(e,{argTypes:i})=>({setup:()=>({args:e}),props:Object.keys(i),components:{N8nButton:p},template:'<n8n-button v-bind="args" @click="onClick" />',methods:k}),t=Y.bind({});t.args={label:"Button"};const n=(e,{argTypes:i})=>({setup:()=>({args:e}),props:Object.keys(i),components:{N8nButton:p},template:`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>`,methods:k}),m=(e,{argTypes:i})=>({setup:()=>({args:e}),props:Object.keys(i),components:{N8nButton:p},template:`<div>
        <n8n-button v-bind="args" size="large" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="medium" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="small" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="danger" @click="onClick" />
    </div>`,methods:k}),s=n.bind({});s.args={type:"primary",label:"Button"};const r=n.bind({});r.args={type:"secondary",label:"Button"};const c=n.bind({});c.args={type:"tertiary",label:"Button"};const a=n.bind({});a.args={type:"success",label:"Button"};const o=n.bind({});o.args={type:"warning",label:"Button"};const l=n.bind({});l.args={type:"danger",label:"Button"};const b=m.bind({});b.args={outline:!0,label:"Button"};const d=m.bind({});d.args={text:!0,label:"Button"};const u=n.bind({});u.args={label:"Button",icon:"plus-circle"};const g=m.bind({});g.args={label:"48",square:!0};var y,v,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: '<n8n-button v-bind="args" @click="onClick" />',
  methods
})`,...(C=(v=t.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var z,T,B;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>\`,
  methods
})`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var S,w,O;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>\`,
  methods
})`,...(O=(w=r.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var h,j,N;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>\`,
  methods
})`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var f,x,A;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>\`,
  methods
})`,...(A=(x=a.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var W,_,q;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>\`,
  methods
})`,...(q=(_=o.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,I,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>\`,
  methods
})`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var P,E,F;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="medium" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="small" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="danger" @click="onClick" />
    </div>\`,
  methods
})`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var K,M,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="medium" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="small" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="danger" @click="onClick" />
    </div>\`,
  methods
})`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var V,X,G;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" @click="onClick" />
        <n8n-button v-bind="args" size="medium" @click="onClick" />
        <n8n-button v-bind="args" size="small" @click="onClick" />
        <n8n-button v-bind="args" :loading="true" @click="onClick" />
        <n8n-button v-bind="args" :disabled="true" @click="onClick" />
    </div>\`,
  methods
})`,...(G=(X=u.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var H,J,Q;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nButton
  },
  template: \`<div>
        <n8n-button v-bind="args" size="large" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="large" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="medium" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="medium" type="danger" @click="onClick" />
        <br/>
        <br/>
        <n8n-button v-bind="args" size="small" type="primary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="secondary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="tertiary" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="success" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="warning" @click="onClick" />
        <n8n-button v-bind="args" size="small" type="danger" @click="onClick" />
    </div>\`,
  methods
})`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const on=["Button","Primary","Secondary","Tertiary","Success","Warning","Danger","Outline","Text","WithIcon","Square"];export{t as Button,l as Danger,b as Outline,s as Primary,r as Secondary,g as Square,a as Success,c as Tertiary,d as Text,o as Warning,u as WithIcon,on as __namedExportsOrder,an as default};
