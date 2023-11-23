import{N as n}from"./UsersList-bff4bf3b.js";import{a as t}from"./chunk-AY7I2SME-c7b6cf8a.js";import"./ActionToggle-2aa92a44.js";import"./vue.esm-bundler-3aad6c04.js";import"./Icon-56e50434.js";import"./Text-c7071bfc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-86b08e70.js";import"./index-4cb8128b.js";import"./index-ddeaf72e.js";import"./plugin-vue_export-helper-f0b8ed3c.js";import"./constants-5bd8a862.js";import"./icon-e7a1400f.js";import"./index-2f5ce3f5.js";import"./index-a6727b26.js";import"./index-2dca196e.js";import"./_baseGet-5c2f929b.js";import"./index-87478f47.js";import"./use-form-item-4955f742.js";import"./_baseSet-3e5455a7.js";import"./_isIndex-af14b756.js";import"./index-f8748455.js";import"./index-2b9737a3.js";import"./error-78e43d3e.js";import"./dropdown-e1be88b6.js";import"./Badge-baf26272.js";import"./UserInfo-4fb26edc.js";import"./Avatar-25c3c726.js";import"./locale-6fa44ca8.js";import"./index-6a651def.js";const A={title:"Modules/UsersList",component:n,argTypes:{},parameters:{backgrounds:{default:"--color-background-light"}}},m={onReinvite:t("reinvite"),onDelete:t("delete")},p=(s,{argTypes:a})=>({setup:()=>({args:s}),props:Object.keys(a),components:{N8nUsersList:n},template:'<n8n-users-list v-bind="args" :actions="actions" @reinvite="onReinvite" @delete="onDelete" />',methods:m}),e=p.bind({});e.args={actions:[{label:"Resend Invite",value:"reinvite",guard:s=>!s.firstName},{label:"Delete User",value:"delete"}],users:[{id:"1",firstName:"Sunny",lastName:"Side",fullName:"Sunny Side",email:"sunny@n8n.io",isDefaultUser:!1,isPendingUser:!1,isOwner:!0,signInType:"email",disabled:!1},{id:"2",firstName:"Kobi",lastName:"Dog",fullName:"Kobi Dog",email:"kobi@n8n.io",isDefaultUser:!1,isPendingUser:!1,isOwner:!1,signInType:"ldap",disabled:!0},{id:"3",email:"invited@n8n.io",isDefaultUser:!1,isPendingUser:!0,isOwner:!1}],currentUserId:"1"};var i,r,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nUsersList
  },
  template: '<n8n-users-list v-bind="args" :actions="actions" @reinvite="onReinvite" @delete="onDelete" />',
  methods
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const B=["UsersList"];export{e as UsersList,B as __namedExportsOrder,A as default};
//# sourceMappingURL=UsersList.stories-576dd450.js.map
