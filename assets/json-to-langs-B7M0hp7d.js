import{r as i,j as s}from"./vendor-DuO8O3Ni.js";import{u as ee,P as te,B as R,x as ne,y as re,S as U,T as z,a as H,a5 as oe,a6 as se,k as ie,l as ae,m as le,ab as ce}from"./mui-BrtMkxyc.js";import{M as X}from"./monaco-editor-CUhaLqMq.js";import"./excel-CUMakpxJ.js";import"./monaco-p3yQZa36.js";const q=[{id:"java",label:"Java",language:"java"},{id:"dart",label:"Dart",language:"dart"},{id:"typescript",label:"TypeScript",language:"typescript"}],_=(d,y=2)=>{const g=" ".repeat(y),$=d.split(`
`);let w=0;const l=[];for(const f of $){const c=f.trim();if(!c){l.length&&l[l.length-1]!==""&&l.push("");continue}(/^[)\]}]/.test(c)||c.startsWith("};")||c.startsWith(");"))&&(w=Math.max(w-1,0));const j=`${g.repeat(w)}${c}`;l.push(j),/(\{\s*$|\[\s*$|\(\s*$)$/.test(c)&&(w+=1)}return l.join(`
`).replace(/\n{3,}/g,`

`).trim()},Z=d=>{const y=JSON.parse(d);return JSON.stringify(y,null,2)},G=`{
  "key": "string",
  "num": 1
}`;function ue(d){if(!d||typeof d!="object"||Array.isArray(d))return"// 지원하지 않는 JSON 구조입니다.";const y=new Map,g=(l,f)=>{if(y.has(f))return;let c=`interface ${f} {
`;for(const b of Object.keys(l)){const j=l[b],S=$(j,b);c+=`  ${b}: ${S};
`}c+=`}
`,y.set(f,c)},$=(l,f)=>{if(typeof l=="string")return"string";if(typeof l=="number")return"number";if(typeof l=="boolean")return"boolean";if(l===null)return"null";if(Array.isArray(l))return l.length>0?`${$(l[0],f)}[]`:"any[]";if(typeof l=="object"){const c=f.charAt(0).toUpperCase()+f.slice(1);return g(l,c),c}return"any"};if(g(d,"Root"),!y.size)return"// 변환할 필드를 찾지 못했습니다.";const w=Array.from(y.values()).join(`
`);return _(w,2)}function Q(d){if(!d||typeof d!="object"||Array.isArray(d))return"// JSON 객체만 지원합니다.";if(!Object.keys(d).length)return"";const y=v=>{const p=String(v).trim().replace(/[^A-Za-z0-9]+/g," ").split(" ").filter(Boolean);if(p.length===0)return"field";const[e,...m]=p,n=e.charAt(0).toLowerCase()+e.slice(1),h=m.map(r=>r.charAt(0).toUpperCase()+r.slice(1).toLowerCase()),t=[n,...h].join("");return/^[0-9]/.test(t)?`field${t.charAt(0).toUpperCase()}${t.slice(1)}`:t},g=v=>{const p=String(v).trim().replace(/[^A-Za-z0-9]+/g," ").split(" ").filter(Boolean);let e=p.length===0?"Item":p.map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join("");return/^[0-9]/.test(e)&&(e=`C${e}`),e},$=v=>v.toLowerCase().includes("date"),w=v=>{for(const p of v)if(p!=null)return p},l=new Set,f=v=>{let p=v,e=2;for(;l.has(p);)p=`${v}${e++}`;return l.add(p),p},c=(v,p)=>{const e="    ".repeat(p);let m="",n="";for(const[h,t]of Object.entries(v)){const r=y(h),u=[`@JsonProperty("${h}")`];if(Array.isArray(t)){const x=w(t);if(x===void 0)m+=`${e}${u.join(`
`+e)}
${e}private List<Object> ${r};

`;else if(typeof x=="object"&&!Array.isArray(x)){const J=f(g(h)),O=c(x,p+1);n+=`${e}public static class ${J} {

${O.fieldsCode}${O.innerClassesCode}${e}}

`,m+=`${e}${u.join(`
`+e)}
${e}private List<${J}> ${r};

`}else if(typeof x=="string")m+=`${e}${u.join(`
`+e)}
${e}private List<String> ${r};

`;else if(typeof x=="number"){const J=Number.isInteger(x)?"Integer":"Double";m+=`${e}${u.join(`
`+e)}
${e}private List<${J}> ${r};

`}else typeof x=="boolean"?m+=`${e}${u.join(`
`+e)}
${e}private List<Boolean> ${r};

`:m+=`${e}${u.join(`
`+e)}
${e}private List<Object> ${r};

`;continue}if(t&&typeof t=="object"){const x=f(g(h)),J=c(t,p+1);n+=`${e}public static class ${x} {

${J.fieldsCode}${J.innerClassesCode}${e}}

`,m+=`${e}${u.join(`
`+e)}
${e}private ${x} ${r};

`;continue}if(typeof t=="string"){$(h)?(u.push('@JsonFormat(pattern = "yyyy-MM-dd")'),m+=`${e}${u.join(`
`+e)}
${e}private LocalDate ${r};

`):m+=`${e}${u.join(`
`+e)}
${e}private String ${r};

`;continue}if(typeof t=="number"){const x=Number.isInteger(t)?"Integer":"Double";m+=`${e}${u.join(`
`+e)}
${e}private ${x} ${r};

`;continue}if(typeof t=="boolean"){m+=`${e}${u.join(`
`+e)}
${e}private Boolean ${r};

`;continue}m+=`${e}${u.join(`
`+e)}
${e}private Object ${r};

`}return{fieldsCode:m,innerClassesCode:n}};l.add("Root");const{fieldsCode:b,innerClassesCode:j}=c(d,1),S=`import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.util.List;

public class Root {

${b}${j}}`;return _(S,2)}function de(d){if(!d||typeof d!="object"||Array.isArray(d))return"// JSON 객체만 지원합니다.";if(!Object.keys(d).length)return"";const y=f=>{const c=String(f).replace(/[^A-Za-z0-9 ]+/g," ").trim().split(/\s+/).filter(Boolean);if(c.length===0)return"Root";let b=c.map(j=>j[0].toUpperCase()+j.slice(1)).join("");return/^[0-9]/.test(b)&&(b=`C${b}`),b},g=f=>{const c=String(f).replace(/[^A-Za-z0-9 ]+/g," ").trim().split(/\s+/).filter(Boolean);if(!c.length)return"field";const[b,...j]=c;return b[0].toLowerCase()+b.slice(1)+j.map(S=>S[0].toUpperCase()+S.slice(1).toLowerCase()).join("")},$=new Map,w=(f,c)=>{if($.has(f))return;const b=Object.entries(c);if(!b.length)return;const j=b.map(([n,h])=>{const t=g(n);if(Array.isArray(h)){const r=h.find(u=>u!=null);if(r&&typeof r=="object"&&!Array.isArray(r)){const u=y(n);return w(u,r),{decl:`  final List<${u}> ${t};`,from:`${t}: (json["${n}"] as List?)?.map((e)=>${u}.fromJson(e as Map<String,dynamic>)).toList() ?? [],`,to:`"${n}": ${t}.map((e)=>e.toJson()).toList(),`}}if(typeof r=="string")return{decl:`  final List<String> ${t};`,from:`${t}: (json["${n}"] as List?)?.map((e)=>e as String).toList() ?? [],`,to:`"${n}": ${t},`};if(typeof r=="number"){const u=Number.isInteger(r);return{decl:`  final List<${u?"int":"double"}> ${t};`,from:`${t}: (json["${n}"] as List?)?.map((e)=>(e as num).${u?"toInt()":"toDouble()"}).toList() ?? [],`,to:`"${n}": ${t},`}}return typeof r=="boolean"?{decl:`  final List<bool> ${t};`,from:`${t}: (json["${n}"] as List?)?.map((e)=>e as bool).toList() ?? [],`,to:`"${n}": ${t},`}:{decl:`  final List<dynamic> ${t};`,from:`${t}: (json["${n}"] as List?)?.map((e)=>e).toList() ?? [],`,to:`"${n}": ${t},`}}if(h&&typeof h=="object"){const r=y(n);return w(r,h),{decl:`  final ${r}? ${t};`,from:`${t}: json["${n}"] == null ? null : ${r}.fromJson(json["${n}"] as Map<String,dynamic>),`,to:`"${n}": ${t}?.toJson(),`}}if(typeof h=="string"){const r=n.toLowerCase().includes("date");return{decl:`  final ${r?"DateTime":"String"}? ${t};`,from:r?`${t}: DateTime.tryParse(json["${n}"] ?? ""),`:`${t}: json["${n}"] as String?,`,to:`"${n}": ${r?`${t}?.toIso8601String()`:t},`}}if(typeof h=="number"){const r=Number.isInteger(h);return{decl:`  final ${r?"int":"double"}? ${t};`,from:r?`${t}: (json["${n}"] as num?)?.toInt(),`:`${t}: (json["${n}"] as num?)?.toDouble(),`,to:`"${n}": ${t},`}}return typeof h=="boolean"?{decl:`  final bool? ${t};`,from:`${t}: json["${n}"] as bool?,`,to:`"${n}": ${t},`}:{decl:`  final dynamic ${t};`,from:`${t}: json["${n}"],`,to:`"${n}": ${t},`}}),S=j.map(n=>n.decl).join(`
`),v=j.map(n=>{const h=n.decl.split(" ").pop()?.replace(";","");return h?`    required this.${h},`:""}).filter(Boolean).join(`
`),p=j.map(n=>n.from).join(`
`),e=j.map(n=>n.to).join(`
`),m=`class ${f} {
  ${f}({
${v}
  });

${S}

  factory ${f}.fromJson(Map<String,dynamic> json){
    return ${f}(
${p}
    );
  }

  Map<String,dynamic> toJson(){
    return {
${e}
    };
  }
}`;$.set(f,m)};w("Root",d);const l=Array.from($.values()).join(`

`);return l.trim()?_(l,2):"// 변환 결과가 없습니다."}function fe(){const[d,y]=i.useState(0),[g,$]=i.useState(G),w=(()=>{try{const a=JSON.parse(G),A=Array.isArray(a)?{root:a}:a;return Q(A)}catch{return"// 유효한 JSON 객체를 입력해 주세요."}})(),[l,f]=i.useState(w),[c,b]=i.useState(!1),[j,S]=i.useState(null),[v,p]=i.useState({open:!1,label:"",progress:0}),e=i.useRef([]),m=i.useCallback(async a=>{if(a){S(null),b(!0);try{const A=new FileReader;A.onload=T=>{const D=T.target?.result;if(D)try{const N=Z(D);$(N)}catch{alert("Invalid JSON format.")}},A.readAsText(a)}catch(A){S(A?.message??String(A))}finally{b(!1)}}},[]),n=i.useCallback(()=>{if(g.trim())try{const a=Z(g);$(a)}catch{alert("유효한 JSON 형식이 아닙니다.")}},[g]),h=i.useCallback(async(a,A,T,D="JSON 다운로드 중…")=>{Array.isArray(a)||(a=[]);const N=a.length,W=`${(E=>encodeURI(E.replace(/\s+/g,"_")))(A)}${T?`_${T}`:""}_${Date.now()}.json`;p({open:!0,label:D,progress:0});const o=[];o.push(`[
`);const C=Math.max(100,Math.floor(N/100));for(let E=0;E<N;E++){const K=JSON.stringify(a[E],null,2);o.push(K),E<N-1&&o.push(`,
`),E%C===0&&(p(P=>({...P,progress:Math.floor(E/Math.max(1,N)*100)})),await new Promise(P=>setTimeout(P,0)))}o.push(`
]`);const k=new Blob(o,{type:"application/json;charset=utf-8"}),M=URL.createObjectURL(k),I=document.createElement("a");I.href=M,I.download=W,document.body.appendChild(I),I.click(),I.remove(),URL.revokeObjectURL(M),p({open:!1,label:"",progress:100})},[]),t=i.useCallback(async(a="excel-json")=>{await h(e.current,a,void 0,"JSON 전체 다운로드 중…")},[h]),r=i.useCallback(a=>{y(a)},[]),u=i.useCallback(a=>ue(a),[]),x=i.useCallback(a=>Q(a),[]),J=i.useCallback(a=>de(a),[]),{parsedJson:O,parseError:F}=i.useMemo(()=>{try{const a=JSON.parse(g);return a===null||typeof a!="object"?{parsedJson:null,parseError:"유효한 JSON 데이터를 입력해 주세요."}:{parsedJson:a,parseError:null}}catch(a){return{parsedJson:null,parseError:a instanceof Error?a.message:"JSON 파싱에 실패했습니다."}}},[g]);i.useEffect(()=>{const a=q[d]??q[0];if(!O){f("// 유효한 JSON 객체를 입력해 주세요.");return}const A={java:x,dart:J,typescript:u},T=Array.isArray(O)?{root:O}:O;f(A[a.id](T))},[d,O,x,J,u]);const L=i.useCallback(a=>{$(a)},[]);return{tabIndex:d,languageTabs:q,convertedCode:l,jsonRaw:g,parseError:F,loading:c,error:j,downloadState:v,handleLoadJson:m,handleFormatJson:n,handleDownloadAll:t,handleLangTabChange:r,handleJsonTextChange:L}}const B=40,Y="calc(100vh - 350px)",be=()=>{const{tabIndex:d,languageTabs:y,convertedCode:g,jsonRaw:$,loading:w,downloadState:l,handleLoadJson:f,handleFormatJson:c,handleLangTabChange:b,handleJsonTextChange:j}=fe(),S=ee(),v=i.useId(),p=i.useRef(null),e=i.useRef(null),m=i.useRef(!1),[n,h]=i.useState(.5),t=i.useRef(null),r=i.useRef(null),u=w||l.open,x=y[d]??y[0],J=S.palette.mode==="dark"?"vs-dark":"vs-light",O=n,F=Math.max(1-n,.05),L=i.useCallback(()=>{requestAnimationFrame(()=>{t.current?.layout(),r.current?.layout(),requestAnimationFrame(()=>{t.current?.layout(),r.current?.layout()})})},[]),a=o=>{const C=o.target.files?.[0]??null;f(C),p.current&&(p.current.value="")},A=i.useCallback((o,C,k)=>Math.min(Math.max(o,C),k),[]),T=i.useCallback(o=>{if(!e.current)return;const C=e.current.getBoundingClientRect();if(C.width<=0)return;const k=A((o-C.left)/C.width,.2,.8);h(k)},[A]),D=i.useCallback(()=>{m.current&&(m.current=!1,document.body.style.cursor="",document.body.style.userSelect="",L())},[L]);i.useEffect(()=>{const o=I=>{m.current&&(I.preventDefault(),T(I.clientX),L())},C=I=>{if(!m.current)return;const E=I.touches[0];E&&(T(E.clientX),L())},k=()=>D(),M=()=>L();return window.addEventListener("mousemove",o),window.addEventListener("mouseup",k),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",k),window.addEventListener("touchcancel",k),window.addEventListener("resize",M),()=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",k),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",k),window.removeEventListener("touchcancel",k),window.removeEventListener("resize",M)}},[L,D,T]);const N=i.useCallback(o=>{if(o.preventDefault(),m.current=!0,document.body.style.cursor="col-resize",document.body.style.userSelect="none","touches"in o){const C=o.touches[0];C&&T(C.clientX)}else T(o.clientX)},[T]);i.useEffect(()=>{if(!e.current)return;const o=new ResizeObserver(()=>L());return o.observe(e.current),()=>o.disconnect()},[L]),i.useEffect(()=>{L()},[n,d,J,L]);const V=i.useCallback(o=>{t.current=o,o.setValue($||""),requestAnimationFrame(()=>{o.layout(),requestAnimationFrame(()=>o.layout())})},[$]),W=i.useCallback(o=>{r.current=o,o.setValue(g||""),requestAnimationFrame(()=>{o.layout(),requestAnimationFrame(()=>o.layout())})},[g]);return i.useEffect(()=>{t.current&&t.current.getValue()!==$&&t.current.setValue($||""),L()},[$,L]),i.useEffect(()=>{r.current&&r.current.getValue()!==g&&r.current.setValue(g||""),L()},[g,L]),s.jsxs(te,{sx:{p:1.25,display:"flex",flexDirection:"column",gap:1.25,flex:1,minHeight:785,height:"100%",width:1,maxWidth:"100%",overflowX:"hidden"},children:[s.jsx(R,{display:"flex",justifyContent:"flex-end",sx:{width:1,maxWidth:"100%"},children:s.jsx(ne,{sx:{px:1},value:d,onChange:(o,C)=>{b(C)},children:y.map(o=>s.jsx(re,{label:o.label},o.id))})}),s.jsxs(R,{ref:e,sx:{display:"grid",gridTemplateColumns:`minmax(0, ${O}fr) 6px minmax(0, ${F}fr)`,columnGap:1,width:1,maxWidth:"100%",minWidth:0,overflowX:"hidden",alignItems:"stretch",touchAction:"none"},children:[s.jsxs(R,{sx:{p:1.25,border:"1px solid",borderColor:"divider",borderRadius:1,bgcolor:"background.paper",display:"flex",flexDirection:"column",gap:1,minWidth:0,overflow:"hidden",minHeight:680},children:[s.jsxs(U,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",sx:{height:B,minHeight:B},children:[s.jsx(z,{variant:"subtitle2",children:"JSON"}),s.jsxs(U,{direction:"row",spacing:1,alignItems:"center",children:[s.jsx(H,{variant:"outlined",size:"small",onClick:c,disabled:u||!$.trim(),sx:{minWidth:110},children:"JSON 포맷"}),s.jsx("input",{ref:p,id:v,type:"file",accept:".json",hidden:!0,onChange:a}),s.jsx("label",{htmlFor:v,children:s.jsx(H,{className:"ctrl",component:"span",variant:"contained",startIcon:s.jsx(oe,{}),size:"small",disabled:u,sx:{minWidth:120},children:"JSON 업로드"})})]})]}),s.jsxs(R,{sx:{height:Y,minHeight:640,minWidth:0,border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"hidden",bgcolor:"background.paper",position:"relative"},children:[s.jsx(X,{height:"100%",language:"json",defaultLanguage:"json",theme:J,value:$,onMount:V,onChange:o=>{typeof o=="string"&&j(o)},options:{wordWrap:"on",minimap:{enabled:!1},automaticLayout:!1,scrollBeyondLastLine:!1,fontSize:13,tabSize:2}}),!$.trim()&&s.jsx(R,{sx:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",px:1.25,textAlign:"center"},children:s.jsx(z,{variant:"body2",color:"text.secondary",children:"JSON 파일을 업로드하거나 이 영역에 직접 JSON을 입력해 주세요."})})]})]}),s.jsx(R,{sx:{width:6,justifySelf:"stretch",cursor:"col-resize",bgcolor:"divider","&:hover":{bgcolor:"action.hover"},borderRadius:1,display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},onMouseDown:N,onTouchStart:N,children:s.jsxs(R,{sx:{display:"flex",flexDirection:"column",gap:.25},children:[s.jsx(R,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),s.jsx(R,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),s.jsx(R,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}})]})}),s.jsxs(R,{sx:{p:1.25,border:"1px solid",borderColor:"divider",borderRadius:1,bgcolor:"background.paper",display:"flex",flexDirection:"column",gap:1,minWidth:0,overflow:"hidden",minHeight:680},children:[s.jsxs(U,{direction:"row",spacing:1,alignItems:"center",justifyContent:"space-between",sx:{height:B,minHeight:B},children:[s.jsx(z,{variant:"subtitle2",children:x?.label}),s.jsx(H,{className:"ctrl",onClick:()=>{},variant:"outlined",color:"primary",size:"small",startIcon:s.jsx(se,{}),disabled:u,sx:{minWidth:160},children:"다운로드"})]}),s.jsxs(R,{sx:{height:Y,minHeight:640,minWidth:0,border:"1px solid",borderColor:"divider",borderRadius:1,overflow:"hidden",position:"relative",bgcolor:"background.paper"},children:[s.jsx(X,{height:"100%",language:x?.language??"java",defaultLanguage:x?.language??"java",theme:J,value:g,onMount:W,options:{readOnly:!0,wordWrap:"on",minimap:{enabled:!1},automaticLayout:!1,scrollBeyondLastLine:!1,fontSize:13,tabSize:2}}),!g.trim()&&s.jsx(R,{sx:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",px:1.25,textAlign:"center"},children:s.jsxs(z,{variant:"body2",color:"text.secondary",children:["변환 결과(",x?.label,")가 이 영역에 표시됩니다."]})})]})]})]}),s.jsxs(ie,{open:l.open,fullWidth:!0,maxWidth:"xs",children:[s.jsx(ae,{children:l.label||"다운로드 중…"}),s.jsx(le,{children:s.jsxs(R,{sx:{py:1.25},children:[s.jsx(ce,{variant:"determinate",value:l.progress}),s.jsxs(z,{variant:"caption",sx:{display:"block",mt:1,textAlign:"right"},children:[l.progress,"%"]})]})})]})]})};export{be as default};
