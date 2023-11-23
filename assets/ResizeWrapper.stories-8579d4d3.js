import{a as n}from"./chunk-AY7I2SME-c7b6cf8a.js";import{N as d}from"./ResizeWrapper-ad1cebcb.js";import{e as a}from"./vue.esm-bundler-3aad6c04.js";import"./_plugin-vue_export-helper-c27b6911.js";const R={title:"Atoms/ResizeWrapper",component:d},b={onInput:n("input"),onResizeEnd:n("resizeend"),onResizeStart:n("resizestart")},z=(t,{argTypes:p})=>({setup:()=>{const r=a(t.width),s=a(t.height);function c(i){n("resize",i),s.value=i.height,r.value=i.width}return{onResize:c,newWidth:r,newHeight:s,background:"linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)",args:t}},props:Object.keys(p),components:{N8nResizeWrapper:d},computed:{containerStyles(){return{width:`${this.newWidth}px`,height:`${this.newHeight}px`,background:this.background}}},template:`<div style="width: fit-content; height: fit-content">
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
    function onResize(resizeData) {
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
})`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const f=["Resize"];export{e as Resize,f as __namedExportsOrder,R as default};
//# sourceMappingURL=ResizeWrapper.stories-8579d4d3.js.map
