import{N as p}from"./Pagination-3d67af83.js";import"./vue.esm-bundler-3aad6c04.js";import"./index-2f5ce3f5.js";import"./index-ddeaf72e.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";import"./icon-e7a1400f.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-02e7f3ca.js";import"./index-87478f47.js";import"./index-bf139a46.js";import"./use-form-item-4955f742.js";import"./typescript-defaf979.js";import"./event-9519ab40.js";import"./error-78e43d3e.js";import"./index-2b9737a3.js";import"./index-a6727b26.js";import"./isEqual-d33d3be5.js";import"./_isIndex-af14b756.js";import"./index-5bb75181.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={title:"Atoms/Pagination",component:p},g=(n,{argTypes:i})=>({setup:()=>({onUpdateCurrentPage:t=>{n.currentPage=t},onUpdatePageSize:t=>{n.pageSize=t},args:n}),props:Object.keys(i),components:{N8nPagination:p},template:`
        <n8n-pagination
            v-bind="args"
            v-model:current-page="args.currentPage"
            v-model:page-size="args.pageSize"
        />`}),e=g.bind({});e.args={currentPage:1,pagerCount:5,pageSize:10,total:100};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => {
    const onUpdateCurrentPage = (currentPage: number) => {
      args.currentPage = currentPage;
    };
    const onUpdatePageSize = (pageSize: number) => {
      args.pageSize = pageSize;
    };
    return {
      onUpdateCurrentPage,
      onUpdatePageSize,
      args
    };
  },
  props: Object.keys(argTypes),
  components: {
    N8nPagination
  },
  template: \`
        <n8n-pagination
            v-bind="args"
            v-model:current-page="args.currentPage"
            v-model:page-size="args.pageSize"
        />\`
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const q=["Pagination"];export{e as Pagination,q as __namedExportsOrder,h as default};
//# sourceMappingURL=Pagination.stories-c7d542a5.js.map
