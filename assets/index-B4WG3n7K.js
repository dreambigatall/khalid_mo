function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DT8R0q74.js","assets/index-BVjO2J-4.js","assets/index-Djv4Mh3H.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BVjO2J-4.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DT8R0q74.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
