"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("react"),r=require("three"),n=require("@react-three/fiber"),c=require("tunnel-rat");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var o=i(e),s=a(t),l=a(r),u=i(c);const f=e=>e&&e.isOrthographicCamera,d=new l.Color,m=u.default();function h(e){return"top"in e}function g(e,t){const{right:r,top:n,left:c,bottom:i,width:a,height:o}=t,s=t.bottom<0||n>e.height||r<0||t.left>e.width;if(h(e)){const t=e.top+e.height-i;return{position:{width:a,height:o,left:c-e.left,top:n,bottom:t,right:r},isOffscreen:s}}return{position:{width:a,height:o,top:n,left:c,bottom:e.height-i,right:r},isOffscreen:s}}function p(e,{left:t,bottom:r,width:n,height:c}){let i;const a=n/c;return f(e.camera)?e.camera.left===n/-2&&e.camera.right===n/2&&e.camera.top===c/2&&e.camera.bottom===c/-2||(Object.assign(e.camera,{left:n/-2,right:n/2,top:c/2,bottom:c/-2}),e.camera.updateProjectionMatrix()):e.camera.aspect!==a&&(e.camera.aspect=a,e.camera.updateProjectionMatrix()),i=e.gl.autoClear,e.gl.autoClear=!1,e.gl.setViewport(t,r,n,c),e.gl.setScissor(t,r,n,c),e.gl.setScissorTest(!0),i}function v(e,t){e.gl.setScissorTest(!1),e.gl.autoClear=t}function b(e){e.gl.getClearColor(d),e.gl.setClearColor(d,e.gl.getClearAlpha()),e.gl.clear(!0,!0)}function w({visible:e=!0,canvasSize:t,scene:r,index:c,children:i,frames:a,rect:o,track:l}){const u=n.useThree(),[f,d]=s.useState(!1);let m=0;return n.useFrame((n=>{var c;(a===1/0||m<=a)&&(l&&(o.current=null==(c=l.current)?void 0:c.getBoundingClientRect()),m++);if(o.current){const{position:c,isOffscreen:a}=g(t,o.current);if(f!==a&&d(a),e&&!f&&o.current){const e=p(n,c);n.gl.render(i?n.scene:r,n.camera),v(n,e)}}}),c),s.useLayoutEffect((()=>{const r=o.current;if(r&&(!e||!f)){const{position:e}=g(t,r),n=p(u,e);b(u),v(u,n)}}),[e,f]),s.useEffect((()=>{if(!l)return;const e=o.current,r=u.get().events.connected;return u.setEvents({connected:l.current}),()=>{if(e){const{position:r}=g(t,e),n=p(u,r);b(u),v(u,n)}u.setEvents({connected:r})}}),[l]),s.useEffect((()=>{h(t)||console.warn("Detected @react-three/fiber canvas size does not include position information. <View /> may not work as expected. Upgrade to @react-three/fiber ^8.1.0 for support.\n See https://github.com/pmndrs/drei/issues/944")}),[]),s.createElement(s.Fragment,null,i,s.createElement("group",{onPointerOver:()=>null}))}const E=s.forwardRef((({track:e,visible:t=!0,index:r=1,id:c,style:i,className:a,frames:u=1/0,children:f,...d},m)=>{var h,g,p,v;const b=s.useRef(null),{size:E,scene:C}=n.useThree(),[O]=s.useState((()=>new l.Scene)),[x,y]=s.useReducer((()=>!0),!1),j=s.useCallback(((t,r)=>{if(b.current&&e&&e.current&&t.target===e.current){const{width:e,height:n,left:c,top:i}=b.current,a=t.clientX-c,o=t.clientY-i;r.pointer.set(a/e*2-1,-o/n*2+1),r.raycaster.setFromCamera(r.pointer,r.camera)}}),[b,e]);return s.useEffect((()=>{var t;e&&(b.current=null==(t=e.current)?void 0:t.getBoundingClientRect()),y()}),[e]),s.createElement("group",o.default({ref:m},d),x&&n.createPortal(s.createElement(w,{visible:t,canvasSize:E,frames:u,scene:C,track:e,rect:b,index:r},f),O,{events:{compute:j,priority:r},size:{width:null==(h=b.current)?void 0:h.width,height:null==(g=b.current)?void 0:g.height,top:null==(p=b.current)?void 0:p.top,left:null==(v=b.current)?void 0:v.left}}))})),C=s.forwardRef((({as:e="div",id:t,visible:r,className:n,style:c,index:i=1,track:a,frames:l=1/0,children:u,...f},d)=>{const h=s.useId(),g=s.useRef(null);return s.useImperativeHandle(d,(()=>g.current)),s.createElement(s.Fragment,null,s.createElement(e,o.default({ref:g,id:t,className:n,style:c},f)),s.createElement(m.In,null,s.createElement(E,{visible:r,key:h,track:g,frames:l,index:i},u)))})),O=s.forwardRef(((e,t)=>s.useContext(n.context)?s.createElement(E,o.default({ref:t},e)):s.createElement(C,o.default({ref:t},e))));O.Port=()=>s.createElement(m.Out,null),exports.View=O;