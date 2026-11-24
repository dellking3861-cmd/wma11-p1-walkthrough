"use strict";
/* ---------- state ---------- */
const KEY="wma11_site_v2";
let S={name:"",view:"home",set:null,cur:0,prog:{}};
try{const o=JSON.parse(localStorage.getItem(KEY)||"null");if(o&&o.prog)S=Object.assign(S,o);}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
let PASS=null;try{PASS=localStorage.getItem("wma11_pass");}catch(e){}

/* ---------- sets ---------- */
/* Every paper is a set; a paper data file (data/papers/<id>.js) adds walkthroughs. The guide selection is its own set. */
function allSets(){
  const out=[];const g=WT.get("guide");if(g)out.push(g);
  for(const p of PAPERS){const w=WT.get(p.id);
    const qs=[];for(let n=1;n<=p.count;n++){const wq=w&&w.qs.find(q=>q.n===n);qs.push(wq?Object.assign({paper:p.id},wq):{n,paper:p.id,stub:true,topic:"",marks:null,steps:[]});}
    out.push({id:p.id,title:p.title,kind:"paper",qs,ready:!!w});}
  return out;
}
let SETS=allSets();const setById=id=>SETS.find(s=>s.id===id);
function qst(setId,i){const p=S.prog[setId]||(S.prog[setId]={});return p[i]||(p[i]={phase:"attempt",hints:0,step:0,checks:{},finished:false});}

/* ---------- decryption of question images ---------- */
const b64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
const imgCache={};
async function bundle(pid,pass){
  if(imgCache[pid])return imgCache[pid];
  const r=await fetch(`data/q/${pid}.json`);const j=await r.json();
  const base=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);
  const key=await crypto.subtle.deriveKey({name:"PBKDF2",salt:b64(j.salt),iterations:j.iter,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["decrypt"]);
  const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:b64(j.iv)},key,b64(j.ct));
  return imgCache[pid]=JSON.parse(new TextDecoder().decode(pt));
}
async function showImage(el,pid,n){
  if(!PASS){el.innerHTML=`<p class="note">Enter the passcode on the home page to see the questions.</p>`;return;}
  el.innerHTML=`<p class="note">Loading question...</p>`;
  try{const b=await bundle(pid,PASS);el.innerHTML=b[n]?`<img class="qimg" alt="Question ${n}" src="${b[n]}">`:`<p class="note">Question image missing.</p>`;}
  catch(e){el.innerHTML=`<p class="note">Couldn't unlock the question. Check the passcode on the home page.</p>`;}
}

/* ---------- helpers ---------- */
const $m=document.getElementById("main"),$n=document.getElementById("nav");
const esc=s=>String(s).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[c]));
const checkIdx=q=>q.steps.map((s,j)=>s.c?j:-1).filter(j=>j>=0);
function solved(setId,i,idx){const ch=qst(setId,i).checks[idx];const q=setById(setId).qs[i];return !!(ch&&ch.tried.some(k=>q.steps[idx].c.o[k][1]));}
function firstRight(setId,i,idx){const ch=qst(setId,i).checks[idx];const q=setById(setId).qs[i];return !!(ch&&ch.tried.length&&q.steps[idx].c.o[ch.tried[0]][1]);}
function qScore(setId,i){const q=setById(setId).qs[i];const ids=checkIdx(q);return [ids.filter(j=>firstRight(setId,i,j)).length,ids.length];}
const paperTitle=id=>(PAPERS.find(p=>p.id===id)||{}).title||id;
function go(view,set,cur){S.view=view;if(set!==undefined)S.set=set;if(cur!==undefined)S.cur=cur;save();render();}

/* ---------- nav ---------- */
function renderNav(){
  let h=`<button class="back" id="navhome">&larr; All papers</button>`;
  if(S.view==="q"&&S.set){const set=setById(S.set);
    h+=`<h4>${esc(set.title)}</h4>`;
    set.qs.forEach((q,i)=>{const st=qst(set.id,i);const cls=st.finished?"done":st.phase!=="attempt"?"part":"";const [a,b]=qScore(set.id,i);
      h+=`<button class="${S.cur===i?"cur":""}" data-i="${i}"><span class="dot ${cls}"></span>Q${set.kind==="guide"?i+1:q.n}${q.topic?" "+esc(q.topic):""}<span class="mk">${st.finished&&b?a+"/"+b:""}</span></button>`;});
  }else{h+=`<h4>Papers</h4>`;SETS.forEach(s=>h+=`<button data-set="${s.id}"><span class="dot ${setDone(s)===s.qs.length?"done":setDone(s)?"part":""}"></span>${esc(s.title)}</button>`);}
  h+=`<button id="navrep" class="${S.view==="report"?"cur":""}" style="margin-top:8px;font-weight:600">Concept report</button>`;
  $n.innerHTML=h;
  document.getElementById("navhome").onclick=()=>go("home");
  document.getElementById("navrep").onclick=()=>go("report");
  $n.querySelectorAll("button[data-i]").forEach(b=>b.onclick=()=>go("q",S.set,+b.dataset.i));
  $n.querySelectorAll("button[data-set]").forEach(b=>b.onclick=()=>go("q",b.dataset.set,0));
}
const setDone=s=>s.qs.filter((q,i)=>(S.prog[s.id]||{})[i]&&S.prog[s.id][i].finished).length;
function render(){synth&&synth.cancel();renderNav();if(S.view==="q"&&setById(S.set))renderQ();else if(S.view==="report")renderReport();else renderHome();window.scrollTo(0,0);}

