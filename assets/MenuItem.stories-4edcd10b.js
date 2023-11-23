import{N as S,E as j}from"./MenuItem-416a81ff.js";import"./Tooltip-39565189.js";import"./vue.esm-bundler-3aad6c04.js";import"./Button-7453724f.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Spinner-ae3926a4.js";import"./index-87478f47.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";import"./index-ddeaf72e.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./index-f8748455.js";import"./index-a6727b26.js";import"./error-78e43d3e.js";import"./typescript-defaf979.js";const P={title:"Atoms/MenuItem",component:S},e=(x,{argTypes:E})=>({setup:()=>({args:x}),props:Object.keys(E),components:{ElMenu:j,N8nMenuItem:S},template:`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    `}),n=e.bind({});n.args={item:{id:"workflows",icon:"heart",label:"Workflows"}};const t=e.bind({});t.args={item:{id:"workflows",icon:"heart",label:"Workflows",secondaryIcon:{name:"lock",size:"small"}}};const r=e.bind({});r.args={item:{id:"workflows",icon:"heart",label:"Workflows",secondaryIcon:{name:"lock",size:"small",tooltip:{content:"Locked secret",bindTo:"secondaryIcon"}}}};const o=e.bind({});o.args={item:{id:"compact",icon:"ice-cream",label:"Click here"},compact:!0};const s=e.bind({});s.args={item:{id:"website",icon:"globe",label:"Website",type:"link",properties:{href:"https://www.n8n.io",newWindow:!0}}};const a=e.bind({});a.args={item:{id:"help",icon:"question",label:"Help",children:[{icon:"info",label:"About n8n",id:"about"},{icon:"book",label:"Documentation",id:"docs"},{id:"quickstart",icon:"video",label:"Quickstart",type:"link",properties:{href:"https://www.youtube.com/watch?v=RpjQTGKm-ok",newWindow:!0}}]}};var i,m,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,w,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var k,v,I;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var M,T,f;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    ElMenu,
    N8nMenuItem
  },
  template: \`
        <div style="width: 200px">
            <el-menu>
                <n8n-menu-item v-bind="args" />
            </el-menu>
        </div>
    \`
})`,...(f=(T=a.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const U=["defaultMenuItem","withSecondaryIcon","withSecondaryIconTooltip","compact","link","withChildren"];export{U as __namedExportsOrder,o as compact,P as default,n as defaultMenuItem,s as link,a as withChildren,t as withSecondaryIcon,r as withSecondaryIconTooltip};
//# sourceMappingURL=MenuItem.stories-4edcd10b.js.map
