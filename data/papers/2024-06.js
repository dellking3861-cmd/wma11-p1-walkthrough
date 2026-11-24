/* June 2024 WMA11/01: walkthroughs from the official mark scheme and examiner report. */
WT.add({id:"2024-06",qs:[
Object.assign({n:1},G("Jun 2024 · Q1")),
{n:2,marks:6,topic:"Indices and surds",
 hints:[`2<sup><i>n</i>+3</sup> = 2<sup><i>n</i></sup> &times; 2³. Write 16 as 2⁴.`,`Collect the <i>x</i> terms on one side: <i>x</i>(${R("3")} &minus; 1) = 3 + ${R("3")}. Then rationalise.`],
 steps:[
 {t:`(i)(a) 2<sup><i>n</i>+3</sup> = 2³ &times; 2<sup><i>n</i></sup> = <b>8<i>m</i></b>`,m:"B1"},
 C("Index laws",`16<sup>3<i>n</i></sup> = ?`,[[`<i>m</i>¹²`,1,`Yes: (2⁴)<sup>3<i>n</i></sup> = 2<sup>12<i>n</i></sup> = (2<sup><i>n</i></sup>)¹².`],[`16<i>m</i>³`,0,`16 is also a power of 2: 16<sup>3<i>n</i></sup> = 2<sup>12<i>n</i></sup>.`],[`<i>m</i><sup>48</sup>`,0,`(2⁴)<sup>3<i>n</i></sup> = 2<sup>12<i>n</i></sup>: multiply 4 &times; 3 = 12.`]]),
 {t:`(b) <b><i>m</i>¹²</b>`,m:"M1 A1"},
 {t:`(ii) <i>x</i>${R("3")} &minus; <i>x</i> = 3 + ${R("3")} &rArr; <i>x</i> = ${F("3 + "+R("3"),R("3")+" &minus; 1")}`,m:"M1"},
 {t:`&times; ${F(R("3")+" + 1",R("3")+" + 1")}: ${F("3"+R("3")+" + 3 + 3 + "+R("3"),2)} = ${F("6 + 4"+R("3"),2)}`,m:"dM1"},
 {t:`<b><i>x</i> = 3 + 2${R("3")}</b>`,m:"A1"}]},

{n:3,marks:6,topic:"Graph transformations",
 hints:[`f(<i>x</i> + 3) moves everything 3 left: roots &minus;1 and 3 become &minus;4 and 0.`,`f(&minus;3<i>x</i>): solve &minus;3<i>x</i> = &minus;1 and &minus;3<i>x</i> = 3 for the new roots. The <i>y</i>-intercept stays at f(0) = 2.`],
 steps:[
 C("Transformations inside f",`<i>y</i> = f(<i>x</i> + 3) is f moved:`,[[`3 left`,1,`Yes: plus inside moves left.`],[`3 right`,0,`Inside the bracket is reversed: +3 means left.`]]),
 {t:`(a) Crosses at <b>(&minus;4, 0)</b>, touches at <b>(0, 0)</b>. The old max at (0, 2) moves to (&minus;3, 2).`,m:"M1 A1 A1"},
 C("Stretches and reflections",`For <i>y</i> = f(&minus;3<i>x</i>), the root at <i>x</i> = 3 moves to:`,[[`<i>x</i> = &minus;1`,1,`Yes: &minus;3<i>x</i> = 3.`],[`<i>x</i> = &minus;9`,0,`Divide by &minus;3, don't multiply: inside the bracket works the opposite way.`],[`<i>x</i> = 1`,0,`The minus sign also reflects in the <i>y</i>-axis.`]]),
 {t:`(b) Crosses at <b>(${F(1,3)}, 0)</b>, touches at <b>(&minus;1, 0)</b>, <i>y</i>-intercept <b>(0, 2)</b>; the shape is reflected left to right`,m:"M1 A1 A1"},
 {er:`Examiner report: some <i>x</i>-intercepts in (a) suggested a stretch instead of a translation. A translation keeps the shape and just slides it.`}]},

Object.assign({n:4},G("Jun 2024 · Q4")),

{n:5,marks:7,topic:"Radians: sectors and triangles",
 hints:[`Sector BDE: ½ &times; 6² &times; 1.3. Triangle ABE: use the cosine rule with all three sides.`,`A, B, C are in a line, so angle DBC = &pi; &minus; 1.3 &minus; ABE. Triangle BCD is right-angled at C with hypotenuse BD = 6.`],
 steps:[
 {t:`(a) ½ &times; 6² &times; 1.3 = <b>23.4 m²</b>`,m:"M1 A1"},
 {t:`(b) cos ABE = ${F("10.8² + 6² &minus; 12.2²","2 &times; 10.8 &times; 6")} = ${F(19,648)}`,m:"M1"},
 {t:`<b>ABE = 1.54</b>`,m:"A1"},
 C("Angles on a straight line",`Angle DBC = ?`,[[`&pi; &minus; 1.3 &minus; 1.54 = 0.30`,1,`Yes: ABE + EBD + DBC = &pi; along the line ABC.`],[`2&pi; &minus; 1.3 &minus; 1.54`,0,`A straight line is &pi;, not 2&pi;.`]]),
 {t:`(c) Triangle ABE = ½ &times; 10.8 &times; 6 &times; sin 1.54 = 32.4`,m:"M1"},
 {t:`Triangle BCD = ½ &times; 6 cos 0.30 &times; 6 sin 0.30 = 5.1`,m:"M1"},
 {t:`Total = 23.4 + 32.4 + 5.1 = <b>60.9 m²</b>`,m:"A1"}]},

{n:6,marks:7,topic:"Line and curve intersections, regions",
 hints:[`<i>y</i> = 5<i>x</i> + 75. Set equal to 2<i>x</i>² + <i>x</i> &minus; 21 and solve with working shown.`,`R is above the <i>x</i>-axis, below the line, below the curve, and on the left. Describe each edge with an inequality.`],
 steps:[
 {t:`2<i>x</i>² + <i>x</i> &minus; 21 = 5<i>x</i> + 75 &rArr; 2<i>x</i>² &minus; 4<i>x</i> &minus; 96 = 0 &rArr; <i>x</i>² &minus; 2<i>x</i> &minus; 48 = 0`,m:"M1"},
 {t:`(<i>x</i> &minus; 8)(<i>x</i> + 6) = 0 &rArr; <i>x</i> = &minus;6 or 8`,m:"dM1 A1"},
 {t:`<b>P(&minus;6, 45), Q(8, 115)</b>`,m:"A1"},
 {er:`Examiner report: many lost 2 marks by solving the quadratic on a calculator. Show the factorising or formula.`},
 C("Defining regions",`R is below the curve. Which inequality?`,[[`<i>y</i> &le; 2<i>x</i>² + <i>x</i> &minus; 21`,1,`Yes: on the left of the parabola, the region is under the curve.`],[`<i>y</i> &ge; 2<i>x</i>² + <i>x</i> &minus; 21`,0,`R is outside (left of) the parabola, where the curve is above R.`]]),
 {t:`(b) <b><i>y</i> &ge; 0, &nbsp;<i>y</i> &le; 5<i>x</i> + 75, &nbsp;<i>y</i> &le; 2<i>x</i>² + <i>x</i> &minus; 21, &nbsp;<i>x</i> &lt; 0</b>`,m:"M1 A1 A1"}]},

{n:7,marks:8,topic:"Differentiation",
 hints:[`f&prime;(<i>x</i>) = 6<i>x</i>² &minus; 2<i>kx</i> + 14 and f&Prime;(<i>x</i>) = 12<i>x</i> &minus; 2<i>k</i>.`,`At A, <i>x</i> = 5 and the two expressions are equal. For B, set them equal with your <i>k</i> and solve.`],
 steps:[
 {t:`(a) <b>f&prime;(<i>x</i>) = 6<i>x</i>² &minus; 2<i>kx</i> + 14</b>, <b>f&Prime;(<i>x</i>) = 12<i>x</i> &minus; 2<i>k</i></b>`,m:"M1 A1 A1"},
 C("Intersections of curves",`The curves meet at <i>x</i> = 5 means:`,[[`f&prime;(5) = f&Prime;(5)`,1,`Yes: equal <i>y</i>-values at the meeting point.`],[`f&prime;(5) = 0`,0,`That would be a turning point of f. Here two curves meet.`]]),
 {t:`(b) 150 &minus; 10<i>k</i> + 14 = 60 &minus; 2<i>k</i> &rArr; <b><i>k</i> = 13</b>`,m:"M1 A1"},
 {t:`(c) 6<i>x</i>² &minus; 26<i>x</i> + 14 = 12<i>x</i> &minus; 26 &rArr; 3<i>x</i>² &minus; 19<i>x</i> + 20 = 0`,m:"M1"},
 {t:`(<i>x</i> &minus; 5)(3<i>x</i> &minus; 4) = 0 &rArr; <i>x</i> = ${F(4,3)}; <i>y</i> = 16 &minus; 26 = &minus;10`,m:"dM1"},
 {t:`<b>B(${F(4,3)}, &minus;10)</b>`,m:"A1"}]},

{n:8,marks:7,topic:"Cubic graphs and discriminant",
 hints:[`<i>x</i>(4 &minus; <i>x</i>²) = <i>x</i>(2 &minus; <i>x</i>)(2 + <i>x</i>): roots &minus;2, 0, 2, and the <i>x</i>³ coefficient is negative.`,`Four distinct points means two distinct POSITIVE values of <i>x</i>²: discriminant &gt; 0 and product of roots <i>A</i> &gt; 0.`],
 steps:[
 C("Shape of a cubic",`<i>y</i> = 4<i>x</i> &minus; <i>x</i>³ starts:`,[[`top-left and ends bottom-right`,1,`Yes: the &minus;<i>x</i>³ term makes it a negative cubic.`],[`bottom-left and ends top-right`,0,`That is a positive cubic. Here the <i>x</i>³ coefficient is &minus;1.`]]),
 {plot:{fns:[x=>x*(4-x*x)],x:[-3.5,3.5],y:[-6,6],pts:[[-2,0,"(−2, 0)",-36,16],[2,0,"(2, 0)",6,16]],label:"y = x(4 − x²)"}},
 {t:`(a) Negative cubic through (&minus;2, 0), (0, 0), (2, 0)`,m:"B1 B1 B1"},
 {t:`(b) <i>x</i>(4 &minus; <i>x</i>²) = ${F("<i>A</i>","<i>x</i>")} &rArr; 4<i>x</i>² &minus; <i>x</i>⁴ = <i>A</i> &rArr; <b><i>x</i>⁴ &minus; 4<i>x</i>² + <i>A</i> = 0</b>`,m:"B1*"},
 C("Hidden quadratics",`For 4 distinct values of <i>x</i>, the quadratic in <i>x</i>² needs:`,[[`two distinct positive roots`,1,`Yes: each positive <i>x</i>² gives &plusmn;<i>x</i>, so 2 &times; 2 = 4.`],[`just <i>b</i>² &minus; 4<i>ac</i> &gt; 0`,0,`Also both roots for <i>x</i>² must be positive, otherwise you lose solutions.`]]),
 {t:`(c) 16 &minus; 4<i>A</i> &gt; 0 &rArr; <i>A</i> &lt; 4; product of roots <i>A</i> &gt; 0`,m:"M1 A1"},
 {t:`<b>0 &lt; <i>A</i> &lt; 4</b>`,m:"A1"}]},

{n:9,marks:9,topic:"Straight lines and distance",
 hints:[`Gradient AB = ${F(5,11)}. <i>l</i>₂ is horizontal through A: <i>y</i> = 2.`,`C = (<i>c</i>, 2). BC² = (<i>c</i> &minus; 15)² + (2 &minus; 7)² = 125.`],
 steps:[
 {t:`<i>m</i> = ${F("7 &minus; 2","15 &minus; 4")} = ${F(5,11)}; <i>y</i> &minus; 2 = ${F(5,11)}(<i>x</i> &minus; 4)`,m:"M1 M1"},
 {t:`<b>5<i>x</i> &minus; 11<i>y</i> + 2 = 0</b>`,m:"A1"},
 C("Distance between points",`C = (<i>c</i>, 2) and BC = 5${R("5")}. Which equation?`,[[`(<i>c</i> &minus; 15)² + 5² = 125`,1,`Yes: (5${R("5")})² = 125, and the vertical gap is 7 &minus; 2 = 5.`],[`(<i>c</i> &minus; 15)² + 5² = 5${R("5")}`,0,`Pythagoras uses BC², so square 5${R("5")} to get 125.`]]),
 {t:`(<i>c</i> &minus; 15)² = 100 &rArr; <i>c</i> = 5 or 25`,m:"M1 A1"},
 {t:`<b>C(5, 2) or C(25, 2)</b>`,m:"A1"},
 C("Base and height",`Triangle ABC with AC on <i>y</i> = 2 has height:`,[[`5, the vertical distance from B to <i>y</i> = 2`,1,`Yes: 7 &minus; 2.`],[`5${R("5")}`,0,`BC is a side, not the perpendicular height.`]]),
 {t:`(c) Smaller AC = 5 &minus; 4 = 1: area = ½ &times; 1 &times; 5 = <b>2.5</b>`,m:"M1 A1"}]},

{n:10,marks:10,topic:"Normals and integration",
 hints:[`At <i>x</i> = 4, ${R("<i>x</i>")} = 2: f&prime;(4) = 24 &minus; ${F("7 &times; 14",4)}.`,`Expand (2<i>x</i> &minus; 1)(3<i>x</i> + 2) = 6<i>x</i>² + <i>x</i> &minus; 2, divide each term by 2<i>x</i><sup>½</sup>, then integrate.`],
 steps:[
 {t:`f&prime;(4) = 24 &minus; ${F(98,4)} = &minus;½`,m:"M1 A1"},
 C("Fractional powers",`At <i>x</i> = 4, 2${R("<i>x</i>")} = ?`,[[`4`,1,`Yes: ${R("4")} = 2. The report says many couldn't evaluate these powers.`],[`8`,0,`${R("4")} = 2, so 2${R("4")} = 4.`]]),
 {t:`Normal gradient 2: <i>y</i> &minus; 12 = 2(<i>x</i> &minus; 4) &rArr; <b><i>y</i> = 2<i>x</i> + 4</b>`,m:"M1 A1"},
 {t:`(b) ${F("6<i>x</i>² + <i>x</i> &minus; 2","2<i>x</i><sup>½</sup>")} = 3<i>x</i><sup>3/2</sup> + ½<i>x</i><sup>½</sup> &minus; <i>x</i><sup>&minus;½</sup>`,m:"M1"},
 {t:`f&prime;(<i>x</i>) = 6<i>x</i> &minus; 3<i>x</i><sup>3/2</sup> &minus; ½<i>x</i><sup>½</sup> + <i>x</i><sup>&minus;½</sup>`,m:"A1"},
 C("Signs when subtracting a fraction",`Subtracting (3<i>x</i><sup>3/2</sup> + ½<i>x</i><sup>½</sup> &minus; <i>x</i><sup>&minus;½</sup>) changes the last term to:`,[[`+<i>x</i><sup>&minus;½</sup>`,1,`Yes: minus a minus is plus.`],[`&minus;<i>x</i><sup>&minus;½</sup>`,0,`The minus in front applies to every term in the bracket.`]]),
 {t:`f(<i>x</i>) = 3<i>x</i>² &minus; ${F(6,5)}<i>x</i><sup>5/2</sup> &minus; ${F(1,3)}<i>x</i><sup>3/2</sup> + 2<i>x</i><sup>½</sup> + <i>c</i>`,m:"M1 A1"},
 {t:`P(4, 12): 48 &minus; ${F(192,5)} &minus; ${F(8,3)} + 4 + <i>c</i> = 12 &rArr; <i>c</i> = ${F(16,15)}`,m:"dM1"},
 {t:`<b>f(<i>x</i>) = 3<i>x</i>² &minus; ${F(6,5)}<i>x</i><sup>5/2</sup> &minus; ${F(1,3)}<i>x</i><sup>3/2</sup> + 2<i>x</i><sup>½</sup> + ${F(16,15)}</b>`,m:"A1"}]},

{n:11,marks:6,topic:"Trig graphs and transformations",
 hints:[`12 sin <i>x</i> has maxima at ${F("&pi;",2)}, ${F("5&pi;",2)}, ... P is the second maximum shown.`,`Adding <i>k</i> moves the graph up: max 12 + <i>k</i> = 3. For C₃ the minimum is &minus;12, where <i>x</i> + B = ${F("3&pi;",2)}.`],
 steps:[
 {t:`(a) <b>P(${F("5&pi;",2)}, 12)</b>`,m:"B1 B1"},
 {t:`(b) 12 + <i>k</i> = 3 &rArr; <i>k</i> = &minus;9; minimum &minus;12 &minus; 9 = &minus;21 at <i>x</i> = ${F("3&pi;",2)}: <b>(${F("3&pi;",2)}, &minus;21)</b>`,m:"B1 B1"},
 C("Horizontal translations",`For <i>y</i> = 12 sin(<i>x</i> + B), the minimum is at <i>x</i> + B = ${F("3&pi;",2)}. With <i>x</i> = ${F("&pi;",4)}, B = ?`,[[`${F("5&pi;",4)}`,1,`Yes: ${F("3&pi;",2)} &minus; ${F("&pi;",4)}.`],[`${F("7&pi;",4)}`,0,`Subtract: ${F("6&pi;",4)} &minus; ${F("&pi;",4)} = ${F("5&pi;",4)}.`]]),
 {t:`(c) <b>A = &minus;12</b>, <b>B = ${F("5&pi;",4)}</b>`,m:"B1 B1"},
 {er:`Examiner report: answers were required in radians. Coordinates in degrees lost marks.`}]}
]});
