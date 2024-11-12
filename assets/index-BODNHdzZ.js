function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Co2voe6a.js","assets/index-B-nJRlAB.js","assets/index-Djv4Mh3H.css","assets/index-Yp0AjZy9.js","assets/index-F_Oo1gYT.js","assets/index-DNzTQ-9J.js","assets/index-D4TEmea7.js","assets/index-DuBLF5rL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B-nJRlAB.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Co2voe6a.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Yp0AjZy9.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-F_Oo1gYT.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DNzTQ-9J.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D4TEmea7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DuBLF5rL.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
