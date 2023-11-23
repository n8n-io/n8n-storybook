import{N as u}from"./ActionDropdown-f1259a36.js";import"./vue.esm-bundler-3aad6c04.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./N8nKeyboardShortcut-e678bd0d.js";import"./index-86b08e70.js";import"./index-4cb8128b.js";import"./index-ddeaf72e.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./index-a6727b26.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-87478f47.js";import"./use-form-item-4955f742.js";import"./_baseSet-3e5455a7.js";import"./_isIndex-af14b756.js";import"./index-f8748455.js";import"./index-2b9737a3.js";import"./error-78e43d3e.js";import"./dropdown-e1be88b6.js";const B={title:"Atoms/ActionDropdown",component:u,argTypes:{placement:{control:{type:"select"},options:["top","top-end","top-start","bottom","bottom-end","bottom-start"]},activatorIcon:{control:{type:"text"}},trigger:{control:{type:"select"},options:["click","hover"]}}},r=(b,{argTypes:g})=>({setup:()=>({args:b}),props:Object.keys(g),components:{N8nActionDropdown:u},template:'<n8n-action-dropdown v-bind="args" />'}),e=r.bind({});e.args={items:[{id:"item1",label:"Action 1"},{id:"item2",label:"Action 2"}]};const t=r.bind({});t.args={activatorIcon:"bars",items:[{id:"item1",label:"Action 1",icon:"thumbs-up"},{id:"item2",label:"Action 2",icon:"thumbs-down",disabled:!0},{id:"item3",label:"Action 3",icon:"heart",divided:!0}]};const o=r.bind({});o.args={items:[{id:"open",label:"Open node...",shortcut:{keys:["↵"]}},{id:"execute",label:"Execute node"},{id:"rename",label:"Rename node",shortcut:{keys:["F2"]}},{id:"toggle_activation",label:"Deactivate node",shortcut:{keys:["D"]}},{id:"toggle_pin",label:"Pin node",shortcut:{keys:["p"]},disabled:!0},{id:"copy",label:"Copy node",shortcut:{metaKey:!0,keys:["C"]}},{id:"duplicate",label:"Duplicate node",shortcut:{metaKey:!0,keys:["D"]}},{id:"select_all",divided:!0,label:"Select all nodes",shortcut:{metaKey:!0,keys:["A"]}},{id:"deselect_all",label:"Clear selection",disabled:!0},{id:"delete",divided:!0,label:"Delete node",shortcut:{keys:["Del"]}}]};var s,i,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args, {
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
})`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var n,p,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args, {
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
})`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`(args, {
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
})`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const G=["defaultActionDropdown","customStyling","keyboardShortcuts"];export{G as __namedExportsOrder,t as customStyling,B as default,e as defaultActionDropdown,o as keyboardShortcuts};
//# sourceMappingURL=ActionDropdown.stories-1a7f079d.js.map
