function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-w0QEDeYn.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-B-nJRlAB.js","assets/index-Djv4Mh3H.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as o,_ as r}from"./index-B-nJRlAB.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-w0QEDeYn.js"),__vite__mapDeps([0,1,2,3]));return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};