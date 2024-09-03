import{N as a}from"./Markdown-CCO5iGuy.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./index-BLj1J-hq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Loading-D7dM4JAo.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./index-7glOe3YB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"Atoms/Markdown",component:a,argTypes:{content:{control:{type:"text"}},loading:{control:{type:"boolean"}},loadingBlocks:{control:{type:"select"},options:[1,2,3,4,5]},loadingRows:{control:{type:"select"},options:[1,2,3,4,5]}}},c=(o,{argTypes:t})=>({setup:()=>({args:o}),props:Object.keys(t),components:{N8nMarkdown:a},template:'<n8n-markdown v-bind="args"></n8n-markdown>'}),n=c.bind({});n.args={content:`I wanted a system to monitor website content changes and notify me. So I made it using n8n.

Especially my competitor blogs. I wanted to know how often they are posting new articles. (I used their sitemap.xml file) (The below workflow may vary)

In the Below example, I used HackerNews for example.

Explanation:

- First HTTP Request node crawls the webpage and grabs the website source code
- Then wait for x minutes
- Again, HTTP Node crawls the webpage
- If Node compares both results are equal if anything is changed. It’ll go to the false branch and notify me in telegram.

**Workflow:**

![](fileId:1)

**Sample Response:**

![](https://community.n8n.io/uploads/default/original/2X/d/d21ba41d7ac9ff5cd8148fedb07d0f1ff53b2529.png)
`,loading:!1,images:[{id:1,url:"https://community.n8n.io/uploads/default/optimized/2X/b/b737a95de4dfe0825d50ca098171e9f33a459e74_2_690x288.png"}]};const l=(o,{argTypes:t})=>({setup:()=>({args:o}),props:Object.keys(t),components:{N8nMarkdown:a},template:'<n8n-markdown v-bind="args"></n8n-markdown>'}),e=l.bind({});e.args={content:`__TODO__
- [ ] Buy milk
- [X] Buy socks
`,loading:!1};var s,r,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nMarkdown
  },
  template: '<n8n-markdown v-bind="args"></n8n-markdown>'
})`,...(p=(r=n.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nMarkdown
  },
  template: '<n8n-markdown v-bind="args"></n8n-markdown>'
})`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const x=["Markdown","WithCheckboxes"];export{n as Markdown,e as WithCheckboxes,x as __namedExportsOrder,T as default};
