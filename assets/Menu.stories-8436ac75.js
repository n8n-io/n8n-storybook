import{N as i}from"./Menu-9a9f6b8b.js";import{N as x}from"./Icon-56e50434.js";import{N as v}from"./Text-c7071bfc.js";import{a as f}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./MenuItem-416a81ff.js";import"./Tooltip-39565189.js";import"./vue.esm-bundler-3aad6c04.js";import"./Button-7453724f.js";import"./Spinner-ae3926a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-87478f47.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./index-f8748455.js";import"./index-a6727b26.js";import"./error-78e43d3e.js";import"./typescript-defaf979.js";const G={title:"Atoms/Menu",component:i,argTypes:{}},a={onSelect:f("select")},y=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nMenu:i},template:`
        <div style="height: 90vh; width: 200px">
            <n8n-menu v-bind="args" @select="onSelect"></n8n-menu>
        </div>
    `,methods:a}),w=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nMenu:i,N8nIcon:x,N8nText:v},template:`
        <div style="height: 90vh; width: 200px">
            <n8n-menu v-bind="args" @select="onSelect">
                <template #header>
                    <a href="#" class="p-m hideme" style="display: block;">
                        <n8n-icon icon="long-arrow-alt-left"/>&nbsp;&nbsp;Back to home
                    </a>
                </template>
                <template #footer>
                    <div class="p-m hideme">
                        <n8n-icon icon="user-circle" size="xlarge"/>&nbsp;&nbsp;
                        <n8n-text>John Smithson</n8n-text>
                    </div>
                </template>
            </n8n-menu>
        </div>
    `,methods:a}),k=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nMenu:i,N8nIcon:x,N8nText:v},template:`
        <div style="height: 90vh; width: 200px">
            <n8n-menu v-bind="args" @select="onSelect">
                <template #header>
                    <a href="#" class="p-m hideme" style="display: block;">
                        <n8n-icon icon="long-arrow-alt-left"/>&nbsp;&nbsp;Back to home
                    </a>
                </template>
                <template #menuPrefix>
                    <n8n-text class="hideme" size="small"  color="text-light">Something can be added here...</n8n-text>
                </template>
                <template #menuSuffix>
                    <n8n-text class="hideme" size="small" color="text-light">...and here if needed</n8n-text>
                </template>
                <template #footer>
                    <div class="p-m hideme">
                        <n8n-icon icon="user-circle" size="xlarge"/>&nbsp;&nbsp;
                        <n8n-text>John Smithson</n8n-text>
                    </div>
                </template>
            </n8n-menu>
        </div>
    `,methods:a}),l=[{id:"workflows",icon:"network-wired",label:"Workflows",position:"top"},{id:"executions",icon:"tasks",label:"Executions",position:"top"},{id:"disabled-item",icon:"times",label:"Not Available",available:!1,position:"top"},{id:"website",icon:"globe",label:"Website",type:"link",properties:{href:"https://www.n8n.io",newWindow:!0},position:"bottom"},{id:"help",icon:"question",label:"Help",position:"bottom",children:[{icon:"info",label:"About n8n",id:"about"},{icon:"book",label:"Documentation",id:"docs"},{id:"disabled-submenu-item",icon:"times",label:"Not Available",available:!1,position:"top"},{id:"quickstart",icon:"video",label:"Quickstart",type:"link",properties:{href:"https://www.youtube.com/watch?v=RpjQTGKm-ok",newWindow:!0}}]}],t=y.bind({});t.args={items:l};const o=w.bind({});o.args={items:l};const s=k.bind({});s.args={items:l};var r,p,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nMenu
  },
  template: \`
        <div style="height: 90vh; width: 200px">
            <n8n-menu v-bind="args" @select="onSelect"></n8n-menu>
        </div>
    \`,
  methods
})`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nMenu,
    N8nIcon,
    N8nText
  },
  template: \`
        <div style="height: 90vh; width: 200px">
            <n8n-menu v-bind="args" @select="onSelect">
                <template #header>
                    <a href="#" class="p-m hideme" style="display: block;">
                        <n8n-icon icon="long-arrow-alt-left"/>&nbsp;&nbsp;Back to home
                    </a>
                </template>
                <template #footer>
                    <div class="p-m hideme">
                        <n8n-icon icon="user-circle" size="xlarge"/>&nbsp;&nbsp;
                        <n8n-text>John Smithson</n8n-text>
                    </div>
                </template>
            </n8n-menu>
        </div>
    \`,
  methods
})`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,u,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nMenu,
    N8nIcon,
    N8nText
  },
  template: \`
        <div style="height: 90vh; width: 200px">
            <n8n-menu v-bind="args" @select="onSelect">
                <template #header>
                    <a href="#" class="p-m hideme" style="display: block;">
                        <n8n-icon icon="long-arrow-alt-left"/>&nbsp;&nbsp;Back to home
                    </a>
                </template>
                <template #menuPrefix>
                    <n8n-text class="hideme" size="small"  color="text-light">Something can be added here...</n8n-text>
                </template>
                <template #menuSuffix>
                    <n8n-text class="hideme" size="small" color="text-light">...and here if needed</n8n-text>
                </template>
                <template #footer>
                    <div class="p-m hideme">
                        <n8n-icon icon="user-circle" size="xlarge"/>&nbsp;&nbsp;
                        <n8n-text>John Smithson</n8n-text>
                    </div>
                </template>
            </n8n-menu>
        </div>
    \`,
  methods
})`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const K=["primary","withHeaderAndFooter","withAllSlots"];export{K as __namedExportsOrder,G as default,t as primary,s as withAllSlots,o as withHeaderAndFooter};
//# sourceMappingURL=Menu.stories-8436ac75.js.map
