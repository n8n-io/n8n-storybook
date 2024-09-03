import{N as u}from"./ActionDropdown-FQGfW_4f.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./N8nKeyboardShortcut-i_aFHBvQ.js";import"./index-BwcWkopo.js";import"./index-CtRVoKFK.js";import"./index-D_I6V5Px.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./constants-B8P1jKxi.js";import"./style-BBe7QGW1.js";import"./index-CMauXUsi.js";import"./index-_O1BgD2M.js";import"./get-DKi1M5QB.js";import"./_baseGet-CJvEpbeR.js";import"./index-sSNy8MTe.js";import"./use-form-common-props-BTlxgw_X.js";import"./_baseSet-BrV51Xo_.js";import"./_baseAssignValue-BjKO3dwM.js";import"./_isIndex-CSKNA-QO.js";import"./use-form-item-DhSYu2FI.js";import"./index-7glOe3YB.js";import"./icon-CEt9g7ic.js";import"./index-r5W6hzzQ.js";import"./index-BJ5l3qGL.js";import"./error-Cq9Fpw4b.js";import"./dropdown-DgpGeiLd.js";const L={title:"Atoms/ActionDropdown",component:u,argTypes:{placement:{control:{type:"select"},options:["top","top-end","top-start","bottom","bottom-end","bottom-start"]},activatorIcon:{control:{type:"text"}},trigger:{control:{type:"select"},options:["click","hover"]}}},r=(b,{argTypes:g})=>({setup:()=>({args:b}),props:Object.keys(g),components:{N8nActionDropdown:u},template:'<n8n-action-dropdown v-bind="args" />'}),t=r.bind({});t.args={items:[{id:"item1",label:"Action 1"},{id:"item2",label:"Action 2"}]};const e=r.bind({});e.args={activatorIcon:"bars",items:[{id:"item1",label:"Action 1",icon:"thumbs-up"},{id:"item2",label:"Action 2",icon:"thumbs-down",disabled:!0},{id:"item3",label:"Action 3",icon:"heart",divided:!0}]};const o=r.bind({});o.args={items:[{id:"open",label:"Open node...",shortcut:{keys:["↵"]}},{id:"execute",label:"Execute node"},{id:"rename",label:"Rename node",shortcut:{keys:["F2"]}},{id:"toggle_activation",label:"Deactivate node",shortcut:{keys:["D"]}},{id:"toggle_pin",label:"Pin node",shortcut:{keys:["p"]},disabled:!0},{id:"copy",label:"Copy node",shortcut:{metaKey:!0,keys:["C"]}},{id:"duplicate",label:"Duplicate node",shortcut:{metaKey:!0,keys:["D"]}},{id:"select_all",divided:!0,label:"Select all nodes",shortcut:{metaKey:!0,keys:["A"]}},{id:"deselect_all",label:"Clear selection",disabled:!0},{id:"delete",divided:!0,label:"Delete node",shortcut:{keys:["Del"]}}]};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nActionDropdown
  },
  template: '<n8n-action-dropdown v-bind="args" />'
})`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,p,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nActionDropdown
  },
  template: '<n8n-action-dropdown v-bind="args" />'
})`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nActionDropdown
  },
  template: '<n8n-action-dropdown v-bind="args" />'
})`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const M=["defaultActionDropdown","customStyling","keyboardShortcuts"];export{M as __namedExportsOrder,e as customStyling,L as default,t as defaultActionDropdown,o as keyboardShortcuts};
