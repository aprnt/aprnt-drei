"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),r=require("react"),t=require("three-stdlib"),n=require("three");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function c(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var o=u(e),a=c(r);function i(e,r=16,u,c,o){const[i,l]=a.useState((()=>{const e=Array.from({length:r},(()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])).flat();return new n.InstancedBufferAttribute(Float32Array.from(e),16)}));return a.useLayoutEffect((()=>{if(void 0===e.current)return;const a=new t.MeshSurfaceSampler(e.current);c&&a.setWeightAttribute(c),a.build();const s=new n.Vector3,f=new n.Vector3,d=new n.Color,p=new n.Object3D;e.current.updateMatrixWorld(!0);for(let t=0;t<r;t++)a.sample(s,f,d),"function"==typeof u?u({dummy:p,sampledMesh:e.current,position:s,normal:f,color:d},t):p.position.copy(s),p.updateMatrix(),null!=o&&o.current&&o.current.setMatrixAt(t,p.matrix),p.matrix.toArray(i.array,16*t);null!=o&&o.current&&(o.current.instanceMatrix.needsUpdate=!0),i.needsUpdate=!0,l(new n.InstancedBufferAttribute(i.array,i.itemSize).copy(i))}),[e,o,c,r,u]),i}exports.Sampler=function({children:e,weight:r,transform:t,instances:n,mesh:u,count:c=16,...l}){const s=a.useRef(null),f=a.useRef(null),d=a.useRef(null);return a.useLayoutEffect((()=>{var e,r;f.current=null!==(e=null==n?void 0:n.current)&&void 0!==e?e:s.current.children.find((e=>e.hasOwnProperty("instanceMatrix"))),d.current=null!==(r=null==u?void 0:u.current)&&void 0!==r?r:s.current.children.find((e=>"Mesh"===e.type))}),[e,null==u?void 0:u.current,null==n?void 0:n.current]),i(d,c,t,r,f),a.createElement("group",o.default({ref:s},l),e)},exports.useSurfaceSampler=i;