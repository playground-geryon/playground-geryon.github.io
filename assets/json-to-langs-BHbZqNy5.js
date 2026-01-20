import{r as a,j as s}from"./vendor-CRMzTT1s.js";import{u as te,P as ne,B as A,y as oe,z as re,S as V,T as B,a as X,a8 as se,ae,l as ie,m as le,n as ce,ad as de}from"./mui-Ds3ldg04.js";import{M as Z}from"./monaco-editor-CehXKjfc.js";import"./excel-CUMakpxJ.js";import"./tree-sitter-aGyQ8e2w.js";const W=40,Q="calc(100vh - 350px)",ue=({controller:u})=>{const{tabIndex:j,languageTabs:y,convertedCode:b,jsonRaw:g,loading:l,downloadState:c,handleLoadJson:f,handleFormatJson:x,handleDownloadCurrent:v,handleLangTabChange:S,handleJsonTextChange:C}=u,m=te(),e=a.useId(),h=a.useRef(null),o=a.useRef(null),p=a.useRef(!1),[t,r]=a.useState(.5),d=a.useRef(null),$=a.useRef(null),J=l||c.open,O=y[j]??y[0],I=m.palette.mode==="dark"?"vs-dark":"vs-light",_=t,H=Math.max(1-t,.05),n=a.useCallback(()=>{requestAnimationFrame(()=>{d.current?.layout(),$.current?.layout(),requestAnimationFrame(()=>{d.current?.layout(),$.current?.layout()})})},[]),L=i=>{const w=i.target.files?.[0]??null;f(w),h.current&&(h.current.value="")},N=a.useCallback((i,w,T)=>Math.min(Math.max(i,w),T),[]),R=a.useCallback(i=>{if(!o.current)return;const w=o.current.getBoundingClientRect();if(w.width<=0)return;const T=N((i-w.left)/w.width,.2,.8);r(T)},[N]),E=a.useCallback(()=>{p.current&&(p.current=!1,document.body.style.cursor="",document.body.style.userSelect="",n())},[n]);a.useEffect(()=>{const i=k=>{p.current&&(k.preventDefault(),R(k.clientX),n())},w=k=>{if(!p.current)return;const P=k.touches[0];P&&(R(P.clientX),n())},T=()=>E(),M=()=>n();return window.addEventListener("mousemove",i),window.addEventListener("mouseup",T),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",T),window.addEventListener("touchcancel",T),window.addEventListener("resize",M),()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",T),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",T),window.removeEventListener("touchcancel",T),window.removeEventListener("resize",M)}},[n,E,R]);const z=a.useCallback(i=>{if(i.preventDefault(),p.current=!0,document.body.style.cursor="col-resize",document.body.style.userSelect="none","touches"in i){const w=i.touches[0];w&&R(w.clientX)}else R(i.clientX)},[R]);a.useEffect(()=>{if(!o.current)return;const i=new ResizeObserver(()=>n());return i.observe(o.current),()=>i.disconnect()},[n]),a.useEffect(()=>{n()},[t,j,I,n]);const D=a.useCallback(i=>{d.current=i,i.setValue(g||""),requestAnimationFrame(()=>{i.layout(),requestAnimationFrame(()=>i.layout())})},[g]),U=a.useCallback(i=>{$.current=i,i.setValue(b||""),requestAnimationFrame(()=>{i.layout(),requestAnimationFrame(()=>i.layout())})},[b]);return a.useEffect(()=>{d.current&&d.current.getValue()!==g&&d.current.setValue(g||""),n()},[g,n]),a.useEffect(()=>{$.current&&$.current.getValue()!==b&&$.current.setValue(b||""),n()},[b,n]),s.jsxs(ne,{sx:{p:1.25,display:"flex",flexDirection:"column",gap:1.25,flex:1,minHeight:785,height:"100%",width:1,maxWidth:"100%",overflowX:"hidden"},children:[s.jsx(A,{display:"flex",justifyContent:"flex-end",sx:{width:1,maxWidth:"100%"},children:s.jsx(oe,{sx:{px:1},value:j,onChange:(i,w)=>{S(w)},children:y.map(i=>s.jsx(re,{label:i.label},i.id))})}),s.jsxs(A,{ref:o,sx:{display:"grid",gridTemplateColumns:`minmax(0, ${_}fr) 6px minmax(0, ${H}fr)`,columnGap:1,width:1,maxWidth:"100%",minWidth:0,overflowX:"hidden",alignItems:"stretch",touchAction:"none"},children:[s.jsxs(A,{sx:{p:1.25,border:"1px solid",borderColor:"divider",borderRadius:1,bgcolor:"background.paper",display:"flex",flexDirection:"column",gap:1,minWidth:0,overflow:"hidden",minHeight:680},children:[s.jsxs(V,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",sx:{height:W,minHeight:W},children:[s.jsx(B,{variant:"subtitle2",children:"JSON"}),s.jsxs(V,{direction:"row",spacing:1,alignItems:"center",children:[s.jsx(X,{variant:"outlined",size:"small",onClick:x,disabled:J||!g.trim(),sx:{minWidth:110},children:"JSON 포맷"}),s.jsx("input",{ref:h,id:e,type:"file",accept:".json",hidden:!0,onChange:L}),s.jsx("label",{htmlFor:e,children:s.jsx(X,{className:"ctrl",component:"span",variant:"contained",startIcon:s.jsx(se,{}),size:"small",disabled:J,sx:{minWidth:120},children:"JSON 업로드"})})]})]}),s.jsxs(A,{sx:{height:Q,minHeight:640,minWidth:0,border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"hidden",bgcolor:"background.paper",position:"relative"},children:[s.jsx(Z,{height:"100%",language:"json",defaultLanguage:"json",theme:I,value:g,onMount:D,onChange:i=>{typeof i=="string"&&C(i)},options:{wordWrap:"on",minimap:{enabled:!1},automaticLayout:!1,scrollBeyondLastLine:!1,fontSize:13,tabSize:2}}),!g.trim()&&s.jsx(A,{sx:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",px:1.25,textAlign:"center"},children:s.jsx(B,{variant:"body2",color:"text.secondary",children:"JSON 파일을 업로드하거나 이 영역에 직접 JSON을 입력해 주세요."})})]})]}),s.jsx(A,{sx:{width:6,justifySelf:"stretch",cursor:"col-resize",bgcolor:"divider","&:hover":{bgcolor:"action.hover"},borderRadius:1,display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},onMouseDown:z,onTouchStart:z,children:s.jsxs(A,{sx:{display:"flex",flexDirection:"column",gap:.25},children:[s.jsx(A,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),s.jsx(A,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),s.jsx(A,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}})]})}),s.jsxs(A,{sx:{p:1.25,border:"1px solid",borderColor:"divider",borderRadius:1,bgcolor:"background.paper",display:"flex",flexDirection:"column",gap:1,minWidth:0,overflow:"hidden",minHeight:680},children:[s.jsxs(V,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",sx:{height:W,minHeight:W},children:[s.jsx(B,{variant:"subtitle2",children:O?.label}),s.jsx(X,{className:"ctrl",onClick:v,variant:"contained",color:"primary",size:"small",startIcon:s.jsx(ae,{}),disabled:J,sx:{minWidth:160},children:"다운로드"})]}),s.jsxs(A,{sx:{height:Q,minHeight:640,minWidth:0,border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"hidden",position:"relative",bgcolor:"background.paper"},children:[s.jsx(Z,{height:"100%",language:O?.language??"java",defaultLanguage:O?.language??"java",theme:I,value:b,onMount:U,options:{readOnly:!0,wordWrap:"on",minimap:{enabled:!1},automaticLayout:!1,scrollBeyondLastLine:!1,fontSize:13,tabSize:2}}),!b.trim()&&s.jsx(A,{sx:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",px:1.25,textAlign:"center"},children:s.jsxs(B,{variant:"body2",color:"text.secondary",children:["변환 결과(",O?.label,")가 이 영역에 표시됩니다."]})})]})]})]}),s.jsxs(ie,{open:c.open,fullWidth:!0,maxWidth:"xs",children:[s.jsx(le,{children:c.label||"다운로드 중…"}),s.jsx(ce,{children:s.jsxs(A,{sx:{py:1.25},children:[s.jsx(de,{variant:"determinate",value:c.progress}),s.jsxs(B,{variant:"caption",sx:{display:"block",mt:1,textAlign:"right"},children:[c.progress,"%"]})]})})]})]})},F=[{id:"java",label:"Java",language:"java"},{id:"dart",label:"Dart",language:"dart"},{id:"typescript",label:"TypeScript",language:"typescript"}],fe={java:"java",dart:"dart",typescript:"ts"},Y=`{
  "key": "string",
  "num": 1
}`,G=(u,j=2)=>{const y=" ".repeat(j),b=u.split(`
`);let g=0;const l=[];for(const c of b){const f=c.trim();if(!f){l.length&&l[l.length-1]!==""&&l.push("");continue}(/^[)\]}]/.test(f)||f.startsWith("};")||f.startsWith(");"))&&(g=Math.max(g-1,0));const v=`${y.repeat(g)}${f}`;l.push(v),/({\s*$|\[\s*$|\(\s*$)$/.test(f)&&(g+=1)}return l.join(`
`).replace(/\n{3,}/g,`

`).trim()},K=u=>{const j=JSON.parse(u);return JSON.stringify(j,null,2)},pe=u=>{if(!u||typeof u!="object"||Array.isArray(u))return"// 지원하지 않는 JSON 구조입니다.";const j=new Map,y=(l,c)=>{if(j.has(c))return;let f=`interface ${c} {
`;for(const x of Object.keys(l)){const v=l[x],S=b(v,x);f+=`  ${x}: ${S};
`}f+=`}
`,j.set(c,f)},b=(l,c)=>{if(typeof l=="string")return"string";if(typeof l=="number")return"number";if(typeof l=="boolean")return"boolean";if(l===null)return"null";if(Array.isArray(l))return l.length>0?`${b(l[0],c)}[]`:"any[]";if(typeof l=="object"){const f=c.charAt(0).toUpperCase()+c.slice(1);return y(l,f),f}return"any"};if(y(u,"Root"),!j.size)return"// 변환할 필드를 찾지 못했습니다.";const g=Array.from(j.values()).join(`
`);return G(g,2)},ee=u=>{if(!u||typeof u!="object"||Array.isArray(u))return"// JSON 객체만 지원합니다.";if(!Object.keys(u).length)return"";const j=C=>{const m=String(C).trim().replace(/[^A-Za-z0-9]+/g," ").split(" ").filter(Boolean);if(m.length===0)return"field";const[e,...h]=m,o=e.charAt(0).toLowerCase()+e.slice(1),p=h.map(r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()),t=[o,...p].join("");return/^[0-9]/.test(t)?`field${t.charAt(0).toUpperCase()}${t.slice(1)}`:t},y=C=>{const m=String(C).trim().replace(/[^A-Za-z0-9]+/g," ").split(" ").filter(Boolean);let e=m.length===0?"Item":m.map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join("");return/^[0-9]/.test(e)&&(e=`C${e}`),e},b=C=>C.toLowerCase().includes("date"),g=C=>{for(const m of C)if(m!=null)return m},l=new Set,c=C=>{let m=C,e=2;for(;l.has(m);)m=`${C}${e++}`;return l.add(m),m},f=(C,m)=>{const e="    ".repeat(m);let h="",o="";for(const[p,t]of Object.entries(C)){const r=j(p),d=[`@JsonProperty("${p}")`];if(Array.isArray(t)){const $=g(t);if($===void 0)h+=`${e}${d.join(`
`+e)}
${e}private List<Object> ${r};

`;else if(typeof $=="object"&&!Array.isArray($)){const J=c(y(p)),O=f($,m+1);o+=`${e}public static class ${J} {

${O.fieldsCode}${O.innerClassesCode}${e}}

`,h+=`${e}${d.join(`
`+e)}
${e}private List<${J}> ${r};

`}else if(typeof $=="string")h+=`${e}${d.join(`
`+e)}
${e}private List<String> ${r};

`;else if(typeof $=="number"){const J=Number.isInteger($)?"Integer":"Double";h+=`${e}${d.join(`
`+e)}
${e}private List<${J}> ${r};

`}else typeof $=="boolean"?h+=`${e}${d.join(`
`+e)}
${e}private List<Boolean> ${r};

`:h+=`${e}${d.join(`
`+e)}
${e}private List<Object> ${r};

`;continue}if(t&&typeof t=="object"){const $=c(y(p)),J=f(t,m+1);o+=`${e}public static class ${$} {

${J.fieldsCode}${J.innerClassesCode}${e}}

`,h+=`${e}${d.join(`
`+e)}
${e}private ${$} ${r};

`;continue}if(typeof t=="string"){b(p)?(d.push('@JsonFormat(pattern = "yyyy-MM-dd")'),h+=`${e}${d.join(`
`+e)}
${e}private LocalDate ${r};

`):h+=`${e}${d.join(`
`+e)}
${e}private String ${r};

`;continue}if(typeof t=="number"){const $=Number.isInteger(t)?"Integer":"Double";h+=`${e}${d.join(`
`+e)}
${e}private ${$} ${r};

`;continue}if(typeof t=="boolean"){h+=`${e}${d.join(`
`+e)}
${e}private Boolean ${r};

`;continue}h+=`${e}${d.join(`
`+e)}
${e}private Object ${r};

`}return{fieldsCode:h,innerClassesCode:o}};l.add("Root");const{fieldsCode:x,innerClassesCode:v}=f(u,1),S=`import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.util.List;

public class Root {

${x}${v}}`;return G(S,2)},me=u=>{if(!u||typeof u!="object"||Array.isArray(u))return"// JSON 객체만 지원합니다.";if(!Object.keys(u).length)return"";const j=c=>{const f=String(c).replace(/[^A-Za-z0-9 ]+/g," ").trim().split(/\s+/).filter(Boolean);if(f.length===0)return"Root";let x=f.map(v=>v[0].toUpperCase()+v.slice(1)).join("");return/^[0-9]/.test(x)&&(x=`C${x}`),x},y=c=>{const f=String(c).replace(/[^A-Za-z0-9 ]+/g," ").trim().split(/\s+/).filter(Boolean);if(!f.length)return"field";const[x,...v]=f;return x[0].toLowerCase()+x.slice(1)+v.map(S=>S[0].toUpperCase()+S.slice(1).toLowerCase()).join("")},b=new Map,g=(c,f)=>{if(b.has(c))return;const x=Object.entries(f);if(!x.length)return;const v=x.map(([o,p])=>{const t=y(o);if(Array.isArray(p)){const r=p.find(d=>d!=null);if(r&&typeof r=="object"&&!Array.isArray(r)){const d=j(o);return g(d,r),{decl:`  final List<${d}> ${t};`,from:`${t}: (json["${o}"] as List?)?.map((e)=>${d}.fromJson(e as Map<String,dynamic>)).toList() ?? [],`,to:`"${o}": ${t}.map((e)=>e.toJson()).toList(),`}}if(typeof r=="string")return{decl:`  final List<String> ${t};`,from:`${t}: (json["${o}"] as List?)?.map((e)=>e as String).toList() ?? [],`,to:`"${o}": ${t},`};if(typeof r=="number"){const d=Number.isInteger(r);return{decl:`  final List<${d?"int":"double"}> ${t};`,from:`${t}: (json["${o}"] as List?)?.map((e)=>(e as num).${d?"toInt()":"toDouble()"}).toList() ?? [],`,to:`"${o}": ${t},`}}return typeof r=="boolean"?{decl:`  final List<bool> ${t};`,from:`${t}: (json["${o}"] as List?)?.map((e)=>e as bool).toList() ?? [],`,to:`"${o}": ${t},`}:{decl:`  final List<dynamic> ${t};`,from:`${t}: (json["${o}"] as List?)?.map((e)=>e).toList() ?? [],`,to:`"${o}": ${t},`}}if(p&&typeof p=="object"){const r=j(o);return g(r,p),{decl:`  final ${r}? ${t};`,from:`${t}: json["${o}"] == null ? null : ${r}.fromJson(json["${o}"] as Map<String,dynamic>),`,to:`"${o}": ${t}?.toJson(),`}}if(typeof p=="string"){const r=o.toLowerCase().includes("date");return{decl:`  final ${r?"DateTime":"String"}? ${t};`,from:r?`${t}: DateTime.tryParse(json["${o}"] ?? ""),`:`${t}: json["${o}"] as String?,`,to:`"${o}": ${r?`${t}?.toIso8601String()`:t},`}}if(typeof p=="number"){const r=Number.isInteger(p);return{decl:`  final ${r?"int":"double"}? ${t};`,from:r?`${t}: (json["${o}"] as num?)?.toInt(),`:`${t}: (json["${o}"] as num?)?.toDouble(),`,to:`"${o}": ${t},`}}return typeof p=="boolean"?{decl:`  final bool? ${t};`,from:`${t}: json["${o}"] as bool?,`,to:`"${o}": ${t},`}:{decl:`  final dynamic ${t};`,from:`${t}: json["${o}"],`,to:`"${o}": ${t},`}}),S=v.map(o=>o.decl).join(`
`),C=v.map(o=>{const p=o.decl.split(" ").pop()?.replace(";","");return p?`    required this.${p},`:""}).filter(Boolean).join(`
`),m=v.map(o=>o.from).join(`
`),e=v.map(o=>o.to).join(`
`),h=`class ${c} {
  ${c}({
${C}
  });

${S}

  factory ${c}.fromJson(Map<String,dynamic> json){
    return ${c}(
${m}
    );
  }

  Map<String,dynamic> toJson(){
    return {
${e}
    };
  }
}`;b.set(c,h)};g("Root",u);const l=Array.from(b.values()).join(`

`);return l.trim()?G(l,2):"// 변환 결과가 없습니다."};function he(){const[u,j]=a.useState(0),[y,b]=a.useState(Y),g=(()=>{try{const n=JSON.parse(Y),L=Array.isArray(n)?{root:n}:n;return ee(L)}catch{return"// 유효한 JSON 객체를 입력해 주세요."}})(),[l,c]=a.useState(g),[f,x]=a.useState(!1),[v,S]=a.useState(null),[C,m]=a.useState({open:!1,label:"",progress:0}),e=a.useRef([]),h=a.useCallback(async n=>{if(n){S(null),x(!0);try{const L=new FileReader;L.onload=N=>{const R=N.target?.result;if(R)try{const E=K(R);b(E)}catch{alert("Invalid JSON format.")}},L.readAsText(n)}catch(L){S(L?.message??String(L))}finally{x(!1)}}},[]),o=a.useCallback(()=>{if(y.trim())try{const n=K(y);b(n)}catch{alert("유효한 JSON 형식이 아닙니다.")}},[y]),p=a.useCallback(async(n,L,N,R="JSON 다운로드 중…")=>{Array.isArray(n)||(n=[]);const E=n.length,D=`${(k=>encodeURI(k.replace(/\s+/g,"_")))(L)}${N?`_${N}`:""}_${Date.now()}.json`;m({open:!0,label:R,progress:0});const U=[];U.push(`[
`);const i=Math.max(100,Math.floor(E/100));for(let k=0;k<E;k++){const P=JSON.stringify(n[k],null,2);U.push(P),k<E-1&&U.push(`,
`),k%i===0&&(m(q=>({...q,progress:Math.floor(k/Math.max(1,E)*100)})),await new Promise(q=>setTimeout(q,0)))}U.push(`
]`);const w=new Blob(U,{type:"application/json;charset=utf-8"}),T=URL.createObjectURL(w),M=document.createElement("a");M.href=T,M.download=D,document.body.appendChild(M),M.click(),M.remove(),URL.revokeObjectURL(T),m({open:!1,label:"",progress:100})},[]),t=a.useCallback(()=>{const n=F[u]??F[0],L=fe[n.id]??"txt",R=`${encodeURI(n.label.replace(/\s+/g,"_"))}_${Date.now()}.${L}`,E=new Blob([l??""],{type:"text/plain;charset=utf-8"}),z=URL.createObjectURL(E),D=document.createElement("a");D.href=z,D.download=R,document.body.appendChild(D),D.click(),D.remove(),URL.revokeObjectURL(z)},[l,u]),r=a.useCallback(async(n="excel-json")=>{await p(e.current,n,void 0,"JSON 전체 다운로드 중…")},[p]),d=a.useCallback(n=>{j(n)},[]),$=a.useCallback(n=>pe(n),[]),J=a.useCallback(n=>ee(n),[]),O=a.useCallback(n=>me(n),[]),{parsedJson:I,parseError:_}=a.useMemo(()=>{try{const n=JSON.parse(y);return n===null||typeof n!="object"?{parsedJson:null,parseError:"유효한 JSON 데이터를 입력해 주세요."}:{parsedJson:n,parseError:null}}catch(n){return{parsedJson:null,parseError:n instanceof Error?n.message:"JSON 파싱에 실패했습니다."}}},[y]);a.useEffect(()=>{const n=F[u]??F[0];if(!I){c("// 유효한 JSON 객체를 입력해 주세요.");return}const L={java:J,dart:O,typescript:$},N=Array.isArray(I)?{root:I}:I;c(L[n.id](N))},[u,I,J,O,$]);const H=a.useCallback(n=>{b(n)},[]);return{tabIndex:u,languageTabs:F,convertedCode:l,jsonRaw:y,parseError:_,loading:f,error:v,downloadState:C,handleLoadJson:h,handleFormatJson:o,handleDownloadAll:r,handleDownloadCurrent:t,handleLangTabChange:d,handleJsonTextChange:H}}const je=()=>{const u=he();return s.jsx(ue,{controller:u})};export{je as default};
