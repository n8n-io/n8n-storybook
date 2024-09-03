import{d as We,r as Z,f as L,o as t,a as n,b as r,y as a,p as m,u as l,F as ee,E as se,B as c,z as o,D as $,N as Ve,P as Ge,Q as Fe,I as H,H as q,j as g,n as Ke}from"./vue.esm-bundler-CKZLKMJN.js";import{_ as Je}from"./AssistantIcon-BEU28d5l.js";import{A as Qe}from"./AssistantText-C8E-RKwD.js";import{A as Xe}from"./AssistantAvatar-Ymgo_BLG.js";import{A as Ye}from"./AssistantLoadingMessage-XKbD6x91.js";import{C as Ze}from"./CodeDiff-CbQbiCDd.js";import{B as P}from"./BlinkingCursor-OBRuj4_J.js";import{M as es,m as ss}from"./index-BLj1J-hq.js";import{I as te}from"./InlineAskAssistantButton-CylKjLdd.js";import{B as ts}from"./BetaTag-OUlfXt8J.js";import{u as as}from"./useI18n-BYVGpRei.js";import{_ as ns}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BDe0Wd28.js";const rs=["data-test-id"],os={key:2},is={key:3},ls={key:1},ds=["innerHTML"],cs=["innerHTML"],ps=["innerHTML"],ms={key:4},us=["disabled","placeholder","onKeydown"],hs=100,Re=We({__name:"AskAssistantChat",props:{user:{},messages:{},streaming:{type:Boolean},loadingMessage:{},sessionId:{}},emits:["close","message","codeReplace","codeUndo"],setup(I,{emit:R}){const{t:i}=as(),Oe=new es({breaks:!0}).use(ss,{attrs:{target:"_blank",rel:"noopener"}}),y=R,Ee=()=>y("close"),h=I,f=Z(""),u=Z(null),B=L(()=>{var e;return O((e=h.messages)==null?void 0:e[h.messages.length-1])}),j=L(()=>!f.value||h.streaming||B.value),Le=L(()=>{var e;return!((e=h.messages)!=null&&e.length)&&!h.loadingMessage&&!h.sessionId});function O(e){return(e==null?void 0:e.type)==="event"&&(e==null?void 0:e.eventName)==="end-session"}function He(e){y("message",e.text,e.type,e.isFeedback)}function D(){j.value||(y("message",f.value),f.value="",u.value&&(u.value.style.height="auto"))}function E(e){try{return Oe.render(e)}catch{return console.error(`Error parsing markdown content ${e}`),`<p>${i("assistantChat.errorParsingMarkdown")}</p>`}}function Pe(){if(!u.value)return;u.value.style.height="auto";const e=u.value.scrollHeight;u.value.style.height=`${Math.min(e,hs)}px`}return(e,k)=>{var U,z,W;const je=q("n8n-icon"),De=q("n8n-avatar"),Ue=q("n8n-button"),ze=q("n8n-icon-button");return t(),n("div",{class:a(e.$style.container)},[r("div",{class:a(e.$style.header)},[r("div",{class:a(e.$style.chatTitle)},[r("div",{class:a(e.$style.headerText)},[m(Je,{size:"large"}),m(Qe,{size:"large",text:l(i)("assistantChat.aiAssistantLabel")},null,8,["text"])],2),m(ts)],2),r("div",{class:a(e.$style.back),"data-test-id":"close-chat-button",onClick:Ee},[m(je,{icon:"arrow-right",color:"text-base"})],2)],2),r("div",{class:a(e.$style.body)},[(U=e.messages)!=null&&U.length?(t(),n("div",{key:0,class:a(e.$style.messages)},[(t(!0),n(ee,null,se(e.messages,(s,d)=>{var V,G,F,K,J,Q,X,Y;return t(),n("div",{key:d,class:a(e.$style.message),"data-test-id":s.role==="assistant"?"chat-message-assistant":"chat-message-user"},[!O(s)&&(d===0||s.role!==e.messages[d-1].role)?(t(),n("div",{key:0,class:a({[e.$style.roleName]:!0,[e.$style.userSection]:d>0})},[s.role==="assistant"?(t(),g(Xe,{key:0})):(t(),g(De,{key:1,"first-name":(V=e.user)==null?void 0:V.firstName,"last-name":(G=e.user)==null?void 0:G.lastName,size:"xsmall"},null,8,["first-name","last-name"])),s.role==="assistant"?(t(),n("span",os,o(l(i)("assistantChat.aiAssistantName")),1)):(t(),n("span",is,o(l(i)("assistantChat.you")),1))],2)):c("",!0),s.type==="block"?(t(),n("div",ls,[r("div",{class:a(e.$style.block)},[r("div",{class:a(e.$style.blockTitle)},[$(o(s.title)+" ",1),e.streaming&&d===((F=e.messages)==null?void 0:F.length)-1&&!s.content?(t(),g(P,{key:0})):c("",!0)],2),r("div",{class:a(e.$style.blockBody)},[r("span",{innerHTML:E(s.content)},null,8,ds),e.streaming&&d===((K=e.messages)==null?void 0:K.length)-1&&s.title&&s.content?(t(),g(P,{key:0})):c("",!0)],2)],2)])):s.type==="text"?(t(),n("div",{key:2,class:a(e.$style.textMessage)},[s.role==="user"?(t(),n("span",{key:0,innerHTML:E(s.content)},null,8,cs)):(t(),n("span",{key:1,class:a(e.$style.assistantText),innerHTML:E(s.content)},null,10,ps)),e.streaming&&d===((J=e.messages)==null?void 0:J.length)-1&&s.role==="assistant"?(t(),g(P,{key:2})):c("",!0)],2)):s.type==="error"?(t(),n("div",{key:3,class:a(e.$style.error),"data-test-id":"chat-message-system"},[r("span",null,"⚠️ "+o(s.content),1)],2)):s.type==="code-diff"?(t(),n("div",ms,[m(Ze,{title:s.description,content:s.codeDiff,replacing:s.replacing,replaced:s.replaced,error:s.error,streaming:e.streaming&&d===((Q=e.messages)==null?void 0:Q.length)-1,onReplace:()=>y("codeReplace",d),onUndo:()=>y("codeUndo",d)},null,8,["title","content","replacing","replaced","error","streaming","onReplace","onUndo"])])):O(s)?(t(),n("div",{key:5,class:a(e.$style.endOfSessionText),"data-test-id":"chat-message-system"},[r("span",null,o(l(i)("assistantChat.sessionEndMessage.1")),1),m(te,{size:"small",static:!0}),r("span",null,o(l(i)("assistantChat.sessionEndMessage.2")),1)],2)):c("",!0),!e.streaming&&"quickReplies"in s&&((X=s.quickReplies)!=null&&X.length)&&d===((Y=e.messages)==null?void 0:Y.length)-1?(t(),n("div",{key:6,class:a(e.$style.quickReplies)},[r("div",{class:a(e.$style.quickRepliesTitle)},o(l(i)("assistantChat.quickRepliesTitle")),3),(t(!0),n(ee,null,se(s.quickReplies,x=>(t(),n("div",{key:x.type,"data-test-id":"quick-replies"},[x.text?(t(),g(Ue,{key:0,type:"secondary",size:"mini",onClick:()=>He(x)},{default:Ke(()=>[$(o(x.text),1)]),_:2},1032,["onClick"])):c("",!0)]))),128))],2)):c("",!0)],10,rs)}),128))],2)):c("",!0),e.loadingMessage?(t(),n("div",{key:1,class:a(e.$style.messages)},[m(Ye,{message:e.loadingMessage},null,8,["message"])],2)):Le.value?(t(),n("div",{key:2,class:a(e.$style.placeholder),"data-test-id":"placeholder-message"},[r("div",{class:a(e.$style.greeting)},"Hi "+o((z=e.user)==null?void 0:z.firstName)+" 👋",3),r("div",{class:a(e.$style.info)},[r("p",null,o(l(i)("assistantChat.placeholder.1")),1),r("p",null,o(l(i)("assistantChat.placeholder.2")),1),r("p",null,[$(o(l(i)("assistantChat.placeholder.3"))+" ",1),m(te,{size:"small",static:!0}),$(" "+o(l(i)("assistantChat.placeholder.4")),1)]),r("p",null,o(l(i)("assistantChat.placeholder.5")),1)],2)],2)):c("",!0)],2),(W=e.messages)!=null&&W.length?(t(),n("div",{key:0,class:a({[e.$style.inputWrapper]:!0,[e.$style.disabledInput]:B.value}),"data-test-id":"chat-input-wrapper"},[Ve(r("textarea",{ref_key:"chatInput",ref:u,"onUpdate:modelValue":k[0]||(k[0]=s=>f.value=s),disabled:B.value,placeholder:l(i)("assistantChat.inputPlaceholder"),rows:"1",wrap:"hard","data-test-id":"chat-input",onKeydown:[Fe(H(D,["exact","prevent"]),["enter"]),k[1]||(k[1]=H(()=>{},["stop"]))],onInput:H(Pe,["prevent"])},null,40,us),[[Ge,f.value]]),m(ze,{class:a({[e.$style.sendButton]:!0}),icon:"paper-plane",type:"text",size:"large","data-test-id":"send-message-button",disabled:j.value,onClick:D},null,8,["class","disabled"])],2)):c("",!0)],2)}}}),gs="_container_1lf5c_1",ys="_header_1lf5c_11",fs="_body_1lf5c_27",ks="_placeholder_1lf5c_42",bs="_messages_1lf5c_46",vs="_message_1lf5c_46",Ts="_roleName_1lf5c_59",_s="_userSection_1lf5c_70",Cs="_chatTitle_1lf5c_74",As="_headerText_1lf5c_79",ws="_greeting_1lf5c_83",Ss="_info_1lf5c_89",Ms="_back_1lf5c_97",Ns="_quickReplies_1lf5c_101",xs="_quickRepliesTitle_1lf5c_108",$s="_textMessage_1lf5c_113",qs="_block_1lf5c_119",Is="_blockTitle_1lf5c_130",Rs="_blockBody_1lf5c_136",Bs="_inputWrapper_1lf5c_140",Os="_sendButton_1lf5c_161",Es="_error_1lf5c_168",Ls="_assistantText_1lf5c_172",Hs="_endOfSessionText_1lf5c_185",Ps="_disabledInput_1lf5c_199",js={container:gs,header:ys,body:fs,placeholder:ks,messages:bs,message:vs,roleName:Ts,userSection:_s,chatTitle:Cs,headerText:As,greeting:ws,info:Ss,back:Ms,quickReplies:Ns,quickRepliesTitle:xs,textMessage:$s,block:qs,blockTitle:Is,blockBody:Rs,inputWrapper:Bs,sendButton:Os,error:Es,assistantText:Ls,endOfSessionText:Hs,disabledInput:Ps},Ds={$style:js},Be=ns(Re,[["__cssModules",Ds]]);Re.__docgenInfo={exportName:"default",displayName:"AskAssistantChat",description:"",tags:{},props:[{name:"user",required:!1,type:{name:`{
    firstName: string;
    lastName: string;
}`}},{name:"messages",required:!1,type:{name:"Array",elements:[{name:"TSTypeReference"}]}},{name:"streaming",required:!1,type:{name:"boolean"}},{name:"loadingMessage",required:!1,type:{name:"string"}},{name:"sessionId",required:!1,type:{name:"string"}}],events:[{name:"close"},{name:"message",type:{names:["string"]}},{name:"codeReplace",type:{names:["number"]}},{name:"codeUndo",type:{names:["number"]}}],sourceFiles:["/home/runner/work/n8n-storybook/n8n-storybook/packages/design-system/src/components/AskAssistantChat/AskAssistantChat.vue"]};const at={title:"Assistant/AskAssistantChat",component:Be,argTypes:{}};const Us={},p=(I,{argTypes:R})=>({setup:()=>({args:I}),props:Object.keys(R),components:{AskAssistantChat:Be},template:'<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',methods:Us}),b=p.bind({});b.args={user:{firstName:"Max",lastName:"Test"}};const v=p.bind({});v.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"1",type:"text",role:"assistant",content:"Hi Max! Here is my top solution to fix the error in your **Transform data** node👇",read:!1},{id:"1",type:"code-diff",role:"assistant",description:"Short solution description here that can spill over to two lines",codeDiff:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can be named is not the eternal name.
The Nameless is the origin of Heaven and Earth;
-The Named is the mother of all things.
+The named is the mother of all things.
+
Therefore let there always be non-being,
so we may see their subtlety,
And let there always be being,
@@ -9,3 +8,6 @@
 The two are the same,
 But after they are produced,
 they have different names.
+They both may be called deep and profound.
+Deeper and more profound,
+The door of all subtleties!`,suggestionId:"test",quickReplies:[{type:"new-suggestion",text:"Give me another solution"},{type:"resolved",text:"All good"}],read:!1},{id:"2",type:"text",role:"user",content:"Give it to me **ignore this markdown**",read:!1},{id:"2",type:"block",role:"assistant",title:"Credential doesn’t have correct permissions to send a message",content:`Solution steps:
1. Lorem ipsum dolor sit amet, consectetur **adipiscing** elit. Proin id nulla placerat, tristique ex at, euismod dui.
2. Copy this into somewhere
3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla placerat, tristique ex at, euismod dui.
4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla placerat, tristique ex at, euismod dui. 
 Testing more code 
 - Unordered item 1 
 - Unordered item 2`,read:!1},{id:"2",type:"code-diff",role:"assistant",description:"Short solution with min height",codeDiff:`@@ -1,7 +1,6 @@
-The Way that can be told of is not the eternal Way;
-The name that can be named is not the eternal name.
+The door of all subtleties!`,quickReplies:[{type:"new-suggestion",text:"Give me another solution"},{type:"resolved",text:"All good"}],suggestionId:"test",read:!1}]};const T=p.bind({});T.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"123",role:"assistant",type:"block",title:"Credential doesn’t have correct permissions to send a message",content:`Solution steps:
1. Lorem ipsum dolor sit amet, consectetur **adipiscing** elit. Proin id nulla placerat, tristique ex at, euismod dui.
2. Copy this into somewhere
3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla placerat, tristique ex at, euismod dui.
4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla placerat, tristique ex at, euismod dui. 
 Testing more code 
 - Unordered item 1 
 - Unordered item 2`,read:!1}]};const _=p.bind({});_.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"123",role:"assistant",type:"block",title:"Credential doesn’t have",content:"",read:!1}],streaming:!0};const C=p.bind({});C.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"123",role:"assistant",type:"block",title:"Credential doesn’t have correct permissions to send a message",content:`Solution steps:
1. Lorem ipsum dolor sit amet, consectetur`,read:!1}],streaming:!0};const A=p.bind({});A.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"123",role:"assistant",type:"error",content:"There was an error reaching the service",read:!1}]};const w=p.bind({});w.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"123",type:"text",role:"assistant",content:"",read:!1}],streaming:!0};const S=p.bind({});S.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"123",type:"text",role:"assistant",content:"I am thinking through this problem",read:!1}],streaming:!0};const M=p.bind({});M.args={user:{firstName:"Max",lastName:"Test"},messages:[{id:"123",type:"text",role:"assistant",content:"Great, glad I could help! I'm here whenever you need more help.",read:!1},{id:"123",role:"assistant",type:"event",eventName:"end-session",read:!1}]};const N=p.bind({});N.args={user:{firstName:"Max",lastName:"Test"},loadingMessage:"Thinking..."};var ae,ne,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(re=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,ie,le;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ce,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(pe=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,he;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(he=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,ye,fe;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(fe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ke,be,ve;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(ve=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Te,_e,Ce;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(Ce=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Ae,we,Se;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(Se=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Me,Ne,xe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(xe=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:xe.source}}};var $e,qe,Ie;N.parameters={...N.parameters,docs:{...($e=N.parameters)==null?void 0:$e.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => ({
    args
  }),
  props: Object.keys(argTypes),
  components: {
    AskAssistantChat
  },
  template: '<div style="width:275px; height:100%"><ask-assistant-chat v-bind="args" /></div>',
  methods
})`,...(Ie=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:Ie.source}}};const nt=["DefaultPlaceholderChat","Chat","JustSummary","SummaryTitleStreaming","SummaryContentStreaming","ErrorChat","EmptyStreamingChat","StreamingChat","EndOfSessionChat","AssistantThinkingChat"];export{N as AssistantThinkingChat,v as Chat,b as DefaultPlaceholderChat,w as EmptyStreamingChat,M as EndOfSessionChat,A as ErrorChat,T as JustSummary,S as StreamingChat,C as SummaryContentStreaming,_ as SummaryTitleStreaming,nt as __namedExportsOrder,at as default};
