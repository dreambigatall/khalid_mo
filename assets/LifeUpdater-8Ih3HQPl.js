import{V as w}from"./ValueWithRandom-CtWOyww-.js";import{s as a,I as l,H as f,q as d,J as c}from"./index-B-nJRlAB.js";class R extends w{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class L extends w{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),e.sync!==void 0&&(this.sync=e.sync))}}class V{constructor(){this.count=0,this.delay=new R,this.duration=new L}load(e){e&&(e.count!==void 0&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}const u=0,x=-1,y=0,m=0;function F(i,e,s){if(!i.life)return;const n=i.life;let t=!1;if(i.spawning)if(n.delayTime+=e.value,n.delayTime>=i.life.delay)t=!0,i.spawning=!1,n.delayTime=u,n.time=u;else return;if(n.duration===x||i.spawning||(t?n.time=u:n.time+=e.value,n.time<n.duration))return;if(n.time=u,i.life.count>y&&i.life.count--,i.life.count===y){i.destroy();return}const T=a(m,s.width),v=a(m,s.width);i.position.x=l(T),i.position.y=l(v),i.spawning=!0,n.delayTime=u,n.time=u,i.reset();const r=i.options.life;r&&(n.delay=f(r.delay.value)*d,n.duration=f(r.duration.value)*d)}const o=0,h=1,g=-1;class D{constructor(e){this.container=e}init(e){const s=this.container,n=e.options,t=n.life;t&&(e.life={delay:s.retina.reduceFactor?f(t.delay.value)*(t.delay.sync?h:c())/s.retina.reduceFactor*d:o,delayTime:o,duration:s.retina.reduceFactor?f(t.duration.value)*(t.duration.sync?h:c())/s.retina.reduceFactor*d:o,time:o,count:t.count},e.life.duration<=o&&(e.life.duration=g),e.life.count<=o&&(e.life.count=g),e.life&&(e.spawning=e.life.delay>o))}isEnabled(e){return!e.destroyed}loadOptions(e,...s){e.life||(e.life=new V);for(const n of s)e.life.load(n==null?void 0:n.life)}update(e,s){!this.isEnabled(e)||!e.life||F(e,s,this.container.canvas.size)}}export{D as LifeUpdater};
