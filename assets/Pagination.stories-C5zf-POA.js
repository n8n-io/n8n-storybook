import{_ as p}from"./Pagination-CAEDWZzg.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./index-7glOe3YB.js";import"./index-D_I6V5Px.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./constants-B8P1jKxi.js";import"./style-BBe7QGW1.js";import"./icon-CEt9g7ic.js";import"./index-_O1BgD2M.js";import"./get-DKi1M5QB.js";import"./_baseGet-CJvEpbeR.js";import"./index-D72nbeKo.js";import"./index-sSNy8MTe.js";import"./index-DfE3_O24.js";import"./use-form-common-props-BTlxgw_X.js";import"./typescript-Bp3YSIOJ.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-DhSYu2FI.js";import"./error-Cq9Fpw4b.js";import"./index-BJ5l3qGL.js";import"./index-Bt5_zPh1.js";import"./index-CMauXUsi.js";import"./isEqual-PEmCjIlp.js";import"./hasIn-BxG8bepv.js";import"./_isIndex-CSKNA-QO.js";import"./debounce-aL6TwW6w.js";import"./_baseFindIndex-D7XfJLKM.js";import"./_baseIteratee-DX6pvl7i.js";import"./index-J6MGrStv.js";const H={title:"Atoms/Pagination",component:p},m=(n,{argTypes:i})=>({setup:()=>({onUpdateCurrentPage:t=>{n.currentPage=t},onUpdatePageSize:t=>{n.pageSize=t},args:n}),props:Object.keys(i),components:{N8nPagination:p},template:`
        <n8n-pagination
            v-bind="args"
            v-model:current-page="args.currentPage"
            v-model:page-size="args.pageSize"
        />`}),e=m.bind({});e.args={currentPage:1,pagerCount:5,pageSize:10,total:100};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args, {
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
})`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const I=["Pagination"];export{e as Pagination,I as __namedExportsOrder,H as default};
