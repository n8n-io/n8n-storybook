import{N as d}from"./Callout-WjG9-cFi.js";import{N as C}from"./Link-CtXf2-9y.js";import{N as y}from"./Text-DFJ1zlSw.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./Icon-eGxnSFmd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const $={title:"Atoms/Callout",component:d,argTypes:{theme:{control:{type:"select"},options:["info","secondary","success","warning","danger","custom"]},message:{control:{type:"text"}},icon:{control:{type:"text"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/tPpJvbrnHbP8C496cYuwyW/Node-pinning?node-id=15%3A5777"}}},s=(a,{argTypes:f})=>({setup:()=>({args:a}),props:Object.keys(f),components:{N8nLink:C,N8nText:y,N8nCallout:d},template:`
        <n8n-callout v-bind="args">
            ${a.default}
            <template #actions v-if="args.actions">
                ${a.actions}
            </template>
            <template #trailingContent v-if="args.trailingContent">
                ${a.trailingContent}
            </template>
        </n8n-callout>
    `}),n=s.bind({});n.args={theme:"success",default:`
        This is a default callout.
    `};const t=s.bind({});t.args={theme:"custom",icon:"code-branch",default:`
        This is a custom callout.
    `,actions:`
        <n8n-link size="small">
            Do something!
        </n8n-link>
    `};const e=s.bind({});e.args={theme:"secondary",icon:"thumbtack",default:`
        This data is pinned.
    `,actions:`
        <n8n-link theme="secondary" size="small" :bold="true" :underline="true">
            Unpin
        </n8n-link>
    `,trailingContent:`
        <n8n-link
            theme="secondary"
            size="small"
            :bold="true"
            :underline="true"
            to="https://n8n.io"
        >
            Learn more
        </n8n-link>
    `};var o,r,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nLink,
    N8nText,
    N8nCallout
  },
  template: \`
        <n8n-callout v-bind="args">
            \${args.default}
            <template #actions v-if="args.actions">
                \${args.actions}
            </template>
            <template #trailingContent v-if="args.trailingContent">
                \${args.trailingContent}
            </template>
        </n8n-callout>
    \`
})`,...(l=(r=n.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nLink,
    N8nText,
    N8nCallout
  },
  template: \`
        <n8n-callout v-bind="args">
            \${args.default}
            <template #actions v-if="args.actions">
                \${args.actions}
            </template>
            <template #trailingContent v-if="args.trailingContent">
                \${args.trailingContent}
            </template>
        </n8n-callout>
    \`
})`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nLink,
    N8nText,
    N8nCallout
  },
  template: \`
        <n8n-callout v-bind="args">
            \${args.default}
            <template #actions v-if="args.actions">
                \${args.actions}
            </template>
            <template #trailingContent v-if="args.trailingContent">
                \${args.trailingContent}
            </template>
        </n8n-callout>
    \`
})`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const x=["defaultCallout","customCallout","secondaryCallout"];export{x as __namedExportsOrder,t as customCallout,$ as default,n as defaultCallout,e as secondaryCallout};
