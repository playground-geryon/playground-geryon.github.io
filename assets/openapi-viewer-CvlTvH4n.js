import{r as j,j as e}from"./vendor-CRMzTT1s.js";import{P as be,B as p,S as y,a as se,bv as ve,bw as ye,aW as je,Y as S,bx as me,ae as we,ad as $e,a1 as Se,by as ke,T as d,y as Te,z as xe,g as de,bz as ze,a4 as Ee,a5 as Ce,a6 as Pe,a7 as Le,bA as qe,bB as Oe,f as Re,bC as Ae}from"./mui-DQUFsC14.js";import"./excel-CUMakpxJ.js";import"./tree-sitter-aGyQ8e2w.js";const Y="#/components/schemas/",ae=(r,h)=>{if(!h||!h.$ref||typeof h.$ref!="string"||!h.$ref.startsWith(Y))return h;const f=h.$ref.slice(Y.length),m=r?.components?.schemas?.[f];return m?{...m,...h,$ref:void 0}:h},O=(r,h=0)=>{if(!r||h>4)return"...";if(r.$ref&&typeof r.$ref=="string")return`{${r.$ref.split("/").pop()??r.$ref}}`;const f=r?.type;return f==="array"||r?.items?`[${O(r?.items??{},h+1)}]`:f==="object"||r?.properties?`{ ${(r?.properties?Object.entries(r.properties):[]).map(([w,k])=>`${w}: ${O(k,h+1)}`).join(", ")} }`:r?.enum?.length?r.enum.map(m=>String(m)).join(" | "):f??"object"},ee=(r,h,f=0)=>{if(!r||f>3)return;const m=ae(h,r);if(m?.example!==void 0)return m.example;if(m?.default!==void 0)return m.default;const E=m?.type;if(m?.enum?.length)return m.enum[0];if(E==="object"||m?.properties){const w={},k=m.properties??{};return Object.entries(k).forEach(([R,B])=>{w[R]=ee(B,h,f+1)??null}),w}if(E==="array"||m?.items)return[ee(m.items??{},h,f+1)??null];switch(E){case"integer":case"number":return 1;case"boolean":return!0;case"string":default:return"string"}},We=async r=>{const h=await r.text();try{return JSON.parse(h)}catch{throw new Error("JSON 파일을 파싱할 수 없습니다.")}},c=r=>r==null?"":String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),le=r=>{if(r==null)return"";if(typeof r=="string")return r;try{return JSON.stringify(r,null,2)}catch{return String(r)}},Ie=()=>{const[r,h]=j.useState(null),[f,m]=j.useState(null),[E,w]=j.useState(!1),[k,R]=j.useState(null),B=async z=>{w(!0),m(null);try{const $=await We(z);if(!$.openapi&&!$.swagger)throw new Error("openapi 또는 swagger 문서가 아닙니다.");h($),R(z.name)}catch($){m($?.message??"api-docs.json을 읽는 중 오류가 발생했습니다."),h(null),R(null)}finally{w(!1)}},oe=()=>{h(null),m(null),R(null)},A=j.useMemo(()=>({title:r?.info?.title,version:r?.info?.version,description:r?.info?.description}),[r]),Z=j.useMemo(()=>r?.servers??[],[r]),D=j.useMemo(()=>{if(!r?.paths)return[];const z=[];for(const[$,v]of Object.entries(r.paths)){const W=Array.isArray(v?.parameters)?v.parameters:[];for(const[L,C]of Object.entries(v)){const K=L.toUpperCase();if(!["GET","POST","PUT","PATCH","DELETE","HEAD","OPTIONS"].includes(K))continue;const N=Array.isArray(C?.parameters)?C.parameters:[],J={};[...W,...N].forEach(s=>{!s?.name||!s?.in||(J[`${s.in}:${s.name}`]=s)});const G=Object.values(J).map(s=>({name:s.name,in:s.in,required:s.required,description:s.description,schema:ae(r,s.schema),example:s.example??ee(s.schema,r)})),I=C?.requestBody,P=I?.content?Object.entries(I.content).map(([s,n])=>({mediaType:s,schemaName:typeof n?.schema?.$ref=="string"&&n.schema.$ref.startsWith(Y)?n.schema.$ref.slice(Y.length):void 0,example:n?.example??n?.examples?.[Object.keys(n?.examples??{})[0]]?.value??ee(n?.schema,r),exampleText:n?.example!==void 0?typeof n.example=="string"?n.example:JSON.stringify(n.example,null,2):O(n?.schema),schema:ae(r,n?.schema)})):[],U=Object.entries(C?.responses??{}).map(([s,n])=>({status:s,description:n?.description,contents:n?.content?Object.entries(n.content).map(([o,i])=>({mediaType:o,schemaName:typeof i?.schema?.$ref=="string"&&i.schema.$ref.startsWith(Y)?i.schema.$ref.slice(Y.length):void 0,example:i?.example??i?.examples?.[Object.keys(i?.examples??{})[0]]?.value??ee(i?.schema,r),exampleText:i?.example!==void 0?typeof i.example=="string"?i.example:JSON.stringify(i.example,null,2):O(i?.schema),schema:ae(r,i?.schema)})):[]})),te=C?.tags?.[0]||"default";z.push({path:$,method:K,summary:C?.summary,description:C?.description,tags:C?.tags??[],operationId:C?.operationId,primaryTag:te,parameters:G.length?G:void 0,requestBody:P.length?{description:I?.description,contents:P}:void 0,responses:U})}}return z},[r]),M=j.useMemo(()=>{if(r?.tags?.length)return r.tags.map($=>$.name||"").filter(Boolean);const z=new Set;for(const $ of D)$.primaryTag&&z.add($.primaryTag),$.tags?.forEach(v=>z.add(v));return Array.from(z)},[D,r?.tags]),F=j.useMemo(()=>{const z=r?.components?.schemas??{};return Object.entries(z).map(([$,v])=>({name:$,type:v.type,description:v.description,properties:v?.properties?Object.keys(v.properties):void 0,propertiesDetail:v?.properties?Object.entries(v.properties).map(([W,L])=>({name:W,typeText:O(L),description:L?.description,required:Array.isArray(v?.required)?v?.required.includes(W):!1})):void 0,shapeText:O(v),raw:v,example:v?.example,rawText:v?JSON.stringify(v,null,2):void 0,exampleText:v?.example!==void 0?typeof v?.example=="string"?v?.example:JSON.stringify(v?.example,null,2):void 0}))},[r]);return{spec:r,info:A,servers:Z,operations:D,tags:M,schemas:F,loading:E,error:f,fileName:k,handleFile:B,handleReset:oe,buildExportHtml:()=>{if(!r)return"";const z=s=>{if(!s)return"";try{return JSON.stringify(JSON.parse(s),null,2)}catch{const n=s.trim();let o="",i=0;const x=()=>"  ".repeat(Math.max(i,0));for(let b=0;b<n.length;b+=1){const T=n[b];T==="{"||T==="["?(o+=T+`
`,i+=1,o+=x()):T==="}"||T==="]"?(i-=1,o+=`
`+x()+T):T===","?o+=T+`
`+x():o+=T}return o}},$=(()=>{const s=[...M],n=new Map;D.forEach(x=>{const b=x.primaryTag||"default";n.has(b)||n.set(b,[]),n.get(b).push(x)});const o=Array.from(n.keys()).filter(x=>!s.includes(x));return[...s,...o].map(x=>({tag:x,ops:n.get(x)??[]})).filter(x=>x.ops.length>0)})(),W=`${k?.replace(/\.json$/i,"")||A.title||"openapi-doc"} - OpenAPI HTML`,L=s=>s?'<span class="pill-required">required</span>':'<span class="pill-optional">optional</span>',C=s=>{if(!s)return'<p class="muted">좌측 목록에서 경로를 선택하면 상세가 보입니다.</p>';const n=s.parameters??[];let o=`
      <div class="op-detail">
        <div class="op-detail-header">
          <span class="badge-method badge-${s.method.toLowerCase()}">${c(s.method)}</span>
          <span class="op-path">${c(s.path)}</span>
        </div>
    `;if(s.summary&&(o+=`<div class="op-summary">${c(s.summary)}</div>`),s.description&&(o+=`<div class="op-description">${c(s.description)}</div>`),n.length){o+=`
        <div class="op-block">
          <div class="op-block-title">Parameters</div>
          <table>
            <thead>
              <tr>
                <th style="width:18%;">Name</th>
                <th style="width:10%;">In</th>
                <th style="width:12%;">Type</th>
                <th style="width:12%;">Required</th>
                <th>Description</th>
                <th style="width:20%;">Example</th>
              </tr>
            </thead>
            <tbody>
      `;for(const i of n){const x=i.example!==void 0?le(i.example):"<value>";o+=`
          <tr>
            <td><span style="color:var(--primary);font-weight:500;">${c(i.name)}</span></td>
            <td>${c(i.in)}</td>
            <td>${c(i.schema?.type??"")}</td>
            <td>${L(i.required)}</td>
            <td>${i.description?c(i.description):'<span class="muted">-</span>'}</td>
            <td><pre>${c(x)}</pre></td>
          </tr>
        `}o+=`
            </tbody>
          </table>
        </div>
      `}if(s.requestBody&&s.requestBody.contents.length){o+=`
        <div class="op-block">
          <div class="op-block-title">Request Body</div>
      `,s.requestBody.description&&(o+=`<p class="muted" style="white-space:pre-line;">${c(s.requestBody.description)}</p>`);for(const i of s.requestBody.contents){if(o+=`
          <div class="box-dash">
            <div style="margin-bottom:4px;">
              <span class="chip chip-outline">${c(i.mediaType)}</span>
              ${i.schemaName?`<span class="chip chip-outline">${c(i.schemaName)}</span>`:""}
            </div>
        `,i.schema&&(o+=`
            <div style="margin-top:4px;">
              <div class="muted">Schema</div>
              <pre>${c(O(i.schema))}</pre>
            </div>
          `,i.schema?.properties)){const x=Object.entries(i.schema.properties);o+=`
              <table>
                <thead>
                  <tr>
                    <th style="width:20%;">Key</th>
                    <th style="width:20%;">Type</th>
                    <th style="width:12%;">Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
            `;for(const[b,T]of x){const H=Array.isArray(i.schema?.required)&&i.schema.required.includes(b);o+=`
                <tr>
                  <td><span style="color:var(--primary);font-weight:500;">${c(b)}</span></td>
                  <td>${c(O(T))}</td>
                  <td>${L(H)}</td>
                  <td>${T?.description?c(T.description):'<span class="muted">-</span>'}</td>
                </tr>
              `}o+=`
                </tbody>
              </table>
            `}i.example!==void 0&&(o+=`
            <div style="margin-top:4px;">
              <div class="muted">Example</div>
              <pre>${c(le(i.example))}</pre>
            </div>
          `),o+="</div>"}o+="</div>"}if(o+=`
      <div class="op-block">
        <div class="op-block-title">Responses</div>
    `,!s.responses.length)o+='<p class="muted">응답이 정의되지 않았습니다.</p>';else for(const i of s.responses){o+=`
          <div class="box-dash">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:4px;">
              <span class="chip chip-outline">${c(i.status)}</span>
              ${i.description?`<span class="muted">${c(i.description)}</span>`:""}
            </div>
        `;for(const x of i.contents){if(o+=`
            <div style="margin-top:4px;">
              <span class="chip chip-outline">${c(x.mediaType)}</span>
              ${x.schemaName?`<span class="chip chip-outline">${c(x.schemaName)}</span>`:""}
          `,x.schema){if(o+=`
              <div style="margin-top:4px;">
                <div class="muted">Schema</div>
                <pre>${c(O(x.schema))}</pre>
            `,x.schema?.properties){const b=Object.entries(x.schema.properties);o+=`
                <table>
                  <thead>
                    <tr>
                      <th style="width:22%;">Key</th>
                      <th style="width:22%;">Type</th>
                      <th style="width:12%;">Required</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
              `;for(const[T,H]of b){const re=Array.isArray(x.schema?.required)&&x.schema.required.includes(T);o+=`
                  <tr>
                    <td><span style="color:var(--primary);font-weight:500;">${c(T)}</span></td>
                    <td>${c(O(H))}</td>
                    <td>${L(re)}</td>
                    <td>${H?.description?c(H.description):'<span class="muted">-</span>'}</td>
                  </tr>
                `}o+=`
                  </tbody>
                </table>
              `}o+="</div>"}x.example!==void 0&&(o+=`
              <div style="margin-top:4px;">
                <div class="muted">Example</div>
                <pre>${c(le(x.example))}</pre>
              </div>
            `),o+="</div>"}o+="</div>"}return o+="</div>",o+="</div>",o},K=s=>{if(!s)return'<p class="muted">좌측 목록에서 스키마를 선택하면 상세가 보입니다.</p>';let n=`
      <div class="schema-detail">
        <div>
          <span class="schema-name">${c(s.name)}</span>
          ${s.type?`<span class="chip chip-outline" style="margin-left:6px;">${c(s.type)}</span>`:""}
          ${s.properties?.length?`<span class="chip chip-outline" style="margin-left:4px;">${s.properties.length} properties</span>`:""}
        </div>
    `;if(s.description&&(n+=`<div class="schema-desc">${c(s.description)}</div>`),s.shapeText){const o=z(s.shapeText);n+=`
        <div style="margin-top:6px;">
          <div class="muted">Schema</div>
          <pre>${c(o)}</pre>
        </div>
      `}if(s.propertiesDetail&&s.propertiesDetail.length){n+=`
        <div style="margin-top:6px;">
          <div class="op-block-title">Properties</div>
          <table>
            <thead>
              <tr>
                <th style="width:22%;">Key</th>
                <th style="width:22%;">Type</th>
                <th style="width:12%;">Required</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
      `;for(const o of s.propertiesDetail)n+=`
          <tr>
            <td><span style="color:var(--primary);font-weight:500;">${c(o.name)}</span></td>
            <td>${o.typeText?c(o.typeText):""}</td>
            <td>${L(o.required)}</td>
            <td>${o.description?c(o.description):'<span class="muted">-</span>'}</td>
          </tr>
        `;n+=`
            </tbody>
          </table>
        </div>
      `}return n+="</div>",n};let N="",J="",G=0;if($.length)for(const s of $){N+=`
        <div class="tag-group">
          <div class="tag-group-header">
            <div class="tag-group-header-left">
              <span class="tag-group-arrow">▾</span>
              <span class="tag-group-title-text">${c(s.tag)}</span>
            </div>
            <span class="tag-group-count">${s.ops.length} paths</span>
          </div>
          <div class="tag-group-body">
      `;for(const n of s.ops){const o=G++,i=n.method==="GET"?"badge-get":n.method==="POST"?"badge-post":n.method==="PUT"||n.method==="PATCH"?"badge-put":n.method==="DELETE"?"badge-delete":"badge-default";N+=`
          <div class="op-item" data-op-index="${o}">
            <div>
              <span class="badge-method ${i}">${c(n.method)}</span>
              <span class="op-item-path">${c(n.path)}</span>
            </div>
            ${n.summary?`<div class="op-item-summary">${c(n.summary)}</div>`:""}
          </div>
        `,J+=`
          <div class="op-detail-template" data-op-index="${o}">
            ${C(n)}
          </div>
        `}N+=`
          </div>
        </div>
      `}let I="",P="",U=0;if(F.length)for(const s of F){const n=U++;I+=`
        <div class="schema-list-item" data-schema-index="${n}">
          <div>
            <span class="schema-name">${c(s.name)}</span>
            ${s.type?`<span class="chip chip-outline" style="margin-left:6px;">${c(s.type)}</span>`:""}
            ${s.properties?.length?`<span class="chip chip-outline" style="margin-left:4px;">${s.properties.length} properties</span>`:""}
          </div>
          ${s.description?`<div class="schema-desc">${c(s.description)}</div>`:""}
        </div>
      `,P+=`
        <div class="schema-detail-template" data-schema-index="${n}">
          ${K(s)}
        </div>
      `}return`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <title>${c(W)}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    :root {
      --bg: #fafafa;
      --card-bg: #ffffff;
      --border: #e0e0e0;
      --text: #212121;
      --muted: #757575;
      --primary: #1976d2;
      --primary-soft: #e3f2fd;
      --success-soft: #e8f5e9;
      --success: #2e7d32;
      --warning-soft: #fff8e1;
      --warning: #f9a825;
      --danger-soft: #ffebee;
      --danger: #c62828;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--text);
    }
    .page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px;
    }
    h1, h2, h3 { margin: 0; font-weight: 700; }
    h1 { font-size: 1.4rem; }
    h2 { font-size: 1.2rem; }
    p { margin: 4px 0; }
    .card {
      background: var(--card-bg);
      border-radius: 12px;
      border: 1px solid var(--border);
      padding: 16px;
      margin-top: 12px;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 999px;
      border: 1px solid var(--border);
      font-size: 0.75rem;
      margin-right: 4px;
      margin-bottom: 4px;
      background: #fff;
    }
    .chip-outline { background: transparent; }
    .muted { color: var(--muted); font-size: 0.85rem; }
    .badge-method {
      font-size: 0.75rem;
      padding: 2px 8px;
      border-radius: 999px;
      font-weight: 600;
      margin-right: 6px;
      display: inline-block;
    }
    .badge-get { background: var(--success-soft); color: var(--success); }
    .badge-post { background: var(--primary-soft); color: var(--primary); }
    .badge-put, .badge-patch { background: var(--warning-soft); color: var(--warning); }
    .badge-delete { background: var(--danger-soft); color: var(--danger); }
    .badge-default { background: #eeeeee; color: #616161; }
    .section { margin-top: 20px; }
    .section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
    .section-header-right { font-size: 0.8rem; color: var(--muted); }
    .tabs {
      display: inline-flex;
      border-radius: 999px;
      border: 1px solid var(--border);
      overflow: hidden;
    }
    .tab {
      padding: 4px 14px;
      font-size: 0.85rem;
      cursor: pointer;
      user-select: none;
    }
    .tab-active {
      background: var(--primary-soft);
      color: var(--primary);
      font-weight: 600;
    }
    .split {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }
    .split-left {
      flex: 0 0 40%;
      max-width: 420px;
      min-width: 260px;
      border-right: 1px solid var(--border);
      padding-right: 8px;
      max-height: 70vh;
      overflow-y: auto;
    }
    .split-right {
      flex: 1;
      max-height: 70vh;
      overflow-y: auto;
    }
        .tag-group {
      margin-top: 8px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: #fff;
      overflow: hidden;
    }
    .tag-group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      padding: 6px 8px;
      cursor: pointer;
      user-select: none;
      background: #fafafa;
    }
    .tag-group-header-left {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }
    .tag-group-arrow {
      font-size: 0.8rem;
      transition: transform 0.15s ease-out;
    }
    .tag-group-title-text {
      font-size: 0.9rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 180px;
    }
    .tag-group-count {
      font-size: 0.8rem;
      color: var(--muted);
    }
    .tag-group-body {
      padding: 6px 8px 8px;
      border-top: 1px solid var(--border);
    }
    .tag-group-collapsed .tag-group-body {
      display: none;
    }
    .tag-group-collapsed .tag-group-arrow {
      transform: rotate(-90deg);
    }

    .op-item {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 6px 8px;
      margin-bottom: 6px;
      background: #fff;
      cursor: pointer;
      word-break: break-word;     /* 줄바꿈 */
      overflow-wrap: anywhere;    /* 줄바꿈 */
    }
    .op-item-active {
      border-color: var(--primary);
      background: var(--primary-soft);
    }
    .op-item-path {
      font-family: var(--mono);
      font-size: 0.8rem;
      word-break: break-all;
      white-space: normal;
      overflow-wrap: anywhere;
    }

    .schema-list-item {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 6px 8px;
      margin-bottom: 6px;
      background: #fff;
      cursor: pointer;
      word-break: break-word;
      overflow-wrap: anywhere;
    }
    .schema-list-item-active {
      border-color: var(--primary);
      background: var(--primary-soft);
    }
    .schema-name {
      font-weight: 700;
      font-size: 0.95rem;
      word-break: break-word;
      overflow-wrap: anywhere;
    }
    .op-item {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 6px 8px;
      margin-bottom: 6px;
      background: #fff;
      cursor: pointer;
      word-break: break-word;
      overflow-wrap: anywhere;
    }
    .op-item-active {
      border-color: var(--primary);
      background: var(--primary-soft);
    }
    .op-item-path {
      font-family: var(--mono);
      font-size: 0.8rem;
      word-break: break-all;
    }
    .op-item-summary {
      font-size: 0.8rem;
      margin-top: 2px;
    }
    .schema-list-item {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 6px 8px;
      margin-bottom: 6px;
      background: #fff;
      cursor: pointer;
      word-break: break-word;
      overflow-wrap: anywhere;      
    }
    .schema-list-item-active {
      border-color: var(--primary);
      background: var(--primary-soft);
    }
    .schema-name {
      font-weight: 700;
      font-size: 0.95rem;
    }
    .schema-desc {
      font-size: 0.85rem;
      color: var(--muted);
      margin-top: 2px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 4px;
      font-size: 0.85rem;
    }
    th, td {
      border-bottom: 1px solid var(--border);
      text-align: left;
      padding: 4px 6px;
      vertical-align: top;
    }
    th {
      color: var(--muted);
      font-weight: 600;
      font-size: 0.78rem;
      background: #fafafa;
    }
    pre {
      margin: 4px 0;
      padding: 8px;
      background: #f5f5f5;
      border-radius: 6px;
      font-family: var(--mono);
      font-size: 0.8rem;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .pill-required {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 999px;
      background: var(--danger-soft);
      color: var(--danger);
      font-size: 0.7rem;
      font-weight: 600;
    }
    .pill-optional {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 999px;
      background: #eeeeee;
      color: #616161;
      font-size: 0.7rem;
    }
    .op-block { margin-top: 10px; }
    .op-block-title { font-weight: 600; font-size: 0.9rem; margin-bottom: 4px; }
    .box-dash {
      border: 1px dashed var(--border);
      border-radius: 8px;
      padding: 8px 10px;
      margin-top: 6px;
      background: #fff;
    }
  </style>
</head>
<body>
  <div class="page">
    <!-- Info -->
    <div class="card">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
        <h1>${c(A.title||"Untitled API")}</h1>
        ${A.version?`<span class="chip chip-outline">v${c(A.version)}</span>`:""}
      </div>
      ${A.description?`<p class="muted" style="margin-top:6px;white-space:pre-line;">${c(A.description)}</p>`:""}
      ${Z.length?`<div style="margin-top:8px;">
               <div class="muted">Servers</div>
               <div style="margin-top:4px;">
                  ${Z.map(s=>{const n=`${s.url??"N/A"}${s.description?` · ${s.description}`:""}`;return`<span class="chip chip-outline">${c(n)}</span>`}).join("")}
               </div>
             </div>`:""}
      ${M.length?`<div style="margin-top:8px;">
               <div class="muted">Tags</div>
               <div style="margin-top:4px;">
                 ${M.map(s=>`<span class="chip chip-outline">${c(s)}</span>`).join("")}
               </div>
             </div>`:""}
    </div>

    <!-- Paths 섹션 (탭 + 스플릿) -->
    <div class="section card" id="paths-section">
      <div class="section-header">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <div class="tabs">
            <div class="tab tab-active" id="tab-paths">Paths</div>
            <div class="tab" id="tab-schemas">Schemas</div>
          </div>
        </div>
        <div class="section-header-right">
          Paths · 총 ${D.length} API
        </div>
      </div>

      <div class="split">
        <div class="split-left" id="paths-left">
          ${N||'<p class="muted">경로가 없습니다.</p>'}
        </div>
        <div class="split-right">
          <div id="paths-detail"></div>
        </div>
      </div>

      <div id="paths-detail-templates" style="display:none;">
        ${J}
      </div>
    </div>

    <!-- Schemas 섹션 (탭 + 스플릿) -->
    <div class="section card" id="schemas-section" style="display:none;">
      <div class="section-header">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <div class="tabs">
            <div class="tab" id="tab-paths-2">Paths</div>
            <div class="tab tab-active" id="tab-schemas-2">Schemas</div>
          </div>
        </div>
        <div class="section-header-right">
          Schemas · 총 ${F.length}개
        </div>
      </div>

      <div class="split">
        <div class="split-left" id="schemas-left">
          ${I||'<p class="muted">스키마가 없습니다.</p>'}
        </div>
        <div class="split-right">
          <div id="schemas-detail"></div>
        </div>
      </div>

      <div id="schemas-detail-templates" style="display:none;">
        ${P}
      </div>
    </div>
  </div>

  <script>
    (function () {
      const $ = (s) => document.querySelector(s);
      const $$ = (s) => Array.from(document.querySelectorAll(s));

      function setupTabs() {
        const tabPaths = $('#tab-paths');
        const tabSchemas = $('#tab-schemas');
        const tabPaths2 = $('#tab-paths-2');
        const tabSchemas2 = $('#tab-schemas-2');
        const secPaths = $('#paths-section');
        const secSchemas = $('#schemas-section');
        if (!tabPaths || !tabSchemas || !secPaths || !secSchemas) return;

        function showPaths() {
          tabPaths.classList.add('tab-active');
          tabSchemas.classList.remove('tab-active');
          if (tabPaths2 && tabSchemas2) {
            tabPaths2.classList.add('tab-active');
            tabSchemas2.classList.remove('tab-active');
          }
          secPaths.style.display = 'block';
          secSchemas.style.display = 'none';
          window.scrollTo({ top: secPaths.offsetTop - 16, behavior: 'smooth' });
        }

        function showSchemas() {
          tabSchemas.classList.add('tab-active');
          tabPaths.classList.remove('tab-active');
          if (tabPaths2 && tabSchemas2) {
            tabSchemas2.classList.add('tab-active');
            tabPaths2.classList.remove('tab-active');
          }
          secSchemas.style.display = 'block';
          secPaths.style.display = 'none';
          window.scrollTo({ top: secSchemas.offsetTop - 16, behavior: 'smooth' });
        }

        tabPaths.addEventListener('click', showPaths);
        tabPaths2 && tabPaths2.addEventListener('click', showPaths);
        tabSchemas.addEventListener('click', showSchemas);
        tabSchemas2 && tabSchemas2.addEventListener('click', showSchemas);
      }

     
      function setupPaths() {
        const detail = $('#paths-detail');
        if (!detail) return;

        const items = $$('.op-item');
        const templates = $$('.op-detail-template');
        const groups = $$('.tag-group');

        if (!items.length || !templates.length) return;

        // 태그 그룹 어코디언
        if (groups.length) {
          groups.forEach((g, idx) => {
            const header = g.querySelector('.tag-group-header');
            if (!header) return;

            // 첫 번째 그룹만 펼치고 나머지는 접기
            if (idx > 0) {
              g.classList.add('tag-group-collapsed');
            }

            header.addEventListener('click', () => {
              g.classList.toggle('tag-group-collapsed');
            });
          });
        }

        function show(idx) {
          const tpl = templates.find((t) => t.getAttribute('data-op-index') === idx);
          if (!tpl) return;
          detail.innerHTML = tpl.innerHTML;
        }

        items.forEach((el) => {
          el.addEventListener('click', (e) => {
            e.stopPropagation(); // 그룹 헤더 클릭과 구분
            const idx = el.getAttribute('data-op-index');
            if (!idx) return;
            items.forEach((i) => i.classList.remove('op-item-active'));
            el.classList.add('op-item-active');
            show(idx);
          });
        });

        // 첫 번째 그룹 안의 첫 번째 op 자동 선택
        const first = items[0];
        if (first) {
          // 첫 그룹이 접혀있다면 펼쳐주기
          const parentGroup = first.closest('.tag-group');
          if (parentGroup) {
            parentGroup.classList.remove('tag-group-collapsed');
          }
          first.classList.add('op-item-active');
          const idx = first.getAttribute('data-op-index');
          if (idx) show(idx);
        }
      }

      function setupSchemas() {
        const detail = $('#schemas-detail');
        if (!detail) return;
        const items = $$('.schema-list-item');
        const templates = $$('.schema-detail-template');
        if (!items.length || !templates.length) return;

        function show(idx) {
          const tpl = templates.find((t) => t.getAttribute('data-schema-index') === idx);
          if (!tpl) return;
          detail.innerHTML = tpl.innerHTML;
        }

        items.forEach((el) => {
          el.addEventListener('click', () => {
            const idx = el.getAttribute('data-schema-index');
            if (!idx) return;
            items.forEach((i) => i.classList.remove('schema-list-item-active'));
            el.classList.add('schema-list-item-active');
            show(idx);
          });
        });

        const first = items[0];
        if (first) {
          first.classList.add('schema-list-item-active');
          const idx = first.getAttribute('data-schema-index');
          if (idx) show(idx);
        }
      }

      document.addEventListener('DOMContentLoaded', function () {
        setupTabs();
        setupPaths();
        setupSchemas();
      });
    })();
  <\/script>
</body>
</html>
`}}},Be='ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',_={fontFamily:Be,fontSize:"0.85rem"},ue=r=>{switch(r){case"GET":return"success";case"POST":return"primary";case"PUT":case"PATCH":return"warning";case"DELETE":return"error";default:return"default"}},ie={border:"1px solid",borderColor:"divider",borderRadius:1.5,bgcolor:"background.paper"},Q=(r,h=0)=>{if(!r||h>4)return"...";if(r.$ref&&typeof r.$ref=="string")return`{${r.$ref.split("/").pop()??r.$ref}}`;const f=r?.type;return f==="array"||r?.items?`[${Q(r?.items??{},h+1)}]`:f==="object"||r?.properties?`{ ${(r?.properties?Object.entries(r.properties):[]).map(([w,k])=>`${w}: ${Q(k,h+1)}`).join(", ")} }`:r?.enum?.length?r.enum.map(m=>String(m)).join(" | "):f??"object"},ce=r=>{if(!r)return"";try{return JSON.stringify(JSON.parse(r),null,2)}catch{const h=r.trim();let f="",m=0;const E=()=>"  ".repeat(Math.max(m,0));for(let w=0;w<h.length;w+=1){const k=h[w];k==="{"||k==="["?(f+=k+`
`,m+=1,f+=E()):k==="}"||k==="]"?(m-=1,f+=`
`+E()+k):k===","?f+=k+`
`+E():f+=k}return f}},Je=()=>{const{spec:r,info:h,servers:f,operations:m,tags:E,schemas:w,loading:k,error:R,fileName:B,handleFile:oe,handleReset:A,buildExportHtml:Z}=Ie(),D=j.useRef(null),[M,F]=j.useState(null),[ne,z]=j.useState("paths"),[$,v]=j.useState(""),W=j.useRef(null),L=j.useRef(null),[C,K]=j.useState(.4),[N,J]=j.useState(.38),[G,I]=j.useState({}),[P,U]=j.useState(null),te=j.useMemo(()=>{const t=w.find(a=>a.name===P)?.shapeText??"";return ce(t)},[w,P]),s=()=>D.current?.click(),n=()=>{if(r)try{const t=Z();if(!t)return;const a=new Blob([t],{type:"text/html;charset=utf-8"}),u=URL.createObjectURL(a),l=B?.replace(/\.json$/i,"")||h.title||"openapi-doc",g=document.createElement("a");g.href=u,g.download=`${l}.html`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(u)}catch(t){console.error(t),alert("HTML 다운로드 중 오류가 발생했습니다.")}},o=j.useMemo(()=>{const t=[...E],a=new Map;m.forEach(g=>{const q=g.primaryTag||"default";a.has(q)||a.set(q,[]),a.get(q).push(g)});const u=Array.from(a.keys()).filter(g=>!t.includes(g));return[...t,...u].map(g=>({tag:g,ops:a.get(g)??[]})).filter(g=>g.ops.length>0)},[m,E]),i=j.useMemo(()=>{const t=o.flatMap(u=>u.ops),a=t[0]||null;return M?t.find(u=>`${u.method}-${u.path}`===M)??a:a},[M,o]),x=j.useMemo(()=>{if(!i)return"";const t=i.parameters?.filter(a=>a.in==="path")??[];return i.path.replace(/\{([^}]+)\}/g,(a,u)=>{const l=t.find(q=>q.name===u);if(!l)return`{${u}}`;const g=l.example!==void 0?typeof l.example=="string"?l.example:JSON.stringify(l.example):"<value>";return String(g)})},[i]);j.useEffect(()=>{f?.length&&!$&&v(f[0]?.url??"")},[f,$]),j.useEffect(()=>{const t={};o.forEach(a=>{t[a.tag]=!1}),I(t)},[o]),j.useEffect(()=>{if(!w.length){U(null);return}(!P||!w.find(t=>t.name===P))&&U(w[0].name)},[w,P]);const b=j.useMemo(()=>w.find(t=>t.name===P)??w[0]??null,[w,P]),T=(t,a)=>u=>{u.preventDefault();const l=t.current;if(!l)return;const g=l.getBoundingClientRect(),q=X=>{const fe=(X-g.left)/g.width,ge=Math.min(.75,Math.max(.25,fe));a(ge)},pe=X=>q(X.clientX),he=X=>{X.preventDefault(),q(X.touches[0]?.clientX??0)},V=()=>{window.removeEventListener("mousemove",pe),window.removeEventListener("touchmove",he),window.removeEventListener("mouseup",V),window.removeEventListener("touchend",V),window.removeEventListener("touchcancel",V)};window.addEventListener("mousemove",pe),window.addEventListener("touchmove",he,{passive:!1}),window.addEventListener("mouseup",V),window.addEventListener("touchend",V),window.addEventListener("touchcancel",V)},H=T(W,K),re=T(L,J);return e.jsxs(be,{sx:{p:1.25,display:"flex",flexDirection:"column",gap:1.25,flex:1,minHeight:785,height:"100%",width:1,maxWidth:"100%",overflowX:"hidden"},children:[e.jsxs(p,{sx:{...ie,p:1.25,display:"flex",gap:1,alignItems:"center",flexWrap:"wrap",justifyContent:"space-between"},children:[e.jsxs(y,{direction:"row",spacing:1,alignItems:"center",flexWrap:"wrap",children:[e.jsx(se,{size:"small",variant:"contained",startIcon:e.jsx(ve,{}),onClick:s,children:"api-docs.json 업로드"}),e.jsx(se,{size:"small",variant:"outlined",color:"primary",startIcon:e.jsx(ye,{}),component:"a",href:"/sample/api-docs.json",download:!0,children:"샘플 다운로드"}),e.jsx("input",{type:"file",accept:"application/json,.json",style:{display:"none"},ref:D,onChange:t=>{const a=t.target.files?.[0];a&&oe(a)}}),e.jsx(se,{size:"small",variant:"outlined",color:"primary",startIcon:e.jsx(je,{}),onClick:A,disabled:!r&&!B,children:"초기화"}),B&&e.jsx(S,{size:"small",icon:e.jsx(me,{fontSize:"small"}),label:B,sx:{maxWidth:"100%"}})]}),e.jsx(se,{size:"small",variant:"outlined",color:"primary",startIcon:e.jsx(we,{}),onClick:n,disabled:!r,children:"HTML 다운로드"})]}),k&&e.jsx($e,{}),R&&e.jsx(Se,{severity:"error",children:R}),!r&&!k&&!R&&e.jsxs(p,{sx:{...ie,p:1.25,display:"flex",flexDirection:"column",gap:1,alignItems:"center",justifyContent:"center",color:"text.secondary",textAlign:"center",flex:1,minHeight:240},children:[e.jsx(ke,{color:"disabled",fontSize:"large"}),e.jsx(d,{variant:"body1",fontWeight:600,children:"api-docs.json을 업로드하세요"}),e.jsx(d,{variant:"body2",children:"OpenAPI 3.x JSON 파일을 지원합니다."})]}),r&&e.jsxs(y,{spacing:1.25,sx:{minHeight:695,overflow:"auto",pr:.5,height:"calc(100dvh - 260px)"},children:[e.jsxs(p,{sx:{...ie,p:1.25,display:"flex",flexDirection:"column",gap:1.25},children:[e.jsxs(y,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(me,{color:"primary"}),e.jsx(d,{variant:"subtitle1",fontWeight:700,children:h.title||"Untitled API"}),h.version&&e.jsx(S,{size:"small",label:`v${h.version}`,variant:"outlined",sx:{ml:1}})]}),h.description&&e.jsx(d,{variant:"body2",color:"text.secondary",sx:{whiteSpace:"pre-line"},children:h.description})]}),e.jsxs(p,{sx:{...ie,p:0,display:"flex",flexDirection:"column",minHeight:0},children:[e.jsxs(Te,{value:ne,onChange:(t,a)=>z(a),children:[e.jsx(xe,{value:"paths",label:"Paths"}),e.jsx(xe,{value:"schemas",label:"Schemas"})]}),e.jsx(de,{}),ne==="schemas"?e.jsxs(p,{sx:{p:1.25,display:"flex",flexDirection:"column",minHeight:0,flex:1},children:[e.jsxs(y,{direction:"row",alignItems:"center",spacing:1,mb:1,children:[e.jsx(ze,{color:"primary"}),e.jsxs(d,{variant:"subtitle1",fontWeight:700,children:["Schemas (",w.length,")"]})]}),e.jsx(de,{}),e.jsxs(p,{sx:{display:"flex",flexDirection:"row",gap:1,mt:1,minHeight:0,flex:1},ref:L,children:[e.jsx(p,{sx:{minWidth:{md:320},maxWidth:{md:480},width:{md:`${N*100}%`},overflow:"auto",flexShrink:0,borderColor:"divider",pr:{md:1},pb:{xs:1,md:0}},children:e.jsxs(y,{spacing:.75,sx:{mt:1},children:[w.length===0&&e.jsx(d,{variant:"body2",color:"text.secondary",children:"스키마가 없습니다."}),w.map(t=>{const a=b?.name===t.name;return e.jsxs(p,{sx:{border:"1px solid",borderColor:a?"primary.main":"divider",borderRadius:1,p:1,bgcolor:a?"action.selected":"background.default",cursor:"pointer","&:hover":{borderColor:"primary.main"}},onClick:()=>U(t.name),children:[e.jsxs(y,{direction:"row",spacing:.75,alignItems:"center",flexWrap:"wrap",children:[e.jsx(d,{variant:"subtitle2",fontWeight:700,sx:{wordBreak:"break-word"},children:t.name}),t.type&&e.jsx(S,{size:"small",label:t.type,variant:"outlined"}),t.properties?.length?e.jsx(S,{size:"small",variant:"outlined",label:`${t.properties.length} props`}):null]}),t.description&&e.jsx(d,{variant:"body2",color:"text.secondary",sx:{mt:.25},children:t.description})]},t.name)})]})}),e.jsx(p,{onMouseDown:re,onTouchStart:re,sx:{width:6,flexShrink:0,cursor:"col-resize",bgcolor:"divider",borderRadius:999,alignSelf:"stretch",display:{xs:"none",md:"block"}}}),e.jsxs(p,{sx:{flex:1,overflow:"auto",pl:{md:1},minWidth:0,minHeight:0,wordBreak:"break-word",overflowWrap:"anywhere"},children:[!b&&e.jsx(d,{variant:"body2",color:"text.secondary",sx:{mt:1},children:"스키마를 선택하세요."}),b&&e.jsxs(y,{spacing:1,sx:{mt:1},children:[e.jsxs(y,{direction:"row",spacing:1,alignItems:"flex-start",flexWrap:"wrap",children:[e.jsxs(y,{direction:"column",spacing:0,children:[e.jsx(d,{variant:"h6",fontWeight:800,children:b.name}),b.description&&e.jsx(d,{variant:"body2",color:"text.secondary",sx:{mt:-.5},children:b.description})]}),e.jsxs(y,{direction:"row",spacing:1,alignItems:"center",flexWrap:"wrap",sx:{ml:1},children:[b.type&&e.jsx(S,{size:"small",label:b.type,variant:"outlined"}),b.properties?.length?e.jsx(S,{size:"small",variant:"outlined",label:`${b.properties.length} properties`}):null]})]}),b.shapeText&&e.jsxs(p,{sx:{border:"1px dashed",borderColor:"divider",borderRadius:1,p:1,bgcolor:"background.default"},children:[e.jsx(d,{variant:"caption",color:"text.secondary",children:"Schema"}),e.jsx(p,{component:"pre",sx:{m:0,mt:.25,..._,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:te})]}),b.propertiesDetail&&b.propertiesDetail.length>0&&e.jsxs(p,{sx:{border:"1px solid",borderColor:"divider",borderRadius:1,p:1,bgcolor:"background.default"},children:[e.jsx(d,{variant:"subtitle2",fontWeight:700,gutterBottom:!0,children:"Properties"}),e.jsxs(p,{component:"table",sx:{width:"100%",tableLayout:"fixed",borderCollapse:"collapse","& th, & td":{borderBottom:"1px solid",borderColor:"divider",textAlign:"left",padding:"6px 8px",verticalAlign:"top"},"& th":{color:"text.secondary",fontWeight:700,fontSize:"0.8rem"},"& td":{fontSize:"0.9rem"}},children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"25%"}),e.jsx("col",{width:"25%"}),e.jsx("col",{width:"100px"}),e.jsx("col",{})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:b.propertiesDetail.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{fontSize:"small",color:"primary",children:t.name})}),e.jsx("td",{children:t.typeText?e.jsx(S,{size:"small",label:t.typeText,variant:"outlined"}):"-"}),e.jsx("td",{children:t.required?e.jsx(S,{size:"small",color:"error",label:"required"}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"optional"})}),e.jsx("td",{children:t.description?e.jsx(d,{variant:"body2",color:"text.secondary",children:t.description}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"-"})})]},t.name))})]})]}),!b.propertiesDetail?.length&&e.jsx(d,{variant:"body2",color:"text.secondary",children:"프로퍼티 정보가 없습니다."})]})]})]})]}):e.jsxs(p,{sx:{p:1.25,display:"flex",flexDirection:"column",minHeight:0,flex:1},children:[e.jsxs(p,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:1,flexWrap:"wrap"},children:[e.jsxs(d,{variant:"subtitle1",fontWeight:700,children:["Paths (",o.reduce((t,a)=>t+a.ops.length,0)," apis)"]}),f.length>0&&e.jsxs(Ee,{size:"small",sx:{minWidth:200},children:[e.jsx(Ce,{id:"server-select-label",children:"Server"}),e.jsx(Pe,{labelId:"server-select-label",label:"Server",value:$,onChange:t=>v(t.target.value),children:f.map((t,a)=>e.jsxs(Le,{value:t.url??"",children:[t.url??"N/A",t.description?` · ${t.description}`:""]},`${t.url??a}-${a}`))})]})]}),e.jsx(de,{sx:{mt:1}}),e.jsxs(p,{ref:W,sx:{display:"flex",flexDirection:"row",gap:1,mt:1,minHeight:0,flex:1},children:[e.jsx(p,{sx:{borderBottom:{xs:"1px solid",md:"none"},borderColor:"divider",pr:{md:1},pb:{xs:1,md:0},minWidth:{md:360},maxWidth:{md:620},width:{md:`${C*100}%`},overflow:"auto",flexShrink:0},children:e.jsxs(y,{spacing:1,sx:{mt:1},children:[o.length===0&&e.jsx(d,{variant:"body2",color:"text.secondary",children:"경로가 없습니다."}),o.map(t=>e.jsxs(qe,{disableGutters:!0,expanded:G[t.tag]??!1,onChange:(a,u)=>I(l=>({...l,[t.tag]:u})),children:[e.jsx(Oe,{expandIcon:e.jsx(Re,{}),children:e.jsxs(y,{direction:"row",spacing:1,alignItems:"center",flexWrap:"wrap",children:[e.jsx(d,{variant:"subtitle2",fontWeight:700,children:t.tag}),e.jsx(S,{size:"small",variant:"outlined",label:`${t.ops.length} paths`})]})}),e.jsx(Ae,{sx:{pt:0},children:e.jsx(y,{spacing:.75,children:t.ops.map(a=>{const u=`${a.method}-${a.path}`,l=i?.method===a.method&&i?.path===a.path;return e.jsx(p,{sx:{border:"1px solid",borderColor:l?"primary.main":"divider",borderRadius:1,p:1,bgcolor:l?"action.selected":"background.default",cursor:"pointer","&:hover":{borderColor:"primary.main"}},onClick:()=>F(u),children:e.jsxs(y,{spacing:.25,children:[e.jsxs(y,{direction:"row",spacing:1,alignItems:"center",flexWrap:"wrap",children:[e.jsx(S,{size:"small",color:ue(a.method),label:a.method}),e.jsx(d,{variant:"subtitle2",fontWeight:700,noWrap:!0,children:a.path})]}),a.summary&&e.jsxs(d,{variant:"body2",color:"text.primary",sx:{mt:.25},noWrap:!0,children:["Summary: ",a.summary]}),a.description&&e.jsxs(d,{variant:"caption",color:"text.secondary",sx:{display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:["Description: ",a.description]})]})},u)})})})]},t.tag))]})}),e.jsx(p,{onMouseDown:H,onTouchStart:H,sx:{width:6,flexShrink:0,cursor:"col-resize",bgcolor:"divider",borderRadius:999,alignSelf:"stretch",display:{xs:"none",md:"block"}}}),e.jsx(p,{sx:{flex:1,minWidth:0,overflow:"auto",p:{md:1},wordBreak:"break-word",overflowWrap:"anywhere"},children:i?e.jsxs(y,{spacing:1.25,children:[e.jsxs(y,{spacing:.5,alignItems:"flex-start",children:[e.jsxs(y,{direction:"row",spacing:1,alignItems:"center",flexWrap:"wrap",children:[e.jsx(S,{size:"small",color:ue(i.method),label:i.method}),e.jsx(d,{variant:"h6",fontWeight:800,sx:{display:"flex",flexWrap:"wrap",gap:.5},children:i.path.split(/(\{[^}]+\})/g).map((t,a)=>t.match(/^\{.*\}$/)?e.jsx(p,{component:"span",sx:{color:"primary.main",fontWeight:700,px:.2,borderRadius:.5,bgcolor:"primary.50"},children:t},a):e.jsx(p,{component:"span",children:t},a))}),i.tags?.[0]&&e.jsx(S,{size:"small",variant:"outlined",label:i.tags[0]})]}),i.summary&&e.jsx(d,{variant:"subtitle1",fontWeight:700,children:i.summary}),i.parameters?.some(t=>t.in==="path")&&x&&e.jsxs(p,{sx:{border:"1px dashed",borderColor:"divider",borderRadius:1,px:1,py:.75,bgcolor:"background.default"},children:[e.jsx(d,{variant:"caption",color:"text.secondary",children:"Path with values"}),e.jsx(d,{variant:"body2",sx:{fontFamily:"monospace",wordBreak:"break-all"},children:x})]})]}),i.description&&e.jsx(d,{variant:"body2",color:"text.secondary",sx:{whiteSpace:"pre-line"},children:i.description}),i.parameters&&i.parameters.length>0&&e.jsxs(p,{sx:{border:"1px solid",borderColor:"divider",borderRadius:1,p:1.25},children:[e.jsx(d,{variant:"subtitle2",fontWeight:700,gutterBottom:!0,children:"Parameters"}),e.jsx(y,{spacing:1,children:[{key:"path",label:"Path parameters"},{key:"query",label:"Query parameters"},{key:"header",label:"Header parameters"},{key:"cookie",label:"Cookie parameters"},{key:"other",label:"Other parameters"}].map(t=>{const a=i.parameters??[],u=t.key==="other"?a.filter(l=>!["path","query","header","cookie"].includes(l.in)):a.filter(l=>l.in===t.key);return u.length?e.jsxs(p,{children:[e.jsx(d,{variant:"subtitle2",fontWeight:700,gutterBottom:!0,children:t.label}),e.jsx(y,{spacing:1,children:e.jsxs(p,{component:"table",sx:{width:"100%",borderCollapse:"collapse","& th, & td":{borderBottom:"1px solid",borderColor:"divider",textAlign:"left",padding:"6px 8px",verticalAlign:"top"},"& th":{color:"text.secondary",fontWeight:700,fontSize:"0.8rem"},"& td":{fontSize:"0.9rem"}},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"In"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Example"})]})}),e.jsx("tbody",{children:u.map(l=>{const g=l.example!==void 0?typeof l.example=="string"?l.example:JSON.stringify(l.example):"<value>",q=l.in==="header"?`${l.name}: ${g}`:l.in==="query"?`${l.name}=${g}`:l.in==="path"?`{${l.name}}: ${g}`:`${l.name}=${g}`;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{variant:"body2",color:"primary",children:l.name})}),e.jsx("td",{children:l.schema?.type??"-"}),e.jsx("td",{children:l.in}),e.jsx("td",{children:l.required?e.jsx(S,{size:"small",color:"error",label:"required"}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"optional"})}),e.jsx("td",{children:l.description?e.jsx(d,{variant:"body2",color:"text.secondary",children:l.description}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"-"})}),e.jsx("td",{children:e.jsx(p,{component:"pre",sx:{m:0,px:1,py:.5,bgcolor:"background.default",borderRadius:1,overflow:"auto",..._,whiteSpace:"pre-wrap",wordBreak:"break-word"},children:q})})]},`${l.in}-${l.name}`)})}),e.jsx("style",{children:`
                                          table {
                                            table-layout: fixed;
                                          }
                                          th,
                                          td {
                                            word-break: break-word;
                                            white-space: pre-wrap;
                                          }
                                        `})]})})]},t.key):null})})]}),i.requestBody&&e.jsxs(p,{sx:{border:"1px solid",borderColor:"divider",borderRadius:1,p:1.25},children:[e.jsx(d,{variant:"subtitle2",fontWeight:700,gutterBottom:!0,children:"Request Body"}),i.requestBody.description&&e.jsx(d,{variant:"body2",color:"text.secondary",sx:{mb:1,whiteSpace:"pre-line"},children:i.requestBody.description}),e.jsx(y,{spacing:1,children:i.requestBody.contents.map((t,a)=>e.jsxs(p,{sx:{border:"1px dashed",borderColor:"divider",p:1,borderRadius:1},children:[e.jsx(S,{size:"small",label:t.mediaType,sx:{mb:.5}}),t.schemaName&&e.jsx(S,{size:"small",variant:"outlined",label:t.schemaName,sx:{mb:.5,ml:.5}}),t.schema&&e.jsxs(p,{sx:{mb:.5},children:[e.jsx(d,{variant:"caption",color:"text.secondary",children:"Schema"}),e.jsxs(y,{spacing:.5,sx:{mt:.5},children:[e.jsx(p,{component:"pre",sx:{m:0,p:.75,bgcolor:"background.default",borderRadius:1,..._,whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px dashed",borderColor:"divider"},children:ce(Q(t.schema))}),t.schema?.properties&&e.jsxs(p,{component:"table",sx:{width:"100%",borderCollapse:"collapse","& th, & td":{borderBottom:"1px solid",borderColor:"divider",textAlign:"left",padding:"6px 8px",verticalAlign:"top",wordBreak:"break-word",whiteSpace:"pre-wrap"},"& th":{color:"text.secondary",fontWeight:700,fontSize:"0.8rem"},"& td":{fontSize:"0.9rem"},tableLayout:"fixed"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:Object.entries(t.schema.properties).map(([u,l])=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{variant:"body2",color:"primary",children:u})}),e.jsx("td",{children:Q(l)}),e.jsx("td",{children:Array.isArray(t.schema?.required)&&t.schema.required.includes(u)?e.jsx(S,{size:"small",color:"error",label:"required"}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"optional"})}),e.jsx("td",{children:l?.description?e.jsx(d,{variant:"body2",color:"text.secondary",children:l.description}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"-"})})]},u))})]})]})]}),t.mediaType.includes("form")&&t.schema?.properties&&e.jsxs(y,{spacing:.5,sx:{mb:.5},children:[e.jsx(d,{variant:"caption",color:"text.secondary",children:"Fields"}),Object.entries(t.schema.properties).map(([u,l])=>e.jsxs(y,{direction:"row",spacing:.5,alignItems:"center",flexWrap:"wrap",children:[e.jsx(S,{size:"small",label:u}),l?.type&&e.jsx(S,{size:"small",variant:"outlined",label:l.type}),l?.description&&e.jsx(d,{variant:"caption",color:"text.secondary",children:l.description})]},u))]}),t.example!==void 0&&e.jsxs(p,{children:[e.jsx(d,{variant:"caption",color:"text.secondary",children:"Example"}),e.jsx("pre",{style:{margin:0,padding:"8px",background:"var(--mui-palette-background-default)",borderRadius:6,overflow:"auto",..._},children:typeof t.example=="string"?t.example:JSON.stringify(t.example,null,2)})]})]},`${t.mediaType}-${a}`))})]}),e.jsxs(p,{sx:{border:"1px solid",borderColor:"divider",borderRadius:1,p:1.25},children:[e.jsx(d,{variant:"subtitle2",fontWeight:700,gutterBottom:!0,children:"Responses"}),e.jsxs(y,{spacing:1,children:[i.responses.length===0&&e.jsx(d,{variant:"body2",color:"text.secondary",children:"응답이 정의되지 않았습니다."}),i.responses.map(t=>e.jsxs(p,{sx:{border:"1px dashed",borderColor:"divider",p:1,borderRadius:1},children:[e.jsxs(y,{direction:"row",spacing:1,alignItems:"center",flexWrap:"wrap",children:[e.jsx(S,{size:"small",label:t.status,variant:"outlined"}),t.description&&e.jsx(d,{variant:"body2",color:"text.secondary",children:t.description})]}),t.contents.map((a,u)=>e.jsxs(p,{sx:{mt:.75},children:[e.jsx(S,{size:"small",label:a.mediaType,sx:{mb:.5}}),a.schemaName&&e.jsx(S,{size:"small",variant:"outlined",label:a.schemaName,sx:{mb:.5,ml:.5}}),a.schema&&e.jsxs(p,{sx:{mb:.5},children:[e.jsx(d,{variant:"caption",color:"text.secondary",children:"Schema"}),e.jsxs(y,{spacing:.5,sx:{mt:.5},children:[e.jsx(p,{component:"pre",sx:{m:0,p:.75,bgcolor:"background.default",borderRadius:1,..._,whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px dashed",borderColor:"divider"},children:ce(Q(a.schema))}),a.schema?.properties&&e.jsxs(p,{component:"table",sx:{width:"100%",borderCollapse:"collapse","& th, & td":{borderBottom:"1px solid",borderColor:"divider",textAlign:"left",padding:"6px 8px",verticalAlign:"top",wordBreak:"break-word",whiteSpace:"pre-wrap"},"& th":{color:"text.secondary",fontWeight:700,fontSize:"0.8rem"},"& td":{fontSize:"0.9rem"},tableLayout:"fixed"},children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"25%"}),e.jsx("col",{width:"25%"}),e.jsx("col",{width:"100px"}),e.jsx("col",{})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Key"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsx("tbody",{children:Object.entries(a.schema.properties).map(([l,g])=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(d,{fontSize:"small",color:"primary",children:l})}),e.jsx("td",{children:Q(g)}),e.jsx("td",{children:Array.isArray(a.schema?.required)&&a.schema.required.includes(l)?e.jsx(S,{size:"small",color:"error",label:"required"}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"optional"})}),e.jsx("td",{children:g?.description?e.jsx(d,{variant:"body2",color:"text.secondary",children:g.description}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"-"})})]},l))})]})]})]}),a.example!==void 0&&e.jsxs(p,{children:[e.jsx(d,{variant:"caption",color:"text.secondary",children:"Example"}),e.jsx(p,{component:"pre",sx:{m:0,mt:.25,..._,whiteSpace:"pre-wrap",wordBreak:"break-all",overflow:"auto",maxHeight:320},children:typeof a.example=="string"?a.example:JSON.stringify(a.example,null,2)})]})]},`${t.status}-${a.mediaType}-${u}`))]},t.status))]})]})]}):e.jsx(d,{variant:"body2",color:"text.secondary",children:"좌측에서 경로를 선택하세요."})})]})]})]})]})]})};export{Je as default};
