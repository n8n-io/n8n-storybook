import{N as o}from"./UsersList-LIvm5QqT.js";import{a}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./ActionToggle-ByhIm0Sd.js";import"./Icon-eGxnSFmd.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BwcWkopo.js";import"./index-CtRVoKFK.js";import"./index-D_I6V5Px.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./constants-B8P1jKxi.js";import"./style-BBe7QGW1.js";import"./index-CMauXUsi.js";import"./index-_O1BgD2M.js";import"./get-DKi1M5QB.js";import"./_baseGet-CJvEpbeR.js";import"./index-sSNy8MTe.js";import"./use-form-common-props-BTlxgw_X.js";import"./_baseSet-BrV51Xo_.js";import"./_baseAssignValue-BjKO3dwM.js";import"./_isIndex-CSKNA-QO.js";import"./use-form-item-DhSYu2FI.js";import"./index-7glOe3YB.js";import"./icon-CEt9g7ic.js";import"./index-r5W6hzzQ.js";import"./index-BJ5l3qGL.js";import"./error-Cq9Fpw4b.js";import"./dropdown-DgpGeiLd.js";import"./Badge-DprpAbZ0.js";import"./UserInfo-D9vbHoN0.js";import"./Avatar-dmkPYTDH.js";import"./labelUtil-Bb6EHXfA.js";import"./useI18n-BYVGpRei.js";import"./index-BDe0Wd28.js";import"./v4-CQkTLCs1.js";const J={title:"Modules/UsersList",component:o,argTypes:{},parameters:{backgrounds:{default:"--color-background-light"}}},m={action:({action:e})=>a(e)},p=(e,{argTypes:n})=>({setup:()=>({args:e}),props:Object.keys(n),components:{N8nUsersList:o},template:'<n8n-users-list v-bind="args" :actions="actions" @action="action" />',methods:m}),s=p.bind({});s.args={actions:[{label:"Resend Invite",value:"reinvite",guard:e=>!e.firstName},{label:"Delete User",value:"delete"}],users:[{id:"1",firstName:"Sunny",lastName:"Side",fullName:"Sunny Side",email:"sunny@n8n.io",isDefaultUser:!1,isPendingUser:!1,isOwner:!0,signInType:"email",disabled:!1},{id:"2",firstName:"Kobi",lastName:"Dog",fullName:"Kobi Dog",email:"kobi@n8n.io",isDefaultUser:!1,isPendingUser:!1,isOwner:!1,signInType:"ldap",disabled:!0},{id:"3",email:"invited@n8n.io",isDefaultUser:!1,isPendingUser:!0,isOwner:!1}],currentUserId:"1"};var t,i,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nUsersList
  },
  template: '<n8n-users-list v-bind="args" :actions="actions" @action="action" />',
  methods
})`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const Q=["UsersList"];export{s as UsersList,Q as __namedExportsOrder,J as default};
