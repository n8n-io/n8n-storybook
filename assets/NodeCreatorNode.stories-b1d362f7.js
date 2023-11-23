import{N as s}from"./NodeCreatorNode-3f9d7d86.js";import"./vue.esm-bundler-3aad6c04.js";import"./useI18n-9f39725a.js";import"./index-6a651def.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Tooltip-39565189.js";import"./Button-7453724f.js";import"./Spinner-ae3926a4.js";import"./index-87478f47.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";const T={title:"Modules/Node Creator Node",component:s},m=(n,{argTypes:o})=>({setup:()=>({args:n}),props:Object.keys(o),components:{N8nNodeCreatorNode:s},template:`
        <n8n-node-creator-node v-bind="args">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
        </n8n-node-creator-node>
    `}),e=m.bind({});e.args={title:"Node with title",tooltipHtml:"<b>Bold</b> tooltip",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vehicula ipsum, eu facilisis lacus. Aliquam commodo vel elit eget mollis. Quisque ac elit non purus iaculis placerat. Quisque fringilla ultrices nisi sed porta."};const d=(n,{argTypes:o})=>({setup:()=>({args:n}),props:Object.keys(o),components:{N8nNodeCreatorNode:s},data(){return{isPanelActive:!1}},template:`
        <n8n-node-creator-node v-bind="args" :isPanelActive="isPanelActive" @click.capture="isPanelActive = true">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
            <template #panel>
                <p style="width: 100%; height: 300px; background: white">Lorem ipsum dolor sit amet</p>
                <button @click="isPanelActive = false">Close</button>
            </template>
        </n8n-node-creator-node>
    `}),t=d.bind({});t.args={title:"Node with panel",isTrigger:!0};var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNodeCreatorNode
  },
  template: \`
        <n8n-node-creator-node v-bind="args">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
        </n8n-node-creator-node>
    \`
})`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nNodeCreatorNode
  },
  data() {
    return {
      isPanelActive: false
    };
  },
  template: \`
        <n8n-node-creator-node v-bind="args" :isPanelActive="isPanelActive" @click.capture="isPanelActive = true">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
            <template #panel>
                <p style="width: 100%; height: 300px; background: white">Lorem ipsum dolor sit amet</p>
                <button @click="isPanelActive = false">Close</button>
            </template>
        </n8n-node-creator-node>
    \`
})`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["WithTitle","WithPanel"];export{t as WithPanel,e as WithTitle,S as __namedExportsOrder,T as default};
//# sourceMappingURL=NodeCreatorNode.stories-b1d362f7.js.map
