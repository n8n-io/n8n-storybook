import{_ as r}from"./Popover-BO-Wmvj7.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./index-sSNy8MTe.js";import"./constants-B8P1jKxi.js";import"./dropdown-DgpGeiLd.js";import"./icon-CEt9g7ic.js";import"./index-7glOe3YB.js";import"./style-BBe7QGW1.js";const f={title:"Atoms/Popover",component:r,argTypes:{effect:{control:"select",options:["dark","light"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},disabled:{control:{type:"boolean"}}},parameters:{backgrounds:{default:"--color-background-light"}}},a=(p,{argTypes:s})=>({setup:()=>({args:p}),props:Object.keys(s),components:{N8nPopover:r},template:`<n8n-popover v-bind="args">
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
})`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const u=["Popover"];export{o as Popover,u as __namedExportsOrder,f as default};
