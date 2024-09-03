import{N as o}from"./Alert-6JbIjNmz.js";import{N as m}from"./Icon-eGxnSFmd.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Text-DFJ1zlSw.js";const f={title:"Atoms/Alert",component:o,argTypes:{type:{type:"select",options:["success","info","warning","error"]},effect:{type:"select",options:["light","dark"]}}},d=(n,{argTypes:s})=>({setup:()=>({args:n}),props:Object.keys(s),components:{N8nAlert:o},template:'<div style="position: relative; width: 100%; height: 300px;"><n8n-alert v-bind="args"><template #aside>custom content slot</template></n8n-alert></div>'}),t=d.bind({});t.args={type:"info",effect:"light",title:"Alert title",description:"Alert description",center:!1,showIcon:!0,background:!0};const g=(n,{argTypes:s})=>({setup:()=>({args:n}),props:Object.keys(s),components:{N8nAlert:o,N8nIcon:m},template:`<div style="position: relative; width: 100%; height: 300px;">
              <n8n-alert v-bind="args">
                    <template #title>Title</template>
                    Description
                    <template #aside><button>Button</button></template>
                    <template #icon>
                        <n8n-icon icon="grin-stars" size="xlarge" />
                    </template>
                </n8n-alert>
        </div>`}),e=g.bind({});e.args={type:"info",effect:"light",center:!1,background:!0,showIcon:!1};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nAlert
  },
  template: '<div style="position: relative; width: 100%; height: 300px;"><n8n-alert v-bind="args"><template #aside>custom content slot</template></n8n-alert></div>'
})`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,l,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nAlert,
    N8nIcon
  },
  template: \`<div style="position: relative; width: 100%; height: 300px;">
              <n8n-alert v-bind="args">
                    <template #title>Title</template>
                    Description
                    <template #aside><button>Button</button></template>
                    <template #icon>
                        <n8n-icon icon="grin-stars" size="xlarge" />
                    </template>
                </n8n-alert>
        </div>\`
})`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const A=["ContentAsProps","ContentInSlots"];export{t as ContentAsProps,e as ContentInSlots,A as __namedExportsOrder,f as default};