/* ---------- home ---------- */
function renderHome(){
  const nq=SETS.filter(s=>s.kind==="paper").reduce((a,s)=>a+s.qs.length,0);
  let h=`<div class="card"><h1>WMA11 Pure Mathematics 1: Past-Paper Walkthroughs</h1>
  <p>Every WMA11 past paper from January 2020 to June 2026 (${nq} questions). Each question is shown here, then walked through step by step, read aloud, with <b>concept checks</b> that explain any misunderstanding. No timer.</p>
  <ol><li>Read the question and try it on paper. Take a hint if you need one.</li><li>Walk through the solution. Each step shows the mark it earns in the official mark scheme.</li><li>Answer the concept checks: you can't move on until each is right, and your first try is what counts in the concept report.</li></ol>`;
  if(!PASS)h+=`<h3>Passcode</h3><p>Enter the passcode your tutor gave you to unlock the questions.</p><input type="text" id="pc" placeholder="Passcode" autocomplete="off"> <button class="b pri" id="pcgo">Unlock</button><p class="note" id="pcmsg"></p>`;
  else h+=`<p class="note">Questions unlocked on this browser. <button class="back" id="pcforget">Forget passcode</button></p>`;
  h+=`<h3>Your name</h3><input type="text" id="nm" placeholder="e.g. Taha" value="${esc(S.name||"")}"></div>`;
  h+=`<div class="card"><h2>Choose a set</h2><div class="home-grid">`;
  for(const s of SETS){const d=setDone(s),n=s.qs.length;const wt=s.kind==="guide"||s.ready;
    h+=`<button class="setcard" data-set="${s.id}"><div class="t">${esc(s.title)}</div><div class="s">${n} questions${wt?"":" · walkthroughs coming"}</div><div class="bar"><div style="width:${n?d/n*100:0}%"></div></div><div class="s">${d}/${n} done</div></button>`;}
  h+=`</div></div><p class="note">Questions are Pearson Edexcel WMA11/01 past-paper items © Pearson, shown for this student's private study. Walkthroughs, concept checks and tips are the tutor's own and follow the official mark schemes and examiner reports. Not produced or endorsed by Pearson, and no claim is made about which questions will appear. Prepared by The Classes, Karachi.</p>`;
  $m.innerHTML=h;
  const nm=document.getElementById("nm");nm.onchange=()=>{S.name=nm.value.trim();save();};
  $m.querySelectorAll(".setcard").forEach(b=>b.onclick=()=>go("q",b.dataset.set,0));
  const pg=document.getElementById("pcgo");
  if(pg)pg.onclick=async()=>{const v=document.getElementById("pc").value.trim();const msg=document.getElementById("pcmsg");msg.textContent="Checking...";
    try{await bundle(PAPERS[0].id,v);PASS=v;try{localStorage.setItem("wma11_pass",v);}catch(e){}render();}catch(e){delete imgCache[PAPERS[0].id];msg.textContent="That passcode didn't work. Check it and try again.";}};
  const pf=document.getElementById("pcforget");if(pf)pf.onclick=()=>{PASS=null;try{localStorage.removeItem("wma11_pass");}catch(e){}for(const k in imgCache)delete imgCache[k];render();};
}

