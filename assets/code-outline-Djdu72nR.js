import{r as v,j as c,w as Ce}from"./vendor-CRMzTT1s.js";import{u as Ie,q as Pe,B as Z,I as ae,f as Le,J as Me,T as J,P as Ze,S as ee,a4 as Ee,a5 as Re,a6 as De,a7 as Oe,a as le,aW as Te,aX as We,C as Ne,aY as qe,a9 as me,aa as ge,Y as be,aZ as Ue,a_ as Be,l as Fe,m as Ke,N as He,n as Ve,p as Je,a$ as Xe,b0 as Ye,b1 as Ge,b2 as Qe,b3 as et,b4 as tt,b5 as nt,b6 as we,b7 as st,b8 as it,b9 as rt,ba as at,bb as lt,bc as ct,bd as ot,be as dt}from"./mui-4f8cQjky.js";import{M as ut}from"./monaco-editor-DWhRJw6T.js";import{p as ht,_ as pt}from"./tree-sitter-aGyQ8e2w.js";import"./excel-CUMakpxJ.js";const K=(t,l)=>(t.match(new RegExp(`\\${l}`,"g"))??[]).length,te=(t,l,s)=>{const e=t.split(/\r?\n/),r=[],a=[];let n=0;const i=(d,o,p=!1)=>{const h=a[a.length-1]?.node;if(h?h.children.push(d):r.push(d),p){const w=K(o,"{")-K(o,"}");a.push({node:d,depth:n+w})}};return e.forEach((d,o)=>{const p=d.trim();for(l.forEach(h=>{const w=p.match(h.regex);if(!w)return;const k=w[h.labelIndex??1]??w[0],y=h.refiner?h.refiner(w,d):h.kind;i({id:`${y}-${o}-${k}`,label:k,kind:y,line:o,children:[]},d,h.pushDepth??!1)}),n+=K(d,"{"),n-=K(d,"}");a.length&&n<a[a.length-1].depth;)a.pop()}),r},ft=t=>te(t,[{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"function"}]),mt=t=>te(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\bnamespace\s+([A-Za-z_]\w*)/,kind:"namespace",pushDepth:!0},{regex:/([A-Za-z_]\w*)\s*::\s*([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"method",labelIndex:2},{regex:/([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"function"}]),gt=t=>te(t,[{regex:/\bpackage\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\btype\s+([A-Za-z_]\w*)\s+struct\b/,kind:"struct",pushDepth:!0},{regex:/\bfunc\s+\(([^\)]+)\)\s+([A-Za-z_]\w*)\s*\(/,kind:"method",labelIndex:2},{regex:/\bfunc\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),bt=t=>te(t,[{regex:/\bmod\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/\bfn\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),wt=t=>te(t,[{regex:/\benum\s+class\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/\binterface\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\bobject\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bfun\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),xt=t=>te(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\binterface\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/\b([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"method"}]),yt=t=>te(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\binterface\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\btrait\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bfunction\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),kt=t=>te(t,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\btrait\s+([A-Za-z_]\w*)/,kind:"interface",pushDepth:!0},{regex:/\bobject\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bdef\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),_t=t=>{const l=t.split(/\r?\n/),s=[],e=[];let r=0;const a=n=>{const i=e[e.length-1]?.node;i?i.children.push(n):s.push(n)};for(let n=0;n<l.length;n+=1){const i=l[n],d=i.trim(),o=d.match(/\b(class|interface|enum)\s+([A-Za-z_]\w*)/);if(o){const p={class:"class",interface:"interface",enum:"enum"},h={id:`${o[1]}-${n}`,label:o[2],kind:p[o[1]]??"class",line:n,children:[]};a(h),e.push({node:h,depth:r+K(i,"{")-K(i,"}")})}else{const p=d.match(/(public|protected|private|static|\s)*[\w<>\[\],\s]+\s+([A-Za-z_]\w*)\s*\([^)]*\)\s*\{?/);if(p){const h={id:`method-${n}-${p[2]}`,label:p[2],kind:"method",line:n,children:[]};a(h)}else{const h=d.match(/(public|protected|private|static|\s)+[\w<>\[\],\s]+\s+([A-Za-z_]\w*)\s*(=|;)/);if(h){const w={id:`property-${n}-${h[2]}`,label:h[2],kind:"field",line:n,children:[]};a(w)}}}for(r+=K(i,"{"),r-=K(i,"}");e.length&&r<e[e.length-1].depth;)e.pop()}return s},vt=t=>{const l=t.split(/\r?\n/),s=[],e=[],r=(a,n)=>{for(;e.length&&n<=e[e.length-1].indent;)e.pop();const i=e[e.length-1]?.node;i?i.children.push(a):s.push(a),e.push({indent:n,node:a})};return l.forEach((a,n)=>{const i=a.match(/^\s*/)?.[0].length??0,d=a.trim(),o=d.match(/^class\s+([A-Za-z_]\w*)/);if(o){r({id:`class-${n}-${o[1]}`,label:o[1],kind:"class",line:n,children:[]},i);return}const p=d.match(/^(async\s+)?def\s+([A-Za-z_]\w*)/);p&&r({id:`function-${n}-${p[2]}`,label:p[2],kind:"function",line:n,children:[]},i)}),s},St=t=>{const l=t.split(/\r?\n/),s=[],e=[],r=a=>{const n=e[e.length-1];n?n.children.push(a):s.push(a),e.push(a)};return l.forEach((a,n)=>{const i=a.trim(),d=i.match(/^class\s+([A-Za-z_]\w*)/);if(d){r({id:`class-${n}-${d[1]}`,label:d[1],kind:"class",line:n,children:[]});return}const o=i.match(/^module\s+([A-Za-z_]\w*)/);if(o){r({id:`module-${n}-${o[1]}`,label:o[1],kind:"module",line:n,children:[]});return}const p=i.match(/^def\s+([A-Za-z_]\w*)/);if(p){r({id:`function-${n}-${p[1]}`,label:p[1],kind:"function",line:n,children:[]});return}i==="end"&&e.pop()}),s},jt=t=>{const l=[];return t.split(/\r?\n/).forEach((s,e)=>{const a=s.trim().match(/^(create\s+(table|view|index|function|procedure|trigger))\s+([A-Za-z0-9_.]+)/i);if(!a)return;const n=a[3];l.push({id:`sql-${e}-${n}`,label:n,kind:"module",line:e,children:[]})}),l},$t=3,zt=20,xe=t=>{let l=0,s=0,e=0,r=null,a=!1;for(let n=0;n<t.length;n+=1){const i=t[n],d=n+1<t.length?t[n+1]:"";if(a){a=!1;continue}if(i==="\\"){a=!0;continue}if(r){i===r&&(r=null);continue}if(i==="/"&&d==="/")break;if(i==='"'||i==="'"||i==="`"){r=i;continue}i==="{"&&(l+=1),i==="}"&&(l-=1),i==="["&&(s+=1),i==="]"&&(s-=1),i==="("&&(e+=1),i===")"&&(e-=1)}return{brace:l,bracket:s,paren:e}},oe=t=>{const l=[];let s=0,e=0,r=0,a=null,n=!1,i=0;for(let o=0;o<t.length;o+=1){const p=t[o];if(n){n=!1;continue}if(p==="\\"){n=!0;continue}if(a){p===a&&(a=null);continue}if(p==='"'||p==="'"||p==="`"){a=p;continue}if(p==="{"&&(s+=1),p==="}"&&(s-=1),p==="["&&(e+=1),p==="]"&&(e-=1),p==="("&&(r+=1),p===")"&&(r-=1),p===","&&s===0&&e===0&&r===0){const h=t.slice(i,o).trim();h&&l.push(h),i=o+1}}const d=t.slice(i).trim();return d&&l.push(d),l},At=t=>{let l=0,s=0,e=0,r=null,a=!1;for(let n=0;n<t.length;n+=1){const i=t[n];if(a){a=!1;continue}if(i==="\\"){a=!0;continue}if(r){i===r&&(r=null);continue}if(i==='"'||i==="'"||i==="`"){r=i;continue}if(i==="{"&&(l+=1),i==="}"&&(l-=1),i==="["&&(s+=1),i==="]"&&(s-=1),i==="("&&(e+=1),i===")"&&(e-=1),i===":"&&l===0&&s===0&&e===0)return{key:t.slice(0,n).trim(),value:t.slice(n+1).trim()}}return null},ye=t=>{const l=t.trim(),s=l.match(/^['"`](.*)['"`]$/);return s?s[1]:l.match(/[A-Za-z_$][\w$]*/)?.[0]??l},pe=(t,l,s)=>{if(l>=$t)return[];const e=t.trim();if(e.startsWith("{")&&e.endsWith("}")){const r=e.slice(1,-1).trim();return r?oe(r).map((a,n)=>{const i=At(a);if(!i){const p=ye(a.replace(/^\.\.\./,"").trim());return{id:`property-${s}-${l}-${n}`,label:p,kind:"property",line:s,children:[]}}const d=ye(i.key.replace(/^\.\.\./,"").trim()),o=pe(i.value,l+1,s);return{id:`property-${s}-${l}-${n}`,label:d,kind:"property",line:s,children:o}}):[]}if(e.startsWith("[")&&e.endsWith("]")){const r=e.slice(1,-1).trim();return r?oe(r).map((a,n)=>{const i=pe(a,l+1,s);return{id:`index-${s}-${l}-${n}`,label:`[${n}]`,kind:"property",line:s,children:i}}):[]}return[]},Ct=t=>{const l=t.trim();if(l.startsWith("{")){const s=l.slice(1,l.lastIndexOf("}")).trim();return s?oe(s).map(e=>{const r=e.replace(/^\.\.\./,"").trim(),a=r.match(/^([A-Za-z_$][\w$]*)\s*:\s*([A-Za-z_$][\w$]*)/);return a?a[2]:r.match(/^[A-Za-z_$][\w$]*/)?.[0]??""}).filter(Boolean):[]}if(l.startsWith("[")){const s=l.slice(1,l.lastIndexOf("]")).trim();return s?oe(s).map(e=>e.replace(/^\.\.\./,"").trim()).map(e=>e.match(/^[A-Za-z_$][\w$]*/)?.[0]??"").filter(Boolean):[]}return[]},ke=t=>{const l=t.indexOf("(");if(l===-1)return;let s=0;for(let e=l;e<t.length;e+=1){const r=t[e];if(r==="("&&(s+=1),r===")"&&(s-=1,s===0))return t.slice(l,e+1)}},de=t=>{const l=t.split(/\r?\n/),s=[],e=[],r=[],a=[];let n=0,i=0,d=null,o=null;const p=new Map,h=new Map,w=new Map,k=new Set(["if","else","switch","case","default","for","while","do","catch","try","return","break","continue","throw","alert","console"]),y=m=>m?k.has(m.toLowerCase()):!1,C=(m,I)=>{s.push(m),typeof I=="number"&&e.push({node:m,depth:I})},$=()=>e[e.length-1]?.node,L=()=>r[r.length-1]?.node,E=()=>a[a.length-1]?.node,B=(m,I)=>{const b=p.get(m.id)??0;b>=zt||(p.set(m.id,b+1),m.children.push(I))},R=(m,I)=>{if(B(m,I),!/^[A-Za-z_$][\w$]*$/.test(I.label))return;const b=h.get(m.id)??new Map;b.set(I.label,I),h.set(m.id,b);const z=w.get(m.id)??new Map;z.has(I.label)||z.set(I.label,new Set),w.set(m.id,z)};for(let m=0;m<l.length;m+=1){const I=l[m],b=I.trim();if(!b)continue;const z=xe(I),j=z.brace>0?z.brace:0,x=z.brace<0?-z.brace:0,S=z.bracket>0?z.bracket:0,A=z.bracket<0?-z.bracket:0,D=b.startsWith("{"),M=b.startsWith("[");d&&(D||M)&&(D&&r.push({node:d.node,depth:n+j-x}),M&&a.push({node:d.node,depth:i+S-A,index:0}),d=null),o&&D&&(e.push({node:o,depth:n+j-x}),o=null);const q=b.match(/\bclass\s+([A-Za-z_]\w*)/);if(q){const _=q[1],u=n+Math.max(j-x,0),f={id:`class-${m}-${_}`,label:_,kind:"class",line:m,children:[]};for(j>x?C(f,u):(s.push(f),o=f),n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();d=null;continue}const U=b.match(/^(?:export\s+)?(?:const|let)\s+([A-Za-z_]\w*)\s*=\s*(async\s*)?\(([^)]*)\)\s*(?::\s*[^=]+)?\s*=>/),H=b.match(/^(?:export\s+)?(?:const|let)\s+([A-Za-z_]\w*)\s*=\s*(async\s*)?([A-Za-z_$][\w$]*)\s*=>/);if(U||H){const _=(U??H)[1],f=`(${U?U[3]??"":H[3]??""})`,g=/^[A-Z]/.test(_),P=n+Math.max(j-x,0),N={id:`arrow-fn-${m}-${_}`,label:_,kind:g?"component":"function",line:m,children:[],annotation:f};for(j>x?C(N,P):(s.push(N),(/=>\s*$/.test(b)||b.includes("=>"))&&(o=N)),n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}const T=b.match(/\binterface\s+([A-Za-z_]\w*)/);if(T){const _=T[1],u=n+Math.max(j-x,0),f={id:`interface-${m}-${_}`,label:_,kind:"interface",line:m,children:[]};for(j>x?C(f,u):(s.push(f),o=f),n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}const X=b.match(/^(?:export\s+)?type\s+([A-Za-z_]\w*)\s*=\s*\{/);if(X){const _=X[1],u=L()??E()??$(),f={id:`type-${m}-${_}`,label:_,kind:"variable",line:m,children:[]};for(u?u.children.push(f):s.push(f),j>x&&r.push({node:f,depth:n+j-x}),n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}const V=b.match(/^(?:export\s+)?type\s+([A-Za-z_]\w*)\b/);if(V&&/=/.test(b)&&!/=\s*\{/.test(b)){const _=V[1],u=L()??E()??$(),f={id:`type-${m}-${_}`,label:_,kind:"variable",line:m,children:[]};for(u?u.children.push(f):s.push(f),n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}const se=b.match(/^(?:export\s+)?(const|let|var)\s+(.+)/);if(se){const _=se[1],u=se[2],f=_==="const"?"constant":"variable",g=L()??E()??$(),P=u.split("=")[0]?.trim()??"",N=u.includes("=")?u.split("=").slice(1).join("=").trim():"";if(P.startsWith("{")||P.startsWith("[")){const re=Ct(P),G=re.join("_")||"empty",ne={id:`destructure-${m}-${_}-${G}`,label:P.startsWith("{")?"{...}":"[...]",kind:f,line:m,children:re.map((Q,Ae)=>({id:`destructure-${m}-${_}-${G}-${Ae}`,label:Q,kind:"variable",line:m,children:[]}))};g&&(g.kind==="function"||g.kind==="method")?B(g,ne):g?g.children.push(ne):s.push(ne)}else{const G=P.match(/^([A-Za-z_$][\w$]*)/)?.[1];if(G){const ne=pe(N,0,m),Q={id:`variable-${m}-${G}`,label:G,kind:f,line:m,children:ne};g&&(g.kind==="function"||g.kind==="method")?R(g,Q):g?g.children.push(Q):s.push(Q),N.trim().startsWith("{")&&j>x?r.push({node:Q,depth:n+j-x}):N.trim().startsWith("[")&&S>A?a.push({node:Q,depth:i+S-A,index:0}):N===""&&/=\s*$/.test(b)&&(d={node:Q})}}for(n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();o=null;continue}const O=b.match(/^([A-Za-z_]\w*)\s*:\s*\{/);if(O){const _=O[1],u=L()??E()??$(),f={id:`property-${m}-${_}`,label:_,kind:"property",line:m,children:[]};for(u?u.children.push(f):s.push(f),j>x&&r.push({node:f,depth:n+j-x}),n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}const W=b.match(/^(public|private|protected|async|\s)*([A-Za-z_]\w*)\s*\([^)]*\)\s*{?/);if(W){const _=W[2];if(!y(_)){const u=ke(b),f={id:`method-${m}-${_}`,label:_,kind:b.includes("function")?"function":"method",line:m,children:[],annotation:u},g=L()??E()??$();g?g.children.push(f):s.push(f),j>x?e.push({node:f,depth:n+j-x}):b.includes("{")||(o=f)}for(n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}const Y=b.match(/\bfunction\s+([A-Za-z_]\w*)/);if(Y){const _=Y[1];if(!y(_)){const u=n+Math.max(j-x,0),f={id:`function-${m}-${_}`,label:_,kind:"function",line:m,children:[],annotation:ke(b)};j>x?C(f,u):(s.push(f),b.includes("{")||(o=f))}for(n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop();d=null;continue}for(n+=j-x;e.length&&n<e[e.length-1].depth;)e.pop();for(;r.length&&n<r[r.length-1].depth;)r.pop();for(i+=S-A;a.length&&i<a[a.length-1].depth;)a.pop()}return(()=>{const m=new Map,I=x=>{x.forEach(S=>{(S.kind==="function"||S.kind==="method"||S.kind==="component")&&m.set(`${S.kind}|${S.label}|${S.line}`,S),S.children.length&&I(S.children)})};I(s);const b=[];let z=0;const j=(x,S)=>{const A=`function|${x}|${S}`,D=m.get(A);if(D)return D;const M={id:`function-fallback-${S}-${x}`,label:x,kind:"function",line:S,children:[]};return s.push(M),m.set(A,M),M};l.forEach((x,S)=>{const A=x.trim(),D=xe(x),M=D.brace>0?D.brace:0,q=D.brace<0?-D.brace:0;if(!A){for(z+=M-q;b.length&&z<b[b.length-1].depth;)b.pop();return}const U=A.match(/^(?:export\s+)?(?:const|let)\s+([A-Za-z_]\w*)\s*=\s*(?:async\s*)?(?:\([^)]*\)|[A-Za-z_$][\w$]*)\s*=>/);if(U){const T=j(U[1],S);M>q&&b.push({node:T,depth:z+M-q,vars:new Map})}else{const T=A.match(/\bfunction\s+([A-Za-z_]\w*)/);if(T){const X=j(T[1],S);M>q&&b.push({node:X,depth:z+M-q,vars:new Map})}}const H=A.match(/^(?:export\s+)?(const|let|var)\s+(.+)/);if(H&&b.length){const T=H[1],V=H[2].split("=")[0]?.trim()??"";if(!V.startsWith("{")&&!V.startsWith("[")){const O=V.match(/^([A-Za-z_$][\w$]*)/)?.[1];if(O){const W=b[b.length-1],Y=W.node,_=Y.children.find(u=>u.label===O&&(u.kind==="variable"||u.kind==="constant"));if(_)W.vars.set(O,_);else{const u={id:`local-${S}-${O}`,label:O,kind:T==="const"?"constant":"variable",line:S,children:[]};Y.children.push(u),W.vars.set(O,u)}}}}for(z+=M-q;b.length&&z<b[b.length-1].depth;)b.pop()})})(),s},It=t=>{const l=[],s=[];let e=0;const r=[];let a=null,n=!1;const i=(d,o=!1)=>{const p=s[s.length-1]?.node;p?p.children.push(d):l.push(d),o&&s.push({node:d,depth:e})};return t.split(/\r?\n/).forEach((d,o)=>{const p=d.trim(),h=K(d,"{"),w=K(d,"}");if(!p){for(e+=h-w;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(n){for(p.includes("*/")&&(n=!1),e+=h-w;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(p.startsWith("/*")){for(p.includes("*/")||(n=!0),e+=h-w;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(p.startsWith("*/")){for(e+=h-w;s.length&&e<=s[s.length-1].depth;)s.pop();return}if(p.startsWith("@")&&h){const k=p.split("{")[0]?.trim()??p;i({id:`module-${o}-${k}`,label:k,kind:"module",line:o,children:[]},!0),r.length=0,a=null}else{const k=p.split("{")[0]?.trim();if(h){const y=[...r,k].join(" ");r.length=0;const C=y.split(",").map(L=>L.trim()).filter(Boolean),$=s[s.length-1]?.node;C.forEach(L=>{const E={id:`selector-${o}-${L}`,label:L,kind:"cssSelector",line:o,children:[]};$?$.children.push(E):l.push(E)}),a=e+h-w}else if(a===null){const y=p.startsWith("}"),C=p.endsWith(";");y?r.length=0:C||r.push(k)}}for(e+=h-w,a!==null&&e<a&&(a=null);s.length&&e<=s[s.length-1].depth;)s.pop()}),l},Pt=t=>{const l=[],s=[],e=/<\/?([a-zA-Z0-9:-]+)([^>]*)>/g;return t.split(/\r?\n/).forEach((r,a)=>{let n;for(;(n=e.exec(r))!==null;){const i=n[0],d=n[1];if(d.startsWith("!"))continue;const o=i.startsWith("</"),p=i.endsWith("/>")||i.includes("/>");if(o){for(;s.length&&s.pop()?.tag!==d;);continue}const h={id:`tag-${a}-${d}-${n.index}`,label:d,kind:"htmlTag",line:a,children:[]},w=s[s.length-1]?.node;w?w.children.push(h):l.push(h),p||s.push({tag:d,node:h})}}),l},Lt=t=>{try{const l=JSON.parse(t),s=(e,r)=>Array.isArray(e)?e.map((a,n)=>({id:`${r.join(".")}-index-${n}`,label:`[${n}]`,kind:"property",line:n,children:s(a,[...r,`[${n}]`])})):e&&typeof e=="object"?Object.entries(e).map(([a,n],i)=>({id:`${r.join(".")}-${a}-${i}`,label:a,kind:"property",line:i,children:s(n,[...r,a])})):[];return s(l,[])}catch{return[]}},Mt=t=>{const l=t.split(/\r?\n/),s=[],e=[];return l.forEach((r,a)=>{if(!r.trim()||r.trim().startsWith("#"))return;const n=r.match(/^\s*/)?.[0].length??0,i=r.match(/([A-Za-z0-9_.-]+)\s*:/);if(!i)return;const d={id:`yaml-${a}-${i[1]}`,label:i[1],kind:"property",line:a,children:[]};for(;e.length&&n<=e[e.length-1].indent;)e.pop();const o=e[e.length-1]?.node;o?o.children.push(d):s.push(d),e.push({indent:n,node:d})}),s},_e=`
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
      `},fallbackParser:t=>Mt(t)},ruby:{id:"ruby",label:"Ruby",description:"class, module, def 선언을 추출합니다.",fallbackParser:t=>St(t)},scala:{id:"scala",label:"Scala",description:"class, object, def 선언을 추출합니다.",fallbackParser:t=>kt(t)},sql:{id:"sql",label:"SQL",description:"CREATE 구문을 간단히 추출합니다.",fallbackParser:t=>jt(t)}},Zt=t=>$e[t],Et=()=>Object.values($e).filter(t=>!!t.treeSitter).map(({id:t,label:l,description:s})=>({id:t,label:l,description:s}));let ue=null;const fe=async()=>(ue||(ue=pt(()=>import("./tree-sitter-aGyQ8e2w.js").then(t=>t.t),[])),ue),ve=t=>{if(!t)return;const l=t.env??(t.env={});typeof l.tree_sitter_progress_callback!="function"&&(l.tree_sitter_progress_callback=()=>0),typeof l.tree_sitter_query_progress_callback!="function"&&(l.tree_sitter_query_progress_callback=()=>0)},Rt=()=>{const t=globalThis;if(t.__treeSitterPatched)return;t.__treeSitterPatched=!0;const l=WebAssembly.instantiate,s=(async(e,r)=>(ve(r),l(e,r)));if(WebAssembly.instantiate=s,WebAssembly.instantiateStreaming){const e=WebAssembly.instantiateStreaming,r=((a,n)=>(ve(n),e(a,n)));WebAssembly.instantiateStreaming=r}};Rt();const Dt=ht,Ot={class:"class",interface:"interface",enum:"enum",method:"method",function:"function",variable:"variable",field:"field",property:"property",struct:"struct",module:"module",tag:"htmlTag",selector:"cssSelector",namespace:"namespace"},Tt=(t,l)=>{if(l!=="function"&&l!=="method"&&l!=="component")return;const s=t.childForFieldName("parameters")??t.childForFieldName("parameter")??t.namedChildren.find(e=>e?.type?.includes("parameter")??!1);return s&&s.text||"()"};let ie=null,ce=null;const he=new Map,Wt=async()=>{if(!ie)return ce||(ce=(async()=>{try{const{Parser:t}=await fe();await t.init({locateFile:()=>Dt}),ie=new t}catch(t){throw ce=null,t}})()),ce},Nt=async t=>{if(he.has(t.id))return he.get(t.id);if(!ie)throw new Error("Tree-sitter parser가 초기화되지 않았습니다.");if(!t.treeSitter)throw new Error("Tree-sitter 설정이 없는 언어입니다.");const{Language:l}=await fe(),s=await l.load(t.treeSitter.wasmURL);return he.set(t.id,s),s},qt=t=>{if(!t.length)return{nodes:[],diagnostics:["Tree-sitter 질의에서 심볼을 찾지 못했습니다."]};const l=new Map,s=[],e=[],r=(n,i)=>n==="class"&&i.text.includes("@Component")?"component":n==="variable"?/\b=\s*(async\s*)?\([^)]*\)\s*(?::\s*[^=]+)?\s*=>/.test(i.text)||/\b=\s*(async\s*)?[A-Za-z_$][\w$]*\s*=>/.test(i.text)||/\b=\s*(async\s*)?function\b/.test(i.text)?"function":/\bconst\b/.test(i.text)?"constant":"variable":n,a=(n,i,d)=>({id:`${n}-${i.id}`,label:d??i.childForFieldName("name")?.text??"(anonymous)",kind:r(n,i),line:i.startPosition.row,children:[],annotation:Tt(i,n)});return t.forEach(n=>{let i=null,d=null,o=null;for(const h of n.captures){const[w,k]=h.name.split(".");k&&(k==="decl"?(i=h.node,o=Ot[w]??null):k==="name"&&(d=h.node.text))}if(!i||!o)return;const p=a(o,i,d??null);l.set(i.id,p),e.push({node:i,kind:p.kind,outline:p})}),e.forEach(({node:n,kind:i,outline:d})=>{const o=Ut(n,l),p=o&&(o.kind==="function"||o.kind==="method")&&(i==="property"||i==="cssSelector"||i==="htmlTag");!o&&i==="property"&&n.type==="property_signature"||(o&&!p?o.children.push(d):(!o||!p)&&s.push(d))}),{nodes:s,diagnostics:[]}},Ut=(t,l)=>{let s=t.parent;for(;s;){const e=l.get(s.id);if(e)return e;s=s.parent}return null},Bt=(t,l)=>{const s=h=>`${h.label}|${h.line}`,e={component:5,function:4,method:4,class:3,interface:3,struct:3,enum:3,module:2,namespace:2,field:1,property:1,constant:1,variable:1,htmlTag:1,cssSelector:1,file:0,unknown:0},r=(h,w)=>{e[w.kind]>e[h.kind]&&(h.kind=w.kind)},a=new Set(["component","function","method","class","interface","struct","enum","module","namespace","variable","constant"]),n=h=>{const w=new Map,k=new Map;return h.forEach(y=>{w.set(s(y),y);const C=k.get(y.label)??[];C.push(y),k.set(y.label,C)}),{byKey:w,byLabel:k}},i=(h,w,k=1)=>{let y=null,C=Number.POSITIVE_INFINITY;return h.forEach($=>{const L=Math.abs($.line-w);L<=k&&L<C&&(y=$,C=L)}),y},d=(h,w)=>{const k=h.byKey.get(s(w));if(k)return k;if(!a.has(w.kind))return null;const y=h.byLabel.get(w.label);return y?.length?i(y,w.line):null},o=(h,w)=>{const k=n(h);w.forEach(y=>{const C=d(k,y);if(C)r(C,y),p(C,y);else{h.push(y),k.byKey.set(s(y),y);const $=k.byLabel.get(y.label)??[];$.push(y),k.byLabel.set(y.label,$)}})},p=(h,w)=>{o(h.children,w.children)};return o(t,l),t},Ft=async(t,l)=>{const s=Zt(l);if(!s)throw new Error(`지원하지 않는 언어: ${l}`);if(!t.trim())return{nodes:[],diagnostics:["코드를 입력하거나 파일을 업로드하세요."],engine:"fallback"};if(!s.treeSitter)return{nodes:s.fallbackParser(t),diagnostics:["Tree-sitter 지원이 없어 간단한 파서로 분석했습니다."],engine:"fallback"};try{if(await Wt(),!ie)throw new Error("Tree-sitter parser 생성 실패");const e=await Nt(s);ie.setLanguage(e);const r=ie.parse(t);if(!r)throw new Error("파서가 구문 트리를 생성하지 못했습니다.");const{Query:a}=await fe(),i=new a(e,s.treeSitter.query).matches(r.rootNode),{nodes:d,diagnostics:o}=qt(i),h=l==="javascript"||l==="typescript"||l==="tsx"?Bt(d,s.fallbackParser(t)):d;return h.length?{nodes:h,diagnostics:o,engine:"tree-sitter"}:{nodes:s.fallbackParser(t),diagnostics:o.length?o:["Tree-sitter에서 결과를 찾지 못해 간단한 분석으로 대체했습니다."],engine:"fallback"}}catch(e){return{nodes:s.fallbackParser(t),diagnostics:["Tree-sitter 실행에 실패하여 간단한 파서 결과만 표시합니다.",e?.message??String(e)],engine:"fallback"}}},Kt=Et(),Ht={css:`.hero-banner {
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
`},Vt=()=>{const[t,l]=v.useState("java"),[s,e]=v.useState(""),[r,a]=v.useState([]),[n,i]=v.useState(null),[d,o]=v.useState([]),[p,h]=v.useState(!1),[w,k]=v.useState(null),y=v.useRef(null),C=v.useMemo(()=>r.length,[r]),$=v.useCallback(async R=>{const F=(R??s).trim();if(!F){a([]),o(["코드를 입력하거나 파일을 업로드해 주세요."]),i(null);return}h(!0),k(null);try{const m=await Ft(F,t);a(m.nodes),o(m.diagnostics),i(m.engine)}catch(m){k(m?.message??String(m)),a([]),i(null),h(!1);return}h(!1)},[t,s]),L=v.useCallback(async R=>{if(!R)return;const F=await R.text();e(F),$(F),y.current&&(y.current.value="")},[$]),E=v.useCallback(()=>{const R=Ht[t];e(R),a([]),o([]),i(null),k(null),$(R)},[$,t]),B=v.useCallback(R=>{l(R),e(""),a([]),o([]),i(null),k(null),y.current&&(y.current.value="")},[]);return{languageId:t,changeLanguage:B,source:s,setSource:e,outline:r,outlineCount:C,engine:n,diagnostics:d,loading:p,error:w,handleAnalyze:$,handleFileSelect:L,handleSampleLoad:E,fileInputRef:y,languageOptions:Kt}},Jt={file:c.jsx(dt,{fontSize:"inherit"}),class:c.jsx(ot,{fontSize:"inherit"}),interface:c.jsx(ct,{fontSize:"inherit"}),enum:c.jsx(lt,{fontSize:"inherit"}),method:c.jsx(at,{fontSize:"inherit"}),function:c.jsx(rt,{fontSize:"inherit"}),variable:c.jsx(it,{fontSize:"inherit"}),constant:c.jsx(st,{fontSize:"inherit"}),field:c.jsx(we,{fontSize:"inherit"}),property:c.jsx(we,{fontSize:"inherit"}),component:c.jsx(nt,{fontSize:"inherit"}),struct:c.jsx(tt,{fontSize:"inherit"}),module:c.jsx(et,{fontSize:"inherit"}),namespace:c.jsx(Qe,{fontSize:"inherit"}),htmlTag:c.jsx(Ge,{fontSize:"inherit"}),cssSelector:c.jsx(Ye,{fontSize:"inherit"})},Se=[{kind:"class",label:"클래스"},{kind:"function",label:"함수"},{kind:"interface",label:"인터페이스"},{kind:"struct",label:"구조체/레코드"},{kind:"enum",label:"열거형"},{kind:"method",label:"메서드"},{kind:"variable",label:"변수"},{kind:"constant",label:"상수"},{kind:"field",label:"필드"},{kind:"property",label:"프로퍼티"},{kind:"component",label:"UI 컴포넌트"},{kind:"module",label:"모듈/패키지"},{kind:"namespace",label:"네임스페이스"},{kind:"htmlTag",label:"HTML 태그"},{kind:"cssSelector",label:"CSS 선택자"},{kind:"unknown",label:"기타"}],je=t=>Jt[t]??c.jsx(Xe,{fontSize:"inherit"}),Xt={javascript:".js",typescript:".ts",tsx:".tsx",java:".java",kotlin:".kt",python:".py",go:".go",rust:".rs",c:".c",cpp:".cpp,.cc,.cxx,.hpp,.hh,.hxx",csharp:".cs",php:".php",ruby:".rb",scala:".scala",sql:".sql",html:".html,.htm",css:".css",json:".json",yaml:".yml,.yaml",txt:".txt"},ze=(t,l)=>{t.forEach(s=>{l.add(s.id),s.children.length&&ze(s.children,l)})},Yt=(t,l)=>{const s=[],e=(r,a)=>{r.forEach(n=>{s.push({node:n,depth:a}),n.children.length&&l.has(n.id)&&e(n.children,a+1)})};return e(t,0),s},sn=()=>{const{languageId:t,changeLanguage:l,source:s,setSource:e,outline:r,outlineCount:a,diagnostics:n,engine:i,loading:d,error:o,handleAnalyze:p,handleFileSelect:h,handleSampleLoad:w,fileInputRef:k,languageOptions:y}=Vt(),C=Ie(),$=Pe(C.breakpoints.up("md")),L=v.useMemo(()=>a?`${a}개의 최상위 심볼`:"결과 없음",[a]),E=v.useRef(null),B=v.useRef(!1),[R,F]=v.useState(.55),m=R,I=1-R,[b,z]=v.useState(null),j=Xt[t]??".js,.ts,.tsx,.java,.kt,.py,.go,.rs,.c,.cpp,.cc,.cxx,.hpp,.hh,.hxx,.cs,.php,.rb,.scala,.sql,.html,.htm,.css,.json,.yml,.yaml,.txt",[x,S]=v.useState(new Set),[A,D]=v.useState(null),M=v.useRef(null),q=v.useRef(null),[U,H]=v.useState({width:0,height:0}),T=v.useMemo(()=>Yt(r,x),[r,x]),X=v.useCallback(u=>{S(f=>{const g=new Set(f);return g.has(u)?g.delete(u):g.add(u),g})},[]),V=v.useCallback(u=>{D(u.id);const f=u.line+1,g=M.current;g&&(g.revealLineInCenter(f),g.setSelection({startLineNumber:f,startColumn:1,endLineNumber:f,endColumn:1}),g.focus())},[]),se=v.useCallback(({index:u,style:f})=>{const{node:g,depth:P}=T[u],N=g.children.length>0,re=x.has(g.id),G=g.id===A;return c.jsxs(Z,{style:f,sx:{display:"flex",alignItems:"center",pl:1+P*1.5,pr:1,gap:1,cursor:"pointer",bgcolor:G?"action.selected":void 0},onClick:()=>V(g),children:[N?c.jsx(ae,{size:"small",onClick:ne=>{ne.stopPropagation(),X(g.id)},children:re?c.jsx(Le,{fontSize:"small"}):c.jsx(Me,{fontSize:"small"})}):c.jsx(Z,{sx:{width:32}}),c.jsx(Z,{sx:{display:"flex",color:"text.secondary"},children:je(g.kind)}),c.jsx(J,{variant:"body2",fontWeight:600,noWrap:!0,component:"span",children:g.label}),g.annotation&&c.jsx(J,{component:"span",variant:"caption",color:"text.secondary",noWrap:!0,sx:{ml:.5},children:g.annotation}),c.jsxs(J,{variant:"caption",color:"text.secondary",children:["L",g.line+1]})]})},[x,V,X,A,T]),O=v.useCallback(u=>Math.min(Math.max(u,.2),.8),[]),W=v.useCallback(u=>{if(!E.current)return;const f=E.current.getBoundingClientRect();if(f.width<=0)return;const g=(u-f.left)/f.width;F(O(g))},[O]),Y=v.useCallback(()=>{B.current=!1,document.body.style.cursor="",document.body.style.userSelect=""},[]),_=v.useCallback(u=>{if($)if(B.current=!0,document.body.style.cursor="col-resize",document.body.style.userSelect="none","touches"in u){const f=u.touches[0];f&&W(f.clientX)}else W(u.clientX)},[$,W]);return v.useEffect(()=>{const u=P=>{B.current&&(P.preventDefault(),W(P.clientX))},f=P=>{if(!B.current)return;const N=P.touches[0];N&&(P.preventDefault(),W(N.clientX))},g=()=>Y();return window.addEventListener("mousemove",u),window.addEventListener("mouseup",g),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",g),window.addEventListener("touchcancel",g),()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",g),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",g),window.removeEventListener("touchcancel",g)}},[Y,W]),v.useEffect(()=>{$?F(u=>O(u||.55)):(B.current=!1,document.body.style.cursor="",document.body.style.userSelect="",F(1))},[O,$]),v.useEffect(()=>{const u=new Set;ze(r,u),S(u),D(null)},[r]),v.useLayoutEffect(()=>{const u=q.current;if(!u)return;const f=new ResizeObserver(g=>{const P=g[0];P&&H({width:P.contentRect.width,height:P.contentRect.height})});return f.observe(u),()=>f.disconnect()},[]),c.jsxs(Ze,{sx:{p:1.25,display:"flex",flexDirection:"column",gap:1.25,flex:1,minHeight:785,height:"100%",width:1,maxWidth:"100%",overflowX:"hidden"},children:[c.jsxs(ee,{direction:"row",spacing:1.25,alignItems:"center",children:[c.jsxs(Ee,{size:"small",sx:{minWidth:220},children:[c.jsx(Re,{id:"code-outline-language",children:"언어"}),c.jsx(De,{labelId:"code-outline-language",value:t,label:"언어",onChange:u=>l(u.target.value),children:y.map(u=>c.jsx(Oe,{value:u.id,children:u.label},u.id))})]}),c.jsxs(le,{variant:"outlined",startIcon:c.jsx(Te,{}),component:"label",sx:{minWidth:200},children:["파일 업로드",c.jsx("input",{hidden:!0,type:"file",accept:j,ref:k,onChange:u=>{const f=u.target.files?.[0]??null;h(f)}})]}),c.jsx(le,{variant:"outlined",color:"secondary",startIcon:c.jsx(We,{}),onClick:w,sx:{minWidth:200},children:"샘플 코드 불러오기"}),c.jsx(Z,{sx:{flex:1}}),c.jsx(ee,{direction:"row",spacing:1,alignItems:"center",children:c.jsx(le,{variant:"contained",startIcon:d?c.jsx(Ne,{color:"inherit",size:16}):c.jsx(qe,{}),onClick:()=>p(),disabled:d,children:"Outline 생성"})})]}),c.jsxs(Z,{ref:E,sx:{flex:1,minHeight:0,width:1,display:"grid",flexDirection:"row",gridTemplateColumns:`minmax(0, ${m}fr) 6px minmax(0, ${I}fr)`,gap:1.25,columnGap:1.25,touchAction:"none",contain:"layout paint size",alignItems:"stretch"},children:[c.jsxs(ee,{sx:{border:"1px solid",borderColor:"divider",borderRadius:.75,overflow:"hidden",minHeight:0},children:[c.jsxs(Z,{sx:{px:1.25,py:1.25,borderBottom:"1px solid",borderColor:"divider",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx(J,{variant:"subtitle2",children:"편집기"}),c.jsxs(J,{variant:"caption",color:"text.secondary",children:[s.length.toLocaleString()," chars"]})]}),c.jsx(Z,{sx:{flex:1,minHeight:240},children:c.jsx(ut,{height:"100%",defaultLanguage:"typescript",language:t==="java"?"java":"typescript",theme:"vs-dark",value:s,onChange:u=>e(u??""),onMount:u=>{M.current=u},options:{wordWrap:"on",minimap:{enabled:!1},automaticLayout:!0,fontSize:13}})})]}),c.jsx(Z,{sx:{display:"flex",width:6,justifySelf:"stretch",cursor:$?"col-resize":"default",bgcolor:"divider",borderRadius:.75,alignItems:"center",justifyContent:"center",userSelect:"none"},role:"separator","aria-orientation":"vertical",onMouseDown:_,onTouchStart:_,children:c.jsxs(Z,{sx:{display:"flex",flexDirection:"column",gap:.25},children:[c.jsx(Z,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),c.jsx(Z,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),c.jsx(Z,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}})]})}),c.jsxs(ee,{sx:{border:"1px solid",borderColor:"divider",borderRadius:.75,minHeight:0,overflow:"hidden"},children:[c.jsxs(Z,{sx:{px:1.25,py:1.25,borderBottom:"1px solid",borderColor:"divider",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs(ee,{direction:"row",spacing:1,alignItems:"center",children:[c.jsx(J,{variant:"subtitle2",children:"Outline"}),c.jsx(me,{title:"아이콘 설명",children:c.jsx(ae,{size:"small",onClick:()=>z({title:"Outline 아이콘 안내",items:Se.map(u=>`${u.label} (${u.kind})`)}),children:c.jsx(ge,{fontSize:"small"})})}),i&&c.jsx(be,{size:"small",color:i==="tree-sitter"?"primary":"warning",label:i==="tree-sitter"?"Tree-sitter 성공":"Fallback (간단한 파서)"}),(o||n.length)&&c.jsx(me,{title:o?"에러 상세 보기":i==="fallback"?"Fallback 사용 이유":"분석 정보",children:c.jsx(ae,{size:"small",color:o?"error":i==="fallback"?"warning":"info",onClick:()=>z({title:o?"에러":i==="fallback"?"Fallback 사용 안내":"분석 정보",items:o?[o]:n.length?n:["Tree-sitter 실행에 실패하여 간단한 파서 결과만 표시합니다."]}),children:o?c.jsx(Ue,{fontSize:"small"}):i==="fallback"?c.jsx(Be,{fontSize:"small"}):c.jsx(ge,{fontSize:"small"})})})]}),c.jsx(be,{size:"small",label:L,variant:"outlined"})]}),c.jsx(Z,{sx:{flex:1,px:0,py:.5},ref:q,children:r.length&&U.height>0&&U.width>0?c.jsx(Ce,{height:U.height,width:U.width,itemCount:T.length,itemSize:36,overscanCount:8,children:se}):c.jsx(ee,{alignItems:"center",justifyContent:"center",sx:{height:"100%"},spacing:1,children:c.jsx(J,{variant:"body2",color:"text.secondary",children:"분석된 구조가 없습니다. 샘플을 불러오거나 우측 버튼으로 Outline을 생성하세요."})})})]})]}),c.jsxs(Fe,{open:!!b,onClose:()=>z(null),maxWidth:"sm",fullWidth:!0,children:[c.jsxs(Ke,{children:[b?.title,c.jsx(ae,{onClick:()=>z(null),sx:{position:"absolute",right:8,top:1.25},children:c.jsx(He,{})})]}),c.jsx(Ve,{dividers:!0,children:b?.title==="Outline 아이콘 안내"?c.jsx(Z,{sx:{px:1.25,py:.5,borderColor:"divider",display:"flex",flexWrap:"wrap",gap:1.25},children:Se.map(u=>c.jsxs(ee,{direction:"row",spacing:.5,alignItems:"center",sx:{minWidth:120},children:[c.jsx(Z,{sx:{color:"text.secondary",display:"flex"},children:je(u.kind)}),c.jsx(J,{variant:"caption",color:"text.secondary",children:u.label})]},u.kind))}):c.jsx(ee,{spacing:1,children:b?.items.map((u,f)=>c.jsx(J,{variant:"body2",children:u},f))})}),c.jsx(Je,{children:c.jsx(le,{onClick:()=>z(null),children:"닫기"})})]})]})};export{sn as default};
