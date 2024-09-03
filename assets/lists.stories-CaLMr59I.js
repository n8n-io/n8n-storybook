const u={title:"Utilities/Lists"},m=(p,{argTypes:s})=>({props:Object.keys(s),template:`<ul class="list-style-none">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>`}),e=m.bind({}),c=(p,{argTypes:s})=>({props:Object.keys(s),template:`<ul class="list-inline">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>`}),i=c.bind({});var t,l,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  template: \`<ul class="list-style-none">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>\`
})`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var r,a,o;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`(_, {
  argTypes
}) => ({
  props: Object.keys(argTypes),
  template: \`<ul class="list-inline">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>\`
})`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const L=["StyleNone","Inline"];export{i as Inline,e as StyleNone,L as __namedExportsOrder,u as default};
