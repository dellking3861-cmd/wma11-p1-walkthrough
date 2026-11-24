/* Study Guide selection: 13 past-paper questions with concept walkthroughs. */
/* ---------- sketches ---------- */
function sketch(kind){
  const W=400,H=250;let x0,x1,y0,y1,f,pts,label,extra="";
  if(kind==="sin"){x0=-3.6;x1=7.0;y0=-5;y1=5;f=x=>-4*Math.sin(x);pts=[[3*Math.PI/2,4,"P(3π/2, 4)",-30,-10],[5*Math.PI/3,4,"",0,0]];label="y = −4 sin x";pts.pop();}
  else{x0=-4;x1=4;y0=-5;y1=4;f=x=>2/x-1;pts=[[2,0,"(2/k, 0)",4,-8]];label="y = 2/x − k  (drawn with k = 1)";}
  const X=x=>(x-x0)/(x1-x0)*W, Y=y=>H-(y-y0)/(y1-y0)*H;
  const path=(a,b)=>{let d="";for(let i=0;i<=300;i++){const x=a+(b-a)*i/300,y=f(x);if(!isFinite(y))continue;d+=(d?"L":"M")+X(x).toFixed(1)+","+Y(Math.max(Math.min(y,y1+3),y0-3)).toFixed(1);}return `<path d="${d}" fill="none" stroke="#0f8b8d" stroke-width="2.5" clip-path="url(#c${kind})"/>`;};
  let curves=kind==="sin"?path(x0,x1):path(x0,-0.05)+path(0.05,x1);
  if(kind==="sin"){for(const [v,t] of [[Math.PI,"π"],[2*Math.PI,"2π"],[-Math.PI,"−π"]])extra+=`<text x="${X(v)-6}" y="${Y(0)+16}" font-size="12" fill="#5d6678">${t}</text>`;}
  else extra=`<line x1="0" y1="${Y(-1)}" x2="${W}" y2="${Y(-1)}" stroke="#c0392b" stroke-dasharray="6 5"/><text x="${W-48}" y="${Y(-1)+16}" font-size="13" fill="#c0392b" font-weight="600">y = −k</text>`;
  let s=`<svg class="sk" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs><clipPath id="c${kind}"><rect width="${W}" height="${H}"/></clipPath></defs>
  <line x1="0" y1="${Y(0)}" x2="${W}" y2="${Y(0)}" stroke="#8a94a6"/><line x1="${X(0)}" y1="0" x2="${X(0)}" y2="${H}" stroke="#8a94a6"/>
  <text x="${W-12}" y="${Y(0)-6}" font-size="13" fill="#5d6678">x</text><text x="${X(0)+6}" y="13" font-size="13" fill="#5d6678">y</text>${extra}${curves}`;
  for(const p of pts)s+=`<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4" fill="#14213d"/><text x="${X(p[0])+p[3]}" y="${Y(p[1])+p[4]}" font-size="13" fill="#14213d" font-weight="600">${p[2]}</text>`;
  return s+`<text x="10" y="18" font-size="13" fill="#5d6678">${label}</text></svg>`;
}

