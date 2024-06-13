"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("three"),r=require("@react-three/fiber"),t=require("react");function o(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var n=o(e),s=o(t);const a=e=>{if(Array.isArray(e))return e[0];if("object"==typeof e&&null!==e){return e[Object.keys(e)[0]][0]}return{w:0,h:0}},u=e=>{for(let r=3;r<e.length;r+=4)if(0!==e[r])return!1;return!0},i=(e,r,t,o)=>{const s=r*(o.aspect>e/r?o.width/e:o.height/r),a=e*(o.aspect>e/r?o.width/e:o.height/r)*t,u=s*t;let i=Math.min(1,a),c=Math.min(1,u);return a>1&&(i=1,c=u/a*1),new n.Vector3(i,c,1)};function c(o,c,f,h,l){const m=r.useThree((e=>e.viewport)),d=s.useRef(null),w=s.useRef(0),[g,p]=t.useState(null),[y,x]=s.useState(new n.Texture),S=new n.TextureLoader,[b,L]=t.useState(null);function j(e){(e||o)&&new Promise((r=>{S.load(null!=e?e:o,r)})).then((e=>{z(null,e)}))}function O(e,r,t){const o=fetch(e).then((e=>e.json())),n=new Promise((e=>{S.load(r,e)}));Promise.all([o,n]).then((e=>{t(e[0],e[1])}))}s.useLayoutEffect((()=>(c&&o?O(c,o,z):o&&j(),()=>{o&&r.useLoader.clear(e.TextureLoader,o)})),[]);const z=(e,r)=>{let t=new n.Vector3(1,1,1);if(null===e){if(r&&h){const e=r.image.width,o=r.image.height;w.current=h;const{rows:n,columns:s,frameWidth:a,frameHeight:u,emptyFrames:c}=v(r,h);d.current={frames:[],meta:{version:"1.0",size:{w:e,h:o},rows:n,columns:s,frameWidth:a,frameHeight:u,scale:"1"}};for(let e=0;e<n;e++)for(let r=0;r<s;r++){(null!=c?c:[]).some((t=>t.row===e&&t.col===r))||d.current.frames.push({frame:{x:r*a,y:e*u,w:a,h:u},rotated:!1,trimmed:!1,spriteSourceSize:{x:0,y:0,w:a,h:u},sourceSize:{w:a,h:u}})}t=i(a,u,.1,m)}}else if(r){d.current=e,d.current.frames=A(),w.current=Array.isArray(e.frames)?e.frames.length:Object.keys(e.frames).length;const{w:r,h:o}=a(e.frames).sourceSize;t=i(r,o,.1,m)}p(d.current),"encoding"in r?r.encoding=3001:r.colorSpace="srgb",x(r),L({spriteTexture:r,spriteData:d.current,aspect:t})},v=(e,r)=>{if(e.image){const t=document.createElement("canvas"),o=t.getContext("2d");t.width=e.image.width,t.height=e.image.height,o.drawImage(e.image,0,0);const n=e.image.width,s=e.image.height,a=Math.round(Math.sqrt(r*(n/s))),i=Math.round(r/a),c=n/a,f=s/i,h=[];for(let e=0;e<i;e++)for(let t=0;t<a;t++){if(e*a+t>=r){h.push({row:e,col:t});continue}const n=o.getImageData(t*c,e*f,c,f).data;u(n)&&h.push({row:e,col:t})}return{rows:i,columns:a,frameWidth:c,frameHeight:f,emptyFrames:h}}return{rows:0,columns:0,frameWidth:0,frameHeight:0,emptyFrames:[]}},A=()=>{const e={},r=d.current,t=f;if(t&&Array.isArray(r.frames)){for(let o=0;o<t.length;o++){e[t[o]]=[];for(const n of r.frames){const r=n.frame,s=r.x,a=r.y,u=r.w,i=r.h,c=n.sourceSize.w,f=n.sourceSize.h;"string"==typeof n.filename&&-1!==n.filename.toLowerCase().indexOf(t[o].toLowerCase())&&e[t[o]].push({x:s,y:a,w:u,h:i,frame:r,sourceSize:{w:c,h:f}})}}return e}if(t&&"object"==typeof r.frames){for(let o=0;o<t.length;o++){e[t[o]]=[];for(const n in r.frames){const s=r.frames[n],a=s.frame,u=a.x,i=a.y,c=a.w,f=a.h,h=s.sourceSize.w,l=s.sourceSize.h;"string"==typeof n&&-1!==n.toLowerCase().indexOf(t[o].toLowerCase())&&e[t[o]].push({x:u,y:i,w:c,h:f,frame:a,sourceSize:{w:h,h:l}})}}return e}{const e=[];for(const t in r.frames)e.push(r.frames[t]);return e}};return s.useLayoutEffect((()=>{null==l||l(y,g)}),[y,g]),{spriteObj:b,loadJsonAndTexture:function(e,r){r&&e?O(r,e,z):j(e)}}}c.preload=t=>r.useLoader.preload(e.TextureLoader,t),c.clear=t=>r.useLoader.clear(e.TextureLoader,t),exports.calculateAspectRatio=i,exports.checkIfFrameIsEmpty=u,exports.getFirstItem=a,exports.useSpriteLoader=c;
