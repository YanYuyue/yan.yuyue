import{u as s,r as n,j as e,i as p,o as u,L as f,a as h,b as T}from"../chunks/chunk-TKL58373.js";/* empty css                      */import"../chunks/chunk-BcEW-Cv4.js";/* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      *//* empty css                      */function S(){var o;return(o=s())==null?void 0:o.data}function y({initialTodoItems:a}){const[o,l]=n.useState(a),[r,d]=n.useState("");return e.jsxs(e.Fragment,{children:[e.jsx("ul",{children:o.map((t,i)=>e.jsx("li",{children:t.text},i))}),e.jsx("div",{children:e.jsxs("form",{onSubmit:async t=>{t.preventDefault(),l(i=>[...i,{text:r}])},children:[e.jsx("input",{type:"text",onChange:t=>d(t.target.value),value:r}),e.jsx("button",{type:"submit",children:"Add to-do"})]})})]})}function m(){const a=S();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"To-do List"}),e.jsx(y,{initialTodoItems:a.todo})]})}const c=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),A={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:p}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:u}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/layouts/Layout.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:f}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Yan Yuyue's Homepage"}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/todo/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}}};export{A as configValuesSerialized};