/* ---------- question ---------- */
function renderQ(){
  const set=setById(S.set),i=Math.min(S.cur,set.qs.length-1),q=set.qs[i],st=qst(set.id,i);
  const src=q.paper?`${paperTitle(q.paper)} · Question ${q.pn||q.n}`:"";
  let h=`<div class="card"><div class="qhead"><h2>${set.kind==="guide"?`Question ${i+1} of ${set.qs.length}`:`Question ${q.n}`}</h2>${q.topic?`<span class="tag">${esc(q.topic)}</span>`:""}${set.kind==="guide"?`<span class="tag">${src}</span>`:""}${q.marks?`<span class="tag m">${q.marks} marks</span>`:""}</div>
  <div id="qimg"></div>`;
  for(let k=0;k<st.hints;k++)h+=`<div class="hint"><b>Hint ${k+1}:</b> ${q.hints[k]}</div>`;
  if(q.stub){h+=`<p class="note">The walkthrough for this question is being added. Try it on paper for now.</p>`;}
  else if(st.phase==="attempt"){
    h+=`<div class="btns">${q.hints&&st.hints<q.hints.length?`<button class="b" id="hint">Show hint ${st.hints+1} of ${q.hints.length}</button>`:""}
    <button class="b pri" id="walk">Start the walkthrough</button></div>
    <p class="note">Try it on paper first, even part of it.</p>`;}
  h+=`<div class="btns">${i>0?`<button class="b" id="prevq">&larr; Previous</button>`:""}${i<set.qs.length-1?`<button class="b" id="skipq">Next question &rarr;</button>`:""}</div></div>`;
  if(!q.stub&&st.phase!=="attempt")h+=`<div class="card"><h3 style="margin-top:0">Walkthrough</h3><div id="steps"></div><div class="btns" id="stepBtns"></div></div>`;
  $m.innerHTML=h;
  showImage(document.getElementById("qimg"),q.paper,q.pn||q.n);
  const on=(id,fn)=>{const e=document.getElementById(id);if(e)e.onclick=fn;};
  on("hint",()=>{st.hints++;save();renderQ();say(q.hints[st.hints-1]);});
  on("walk",()=>{st.phase="walk";st.step=0;save();renderQ();advance(true);});
  on("prevq",()=>go("q",S.set,i-1));on("skipq",()=>go("q",S.set,i+1));
  if(!q.stub&&st.phase!=="attempt")drawSteps(false);
}
function stepHTML(s,idx,i){
  const set=setById(S.set);
  if(s.svg)return `<div>${sketch(s.svg)}</div>`;
  if(s.plot)return `<div>${plot(s.plot,"p"+i+"_"+idx)}</div>`;
  if(s.tip)return `<div class="step tip"><span class="code">TIP</span><div class="txt">${s.tip}</div></div>`;
  if(s.er)return `<div class="step tip"><span class="code">EXAMINER</span><div class="txt">${s.er}</div></div>`;
  if(s.c){const ch=qst(set.id,i).checks[idx]||{tried:[]};
    let h=`<div class="check" data-idx="${idx}"><div class="ck">Concept: ${s.c.k}</div><div class="cq">${s.c.q}</div>`;
    s.c.o.forEach((o,k)=>{const t=ch.tried.includes(k);h+=`<button class="opt ${t?(o[1]?"ok":"no"):""}" data-k="${k}">${o[0]}</button>`;});
    const lastK=ch.tried[ch.tried.length-1];
    if(lastK!==undefined){const o=s.c.o[lastK];h+=`<div class="fb ${o[1]?"ok":"no"}">${o[1]?"&#10003; ":"&#10007; "}${o[2]}${o[1]?"":" Try again."}</div>`;}
    return h+`</div>`;}
  return `<div class="step"><div class="txt">${s.t}</div>${s.m?`<span class="code">${s.m}</span>`:""}</div>`;
}
const stepText=s=>s?(s.t||s.tip||s.er||(s.c&&s.c.q)||""):"";
function drawSteps(speakLast){
  const set=setById(S.set),i=S.cur,q=set.qs[i],st=qst(set.id,i),box=document.getElementById("steps");
  let h="";for(let k=0;k<st.step;k++)h+=stepHTML(q.steps[k],k,i);box.innerHTML=h;
  box.querySelectorAll(".check").forEach(c=>{const idx=+c.dataset.idx;c.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    if(solved(set.id,i,idx))return;const ch=st.checks[idx]||(st.checks[idx]={tried:[]});const k=+b.dataset.k;
    if(!ch.tried.includes(k))ch.tried.push(k);else{ch.tried.splice(ch.tried.indexOf(k),1);ch.tried.push(k);}
    save();drawSteps(false);const o=q.steps[idx].c.o[k];say((o[1]?"Correct. ":"Not quite. ")+o[2]);});});
  const blocked=st.step>0&&q.steps[st.step-1].c&&!solved(set.id,i,st.step-1);
  const btns=document.getElementById("stepBtns");
  if(st.step<q.steps.length)btns.innerHTML=`<button class="b pri" id="next" ${blocked?"disabled":""}>${blocked?"Answer the concept check to continue":"Next step"}</button><button class="b" id="again">Repeat aloud</button>`;
  else if(blocked)btns.innerHTML=`<span class="note">Answer the concept check to finish this question.</span>`;
  else{if(!st.finished){st.finished=true;save();renderNav();}const [a,b]=qScore(set.id,i);
    btns.innerHTML=`<div class="qdone"><b>Question complete.</b> Concept checks right first time: ${a} of ${b}.</div>
    <button class="b navy" id="nextq">${i<set.qs.length-1?"Next question":"See my concept report"}</button><button class="b" id="again">Repeat aloud</button>`;}
  const on=(id,fn)=>{const e=document.getElementById(id);if(e)e.onclick=fn;};
  on("next",()=>advance(true));
  on("again",()=>say(stepText(q.steps[st.step-1])));
  on("nextq",()=>{if(i<set.qs.length-1)go("q",S.set,i+1);else go("report");});
  if(speakLast&&st.step>0){say(stepText(q.steps[st.step-1]));
    const el=box.lastElementChild;if(el){el.classList.add("new");el.scrollIntoView({behavior:"smooth",block:"center"});}}
}
function advance(sp){const set=setById(S.set),st=qst(set.id,S.cur),q=set.qs[S.cur];if(st.step<q.steps.length)st.step++;
  while(st.step<q.steps.length&&(q.steps[st.step-1].svg||q.steps[st.step-1].plot))st.step++;save();drawSteps(sp);}

