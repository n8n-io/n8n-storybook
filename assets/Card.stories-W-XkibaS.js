import{N as s}from"./Card-YzwB3LWd.js";import{N as h}from"./Button-Du0lO7te.js";import{N as x}from"./Icon-eGxnSFmd.js";import{N as b}from"./Text-DFJ1zlSw.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Spinner-ChPi3gPv.js";const z={title:"Atoms/Card",component:s},r=(n,{argTypes:e})=>({setup:()=>({args:n}),props:Object.keys(e),components:{N8nCard:s},template:'<n8n-card v-bind="args">This is a card.</n8n-card>'}),t=(n,{argTypes:e})=>({setup:()=>({args:n}),props:Object.keys(e),components:{N8nCard:s,N8nIcon:x,N8nText:b},template:`<div style="width: 140px; text-align: center;">
        <n8n-card v-bind="args">
            <n8n-icon icon="plus" size="xlarge" />
            <n8n-text size="large" class="mt-2xs">Add</n8n-text>
        </n8n-card>
    </div>`});t.args={hoverable:!0};const a=(n,{argTypes:e})=>({setup:()=>({args:n}),props:Object.keys(e),components:{N8nCard:s,N8nButton:h,N8nIcon:x,N8nText:b},template:`<n8n-card v-bind="args">
        <template #prepend>
            <n8n-icon icon="check" size="large" />
        </template>
        <template #header>
            <strong>Card header</strong>
        </template>
        <n8n-text color="text-light" size="medium" class="mt-2xs mb-2xs">
            This is the card body.
        </n8n-text>
        <template #footer>
            <n8n-text size="medium">
                Card footer
            </n8n-text>
        </template>
        <template #append>
            <n8n-button>Click me</n8n-button>
        </template>
    </n8n-card>`});var o,p,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nCard
  },
  template: '<n8n-card v-bind="args">This is a card.</n8n-card>'
})`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nCard,
    N8nIcon,
    N8nText
  },
  template: \`<div style="width: 140px; text-align: center;">
        <n8n-card v-bind="args">
            <n8n-icon icon="plus" size="xlarge" />
            <n8n-text size="large" class="mt-2xs">Add</n8n-text>
        </n8n-card>
    </div>\`
})`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nCard,
    N8nButton,
    N8nIcon,
    N8nText
  },
  template: \`<n8n-card v-bind="args">
        <template #prepend>
            <n8n-icon icon="check" size="large" />
        </template>
        <template #header>
            <strong>Card header</strong>
        </template>
        <n8n-text color="text-light" size="medium" class="mt-2xs mb-2xs">
            This is the card body.
        </n8n-text>
        <template #footer>
            <n8n-text size="medium">
                Card footer
            </n8n-text>
        </template>
        <template #append>
            <n8n-button>Click me</n8n-button>
        </template>
    </n8n-card>\`
})`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const O=["Default","Hoverable","WithSlots"];export{r as Default,t as Hoverable,a as WithSlots,O as __namedExportsOrder,z as default};
