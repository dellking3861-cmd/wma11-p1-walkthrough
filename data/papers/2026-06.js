/* June 2026 (sat May 2026) WMA11/01: walkthroughs from the official mark scheme. */
WT.add({id:"2026-06",qs:[
{n:1,marks:5,topic:"Integration",
 hints:[`Square the bracket first: (3<i>x</i> + ${F(2,"<i>x</i>")})² = 9<i>x</i>² + 2(3<i>x</i>)(${F(2,"<i>x</i>")}) + ${F(4,"<i>x</i>²")}.`,`Write ${F(4,"<i>x</i>²")} as 4<i>x</i><sup>&minus;2</sup>, then integrate each term.`],
 steps:[
 C("Expanding brackets",`(3<i>x</i> + ${F(2,"<i>x</i>")})² = ?`,[[`9<i>x</i>² + 12 + ${F(4,"<i>x</i>²")}`,1,`Yes: the middle term is 2 &times; 3<i>x</i> &times; ${F(2,"<i>x</i>")} = 12.`],[`9<i>x</i>² + ${F(4,"<i>x</i>²")}`,0,`(<i>a</i> + <i>b</i>)² has a middle term 2<i>ab</i>. Here it is 12.`],[`9<i>x</i>² + 6 + ${F(4,"<i>x</i>²")}`,0,`The middle term is 2 &times; 3<i>x</i> &times; ${F(2,"<i>x</i>")} = 12, not 6.`]]),
 {t:`= 9<i>x</i>² + 12 + 4<i>x</i><sup>&minus;2</sup>`,m:"M1 A1"},
 C("Integrating negative powers",`&int; 4<i>x</i><sup>&minus;2</sup> d<i>x</i> = ?`,[[`&minus;4<i>x</i><sup>&minus;1</sup>`,1,`Yes: 4<i>x</i><sup>&minus;1</sup> &divide; (&minus;1).`],[`&minus;8<i>x</i><sup>&minus;3</sup>`,0,`That's differentiating. Integrating raises &minus;2 to &minus;1.`],[`4<i>x</i><sup>&minus;1</sup>`,0,`Divide by the new power &minus;1, so the sign changes.`]]),
 {t:`<b>3<i>x</i>³ + 12<i>x</i> &minus; ${F(4,"<i>x</i>")} + <i>c</i></b>`,m:"M1 A1 A1"}]},

{n:2,marks:6,topic:"Straight lines",
 hints:[`<i>l</i>₁ has gradient &minus;3, so <i>l</i>₂ has gradient ${F(1,3)}. P is on <i>l</i>₁ at <i>x</i> = 4.`,`M and N are on the <i>y</i>-axis. Use MN as the base; the height is P's <i>x</i>-coordinate, 4.`],
 steps:[
 C("Perpendicular gradients",`<i>l</i>₁ has gradient &minus;3. <i>l</i>₂ has gradient:`,[[`${F(1,3)}`,1,`Yes: &minus;1 &divide; (&minus;3).`],[`3`,0,`Flip as well as changing sign: ${F(1,3)}.`],[`&minus;${F(1,3)}`,0,`&minus;1 &divide; (&minus;3) is positive.`]]),
 {t:`P: <i>y</i> = 10 &minus; 12 = &minus;2, so P(4, &minus;2)`,m:"B1"},
 {t:`<i>y</i> + 2 = ${F(1,3)}(<i>x</i> &minus; 4)`,m:"M1"},
 {t:`<b><i>x</i> &minus; 3<i>y</i> &minus; 10 = 0</b>`,m:"A1"},
 {t:`(b) M(0, 10) and N(0, &minus;${F(10,3)}), so MN = ${F(40,3)}`,m:"M1"},
 C("Base and height",`With base MN on the <i>y</i>-axis, the height of triangle MPN is:`,[[`4, the <i>x</i>-coordinate of P`,1,`Yes: the horizontal distance from P to the <i>y</i>-axis.`],[`&minus;2, the <i>y</i>-coordinate of P`,0,`The height must be perpendicular to the base. The base is vertical, so the height is horizontal.`],[`the length MP`,0,`MP is a side, not a perpendicular height.`]]),
 {t:`Area = ½ &times; ${F(40,3)} &times; 4 = <b>${F(80,3)}</b>`,m:"dM1 A1"}]},

{n:3,marks:6,topic:"Area, cosine and sine rules",
 hints:[`Area = ½ &times; 15 &times; 10 &times; sin &theta; = 60.`,`&theta; is the largest angle, so it is obtuse: cos &theta; = &minus;${F(3,5)}. The smallest angle is opposite the shortest side.`],
 steps:[
 {t:`60 = ½ &times; 15 &times; 10 &times; sin &theta; &rArr; sin &theta; = ${F(60,75)} = ${F(4,5)}`,m:"B1*"},
 C("Obtuse angle from sine",`&theta; is the largest angle. So cos &theta; is:`,[[`&minus;${F(3,5)}`,1,`Yes: &theta; is obtuse (180&deg; &minus; 53.1&deg; = 126.9&deg;), so its cosine is negative.`],[`${F(3,5)}`,0,`That's the acute angle. The largest angle here is the obtuse one.`]]),
 {t:`BC² = 15² + 10² &minus; 2(15)(10)(&minus;${F(3,5)}) = 505`,m:"M1 dM1"},
 {t:`<b>BC = 22.5 m</b>`,m:"A1"},
 C("Smallest angle",`The smallest angle is opposite:`,[[`AC = 10, so it's angle B`,1,`Yes: smallest side, smallest angle.`],[`AB = 15`,0,`The smallest angle is opposite the SHORTEST side.`]]),
 {t:`sin B = ${F("10 &times; 0.8",22.47)} &rArr; <b>B = 20.9&deg;</b>`,m:"M1 A1"}]},

{n:4,marks:10,topic:"Differentiation and hidden quadratics",
 hints:[`2<i>x</i>²${R("<i>x</i>")} = 2<i>x</i><sup>5/2</sup>. Differentiate, set to 0, and factor out <i>x</i><sup>3/2</sup>.`,`For (b)(ii), let <i>u</i> = ${R("<i>x</i>")}: 4<i>u</i>² &minus; 5<i>u</i> &minus; 44 = 0. A square root can't be negative.`],
 steps:[
 C("Index laws",`<i>x</i>²${R("<i>x</i>")} as a single power is:`,[[`<i>x</i><sup>5/2</sup>`,1,`Yes: 2 + ½.`],[`<i>x</i><sup>1</sup>`,0,`Multiplying powers: ADD the indices. 2 + ½ = ${F(5,2)}.`],[`<i>x</i><sup>3/2</sup>`,0,`That would be <i>x</i>${R("<i>x</i>")}. Here it's <i>x</i>², so 2 + ½ = ${F(5,2)}.`]]),
 {t:`f&prime;(<i>x</i>) = 3<i>x</i>² &minus; 5<i>x</i><sup>3/2</sup>`,m:"B1 M1 A1"},
 {t:`<i>x</i><sup>3/2</sup>(3<i>x</i><sup>½</sup> &minus; 5) = 0, <i>x</i> &gt; 0 &rArr; <i>x</i><sup>½</sup> = ${F(5,3)}`,m:"dM1"},
 {t:`<b><i>x</i> = ${F(25,9)}</b>`,m:"A1"},
 {t:`(b)(i) f&Prime;(<i>x</i>) = 6<i>x</i> &minus; ${F(15,2)}<i>x</i><sup>½</sup> = 66; &times; ${F(2,3)}: <b>4<i>x</i> &minus; 5<i>x</i><sup>½</sup> &minus; 44 = 0</b>`,m:"M1 A1*"},
 {t:`(ii) Let <i>u</i> = <i>x</i><sup>½</sup>: 4<i>u</i>² &minus; 5<i>u</i> &minus; 44 = 0 &rArr; (4<i>u</i> + 11)(<i>u</i> &minus; 4) = 0`,m:"M1"},
 C("Square roots are non-negative",`<i>u</i> = ${R("<i>x</i>")} = &minus;${F(11,4)} is:`,[[`impossible, since ${R("<i>x</i>")} &ge; 0`,1,`Yes, reject it. That is why <i>x</i> = 16 is the ONLY solution.`],[`<i>x</i> = ${F(121,16)}`,0,`${R("<i>x</i>")} can't equal a negative number, so this gives no solution.`]]),
 {t:`<i>u</i> = 4 &rArr; <i>x</i> = 16 only (the other root is rejected, with the reason stated)`,m:"dM1 A1*"}]},

{n:5,marks:7,topic:"Completing the square and regions",
 hints:[`Take &minus;2 out of the <i>x</i> terms: &minus;2(<i>x</i>² &minus; 6<i>x</i>) + 7.`,`The line through O and P(3, 25) has gradient ${F(25,3)}. R is below the curve, above the line, right of the <i>y</i>-axis.`],
 steps:[
 {t:`&minus;2(<i>x</i>² &minus; 6<i>x</i>) + 7 = &minus;2[(<i>x</i> &minus; 3)² &minus; 9] + 7`,m:"B1 M1"},
 C("Negative leading coefficient",`&minus;2 &times; (&minus;9) + 7 = ?`,[[`25`,1,`Yes: +18 + 7.`],[`&minus;11`,0,`&minus;2 &times; &minus;9 = +18, not &minus;18.`],[`16`,0,`The &minus;9 is multiplied by &minus;2 first.`]]),
 {t:`<b>&minus;2(<i>x</i> &minus; 3)² + 25</b>`,m:"A1"},
 {t:`(b) Maximum when the bracket is 0: <b>P(3, 25)</b>`,m:"M1 A1"},
 {t:`(c) <i>l</i>: <i>y</i> = ${F(25,3)}<i>x</i>`},
 C("Defining regions",`R lies:`,[[`above <i>l</i>, below C, and with <i>x</i> &ge; 0`,1,`Yes: read it from the shading in Figure 1.`],[`below <i>l</i> and above C`,0,`Look at the shading: R is under the curve and over the line.`]]),
 {t:`<b>${F(25,3)}<i>x</i> &le; <i>y</i> &le; &minus;2<i>x</i>² + 12<i>x</i> + 7, &nbsp;<i>x</i> &ge; 0</b>`,m:"B1 B1"}]},

{n:6,marks:7,topic:"Cubic graphs and intersections",
 hints:[`Touching at &minus;${F(3,2)} means a squared factor (2<i>x</i> + 3)². Crossing at 4 gives (<i>x</i> &minus; 4). Use the <i>y</i>-intercept &minus;12 to find the constant.`,`Set f(<i>x</i>) = 2<i>x</i> &minus; 12. The &minus;36 and &minus;36 cancel, leaving <i>x</i> as a factor.`],
 steps:[
 C("Repeated roots",`The curve touches the <i>x</i>-axis at &minus;${F(3,2)}. So f(<i>x</i>) contains:`,[[`(2<i>x</i> + 3)²`,1,`Yes: touching means a repeated root.`],[`(2<i>x</i> + 3)`,0,`A single factor would cross the axis. Touching needs it squared.`],[`(2<i>x</i> &minus; 3)²`,0,`<i>x</i> = &minus;${F(3,2)} makes 2<i>x</i> + 3 zero.`]]),
 {t:`f(<i>x</i>) = <i>k</i>(2<i>x</i> + 3)²(<i>x</i> &minus; 4)`,m:"M1"},
 {t:`f(0) = <i>k</i>(9)(&minus;4) = &minus;12 &rArr; <i>k</i> = ${F(1,3)}`,m:"dM1"},
 {t:`<b>f(<i>x</i>) = ${F(1,3)}(2<i>x</i> + 3)²(<i>x</i> &minus; 4)</b> = ${F(1,3)}(4<i>x</i>³ &minus; 4<i>x</i>² &minus; 39<i>x</i> &minus; 36)`,m:"A1"},
 {t:`(b) ${F(1,3)}(4<i>x</i>³ &minus; 4<i>x</i>² &minus; 39<i>x</i> &minus; 36) = 2<i>x</i> &minus; 12 &rArr; 4<i>x</i>³ &minus; 4<i>x</i>² &minus; 45<i>x</i> = 0`,m:"M1 A1"},
 {t:`<i>x</i>(4<i>x</i>² &minus; 4<i>x</i> &minus; 45) = 0; <i>x</i> = 0 is the known point (0, &minus;12)`},
 {t:`<i>x</i> = ${F("4 &plusmn; "+R("736"),8)} = <b>${F("1 &plusmn; 2"+R("46"),2)}</b> &nbsp;(${R("736")} = 4${R("46")})`,m:"dM1 A1"}]},

{n:7,marks:7,topic:"Radians: simultaneous equations",
 hints:[`Area: ½<i>r</i>²&theta; = 1. Perimeter: 2<i>r</i> + <i>r</i>&theta; = 8.`,`From the area, &theta; = ${F(2,"<i>r</i>²")}. Substitute into the perimeter and you get a quadratic in <i>r</i>.`],
 steps:[
 {t:`½<i>r</i>²&theta; = 1 and 2<i>r</i> + <i>r</i>&theta; = 8`,m:"B1 B1"},
 C("Perimeter of a sector",`The perimeter of the sector is:`,[[`2<i>r</i> + <i>r</i>&theta;`,1,`Yes: two radii plus the arc.`],[`<i>r</i>&theta;`,0,`That's only the arc. Add the two radii.`]]),
 {t:`&theta; = ${F(2,"<i>r</i>²")} &rArr; 2<i>r</i> + ${F(2,"<i>r</i>")} = 8 &rArr; <i>r</i>² &minus; 4<i>r</i> + 1 = 0`,m:"M1 A1"},
 {t:`<i>r</i> = ${F("4 &plusmn; "+R("12"),2)} = 2 &plusmn; ${R("3")}; <i>r</i> &gt; 2 &rArr; <b><i>r</i> = 2 + ${R("3")}</b>`,m:"dM1"},
 C("Rationalising the denominator",`&theta; = ${F(2,"(2 + "+R("3")+")²")} = ${F(2,"7 + 4"+R("3"))}. Multiply top and bottom by:`,[[`7 &minus; 4${R("3")}`,1,`Yes: (7 + 4${R("3")})(7 &minus; 4${R("3")}) = 49 &minus; 48 = 1.`],[`7 + 4${R("3")}`,0,`You need the conjugate, with the opposite sign.`],[`${R("3")}`,0,`That leaves a surd in the denominator.`]]),
 {t:`<b>&theta; = 14 &minus; 8${R("3")}</b>`,m:"A1 A1"}]},

{n:8,marks:11,topic:"Tangents, normals and integration",
 hints:[`k is the gradient of the tangent, so k = f&prime;(¼). At <i>x</i> = ¼, ${R("<i>x</i>")} = ½ and 2<i>x</i>² = ${F(1,8)}.`,`For f(<i>x</i>), split the fraction: ${F("5"+R("<i>x</i>")+" &minus; 4","2<i>x</i>²")} = ${F(5,2)}<i>x</i><sup>&minus;3/2</sup> &minus; 2<i>x</i><sup>&minus;2</sup>.`],
 steps:[
 {t:`f&prime;(¼) = 10 + ${F("5(½) &minus; 4","2(¼)²")} = 10 + ${F("&minus;1.5",F(1,8))} = 10 &minus; 12 = &minus;2`,m:"M1"},
 {t:`<b><i>k</i> = &minus;2</b>`,m:"A1"},
 {t:`(ii) P on the tangent: <i>y</i> = &minus;2(¼) + 2 = ${F(3,2)}`,m:"M1 A1"},
 C("Normal and tangent gradients",`The normal gradient is:`,[[`½`,1,`Yes: &minus;1 &divide; (&minus;2).`],[`&minus;2`,0,`That's the tangent gradient.`],[`&minus;½`,0,`&minus;1 &divide; (&minus;2) is positive.`]]),
 {t:`<i>y</i> &minus; ${F(3,2)} = ½(<i>x</i> &minus; ¼) &rArr; <b><i>y</i> = ½<i>x</i> + ${F(11,8)}</b>`,m:"dM1 A1"},
 C("Splitting fractions",`${F("5"+R("<i>x</i>")+" &minus; 4","2<i>x</i>²")} written as powers of <i>x</i> is:`,[[`${F(5,2)}<i>x</i><sup>&minus;3/2</sup> &minus; 2<i>x</i><sup>&minus;2</sup>`,1,`Yes: ½ &minus; 2 = &minus;${F(3,2)} for the first power.`],[`${F(5,2)}<i>x</i><sup>&minus;4</sup> &minus; 2<i>x</i><sup>&minus;2</sup>`,0,`<i>x</i><sup>½</sup> &divide; <i>x</i>² = <i>x</i><sup>½ &minus; 2</sup> = <i>x</i><sup>&minus;3/2</sup>.`]]),
 {t:`f(<i>x</i>) = 10<i>x</i> &minus; 5<i>x</i><sup>&minus;½</sup> + 2<i>x</i><sup>&minus;1</sup> + <i>c</i>`,m:"M1 A1 A1"},
 {t:`P(¼, ${F(3,2)}): 2.5 &minus; 10 + 8 + <i>c</i> = 1.5 &rArr; <i>c</i> = 1`,m:"dM1"},
 {t:`<b>f(<i>x</i>) = 10<i>x</i> &minus; ${F(5,R("<i>x</i>"))} + ${F(2,"<i>x</i>")} + 1</b>`,m:"A1"}]},

{n:9,marks:5,topic:"Trig graphs",
 hints:[`sin is at its minimum when the angle is ${F("3&pi;",2)}. So <i>x</i> + ${F("&pi;",8)} = ${F("3&pi;",2)}.`,`Each 2&pi; period gives 2 solutions. Count the periods in 101&pi; carefully, including <i>x</i> = 0.`],
 steps:[
 {t:`<i>x</i> + ${F("&pi;",8)} = ${F("3&pi;",2)} &rArr; <b><i>x</i> = ${F("11&pi;",8)}</b>`,m:"B1"},
 C("Counting solutions",`How many solutions of sin(<i>x</i> + ${F("&pi;",8)}) = sin ${F("&pi;",8)} lie in each full period 2&pi;?`,[[`2`,1,`Yes: the line <i>y</i> = sin ${F("&pi;",8)} cuts each wave twice.`],[`1`,0,`A horizontal line between &minus;1 and 1 cuts a sine wave twice per period.`]]),
 {t:`0 &le; <i>x</i> &lt; 100&pi; is 50 periods: 100 solutions. 100&pi; &le; <i>x</i> &lt; 101&pi; adds 2 more (<i>x</i> = 100&pi; and 100&pi; + ${F("3&pi;",4)}).`},
 {t:`<b>102</b> (50 &times; 2 + 2)`,m:"B1 dB1"},
 C("Transformations outside f",`<i>y</i> = &minus;5 sin(<i>x</i> + ${F("&pi;",8)}) has its minimum where sin(<i>x</i> + ${F("&pi;",8)}) is:`,[[`1 (its maximum)`,1,`Yes: &minus;5 &times; 1 = &minus;5, the lowest value.`],[`&minus;1`,0,`&minus;5 &times; (&minus;1) = +5, a maximum.`]]),
 {t:`<i>x</i> + ${F("&pi;",8)} = ${F("&pi;",2)} &rArr; <b>Q(${F("3&pi;",8)}, &minus;5)</b>`,m:"B1 B1"}]},

{n:10,marks:11,topic:"Reciprocal graphs and tangents",
 hints:[`<i>y</i> = ${F("3<i>k</i>","<i>x</i> &minus; 2<i>k</i>")}: vertical asymptote <i>x</i> = 2<i>k</i>, <i>y</i>-intercept at <i>x</i> = 0.`,`Substitute <i>y</i> = 12 &minus; <i>x</i>, multiply out, and use <i>b</i>² &minus; 4<i>ac</i> = 0 for a tangent.`],
 steps:[
 {plot:{fns:[x=>3/(x-2)],x:[-4,7],y:[-6,6],v:[[2,"x = 2k"]],pts:[[0,-1.5,"(0, −3/2)",6,14]],label:"y = 3k/(x − 2k), drawn with k = 1"}},
 {t:`Two branches, asymptotes <i>x</i> = 2<i>k</i> and <i>y</i> = 0`,m:"M1 A1"},
 {t:`<i>x</i> = 0: <i>y</i> = ${F("3<i>k</i>","&minus;2<i>k</i>")} = <b>&minus;${F(3,2)}</b>, so (0, &minus;${F(3,2)})`,m:"B1"},
 {t:`(b) 12 &minus; <i>x</i> = ${F("3<i>k</i>","<i>x</i> &minus; 2<i>k</i>")} &rArr; <i>x</i>² &minus; (12 + 2<i>k</i>)<i>x</i> + 27<i>k</i> = 0`,m:"M1 A1"},
 C("Tangents and the discriminant",`<i>l</i> is a tangent to C, so:`,[[`<i>b</i>² &minus; 4<i>ac</i> = 0`,1,`Yes: a tangent meets the curve at one repeated point.`],[`<i>b</i>² &minus; 4<i>ac</i> &gt; 0`,0,`That's two separate intersections, not a tangent.`]]),
 {t:`(12 + 2<i>k</i>)² &minus; 108<i>k</i> = 0 &rArr; 4<i>k</i>² &minus; 60<i>k</i> + 144 = 0 &rArr; <b><i>k</i>² &minus; 15<i>k</i> + 36 = 0</b>`,m:"dM1 A1*"},
 {t:`(c) (<i>k</i> &minus; 3)(<i>k</i> &minus; 12) = 0 &rArr; <i>k</i> = 3 or 12`,m:"M1"},
 {t:`Repeated root <i>x</i> = ${F("12 + 2<i>k</i>",2)} = 6 + <i>k</i>: <i>k</i> = 3 gives <i>x</i> = 9, <i>k</i> = 12 gives <i>x</i> = 18`,m:"dM1"},
 C("Using a condition",`P is below the <i>x</i>-axis, so <i>y</i> = 12 &minus; <i>x</i> &lt; 0. Which <i>k</i>?`,[[`<i>k</i> = 12, giving <i>x</i> = 18`,1,`Yes: <i>y</i> = 12 &minus; 18 = &minus;6.`],[`<i>k</i> = 3, giving <i>x</i> = 9`,0,`Then <i>y</i> = 3, which is above the axis.`]]),
 {t:`<b>P(18, &minus;6)</b>`,m:"A1 A1"}]}
]});
