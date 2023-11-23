import{N as i}from"./Tooltip-39565189.js";import"./vue.esm-bundler-3aad6c04.js";import"./Button-7453724f.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Spinner-ae3926a4.js";import"./index-87478f47.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";const B={title:"Atoms/Tooltip",component:i,argTypes:{effect:{control:"select",options:["dark","light"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},disabled:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},l=(c,{argTypes:m})=>({setup:()=>({args:c}),props:Object.keys(m),components:{N8nTooltip:i},template:'<n8n-tooltip v-bind="args"><button>Hover me</button></n8n-tooltip>'}),t=l.bind({});t.args={content:"..."};const o=l.bind({});o.args={content:"Hello world!",buttons:[{attrs:{label:"Button 1","data-test-id":"tooltip-button"},listeners:{onClick:()=>alert("Clicked 1")}},{attrs:{label:"Button 2","data-test-id":"tooltip-button"},listeners:{onClick:()=>alert("Clicked 2")}}]};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTooltip
  },
  template: '<n8n-tooltip v-bind="args"><button>Hover me</button></n8n-tooltip>'
})`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var n,p,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTooltip
  },
  template: '<n8n-tooltip v-bind="args"><button>Hover me</button></n8n-tooltip>'
})`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const C=["Tooltip","TooltipWithButtons"];export{t as Tooltip,o as TooltipWithButtons,C as __namedExportsOrder,B as default};
//# sourceMappingURL=Tooltip.stories-ef4054dc.js.map
