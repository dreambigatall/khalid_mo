function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-xwQYs2D1.js","assets/index-BVjO2J-4.js","assets/index-Djv4Mh3H.css","assets/index-C5DmJh3n.js","assets/index-Ci51TnaO.js","assets/index-pUsPwpul.js","assets/index-CYZ3s2n8.js","assets/index-B4WG3n7K.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BVjO2J-4.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-xwQYs2D1.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C5DmJh3n.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ci51TnaO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-pUsPwpul.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CYZ3s2n8.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B4WG3n7K.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
