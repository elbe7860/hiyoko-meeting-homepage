(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{3767:function(e,r,t){Promise.resolve().then(t.bind(t,6936))},6936:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var a=t(7437),l=t(2265);async function o(e){await t.g.navigator.clipboard.writeText(e),alert("コマンドをコピーしました！")}function s(){let[e,r]=(0,l.useState)(10),[t,s]=(0,l.useState)(2*e),[n,u]=(0,l.useState)(5),[d,c]=(0,l.useState)(30),[i,m]=(0,l.useState)(85),[b,g]=(0,l.useState)(""),[x,y]=(0,l.useState)(!1);return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"mx-4 my-2 flex flex-col gap-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"spotify-url",className:"block mb-2 text-sm font-medium text-gray-900",children:"SpotifyプレイリストURL"}),(0,a.jsx)("input",{type:"text",id:"spotify-url",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:b,onChange:e=>g(e.target.value)})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"rounds",className:"block mb-2 text-sm font-medium text-gray-900",children:"ラウンド数"}),(0,a.jsx)("input",{type:"number",id:"rounds",min:10,max:100,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:e,onChange:e=>r(Number(e.target.value))})]}),(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{id:"is-all-round",type:"checkbox",value:"",className:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300",onChange:e=>y(!x),checked:x})}),(0,a.jsx)("label",{htmlFor:"is-all-round",className:"ml-2 text-sm font-medium text-gray-900",children:"全問答える"})]}),(0,a.jsxs)("div",{className:x?"hidden":"block",children:[(0,a.jsx)("label",{htmlFor:"victory-score",className:"block mb-2 text-sm font-medium text-gray-900",children:"勝利スコア"}),(0,a.jsx)("input",{type:"number",id:"victory-score",min:1,max:500,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"round-delay",className:"block mb-2 text-sm font-medium text-gray-900",children:"ラウンド間隔（秒）"}),(0,a.jsx)("input",{type:"number",id:"round-delay",min:1,max:30,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:n,onChange:e=>u(Number(e.target.value))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"round-length",className:"block mb-2 text-sm font-medium text-gray-900",children:"曲再生時間（秒）"}),(0,a.jsx)("input",{type:"number",id:"round-length",min:1,max:300,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:d,onChange:e=>c(Number(e.target.value))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"match-percentage",className:"block mb-2 text-sm font-medium text-gray-900",children:"回答一致率"}),(0,a.jsx)("input",{type:"number",id:"match-percentage",min:1,max:100,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",value:i,onChange:e=>m(Number(e.target.value))})]}),(0,a.jsxs)("p",{id:"command",className:"py-2 px-4 border border-gray-300",children:["m!p guess the song spotify:playlist:",function(e){let r=e.split("/")[4];return r?r.split("?")[0]:""}(b),"--rounds=",e,"--victory-score=",x?2*e:2*t,"--round-delay=",n,"--round-length=",d,"--match-percentage=",i]}),(0,a.jsx)("button",{type:"button",className:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",onClick:e=>o(document.getElementById("command").textContent),children:"コピー"})]})})}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=t(2265),l=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var a,u={},d=null,c=null;for(a in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,a)&&!n.hasOwnProperty(a)&&(u[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===u[a]&&(u[a]=r[a]);return{$$typeof:l,type:e,key:d,ref:c,props:u,_owner:s.current}}r.jsx=u,r.jsxs=u},7437:function(e,r,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=3767)}),_N_E=e.O()}]);