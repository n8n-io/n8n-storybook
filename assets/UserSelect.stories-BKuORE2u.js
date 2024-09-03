import{N as s}from"./UserSelect-Bxrh0yhu.js";import{a as o}from"./chunk-MZXVCX43-CM0pFb8Z.js";import"./vue.esm-bundler-CKZLKMJN.js";import"./UserInfo-D9vbHoN0.js";import"./Text-DFJ1zlSw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Avatar-dmkPYTDH.js";import"./labelUtil-Bb6EHXfA.js";import"./Badge-DprpAbZ0.js";import"./useI18n-BYVGpRei.js";import"./index-BDe0Wd28.js";import"./Option-DGwcywGk.js";import"./index-D72nbeKo.js";import"./constants-B8P1jKxi.js";import"./plugin-vue_export-helper-DmnD37aS.js";import"./index-sSNy8MTe.js";import"./index-DfE3_O24.js";import"./index-D_I6V5Px.js";import"./style-BBe7QGW1.js";import"./index-7glOe3YB.js";import"./use-form-common-props-BTlxgw_X.js";import"./icon-CEt9g7ic.js";import"./typescript-Bp3YSIOJ.js";import"./event-BB_Ol6Sd.js";import"./use-form-item-DhSYu2FI.js";import"./error-Cq9Fpw4b.js";import"./index-BJ5l3qGL.js";import"./index-Bt5_zPh1.js";import"./get-DKi1M5QB.js";import"./_baseGet-CJvEpbeR.js";import"./index-_O1BgD2M.js";import"./index-CMauXUsi.js";import"./isEqual-PEmCjIlp.js";import"./hasIn-BxG8bepv.js";import"./_isIndex-CSKNA-QO.js";import"./debounce-aL6TwW6w.js";import"./_baseFindIndex-D7XfJLKM.js";import"./_baseIteratee-DX6pvl7i.js";import"./index-J6MGrStv.js";import"./v4-CQkTLCs1.js";const X={title:"Modules/UserSelect",component:s,argTypes:{},parameters:{backgrounds:{default:"--color-background-light"}}},p={onChange:o("change"),onBlur:o("blur"),onFocus:o("focus")},a=(i,{argTypes:m})=>({setup:()=>({args:i}),props:Object.keys(m),components:{N8nUserSelect:s},template:'<n8n-user-select v-bind="args" v-model="val" @change="onChange" @blur="onBlur" @focus="onFocus" />',methods:p,data(){return{val:""}}}),r=a.bind({});r.args={users:[{id:"1",firstName:"Sunny",lastName:"Side",email:"sunny@n8n.io"},{id:"2",firstName:"Kobi",lastName:"Dog",email:"kobi@n8n.io"},{id:"3",email:"invited@n8n.io"}],placeholder:"Select user to transfer to",currentUserId:"1"};var t,e,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    N8nUserSelect
  },
  template: '<n8n-user-select v-bind="args" v-model="val" @change="onChange" @blur="onBlur" @focus="onFocus" />',
  methods,
  data() {
    return {
      val: ''
    };
  }
})`,...(n=(e=r.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const Y=["UserSelect"];export{r as UserSelect,Y as __namedExportsOrder,X as default};
