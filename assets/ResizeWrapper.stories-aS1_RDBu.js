import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{R as p}from"./ResizeWrapper-V1iYg7VF.js";import{r as a}from"./vue.esm-bundler-CKZLKMJN.js";import"./v4-CQkTLCs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Atoms/ResizeWrapper",component:p},b={onInput:t("input"),onResizeEnd:t("resizeend"),onResizeStart:t("resizestart")},z=(n,{argTypes:d})=>({setup:()=>{const r=a(n.width),s=a(n.height);function c(i){t("resize",i),s.value=i.height,r.value=i.width}return{onResize:c,newWidth:r,newHeight:s,background:"linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",args:n}},props:Object.keys(d),components:{N8nResizeWrapper:p},computed:{containerStyles(){return{width:`${this.newWidth}px`,height:`${this.newHeight}px`,background:this.background}}},template:`<div style="width: fit-content; height: fit-content">
            <n8n-resize-wrapper
                v-bind="args"
                @resize="onResize"
                @resizeend="onResizeEnd"
                @resizestart="onResizeStart"
                @input="onInput"
                :width="newWidth"
                :height="newHeight"
            >
                <div :style="containerStyles" />
            </n8n-resize-wrapper>
        </div>`,methods:b}),e=z.bind({});e.args={width:200,height:200,minWidth:200,minHeight:200,scale:1,gridSize:20,isResizingEnabled:!0,supportedDirections:["right","top","bottom","left","topLeft","topRight","bottomLeft","bottomRight"]};var o,g,h;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  setup: () => {
    const newWidth = ref(args.width);
    const newHeight = ref(args.height);
    function onResize(resizeData: ResizeData) {
      action('resize', resizeData);
      newHeight.value = resizeData.height;
      newWidth.value = resizeData.width;
    }
    return {
      onResize,
      newWidth,
      newHeight,
      background: 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)',
      args
    };
  },
  props: Object.keys(argTypes),
  components: {
    N8nResizeWrapper
  },
  computed: {
    containerStyles() {
      return {
        width: \`\${this.newWidth}px\`,
        height: \`\${this.newHeight}px\`,
        background: this.background
      };
    }
  },
  template: \`<div style="width: fit-content; height: fit-content">
            <n8n-resize-wrapper
                v-bind="args"
                @resize="onResize"
                @resizeend="onResizeEnd"
                @resizestart="onResizeStart"
                @input="onInput"
                :width="newWidth"
                :height="newHeight"
            >
                <div :style="containerStyles" />
            </n8n-resize-wrapper>
        </div>\`,
  methods
})`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const W=["Resize"];export{e as Resize,W as __namedExportsOrder,f as default};
