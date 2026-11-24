/* January 2026 WMA11/01: walkthroughs from the official mark scheme. */
WT.add({id:"2026-01",qs:[
{n:1,marks:6,topic:"Differentiation and integration",
 hints:[`Rewrite ${F(3,"2"+R("<i>x</i>"))} as ${F(3,2)}<i>x</i><sup>&minus;½</sup>.`,`Differentiate: multiply by the power, then subtract 1. Integrate: add 1, then divide by the new power.`],
 steps:[
 {t:`<i>y</i> = 4<i>x</i>³ + ${F(3,2)}<i>x</i><sup>&minus;½</sup> &minus; 8`},
 C("Differentiating negative powers",`d/d<i>x</i> of ${F(3,2)}<i>x</i><sup>&minus;½</sup> is:`,[[`&minus;${F(3,4)}<i>x</i><sup>&minus;3/2</sup>`,1,`Yes: ${F(3,2)} &times; (&minus;½) = &minus;${F(3,4)}, and &minus;½ &minus; 1 = &minus;${F(3,2)}.`],[`&minus;${F(3,4)}<i>x</i><sup>&minus;½</sup>`,0,`Reduce the power by 1: &minus;½ &minus; 1 = &minus;${F(3,2)}.`],[`3<i>x</i><sup>½</sup>`,0,`That's integrating.`]]),
 {t:`(a) <b>${F("d<i>y</i>","d<i>x</i>")} = 12<i>x</i>² &minus; ${F(3,4)}<i>x</i><sup>&minus;3/2</sup></b>`,m:"M1 A1 A1"},
 C("Integrating fractional powers",`&int; ${F(3,2)}<i>x</i><sup>&minus;½</sup> d<i>x</i> = ?`,[[`3<i>x</i><sup>½</sup>`,1,`Yes: ${F(3,2)} &divide; ½ = 3.`],[`${F(3,4)}<i>x</i><sup>½</sup>`,0,`Divide by the new power ½, which means multiply by 2.`]]),
 {t:`(b) <b><i>x</i>⁴ + 3<i>x</i><sup>½</sup> &minus; 8<i>x</i> + <i>c</i></b>`,m:"M1 A1 A1"}]},

{n:2,marks:6,topic:"Simultaneous equations",
 hints:[`From the first equation, <i>y</i> = <i>x</i> + 4. Substitute into the second.`,`Solve <i>x</i>² &minus; 4<i>x</i> &minus; 8 = 0 by completing the square or the formula, with working shown. ${R("48")} = 4${R("3")}.`],
 steps:[
 {t:`2<i>x</i>² &minus; <i>x</i>(<i>x</i> + 4) = 8 &rArr; <i>x</i>² &minus; 4<i>x</i> &minus; 8 = 0`,m:"M1 A1*"},
 C("Completing the square",`<i>x</i>² &minus; 4<i>x</i> &minus; 8 = 0 rearranges to:`,[[`(<i>x</i> &minus; 2)² = 12`,1,`Yes: (<i>x</i> &minus; 2)² &minus; 4 &minus; 8 = 0.`],[`(<i>x</i> &minus; 4)² = 24`,0,`Halve the <i>x</i> coefficient: &minus;4 &divide; 2 = &minus;2.`],[`(<i>x</i> &minus; 2)² = 4`,0,`(<i>x</i> &minus; 2)² = <i>x</i>² &minus; 4<i>x</i> + 4, so move 4 + 8 = 12.`]]),
 {t:`<i>x</i> &minus; 2 = &plusmn;${R("12")} = &plusmn;2${R("3")} &rArr; <i>x</i> = 2 &plusmn; 2${R("3")}`,m:"M1 A1"},
 {t:`<i>y</i> = <i>x</i> + 4: <b><i>x</i> = 2 + 2${R("3")}, <i>y</i> = 6 + 2${R("3")} &nbsp;and&nbsp; <i>x</i> = 2 &minus; 2${R("3")}, <i>y</i> = 6 &minus; 2${R("3")}</b>`,m:"M1 A1"},
 {tip:`Mark scheme: a formula line with the numbers shown is needed. Calculator-only roots lose the method mark.`}]},

{n:3,marks:5,topic:"Inequalities",
 hints:[`Don't multiply by <i>z</i>: it could be negative. Multiply both sides by <i>z</i>² instead (always positive).`,`For (ii), the curve must be ABOVE the line: <i>x</i>(<i>x</i> &minus; 3) &ge; <i>x</i> + 5, and <i>x</i> &ge; &minus;2.`],
 steps:[
 C("Inequalities with unknown signs",`Why not just multiply ${F(4,"<i>z</i>")} &lt; 8 by <i>z</i>?`,[[`If <i>z</i> is negative the inequality would flip`,1,`Yes. Multiply by <i>z</i>² (positive) instead: 4<i>z</i> &lt; 8<i>z</i>².`],[`You can, it's always fine`,0,`If <i>z</i> &lt; 0, multiplying flips the sign. That's how <i>z</i> &lt; 0 solutions get lost.`]]),
 {t:`4<i>z</i> &lt; 8<i>z</i>² &rArr; 8<i>z</i>² &minus; 4<i>z</i> &gt; 0 &rArr; 4<i>z</i>(2<i>z</i> &minus; 1) &gt; 0`,m:"M1"},
 {t:`<b><i>z</i> &lt; 0 or <i>z</i> &gt; ½</b>`,m:"A1"},
 {t:`(ii) Curve above line: <i>x</i>² &minus; 3<i>x</i> &ge; <i>x</i> + 5 &rArr; (<i>x</i> + 1)(<i>x</i> &minus; 5) &ge; 0 &rArr; <i>x</i> &le; &minus;1 or <i>x</i> &ge; 5`},
 C("Regions from graphs",`So with <i>x</i> &ge; &minus;2, the shaded regions are:`,[[`between the line and curve for &minus;2 &le; <i>x</i> &le; &minus;1, and for <i>x</i> &ge; 5`,1,`Yes: two separate regions, left and right.`],[`between the line and curve for &minus;1 &le; <i>x</i> &le; 5`,0,`There the curve is BELOW the line, so <i>x</i> + 5 &le; <i>y</i> &le; <i>x</i>(<i>x</i> &minus; 3) is impossible.`]]),
 {t:`Draw <i>x</i> = &minus;2; shade the left region (&minus;2 &le; <i>x</i> &le; &minus;1) and the right region (<i>x</i> &ge; 5), each between line and curve`,m:"B1 B1 B1"}]},

{n:4,marks:9,topic:"Straight lines",
 hints:[`Gradient AB = ${F("2 &minus; 8","7 &minus; (&minus;1)")}. L₂ has the negative reciprocal gradient and passes through A.`,`L₁ and L₂ meet at A at right angles, so triangle ABC has its right angle at A: area = ½ &times; AB &times; AC.`],
 steps:[
 {t:`Gradient AB = ${F(-6,8)} = &minus;${F(3,4)}`,m:"M1"},
 {t:`<i>y</i> &minus; 2 = &minus;${F(3,4)}(<i>x</i> &minus; 7) &rArr; <b>3<i>x</i> + 4<i>y</i> &minus; 29 = 0</b>`,m:"dM1 A1"},
 {t:`(b) L₂: <i>y</i> &minus; 8 = ${F(4,3)}(<i>x</i> + 1)`,m:"M1"},
 {t:`<i>y</i> = 0: &minus;8 = ${F(4,3)}(<i>x</i> + 1) &rArr; <i>x</i> = &minus;7, <b>C(&minus;7, 0)</b>`,m:"dM1 A1"},
 C("Right-angled triangles",`Where is the right angle in triangle ABC?`,[[`At A, where L₁ and L₂ meet`,1,`Yes: L₂ is perpendicular to L₁ at A.`],[`At C, on the <i>x</i>-axis`,0,`The perpendicular lines meet at A.`]]),
 {t:`AB = ${R("8² + 6²")} = 10, AC = ${R("6² + 8²")} = 10`,m:"M1"},
 {t:`Area = ½ &times; 10 &times; 10 = <b>50</b>`,m:"dM1 A1"}]},

{n:5,marks:9,topic:"Radians, sine rule and sectors",
 hints:[`In triangle AOD you know OD = 3, AD = 8 and angle AOD = 2.5. Use the sine rule to find angle OAD first, then angle ODA = &pi; &minus; 2.5 &minus; OAD.`,`The sector BODCB is the major sector: angle 2&pi; &minus; 2.5. Perimeter = AB + arc + DA, where AB = OA &minus; 3.`],
 steps:[
 {t:`${F("sin OAD",3)} = ${F("sin 2.5",8)} &rArr; OAD = 0.2264...`,m:"M1 A1"},
 {t:`ODA = &pi; &minus; 2.5 &minus; 0.2264 = <b>0.415</b> (3 s.f.)`,m:"A1*"},
 C("Radians in triangles",`Angles in a triangle add up to:`,[[`&pi; radians`,1,`Yes, 180&deg; = &pi;.`],[`2&pi; radians`,0,`2&pi; is a full turn. A triangle's angles sum to &pi;.`]]),
 {t:`(b) Triangle AOD = ½ &times; 3 &times; 8 &times; sin 0.415 = 4.84`,m:"M1"},
 {t:`Major sector = ½ &times; 3² &times; (2&pi; &minus; 2.5) = 17.02`,m:"M1"},
 {t:`Total = <b>21.9 cm²</b>`,m:"A1"},
 C("Finding a missing side",`To get AB you need OA. From the sine rule:`,[[`${F("OA","sin 0.415")} = ${F(8,"sin 2.5")}`,1,`Yes: OA is opposite angle ODA.`],[`${F("OA","sin 2.5")} = ${F(3,"sin 0.415")}`,0,`Pair each side with the angle opposite it.`]]),
 {t:`OA = 5.39, AB = 5.39 &minus; 3 = 2.39; arc = 3(2&pi; &minus; 2.5) = 11.35`,m:"M1 dM1"},
 {t:`Perimeter = 2.39 + 11.35 + 8 = <b>21.7 cm</b>`,m:"A1"}]},

{n:6,marks:9,topic:"Cubic graphs and transformations",
 hints:[`f(${F(1,3)}<i>x</i>) = 0 when ${F(1,3)}<i>x</i> is a root of f: &minus;2 or 5.`,`Touching at 5 means (<i>x</i> &minus; 5)². Use the <i>y</i>-intercept 10 for the constant. In (c), (<i>x</i> + 2) is a common factor on both sides.`],
 steps:[
 C("Transformations inside f",`f(${F(1,3)}<i>x</i>) = 0 has roots:`,[[`<i>x</i> = &minus;6 and 15`,1,`Yes: ${F(1,3)}<i>x</i> = &minus;2 or 5.`],[`<i>x</i> = &minus;${F(2,3)} and ${F(5,3)}`,0,`Inside the bracket works the opposite way: <i>x</i> is multiplied by 3, not divided.`]]),
 {t:`(i) &minus;6, 15 &nbsp; (ii) <i>x</i> &minus; 3 = &minus;2 or 5: <b>1, 8</b>`,m:"B1 B1"},
 {t:`(b) f(<i>x</i>) = <i>k</i>(<i>x</i> + 2)(<i>x</i> &minus; 5)²; f(0) = 50<i>k</i> = 10 &rArr; <i>k</i> = ${F(1,5)}`,m:"M1 dM1"},
 {t:`<b>f(<i>x</i>) = ${F(1,5)}(<i>x</i> + 2)(<i>x</i> &minus; 5)²</b>`,m:"A1"},
 C("Common factors",`${F(1,5)}(<i>x</i> + 2)(<i>x</i> &minus; 5)² = 10(<i>x</i> + 2). Best next step?`,[[`Note <i>x</i> = &minus;2 is a root, then divide by (<i>x</i> + 2)`,1,`Yes. That leaves a quadratic.`],[`Divide by (<i>x</i> + 2) and forget it`,0,`Dividing loses the solution <i>x</i> = &minus;2. State it first.`]]),
 {t:`<i>x</i> = &minus;2, and (<i>x</i> &minus; 5)² = 50`,m:"B1 M1"},
 {t:`<i>x</i> &minus; 5 = &plusmn;${R("50")} = &plusmn;5${R("2")} &rArr; <b><i>x</i> = &minus;2, 5 &plusmn; 5${R("2")}</b>`,m:"dM1 A1"}]},

{n:7,marks:10,topic:"Completing the square and tangents",
 hints:[`d<i>y</i>/d<i>x</i> = 2<i>x</i>² &minus; 16<i>x</i> + 43. Take 2 out of the <i>x</i> terms and complete the square.`,`The minimum of 2(<i>x</i> &minus; 4)² + 11 is 11 at <i>x</i> = 4. S has <i>x</i> = 4: find <i>y</i> from the curve.`],
 steps:[
 {t:`${F("d<i>y</i>","d<i>x</i>")} = 2<i>x</i>² &minus; 16<i>x</i> + 43`,m:"M1 A1"},
 {t:`= 2(<i>x</i>² &minus; 8<i>x</i>) + 43 = 2[(<i>x</i> &minus; 4)² &minus; 16] + 43 = <b>2(<i>x</i> &minus; 4)² + 11</b>`,m:"M1 A1 A1"},
 C("Minimum from completed square",`The minimum value of 2(<i>x</i> &minus; 4)² + 11 is:`,[[`11, at <i>x</i> = 4`,1,`Yes: the square is never negative, so the least value is when it's 0.`],[`&minus;4, at <i>x</i> = 11`,0,`The minimum VALUE is the constant 11; it happens when the bracket is 0, at <i>x</i> = 4.`]]),
 {t:`(b) (i) <b>11</b> &nbsp; (ii) <b><i>x</i> = 4</b>`,m:"B1 B1"},
 {t:`(c) <i>y</i> at <i>x</i> = 4: ${F(2,3)}(64) &minus; 128 + 172 &minus; ${F(20,3)} = 80`,m:"M1"},
 C("Gradient of a tangent",`The tangent at S has gradient:`,[[`11, the minimum value of d<i>y</i>/d<i>x</i>`,1,`Yes: S is where the gradient is 11.`],[`0`,0,`S isn't a turning point of C. It's where the gradient is smallest.`]]),
 {t:`<i>y</i> &minus; 80 = 11(<i>x</i> &minus; 4) &rArr; <b><i>y</i> = 11<i>x</i> + 36</b>`,m:"dM1 A1"}]},

{n:8,marks:12,topic:"Tangents, normals and integration",
 hints:[`The tangent's gradient is 10, so f&prime;(<i>x</i>) = 10 at P. Multiplying by <i>x</i>² gives a quadratic in <i>x</i>².`,`P is on the tangent: <i>y</i> = 10${R("3")} &minus; 6${R("3")} = 4${R("3")}. Use it for the normal and for <i>c</i>.`],
 steps:[
 {t:`(a)(i) f&prime;(${R("3")}) = 4(3) + ${F(6,3)} &minus; 4 = 10 ✓ (matches the tangent gradient)`,m:"B1"},
 {t:`(ii) 4<i>x</i>² + ${F(6,"<i>x</i>²")} &minus; 4 = 10 &rArr; 4<i>x</i>⁴ &minus; 14<i>x</i>² + 6 = 0 &rArr; 2<i>x</i>⁴ &minus; 7<i>x</i>² + 3 = 0`,m:"M1 A1"},
 C("Hidden quadratics",`2<i>x</i>⁴ &minus; 7<i>x</i>² + 3 = 0 factorises as:`,[[`(2<i>x</i>² &minus; 1)(<i>x</i>² &minus; 3) = 0`,1,`Yes. <i>x</i>² = 3 is the one you already know.`],[`(2<i>x</i> &minus; 1)(<i>x</i> &minus; 3) = 0`,0,`The unknown is <i>x</i>², not <i>x</i>.`]]),
 {t:`<i>x</i>² = ½, <i>x</i> &gt; 0 &rArr; <b><i>x</i> = ${F(R("2"),2)}</b>`,m:"dM1 A1 A1"},
 {t:`(b) P(${R("3")}, 4${R("3")}); normal gradient &minus;${F(1,10)}: <b><i>y</i> &minus; 4${R("3")} = &minus;${F(1,10)}(<i>x</i> &minus; ${R("3")})</b>`,m:"M1 A1"},
 {t:`(c) f(<i>x</i>) = ${F(4,3)}<i>x</i>³ &minus; ${F(6,"<i>x</i>")} &minus; 4<i>x</i> + <i>c</i>`,m:"M1 A1"},
 C("Surd arithmetic",`${F(6,R("3"))} simplifies to:`,[[`2${R("3")}`,1,`Yes: ${F("6"+R("3"),3)}.`],[`3${R("2")}`,0,`Rationalise: ${F(6,R("3"))} &times; ${F(R("3"),R("3"))} = ${F("6"+R("3"),3)} = 2${R("3")}.`]]),
 {t:`4${R("3")} &minus; 2${R("3")} &minus; 4${R("3")} + <i>c</i> = 4${R("3")} &rArr; <i>c</i> = 6${R("3")}`,m:"dM1"},
 {t:`<b>f(<i>x</i>) = ${F(4,3)}<i>x</i>³ &minus; ${F(6,"<i>x</i>")} &minus; 4<i>x</i> + 6${R("3")}</b>`,m:"A1"}]},

{n:9,marks:9,topic:"Trig graphs: counting solutions",
 hints:[`The graph is at &minus;10 when <i>x</i> = 0 and at 10 when <i>x</i> = &plusmn;&pi;: a reflected cosine.`,`For (c), tan <i>x</i> has period &pi;. Count crossings in &minus;2&pi; &le; <i>x</i> &le; 2&pi;, then scale up: &minus;100&pi; to 100&pi; is 50 times as long.`],
 steps:[
 C("Reading trig graphs",`Which matches Figure 4?`,[[`f(<i>x</i>) = &minus;10 cos <i>x</i>`,1,`Yes: &minus;10 at <i>x</i> = 0, +10 at <i>x</i> = &plusmn;&pi;.`],[`f(<i>x</i>) = 10 cos <i>x</i>`,0,`10 cos 0 = +10, but the graph is at &minus;10 when <i>x</i> = 0.`],[`f(<i>x</i>) = &minus;10 sin <i>x</i>`,0,`sin 0 = 0, but the graph isn't at 0 when <i>x</i> = 0.`]]),
 {t:`<b>f(<i>x</i>) = &minus;10 cos <i>x</i></b>`,m:"M1 A1"},
 {plot:{fns:[x=>-10*Math.cos(x),{f:x=>10-x*x,color:"#c0392b"}],x:[-7,7],y:[-12,12],xt:[[Math.PI,"π"],[-Math.PI,"−π"]],label:"y = −10 cos x and y = 10 − x²"}},
 C("Counting intersections",`For |<i>x</i>| &gt; ${R("20")}, 10 &minus; <i>x</i>² is below &minus;10. So the curves can only meet:`,[[`near the middle, where 10 &minus; <i>x</i>² is between &minus;10 and 10`,1,`Yes, and the sketch shows exactly 2 crossings there.`],[`once every period, forever`,0,`The parabola drops below &minus;10 and never comes back.`]]),
 {t:`(b) Inverted parabola through (0, 10): <b>2 solutions</b>`,m:"M1 A1 B1"},
 {t:`(c)(i) tan <i>x</i>: period &pi;, asymptotes at <i>x</i> = &plusmn;${F("&pi;",2)}, &plusmn;${F("3&pi;",2)}`,m:"M1 A1"},
 C("Periodicity",`There are 4 roots in &minus;2&pi; &le; <i>x</i> &le; 2&pi;. In &minus;100&pi; &le; <i>x</i> &le; 100&pi; there are:`,[[`50 &times; 4 = 200`,1,`Yes: the interval is 50 times as long.`],[`100 &times; 4 = 400`,0,`&minus;100&pi; to 100&pi; is 200&pi;, which is 50 lots of 4&pi;.`]]),
 {t:`(ii) <b>200</b>, because there are 4 roots in each 4&pi; and 200&pi; &divide; 4&pi; = 50`,m:"B1 B1"}]}
]});
