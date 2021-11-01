import{r as t,c as l,a as e,w as a,F as u,b as n,d as s,o as c,e as g,t as i}from"./app.3abd9e50.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";const y={},h=n("br",null,null,-1),v=n("br",null,null,-1),x=n("h4",{style:{"text-align":"center","background-color":"var(--c-brand)",color:"var(--c-bg)",padding:"15px"}},"Press any key on a gamepad to connect it",-1),w=n("h3",{id:"as-easy-as-1-2-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#as-easy-as-1-2-3","aria-hidden":"true"},"#"),s(" As Easy as 1, 2, 3")],-1),C=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# install in your project"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` vue-use-gamepad --save-dev
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),G=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Add library to vue instance"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createApp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" useGamepad "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-use-gamepad'"),s(`

`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("useGamepad"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1);function A(N,j){const d=t("controller"),m=t("GamepadDiscover"),k=t("ClientOnly"),p=t("CodeGroupItem"),r=t("CodeGroup");return c(),l(u,null,[e(k,null,{default:a(()=>[e(m,null,{default:a(({gamepads:_})=>[(c(!0),l(u,null,g(_,(o,b)=>(c(),l("div",{key:b},[e(d,{gamepad:o},null,8,["gamepad"]),h,s(" "+i(o.id)+" - "+i(o.mapping)+" ",1),v]))),128))]),"no-gamepads":a(()=>[x]),_:1})]),_:1}),w,e(r,null,{default:a(()=>[e(p,{title:"NPM"},{default:a(()=>[C]),_:1})]),_:1}),e(r,null,{default:a(()=>[e(p,{title:"ts"},{default:a(()=>[G]),_:1})]),_:1})],64)}var V=f(y,[["render",A]]);export{V as default};