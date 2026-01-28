import{r as j,j as c,w as Ce}from"./vendor-DyxFRNuv.js";import{u as Ie,q as Pe,B as R,I as ae,g as Le,J as Me,T as Y,P as Ze,S as te,a4 as Ee,a5 as Re,a6 as De,a7 as Te,a as le,aV as Oe,aW as We,C as Ne,aX as qe,a9 as me,aa as ge,Y as be,aY as Be,aZ as Ue,l as Fe,m as Ke,N as He,n as Ve,p as Je,a_ as Xe,a$ as Ye,b0 as Ge,b1 as Qe,b2 as et,b3 as tt,b4 as nt,b5 as we,b6 as st,b7 as it,b8 as rt,b9 as at,ba as lt,bb as ct,bc as ot,bd as dt}from"./mui-Dn-s4uu_.js";import{M as ut}from"./monaco-editor-C1_Zlzod.js";import{p as ht,_ as pt}from"./tree-sitter-DJeWk4Ia.js";import"./excel-CUMakpxJ.js";const H=(t,l)=>(t.match(new RegExp(`\\${l}`,"g"))??[]).length,ne=(t,l,s)=>{const e=t.split(/\r?\n/),r=[],a=[];let n=0;const i=(u,d,p=!1)=>{const h=a[a.length-1]?.node;if(h?h.children.push(u):r.push(u),p){const g=H(d,"{")-H(d,"}");a.push({node:u,depth:n+g})}};return e.forEach((u,d)=>{const p=u.trim();for(l.forEach(h=>{const g=p.match(h.regex);if(!g)return;const _=g[h.labelIndex??1]??g[0],w=h.refiner?h.refiner(g,u):h.kind;i({id:`${w}-${d}-${_}`,label:_,kind:w,line:d,children:[]},u,h.pushDepth??!1)}),n+=H(u,"{"),n-=H(u,"}");a.length&&n<a[a.length-1].depth;)a.pop()}),r},ft=t=>ne(t,[{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"function"}]),mt=t=>ne(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\bnamespace\s+([A-Za-z_]\w*)/,kind:"namespace",pushDepth:!0},{regex:/([A-Za-z_]\w*)\s*::\s*([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"method",labelIndex:2},{regex:/([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"function"}]),gt=t=>ne(t,[{regex:/\bpackage\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\btype\s+([A-Za-z_]\w*)\s+struct\b/,kind:"struct",pushDepth:!0},{regex:/\bfunc\s+\(([^\)]+)\)\s+([A-Za-z_]\w*)\s*\(/,kind:"method",labelIndex:2},{regex:/\bfunc\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),bt=t=>ne(t,[{regex:/\bmod\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/\bfn\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),wt=t=>ne(t,[{regex:/\benum\s+class\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/\binterface\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\bobject\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bfun\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),xt=t=>ne(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\binterface\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/\b([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"method"}]),yt=t=>ne(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\binterface\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\btrait\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bfunction\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),kt=t=>ne(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\btrait\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\bobject\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bdef\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),_t=t=>{const l=t.split(/\r?\n/),s=[],e=[];let r=0;const a=n=>{const i=e[e.length-1]?.node;i?i.children.push(n):s.push(n)};for(let n=0;n<l.length;n+=1){const i=l[n],u=i.trim(),d=u.match(/\b(class|interface|enum)\s+([A-Za-z_]\w*)/);if(d){const p={class:"class",interface:"interface",enum:"enum"},h={id:`${d[1]}-${n}`,label:d[2],kind:p[d[1]]??"class",line:n,children:[]};a(h),e.push({node:h,depth:r+H(i,"{")-H(i,"}")})}else{const p=u.match(/(public|protected|private|static|\s)*[\w<>\[\],\s]+\s+([A-Za-z_]\w*)\s*\([^)]*\)\s*\{?/);if(p){const h={id:`method-${n}-${p[2]}`,label:p[2],kind:"method",line:n,children:[]};a(h)}else{const h=u.match(/(public|protected|private|static|\s)+[\w<>\[\],\s]+\s+([A-Za-z_]\w*)\s*(=|;)/);if(h){const g={id:`property-${n}-${h[2]}`,label:h[2],kind:"field",line:n,children:[]};a(g)}}}for(r+=H(i,"{"),r-=H(i,"}");e.length&&r<e[e.length-1].depth;)e.pop()}return s},vt=t=>{const l=t.split(/\r?\n/),s=[],e=[],r=(a,n)=>{for(;e.length&&n<=e[e.length-1].indent;)e.pop();const i=e[e.length-1]?.node;i?i.children.push(a):s.push(a),e.push({indent:n,node:a})};return l.forEach((a,n)=>{const i=a.match(/^\s*/)?.[0].length??0,u=a.trim(),d=u.match(/^class\s+([A-Za-z_]\w*)/);if(d){r({id:`class-${n}-${d[1]}`,label:d[1],kind:"class",line:n,children:[]},i);return}const p=u.match(/^(async\s+)?def\s+([A-Za-z_]\w*)/);p&&r({id:`function-${n}-${p[2]}`,label:p[2],kind:"function",line:n,children:[]},i)}),s},St=t=>{const l=t.split(/\r?\n/),s=[],e=[],r=a=>{const n=e[e.length-1];n?n.children.push(a):s.push(a),e.push(a)};return l.forEach((a,n)=>{const i=a.trim(),u=i.match(/^class\s+([A-Za-z_]\w*)/);if(u){r({id:`class-${n}-${u[1]}`,label:u[1],kind:"class",line:n,children:[]});return}const d=i.match(/^module\s+([A-Za-z_]\w*)/);if(d){r({id:`module-${n}-${d[1]}`,label:d[1],kind:"module",line:n,children:[]});return}const p=i.match(/^def\s+([A-Za-z_]\w*)/);if(p){r({id:`function-${n}-${p[1]}`,label:p[1],kind:"function",line:n,children:[]});return}i==="end"&&e.pop()}),s},jt=t=>{const l=[];return t.split(/\r?\n/).forEach((s,e)=>{const a=s.trim().match(/^(create\s+(table|view|index|function|procedure|trigger))\s+([A-Za-z0-9_.]+)/i);if(!a)return;const n=a[3];l.push({id:`sql-${e}-${n}`,label:n,kind:"module",line:e,children:[]})}),l},$t=3,zt=20,xe=t=>{let l=0,s=0,e=0,r=null,a=!1;for(let n=0;n<t.length;n+=1){const i=t[n],u=n+1<t.length?t[n+1]:"";if(a){a=!1;continue}if(i==="\\"){a=!0;continue}if(r){i===r&&(r=null);continue}if(i==="/"&&u==="/")break;if(i==='"'||i==="'"||i==="`"){r=i;continue}i==="{"&&(l+=1),i==="}"&&(l-=1),i==="["&&(s+=1),i==="]"&&(s-=1),i==="("&&(e+=1),i===")"&&(e-=1)}return{brace:l,bracket:s,paren:e}},oe=t=>{const l=[];let s=0,e=0,r=0,a=null,n=!1,i=0;for(let d=0;d<t.length;d+=1){const p=t[d];if(n){n=!1;continue}if(p==="\\"){n=!0;continue}if(a){p===a&&(a=null);continue}if(p==='"'||p==="'"||p==="`"){a=p;continue}if(p==="{"&&(s+=1),p==="}"&&(s-=1),p==="["&&(e+=1),p==="]"&&(e-=1),p==="("&&(r+=1),p===")"&&(r-=1),p===","&&s===0&&e===0&&r===0){const h=t.slice(i,d).trim();h&&l.push(h),i=d+1}}const u=t.slice(i).trim();return u&&l.push(u),l},At=t=>{let l=0,s=0,e=0,r=null,a=!1;for(let n=0;n<t.length;n+=1){const i=t[n];if(a){a=!1;continue}if(i==="\\"){a=!0;continue}if(r){i===r&&(r=null);continue}if(i==='"'||i==="'"||i==="`"){r=i;continue}if(i==="{"&&(l+=1),i==="}"&&(l-=1),i==="["&&(s+=1),i==="]"&&(s-=1),i==="("&&(e+=1),i===")"&&(e-=1),i===":"&&l===0&&s===0&&e===0)return{key:t.slice(0,n).trim(),value:t.slice(n+1).trim()}}return null},ye=t=>{const l=t.trim(),s=l.match(/^['"`](.*)['"`]$/);return s?s[1]:l.match(/[A-Za-z_$][\w$]*/)?.[0]??l},pe=(t,l,s)=>{if(l>=$t)return[];const e=t.trim();if(e.startsWith("{")&&e.endsWith("}")){const r=e.slice(1,-1).trim();return r?oe(r).map((a,n)=>{const i=At(a);if(!i){const p=ye(a.replace(/^\.\.\./,"").trim());return{id:`property-${s}-${l}-${n}`,label:p,kind:"property",line:s,children:[]}}const u=ye(i.key.replace(/^\.\.\./,"").trim()),d=pe(i.value,l+1,s);return{id:`property-${s}-${l}-${n}`,label:u,kind:"property",line:s,children:d}}):[]}if(e.startsWith("[")&&e.endsWith("]")){const r=e.slice(1,-1).trim();return r?oe(r).map((a,n)=>{const i=pe(a,l+1,s);return{id:`index-${s}-${l}-${n}`,label:`[${n}]`,kind:"property",line:s,children:i}}):[]}return[]},Ct=t=>{const l=t.trim();if(l.startsWith("{")){const s=l.slice(1,l.lastIndexOf("}")).trim();return s?oe(s).map(e=>{const r=e.replace(/^\.\.\./,"").trim(),a=r.match(/^([A-Za-z_$][\w$]*)\s*:\s*([A-Za-z_$][\w$]*)/);return a?a[2]:r.match(/^[A-Za-z_$][\w$]*/)?.[0]??""}).filter(Boolean):[]}if(l.startsWith("[")){const s=l.slice(1,l.lastIndexOf("]")).trim();return s?oe(s).map(e=>e.replace(/^\.\.\./,"").trim()).map(e=>e.match(/^[A-Za-z_$][\w$]*/)?.[0]??"").filter(Boolean):[]}return[]},ke=t=>{const l=t.indexOf("(");if(l===-1)return;let s=0;for(let e=l;e<t.length;e+=1){const r=t[e];if(r==="("&&(s+=1),r===")"&&(s-=1,s===0))return t.slice(l,e+1)}},de=t=>{const l=t.split(/\r?\n/),s=[],e=[],r=[],a=[];let n=0,i=0,u=null,d=null;const p=new Map,h=new Map,g=new Map,_=new Set(["if","else","switch","case","default","for","while","do","catch","try","return","break","continue","throw","alert","console"]),w=f=>f?_.has(f.toLowerCase()):!1,z=(f,M)=>{s.push(f),typeof M=="number"&&e.push({node:f,depth:M})},A=()=>e[e.length-1]?.node,P=()=>r[r.length-1]?.node,T=()=>a[a.length-1]?.node,G=(f,M)=>{const b=p.get(f.id)??0;b>=zt||(p.set(f.id,b+1),f.children.push(M))},Z=(f,M)=>{if(G(f,M),!/^[A-Za-z_$][\w$]*$/.test(M.label))return;const b=h.get(f.id)??new Map;b.set(M.label,M),h.set(f.id,b);const C=g.get(f.id)??new Map;C.has(M.label)||C.set(M.label,new Set),g.set(f.id,C)};for(let f=0;f<l.length;f+=1){const M=l[f],b=M.trim();if(!b)continue;const C=xe(M),k=C.brace>0?C.brace:0,x=C.brace<0?-C.brace:0,v=C.bracket>0?C.bracket:0,I=C.bracket<0?-C.bracket:0,D=b.startsWith("{"),E=b.startsWith("[");u&&(D||E)&&(D&&r.push({node:u.node,depth:n+k-x}),E&&a.push({node:u.node,depth:i+v-I,index:0}),u=null),d&&D&&(e.push({node:d,depth:n+k-x}),d=null);const O=b.match(/\bclass\s+([A-Za-z_]\w*)/);if(O){const S=O[1],$=n+Math.max(k-x,0),o={id:`class-${f}-${S}`,label:S,kind:"class",line:f,children:[]};for(k>x?z(o,$):(s.push(o),d=o),n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();u=null;continue}const F=b.match(/^(?:export\s+)?(?:const|let)\s+([A-Za-z_]\w*)\s*=\s*(async\s*)?\(([^)]*)\)\s*(?::\s*[^=]+)?\s*=>/),W=b.match(/^(?:export\s+)?(?:const|let)\s+([A-Za-z_]\w*)\s*=\s*(async\s*)?([A-Za-z_$][\w$]*)\s*=>/);if(F||W){const S=(F??W)[1],o=`(${F?F[3]??"":W[3]??""})`,m=/^[A-Z]/.test(S),y=n+Math.max(k-x,0),L={id:`arrow-fn-${f}-${S}`,label:S,kind:m?"component":"function",line:f,children:[],annotation:o};for(k>x?z(L,y):(s.push(L),(/=>\s*$/.test(b)||b.includes("=>"))&&(d=L)),n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();u=null;continue}const q=b.match(/\binterface\s+([A-Za-z_]\w*)/);if(q){const S=q[1],$=n+Math.max(k-x,0),o={id:`interface-${f}-${S}`,label:S,kind:"interface",line:f,children:[]};for(k>x?z(o,$):(s.push(o),d=o),n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();u=null;continue}const J=b.match(/^(?:export\s+)?type\s+([A-Za-z_]\w*)\s*=\s*\{/);if(J){const S=J[1],$=P()??T()??A(),o={id:`type-${f}-${S}`,label:S,kind:"variable",line:f,children:[]};for($?$.children.push(o):s.push(o),k>x&&r.push({node:o,depth:n+k-x}),n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();u=null;continue}const X=b.match(/^(?:export\s+)?type\s+([A-Za-z_]\w*)\b/);if(X&&/=/.test(b)&&!/=\s*\{/.test(b)){const S=X[1],$=P()??T()??A(),o={id:`type-${f}-${S}`,label:S,kind:"variable",line:f,children:[]};for($?$.children.push(o):s.push(o),n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();u=null;continue}const se=b.match(/^(?:export\s+)?(const|let|var)\s+(.+)/);if(se){const S=se[1],$=se[2],o=S==="const"?"constant":"variable",m=P()??T()??A(),y=$.split("=")[0]?.trim()??"",L=$.includes("=")?$.split("=").slice(1).join("=").trim():"";if(y.startsWith("{")||y.startsWith("[")){const Q=Ct(y),ee=Q.join("_")||"empty",ie={id:`destructure-${f}-${S}-${ee}`,label:y.startsWith("{")?"{...}":"[...]",kind:o,line:f,children:Q.map((K,Ae)=>({id:`destructure-${f}-${S}-${ee}-${Ae}`,label:K,kind:"variable",line:f,children:[]}))};m&&(m.kind==="function"||m.kind==="method")?G(m,ie):m?m.children.push(ie):s.push(ie)}else{const ee=y.match(/^([A-Za-z_$][\w$]*)/)?.[1];if(ee){const ie=pe(L,0,f),K={id:`variable-${f}-${ee}`,label:ee,kind:o,line:f,children:ie};m&&(m.kind==="function"||m.kind==="method")?Z(m,K):m?m.children.push(K):s.push(K),L.trim().startsWith("{")&&k>x?r.push({node:K,depth:n+k-x}):L.trim().startsWith("[")&&v>I?a.push({node:K,depth:i+v-I,index:0}):L===""&&/=\s*$/.test(b)&&(u={node:K})}}for(n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}const B=b.match(/^([A-Za-z_]\w*)\s*:\s*\{/);if(B){const S=B[1],$=P()??T()??A(),o={id:`property-${f}-${S}`,label:S,kind:"property",line:f,children:[]};for($?$.children.push(o):s.push(o),k>x&&r.push({node:o,depth:n+k-x}),n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();u=null;continue}const U=b.match(/^(public|private|protected|async|\s)*([A-Za-z_]\w*)\s*\([^)]*\)\s*{?/);if(U){const S=U[2];if(!w(S)){const $=ke(b),o={id:`method-${f}-${S}`,label:S,kind:b.includes("function")?"function":"method",line:f,children:[],annotation:$},m=P()??T()??A();m?m.children.push(o):s.push(o),k>x?e.push({node:o,depth:n+k-x}):b.includes("{")||(d=o)}for(n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();u=null;continue}const N=b.match(/\bfunction\s+([A-Za-z_]\w*)/);if(N){const S=N[1];if(!w(S)){const $=n+Math.max(k-x,0),o={id:`function-${f}-${S}`,label:S,kind:"function",line:f,children:[],annotation:ke(b)};k>x?z(o,$):(s.push(o),b.includes("{")||(d=o))}for(n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop();u=null;continue}for(n+=k-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=v-I;a.length&&i<a[a.length-1].depth;)a.pop()}return(()=>{const f=new Map,M=x=>{x.forEach(v=>{(v.kind==="function"||v.kind==="method"||v.kind==="component")&&f.set(`${v.kind}|${v.label}|${v.line}`,v),v.children.length&&M(v.children)})};M(s);const b=[];let C=0;const k=(x,v)=>{const I=`function|${x}|${v}`,D=f.get(I);if(D)return D;const E={id:`function-fallback-${v}-${x}`,label:x,kind:"function",line:v,children:[]};return s.push(E),f.set(I,E),E};l.forEach((x,v)=>{const I=x.trim(),D=xe(x),E=D.brace>0?D.brace:0,O=D.brace<0?-D.brace:0;if(!I){for(C+=E-O;b.length&&C<b[b.length-1].depth;)b.pop();return}const F=I.match(/^(?:export\s+)?(?:const|let)\s+([A-Za-z_]\w*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/);if(F){const q=k(F[1],v);E>O&&b.push({node:q,depth:C+E-O,vars:new Map})}else{const q=I.match(/\bfunction\s+([A-Za-z_]\w*)/);if(q){const J=k(q[1],v);E>O&&b.push({node:J,depth:C+E-O,vars:new Map})}}const W=I.match(/^(?:export\s+)?(const|let|var)\s+(.+)/);if(W&&b.length){const q=W[1],X=W[2].split("=")[0]?.trim()??"";if(!X.startsWith("{")&&!X.startsWith("[")){const B=X.match(/^([A-Za-z_$][\w$]*)/)?.[1];if(B){const U=b[b.length-1],N=U.node,S=N.children.find($=>$.label===B&&($.kind==="variable"||$.kind==="constant"));if(S)U.vars.set(B,S);else{const $={id:`local-${v}-${B}`,label:B,kind:q==="const"?"constant":"variable",line:v,children:[]};N.children.push($),U.vars.set(B,$)}}}}for(C+=E-O;b.length&&C<b[b.length-1].depth;)b.pop()})})(),s},It=t=>{const l=[],s=[];let e=0;const r=[];let a=null,n=!1;const i=(u,d=!1)=>{const p=s[s.length-1]?.node;p?p.children.push(u):l.push(u),d&&s.push({node:u,depth:e})};return t.split(/\r?\n/).forEach((u,d)=>{const p=u.trim(),h=H(u,"{"),g=H(u,"}");if(!p){for(e+=h-g;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(n){for(p.includes("*/")&&(n=!1),e+=h-g;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(p.startsWith("/*")){for(p.includes("*/")||(n=!0),e+=h-g;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(p.startsWith("*/")){for(e+=h-g;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(p.startsWith("@")&&h){const _=p.split("{")[0]?.trim()??p;i({id:`module-${d}-${_}`,label:_,kind:"module",line:d,children:[]},!0),r.length=0,a=null}else{const _=p.split("{")[0]?.trim();if(h){const w=[...r,_].join(" ");r.length=0;const z=w.split(",").map(P=>P.trim()).filter(Boolean),A=s[s.length-1]?.node;z.forEach(P=>{const T={id:`selector-${d}-${P}`,label:P,kind:"cssSelector",line:d,children:[]};A?A.children.push(T):l.push(T)}),a=e+h-g}else if(a===null){const w=p.startsWith("}"),z=p.endsWith(";");w?r.length=0:z||r.push(_)}}for(e+=h-g,a!==null&&e<a&&(a=null);s.length&&e<=s[s.length-1].depth;)s.pop()}),l},Pt=t=>{const l=[],s=[],e=/<\/?([a-zA-Z0-9:-]+)([^>]*)>/g;return t.split(/\r?\n/).forEach((r,a)=>{let n;for(;(n=e.exec(r))!==null;){const i=n[0],u=n[1];if(u.startsWith("!"))continue;const d=i.startsWith("</"),p=i.endsWith("/>")||i.includes("/>");if(d){for(;s.length&&s.pop()?.tag!==u;);continue}const h={id:`tag-${a}-${u}-${n.index}`,label:u,kind:"htmlTag",line:a,children:[]},g=s[s.length-1]?.node;g?g.children.push(h):l.push(h),p||s.push({tag:u,node:h})}}),l},Lt=t=>{try{const l=JSON.parse(t),s=(e,r)=>Array.isArray(e)?e.map((a,n)=>({id:`${r.join(".")}-index-${n}`,label:`[${n}]`,kind:"property",line:n,children:s(a,[...r,`[${n}]`])})):e&&typeof e=="object"?Object.entries(e).map(([a,n],i)=>({id:`${r.join(".")}-${a}-${i}`,label:a,kind:"property",line:i,children:s(n,[...r,a])})):[];return s(l,[])}catch{return[]}},Mt=t=>{const l=t.split(/\r?\n/),s=[],e=[];return l.forEach((r,a)=>{if(!r.trim()||r.trim().startsWith("#"))return;const n=r.match(/^\s*/)?.[0].length??0,i=r.match(/([A-Za-z0-9_.-]+)\s*:/);if(!i)return;const u={id:`yaml-${a}-${i[1]}`,label:i[1],kind:"property",line:a,children:[]};for(;e.length&&n<=e[e.length-1].indent;)e.pop();const d=e[e.length-1]?.node;d?d.children.push(u):s.push(u),e.push({indent:n,node:u})}),s},_e=`
      (class_declaration
        name: (type_identifier) @class.name
      ) @class.decl

      (interface_declaration
        name: (type_identifier) @interface.name
      ) @interface.decl

      (type_alias_declaration
        name: (type_identifier) @variable.name
      ) @variable.decl

      (method_definition
        name: (property_identifier) @method.name
      ) @method.decl

      (function_declaration
        name: (identifier) @function.name
      ) @function.decl

      (lexical_declaration
        (variable_declarator
          name: (identifier) @variable.name
        )
      ) @variable.decl

      (pair
        key: (property_identifier) @property.name
      ) @property.decl

      (pair
        key: (string) @property.name
      ) @property.decl

      (property_signature
        name: (property_identifier) @property.name
      ) @property.decl

      (property_signature
        name: (string) @property.name
      ) @property.decl
    `,$e={css:{id:"css",label:"CSS",description:"선택자와 규칙 블록을 구조화합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-css.wasm",query:`
        (rule_set
          (selectors) @selector.name
        ) @selector.decl

        (media_rule
          (media_query_list) @module.name
        ) @module.decl

        (supports_rule
          (supports_query) @module.name
        ) @module.decl

        (keyframes_rule
          (identifier) @module.name
        ) @module.decl
      `},fallbackParser:t=>It(t)},c:{id:"c",label:"C",description:"함수, 구조체 선언을 추출합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-c.wasm",query:`
        (function_definition
          declarator: (function_declarator
            declarator: (identifier) @function.name
          )
        ) @function.decl
        (struct_specifier
          name: (type_identifier) @struct.name
        ) @struct.decl
      `},fallbackParser:t=>ft(t)},cpp:{id:"cpp",label:"C++",description:"클래스·네임스페이스·함수/메서드를 탐색합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-cpp.wasm",query:`
        (class_specifier
          name: (type_identifier) @class.name
        ) @class.decl
        (namespace_definition) @namespace.decl
        (function_definition
          declarator: (function_declarator
            declarator: (identifier) @function.name
          )
        ) @function.decl
      `},fallbackParser:t=>mt(t)},go:{id:"go",label:"Go",description:"package, type, func 선언을 추출합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-go.wasm",query:`
        (package_clause) @module.decl
        (type_declaration
          (type_spec
            name: (type_identifier) @class.name
          )
        ) @class.decl
        (function_declaration
          name: (identifier) @function.name
        ) @function.decl
        (method_declaration
          name: (field_identifier) @method.name
        ) @method.decl
      `},fallbackParser:t=>gt(t)},html:{id:"html",label:"HTML",description:"주요 태그 구조를 추출합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-html.wasm",query:`
        (element
          (start_tag
            (tag_name) @tag.name
          )
        ) @tag.decl

        (element
          (self_closing_tag
            (tag_name) @tag.name
          )
        ) @tag.decl

        (self_closing_tag
          (tag_name) @tag.name
        ) @tag.decl
      `},fallbackParser:t=>Pt(t)},java:{id:"java",label:"Java",description:"클래스/인터페이스/메서드 시그니처를 탐색합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-java.wasm",query:`
        (class_declaration
          name: (identifier) @class.name
        ) @class.decl

        (interface_declaration
          name: (identifier) @interface.name
        ) @interface.decl

        (enum_declaration
          name: (identifier) @enum.name
        ) @enum.decl

        (constructor_declaration
          name: (identifier) @method.name
        ) @method.decl

        (method_declaration
          name: (identifier) @method.name
        ) @method.decl

        (field_declaration
          (variable_declarator
            name: (identifier) @field.name
          )
        ) @field.decl
      `},fallbackParser:t=>_t(t)},javascript:{id:"javascript",label:"JavaScript",description:"클래스/함수/변수 선언을 추출합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-javascript.wasm",query:`
        (class_declaration
          name: (identifier) @class.name
        ) @class.decl
        (function_declaration
          name: (identifier) @function.name
        ) @function.decl
        (method_definition
          name: (property_identifier) @method.name
        ) @method.decl
        (lexical_declaration
          (variable_declarator
            name: (identifier) @variable.name
          )
        ) @variable.decl

        (pair
          key: (property_identifier) @property.name
        ) @property.decl

        (pair
          key: (string) @property.name
        ) @property.decl
      `},fallbackParser:t=>de(t)},json:{id:"json",label:"JSON",description:"오브젝트 키와 배열 인덱스를 계층적으로 보여줍니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-json.wasm",query:`
        (pair
          key: (string) @property.name
        ) @property.decl
      `},fallbackParser:t=>Lt(t)},kotlin:{id:"kotlin",label:"Kotlin",description:"class, interface, fun 선언을 추출합니다.",fallbackParser:t=>wt(t)},csharp:{id:"csharp",label:"C#",description:"class, struct, method 선언을 추출합니다.",fallbackParser:t=>xt(t)},php:{id:"php",label:"PHP",description:"class, function 선언을 추출합니다.",fallbackParser:t=>yt(t)},python:{id:"python",label:"Python",description:"class, def, async def 구조를 추출합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-python.wasm",query:`
        (class_definition
          name: (identifier) @class.name
        ) @class.decl
        (function_definition
          name: (identifier) @function.name
        ) @function.decl
      `},fallbackParser:t=>vt(t)},rust:{id:"rust",label:"Rust",description:"mod, struct, fn 선언을 추출합니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-rust.wasm",query:`
        (mod_item
          name: (identifier) @module.name
        ) @module.decl
        (struct_item
          name: (type_identifier) @struct.name
        ) @struct.decl
        (function_item
          name: (identifier) @function.name
        ) @function.decl
      `},fallbackParser:t=>bt(t)},tsx:{id:"tsx",label:"TSX / React",description:"React 컴포넌트, 함수, 클래스 등을 찾습니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-tsx.wasm",query:_e},fallbackParser:t=>de(t)},typescript:{id:"typescript",label:"TypeScript / Angular",description:"클래스, Angular 컴포넌트, 함수·프로퍼티를 찾습니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-typescript.wasm",query:_e},fallbackParser:t=>de(t)},yaml:{id:"yaml",label:"YAML",description:"키/값 구조를 트리로 보여줍니다.",treeSitter:{wasmURL:"/wasm/tree-sitter-yaml.wasm",query:`
        (block_mapping_pair
          key: (flow_node) @property.name
        ) @property.decl
      `},fallbackParser:t=>Mt(t)},ruby:{id:"ruby",label:"Ruby",description:"class, module, def 선언을 추출합니다.",fallbackParser:t=>St(t)},scala:{id:"scala",label:"Scala",description:"class, object, def 선언을 추출합니다.",fallbackParser:t=>kt(t)},sql:{id:"sql",label:"SQL",description:"CREATE 구문을 간단히 추출합니다.",fallbackParser:t=>jt(t)}},Zt=t=>$e[t],Et=()=>Object.values($e).filter(t=>!!t.treeSitter).map(({id:t,label:l,description:s})=>({id:t,label:l,description:s}));let ue=null;const fe=async()=>(ue||(ue=pt(()=>import("./tree-sitter-DJeWk4Ia.js").then(t=>t.t),[])),ue),ve=t=>{if(!t)return;const l=t.env??(t.env={});typeof l.tree_sitter_progress_callback!="function"&&(l.tree_sitter_progress_callback=()=>0),typeof l.tree_sitter_query_progress_callback!="function"&&(l.tree_sitter_query_progress_callback=()=>0)},Rt=()=>{const t=globalThis;if(t.__treeSitterPatched)return;t.__treeSitterPatched=!0;const l=WebAssembly.instantiate,s=(async(e,r)=>(ve(r),l(e,r)));if(WebAssembly.instantiate=s,WebAssembly.instantiateStreaming){const e=WebAssembly.instantiateStreaming,r=((a,n)=>(ve(n),e(a,n)));WebAssembly.instantiateStreaming=r}};Rt();const Dt=ht,Tt={class:"class",interface:"interface",enum:"enum",method:"method",function:"function",variable:"variable",field:"field",property:"property",struct:"struct",module:"module",tag:"htmlTag",selector:"cssSelector",namespace:"namespace"},Ot=(t,l)=>{if(l!=="function"&&l!=="method"&&l!=="component")return;const s=t.childForFieldName("parameters")??t.childForFieldName("parameter")??t.namedChildren.find(e=>e?.type?.includes("parameter")??!1);return s&&s.text||"()"};let re=null,ce=null;const he=new Map,Wt=async()=>{if(!re)return ce||(ce=(async()=>{try{const{Parser:t}=await fe();await t.init({locateFile:()=>Dt}),re=new t}catch(t){throw ce=null,t}})()),ce},Nt=async t=>{if(he.has(t.id))return he.get(t.id);if(!re)throw new Error("Tree-sitter parser가 초기화되지 않았습니다.");if(!t.treeSitter)throw new Error("Tree-sitter 설정이 없는 언어입니다.");const{Language:l}=await fe(),s=await l.load(t.treeSitter.wasmURL);return he.set(t.id,s),s},qt=t=>{if(!t.length)return{nodes:[],diagnostics:["Tree-sitter 질의에서 심볼을 찾지 못했습니다."]};const l=new Map,s=[],e=[],r=(n,i)=>n==="class"&&i.text.includes("@Component")?"component":n==="variable"?/\b=\s*(async\s*)?\([^)]*\)\s*(?::\s*[^=]+)?\s*=>/.test(i.text)||/\b=\s*(async\s*)?[A-Za-z_$][\w$]*\s*=>/.test(i.text)||/\b=\s*(async\s*)?function\b/.test(i.text)?"function":/\bconst\b/.test(i.text)?"constant":"variable":n,a=(n,i,u)=>({id:`${n}-${i.id}`,label:u??i.childForFieldName("name")?.text??"(anonymous)",kind:r(n,i),line:i.startPosition.row,children:[],annotation:Ot(i,n)});return t.forEach(n=>{let i=null,u=null,d=null;for(const h of n.captures){const[g,_]=h.name.split(".");_&&(_==="decl"?(i=h.node,d=Tt[g]??null):_==="name"&&(u=h.node.text))}if(!i||!d)return;const p=a(d,i,u??null);l.set(i.id,p),e.push({node:i,kind:p.kind,outline:p})}),e.forEach(({node:n,kind:i,outline:u})=>{const d=Bt(n,l),p=d&&(d.kind==="function"||d.kind==="method")&&(i==="property"||i==="cssSelector"||i==="htmlTag");!d&&i==="property"&&n.type==="property_signature"||(d&&!p?d.children.push(u):(!d||!p)&&s.push(u))}),{nodes:s,diagnostics:[]}},Bt=(t,l)=>{let s=t.parent;for(;s;){const e=l.get(s.id);if(e)return e;s=s.parent}return null},Ut=(t,l)=>{const s=h=>`${h.label}|${h.line}`,e={component:5,function:4,method:4,class:3,interface:3,struct:3,enum:3,module:2,namespace:2,field:1,property:1,constant:1,variable:1,htmlTag:1,cssSelector:1,file:0,unknown:0},r=(h,g)=>{e[g.kind]>e[h.kind]&&(h.kind=g.kind)},a=new Set(["component","function","method","class","interface","struct","enum","module","namespace","variable","constant"]),n=h=>{const g=new Map,_=new Map;return h.forEach(w=>{g.set(s(w),w);const z=_.get(w.label)??[];z.push(w),_.set(w.label,z)}),{byKey:g,byLabel:_}},i=(h,g,_=1)=>{let w=null,z=Number.POSITIVE_INFINITY;return h.forEach(A=>{const P=Math.abs(A.line-g);P<=_&&P<z&&(w=A,z=P)}),w},u=(h,g)=>{const _=h.byKey.get(s(g));if(_)return _;if(!a.has(g.kind))return null;const w=h.byLabel.get(g.label);return w?.length?i(w,g.line):null},d=(h,g)=>{const _=n(h);g.forEach(w=>{const z=u(_,w);if(z)r(z,w),p(z,w);else{h.push(w),_.byKey.set(s(w),w);const A=_.byLabel.get(w.label)??[];A.push(w),_.byLabel.set(w.label,A)}})},p=(h,g)=>{d(h.children,g.children)};return d(t,l),t},Ft=async(t,l)=>{const s=Zt(l);if(!s)throw new Error(`지원하지 않는 언어: ${l}`);if(!t.trim())return{nodes:[],diagnostics:["코드를 입력하거나 파일을 업로드하세요."],engine:"fallback"};if(!s.treeSitter)return{nodes:s.fallbackParser(t),diagnostics:["Tree-sitter 지원이 없어 간단한 파서로 분석했습니다."],engine:"fallback"};try{if(await Wt(),!re)throw new Error("Tree-sitter parser 생성 실패");const e=await Nt(s);re.setLanguage(e);const r=re.parse(t);if(!r)throw new Error("파서가 구문 트리를 생성하지 못했습니다.");const{Query:a}=await fe(),i=new a(e,s.treeSitter.query).matches(r.rootNode),{nodes:u,diagnostics:d}=qt(i),h=l==="javascript"||l==="typescript"||l==="tsx"?Ut(u,s.fallbackParser(t)):u;return h.length?{nodes:h,diagnostics:d,engine:"tree-sitter"}:{nodes:s.fallbackParser(t),diagnostics:d.length?d:["Tree-sitter에서 결과를 찾지 못해 간단한 분석으로 대체했습니다."],engine:"fallback"}}catch(e){return{nodes:s.fallbackParser(t),diagnostics:["Tree-sitter 실행에 실패하여 간단한 파서 결과만 표시합니다.",e?.message??String(e)],engine:"fallback"}}},Kt=Et(),Ht={css:`.hero-banner {
  display: flex;
  gap: 16px;
}

.hero-banner .title {
  font-weight: 700;
}
`,c:`#include <stdio.h>

struct User {
    char name[32];
};

void greet(struct User *user) {
    printf("Hello %s", user->name);
}
`,cpp:`#include <iostream>

class Engine {
public:
  void Start();
};

namespace demo {
  void Run();
}
`,go:`package server

type Handler struct {
  addr string
}

func (h *Handler) Serve() error {
  return nil
}

func helper(port int) {}
`,html:`<section class="hero">
  <header>
    <h1>Outline Demo</h1>
  </header>
  <article>
    <p>Tree-sitter 분석 예시</p>
  </article>
</section>
`,java:`package com.example.demo;

import java.util.List;

public class SampleService {
    private final List<String> cache;

    public SampleService(List<String> cache) {
        this.cache = cache;
    }

    public void refreshCache() {
        cache.clear();
        loadItems();
    }

    private List<String> loadItems() {
        return List.of("alpha", "beta");
    }
}
`,javascript:`export class Dialog {
  open() {}
  close() {}
}

export function format(value) {
  const settings = { trim: true, options: { mode: 'fast' } }
  const list = [value, { raw: value }, [1, 2, 3]]
  const { trim } = settings
  const [first] = list
  return trim ? String(first).trim() : String(first)
}
`,json:`{
  "name": "demo",
  "scripts": {
    "dev": "vite"
  }
}
`,kotlin:`class User(val name: String)

fun loadUsers(): List<User> {
  val options = mapOf("limit" to 10)
  return emptyList()
}
`,csharp:`public class Logger {
  public void Info(string message) {}
}
`,php:`<?php

class PostController {
  public function index() {}
}

function helper() {}
`,python:`class ImageService:
    def __init__(self):
        self.cache = []

    async def refresh(self):
        await self.fetch()

    def fetch(self):
        return []
`,ruby:`class UserService
  def fetch
  end
end
`,rust:`mod utils {
    pub fn helper() {}
}

pub struct Job {
    pub id: u32,
}

fn run(job: Job) {}
`,scala:`class ReportService {
  def run(id: String): Unit = {}
}
`,sql:`create table users (
  id int,
  name varchar(255)
);
`,tsx:`export function DashboardCard({ title }: { title: string }) {
  const config = { title, theme: { color: 'green' } }
  return <section>{title}</section>
}

class LegacyPanel extends React.Component {
  render() {
    return <div>Legacy</div>
  }
}
`,typescript:`import { Component, Input } from '@angular/core'

@Component({
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
})
export class DashboardCardComponent {
  @Input() title = ''
  config = { size: 8, variants: [{ name: 'basic' }] }

  refresh(): void {
    const { size } = this.config
    this.fetchData()
  }

  private fetchData(): void {
    console.log('fetch data')
  }
}

export function helper(value: string): string {
  const { length } = value
  return value.trim()
}
`,yaml:`version: 1
app:
  name: outline
  features:
    - tree-sitter
    - fallback
`},Vt=()=>{const[t,l]=j.useState("java"),[s,e]=j.useState(""),[r,a]=j.useState([]),[n,i]=j.useState(null),[u,d]=j.useState([]),[p,h]=j.useState(!1),[g,_]=j.useState(null),w=j.useRef(null),z=j.useMemo(()=>r.length,[r]),A=j.useCallback(async Z=>{const V=(Z??s).trim();if(!V){a([]),d(["코드를 입력하거나 파일을 업로드해 주세요."]),i(null);return}h(!0),_(null);try{const f=await Ft(V,t);a(f.nodes),d(f.diagnostics),i(f.engine)}catch(f){_(f?.message??String(f)),a([]),i(null),h(!1);return}h(!1)},[t,s]),P=j.useCallback(async Z=>{if(!Z)return;const V=await Z.text();e(V),A(V),w.current&&(w.current.value="")},[A]),T=j.useCallback(()=>{const Z=Ht[t];e(Z),a([]),d([]),i(null),_(null),A(Z)},[A,t]),G=j.useCallback(Z=>{l(Z),e(""),a([]),d([]),i(null),_(null),w.current&&(w.current.value="")},[]);return{languageId:t,changeLanguage:G,source:s,setSource:e,outline:r,outlineCount:z,engine:n,diagnostics:u,loading:p,error:g,handleAnalyze:A,handleFileSelect:P,handleSampleLoad:T,fileInputRef:w,languageOptions:Kt}},Jt={file:c.jsx(dt,{fontSize:"inherit"}),class:c.jsx(ot,{fontSize:"inherit"}),interface:c.jsx(ct,{fontSize:"inherit"}),enum:c.jsx(lt,{fontSize:"inherit"}),method:c.jsx(at,{fontSize:"inherit"}),function:c.jsx(rt,{fontSize:"inherit"}),variable:c.jsx(it,{fontSize:"inherit"}),constant:c.jsx(st,{fontSize:"inherit"}),field:c.jsx(we,{fontSize:"inherit"}),property:c.jsx(we,{fontSize:"inherit"}),component:c.jsx(nt,{fontSize:"inherit"}),struct:c.jsx(tt,{fontSize:"inherit"}),module:c.jsx(et,{fontSize:"inherit"}),namespace:c.jsx(Qe,{fontSize:"inherit"}),htmlTag:c.jsx(Ge,{fontSize:"inherit"}),cssSelector:c.jsx(Ye,{fontSize:"inherit"})},Se=[{kind:"class",label:"클래스"},{kind:"function",label:"함수"},{kind:"interface",label:"인터페이스"},{kind:"struct",label:"구조체/레코드"},{kind:"enum",label:"열거형"},{kind:"method",label:"메서드"},{kind:"variable",label:"변수"},{kind:"constant",label:"상수"},{kind:"field",label:"필드"},{kind:"property",label:"프로퍼티"},{kind:"component",label:"UI 컴포넌트"},{kind:"module",label:"모듈/패키지"},{kind:"namespace",label:"네임스페이스"},{kind:"htmlTag",label:"HTML 태그"},{kind:"cssSelector",label:"CSS 선택자"},{kind:"unknown",label:"기타"}],je=t=>Jt[t]??c.jsx(Xe,{fontSize:"inherit"}),Xt={javascript:".js",typescript:".ts",tsx:".tsx",java:".java",kotlin:".kt",python:".py",go:".go",rust:".rs",c:".c",cpp:".cpp,.cc,.cxx,.hpp,.hh,.hxx",csharp:".cs",php:".php",ruby:".rb",scala:".scala",sql:".sql",html:".html,.htm",css:".css",json:".json",yaml:".yml,.yaml",txt:".txt"},ze=(t,l)=>{t.forEach(s=>{l.add(s.id),s.children.length&&ze(s.children,l)})},Yt=(t,l)=>{const s=[],e=(r,a)=>{r.forEach(n=>{s.push({node:n,depth:a}),n.children.length&&l.has(n.id)&&e(n.children,a+1)})};return e(t,0),s},sn=()=>{const{languageId:t,changeLanguage:l,source:s,setSource:e,outline:r,outlineCount:a,diagnostics:n,engine:i,loading:u,error:d,handleAnalyze:p,handleFileSelect:h,handleSampleLoad:g,fileInputRef:_,languageOptions:w}=Vt(),z=Ie(),A=z.palette.mode==="dark"?"outline-dark-transparent":"outline-light-transparent",P=Pe(z.breakpoints.up("md")),T=j.useMemo(()=>a?`${a}개의 최상위 심볼`:"결과 없음",[a]),G=j.useRef(null),Z=j.useRef(!1),[V,f]=j.useState(.55),M=V,b=1-V,[C,k]=j.useState(null),x=Xt[t]??".js,.ts,.tsx,.java,.kt,.py,.go,.rs,.c,.cpp,.cc,.cxx,.hpp,.hh,.hxx,.cs,.php,.rb,.scala,.sql,.html,.htm,.css,.json,.yml,.yaml,.txt",[v,I]=j.useState(new Set),[D,E]=j.useState(null),O=j.useRef(null),F=j.useRef(null),[W,q]=j.useState({width:0,height:0}),J=j.useMemo(()=>Yt(r,v),[r,v]),X=j.useCallback(o=>{I(m=>{const y=new Set(m);return y.has(o)?y.delete(o):y.add(o),y})},[]),se=j.useCallback(o=>{E(o.id);const m=o.line+1,y=O.current;y&&(y.revealLineInCenter(m),y.setSelection({startLineNumber:m,startColumn:1,endLineNumber:m,endColumn:1}),y.focus())},[]),B=j.useCallback(({index:o,style:m})=>{const{node:y,depth:L}=J[o],Q=y.children.length>0,ee=v.has(y.id),ie=y.id===D;return c.jsxs(R,{style:m,sx:{display:"flex",alignItems:"center",pl:1+L*1.5,pr:1,gap:1,cursor:"pointer",bgcolor:ie?"action.selected":void 0},onClick:()=>se(y),children:[Q?c.jsx(ae,{size:"small",onClick:K=>{K.stopPropagation(),X(y.id)},children:ee?c.jsx(Le,{fontSize:"small"}):c.jsx(Me,{fontSize:"small"})}):c.jsx(R,{sx:{width:32}}),c.jsx(R,{sx:{display:"flex",color:"text.secondary"},children:je(y.kind)}),c.jsx(Y,{variant:"body2",fontWeight:600,noWrap:!0,component:"span",children:y.label}),y.annotation&&c.jsx(Y,{component:"span",variant:"caption",color:"text.secondary",noWrap:!0,sx:{ml:.5},children:y.annotation}),c.jsxs(Y,{variant:"caption",color:"text.secondary",children:["L",y.line+1]})]})},[v,se,X,D,J]),U=j.useCallback(o=>Math.min(Math.max(o,.2),.8),[]),N=j.useCallback(o=>{if(!G.current)return;const m=G.current.getBoundingClientRect();if(m.width<=0)return;const y=(o-m.left)/m.width;f(U(y))},[U]),S=j.useCallback(()=>{Z.current=!1,document.body.style.cursor="",document.body.style.userSelect=""},[]),$=j.useCallback(o=>{if(P)if(Z.current=!0,document.body.style.cursor="col-resize",document.body.style.userSelect="none","touches"in o){const m=o.touches[0];m&&N(m.clientX)}else N(o.clientX)},[P,N]);return j.useEffect(()=>{const o=L=>{Z.current&&(L.preventDefault(),N(L.clientX))},m=L=>{if(!Z.current)return;const Q=L.touches[0];Q&&(L.preventDefault(),N(Q.clientX))},y=()=>S();return window.addEventListener("mousemove",o),window.addEventListener("mouseup",y),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",y),window.addEventListener("touchcancel",y),()=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",y),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",y),window.removeEventListener("touchcancel",y)}},[S,N]),j.useEffect(()=>{P?f(o=>U(o||.55)):(Z.current=!1,document.body.style.cursor="",document.body.style.userSelect="",f(1))},[U,P]),j.useEffect(()=>{const o=new Set;ze(r,o),I(o),E(null)},[r]),j.useLayoutEffect(()=>{const o=F.current;if(!o)return;const m=new ResizeObserver(y=>{const L=y[0];L&&q({width:L.contentRect.width,height:L.contentRect.height})});return m.observe(o),()=>m.disconnect()},[]),c.jsxs(Ze,{sx:{p:1.25,display:"flex",flexDirection:"column",gap:1.25,flex:1,minHeight:785,height:"100%",width:1,maxWidth:"100%",overflowX:"hidden"},children:[c.jsxs(te,{direction:"row",spacing:1.25,alignItems:"center",children:[c.jsxs(Ee,{size:"small",sx:{minWidth:220},children:[c.jsx(Re,{id:"code-outline-language",children:"언어"}),c.jsx(De,{labelId:"code-outline-language",value:t,label:"언어",onChange:o=>l(o.target.value),children:w.map(o=>c.jsx(Te,{value:o.id,children:o.label},o.id))})]}),c.jsxs(le,{variant:"outlined",startIcon:c.jsx(Oe,{}),component:"label",sx:{minWidth:200},children:["파일 업로드",c.jsx("input",{hidden:!0,type:"file",accept:x,ref:_,onChange:o=>{const m=o.target.files?.[0]??null;h(m)}})]}),c.jsx(le,{variant:"outlined",color:"secondary",startIcon:c.jsx(We,{}),onClick:g,sx:{minWidth:200},children:"샘플 코드 불러오기"}),c.jsx(R,{sx:{flex:1}}),c.jsx(te,{direction:"row",spacing:1,alignItems:"center",children:c.jsx(le,{variant:"contained",startIcon:u?c.jsx(Ne,{color:"inherit",size:16}):c.jsx(qe,{}),onClick:()=>p(),disabled:u,children:"Outline 생성"})})]}),c.jsxs(R,{ref:G,sx:{flex:1,minHeight:0,width:1,display:"grid",flexDirection:"row",gridTemplateColumns:`minmax(0, ${M}fr) 6px minmax(0, ${b}fr)`,gap:1.25,columnGap:1.25,touchAction:"none",contain:"layout paint size",alignItems:"stretch"},children:[c.jsxs(te,{sx:{border:"1px solid",borderColor:"divider",borderRadius:.75,overflow:"hidden",minHeight:0},children:[c.jsxs(R,{sx:{px:1.25,py:1.25,borderBottom:"1px solid",borderColor:"divider",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx(Y,{variant:"subtitle2",children:"편집기"}),c.jsxs(Y,{variant:"caption",color:"text.secondary",children:[s.length.toLocaleString()," chars"]})]}),c.jsx(R,{sx:{flex:1,minHeight:240},children:c.jsx(ut,{height:"100%",defaultLanguage:"typescript",language:t==="java"?"java":"typescript",theme:A,value:s,onChange:o=>e(o??""),onMount:(o,m)=>{O.current=o,m&&(m.editor.defineTheme(A,{base:z.palette.mode==="dark"?"vs-dark":"vs",inherit:!0,rules:[],colors:{"editor.background":"#00000000","editorLineNumber.background":"#00000000","editor.lineHighlightBackground":"#00000000"}}),m.editor.setTheme(A))},options:{wordWrap:"on",minimap:{enabled:!1},automaticLayout:!0,fontSize:13}})})]}),c.jsx(R,{sx:{display:"flex",width:6,justifySelf:"stretch",cursor:P?"col-resize":"default",bgcolor:"divider",borderRadius:.75,alignItems:"center",justifyContent:"center",userSelect:"none"},role:"separator","aria-orientation":"vertical",onMouseDown:$,onTouchStart:$,children:c.jsxs(R,{sx:{display:"flex",flexDirection:"column",gap:.25},children:[c.jsx(R,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),c.jsx(R,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),c.jsx(R,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}})]})}),c.jsxs(te,{sx:{border:"1px solid",borderColor:"divider",borderRadius:.75,minHeight:0,overflow:"hidden"},children:[c.jsxs(R,{sx:{px:1.25,py:1.25,borderBottom:"1px solid",borderColor:"divider",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs(te,{direction:"row",spacing:1,alignItems:"center",children:[c.jsx(Y,{variant:"subtitle2",children:"Outline"}),c.jsx(me,{title:"아이콘 설명",children:c.jsx(ae,{size:"small",onClick:()=>k({title:"Outline 아이콘 안내",items:Se.map(o=>`${o.label} (${o.kind})`)}),children:c.jsx(ge,{fontSize:"small"})})}),i&&c.jsx(be,{size:"small",color:i==="tree-sitter"?"primary":"warning",label:i==="tree-sitter"?"Tree-sitter 성공":"Fallback (간단한 파서)"}),(d||n.length)&&c.jsx(me,{title:d?"에러 상세 보기":i==="fallback"?"Fallback 사용 이유":"분석 정보",children:c.jsx(ae,{size:"small",color:d?"error":i==="fallback"?"warning":"info",onClick:()=>k({title:d?"에러":i==="fallback"?"Fallback 사용 안내":"분석 정보",items:d?[d]:n.length?n:["Tree-sitter 실행에 실패하여 간단한 파서 결과만 표시합니다."]}),children:d?c.jsx(Be,{fontSize:"small"}):i==="fallback"?c.jsx(Ue,{fontSize:"small"}):c.jsx(ge,{fontSize:"small"})})})]}),c.jsx(be,{size:"small",label:T,variant:"outlined"})]}),c.jsx(R,{sx:{flex:1,px:0,py:.5},ref:F,children:r.length&&W.height>0&&W.width>0?c.jsx(Ce,{height:W.height,width:W.width,itemCount:J.length,itemSize:36,overscanCount:8,children:B}):c.jsx(te,{alignItems:"center",justifyContent:"center",sx:{height:"100%"},spacing:1,children:c.jsx(Y,{variant:"body2",color:"text.secondary",children:"분석된 구조가 없습니다. 샘플을 불러오거나 우측 버튼으로 Outline을 생성하세요."})})})]})]}),c.jsxs(Fe,{open:!!C,onClose:()=>k(null),maxWidth:"sm",fullWidth:!0,children:[c.jsxs(Ke,{children:[C?.title,c.jsx(ae,{onClick:()=>k(null),sx:{position:"absolute",right:8,top:1.25},children:c.jsx(He,{})})]}),c.jsx(Ve,{dividers:!0,children:C?.title==="Outline 아이콘 안내"?c.jsx(R,{sx:{px:1.25,py:.5,borderColor:"divider",display:"flex",flexWrap:"wrap",gap:1.25},children:Se.map(o=>c.jsxs(te,{direction:"row",spacing:.5,alignItems:"center",sx:{minWidth:120},children:[c.jsx(R,{sx:{color:"text.secondary",display:"flex"},children:je(o.kind)}),c.jsx(Y,{variant:"caption",color:"text.secondary",children:o.label})]},o.kind))}):c.jsx(te,{spacing:1,children:C?.items.map((o,m)=>c.jsx(Y,{variant:"body2",children:o},m))})}),c.jsx(Je,{children:c.jsx(le,{onClick:()=>k(null),children:"닫기"})})]})]})};export{sn as default};