(function(){
const SRC=(lab,pg,ms,parts)=>`<div class="src"><div><span class="lab">${lab}</span></div><div class="open">Open your <b>Study Guide</b> at <b>page ${pg}</b> and read the question there.</div></div>
 ${parts.map(p=>P(p[0],p[1],p[2])).join("")}
 <p class="note">Official mark scheme for checking afterwards: Study Guide page ${ms}.</p>`;
const PAPER=[
{topic:"Integration",marks:3,src:"Jun 2024 · Q1",page:147,
 q:SRC("Jun 2024 · WMA11/01 · Q1 · 3 marks",147,152,[["","Integrate a sum of three terms (one is a fraction with x³ underneath). Each term in simplest form.",3]]),
 hints:[`Rewrite ${F(3,"2<i>x</i>³")} as ${F(3,2)}<i>x</i><sup>&minus;3</sup> before integrating.`,`Add 1 to each power, divide by the new power. The constant &minus;7 becomes &minus;7<i>x</i>. Finish with + <i>c</i>.`],
 steps:[
 {t:`Rewrite: 10<i>x</i>⁴ &minus; ${F(3,2)}<i>x</i><sup>&minus;3</sup> &minus; 7`},
 {t:`10<i>x</i>⁴ &rarr; ${F("10<i>x</i>⁵",5)} = 2<i>x</i>⁵ &nbsp; and &nbsp; &minus;7 &rarr; &minus;7<i>x</i>`,m:"M1"},
 {c:{q:`&int; &minus;${F(3,2)}<i>x</i><sup>&minus;3</sup> d<i>x</i> = ?`,o:[
   [`+${F(3,4)}<i>x</i><sup>&minus;2</sup>`,1,`Yes: &minus;${F(3,2)} &divide; (&minus;2) = +${F(3,4)}. Two negatives make a positive.`],
   [`&minus;${F(3,4)}<i>x</i><sup>&minus;2</sup>`,0,`You divided by the new power &minus;2, so the sign flips: &minus;${F(3,2)} &divide; (&minus;2) = +${F(3,4)}.`],
   [`&minus;${F(3,8)}<i>x</i><sup>&minus;4</sup>`,0,`Integrating raises the power: &minus;3 + 1 = &minus;2, not &minus;4.`],
   [`${F(9,2)}<i>x</i><sup>&minus;4</sup>`,0,`That is differentiating. Integrate: power up by 1, divide by the new power.`]]}},
 {t:`Two terms correct`,m:"A1"},
 {t:`<b>2<i>x</i>⁵ + ${F(3,4)}<i>x</i><sup>&minus;2</sup> &minus; 7<i>x</i> + <i>c</i></b>`,m:"A1"},
 {tip:`The last A1 needs everything simplified on one line with + <i>c</i>. Write &minus;7<i>x</i>, not &minus;7<i>x</i>¹.`}],
 ms:[["M1","Raises one power by 1"],["A1","Any two terms correct"],["A1","All correct, simplified, + c"]]},

{topic:"Integration",marks:4,src:"Jan 2025 · Q1",page:146,
 q:SRC("Jan 2025 · WMA11/01 · Q1 · 4 marks",146,151,[["","Integrate three terms: a power of x, a root, and a fraction with x³ underneath. Simplest form.",4]]),
 hints:[`Rewrite first: 6${R("<i>x</i>")} = 6<i>x</i><sup>½</sup> and ${F(2,"5<i>x</i>³")} = ${F(2,5)}<i>x</i><sup>&minus;3</sup>.`,`Dividing by ${F(3,2)} is the same as multiplying by ${F(2,3)}.`],
 steps:[
 {t:`Rewrite: 8<i>x</i>³ &minus; 6<i>x</i><sup>½</sup> &minus; ${F(2,5)}<i>x</i><sup>&minus;3</sup>`},
 {t:`8<i>x</i>³ &rarr; 2<i>x</i>⁴`,m:"M1 A1"},
 {c:{q:`&int; &minus;6<i>x</i><sup>½</sup> d<i>x</i> = ?`,o:[
   [`&minus;4<i>x</i><sup>3/2</sup>`,1,`Correct: &minus;6 &times; ${F(2,3)} = &minus;4.`],
   [`&minus;9<i>x</i><sup>3/2</sup>`,0,`You multiplied by ${F(3,2)}. Dividing by ${F(3,2)} means multiplying by ${F(2,3)}.`],
   [`&minus;3<i>x</i><sup>&minus;½</sup>`,0,`That is differentiating. The power must go up: ½ + 1 = ${F(3,2)}.`],
   [`&minus;6<i>x</i><sup>3/2</sup>`,0,`You raised the power but forgot to divide by it.`]]}},
 {c:{q:`&int; &minus;${F(2,5)}<i>x</i><sup>&minus;3</sup> d<i>x</i> = ?`,o:[
   [`+${F(1,5)}<i>x</i><sup>&minus;2</sup>`,1,`Yes: &minus;${F(2,5)} &divide; (&minus;2) = +${F(1,5)}, which is ${F(1,"5<i>x</i>²")}.`],
   [`&minus;${F(1,5)}<i>x</i><sup>&minus;2</sup>`,0,`Two negatives: &minus;${F(2,5)} &divide; (&minus;2) is positive.`],
   [`${F(6,5)}<i>x</i><sup>&minus;4</sup>`,0,`That is differentiating.`]]}},
 {t:`Two terms correct`,m:"A1"},
 {t:`<b>2<i>x</i>⁴ &minus; 4<i>x</i><sup>3/2</sup> + ${F(1,"5<i>x</i>²")} + <i>c</i></b>`,m:"A1"},
 {tip:`Tutor tip from your guide: the final mark is usually lost to a missing + <i>c</i> or a slip in the third term. Check by differentiating back.`}],
 ms:[["M1","Raises one power by 1"],["A1","One term correct"],["A1","Any two terms correct"],["A1","All correct + c on one line"]]},

{topic:"Indices",marks:4,src:"Oct 2023 · Q2",page:8,
 q:SRC("Oct 2023 · WMA11/01 · Q2 · 4 marks",8,16,[["(a)","Express a power of <i>a</i> as <i>kx<sup>n</sup></i>",1],["(b)","Express a fraction involving <i>b</i> as <i>kx<sup>n</sup></i>",1],["(c)","Express a power of <i>ab</i>/2 as <i>kx<sup>n</sup></i>",2]]),
 hints:[`Write <i>b</i> as a power first: ${F(16,R("<i>x</i>"))} = 16<i>x</i><sup>&minus;½</sup>. A power outside a bracket applies to the number AND the <i>x</i>.`,`For (c), simplify <i>ab</i>/2 first to a single <i>kx<sup>n</sup></i>, then apply the power &minus;${F(4,3)}.`],
 steps:[
 {t:`<i>a</i> = ${F(1,64)}<i>x</i>², &nbsp; <i>b</i> = 16<i>x</i><sup>&minus;½</sup>`},
 {t:`(a) <i>a</i><sup>½</sup> = (${F(1,64)})<sup>½</sup>(<i>x</i>²)<sup>½</sup> = <b>${F(1,8)}<i>x</i></b>`,m:"B1"},
 {c:{q:`<i>b</i>³ = (16<i>x</i><sup>&minus;½</sup>)³ = ?`,o:[
   [`4096<i>x</i><sup>&minus;3/2</sup>`,1,`Yes: 16³ = 4096 and (&minus;½) &times; 3 = &minus;${F(3,2)}.`],
   [`48<i>x</i><sup>&minus;3/2</sup>`,0,`Cube the 16, don't multiply it by 3: 16³ = 4096.`],
   [`16<i>x</i><sup>&minus;3/2</sup>`,0,`The power applies to the 16 as well.`]]}},
 {t:`(b) ${F(16,"4096<i>x</i><sup>&minus;3/2</sup>")} = <b>${F(1,256)}<i>x</i><sup>3/2</sup></b>`,m:"B1"},
 {t:`(c) ${F("<i>ab</i>",2)} = ½ &times; ${F(1,64)}<i>x</i>² &times; 16<i>x</i><sup>&minus;½</sup> = ${F(1,8)}<i>x</i><sup>3/2</sup>`,m:"M1"},
 {c:{q:`(${F(1,8)}<i>x</i><sup>3/2</sup>)<sup>&minus;4/3</sup> = ?`,o:[
   [`16<i>x</i><sup>&minus;2</sup>`,1,`Correct: (${F(1,8)})<sup>&minus;4/3</sup> = 8<sup>4/3</sup> = 2⁴ = 16, and ${F(3,2)} &times; (&minus;${F(4,3)}) = &minus;2.`],
   [`${F(1,16)}<i>x</i><sup>&minus;2</sup>`,0,`A negative power flips the fraction: (${F(1,8)})<sup>&minus;4/3</sup> = 8<sup>4/3</sup> = 16.`],
   [`16<i>x</i>²`,0,`Multiply the powers: ${F(3,2)} &times; (&minus;${F(4,3)}) = &minus;2.`]]}},
 {t:`<b>16<i>x</i><sup>&minus;2</sup></b>`,m:"A1"},
 {tip:`Mark-scheme warning: writing ${F(16,R("<i>x</i>"))} = 16<i>x</i><sup>&minus;2</sup> loses both marks in (c). ${R("<i>x</i>")} is <i>x</i><sup>½</sup>.`}],
 ms:[["B1","(a) x/8"],["B1","(b) x^(3/2)/256"],["M1","(c) Correct use of index laws"],["A1","16x^(−2)"]]},

{topic:"Straight lines",marks:5,src:"Jan 2025 · Q2",page:77,
 q:SRC("Jan 2025 · WMA11/01 · Q2 · 5 marks",77,83,[["(a)",`Show the gradient of the line through A and B is <i>p</i>${R("3")} (show each step, no calculator)`,2],["(b)","Equation of the perpendicular line through A, as <i>y</i> = <i>mx</i> + <i>c</i>",3]]),
 hints:[`Gradient = change in <i>y</i> &divide; change in <i>x</i>. The <i>x</i> difference is 7${R("3")} &minus; (&minus;2${R("3")}) = 9${R("3")}.`,`Rationalise ${F(3,"9"+R("3"))} by multiplying top and bottom by ${R("3")}. Perpendicular gradient = &minus;1 &divide; gradient.`],
 steps:[
 {t:`<i>m</i> = ${F("8 &minus; 5","7"+R("3")+" &minus; (&minus;2"+R("3")+")")} = ${F(3,"9"+R("3"))}`,m:"M1"},
 {c:{q:`Rationalise ${F(3,"9"+R("3"))}:`,o:[
   [`${F(R("3"),9)}`,1,`Yes: ${F("3"+R("3"),27)} = ${F(R("3"),9)}, so <i>p</i> = ${F(1,9)}.`],
   [`3${R("3")}`,0,`Multiply top AND bottom by ${R("3")}: ${F("3"+R("3"),"9 &times; 3")}.`],
   [`${F(1,"3"+R("3"))}`,0,`Simplified, but not yet in the form <i>p</i>${R("3")}.`]]}},
 {t:`${F("3"+R("3"),27)} = ${F(1,9)}${R("3")}, &nbsp;<b><i>p</i> = ${F(1,9)}</b>`,m:"A1"},
 {tip:`"Show each step": the rationalising line must be written. ${F(1,9)}${R("3")} with no working scores 0.`},
 {c:{q:`Perpendicular gradient to ${F(R("3"),9)}:`,o:[
   [`&minus;3${R("3")}`,1,`Correct: &minus;${F(9,R("3"))} = &minus;${F("9"+R("3"),3)} = &minus;3${R("3")}.`],
   [`&minus;${F(R("3"),9)}`,0,`Flip it as well as changing the sign.`],
   [`${F(9,R("3"))}`,0,`Change the sign too.`]]}},
 {t:`Gradient of <i>l</i>₂ = &minus;3${R("3")}`,m:"B1ft"},
 {t:`<i>y</i> &minus; 5 = &minus;3${R("3")}(<i>x</i> + 2${R("3")})`,m:"M1"},
 {t:`3${R("3")} &times; 2${R("3")} = 18, so <b><i>y</i> = &minus;3${R("3")}<i>x</i> &minus; 13</b>`,m:"A1"}],
 ms:[["M1","(a) Correct gradient expression"],["A1","p = 1/9 with rationalising shown"],["B1ft","(b) Perpendicular gradient"],["M1","Line through A with their gradient"],["A1","y = −3√3x − 13"]]},

{topic:"Area and cosine rule",marks:5,src:"Jan 2024 · Q2",page:94,
 q:SRC("Jan 2024 · WMA11/01 · Q2 · 5 marks",94,103,[["(a)","Use the given area to find sin &theta;",2],["(b)","Given &theta; &gt; 90, find BC to 3 s.f.",3]]),
 hints:[`Area = ½ &times; 15 &times; 25 &times; sin &theta; = 100.`,`sin<sup>&minus;1</sup> gives the acute angle. The obtuse one is 180&deg; minus it. Then use the cosine rule for BC.`],
 steps:[
 {t:`100 = ½ &times; 15 &times; 25 &times; sin &theta;`,m:"M1"},
 {t:`sin &theta; = ${F(200,375)} = <b>${F(8,15)}</b>`,m:"A1"},
 {c:{q:`sin<sup>&minus;1</sup>(${F(8,15)}) = 32.2&deg;. Given &theta; &gt; 90, &theta; = ?`,o:[
   [`147.8&deg;`,1,`Yes: 180&deg; &minus; 32.2&deg;. Sine is positive in both.`],
   [`32.2&deg;`,0,`That's the acute answer. The question says &theta; &gt; 90.`],
   [`122.2&deg;`,0,`The second solution is 180&deg; &minus; 32.2&deg;, not 90&deg; + 32.2&deg;.`]]}},
 {t:`BC² = 15² + 25² &minus; 2(15)(25) cos 147.77&deg;`,m:"M1 dM1"},
 {t:`BC² = 1484.4... &rArr; <b>BC = 38.5 cm</b>`,m:"A1"},
 {tip:`Examiner report: making the obtuse angle acute is the classic loss here. With 32.2&deg; you get 14.7 cm and lose 2 marks.`}],
 ms:[["M1","(a) Uses ½ab sin C = 100"],["A1","sin θ = 8/15"],["M1","(b) Cosine rule with their angle"],["M1","dM1: uses the obtuse angle"],["A1","BC = 38.5 cm"]]},

{topic:"Surds",marks:6,src:"Oct 2023 · Q3",page:8,
 q:SRC("Oct 2023 · WMA11/01 · Q3 · 6 marks",8,14,[["(a)",`Write a surd fraction in the form <i>a</i>${R("3")} + <i>b</i>${R("5")} (no calculator)`,3],["(b)","Hence solve a surd equation in <i>x</i>, simplest form",3]]),
 hints:[`Multiply top and bottom by the conjugate (2${R("3")} &minus; ${R("5")}). The denominator becomes 12 &minus; 5 = 7.`,`For (b), expand, collect the <i>x</i> terms, then notice 40 &minus; 5${R("15")} = 5(8 &minus; ${R("15")}). That is part (a)'s numerator.`],
 steps:[
 {t:`${F("8 &minus; "+R("15"),"2"+R("3")+" + "+R("5"))} &times; ${F("2"+R("3")+" &minus; "+R("5"),"2"+R("3")+" &minus; "+R("5"))}, &nbsp; denominator 12 &minus; 5 = 7`,m:"M1"},
 {c:{q:`Expand and simplify (8 &minus; ${R("15")})(2${R("3")} &minus; ${R("5")}).`,o:[
   [`21${R("3")} &minus; 14${R("5")}`,1,`Correct: 16${R("3")} &minus; 8${R("5")} &minus; 2${R("45")} + ${R("75")}, with ${R("45")} = 3${R("5")} and ${R("75")} = 5${R("3")}.`],
   [`11${R("3")} &minus; 14${R("5")}`,0,`&minus;${R("15")} &times; &minus;${R("5")} = +${R("75")} = +5${R("3")}, so 16 + 5 = 21.`],
   [`21${R("3")} &minus; 2${R("5")}`,0,`&minus;2${R("45")} = &minus;6${R("5")}, so &minus;8${R("5")} &minus; 6${R("5")} = &minus;14${R("5")}.`],
   [`16${R("3")} &minus; 8${R("5")}`,0,`You only multiplied the 8. The &minus;${R("15")} gives two more terms.`]]}},
 {t:`${F("21"+R("3")+" &minus; 14"+R("5"),7)}`,m:"dM1"},
 {t:`= <b>3${R("3")} &minus; 2${R("5")}</b>`,m:"A1"},
 {t:`(b) <i>x</i>${R("5")} + 5${R("15")} = 40 &minus; 2<i>x</i>${R("3")} &rArr; <i>x</i>(2${R("3")} + ${R("5")}) = 40 &minus; 5${R("15")}`,m:"M1"},
 {t:`<i>x</i> = ${F("40 &minus; 5"+R("15"),"2"+R("3")+" + "+R("5"))} = 5 &times; ${F("8 &minus; "+R("15"),"2"+R("3")+" + "+R("5"))}`,m:"A1"},
 {t:`= 5(3${R("3")} &minus; 2${R("5")}) = <b>15${R("3")} &minus; 10${R("5")}</b>`,m:"A1ft"},
 {tip:`"Hence" means part (a) does the work. 5${R("3")} &times; ${R("5")} = 5${R("15")}.`}],
 ms:[["M1","(a) Multiplies by the conjugate"],["dM1","Simplifies to √3 and √5 terms over 7"],["A1","3√3 − 2√5"],["M1","(b) Expands and collects x terms"],["A1","x = (40 − 5√15)/(2√3 + √5)"],["A1ft","15√3 − 10√5"]]},

{topic:"Indices (hidden quadratic)",marks:6,src:"Jan 2024 · Q4",page:7,
 q:SRC("Jan 2024 · WMA11/01 · Q4 · 6 marks",7,13,[["(a)","Using <i>p</i> = 2<sup><i>x</i></sup>, show the equation becomes a given quadratic in <i>p</i> (all stages)",3],["(b)","Hence solve the original equation (no calculator)",3]]),
 hints:[`4<sup><i>x</i></sup> = <i>p</i>², 2<sup><i>x</i>+3</sup> = 8<i>p</i>, 2<sup><i>x</i>&minus;1</sup> = ${F("<i>p</i>",2)}.`,`Multiply through by 2 to clear the fraction. In (b), factorise, then turn each <i>p</i> back into 2<sup><i>x</i></sup>.`],
 steps:[
 {c:{q:`2<sup><i>x</i>&minus;1</sup> in terms of <i>p</i> is:`,o:[
   [`${F("<i>p</i>",2)}`,1,`Yes: 2<sup><i>x</i></sup> &divide; 2¹.`],
   [`<i>p</i> &minus; 1`,0,`Subtracting in the power means dividing: 2<sup><i>x</i></sup> &divide; 2.`],
   [`2<i>p</i>`,0,`&minus;1 in the power divides by 2, it doesn't multiply.`]]}},
 {t:`4<sup><i>x</i></sup> = <i>p</i>², &nbsp;2<sup><i>x</i>+3</sup> = 8<i>p</i>, &nbsp;2<sup><i>x</i>&minus;1</sup> = ${F("<i>p</i>",2)}`,m:"B1"},
 {t:`2<i>p</i>² &minus; 8<i>p</i> = ${F("17<i>p</i>",2)} &minus; 4`,m:"M1"},
 {t:`&times;2: 4<i>p</i>² &minus; 16<i>p</i> = 17<i>p</i> &minus; 8 &rArr; <b>4<i>p</i>² &minus; 33<i>p</i> + 8 = 0</b>`,m:"A1*"},
 {tip:`Given answer: the intermediate line 2<i>p</i>² &minus; 8<i>p</i> = ${F("17<i>p</i>",2)} &minus; 4 must be seen.`},
 {t:`(4<i>p</i> &minus; 1)(<i>p</i> &minus; 8) = 0 &rArr; <i>p</i> = ¼ or 8 &nbsp;(factorising shown: no calculator)`,m:"M1"},
 {c:{q:`2<sup><i>x</i></sup> = ¼ gives <i>x</i> = ?`,o:[
   [`&minus;2`,1,`Yes: ¼ = 2<sup>&minus;2</sup>.`],[`¼`,0,`¼ is the value of 2<sup><i>x</i></sup>, not <i>x</i>.`],[`2`,0,`2² = 4, not ¼. Negative power.`]]}},
 {t:`2<sup><i>x</i></sup> = ¼ &rArr; <i>x</i> = &minus;2; &nbsp;2<sup><i>x</i></sup> = 8 &rArr; <i>x</i> = 3`,m:"M1"},
 {t:`<b><i>x</i> = &minus;2, 3</b>`,m:"A1"}],
 ms:[["B1","(a) Uses an index law (p², 8p or p/2)"],["M1","Writes the equation in p"],["A1*","Reaches 4p² − 33p + 8 = 0 with all stages"],["M1","(b) Non-calculator solution of the quadratic"],["M1","Sets 2^x = k and solves"],["A1","x = −2 and 3"]]},

{topic:"Simultaneous equations",marks:6,src:"Jun 2024 · Q4",page:41,
 q:SRC("Jun 2024 · WMA11/01 · Q4 · 6 marks",41,49,[["(a)","Two curves meet at a single point P: show a given equation in <i>k</i>",3],["(b)","Hence find the coordinates of P",3]]),
 hints:[`Set the two curves equal and collect into one quadratic in <i>x</i>.`,`"Single point" means equal roots: <i>b</i>² &minus; 4<i>ac</i> = 0.`],
 steps:[
 {t:`<i>x</i>² + <i>kx</i> &minus; 9 = &minus;3<i>x</i>² &minus; 5<i>x</i> + <i>k</i> &rArr; 4<i>x</i>² + (<i>k</i> + 5)<i>x</i> &minus; 9 &minus; <i>k</i> = 0`,m:"M1"},
 {c:{q:`"Meet at a single point" means:`,o:[
   [`<i>b</i>² &minus; 4<i>ac</i> = 0`,1,`Yes, one repeated root.`],[`<i>b</i>² &minus; 4<i>ac</i> &gt; 0`,0,`&gt; 0 gives two points.`],[`<i>b</i>² &minus; 4<i>ac</i> &lt; 0`,0,`&lt; 0 means they never meet.`]]}},
 {t:`(<i>k</i> + 5)² &minus; 4(4)(&minus;9 &minus; <i>k</i>) = 0`,m:"M1"},
 {t:`<i>k</i>² + 10<i>k</i> + 25 + 144 + 16<i>k</i> = <b><i>k</i>² + 26<i>k</i> + 169 = 0</b>`,m:"A1*"},
 {c:{q:`<i>k</i>² + 26<i>k</i> + 169 = (<i>k</i> + 13)² = 0, so <i>k</i> = ?`,o:[
   [`&minus;13`,1,`Correct, a single value.`],[`&plusmn;13`,0,`(<i>k</i> + 13)² = 0 has only one root.`],[`13`,0,`<i>k</i> + 13 = 0 gives <i>k</i> = &minus;13.`]]}},
 {t:`<i>k</i> = &minus;13`,m:"B1"},
 {t:`4<i>x</i>² &minus; 8<i>x</i> + 4 = 0 &rArr; 4(<i>x</i> &minus; 1)² = 0 &rArr; <i>x</i> = 1`,m:"M1"},
 {t:`<i>y</i> = 1 &minus; 13 &minus; 9 = &minus;21 &nbsp; <b>P(1, &minus;21)</b>`,m:"A1"}],
 ms:[["M1","(a) Equates curves and collects terms"],["M1","Uses b² − 4ac = 0"],["A1*","k² + 26k + 169 = 0 with no errors"],["B1","(b) k = −13"],["M1","Substitutes k to find x"],["A1","(1, −21)"]]},

{topic:"Discriminant",marks:6,src:"Oct 2023 · Q6",page:24,
 q:SRC("Oct 2023 · WMA11/01 · Q6 · 6 marks",24,31,[["(a)","An equation with a fraction has two distinct real roots: show a given inequality in <i>p</i>",3],["(b)","Hence find the range of <i>p</i> using algebra",3]]),
 hints:[`Multiply both sides by (<i>x</i> + <i>p</i>), expand, and collect everything on one side as a quadratic in <i>x</i>.`,`Two distinct real roots: <i>b</i>² &minus; 4<i>ac</i> &gt; 0. Here <i>a</i> = 8, <i>b</i> = 4<i>p</i>, and <i>c</i> contains all the terms without <i>x</i>.`],
 steps:[
 {t:`4(<i>p</i> &minus; 2<i>x</i>)(<i>x</i> + <i>p</i>) = 12 + 15<i>p</i>`},
 {t:`&rArr; 8<i>x</i>² + 4<i>px</i> + 12 + 15<i>p</i> &minus; 4<i>p</i>² = 0`,m:"M1"},
 {c:{q:`For this quadratic in <i>x</i>, what is <i>c</i>?`,o:[
   [`12 + 15<i>p</i> &minus; 4<i>p</i>²`,1,`Yes. Everything without an <i>x</i> belongs in <i>c</i>.`],
   [`12 + 15<i>p</i>`,0,`The &minus;4<i>p</i>² has no <i>x</i> in it, so it is part of <i>c</i> too.`],
   [`12`,0,`Terms in <i>p</i> are constants here, because the quadratic is in <i>x</i>.`]]}},
 {t:`(4<i>p</i>)² &minus; 4 &times; 8 &times; (12 + 15<i>p</i> &minus; 4<i>p</i>²) &gt; 0`,m:"dM1"},
 {t:`144<i>p</i>² &minus; 480<i>p</i> &minus; 384 &gt; 0, &divide;48: <b>3<i>p</i>² &minus; 10<i>p</i> &minus; 8 &gt; 0</b>`,m:"A1*"},
 {tip:`Examiner report: dropped "invisible brackets" here gave wrong discriminants. Bracket (4<i>p</i>)² and the whole of <i>c</i>.`},
 {t:`(3<i>p</i> + 2)(<i>p</i> &minus; 4) = 0 &rArr; critical values &minus;${F(2,3)} and 4`,m:"M1"},
 {c:{q:`3<i>p</i>² &minus; 10<i>p</i> &minus; 8 &gt; 0 when:`,o:[
   [`<i>p</i> &lt; &minus;${F(2,3)} or <i>p</i> &gt; 4`,1,`Yes, &gt; 0 is outside the roots.`],
   [`&minus;${F(2,3)} &lt; <i>p</i> &lt; 4`,0,`That is where it is &lt; 0.`],
   [`<i>p</i> &lt; &minus;4 or <i>p</i> &gt; ${F(2,3)}`,0,`Check the signs: <i>p</i> &minus; 4 = 0 gives <i>p</i> = 4.`]]}},
 {t:`<b><i>p</i> &lt; &minus;${F(2,3)} or <i>p</i> &gt; 4</b>`,m:"M1 A1"}],
 ms:[["M1","(a) Multiplies out and collects, with an x² term"],["dM1","b² − 4ac with a, b, c in terms of p"],["A1*","3p² − 10p − 8 > 0 with all stages"],["M1","(b) Critical values by algebra (not calculator)"],["M1","Chooses the outside region"],["A1","p < −2/3 or p > 4"]]},

{topic:"Trig graphs and transformations",marks:6,src:"Oct 2025 · Q9",page:55,
 q:SRC("Oct 2025 · WMA11/01 · Q9 · 6 marks",55,61,[["(a)","Write down f(<i>x</i>) from the graph in Figure 3",2],["(b)(i)","Image of the maximum point P under a horizontal translation",2],["(b)(ii)","Image of P under a vertical stretch and reflection",2]]),
 hints:[`Look at the graph: it passes through the origin, goes DOWN first, has height 4 and period 2&pi;.`,`Inside the bracket: <i>x</i> &minus; ${F("&pi;",6)} moves the graph RIGHT. Outside: &minus;½ multiplies the <i>y</i>-values.`],
 steps:[
 {c:{q:`Which equation matches Figure 3?`,o:[
   [`<i>y</i> = &minus;4 sin <i>x</i>`,1,`Yes: through the origin, down first, amplitude 4.`],
   [`<i>y</i> = 4 sin <i>x</i>`,0,`4 sin <i>x</i> goes UP from the origin first. This one goes down.`],
   [`<i>y</i> = &minus;4 cos <i>x</i>`,0,`Cos curves don't pass through the origin.`],
   [`<i>y</i> = &minus;2 sin <i>x</i>`,0,`The peaks are at 4, so the amplitude is 4.`]]}},
 {t:`<b>f(<i>x</i>) = &minus;4 sin <i>x</i></b> &nbsp;(4 cos(<i>x</i> + ${F("&pi;",2)}) is also accepted)`,m:"M1 A1"},
 {svg:"sin"},
 {t:`P is the maximum at <i>x</i> = ${F("3&pi;",2)}: &minus;4 sin ${F("3&pi;",2)} = 4, so P(${F("3&pi;",2)}, 4)`},
 {t:`(i) Right by ${F("&pi;",6)}: ${F("3&pi;",2)} + ${F("&pi;",6)} = ${F("10&pi;",6)} = ${F("5&pi;",3)}. &nbsp;<b>(${F("5&pi;",3)}, 4)</b>`,m:"B1 B1"},
 {c:{q:`(ii) The image of P(${F("3&pi;",2)}, 4) on <i>y</i> = &minus;½f(<i>x</i>) is:`,o:[
   [`(${F("3&pi;",2)}, &minus;2)`,1,`Yes: <i>y</i> &times; (&minus;½), <i>x</i> unchanged.`],
   [`(${F("3&pi;",2)}, 2)`,0,`The minus sign reflects in the <i>x</i>-axis, so 4 becomes &minus;2.`],
   [`(&minus;3&pi;, 4)`,0,`A number outside f acts on <i>y</i>, not <i>x</i>.`]]}},
 {t:`<b>(${F("3&pi;",2)}, &minus;2)</b>`,m:"B1 B1"},
 {tip:`Mark scheme: degrees are not allowed in this question, and the <i>x</i>-coordinate must be a single fraction such as ${F("5&pi;",3)}.`}],
 ms:[["M1","(a) Sine/cosine with amplitude 4, period 2π, through origin"],["A1","f(x) = −4 sin x or equivalent"],["B1","(b)(i) One coordinate correct"],["B1","(5π/3, 4)"],["B1","(b)(ii) One coordinate correct"],["B1","(3π/2, −2)"]]},

{topic:"Radians and sectors",marks:9,src:"Oct 2024 · Q5",page:112,
 q:SRC("Oct 2024 · WMA11/01 · Q5 · 9 marks",112,119,[["(a)","Perimeter of the sector-shaped plot",2],["(b)","Show the area of region R₂ is 3.75 km²",3],["(c)","Length of AP to the nearest 100 m",4]]),
 hints:[`Arc = <i>r</i>&theta;, sector area = ½<i>r</i>²&theta;, with &theta; = 1.2 rad and <i>r</i> = 5.`,`R₁ = 3 &times; R₂ means R₂ is a quarter of the sector. R₂ is triangle AOP: ½ &times; 5 &times; OP &times; sin 1.2. Then the cosine rule for AP.`],
 steps:[
 {t:`Arc AB = 5 &times; 1.2 = 6 km; perimeter = 5 + 5 + 6 = <b>16 km</b>`,m:"M1 A1"},
 {t:`(b) Sector area = ½ &times; 5² &times; 1.2 = 15 km²`,m:"M1"},
 {c:{q:`R₁ = 3 &times; R₂ and R₁ + R₂ = 15. So R₂ = ?`,o:[
   [`${F(15,4)}`,1,`Yes: 4 equal parts, R₂ is one of them.`],[`${F(15,3)} = 5`,0,`R₁ + R₂ = 3 parts + 1 part = 4 parts.`],[`${F(45,4)}`,0,`That is R₁.`]]}},
 {t:`R₂ = ¼ &times; 15 = <b>3.75 km²</b> (written with the sector formula and numbers shown)`,m:"M1 A1*"},
 {t:`(c) R₂ is triangle AOP: ½ &times; 5 &times; OP &times; sin 1.2 = 3.75`,m:"M1"},
 {t:`OP = ${F(1.5,"sin 1.2")} = 1.609... km`,m:"A1"},
 {c:{q:`To find AP in triangle AOP, use:`,o:[
   [`the cosine rule`,1,`Yes: two sides (5 and 1.609) and the angle between them (1.2 rad).`],
   [`Pythagoras`,0,`Triangle AOP is not right-angled.`],
   [`arc length <i>r</i>&theta;`,0,`AP is a straight line, not an arc.`]]}},
 {t:`AP² = 5² + 1.609² &minus; 2(5)(1.609) cos 1.2`,m:"M1"},
 {t:`AP = 4.66... &rArr; <b>4.7 km</b> (4700 m)`,m:"A1"},
 {tip:`Calculator in RADIANS for sin 1.2 and cos 1.2. Keep OP unrounded (ANS key).`}],
 ms:[["M1","(a) Uses rθ"],["A1","16 km"],["M1","(b) Uses ½r²θ"],["M1","Takes a quarter of the sector"],["A1*","3.75 km² shown"],["M1","(c) Triangle area equation for OP"],["A1","OP = 1.6..."],["M1","Cosine rule for AP"],["A1","4.7 km"]]},

{topic:"Normals and integration",marks:7,src:"Oct 2024 · Q8",page:133,
 q:SRC("Oct 2024 · WMA11/01 · Q8 · 7 marks",133,141,[["(a)","Use the normal at P to show the given value of <i>k</i>",3],["(b)","Hence find f(<i>x</i>)",4]]),
 hints:[`The normal gradient is &minus;${F(1,24)}, so the tangent gradient is 24. Set f&prime;(3) = 24.`,`Integrate f&prime;(<i>x</i>), then find <i>c</i> using P. Get P's <i>y</i>-coordinate from the normal line at <i>x</i> = 3.`],
 steps:[
 {c:{q:`The normal has gradient &minus;${F(1,24)}. The tangent gradient at P is:`,o:[
   [`24`,1,`Yes: &minus;1 &divide; (&minus;${F(1,24)}) = 24.`],[`&minus;24`,0,`&minus;1 &divide; (&minus;${F(1,24)}) is positive.`],[`${F(1,24)}`,0,`Flip it: the reciprocal of ${F(1,24)} is 24.`]]}},
 {t:`f&prime;(3) = 24`,m:"B1"},
 {t:`4(9) + 3<i>k</i> + 3 = 24 &rArr; 3<i>k</i> + 39 = 24`,m:"M1"},
 {t:`<b><i>k</i> = &minus;5</b>`,m:"A1*"},
 {t:`(b) f(<i>x</i>) = &int;(4<i>x</i>² &minus; 5<i>x</i> + 3) d<i>x</i> = ${F(4,3)}<i>x</i>³ &minus; ${F(5,2)}<i>x</i>² + 3<i>x</i> + <i>c</i>`,m:"M1 A1"},
 {c:{q:`Where does the <i>y</i>-coordinate of P come from?`,o:[
   [`The normal line at <i>x</i> = 3`,1,`Yes. P lies on the normal: <i>y</i> = &minus;${F(3,24)} + 5 = ${F(39,8)}.`],
   [`f&prime;(3)`,0,`f&prime;(3) = 24 is a gradient, not a <i>y</i>-value.`],
   [`It isn't needed`,0,`It is: it's how you find <i>c</i>.`]]}},
 {t:`P(3, ${F(39,8)}): 36 &minus; 22.5 + 9 + <i>c</i> = ${F(39,8)}`,m:"dM1"},
 {t:`<i>c</i> = &minus;${F(141,8)} &nbsp;<b>f(<i>x</i>) = ${F(4,3)}<i>x</i>³ &minus; ${F(5,2)}<i>x</i>² + 3<i>x</i> &minus; ${F(141,8)}</b>`,m:"A1"}],
 ms:[["B1","(a) Tangent gradient 24"],["M1","Solves f′(3) = 24"],["A1*","k = −5"],["M1","(b) Integrates, a power raised"],["A1","(4/3)x³ − (5/2)x² + 3x"],["dM1","Uses (3, 39/8) to find c"],["A1","c = −141/8, full f(x)"]]},

{topic:"Reciprocal graph and inequality",marks:8,src:"Jan 2025 · Q7",page:39,
 q:SRC("Jan 2025 · WMA11/01 · Q7 · 8 marks",39,44,[["(a)","Sketch a reciprocal curve: axis intercepts and horizontal asymptote in terms of <i>k</i>",3],["(b)","A line meets the curve at 2 distinct points: find the range of <i>k</i>",5]]),
 hints:[`<i>y</i> = ${F(2,"<i>x</i>")} &minus; <i>k</i> is <i>y</i> = ${F(2,"<i>x</i>")} moved DOWN by <i>k</i>. Set <i>y</i> = 0 to find where it crosses the <i>x</i>-axis.`,`Set the line equal to the curve, multiply by <i>x</i>, form a quadratic, then <i>b</i>² &minus; 4<i>ac</i> &gt; 0. Remember <i>k</i> &gt; 0.`],
 steps:[
 {c:{q:`The horizontal asymptote of <i>y</i> = ${F(2,"<i>x</i>")} &minus; <i>k</i> is:`,o:[
   [`<i>y</i> = &minus;<i>k</i>`,1,`Yes: the whole curve moves down by <i>k</i>.`],
   [`<i>y</i> = <i>k</i>`,0,`&minus;<i>k</i> outside moves the graph down, not up.`],
   [`<i>x</i> = &minus;<i>k</i>`,0,`A horizontal asymptote is "<i>y</i> = ...". Examiner report: drawing it vertically was a common error.`]]}},
 {svg:"recip"},
 {t:`Two branches, translated down`,m:"B1"},
 {t:`Horizontal asymptote <i>y</i> = &minus;<i>k</i> (vertical one is <i>x</i> = 0)`,m:"B1"},
 {t:`Crosses the <i>x</i>-axis where ${F(2,"<i>x</i>")} = <i>k</i>: <b>(${F(2,"<i>k</i>")}, 0)</b>. No <i>y</i>-intercept.`,m:"B1"},
 {t:`(b) &minus;<i>kx</i> &minus; 6 = ${F(2,"<i>x</i>")} &minus; <i>k</i> &rArr; &minus;<i>kx</i>² &minus; 6<i>x</i> = 2 &minus; <i>kx</i> &rArr; <i>kx</i>² + (6 &minus; <i>k</i>)<i>x</i> + 2 = 0`,m:"M1"},
 {t:`(6 &minus; <i>k</i>)² &minus; 4 &times; <i>k</i> &times; 2 &gt; 0 &rArr; <i>k</i>² &minus; 20<i>k</i> + 36 &gt; 0`,m:"dM1 A1"},
 {t:`(<i>k</i> &minus; 2)(<i>k</i> &minus; 18) &rArr; critical values 2 and 18`,m:"M1"},
 {c:{q:`<i>k</i>² &minus; 20<i>k</i> + 36 &gt; 0 with <i>k</i> positive gives:`,o:[
   [`0 &lt; <i>k</i> &lt; 2 or <i>k</i> &gt; 18`,1,`Yes: outside the roots, and <i>k</i> &gt; 0.`],
   [`2 &lt; <i>k</i> &lt; 18`,0,`That is where it is &lt; 0. You need &gt; 0: outside.`],
   [`<i>k</i> &gt; 18 only`,0,`Values between 0 and 2 also work.`]]}},
 {t:`<b>0 &lt; <i>k</i> &lt; 2 or <i>k</i> &gt; 18</b>`,m:"A1"}],
 ms:[["B1","(a) Correct shape, two branches"],["B1","Asymptote y = −k"],["B1","(2/k, 0)"],["M1","(b) Forms the 3-term quadratic"],["dM1","Uses b² − 4ac with their a, b, c"],["A1","k² − 20k + 36 (> 0)"],["M1","Critical values, outside region"],["A1","0 < k < 2 or k > 18"]]}
];

/* ---------- concept tags and extra concept checks ---------- */
const TAGS={0:{2:"Integrating negative powers"},1:{2:"Integrating fractional powers",3:"Integrating negative powers"},2:{2:"Power of a product",5:"Negative and fractional indices"},
3:{1:"Rationalising the denominator",4:"Perpendicular gradients"},4:{2:"Obtuse angle from sine"},5:{1:"Expanding surd brackets"},6:{0:"Index laws",6:"Negative indices"},
7:{1:"Meaning of the discriminant",4:"Repeated roots"},8:{2:"Identifying a, b and c",7:"Quadratic inequality regions"},9:{0:"Reading trig graphs",5:"Transformations outside f"},
10:{2:"Ratios of areas",6:"Choosing sine or cosine rule"},11:{0:"Normal and tangent gradients",5:"Using a point to find c"},12:{0:"Asymptotes",8:"Quadratic inequality regions"}};
const EXTRA={
0:[[0,C("Rewriting before integrating",`Why rewrite ${F(3,"2<i>x</i>³")} before integrating?`,[
  [`The rule <i>x</i><sup><i>n</i></sup> &rarr; ${F("<i>x</i><sup><i>n</i>+1</sup>","<i>n</i>+1")} only works on powers of <i>x</i>, so it must become ${F(3,2)}<i>x</i><sup>&minus;3</sup> first`,1,`Exactly. Every P1 integration starts by writing each term as <i>kx<sup>n</sup></i>.`],
  [`So you can integrate the top and bottom separately`,0,`Never valid. Integrate powers of <i>x</i>, not numerators and denominators.`],
  [`It isn't needed: &int;${F(1,"<i>x</i>³")} d<i>x</i> = ${F(1,"<i>x</i>⁴")}`,0,`${F(1,"<i>x</i>³")} = <i>x</i><sup>&minus;3</sup>, which integrates to ${F("<i>x</i><sup>&minus;2</sup>","&minus;2")}. The power goes up, not down.`]])],
 [3,C("Integrating constants",`&int; &minus;7 d<i>x</i> = ?`,[
  [`&minus;7<i>x</i>`,1,`Yes: &minus;7 = &minus;7<i>x</i>⁰, power up to <i>x</i>¹, divide by 1.`],
  [`0`,0,`That is differentiating. Integrating a constant gives constant &times; <i>x</i>.`],
  [`&minus;7`,0,`The power of <i>x</i> must rise from 0 to 1, so it becomes &minus;7<i>x</i>.`]])]],
1:[[0,C("Roots as powers",`Write 6${R("<i>x</i>")} as a power of <i>x</i>.`,[
  [`6<i>x</i><sup>½</sup>`,1,`Correct: a square root is the power ½.`],
  [`6<i>x</i>²`,0,`A square root is the power ½, not 2.`],
  [`6<i>x</i><sup>&minus;½</sup>`,0,`That would be ${F(6,R("<i>x</i>"))}. A root on top is a positive power.`]])],
 [6,C("Constant of integration",`Why must the answer have + <i>c</i>?`,[
  [`Differentiating removes constants, so any constant could have been there`,1,`Yes. <i>c</i> stands for the unknown constant. Leaving it out costs the last mark.`],
  [`Only because the question has a number in it`,0,`Every indefinite integral needs + <i>c</i>, whatever the question looks like.`],
  [`It is optional in the exam`,0,`It isn't. The final A1 needs + <i>c</i>.`]])]],
2:[[1,C("Fractional indices",`<i>a</i><sup>½</sup> means:`,[
  [`${R("<i>a</i>")}`,1,`Yes: the power ½ is the square root.`],
  [`${F("<i>a</i>",2)}`,0,`The power ½ is a square root, not halving.`],
  [`<i>a</i>²`,0,`That is the power 2. ½ is the opposite: the root.`]])],
 [5,C("Fractional indices",`8<sup>4/3</sup> = ?`,[
  [`16`,1,`Yes: (∛8)⁴ = 2⁴ = 16. Root first, then power.`],
  [`${F(32,3)}`,0,`A power of ${F(4,3)} doesn't multiply by ${F(4,3)}. It means cube root, then fourth power.`],
  [`8`,0,`∛8 = 2, then 2⁴ = 16.`]])]],
3:[[0,C("Gradient formula",`The gradient between two points is:`,[
  [`${F("<i>y</i>₂ &minus; <i>y</i>₁","<i>x</i>₂ &minus; <i>x</i>₁")}`,1,`Yes: change in <i>y</i> over change in <i>x</i>.`],
  [`${F("<i>x</i>₂ &minus; <i>x</i>₁","<i>y</i>₂ &minus; <i>y</i>₁")}`,0,`Upside down. It's change in <i>y</i> over change in <i>x</i>.`],
  [`${F("<i>y</i>₂ + <i>y</i>₁","<i>x</i>₂ + <i>x</i>₁")}`,0,`Differences, not sums.`]])],
 [6,C("Equation of a line",`The line through (<i>x</i>₁, <i>y</i>₁) with gradient <i>m</i> is:`,[
  [`<i>y</i> &minus; <i>y</i>₁ = <i>m</i>(<i>x</i> &minus; <i>x</i>₁)`,1,`Yes. Here (<i>x</i>₁, <i>y</i>₁) = (&minus;2${R("3")}, 5).`],
  [`<i>y</i> = <i>m</i>(<i>x</i> &minus; <i>x</i>₁)`,0,`You've lost <i>y</i>₁: this line would pass through (<i>x</i>₁, 0), not the point.`],
  [`<i>y</i> &minus; <i>x</i>₁ = <i>m</i>(<i>x</i> &minus; <i>y</i>₁)`,0,`Pair <i>y</i> with <i>y</i>₁ and <i>x</i> with <i>x</i>₁.`]])]],
4:[[0,C("Area of a triangle",`In area = ½<i>ab</i> sin C, the angle C must be:`,[
  [`the angle between sides <i>a</i> and <i>b</i>`,1,`Yes, the included angle. Here &theta; is between AB and AC.`],
  [`any angle of the triangle`,0,`It must be the angle between the two sides you use.`],
  [`the largest angle`,0,`Not necessarily. It's the angle between the two sides you use.`]])],
 [3,C("Choosing sine or cosine rule",`You know two sides and the angle between them, and want the third side. Use:`,[
  [`the cosine rule`,1,`Yes: <i>a</i>² = <i>b</i>² + <i>c</i>² &minus; 2<i>bc</i> cos A.`],
  [`the sine rule`,0,`The sine rule needs a side and its opposite angle. You don't have that pair here.`],
  [`Pythagoras`,0,`Only for right-angled triangles.`]])]],
5:[[0,C("Rationalising the denominator",`Why multiply top and bottom by (2${R("3")} &minus; ${R("5")})?`,[
  [`(<i>a</i> + <i>b</i>)(<i>a</i> &minus; <i>b</i>) = <i>a</i>² &minus; <i>b</i>² removes the surds: 12 &minus; 5 = 7`,1,`Exactly. The conjugate turns the denominator into a whole number.`],
  [`It makes the numerator simpler`,0,`The numerator gets longer. The aim is a rational denominator.`],
  [`Any surd would work`,0,`Only the conjugate removes both surds from the denominator.`]])],
 [2,C("Simplifying surds",`${R("45")} = ?`,[
  [`3${R("5")}`,1,`Yes: ${R("9")} &times; ${R("5")}.`],
  [`9${R("5")}`,0,`Take the square root of 9: ${R("45")} = ${R("9")}${R("5")} = 3${R("5")}.`],
  [`5${R("3")}`,0,`45 = 9 &times; 5, so it is 3${R("5")}. (5${R("3")} is ${R("75")}.)`]])]],
6:[[0,C("Hidden quadratics",`Why substitute <i>p</i> = 2<sup><i>x</i></sup>?`,[
  [`Because 4<sup><i>x</i></sup> = (2<sup><i>x</i></sup>)², so the equation becomes a quadratic in <i>p</i>`,1,`Yes. Spot the square: 4<sup><i>x</i></sup> = <i>p</i>².`],
  [`So you can use logarithms`,0,`No logs needed here. The values of <i>p</i> turn out to be powers of 2.`],
  [`To get rid of <i>x</i> for good`,0,`<i>x</i> comes back at the end, when you solve 2<sup><i>x</i></sup> = <i>p</i>.`]])],
 [7,C("Exponentials are positive",`Suppose you had got <i>p</i> = &minus;8. Then 2<sup><i>x</i></sup> = &minus;8 has:`,[
  [`no solution, because 2<sup><i>x</i></sup> &gt; 0 for every <i>x</i>`,1,`Right. You would reject it. Your guide's tip says the same.`],
  [`<i>x</i> = &minus;3`,0,`2<sup>&minus;3</sup> = ${F(1,8)}, which is positive.`],
  [`<i>x</i> = 3`,0,`2³ = +8. No power of 2 is negative.`]])]],
7:[[0,C("Intersections of curves",`The points where two curves meet come from:`,[
  [`setting the two equations equal and solving`,1,`Yes. Each solution for <i>x</i> is one meeting point.`],
  [`adding the two equations`,0,`At a meeting point the <i>y</i>-values are equal, so set them equal.`],
  [`differentiating both`,0,`Differentiating gives gradients, not meeting points.`]])],
 [7,C("Repeated roots",`4(<i>x</i> &minus; 1)² = 0 tells you the curves:`,[
  [`meet at exactly one point, <i>x</i> = 1`,1,`Yes: a repeated root means one meeting point.`],
  [`cross at two points`,0,`A squared bracket gives one repeated root, so only one point.`],
  [`never meet`,0,`<i>x</i> = 1 is a real solution, so they do meet.`]])]],
8:[[0,C("Clearing fractions",`What is the first step with 4(<i>p</i> &minus; 2<i>x</i>) = ${F("12 + 15<i>p</i>","<i>x</i> + <i>p</i>")}?`,[
  [`Multiply both sides by (<i>x</i> + <i>p</i>) to clear the fraction`,1,`Yes. Then expand to get a quadratic in <i>x</i>.`],
  [`Use <i>b</i>² &minus; 4<i>ac</i> straight away`,0,`It isn't a quadratic yet. Clear the fraction and expand first.`],
  [`Divide both sides by 4`,0,`That leaves the fraction. Clear the denominator first.`]])],
 [4,C("Inequality rules",`Dividing an inequality by +48:`,[
  [`keeps the sign the same`,1,`Yes. Only multiplying or dividing by a negative flips it.`],
  [`flips the sign`,0,`Only a negative number flips the inequality. 48 is positive.`]])]],
9:[[3,C("Period of sine",`The period of <i>y</i> = &minus;4 sin <i>x</i> is:`,[
  [`2&pi;`,1,`Yes, the same as sin <i>x</i>. The &minus;4 changes height, not period.`],
  [`&pi;`,0,`That is the period of tan <i>x</i>.`],
  [`4`,0,`4 is the amplitude (height), not the period.`]])],
 [4,C("Transformations inside f",`<i>y</i> = f(<i>x</i> &minus; ${F("&pi;",6)}) moves the graph:`,[
  [`right by ${F("&pi;",6)}`,1,`Yes. Inside the bracket works the opposite way: minus moves right.`],
  [`left by ${F("&pi;",6)}`,0,`Inside the bracket the direction is reversed: <i>x</i> &minus; ${F("&pi;",6)} moves RIGHT.`],
  [`down by ${F("&pi;",6)}`,0,`Changes inside the bracket act on <i>x</i>, not <i>y</i>.`]])]],
10:[[0,C("Radian formulae",`Arc length = <i>r</i>&theta; works only when &theta; is in:`,[
  [`radians`,1,`Yes. In degrees you'd need ${F("&theta;",360)} &times; 2&pi;<i>r</i>.`],
  [`degrees`,0,`<i>r</i>&theta; and ½<i>r</i>²&theta; need radians.`],
  [`either`,0,`Only radians. With 1.2 in degrees the answer would be far too small.`]])],
 [4,C("Area of a triangle",`R₂ is triangle AOP. Its area is:`,[
  [`½ &times; OA &times; OP &times; sin 1.2`,1,`Yes: two sides and the angle between them.`],
  [`½ &times; 5² &times; 1.2`,0,`That is the whole sector, not the triangle.`],
  [`½ &times; OA &times; OP`,0,`Only true for a right angle. You need sin of the included angle.`]])]],
11:[[0,C("Normal and tangent",`The normal to a curve at P is:`,[
  [`perpendicular to the tangent at P`,1,`Yes, so the gradients multiply to &minus;1.`],
  [`parallel to the tangent`,0,`Parallel lines have equal gradients. The normal is at right angles.`],
  [`the same as the tangent`,0,`The normal is at right angles to the tangent.`]])],
 [4,C("Integration reverses differentiation",`You have f&prime;(<i>x</i>). To get f(<i>x</i>) you:`,[
  [`integrate`,1,`Yes, then find <i>c</i> using a point on the curve.`],
  [`differentiate`,0,`Differentiating f&prime;(<i>x</i>) gives f&Prime;(<i>x</i>), the wrong way.`]])]],
12:[[5,C("Clearing fractions",`In (b) you multiply through by <i>x</i> because:`,[
  [`it clears the fraction and gives a quadratic (<i>x</i> &ne; 0)`,1,`Yes. Then the discriminant can be used.`],
  [`it finds the asymptote`,0,`The asymptotes come from the curve's equation. Here you need a quadratic.`],
  [`<i>x</i> is always positive`,0,`<i>x</i> can be negative. You are just clearing the fraction.`]])],
 [6,C("Meaning of the discriminant",`"Intersects at 2 distinct points" means:`,[
  [`<i>b</i>² &minus; 4<i>ac</i> &gt; 0`,1,`Yes, two different real roots.`],
  [`<i>b</i>² &minus; 4<i>ac</i> = 0`,0,`= 0 means it touches at one point.`],
  [`<i>b</i>² &minus; 4<i>ac</i> &lt; 0`,0,`&lt; 0 means no intersection.`]])]]
};
PAPER.forEach((q,i)=>{
  const t=TAGS[i]||{};q.steps.forEach((s,j)=>{if(s.c&&!s.c.k)s.c.k=t[j]||q.topic;});
  (EXTRA[i]||[]).slice().sort((a,b)=>b[0]-a[0]).forEach(([at,st])=>q.steps.splice(at,0,st));
});


PAPER.forEach(q=>{const m=q.src.match(/(Jan|Jun|Oct) (\d{4}) · Q(\d+)/);q.paper=m[2]+"-"+({Jan:"01",Jun:"06",Oct:"10"})[m[1]];q.pn=+m[3];});
WT.add({id:"guide",kind:"guide",title:"Mock selection (13 questions)",qs:PAPER});
})();
