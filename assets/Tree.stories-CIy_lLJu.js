import{T as a}from"./Tree-BDxWifQ1.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Atoms/Tree",component:a},e=(n,{argTypes:o})=>({setup:()=>({args:n}),props:Object.keys(o),components:{N8nTree:a},template:`<n8n-tree v-bind="args">
        <template v-slot:label="{ label }">
            <span>{{ label }}</span>
        </template>
        <template v-slot:value="{ value }">
            <span>{{ value }}</span>
        </template>
    </n8n-tree>`});e.args={value:{objectKey:{nestedArrayKey:["in progress",33958053],stringKey:"word",aLongKey:"Lorem ipsum dolor sit consectetur adipiscing elit. Sed dignissim aliquam ipsum mattis pellentesque. Phasellus ut ligula fermentum orci elementum dignissim. Vivamus interdum risus eget nibh placerat ultrices. Vivamus orci arcu, iaculis in nulla non, blandit molestie magna. Praesent tristique feugiat odio non vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum purus diam, nec auctor elit consectetur nec. Vestibulum ultrices diam magna, in faucibus odio bibendum id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin lacus neque.",objectKey:{myKey:"what's for lunch",yourKey:"prolle rewe wdyt"},id:123},hello:"world",test:{label:"A cool folder",children:[{label:"A cool sub-folder 1",children:[{label:"A cool sub-sub-folder 1"},{label:"A cool sub-sub-folder 2"}]},{label:"This one is not that cool"}]}}};var t,s,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nTree
  },
  template: \`<n8n-tree v-bind="args">
        <template v-slot:label="{ label }">
            <span>{{ label }}</span>
        </template>
        <template v-slot:value="{ value }">
            <span>{{ value }}</span>
        </template>
    </n8n-tree>\`
})`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,m as default};
