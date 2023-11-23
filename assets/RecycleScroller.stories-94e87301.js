import{N as m}from"./RecycleScroller-89042973.js";import"./vue.esm-bundler-3aad6c04.js";import"./_plugin-vue_export-helper-c27b6911.js";const h={title:"Atoms/RecycleScroller",component:m,argTypes:{}},a=l=>({setup:()=>({args:l}),components:{N8nRecycleScroller:m},data(){return{items:Array.from(Array(256).keys()).map(e=>({id:e}))}},methods:{resizeItem(e,c){const o=this.$refs[`item-${e.id}`];e.height="200px",o.style.height="200px",c(e)},getItemStyle(e){return{height:e.height||"100px",width:"100%",backgroundColor:`hsl(${parseInt(e.id,10)*1.4}, 100%, 50%)`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}},template:`<div style="height: calc(100vh - 30px); width: 100%; overflow: auto">
        <N8nRecycleScroller :items="items" :item-size="100" item-key="id" v-bind="args">
            <template	#default="{ item, updateItemSize }">
                <div
                    :ref="'item-' + item.id"
                    :style="getItemStyle(item)"
                    @click="resizeItem(item, updateItemSize)"
                >
                    {{item.id}}
                </div>
            </template>
        </N8nRecycleScroller>
    </div>`}),t=a.bind({});var i,r,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  setup: () => ({
    args
  }),
  components: {
    N8nRecycleScroller
  },
  data() {
    return {
      items: (Array.from(Array(256).keys()).map(i => ({
        id: i
      })) as Array<{
        id: number;
        height: number;
      }>)
    };
  },
  methods: {
    resizeItem(item: {
      id: string;
      height: string;
    }, fn: (item: {
      id: string;
    }) => void) {
      const itemRef = ((this as ComponentInstance).$refs[\`item-\${item.id}\`] as HTMLElement);
      item.height = '200px';
      itemRef.style.height = '200px';
      fn(item);
    },
    getItemStyle(item: {
      id: string;
      height?: string;
    }) {
      return {
        height: item.height || '100px',
        width: '100%',
        backgroundColor: \`hsl(\${parseInt(item.id, 10) * 1.4}, 100%, 50%)\`,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };
    }
  },
  template: \`<div style="height: calc(100vh - 30px); width: 100%; overflow: auto">
        <N8nRecycleScroller :items="items" :item-size="100" item-key="id" v-bind="args">
            <template	#default="{ item, updateItemSize }">
                <div
                    :ref="'item-' + item.id"
                    :style="getItemStyle(item)"
                    @click="resizeItem(item, updateItemSize)"
                >
                    {{item.id}}
                </div>
            </template>
        </N8nRecycleScroller>
    </div>\`
})`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const y=["RecycleScroller"];export{t as RecycleScroller,y as __namedExportsOrder,h as default};
//# sourceMappingURL=RecycleScroller.stories-94e87301.js.map
