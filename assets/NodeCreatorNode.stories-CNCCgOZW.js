import{N as s}from"./NodeCreatorNode-Dh4lvqcI.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./useI18n-BYVGpRei.js";import"./index-BDe0Wd28.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-CJegQ77R.js";import"./Button-Du0lO7te.js";import"./Spinner-ChPi3gPv.js";import"./index-sSNy8MTe.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./constants-B8P1jKxi.js";import"./index-Bt5_zPh1.js";import"./index-D_I6V5Px.js";import"./style-BBe7QGW1.js";import"./index-7glOe3YB.js";import"./use-form-common-props-BTlxgw_X.js";const G={title:"Modules/Node Creator Node",component:s},m=(o,{argTypes:n})=>({setup:()=>({args:o}),props:Object.keys(n),components:{N8nNodeCreatorNode:s},template:`
        <n8n-node-creator-node v-bind="args">
            <template #icon>
                <img src="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/cartman.svg" />
            </template>
        </n8n-node-creator-node>
    `}),e=m.bind({});e.args={title:"Node with title",tooltipHtml:"<b>Bold</b> tooltip",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et vehicula ipsum, eu facilisis lacus. Aliquam commodo vel elit eget mollis. Quisque ac elit non purus iaculis placerat. Quisque fringilla ultrices nisi sed porta."};const d=(o,{argTypes:n})=>({setup:()=>({args:o}),props:Object.keys(n),components:{N8nNodeCreatorNode:s},data(){return{isPanelActive:!1}},template:`
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
})`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const V=["WithTitle","WithPanel"];export{t as WithPanel,e as WithTitle,V as __namedExportsOrder,G as default};