/* ---------- concept report ---------- */
function renderReport(){
  const con={};let finished=0,hints=0;
  for(const set of SETS)set.qs.forEach((q,i)=>{const st=(S.prog[set.id]||{})[i];if(!st)return;hints+=st.hints;if(st.finished)finished++;
    checkIdx(q).forEach(j=>{if(!(st.checks[j]&&st.checks[j].tried.length))return;const k=q.steps[j].c.k;const c=con[k]||(con[k]={first:0,tried:0,qs:new Set()});
      c.tried++;c.qs.add(set.kind==="guide"?`Selection Q${i+1}`:`${set.title} Q${q.n}`);if(firstRight(set.id,i,j))c.first++;});});
  const list=Object.entries(con);
  const weak=list.filter(([k,c])=>c.first<c.tried).sort((a,b)=>(a[1].first/a[1].tried)-(b[1].first/b[1].tried));
  const strong=list.filter(([k,c])=>c.first===c.tried);
  const tot=list.reduce((s,[k,c])=>s+c.tried,0),right=list.reduce((s,[k,c])=>s+c.first,0);
  let h=`<div class="card"><h1>Concept report${S.name?" for "+esc(S.name):""}</h1>
  <div style="display:flex;gap:40px;flex-wrap:wrap;align-items:flex-end;margin:12px 0 6px">
   <div><div class="big">${right}/${tot}</div><div class="note">concept checks right first time</div></div>
   <div><div class="big" style="font-size:30px">${finished}</div><div class="note">questions walked through</div></div>
   <div><div class="big" style="font-size:30px">${hints}</div><div class="note">hints used</div></div></div><h3>Revisit these concepts</h3>`;
  if(!list.length)h+=`<p>No concept checks answered yet.</p>`;
  else if(!weak.length)h+=`<p>Every concept you met was right first time.</p>`;
  else{h+=`<table><tr><th>Concept</th><th>Right first time</th><th>Seen in</th></tr>`;
    weak.forEach(([k,c])=>h+=`<tr><td><b>${k}</b></td><td><span class="pill ${c.first?"a":"r"}">${c.first}/${c.tried}</span></td><td>${[...c.qs].slice(0,6).join(", ")}${c.qs.size>6?", ...":""}</td></tr>`);h+=`</table>`;}
  h+=`<h3>Secure</h3>${strong.length?`<p>${strong.map(([k])=>k).join(" · ")}</p>`:`<p class="note">None yet.</p>`}
  <div class="btns"><button class="b pri" id="wa">Send report to Sir on WhatsApp</button><button class="b" id="cp">Copy summary</button><button class="b" id="rs">Reset my progress</button></div><p class="note" id="cpm"></p></div>`;
  $m.innerHTML=h;
  const summary=`WMA11 walkthroughs${S.name?" ("+S.name+")":""}: ${finished} questions done, concept checks right first time ${right}/${tot}.`+(weak.length?`\nRevisit: ${weak.slice(0,12).map(([k,c])=>`${k} (${c.first}/${c.tried})`).join(", ")}`:"");
  document.getElementById("wa").onclick=()=>window.open("https://wa.me/?text="+encodeURIComponent(summary),"_blank");
  document.getElementById("cp").onclick=()=>{const ok=()=>document.getElementById("cpm").textContent="Copied.";if(navigator.clipboard)navigator.clipboard.writeText(summary).then(ok,()=>{document.getElementById("cpm").textContent=summary;});else document.getElementById("cpm").textContent=summary;};
  document.getElementById("rs").onclick=()=>{const b=document.getElementById("rs");if(b.dataset.sure){S.prog={};save();render();}else{b.dataset.sure=1;b.textContent="Click again to erase all progress";}};
}
document.getElementById("stopBtn").onclick=()=>synth&&synth.cancel();
render();
