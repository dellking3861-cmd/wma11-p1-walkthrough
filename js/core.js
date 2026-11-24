"use strict";
/* Maths markup helpers used by every data file */
const F=(a,b)=>`<span class="fr"><span>${a}</span><span>${b}</span></span>`;
const R=x=>`&radic;<span class="rt">${x}</span>`;
const P=(l,t,m)=>`<div class="pt"><span class="l">${l}</span><span>${t}</span><span class="mks">(${m})</span></div>`;
const C=(k,q,o)=>({c:{k,q,o}});

/* Registry of question sets. Each data file calls WT.add(set). */
const WT={sets:[],add(s){this.sets.push(s);},get(id){return this.sets.find(s=>s.id===id);}};

/* Generic plot: {fns:[f or {f,dash,color}], x:[a,b], y:[a,b], pts:[[x,y,label,dx,dy]], h:[[y,label]], v:[[x,label]], xt:[[x,label]], label} */
function plot(sp,id){
  const W=sp.w||400,H=sp.h||250,[x0,x1]=sp.x,[y0,y1]=sp.y;
  const X=x=>(x-x0)/(x1-x0)*W, Y=y=>H-(y-y0)/(y1-y0)*H;
  let body="";
  for(const fn of sp.fns||[]){const f=typeof fn==="function"?fn:fn.f;const col=(fn.color)||"#0f8b8d";let d="",pen=false;
    for(let i=0;i<=600;i++){const x=x0+(x1-x0)*i/600,y=f(x);if(!isFinite(y)||Math.abs(y)>1e6||y>y1+(y1-y0)||y<y0-(y1-y0)){pen=false;continue;}
      d+=(pen?"L":"M")+X(x).toFixed(1)+","+Y(y).toFixed(1);pen=true;}
    body+=`<path d="${d}" fill="none" stroke="${col}" stroke-width="2.5" ${fn.dash?'stroke-dasharray="6 5"':""} clip-path="url(#c${id})"/>`;}
  for(const [y,l] of sp.h||[])body+=`<line x1="0" y1="${Y(y)}" x2="${W}" y2="${Y(y)}" stroke="#c0392b" stroke-dasharray="6 5"/><text x="${W-6}" y="${Y(y)-5}" text-anchor="end" font-size="13" fill="#c0392b" font-weight="600">${l||""}</text>`;
  for(const [x,l] of sp.v||[])body+=`<line x1="${X(x)}" y1="0" x2="${X(x)}" y2="${H}" stroke="#c0392b" stroke-dasharray="6 5"/><text x="${X(x)+5}" y="${H-8}" font-size="13" fill="#c0392b" font-weight="600">${l||""}</text>`;
  for(const [x,l] of sp.xt||[])body+=`<text x="${X(x)-6}" y="${Y(0)+16}" font-size="12" fill="#5d6678">${l}</text>`;
  for(const p of sp.pts||[])body+=`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4" fill="#14213d"/><text x="${X(p[0])+(p[3]||6)}" y="${Y(p[1])+(p[4]||-8)}" font-size="13" fill="#14213d" font-weight="600">${p[2]||""}</text>`;
  return `<svg class="sk" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs><clipPath id="c${id}"><rect width="${W}" height="${H}"/></clipPath></defs>
  <line x1="0" y1="${Y(0)}" x2="${W}" y2="${Y(0)}" stroke="#8a94a6"/><line x1="${X(0)}" y1="0" x2="${X(0)}" y2="${H}" stroke="#8a94a6"/>
  <text x="${W-12}" y="${Y(0)-6}" font-size="13" fill="#5d6678">x</text><text x="${X(0)+6}" y="13" font-size="13" fill="#5d6678">y</text>${body}
  <text x="10" y="18" font-size="13" fill="#5d6678">${sp.label||""}</text></svg>`;
}

/* Voice */
const synth=window.speechSynthesis||null;let voice=null;
function pickVoice(){if(!synth)return;const v=synth.getVoices();voice=v.find(x=>/en-GB/i.test(x.lang))||v.find(x=>/^en/i.test(x.lang))||null;}
if(synth){pickVoice();synth.onvoiceschanged=pickVoice;}
function speakable(html){
  const d=document.createElement("div");d.innerHTML=html;
  d.querySelectorAll(".fr").forEach(e=>{const s=e.children;e.replaceWith(" "+s[0].textContent+" over "+s[1].textContent+" ");});
  d.querySelectorAll(".rt").forEach(e=>{e.replaceWith(" "+e.textContent+" ");});
  d.querySelectorAll("sup").forEach(e=>{const t=e.textContent.trim();e.replaceWith(t==="2"?" squared ":t==="3"?" cubed ":" to the power "+t+" ");});
  d.querySelectorAll(".mks").forEach(e=>e.replaceWith(" for "+e.textContent.replace(/[()]/g,"")+" marks. "));
  let t=d.textContent;
  const map=[[/WMA11\/01 · /g,""],[/ · Q(\d+) · /g," question $1, "],[/marksOpen/g,"marks. Open"],[/√/g," root "],[/∛/g," cube root of "],[/²/g," squared "],[/³/g," cubed "],[/⁴/g," to the fourth "],[/⁵/g," to the fifth "],[/−/g," minus "],[/×/g," times "],[/÷/g," divided by "],[/≥/g," greater than or equal to "],[/≤/g," less than or equal to "],[/>/g," greater than "],[/</g," less than "],[/≠/g," not equal to "],[/⇒/g,", so "],[/→/g," becomes "],[/θ/g," theta "],[/½/g," a half "],[/¼/g," a quarter "],[/¾/g," three quarters "],[/°/g," degrees "],[/±/g," plus or minus "],[/\+/g," plus "],[/=/g," equals "],[/∫/g," integral of "],[/″/g," double dash "],[/′/g," dash "],[/₁/g," 1 "],[/₂/g," 2 "],[/₃/g," 3 "],[/π/g," pi "],[/\(a\)/g,"part a."],[/\(b\)/g,"part b."],[/\(c\)/g,"part c."],[/\(d\)/g,"part d."],[/\bf\(/g,"f of ("],[/\s+/g," "]];
  for(const [a,b] of map)t=t.replace(a,b);
  return t.trim();
}
function say(html){const on=document.getElementById("voiceOn");if(!synth||!on||!on.checked)return;synth.cancel();const u=new SpeechSynthesisUtterance(speakable(html));u.rate=+document.getElementById("rate").value;if(voice)u.voice=voice;u.lang=voice?voice.lang:"en-GB";synth.speak(u);}
/* Reuse a walkthrough from the guide selection, e.g. G("Jan 2025 · Q1"). */
function G(src){const g=WT.get("guide");const q=g&&g.qs.find(x=>x.src===src);if(!q)throw new Error("guide question missing: "+src);return {marks:q.marks,topic:q.topic,hints:q.hints,steps:q.steps};}
