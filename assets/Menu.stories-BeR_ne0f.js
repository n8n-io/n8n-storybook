import{N as i}from"./Menu-czaOSERH.js";import{N as x}from"./Icon-eGxnSFmd.js";import{N as v}from"./Text-DFJ1zlSw.js";import{a as f}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./MenuItem-TV6lHJVo.js";import"./Tooltip-CJegQ77R.js";import"./Button-Du0lO7te.js";import"./Spinner-ChPi3gPv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-sSNy8MTe.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./constants-B8P1jKxi.js";import"./labelUtil-Bb6EHXfA.js";import"./index-D_I6V5Px.js";import"./style-BBe7QGW1.js";import"./index-7glOe3YB.js";import"./index-r5W6hzzQ.js";import"./icon-CEt9g7ic.js";import"./index-CMauXUsi.js";import"./error-Cq9Fpw4b.js";import"./typescript-Bp3YSIOJ.js";import"./v4-CQkTLCs1.js";const C={title:"Atoms/Menu",component:i,argTypes:{}},a={onSelect:f("select")},y=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nMenu:i},template:`
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
    `,methods:a}),l=[{id:"workflows",icon:"network-wired",label:"Workflows",position:"top"},{id:"executions",icon:"tasks",label:"Executions",position:"top"},{id:"disabled-item",icon:"times",label:"Not Available",available:!1,position:"top"},{id:"website",icon:"globe",label:"Website",link:{href:"https://www.n8n.io",target:"_blank"},position:"bottom"},{id:"help",icon:"question",label:"Help",position:"bottom",children:[{icon:"info",label:"About n8n",id:"about"},{icon:"book",label:"Documentation",id:"docs"},{id:"disabled-submenu-item",icon:"times",label:"Not Available",available:!1,position:"top"},{id:"quickstart",icon:"video",label:"Quickstart",link:{href:"https://www.youtube.com/watch?v=RpjQTGKm-ok",target:"_blank"}}]}],t=y.bind({});t.args={items:l};const o=w.bind({});o.args={items:l};const s=k.bind({});s.args={items:l};var r,p,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
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
})`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const L=["primary","withHeaderAndFooter","withAllSlots"];export{L as __namedExportsOrder,C as default,t as primary,s as withAllSlots,o as withHeaderAndFooter};
