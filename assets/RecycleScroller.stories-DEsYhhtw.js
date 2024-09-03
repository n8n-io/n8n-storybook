import{_ as s}from"./RecycleScroller-DAcTxFaL.js";import"./vue.esm-bundler-CKZLKMJN.js";const p={title:"Atoms/RecycleScroller",component:s,argTypes:{}},o=m=>({setup:()=>({args:m}),components:{N8nRecycleScroller:s},data(){return{items:Array.from(Array(256).keys()).map(e=>({id:e}))}},methods:{resizeItem(e,l){const c=this.$refs[`item-${e.id}`];e.height="200px",c.style.height="200px",l(e)},getItemStyle(e){return{height:e.height||"100px",width:"100%",backgroundColor:`hsl(${parseInt(e.id,10)*1.4}, 100%, 50%)`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}},template:`<div style="height: calc(100vh - 30px); width: 100%; overflow: auto">
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
    </div>`}),t=o.bind({});var n,i,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
      const itemRef = ((this as ComponentInstance<typeof N8nRecycleScroller>).$refs[\`item-\${item.id}\`] as HTMLElement);
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
})`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const h=["RecycleScroller"];export{t as RecycleScroller,h as __namedExportsOrder,p as default};
