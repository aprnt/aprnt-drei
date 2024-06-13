"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),n=require("@react-three/fiber");function r(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})}})),n.default=e,Object.freeze(n)}var t=r(e);const o=e.createContext(null);exports.PerformanceMonitor=function({iterations:r=10,ms:a=250,threshold:c=.75,step:s=.1,factor:l=.5,flipflops:i=1/0,bounds:f=(e=>e>100?[60,100]:[40,60]),onIncline:u,onDecline:p,onChange:b,onFallback:h,children:d}){const g=Math.pow(10,0),[m,k]=e.useState((()=>({fps:0,index:0,factor:l,flipped:0,refreshrate:0,fallback:!1,frames:[],averages:[],subscriptions:new Map,subscribe:e=>{const n=Symbol();return m.subscriptions.set(n,e.current),()=>{m.subscriptions.delete(n)}}})));let v=0;return n.useFrame((()=>{const{frames:e,averages:n}=m;if(!m.fallback&&n.length<r){e.push(performance.now());const t=e[e.length-1]-e[0];if(t>=a){if(m.fps=Math.round(e.length/t*1e3*g)/g,m.refreshrate=Math.max(m.refreshrate,m.fps),n[m.index++%r]=m.fps,n.length===r){const[e,t]=f(m.refreshrate),o=n.filter((e=>e>=t)),a=n.filter((n=>n<e));o.length>r*c&&(m.factor=Math.min(1,m.factor+s),m.flipped++,u&&u(m),m.subscriptions.forEach((e=>e.onIncline&&e.onIncline(m)))),a.length>r*c&&(m.factor=Math.max(0,m.factor-s),m.flipped++,p&&p(m),m.subscriptions.forEach((e=>e.onDecline&&e.onDecline(m)))),v!==m.factor&&(v=m.factor,b&&b(m),m.subscriptions.forEach((e=>e.onChange&&e.onChange(m)))),m.flipped>i&&!m.fallback&&(m.fallback=!0,h&&h(m),m.subscriptions.forEach((e=>e.onFallback&&e.onFallback(m)))),m.averages=[]}m.frames=[]}}})),t.createElement(o.Provider,{value:m},d)},exports.usePerformanceMonitor=function({onIncline:n,onDecline:r,onChange:t,onFallback:a}){const c=e.useContext(o),s=e.useRef({onIncline:n,onDecline:r,onChange:t,onFallback:a});e.useLayoutEffect((()=>{s.current.onIncline=n,s.current.onDecline=r,s.current.onChange=t,s.current.onFallback=a}),[n,r,t,a]),e.useLayoutEffect((()=>c.subscribe(s)),[c])};