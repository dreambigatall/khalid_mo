function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-D3TD7Bgt.js","assets/index-BVjO2J-4.js","assets/index-Djv4Mh3H.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BVjO2J-4.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-D3TD7Bgt.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
