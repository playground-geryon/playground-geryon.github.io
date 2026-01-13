const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tree-sitter-DFeB0Vu-.js","assets/monaco-p3yQZa36.js","assets/vendor-DuO8O3Ni.js","assets/excel-CUMakpxJ.js","assets/monaco-DyX1CsEw.css"])))=>i.map(i=>d[i]);
import{r as p,j as t,x as ve}from"./vendor-DuO8O3Ni.js";import{u as je,p as Se,B as _,I as W,f as Ce,H as Ie,T as z,P as ze,S as R,a1 as Le,a2 as Re,a3 as Ae,a4 as Pe,a as U,aM as $e,aN as Ee,C as Me,aO as De,a7 as ie,a8 as re,X as oe,aP as Te,aQ as Ze,k as Oe,l as Ne,aw as We,m as Ue,o as Fe,aR as qe,aS as He,aT as Be,aU as le,aV as Je,aW as Xe,aX as ce,aY as Ye,aZ as Ke,a_ as Ge}from"./mui-BrtMkxyc.js";import{M as Qe}from"./monaco-editor-CUhaLqMq.js";import{_ as Ve}from"./monaco-p3yQZa36.js";import{p as et}from"./tree-sitter-DFeB0Vu-.js";import"./excel-CUMakpxJ.js";let B=null;const Y=async()=>(B||(B=Ve(()=>import("./tree-sitter-DFeB0Vu-.js").then(e=>e.t),__vite__mapDeps([0,1,2,3,4]))),B),de=e=>{if(!e)return;const l=e.env??(e.env={});typeof l.tree_sitter_progress_callback!="function"&&(l.tree_sitter_progress_callback=()=>0),typeof l.tree_sitter_query_progress_callback!="function"&&(l.tree_sitter_query_progress_callback=()=>0)},tt=()=>{const e=globalThis;if(e.__treeSitterPatched)return;e.__treeSitterPatched=!0;const l=WebAssembly.instantiate,n=(async(s,c)=>(de(c),l(s,c)));if(WebAssembly.instantiate=n,WebAssembly.instantiateStreaming){const s=WebAssembly.instantiateStreaming,c=((a,i)=>(de(i),s(a,i)));WebAssembly.instantiateStreaming=c}};tt();const nt=et,ue=`
      (class_declaration
        name: (identifier) @class.name
      ) @class.decl

      (interface_declaration
        name: (type_identifier) @interface.name
      ) @interface.decl

      (method_definition
        name: (property_identifier) @method.name
      ) @method.decl

      (lexical_declaration
        (variable_declarator
          name: (identifier) @property.name
        )
      ) @property.decl
    `,fe={css:{id:"css",label:"CSS",description:"선택자와 규칙 블록을 구조화합니다.",wasmURL:"/wasm/tree-sitter-css.wasm",query:`
      (rule_set
        (selectors
          (selector) @selector.name
        )
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
    `,fallbackParser:e=>ft(e)},c:{id:"c",label:"C",description:"함수, 구조체 선언을 추출합니다.",wasmURL:"/wasm/tree-sitter-c.wasm",query:`
      (function_definition
        declarator: (function_declarator
          declarator: (identifier) @function.name
        )
      ) @function.decl
      (struct_specifier
        name: (type_identifier) @struct.name
      ) @struct.decl
    `,fallbackParser:e=>dt(e)},cpp:{id:"cpp",label:"C++",description:"클래스·네임스페이스·함수/메서드를 탐색합니다.",wasmURL:"/wasm/tree-sitter-cpp.wasm",query:`
      (class_specifier
        name: (type_identifier) @class.name
      ) @class.decl
      (namespace_definition
        name: (identifier) @namespace.name
      ) @namespace.decl
      (function_definition
        declarator: (function_declarator
          declarator: (identifier) @function.name
        )
      ) @function.decl
    `,fallbackParser:e=>ut(e)},go:{id:"go",label:"Go",description:"package, type, func 선언을 추출합니다.",wasmURL:"/wasm/tree-sitter-go.wasm",query:`
      (package_clause
        (identifier) @module.name
      ) @module.decl
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
    `,fallbackParser:e=>ht(e)},html:{id:"html",label:"HTML",description:"주요 태그 구조를 추출합니다.",wasmURL:"/wasm/tree-sitter-html.wasm",query:`
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
    `,fallbackParser:e=>gt(e)},java:{id:"java",label:"Java",description:"클래스/인터페이스/메서드 시그니처를 탐색합니다.",wasmURL:"/wasm/tree-sitter-java.wasm",query:`
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
          name: (identifier) @property.name
        )
      ) @property.decl
    `,fallbackParser:e=>ct(e)},javascript:{id:"javascript",label:"JavaScript",description:"클래스/함수/변수 선언을 추출합니다.",wasmURL:"/wasm/tree-sitter-javascript.wasm",query:`
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
          name: (identifier) @property.name
        )
      ) @property.decl
    `,fallbackParser:e=>X(e)},json:{id:"json",label:"JSON",description:"오브젝트 키와 배열 인덱스를 계층적으로 보여줍니다.",wasmURL:"/wasm/tree-sitter-json.wasm",query:`
      (pair
        key: (string) @property.name
      ) @property.decl
    `,fallbackParser:e=>bt(e)},python:{id:"python",label:"Python",description:"class, def, async def 구조를 추출합니다.",wasmURL:"/wasm/tree-sitter-python.wasm",query:`
      (class_definition
        name: (identifier) @class.name
      ) @class.decl
      (function_definition
        name: (identifier) @function.name
      ) @function.decl
    `,fallbackParser:e=>mt(e)},rust:{id:"rust",label:"Rust",description:"mod, struct, fn 선언을 추출합니다.",wasmURL:"/wasm/tree-sitter-rust.wasm",query:`
      (mod_item
        name: (identifier) @module.name
      ) @module.decl
      (struct_item
        name: (type_identifier) @struct.name
      ) @struct.decl
      (function_item
        name: (identifier) @function.name
      ) @function.decl
    `,fallbackParser:e=>pt(e)},tsx:{id:"tsx",label:"TSX / React",description:"React 컴포넌트, 함수, 클래스 등을 찾습니다.",wasmURL:"/wasm/tree-sitter-tsx.wasm",query:ue,fallbackParser:e=>X(e)},typescript:{id:"typescript",label:"TypeScript / Angular",description:"클래스, Angular 컴포넌트, 함수·프로퍼티를 찾습니다.",wasmURL:"/wasm/tree-sitter-typescript.wasm",query:ue,fallbackParser:e=>X(e)},yaml:{id:"yaml",label:"YAML",description:"키/값 구조를 트리로 보여줍니다.",wasmURL:"/wasm/tree-sitter-yaml.wasm",query:`
      (block_mapping_pair
        key: (flow_node) @property.name
      ) @property.decl
    `,fallbackParser:e=>xt(e)}},st={class:"class",interface:"interface",enum:"enum",method:"method",function:"function",property:"property",struct:"struct",module:"module",tag:"tag",selector:"selector",namespace:"namespace"},at=(e,l)=>{if(l!=="function"&&l!=="method"&&l!=="component")return;const n=e.childForFieldName("parameters")??e.childForFieldName("parameter")??e.namedChildren.find(s=>s?.type?.includes("parameter")??!1);return n&&n.text||"()"},he=e=>{const l=e.indexOf("(");if(l===-1)return;let n=0;for(let s=l;s<e.length;s+=1){const c=e[s];if(c==="("&&(n+=1),c===")"&&(n-=1,n===0))return e.slice(l,s+1)}};let E=null,F=null;const J=new Map,it=async()=>{if(!E)return F||(F=(async()=>{try{const{Parser:e}=await Y();await e.init({locateFile:()=>nt}),E=new e}catch(e){throw F=null,e}})()),F},rt=async e=>{if(J.has(e.id))return J.get(e.id);if(!E)throw new Error("Tree-sitter parser가 초기화되지 않았습니다.");const{Language:l}=await Y(),n=await l.load(e.wasmURL);return J.set(e.id,n),n},ot=e=>{if(!e.length)return{nodes:[],diagnostics:["Tree-sitter 질의에서 심볼을 찾지 못했습니다."]};const l=new Map,n=[],s=(c,a,i)=>({id:`${c}-${a.id}`,label:i??a.childForFieldName("name")?.text??"(anonymous)",kind:c==="class"&&a.text.includes("@Component")?"component":c,line:a.startPosition.row,children:[],annotation:at(a,c)});return e.forEach(c=>{let a=null,i=null,o=null;for(const y of c.captures){const[v,k]=y.name.split(".");k&&(k==="decl"?(a=y.node,o=st[v]??null):k==="name"&&(i=y.node.text))}if(!a||!o)return;const r=o==="class"&&a.text.includes("@Component")?"component":o,h=s(r,a,i??null);l.set(a.id,h);const u=lt(a,l),m=u&&(u.kind==="function"||u.kind==="method")&&(o==="property"||o==="selector"||o==="tag");u&&!m?u.children.push(h):(!u||!m)&&n.push(h)}),{nodes:n,diagnostics:[]}},lt=(e,l)=>{let n=e.parent;for(;n;){const s=l.get(n.id);if(s)return s;n=n.parent}return null},ct=e=>{const l=e.split(/\r?\n/),n=[],s=[];let c=0;const a=i=>{const o=s[s.length-1]?.node;o?o.children.push(i):n.push(i)};for(let i=0;i<l.length;i+=1){const o=l[i],r=o.trim(),h=r.match(/\b(class|interface|enum)\s+([A-Za-z_]\w*)/);if(h){const u={class:"class",interface:"interface",enum:"enum"},m={id:`${h[1]}-${i}`,label:h[2],kind:u[h[1]]??"class",line:i,children:[]};a(m),s.push({node:m,depth:c+I(o,"{")-I(o,"}")})}else{const u=r.match(/(public|protected|private|static|\s)*[\w<>\[\],\s]+\s+([A-Za-z_]\w*)\s*\([^)]*\)\s*\{?/);if(u){const m={id:`method-${i}-${u[2]}`,label:u[2],kind:"method",line:i,children:[]};a(m)}else{const m=r.match(/(public|protected|private|static|\s)+[\w<>\[\],\s]+\s+([A-Za-z_]\w*)\s*(=|;)/);if(m){const y={id:`property-${i}-${m[2]}`,label:m[2],kind:"property",line:i,children:[]};a(y)}}}for(c+=I(o,"{"),c-=I(o,"}");s.length&&c<s[s.length-1].depth;)s.pop()}return n},X=e=>{const l=e.split(/\r?\n/),n=[],s=[],c=new Set(["if","else","switch","case","default","for","while","do","catch","try","return","break","continue","throw","alert","console"]),a=r=>r?c.has(r.toLowerCase()):!1,i=r=>{n.push(r),s.push(r)},o=()=>s[s.length-1];for(let r=0;r<l.length;r+=1){const u=l[r].trim();if(!u)continue;const m=u.match(/\bclass\s+([A-Za-z_]\w*)/);if(m){const f=m[1],b=/^[A-Z]/.test(f),x={id:`class-${r}-${f}`,label:f,kind:b?"component":"class",line:r,children:[]};i(x);continue}const y=u.match(/^(?:export\s+)?(?:const|let)\s+([A-Za-z_]\w*)\s*=\s*(async\s*)?\(([^)]*)\)\s*=>/);if(y){const f=y[1],b=`(${y[3]??""})`,x=/^[A-Z]/.test(f),S={id:`arrow-fn-${r}-${f}`,label:f,kind:x?"component":"function",line:r,children:[],annotation:b};i(S);continue}const v=u.match(/\binterface\s+([A-Za-z_]\w*)/);if(v){const f=v[1],b={id:`interface-${r}-${f}`,label:f,kind:"interface",line:r,children:[]};i(b);continue}const k=u.match(/^(public|private|protected|async|\s)*([A-Za-z_]\w*)\s*\([^)]*\)\s*{?/);if(k){const f=k[2];if(!a(f)){const b=he(u),x={id:`method-${r}-${f}`,label:f,kind:u.includes("function")?"function":"method",line:r,children:[],annotation:b},S=o();S?S.children.push(x):n.push(x)}continue}const P=u.match(/\bfunction\s+([A-Za-z_]\w*)/);if(P){const f=P[1];if(!a(f)){const b={id:`function-${r}-${f}`,label:f,kind:"function",line:r,children:[],annotation:he(u)};i(b)}continue}const j=u.match(/^\s*(?:const|let)\s*\[\s*([A-Za-z_]\w*)\s*,\s*([A-Za-z_]\w*)\s*]\s*=\s*useState/);if(j){const f=j[1],b=j[2],x=o();x?x.children.push({id:`state-${r}-${f}`,label:f,kind:"property",line:r,children:[],annotation:`[state] ${b} = useState(...)`}):n.push({id:`state-${r}-${f}`,label:f,kind:"property",line:r,children:[],annotation:`[state] ${b} = useState(...)`});continue}const A=u.match(/(public|private|protected|readonly|@Input|@Output|\s)*([A-Za-z_]\w*)\s*[:=]/);if(A&&!a(A[2])){const f=A[2],b=o(),x={id:`property-${r}-${f}`,label:f,kind:"property",line:r,children:[]};b&&b.kind!=="function"&&b.kind!=="method"?b.children.push(x):n.push(x);continue}}return n},dt=e=>q(e,[{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"function"}]),ut=e=>q(e,[{regex:/\bclass\s+([A-Za-z_]\w*)/,kind:"class",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\bnamespace\s+([A-Za-z_]\w*)/,kind:"namespace",pushDepth:!0},{regex:/([A-Za-z_]\w*)\s*::\s*([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"method",labelIndex:2},{regex:/([A-Za-z_]\w*)\s*\([^)]*\)\s*\{/,kind:"function"}]),ht=e=>q(e,[{regex:/\bpackage\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\btype\s+([A-Za-z_]\w*)\s+struct\b/,kind:"struct",pushDepth:!0},{regex:/\bfunc\s+\(([^\)]+)\)\s+([A-Za-z_]\w*)\s*\(/,kind:"method",labelIndex:2},{regex:/\bfunc\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),pt=e=>q(e,[{regex:/\bmod\s+([A-Za-z_]\w*)/,kind:"module",pushDepth:!0},{regex:/\bstruct\s+([A-Za-z_]\w*)/,kind:"struct",pushDepth:!0},{regex:/\benum\s+([A-Za-z_]\w*)/,kind:"enum",pushDepth:!0},{regex:/\bfn\s+([A-Za-z_]\w*)\s*\(/,kind:"function"}]),mt=e=>{const l=e.split(/\r?\n/),n=[],s=[],c=(a,i)=>{for(;s.length&&i<=s[s.length-1].indent;)s.pop();const o=s[s.length-1]?.node;o?o.children.push(a):n.push(a),s.push({indent:i,node:a})};return l.forEach((a,i)=>{const o=a.match(/^\s*/)?.[0].length??0,r=a.trim(),h=r.match(/^class\s+([A-Za-z_]\w*)/);if(h){c({id:`class-${i}-${h[1]}`,label:h[1],kind:"class",line:i,children:[]},o);return}const u=r.match(/^(async\s+)?def\s+([A-Za-z_]\w*)/);u&&c({id:`function-${i}-${u[2]}`,label:u[2],kind:"function",line:i,children:[]},o)}),n},ft=e=>{const l=[],n=[];let s=0;const c=a=>{const i=n[n.length-1]?.node;i?i.children.push(a):l.push(a),n.push({node:a,depth:s})};return e.split(/\r?\n/).forEach((a,i)=>{const o=a.trim(),r=I(a,"{"),h=I(a,"}");if(o.startsWith("@")&&r){const u=o.split("{")[0]?.trim()??o;c({id:`module-${i}-${u}`,label:u,kind:"module",line:i,children:[]})}else if(r){const u=o.split("{")[0]?.trim();u&&c({id:`selector-${i}-${u}`,label:u,kind:"selector",line:i,children:[]})}for(s+=r-h;n.length&&s<=n[n.length-1].depth;)n.pop()}),l},gt=e=>{const l=[],n=[],s=/<\/?([a-zA-Z0-9:-]+)([^>]*)>/g;return e.split(/\r?\n/).forEach((c,a)=>{let i;for(;(i=s.exec(c))!==null;){const o=i[0],r=i[1];if(r.startsWith("!"))continue;const h=o.startsWith("</"),u=o.endsWith("/>")||o.includes("/>");if(h){for(;n.length&&n.pop()?.tag!==r;);continue}const m={id:`tag-${a}-${r}-${i.index}`,label:r,kind:"tag",line:a,children:[]},y=n[n.length-1]?.node;y?y.children.push(m):l.push(m),u||n.push({tag:r,node:m})}}),l},bt=e=>{try{const l=JSON.parse(e),n=(s,c)=>Array.isArray(s)?s.flatMap((a,i)=>n(a,[...c,`[${i}]`])):s&&typeof s=="object"?Object.entries(s).map(([a,i],o)=>({id:`${c.join(".")}-${a}-${o}`,label:a,kind:"property",line:o,children:n(i,[...c,a])})):[];return n(l,[])}catch{return[]}},xt=e=>{const l=e.split(/\r?\n/),n=[],s=[];return l.forEach((c,a)=>{if(!c.trim()||c.trim().startsWith("#"))return;const i=c.match(/^\s*/)?.[0].length??0,o=c.match(/([A-Za-z0-9_.-]+)\s*:/);if(!o)return;const r={id:`yaml-${a}-${o[1]}`,label:o[1],kind:"property",line:a,children:[]};for(;s.length&&i<=s[s.length-1].indent;)s.pop();const h=s[s.length-1]?.node;h?h.children.push(r):n.push(r),s.push({indent:i,node:r})}),n},I=(e,l)=>(e.match(new RegExp(`\\${l}`,"g"))??[]).length,q=(e,l,n)=>{const s=e.split(/\r?\n/),c=[],a=[];let i=0;const o=(r,h,u=!1)=>{const m=a[a.length-1]?.node;if(m?m.children.push(r):c.push(r),u){const y=I(h,"{")-I(h,"}");a.push({node:r,depth:i+y})}};return s.forEach((r,h)=>{const u=r.trim();for(l.forEach(m=>{const y=u.match(m.regex);if(!y)return;const v=y[m.labelIndex??1]??y[0],k=m.refiner?m.refiner(y,r):m.kind;o({id:`${k}-${h}-${v}`,label:v,kind:k,line:h,children:[]},r,m.pushDepth??!1)}),i+=I(r,"{"),i-=I(r,"}");a.length&&i<a[a.length-1].depth;)a.pop()}),c},wt=()=>Object.values(fe).map(({id:e,label:l,description:n})=>({id:e,label:l,description:n})),yt=async(e,l)=>{const n=fe[l];if(!n)throw new Error(`지원하지 않는 언어: ${l}`);if(!e.trim())return{nodes:[],diagnostics:["코드를 입력하거나 파일을 업로드하세요."],engine:"fallback"};try{if(await it(),!E)throw new Error("Tree-sitter parser 생성 실패");const s=await rt(n);E.setLanguage(s);const c=E.parse(e);if(!c)throw new Error("파서가 구문 트리를 생성하지 못했습니다.");const{Query:a}=await Y(),o=new a(s,n.query).matches(c.rootNode),{nodes:r,diagnostics:h}=ot(o);return r.length?{nodes:r,diagnostics:h,engine:"tree-sitter"}:{nodes:n.fallbackParser(e),diagnostics:h.length?h:["Tree-sitter에서 결과를 찾지 못해 간단한 분석으로 대체했습니다."],engine:"fallback"}}catch(s){return{nodes:n.fallbackParser(e),diagnostics:["Tree-sitter 실행에 실패하여 간단한 파서 결과만 표시합니다.",s?.message??String(s)],engine:"fallback"}}},kt=wt(),_t={css:`.hero-banner {
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
  return value.trim()
}
`,json:`{
  "name": "demo",
  "scripts": {
    "dev": "vite"
  }
}
`,python:`class ImageService:
    def __init__(self):
        self.cache = []

    async def refresh(self):
        await self.fetch()

    def fetch(self):
        return []
`,rust:`mod utils {
    pub fn helper() {}
}

pub struct Job {
    pub id: u32,
}

fn run(job: Job) {}
`,tsx:`export function DashboardCard({ title }: { title: string }) {
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

  refresh(): void {
    this.fetchData()
  }

  private fetchData(): void {
    console.log('fetch data')
  }
}

export function helper(value: string): string {
  return value.trim()
}
`,yaml:`version: 1
app:
  name: outline
  features:
    - tree-sitter
    - fallback
`},vt=()=>{const[e,l]=p.useState("java"),[n,s]=p.useState(""),[c,a]=p.useState([]),[i,o]=p.useState(null),[r,h]=p.useState([]),[u,m]=p.useState(!1),[y,v]=p.useState(null),k=p.useRef(null),P=p.useMemo(()=>c.length,[c]),j=p.useCallback(async x=>{const S=(x??n).trim();if(!S){a([]),h(["코드를 입력하거나 파일을 업로드해 주세요."]),o(null);return}m(!0),v(null);try{const L=await yt(S,e);a(L.nodes),h(L.diagnostics),o(L.engine)}catch(L){v(L?.message??String(L)),a([]),o(null),m(!1);return}m(!1)},[e,n]),A=p.useCallback(async x=>{if(!x)return;const S=await x.text();s(S),j(S),k.current&&(k.current.value="")},[j]),f=p.useCallback(()=>{const x=_t[e];s(x),a([]),h([]),o(null),v(null),j(x)},[j,e]),b=p.useCallback(x=>{l(x),s(""),a([]),h([]),o(null),v(null),k.current&&(k.current.value="")},[]);return{languageId:e,changeLanguage:b,source:n,setSource:s,outline:c,outlineCount:P,engine:i,diagnostics:r,loading:u,error:y,handleAnalyze:j,handleFileSelect:A,handleSampleLoad:f,fileInputRef:k,languageOptions:kt}},pe={class:t.jsx(Ge,{fontSize:"inherit"}),interface:t.jsx(Ke,{fontSize:"inherit"}),enum:t.jsx(Ye,{fontSize:"inherit"}),method:t.jsx(ce,{fontSize:"inherit"}),function:t.jsx(ce,{fontSize:"inherit"}),property:t.jsx(Xe,{fontSize:"inherit"}),component:t.jsx(Je,{fontSize:"inherit"}),struct:t.jsx(le,{fontSize:"inherit"}),module:t.jsx(le,{fontSize:"inherit"}),tag:t.jsx(Be,{fontSize:"inherit"}),selector:t.jsx(He,{fontSize:"inherit"}),namespace:t.jsx(qe,{fontSize:"inherit"})},me=[{kind:"class",label:"클래스"},{kind:"component",label:"컴포넌트"},{kind:"interface",label:"인터페이스"},{kind:"method",label:"메서드"},{kind:"function",label:"함수"},{kind:"property",label:"변수"},{kind:"module",label:"모듈/블럭"},{kind:"tag",label:"DOM 태그"},{kind:"selector",label:"CSS 선택자"}],ge=(e,l)=>{e.forEach(n=>{l.add(n.id),n.children.length&&ge(n.children,l)})},jt=(e,l)=>{const n=[],s=(c,a)=>{c.forEach(i=>{n.push({node:i,depth:a}),i.children.length&&l.has(i.id)&&s(i.children,a+1)})};return s(e,0),n},At=()=>{const{languageId:e,changeLanguage:l,source:n,setSource:s,outline:c,outlineCount:a,diagnostics:i,engine:o,loading:r,error:h,handleAnalyze:u,handleFileSelect:m,handleSampleLoad:y,fileInputRef:v,languageOptions:k}=vt(),P=je(),j=Se(P.breakpoints.up("md")),A=p.useMemo(()=>a?`${a}개의 최상위 심볼`:"결과 없음",[a]),f=p.useRef(null),b=p.useRef(!1),[x,S]=p.useState(.55),L=x,be=1-x,[D,M]=p.useState(null),[T,K]=p.useState(new Set),[G,Q]=p.useState(null),V=p.useRef(null),ee=p.useRef(null),[Z,xe]=p.useState({width:0,height:0}),H=p.useMemo(()=>jt(c,T),[c,T]),te=p.useCallback(d=>{K(w=>{const g=new Set(w);return g.has(d)?g.delete(d):g.add(d),g})},[]),ne=p.useCallback(d=>{Q(d.id);const w=d.line+1,g=V.current;g&&(g.revealLineInCenter(w),g.setSelection({startLineNumber:w,startColumn:1,endLineNumber:w,endColumn:1}),g.focus())},[]),we=p.useCallback(({index:d,style:w})=>{const{node:g,depth:C}=H[d],N=g.children.length>0,ye=T.has(g.id),ke=g.id===G;return t.jsxs(_,{style:w,sx:{display:"flex",alignItems:"center",pl:1+C*1.5,pr:1,gap:1,cursor:"pointer",bgcolor:ke?"action.selected":void 0},onClick:()=>ne(g),children:[N?t.jsx(W,{size:"small",onClick:_e=>{_e.stopPropagation(),te(g.id)},children:ye?t.jsx(Ce,{fontSize:"small"}):t.jsx(Ie,{fontSize:"small"})}):t.jsx(_,{sx:{width:32}}),t.jsx(_,{sx:{display:"flex",color:"text.secondary"},children:pe[g.kind]}),t.jsx(z,{variant:"body2",fontWeight:600,noWrap:!0,component:"span",children:g.label}),g.annotation&&t.jsx(z,{component:"span",variant:"caption",color:"text.secondary",noWrap:!0,sx:{ml:.5},children:g.annotation}),t.jsxs(z,{variant:"caption",color:"text.secondary",children:["L",g.line+1]})]})},[T,ne,te,G,H]),O=p.useCallback(d=>Math.min(Math.max(d,.2),.8),[]),$=p.useCallback(d=>{if(!f.current)return;const w=f.current.getBoundingClientRect();if(w.width<=0)return;const g=(d-w.left)/w.width;S(O(g))},[O]),se=p.useCallback(()=>{b.current=!1,document.body.style.cursor="",document.body.style.userSelect=""},[]),ae=p.useCallback(d=>{if(j)if(b.current=!0,document.body.style.cursor="col-resize",document.body.style.userSelect="none","touches"in d){const w=d.touches[0];w&&$(w.clientX)}else $(d.clientX)},[j,$]);return p.useEffect(()=>{const d=C=>{b.current&&(C.preventDefault(),$(C.clientX))},w=C=>{if(!b.current)return;const N=C.touches[0];N&&(C.preventDefault(),$(N.clientX))},g=()=>se();return window.addEventListener("mousemove",d),window.addEventListener("mouseup",g),window.addEventListener("touchmove",w,{passive:!1}),window.addEventListener("touchend",g),window.addEventListener("touchcancel",g),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",g),window.removeEventListener("touchmove",w),window.removeEventListener("touchend",g),window.removeEventListener("touchcancel",g)}},[se,$]),p.useEffect(()=>{j?S(d=>O(d||.55)):(b.current=!1,document.body.style.cursor="",document.body.style.userSelect="",S(1))},[O,j]),p.useEffect(()=>{const d=new Set;ge(c,d),K(d),Q(null)},[c]),p.useLayoutEffect(()=>{const d=ee.current;if(!d)return;const w=new ResizeObserver(g=>{const C=g[0];C&&xe({width:C.contentRect.width,height:C.contentRect.height})});return w.observe(d),()=>w.disconnect()},[]),t.jsxs(ze,{sx:{p:1.25,display:"flex",flexDirection:"column",gap:1.25,flex:1,minHeight:785,height:"100%",width:1,maxWidth:"100%",overflowX:"hidden"},children:[t.jsxs(R,{direction:"row",spacing:1.25,alignItems:"center",children:[t.jsxs(Le,{size:"small",sx:{minWidth:220},children:[t.jsx(Re,{id:"code-outline-language",children:"언어"}),t.jsx(Ae,{labelId:"code-outline-language",value:e,label:"언어",onChange:d=>l(d.target.value),children:k.map(d=>t.jsx(Pe,{value:d.id,children:d.label},d.id))})]}),t.jsxs(U,{variant:"outlined",startIcon:t.jsx($e,{}),component:"label",sx:{minWidth:200},children:["파일 업로드",t.jsx("input",{hidden:!0,type:"file",accept:".java,.ts,.tsx,.js,.txt",ref:v,onChange:d=>{const w=d.target.files?.[0]??null;m(w)}})]}),t.jsx(U,{variant:"outlined",color:"secondary",startIcon:t.jsx(Ee,{}),onClick:y,sx:{minWidth:200},children:"샘플 코드 불러오기"}),t.jsx(_,{sx:{flex:1}}),t.jsx(R,{direction:"row",spacing:1,alignItems:"center",children:t.jsx(U,{variant:"contained",startIcon:r?t.jsx(Me,{color:"inherit",size:16}):t.jsx(De,{}),onClick:()=>u(),disabled:r,children:"Outline 생성"})})]}),t.jsxs(_,{ref:f,sx:{flex:1,minHeight:0,width:1,display:"grid",flexDirection:"row",gridTemplateColumns:`minmax(0, ${L}fr) 6px minmax(0, ${be}fr)`,gap:1.25,columnGap:1.25,touchAction:"none",contain:"layout paint size",alignItems:"stretch"},children:[t.jsxs(R,{sx:{border:"1px solid",borderColor:"divider",borderRadius:.75,overflow:"hidden",minHeight:0},children:[t.jsxs(_,{sx:{px:1.25,py:1.25,borderBottom:"1px solid",borderColor:"divider",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx(z,{variant:"subtitle2",children:"편집기"}),t.jsxs(z,{variant:"caption",color:"text.secondary",children:[n.length.toLocaleString()," chars"]})]}),t.jsx(_,{sx:{flex:1,minHeight:240},children:t.jsx(Qe,{height:"100%",defaultLanguage:"typescript",language:e==="java"?"java":"typescript",theme:"vs-dark",value:n,onChange:d=>s(d??""),onMount:d=>{V.current=d},options:{wordWrap:"on",minimap:{enabled:!1},automaticLayout:!0,fontSize:13}})})]}),t.jsx(_,{sx:{display:"flex",width:6,justifySelf:"stretch",cursor:j?"col-resize":"default",bgcolor:"divider",borderRadius:.75,alignItems:"center",justifyContent:"center",userSelect:"none"},role:"separator","aria-orientation":"vertical",onMouseDown:ae,onTouchStart:ae,children:t.jsxs(_,{sx:{display:"flex",flexDirection:"column",gap:.25},children:[t.jsx(_,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),t.jsx(_,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}}),t.jsx(_,{sx:{width:2,height:2,bgcolor:"text.secondary",borderRadius:"50%"}})]})}),t.jsxs(R,{sx:{border:"1px solid",borderColor:"divider",borderRadius:.75,minHeight:0,overflow:"hidden"},children:[t.jsxs(_,{sx:{px:1.25,py:1.25,borderBottom:"1px solid",borderColor:"divider",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs(R,{direction:"row",spacing:1,alignItems:"center",children:[t.jsx(z,{variant:"subtitle2",children:"Outline"}),t.jsx(ie,{title:"아이콘 설명",children:t.jsx(W,{size:"small",onClick:()=>M({title:"Outline 아이콘 안내",items:me.map(d=>`${d.label} (${d.kind})`)}),children:t.jsx(re,{fontSize:"small"})})}),o&&t.jsx(oe,{size:"small",color:o==="tree-sitter"?"primary":"warning",label:o==="tree-sitter"?"Tree-sitter 성공":"Fallback (간단한 파서)"}),(h||i.length)&&t.jsx(ie,{title:h?"에러 상세 보기":o==="fallback"?"Fallback 사용 이유":"분석 정보",children:t.jsx(W,{size:"small",color:h?"error":o==="fallback"?"warning":"info",onClick:()=>M({title:h?"에러":o==="fallback"?"Fallback 사용 안내":"분석 정보",items:h?[h]:i.length?i:["Tree-sitter 실행에 실패하여 간단한 파서 결과만 표시합니다."]}),children:h?t.jsx(Te,{fontSize:"small"}):o==="fallback"?t.jsx(Ze,{fontSize:"small"}):t.jsx(re,{fontSize:"small"})})})]}),t.jsx(oe,{size:"small",label:A,variant:"outlined"})]}),t.jsx(_,{sx:{flex:1,px:0,py:.5},ref:ee,children:c.length&&Z.height>0&&Z.width>0?t.jsx(ve,{height:Z.height,width:Z.width,itemCount:H.length,itemSize:36,overscanCount:8,children:we}):t.jsx(R,{alignItems:"center",justifyContent:"center",sx:{height:"100%"},spacing:1,children:t.jsx(z,{variant:"body2",color:"text.secondary",children:"분석된 구조가 없습니다. 샘플을 불러오거나 우측 버튼으로 Outline을 생성하세요."})})})]})]}),t.jsxs(Oe,{open:!!D,onClose:()=>M(null),maxWidth:"sm",fullWidth:!0,children:[t.jsxs(Ne,{children:[D?.title,t.jsx(W,{onClick:()=>M(null),sx:{position:"absolute",right:8,top:1.25},children:t.jsx(We,{})})]}),t.jsx(Ue,{dividers:!0,children:D?.title==="Outline 아이콘 안내"?t.jsx(_,{sx:{px:1.25,py:.5,borderColor:"divider",display:"flex",flexWrap:"wrap",gap:1.25},children:me.map(d=>t.jsxs(R,{direction:"row",spacing:.5,alignItems:"center",sx:{minWidth:120},children:[t.jsx(_,{sx:{color:"text.secondary",display:"flex"},children:pe[d.kind]}),t.jsx(z,{variant:"caption",color:"text.secondary",children:d.label})]},d.kind))}):t.jsx(R,{spacing:1,children:D?.items.map((d,w)=>t.jsx(z,{variant:"body2",children:d},w))})}),t.jsx(Fe,{children:t.jsx(U,{onClick:()=>M(null),children:"닫기"})})]})]})};export{At as default};
