function r(){const s=new Map;function c(t,e){const n=s.get(t);n&&n.splice(n.indexOf(e)>>>0,1)}function i(t,e){let n=s.get(t);return n?n.push(e):n=[e],s.set(t,n),()=>c(t,e)}function o(t,e){const n=s.get(t);n&&n.slice().forEach(async f=>{await f(e)})}return{on:i,off:c,emit:o}}export{r as c};
//# sourceMappingURL=event-bus-f500010e.js.map
