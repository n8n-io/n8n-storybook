import{f as Q,o as u,b as l,F as W,s as X,d as v,v as y,n as Y}from"./vue.esm-bundler-3aad6c04.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const K=Q({name:"SpacingPreview",props:{property:{type:String,default:"padding"},side:{type:String,default:""}},computed:{sizes(){return["0","5xs","4xs","3xs","2xs","xs","s","m","l","xl","2xl","3xl","4xl","5xl"].concat(this.property==="margin"?["auto"]:[])}}});const ee=v("div",{class:"spacing-box"},null,-1),re={class:"label"};function se(r,b,pe,te,oe,ie){return u(),l("div",null,[(u(!0),l(W,null,X(r.sizes,m=>(u(),l("div",{class:"spacing-group",key:m},[v("div",{class:Y(["spacing-example",`${r.property[0]}${r.side?r.side[0]:""}-${m}`])},[ee,v("div",re,y(r.property[0])+y(r.side?r.side[0]:"")+"-"+y(m),1)],2)]))),128))])}const ae=Z(K,[["render",se]]);K.__docgenInfo={displayName:"SpacingPreview",exportName:"default",description:"",tags:{},props:[{name:"property",type:{name:"string"},defaultValue:{func:!1,value:"'padding'"}},{name:"side",type:{name:"string"},defaultValue:{func:!1,value:"''"}}]};const ce={title:"Utilities/Spacing"},e=(r,{argTypes:b})=>({setup:()=>({args:r}),props:Object.keys(b),components:{SpacingPreview:ae},template:'<spacing-preview v-bind="args" />'}),s=e.bind({});s.args={property:"padding"};const a=e.bind({});a.args={property:"padding",side:"top"};const p=e.bind({});p.args={property:"padding",side:"right"};const t=e.bind({});t.args={property:"padding",side:"bottom"};const o=e.bind({});o.args={property:"padding",side:"left"};const i=e.bind({});i.args={property:"margin"};const n=e.bind({});n.args={property:"margin",side:"top"};const g=e.bind({});g.args={property:"margin",side:"right"};const c=e.bind({});c.args={property:"margin",side:"bottom"};const d=e.bind({});d.args={property:"margin",side:"left"};var S,f,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var T,P,_;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(_=(P=a.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var k,O,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(j=(O=p.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var x,h,M;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(M=(h=t.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var B,$,L;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(L=($=o.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var R,N,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(V=(N=i.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var C,E,F;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(F=(E=n.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var z,D,I;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(I=(D=g.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var U,q,A;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,H,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    SpacingPreview
  },
  template: '<spacing-preview v-bind="args" />'
})`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const de=["Padding","PaddingTop","PaddingRight","PaddingBottom","PaddingLeft","Margin","MarginTop","MarginRight","MarginBottom","MarginLeft"];export{i as Margin,c as MarginBottom,d as MarginLeft,g as MarginRight,n as MarginTop,s as Padding,t as PaddingBottom,o as PaddingLeft,p as PaddingRight,a as PaddingTop,de as __namedExportsOrder,ce as default};
//# sourceMappingURL=spacing.stories-b2484ffa.js.map
