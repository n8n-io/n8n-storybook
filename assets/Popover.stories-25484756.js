import{N as r}from"./Popover-fce1aa45.js";import"./vue.esm-bundler-3aad6c04.js";import"./index-87478f47.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";import"./dropdown-e1be88b6.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./_plugin-vue_export-helper-c27b6911.js";const u={title:"Atoms/Popover",component:r,argTypes:{effect:{control:"select",options:["dark","light"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},disabled:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},a=(p,{argTypes:s})=>({setup:()=>({args:p}),props:Object.keys(s),components:{N8nPopover:r},template:`<n8n-popover v-bind="args">
            <div style="margin:50px; display: inline-block;">
                <span>yo</span>
            </div>
            <template #content>
                Popover
            </template>
        </n8n-popover>`}),o=a.bind({});o.args={content:"..."};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nPopover
  },
  template: \`<n8n-popover v-bind="args">
            <div style="margin:50px; display: inline-block;">
                <span>yo</span>
            </div>
            <template #content>
                Popover
            </template>
        </n8n-popover>\`
})`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const f=["Popover"];export{o as Popover,f as __namedExportsOrder,u as default};
//# sourceMappingURL=Popover.stories-25484756.js.map
