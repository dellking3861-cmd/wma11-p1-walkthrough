/* October 2024 WMA11/01: walkthroughs from the official mark scheme and examiner report. */
WT.add({id:"2024-10",qs:[
{n:1,marks:6,topic:"Straight lines",
 hints:[`Gradient = change in <i>y</i> &divide; change in <i>x</i> = ${F("&minus;4 &minus; 20","3 &minus; (&minus;5)")}.`,`Midpoint of AB = (&minus;1, 8). Perpendicular gradient = &minus;1 &divide; (&minus;3).`],
 steps:[
 {t:`<i>m</i> = ${F(-24,8)} = &minus;3`,m:"M1"},
 {t:`<i>y</i> &minus; 20 = &minus;3(<i>x</i> + 5) &rArr; <b><i>y</i> = &minus;3<i>x</i> + 5</b>`,m:"M1 A1"},
 C("Perpendicular gradients",`<i>l</i>₂ has gradient:`,[[`${F(1,3)}`,1,`Yes: &minus;1 &divide; (&minus;3).`],[`3`,0,`Flip as well: ${F(1,3)}.`],[`&minus;${F(1,3)}`,0,`&minus;1 &divide; (&minus;3) is positive.`]]),
 {t:`Midpoint (${F("&minus;5 + 3",2)}, ${F("20 &minus; 4",2)}) = (&minus;1, 8)`,m:"B1"},
 {t:`<i>y</i> &minus; 8 = ${F(1,3)}(<i>x</i> + 1) &rArr; 3<i>y</i> &minus; 24 = <i>x</i> + 1`,m:"M1"},
 {t:`<b><i>x</i> &minus; 3<i>y</i> + 25 = 0</b>`,m:"A1"}]},

{n:2,marks:7,topic:"Indices and surds",
 hints:[`(2<i>x</i>⁴)³ = 8<i>x</i>¹². Then collect powers of <i>x</i> and <i>y</i>.`,`Rationalise ${F(16,R("3")+" + 1")} with (${R("3")} &minus; 1), write ${R("27")} = 3${R("3")}, then make <i>a</i> the subject.`],
 steps:[
 C("Power of a product",`(2<i>x</i>⁴)³ = ?`,[[`8<i>x</i>¹²`,1,`Yes: 2³ and <i>x</i><sup>4&times;3</sup>.`],[`6<i>x</i>¹²`,0,`2³ = 8, not 2 &times; 3.`],[`8<i>x</i>⁷`,0,`(<i>x</i>⁴)³: multiply the powers, 4 &times; 3 = 12.`]]),
 {t:`${F("3<i>y</i>³ &times; 8<i>x</i>¹²","4<i>x</i>²<i>y</i>⁴")} = <b>6<i>x</i>¹⁰<i>y</i><sup>&minus;1</sup></b> (or ${F("6<i>x</i>¹⁰","<i>y</i>")})`,m:"M1 M1 A1"},
 {t:`(ii) ${F(16,R("3")+" + 1")} &times; ${F(R("3")+" &minus; 1",R("3")+" &minus; 1")} = ${F("16("+R("3")+" &minus; 1)",2)} = 8${R("3")} &minus; 8`,m:"M1"},
 {t:`8${R("3")} &minus; 8 = 3${R("3")}<i>a</i> + 4 &rArr; <i>a</i> = ${F("8"+R("3")+" &minus; 12","3"+R("3"))}`,m:"M1"},
 C("Rationalising the denominator",`${F(12,"3"+R("3"))} simplifies to:`,[[`${F(4,R("3"))} = ${F("4"+R("3"),3)}`,1,`Yes: ${F(4,R("3"))} &times; ${F(R("3"),R("3"))}.`],[`4${R("3")}`,0,`${F(4,R("3"))} = ${F("4"+R("3"),3)}, not 4${R("3")}.`]]),
 {t:`<b><i>a</i> = ${F(8,3)} &minus; ${F(4,3)}${R("3")}</b> (<i>p</i> = &minus;${F(4,3)}, <i>q</i> = ${F(8,3)})`,m:"dM1 A1"},
 {er:`Examiner report: many lacked fluency with surds, and many lost marks by not showing enough working in a no-calculator question.`}]},

{n:3,marks:9,topic:"Integration and differentiation",
 hints:[`Expand (<i>x</i> + 5)² and divide each term by <i>x</i><sup>½</sup>: <i>x</i><sup>3/2</sup> + 10<i>x</i><sup>½</sup> + 25<i>x</i><sup>&minus;½</sup>.`,`For (b), differentiate the same three terms, set to 0, then multiply by 2<i>x</i><sup>3/2</sup> to clear the powers.`],
 steps:[
 {t:`f(<i>x</i>) = <i>x</i><sup>3/2</sup> + 10<i>x</i><sup>½</sup> + 25<i>x</i><sup>&minus;½</sup>`,m:"M1"},
 {t:`(a) <b>${F(2,5)}<i>x</i><sup>5/2</sup> + ${F(20,3)}<i>x</i><sup>3/2</sup> + 50<i>x</i><sup>½</sup> + <i>c</i></b>`,m:"M1 A1 A1"},
 {t:`(b) f&prime;(<i>x</i>) = ${F(3,2)}<i>x</i><sup>½</sup> + 5<i>x</i><sup>&minus;½</sup> &minus; ${F(25,2)}<i>x</i><sup>&minus;3/2</sup>`,m:"M1 A1"},
 C("Clearing negative powers",`To turn f&prime;(<i>x</i>) = 0 into 3<i>x</i>² + 10<i>x</i> &minus; 25 = 0, multiply through by:`,[[`2<i>x</i><sup>3/2</sup>`,1,`Yes: ${F(3,2)}<i>x</i><sup>½</sup> &times; 2<i>x</i><sup>3/2</sup> = 3<i>x</i>², and so on.`],[`<i>x</i><sup>½</sup>`,0,`That leaves <i>x</i><sup>&minus;1</sup> terms. You need <i>x</i><sup>3/2</sup> to clear the most negative power.`]]),
 {t:`<b>3<i>x</i>² + 10<i>x</i> &minus; 25 = 0</b>`,m:"A1*"},
 {t:`(ii) (3<i>x</i> &minus; 5)(<i>x</i> + 5) = 0, <i>x</i> &gt; 0 &rArr; <b><i>x</i> = ${F(5,3)}</b>`,m:"M1 A1"},
 {er:`Examiner report: the "show that" in (b) caused trouble. Every stage of the multiplication must be visible.`}]},

{n:4,marks:10,topic:"Quadratic and cubic curves",
 hints:[`f has roots 0 and 4: f(<i>x</i>) = <i>kx</i>(<i>x</i> &minus; 4). Use the minimum point (2, &minus;4.8) to find <i>k</i>.`,`g touches at 4 and crosses at 0: g(<i>x</i>) = &lambda;<i>x</i>(<i>x</i> &minus; 4)². Use (6, 7.2). For (c), divide by <i>x</i>(<i>x</i> &minus; 4) only after noting those roots.`],
 steps:[
 {t:`f(<i>x</i>) = <i>kx</i>(<i>x</i> &minus; 4); &minus;4.8 = <i>k</i>(2)(&minus;2) &rArr; <i>k</i> = 1.2`,m:"M1 dM1"},
 {t:`<b>f(<i>x</i>) = 1.2<i>x</i>(<i>x</i> &minus; 4)</b>`,m:"A1"},
 C("Repeated roots",`C₂ meets the <i>x</i>-axis at 4 without crossing. So g contains:`,[[`(<i>x</i> &minus; 4)²`,1,`Yes: touching means a repeated root.`],[`(<i>x</i> &minus; 4)`,0,`A single factor crosses. Touching needs it squared.`]]),
 {t:`g(<i>x</i>) = &lambda;<i>x</i>(<i>x</i> &minus; 4)²; 7.2 = &lambda;(6)(4) &rArr; &lambda; = 0.3: <b>g(<i>x</i>) = 0.3<i>x</i>(<i>x</i> &minus; 4)²</b>`,m:"M1 dM1 A1"},
 {t:`(c) 1.2<i>x</i>(<i>x</i> &minus; 4) = 0.3<i>x</i>(<i>x</i> &minus; 4)²`,m:"B1"},
 {t:`<i>x</i> = 0 and <i>x</i> = 4 are the other meeting points; otherwise 1.2 = 0.3(<i>x</i> &minus; 4) &rArr; <i>x</i> = 8`,m:"M1 A1"},
 {t:`<b>P(8, 38.4)</b>`,m:"A1"},
 {er:`Examiner report: many left this blank. Build each equation from the given facts, not from <i>y</i> &minus; <i>y</i>₁ = <i>m</i>(<i>x</i> &minus; <i>x</i>₁): these are curves, not lines.`}]},

Object.assign({n:5},G("Oct 2024 · Q5")),

{n:6,marks:9,topic:"Reciprocal graphs and discriminant",
 hints:[`<i>y</i> = ${F(1,"2 &minus; <i>x</i>")}: the denominator is zero at <i>x</i> = 2. At <i>x</i> = 0, <i>y</i> = ½. For <i>x</i> &lt; 2 the curve is above the axis.`,`(<i>kx</i> &minus; 4)(2 &minus; <i>x</i>) = 1 gives a quadratic. "At least once" means <i>b</i>² &minus; 4<i>ac</i> &ge; 0.`],
 steps:[
 {plot:{fns:[x=>1/(2-x)],x:[-3,6],y:[-4,4],v:[[2,"x = 2"]],pts:[[0,0.5,"(0, ½)",6,-8]],label:"y = 1/(2 − x)"}},
 C("Reflections of reciprocal graphs",`For <i>x</i> &lt; 2, <i>y</i> = ${F(1,"2 &minus; <i>x</i>")} is:`,[[`positive (above the axis)`,1,`Yes: 2 &minus; <i>x</i> &gt; 0 there. So the branches are top-left and bottom-right.`],[`negative`,0,`Try <i>x</i> = 0: <i>y</i> = ½, positive.`]]),
 {t:`Shape, asymptote <b><i>x</i> = 2</b>, intercept <b>(0, ½)</b>`,m:"M1 A1 B1"},
 {t:`(b) (<i>kx</i> &minus; 4)(2 &minus; <i>x</i>) = 1 &rArr; <i>kx</i>² &minus; (2<i>k</i> + 4)<i>x</i> + 9 = 0`,m:"M1 A1"},
 {t:`(2<i>k</i> + 4)² &minus; 36<i>k</i> &ge; 0 &rArr; 4<i>k</i>² &minus; 20<i>k</i> + 16 &ge; 0 &rArr; <b><i>k</i>² &minus; 5<i>k</i> + 4 &ge; 0</b>`,m:"dM1 A1*"},
 C("Quadratic inequality regions",`(<i>k</i> &minus; 1)(<i>k</i> &minus; 4) &ge; 0 when:`,[[`<i>k</i> &le; 1 or <i>k</i> &ge; 4`,1,`Yes: outside the roots, ends included.`],[`1 &le; <i>k</i> &le; 4`,0,`That's where it's &le; 0. The mark scheme says "4 &le; <i>k</i> &le; 1"-type answers score A0.`]]),
 {t:`<b><i>k</i> &le; 1 or <i>k</i> &ge; 4</b>`,m:"M1 A1"}]},

{n:7,marks:8,topic:"Trig graphs (radians)",
 hints:[`<i>y</i> = &minus;4 cos <i>x</i> is lowest where cos <i>x</i> = 1: at 0, &plusmn;2&pi;. P is the minimum to the left; Q is a root to the right.`,`Adding <i>k</i> moves the graph up: the maximum becomes 4 + <i>k</i>. For (c), sketch the line through (0, 5) and (${F("&pi;",2)}, 0).`],
 steps:[
 {t:`(a)(i) <b>P(&minus;2&pi;, &minus;4)</b> &nbsp; (ii) <b>Q(${F("3&pi;",2)}, 0)</b>`,m:"B1 B1 B1"},
 C("Vertical translations",`<i>y</i> = &minus;4 cos <i>x</i> + <i>k</i> has maximum 4 + <i>k</i> = 11, so <i>k</i> = ?`,[[`7`,1,`Yes.`],[`11`,0,`The original maximum is already 4. 4 + <i>k</i> = 11.`],[`15`,0,`4 + <i>k</i> = 11 gives <i>k</i> = 7.`]]),
 {t:`(b)(i) <b><i>k</i> = 7</b> &nbsp; (ii) minimum &minus;4 + 7 = 3 where cos <i>x</i> = 1: <b>(2&pi;, 3)</b>`,m:"B1 M1 A1"},
 {plot:{fns:[x=>-4*Math.cos(x),{f:x=>5-10*x/Math.PI,color:"#c0392b"}],x:[-7,7],y:[-6,6],xt:[[Math.PI/2,"π/2"]],label:"y = −4 cos x and y = 5 − 10x/π"}},
 C("Counting intersections",`How many times does the line meet C₁?`,[[`Once`,1,`Yes: it is steep and passes through (${F("&pi;",2)}, 0), leaving the band &minus;4 &le; <i>y</i> &le; 4 quickly.`],[`Infinitely many`,0,`The line leaves the strip between &minus;4 and 4 on both sides.`]]),
 {t:`(c) <b>1 solution</b>: the line crosses C₁ exactly once`,m:"M1 A1"}]},

Object.assign({n:8},G("Oct 2024 · Q8")),

{n:9,marks:10,topic:"Cubics, gradients and transformations",
 hints:[`3<i>x</i>² &minus; 4<i>x</i> + 20 has a negative discriminant, so it's always positive. The sign of f depends only on (<i>x</i> + 5).`,`Expand f first. Parallel tangents mean equal gradients: f&prime;(<i>x</i>) = f&prime;(&minus;4).`],
 steps:[
 C("Discriminant and sign",`For 3<i>x</i>² &minus; 4<i>x</i> + 20, <i>b</i>² &minus; 4<i>ac</i> = 16 &minus; 240 &lt; 0. So it is:`,[[`always positive`,1,`Yes: no real roots and positive <i>x</i>² coefficient.`],[`always negative`,0,`The <i>x</i>² coefficient is positive, so it's above the axis everywhere.`]]),
 {t:`(a) <b><i>x</i> &ge; &minus;5</b>`,m:"B1"},
 {t:`(b) f(<i>x</i>) = 3<i>x</i>³ + 11<i>x</i>² + 100 &rArr; <b>f&prime;(<i>x</i>) = 9<i>x</i>² + 22<i>x</i></b>`,m:"M1 M1 A1"},
 {t:`(c) f&prime;(&minus;4) = 144 &minus; 88 = 56`,m:"M1"},
 C("Parallel tangents",`Parallel tangents at P and R means:`,[[`f&prime;(P) = f&prime;(R) = 56`,1,`Yes: parallel lines have equal gradients.`],[`f&prime;(P) &times; f&prime;(R) = &minus;1`,0,`That's perpendicular, not parallel.`]]),
 {t:`9<i>x</i>² + 22<i>x</i> &minus; 56 = 0 &rArr; (<i>x</i> + 4)(9<i>x</i> &minus; 14) = 0`,m:"dM1 ddM1"},
 {t:`<i>x</i> = &minus;4 is R, so <b><i>x</i> = ${F(14,9)}</b>`,m:"A1"},
 {t:`(d)(i) right 3: <b>(&minus;1, 84)</b> &nbsp; (ii) <i>y</i> &times; 4: <b>(&minus;4, 336)</b>`,m:"B1 B1"}]}
]});
