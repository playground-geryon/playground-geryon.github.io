const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/prism-wcO-HLEn.js","assets/excel-CUMakpxJ.js","assets/prism-54DrP_uy.css"])))=>i.map(i=>d[i]);
import{j as t,r as b}from"./vendor-BHnfqNCc.js";import{B as g,S as H,a as E,aM as q,aO as F,a6 as U,T,u as O,P as A}from"./mui-DWpzSE2I.js";import{e as N,_ as B}from"./monaco-BZh3GCvz.js";import"./excel-CUMakpxJ.js";const V=({onMouseDown:n})=>t.jsx(g,{onMouseDown:e=>{e.preventDefault(),n()},sx:{width:8,cursor:"col-resize",bgcolor:"divider","&:hover":{bgcolor:"action.hover"},borderRadius:1,display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},title:"드래그해서 좌/우 폭 조절",children:t.jsxs(g,{sx:{display:"flex",flexDirection:"column",gap:.5},children:[t.jsx(g,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),t.jsx(g,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),t.jsx(g,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}})]})}),X=({onUpload:n,onResetSample:e,onDownloadHtml:i})=>t.jsxs(H,{direction:"row",spacing:1,alignItems:"center",children:[t.jsxs(H,{direction:"row",spacing:1,alignItems:"center",children:[t.jsx(E,{size:"small",variant:"outlined",color:"primary",startIcon:t.jsx(q,{}),onClick:n,children:"파일 업로드"}),t.jsx(E,{size:"small",variant:"outlined",color:"primary",startIcon:t.jsx(F,{}),onClick:e,children:"샘플 불러오기"})]}),t.jsx(H,{direction:"row",spacing:1,alignItems:"center",flex:1,justifyContent:"flex-end",children:t.jsx(E,{size:"small",variant:"outlined",color:"primary",startIcon:t.jsx(U,{}),onClick:i,children:"HTML 다운로드"})})]}),D={border:"1px solid",borderColor:"divider",borderRadius:1.5,bgcolor:"background.paper",display:"flex",flexDirection:"column",overflow:"hidden",maxWidth:"100%"},_=n=>n.replace(/&(?!(lt|gt|amp|quot|#\d+|#x[0-9a-fA-F]+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),S=n=>{let e=_(n);return e=e.replace(/`([^`]+)`/g,"<code>$1</code>"),e=e.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*([^*]+)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,(i,d,p)=>`<a href="${_(p)}" target="_blank" rel="noreferrer">${d}</a>`),e=e.replace(/\n/g,"<br />"),e},Y=n=>{const e=I(n);return e.startsWith("<p>")&&e.endsWith("</p>")?e.slice(3,-4):e},I=n=>{if(typeof n!="string")return"";const e=n.split(/\r?\n/),i=[];let d=!1,p=[],v=!1,x=[];const L=()=>{p.length&&(i.push(`<pre><code>${_(p.join(`
`))}</code></pre>`),p=[])},k=o=>/^\s*\|.+\|\s*$/.test(o),M=o=>/^\s*\d+\.\s+/.test(o),$=o=>/^\s*[-*+]\s+/.test(o),j=()=>{x.length&&(i.push(x.join(`
`)),x=[])},P=o=>{const r=e[o],m=e[o+1]??"";if(!/^\s*\|(?:\s*:?-{3,}\s*:?\|)+\s*$/.test(m))return{consumed:0,html:""};const c=[],w=h=>h.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(f=>Y(f.trim())),s=w(r);let l=o+2;for(;l<e.length&&k(e[l]);)c.push(e[l]),l+=1;const a=`<thead><tr>${s.map(h=>`<th>${h}</th>`).join("")}</tr></thead>`,u=c.length>0?`<tbody>${c.map(h=>`<tr>${w(h).map(f=>`<td>${f}</td>`).join("")}</tr>`).join("")}</tbody>`:"";return{consumed:l-o,html:`<table>${a}${u}</table>`}},y=(o,r)=>{const m=[];let c=o;for(;c<e.length;){const s=e[c];if(r?!M(s):!$(s))break;const l=s.replace(/^\s*(\d+\.)?[-*+]?\s+/,"");m.push(`<li>${S(l)}</li>`),c+=1}const w=r?"ol":"ul";return{consumed:c-o,html:`<${w}>${m.join("")}</${w}>`}},C=o=>{let r=o,m=0;const c=[],w=l=>{for(let a=0;a<l;a+=1)c.push("<blockquote>")},s=l=>{for(let a=0;a<l;a+=1)c.push("</blockquote>")};for(;r<e.length;){const l=e[r];if(!/^\s*>/.test(l))break;const a=l.match(/^(\s*>+)\s?(.*)$/);if(!a)break;const u=a[1].replace(/\s/g,"").length,h=a[2]??"";u>m&&w(u-m),u<m&&s(m-u),m=u,h.trim().length===0?c.push("<p></p>"):c.push(`<p>${S(h)}</p>`),r+=1}return m>0&&s(m),{consumed:r-o,html:c.join("")}};for(let o=0;o<e.length;o+=1){const r=e[o];if(r.match(/^\s*```/)){d&&L(),d=!d;continue}if(r.includes("<pre><code>")||v){v=!0,x.push(r),r.includes("</code></pre>")&&(v=!1,j());continue}if(d){p.push(r);continue}if(/^\s*>/.test(r)){const{consumed:s,html:l}=C(o);if(s>0){i.push(l),o+=s-1;continue}}if(M(r)){const{consumed:s,html:l}=y(o,!0);if(s>0){i.push(l),o+=s-1;continue}}if($(r)){const{consumed:s,html:l}=y(o,!1);if(s>0){i.push(l),o+=s-1;continue}}if(k(r)){const{consumed:s,html:l}=P(o);if(s>0){i.push(l),o+=s-1;continue}}const c=r.match(/^(#{1,6})\s+(.*)$/);if(c){const s=c[1].length;i.push(`<h${s}>${S(c[2])}</h${s}>`);continue}const w=r.trim();if(/^([-*_]\s*){3,}$/.test(w)){i.push("<hr />");continue}if(!w){i.push("");continue}i.push(`<p>${S(w)}</p>`)}return L(),j(),i.filter(Boolean).join(`
`)},G=n=>{const i=n.replace(/>\s+</g,`>
<`).split(`
`);let d=0;const p=[];return i.forEach(v=>{const x=v.trim();x&&(x.startsWith("</")&&(d=Math.max(d-1,0)),p.push(`${"  ".repeat(d)}${x}`),/^<[^/!][^>]*[^/]>\s*$/.test(x)&&!x.includes("</")&&(d+=1))}),p.join(`
`)},J=({value:n,onChange:e,editorTheme:i,disablePointerEvents:d})=>t.jsxs(g,{sx:{...D,flex:1},children:[t.jsx(g,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",px:1.25,py:1.25,borderBottom:"1px solid",borderColor:"divider"},children:t.jsx(T,{variant:"subtitle1",fontWeight:700,children:"Markdown"})}),t.jsx(g,{sx:{flex:1,minHeight:0,minWidth:0,pointerEvents:d?"none":"auto"},children:t.jsx(N,{height:"100%",defaultLanguage:"markdown",value:n,onChange:p=>e(p??""),options:{minimap:{enabled:!1},fontSize:12,wordWrap:"on",scrollBeyondLastLine:!1,lineNumbers:"on",renderLineHighlight:"all"},theme:i})})]}),K=({html:n,disablePointerEvents:e})=>t.jsxs(g,{sx:{...D,flex:1,maxWidth:"100%"},children:[t.jsx(g,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",px:2,py:1.25,borderBottom:"1px solid",borderColor:"divider"},children:t.jsx(T,{variant:"subtitle1",fontWeight:700,children:"Preview"})}),t.jsx(g,{sx:{flex:1,minHeight:0,overflow:"auto",p:1.25,maxWidth:"100%",pointerEvents:e?"none":"auto"},children:t.jsx(g,{sx:{width:"100%",maxWidth:"100%",wordBreak:"break-word",overflowWrap:"break-word","& table":{borderCollapse:"collapse",width:"100%",mt:1.25,mb:1},"& th, & td":{border:"1px solid",borderColor:"divider",p:"6px 8px",fontSize:12},"& th":{bgcolor:"action.hover",fontWeight:600},"& h1":{mt:1.25,mb:.75,fontSize:"1.35rem"},"& h2":{mt:1.2,mb:.75,fontSize:"1.2rem"},"& h3":{mt:1.1,mb:.5,fontSize:"1.05rem"},"& h4,h5,h6":{mt:1,mb:.5,fontSize:"0.95rem"},"& p":{mb:.75},"& ul, & ol":{pl:2.5,mb:1},"& li":{mb:.4},"& blockquote":{m:"6px 0",pl:1.5,borderLeft:"3px solid",borderColor:"divider",color:"text.secondary"},"& blockquote blockquote":{borderColor:"divider",color:"text.secondary",ml:.75},"& blockquote p":{mb:.75},"& code":{fontFamily:"monospace",bgcolor:"action.hover",px:.5,borderRadius:.5},"& pre":{bgcolor:"action.hover",p:1.25,borderRadius:1,overflow:"auto",whiteSpace:"pre-wrap",fontFamily:"monospace","& code":{background:"transparent",padding:0,display:"block",color:"inherit"}},minHeight:"100%"},dangerouslySetInnerHTML:{__html:n}})})]}),W=`# Markdown Preview

좌측 입력이 우측에 즉시 반영됩니다.

## Headings
# 제목 1
## 제목 2
### 제목 3

대체 문법:
Heading level 1
===============
Heading level 2
---------------

## Paragraphs & Line Breaks
문단은 빈 줄로 구분합니다.
이 줄은 첫 번째 문단입니다.

이 줄은 두 번째 문단입니다.  
두 줄 문단은 줄바꿈이 들어갑니다.

## Emphasis
- **굵게**, *기울임*, ***굵게+기울임***, \`inline code\`

## Blockquotes
> 기본 인용문 (인용문은 \`>\`로 시작합니다)
>
>> 중첩 인용문

## Lists
1. Ordered Lists
2. 두 번째 항목
3. 세 번째 항목

- Unordered Lists
* 글머리 기호 *
+ 글머리 기호 +

## Code Block
\`\`\`
const foo = 'bar';
console.log(foo);
\`\`\`

## HTML 예시
&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;p&gt;Paragraph&lt;/p&gt;
&lt;pre&gt;&lt;code&gt;{code}&lt;/code&gt;&lt;/pre&gt;

## Table (Markdown / HTML)
| Markdown | HTML |
| --- | --- |
| # Heading level 1 | &lt;h1&gt;Heading level 1&lt;/h1&gt; |
| **bold text** | &lt;strong&gt;bold text&lt;/strong&gt; |
| *italic text* | &lt;em&gt;italic text&lt;/em&gt; |
| > Blockquote | &lt;blockquote&gt;Blockquote&lt;/blockquote&gt; |

## 구분선 예시
---
***
___
`,Q=()=>{const[n,e]=b.useState(W),[i,d]=b.useState(50),[p,v]=b.useState(null),[x,L]=b.useState(!1),[k,M]=b.useState(null),$=b.useRef(null),j=b.useRef(!1),P=b.useRef(null),y=b.useMemo(()=>I(n),[n]),C=b.useMemo(()=>G(y),[y]),o=b.useMemo(()=>k?k.highlight(C,k.languages.markup,"markup"):C,[C,k]);b.useEffect(()=>{let a=!0;return(async()=>{const h=await B(()=>import("./prism-wcO-HLEn.js").then(R=>R.p),__vite__mapDeps([0,1,2]));await B(()=>import("./prism-wcO-HLEn.js").then(R=>R.c),__vite__mapDeps([0,1,2]));const f=h.default??h;a&&M(f)})(),()=>{a=!1}},[]),b.useEffect(()=>{const a=h=>{if(!j.current)return;const f=$.current?.getBoundingClientRect();if(!f)return;const R=h.clientX-f.left,z=Math.min(80,Math.max(20,R/f.width*100));d(z)},u=()=>{j.current=!1,L(!1),document.body.style.userSelect=""};return window.addEventListener("mousemove",a),window.addEventListener("mouseup",u),()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",u)}},[]);const r=()=>{j.current=!0,L(!0),document.body.style.userSelect="none"},m=()=>`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 6px 8px; }
    th { background: #f5f5f5; }
  </style>
</head>
<body>
${y}
</body>
</html>`;return{value:n,setValue:e,html:y,formattedHtml:C,highlightedHtml:o,splitPct:i,setSplitPct:d,containerRef:$,onSplitterDown:r,downloadHtml:()=>{const a=m(),u=new Blob([a],{type:"text/html;charset=utf-8"}),h=URL.createObjectURL(u),f=document.createElement("a");f.href=h,f.download="markdown-export.html",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(h)},fileInputRef:P,resetSample:()=>{e(W),v(null)},openFilePicker:()=>P.current?.click(),handleFileChange:async a=>{const u=a.target.files?.[0];if(!u)return;const h=await u.text();e(h),v(u.name),a.target.value=""},currentFileName:p,isResizing:x}},ne=()=>{const{value:n,setValue:e,html:i,splitPct:d,containerRef:p,onSplitterDown:v,downloadHtml:x,resetSample:L,fileInputRef:k,openFilePicker:M,handleFileChange:$,isResizing:j}=Q(),y=O().palette.mode==="dark"?"vs-dark":"vs";return t.jsxs(A,{sx:{p:1.25,display:"flex",flexDirection:"column",gap:1.25,flex:1,minHeight:785,height:"100%",width:1,maxWidth:"100%",overflowX:"hidden"},children:[t.jsx("input",{type:"file",accept:".md,.markdown,.txt,text/markdown",ref:k,style:{display:"none"},onChange:$}),t.jsx(X,{onUpload:M,onResetSample:L,onDownloadHtml:x}),t.jsxs(g,{ref:p,sx:{display:"flex",gap:0,overflow:"hidden",height:"calc(100vh - 235px)",width:"100%",maxWidth:"100%"},children:[t.jsx(g,{sx:{flex:`0 0 ${d}%`,minWidth:0,maxWidth:"100%",display:"flex",flexDirection:"column",pr:1},children:t.jsx(J,{value:n,onChange:e,editorTheme:y,disablePointerEvents:j})}),t.jsx(V,{onMouseDown:v}),t.jsx(g,{sx:{flex:1,minWidth:0,pl:1,display:"flex",flexDirection:"column",maxWidth:"100%"},children:t.jsx(K,{html:i,disablePointerEvents:j})})]})]})};export{ne as default};
