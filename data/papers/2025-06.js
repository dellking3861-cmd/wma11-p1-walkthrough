/* June 2025 WMA11/01: walkthroughs from the official mark scheme and examiner report. */
WT.add({id:"2025-06",qs:[
{n:1,marks:5,topic:"Indices",
 hints:[`<i>q</i> = 40<i>x</i><sup>&minus;3</sup>. A power outside a bracket applies to the number and the <i>x</i>.`,`(<i>pq</i>)<sup>&minus;1</sup> = ${F(1,"<i>pq</i>")}: simplify <i>pq</i> first, then flip it.`],
 steps:[
 {t:`(a) <i>p</i><sup>½</sup> = (${F(1,16)})<sup>½</sup>(<i>x</i>⁴)<sup>½</sup> = <b>${F(1,4)}<i>x</i>²</b>`,m:"B1"},
 {t:`<i>pq</i> = ${F(1,16)}<i>x</i>⁴ &times; 40<i>x</i><sup>&minus;3</sup> = ${F(5,2)}<i>x</i>`,m:"M1"},
 C("Negative indices",`(${F(5,2)}<i>x</i>)<sup>&minus;1</sup> = ?`,[[`${F(2,5)}<i>x</i><sup>&minus;1</sup>`,1,`Yes: flip the number AND the <i>x</i>.`],[`&minus;${F(5,2)}<i>x</i>`,0,`A negative power means reciprocal, not negative.`],[`${F(2,5)}<i>x</i>`,0,`The <i>x</i> gets the power &minus;1 too.`]]),
 {t:`(b) <b>${F(2,5)}<i>x</i><sup>&minus;1</sup></b>`,m:"A1"},
 {t:`(c) <i>pq</i>² = ${F(1,16)}<i>x</i>⁴ &times; 1600<i>x</i><sup>&minus;6</sup> = <b>100<i>x</i><sup>&minus;2</sup></b>`,m:"M1 A1"},
 {er:`Examiner report: answers with <i>x</i> left in a denominator were not in the required form <i>kx<sup>n</sup></i>.`}]},

{n:2,marks:5,topic:"Differentiation and indices",
 hints:[`d<i>y</i>/d<i>x</i> = 5<i>x</i><sup>3/2</sup> &minus; 4. Set it equal to 16.`,`<i>x</i><sup>3/2</sup> = 4 means <i>x</i> = 4<sup>2/3</sup>. Write 4 as 2² so <i>x</i> is a power of 2.`],
 steps:[
 {t:`${F("d<i>y</i>","d<i>x</i>")} = 2 &times; ${F(5,2)}<i>x</i><sup>3/2</sup> &minus; 4 = <b>5<i>x</i><sup>3/2</sup> &minus; 4</b>`,m:"M1 A1"},
 {t:`5<i>x</i><sup>3/2</sup> &minus; 4 = 16 &rArr; <i>x</i><sup>3/2</sup> = 4`,m:"M1"},
 C("Undoing a fractional power",`<i>x</i><sup>3/2</sup> = 4, so <i>x</i> = ?`,[[`4<sup>2/3</sup>`,1,`Yes: raise both sides to the power ${F(2,3)}.`],[`4<sup>3/2</sup> = 8`,0,`To undo the power ${F(3,2)}, use its reciprocal ${F(2,3)}.`],[`${F(8,3)}`,0,`Powers aren't undone by multiplying or dividing.`]]),
 {t:`<i>x</i> = (2²)<sup>2/3</sup> = 2<sup>4/3</sup> = 2<sup><i>k</i></sup>`,m:"dM1"},
 {t:`<b><i>k</i> = ${F(4,3)}</b>`,m:"A1"}]},

{n:3,marks:5,topic:"Integration",
 hints:[`Expand (<i>x</i> + 3)² = <i>x</i>² + 6<i>x</i> + 9, then divide every term by 3<i>x</i><sup>½</sup>.`,`You should get ${F(1,3)}<i>x</i><sup>3/2</sup> + 2<i>x</i><sup>½</sup> + 3<i>x</i><sup>&minus;½</sup> before integrating.`],
 steps:[
 C("Splitting fractions",`${F("6<i>x</i>","3"+R("<i>x</i>"))} simplifies to:`,[[`2<i>x</i><sup>½</sup>`,1,`Yes: ${F(6,3)} = 2 and <i>x</i>¹ &divide; <i>x</i><sup>½</sup> = <i>x</i><sup>½</sup>.`],[`2<i>x</i>`,0,`Divide the powers of <i>x</i> too: 1 &minus; ½ = ½.`],[`18<i>x</i><sup>½</sup>`,0,`You multiplied by 3 instead of dividing.`]]),
 {t:`${F("<i>x</i>² + 6<i>x</i> + 9","3<i>x</i><sup>½</sup>")} = ${F(1,3)}<i>x</i><sup>3/2</sup> + 2<i>x</i><sup>½</sup> + 3<i>x</i><sup>&minus;½</sup>`,m:"M1 A1"},
 {t:`&int; = ${F(2,15)}<i>x</i><sup>5/2</sup> + ${F(4,3)}<i>x</i><sup>3/2</sup> + 6<i>x</i><sup>½</sup>`,m:"M1 A1"},
 {t:`<b>${F(2,15)}<i>x</i><sup>5/2</sup> + ${F(4,3)}<i>x</i><sup>3/2</sup> + 6<i>x</i><sup>½</sup> + <i>c</i></b>`,m:"A1"},
 {er:`Examiner report: the usual slip was the middle term (9<i>x</i> or 12<i>x</i> instead of 6<i>x</i> in the expansion), or a missing + <i>c</i>.`}]},

{n:4,marks:6,topic:"Trig graphs (degrees)",
 hints:[`<i>y</i> = 4 cos <i>x</i> has a maximum at 0, crosses at 90&deg; and 270&deg;, minimum at &plusmn;180&deg;.`,`Rearrange each equation to cos <i>x</i> = something first, then count solutions per 360&deg;.`],
 steps:[
 {t:`(a) P is where the curve crosses going up, after the minimum at 180&deg;: <b>(270, 0)</b>`,m:"B1"},
 {t:`(b) Q is the minimum left of O: <b>(&minus;180, &minus;4)</b>`,m:"B1 B1"},
 C("Counting solutions",`4 cos <i>x</i> = 3 has how many solutions in each 360&deg;?`,[[`2`,1,`Yes: cos <i>x</i> = 0.75 is crossed twice per period.`],[`1`,0,`A horizontal line between &minus;4 and 4 cuts each full wave twice.`]]),
 {t:`(c)(i) 18000 &divide; 360 = 50 periods, 2 each: <b>100</b>`,m:"B1"},
 C("Max and min values",`5 + 4 cos <i>x</i> = 1 means cos <i>x</i> = &minus;1. That happens:`,[[`once per period, at the minimum`,1,`Yes: only touching points, at <i>x</i> = &plusmn;180&deg;, &plusmn;540&deg;.`],[`twice per period`,0,`&minus;1 is the lowest value: the line only touches the curve once per wave.`]]),
 {t:`(ii) <i>x</i> = &minus;540, &minus;180, 180, 540: <b>4</b>`,m:"B1"},
 {t:`(iii) cos <i>x</i> = 1 at 0, &plusmn;360, &plusmn;720, &plusmn;1080 (ends included): <b>7</b>`,m:"B1"}]},

{n:5,marks:7,topic:"Straight lines",
 hints:[`Rearrange <i>l</i>₁ to <i>y</i> = ½<i>x</i> + 12.5: gradient ½. <i>l</i>₂ is perpendicular and through the origin.`,`The shortest distance from <i>l</i>₁ to O is along the perpendicular, so it is the length OP.`],
 steps:[
 {t:`<i>l</i>₁: <i>y</i> = ½<i>x</i> + ${F(25,2)}, gradient ½`,m:"M1"},
 {t:`<b><i>l</i>₂: <i>y</i> = &minus;2<i>x</i></b>`,m:"A1"},
 {t:`(b) <i>x</i> &minus; 2(&minus;2<i>x</i>) + 25 = 0 &rArr; 5<i>x</i> = &minus;25`,m:"M1"},
 {t:`<b>P(&minus;5, 10)</b>`,m:"A1 A1"},
 C("Shortest distance",`Why is OP the shortest distance from <i>l</i>₁ to O?`,[[`OP is perpendicular to <i>l</i>₁`,1,`Yes: the perpendicular is always the shortest route to a line.`],[`P is the midpoint of <i>l</i>₁`,0,`A line has no midpoint. The reason is the right angle.`]]),
 {t:`(c) OP = ${R("5² + 10²")} = ${R("125")} = <b>5${R("5")}</b>`,m:"M1 A1"},
 {er:`Examiner report: sign errors when finding P were the most common loss of marks.`}]},

{n:6,marks:9,topic:"Radians: sine rule and sectors",
 hints:[`Triangle AOC has OA = 15, OC = 15 + 2 = 17 and angle C = 0.6. Use the sine rule for angle OAC, then COA = &pi; &minus; 0.6 &minus; OAC.`,`The major sector angle is 2&pi; &minus; 1.847. Perimeter = AC + CB + major arc.`],
 steps:[
 C("Reading the diagram",`OC = ?`,[[`17 m`,1,`Yes: OB + BC = 15 + 2, since C, B, O are in a line.`],[`2 m`,0,`BC is 2, but C is further from O: OC = 15 + 2.`]]),
 {t:`${F("sin OAC",17)} = ${F("sin 0.6",15)} &rArr; OAC = 0.694`,m:"M1"},
 {t:`COA = &pi; &minus; 0.6 &minus; 0.694 = <b>1.847</b>`,m:"M1 A1*"},
 {t:`(b) Triangle = ½ &times; 15 &times; 17 &times; sin 1.847 = 122.6`,m:"M1"},
 {t:`Major sector = ½ &times; 15² &times; (2&pi; &minus; 1.847) = 499.1`,m:"M1"},
 {t:`Total = <b>622 m²</b>`,m:"A1"},
 {er:`Examiner report: some converted to degrees and back. Stay in radians throughout.`},
 {t:`(c) AC = ${F("15 sin 1.847","sin 0.6")} = 25.5; arc = 15(2&pi; &minus; 1.847) = 66.5`,m:"M1 M1"},
 {t:`Perimeter = 25.5 + 2 + 66.5 = <b>94.1 m</b>`,m:"A1"}]},

{n:7,marks:10,topic:"Cubic graphs and intersections",
 hints:[`Touching at O means <i>x</i>²; crossing at 4 means (<i>x</i> &minus; 4). Use (10, 120) for the constant.`,`For (c), every term has a factor <i>x</i>. Take it out first: don't divide it away.`],
 steps:[
 {t:`f(<i>x</i>) = <i>kx</i>²(<i>x</i> &minus; 4); 120 = <i>k</i>(100)(6) &rArr; <i>k</i> = 0.2`,m:"M1 dM1"},
 {t:`<b>f(<i>x</i>) = 0.2<i>x</i>²(<i>x</i> &minus; 4)</b>`,m:"A1"},
 {t:`(b) C₂ is an upside-down parabola through (0, 0) and (8, 0)`,m:"B1 B1"},
 {t:`(c) 0.2<i>x</i>²(<i>x</i> &minus; 4) = 1.2<i>x</i>(8 &minus; <i>x</i>)`,m:"M1"},
 C("Common factors",`Dividing both sides by <i>x</i>:`,[[`loses the solution <i>x</i> = 0`,1,`Yes. Factor out <i>x</i> instead and keep <i>x</i> = 0.`],[`is always safe`,0,`If <i>x</i> = 0 is a solution, dividing by <i>x</i> throws it away.`]]),
 {t:`<i>x</i>[0.2<i>x</i>(<i>x</i> &minus; 4) &minus; 1.2(8 &minus; <i>x</i>)] = 0 &rArr; <i>x</i>(<i>x</i>² + 2<i>x</i> &minus; 48) = 0`,m:"A1"},
 {t:`<i>x</i>(<i>x</i> + 8)(<i>x</i> &minus; 6) = 0 &rArr; <i>x</i> = 0, 6, &minus;8`,m:"dM1"},
 {t:`<b>(0, 0), (6, 14.4), (&minus;8, &minus;153.6)</b>`,m:"A1 A1"}]},

{n:8,marks:11,topic:"Tangents and integration",
 hints:[`The tangent <i>y</i> = 10<i>x</i> + <i>c</i> has gradient 10, so f&prime;(4) = 10.`,`f&Prime;(<i>x</i>) = ${F(3,2)}<i>x</i><sup>&minus;½</sup> + ${F(1,2)}<i>x</i>. Integrate f&prime;(<i>x</i>) and use P(4, 12) for the constant.`],
 steps:[
 {t:`f&prime;(4) = 3(2) + 16<i>k</i> = 10 &rArr; <b><i>k</i> = ¼</b>`,m:"M1 A1*"},
 C("Tangent through a point",`To find <i>c</i> in <i>y</i> = 10<i>x</i> + <i>c</i>, use:`,[[`P(4, 12), which is on the tangent`,1,`Yes: 12 = 40 + <i>c</i>.`],[`f&prime;(4)`,0,`f&prime;(4) is the gradient (10), already used.`]]),
 {t:`(ii) 12 = 40 + <i>c</i> &rArr; <b><i>c</i> = &minus;28</b>`,m:"M1 A1"},
 {t:`(b) f&Prime;(<i>x</i>) = ${F(3,2)}<i>x</i><sup>&minus;½</sup> + ½<i>x</i>`,m:"M1 A1"},
 {t:`f&Prime;(4) = ${F(3,4)} + 2 = <b>${F(11,4)}</b>`,m:"A1"},
 {t:`(c) f(<i>x</i>) = 2<i>x</i><sup>3/2</sup> + ${F(1,12)}<i>x</i>³ + <i>d</i>`,m:"M1 A1"},
 C("Using a point to find c",`P(4, 12) on the curve gives:`,[[`16 + ${F(64,12)} + <i>d</i> = 12`,1,`Yes: 2(8) + ${F(64,12)} + <i>d</i> = 12.`],[`16 + ${F(64,12)} + <i>d</i> = 0`,0,`The curve passes through (4, 12), so f(4) = 12, not 0.`]]),
 {t:`<i>d</i> = &minus;${F(28,3)}: <b>f(<i>x</i>) = 2<i>x</i><sup>3/2</sup> + ${F(1,12)}<i>x</i>³ &minus; ${F(28,3)}</b>`,m:"dM1 A1"}]},

{n:9,marks:10,topic:"Transformations and surds",
 hints:[`${R("2<i>x</i>")} replaces <i>x</i> by 2<i>x</i>: a stretch parallel to the <i>x</i>-axis. 12 &minus; ${R("<i>x</i>")} is &minus;${R("<i>x</i>")} moved up.`,`${R("2<i>x</i>")} = ${R("2")}${R("<i>x</i>")}. Collect the ${R("<i>x</i>")} terms, then rationalise ${F(12,R("2")+" + 1")}.`],
 steps:[
 C("Transformations inside f",`<i>y</i> = ${R("2<i>x</i>")} from <i>y</i> = ${R("<i>x</i>")} is:`,[[`a stretch parallel to the <i>x</i>-axis, scale factor ½`,1,`Yes: <i>x</i> &rarr; 2<i>x</i> squashes horizontally by ½. (Equivalently a stretch parallel to the <i>y</i>-axis by ${R("2")}.)`],[`a stretch parallel to the <i>x</i>-axis, scale factor 2`,0,`Inside the function works the opposite way: &times;2 inside means scale factor ½.`]]),
 {t:`(a)(i) <b>Stretch parallel to the <i>x</i>-axis, scale factor ½</b>`,m:"M1 A1"},
 {t:`(ii) <b>Translation by (0, 12)</b>, i.e. 12 units up`,m:"M1 A1"},
 {t:`(b)(i) ${R("2")}${R("<i>x</i>")} = 12 &minus; ${R("<i>x</i>")} &rArr; ${R("<i>x</i>")}(${R("2")} + 1) = 12`,m:"M1"},
 {t:`${R("<i>x</i>")} = ${F(12,R("2")+" + 1")} &times; ${F(R("2")+" &minus; 1",R("2")+" &minus; 1")} = <b>12(${R("2")} &minus; 1)</b>`,m:"M1 A1*"},
 C("Squaring surds",`(${R("2")} &minus; 1)² = ?`,[[`3 &minus; 2${R("2")}`,1,`Yes: 2 &minus; 2${R("2")} + 1.`],[`1`,0,`(<i>a</i> &minus; <i>b</i>)² has a middle term &minus;2<i>ab</i> = &minus;2${R("2")}.`],[`3`,0,`Don't forget the middle term &minus;2${R("2")}.`]]),
 {t:`<i>x</i> = 144(3 &minus; 2${R("2")}) = 432 &minus; 288${R("2")}`,m:"M1 A1"},
 {t:`<i>y</i> = ${R("2")} &times; 12(${R("2")} &minus; 1) = 24 &minus; 12${R("2")}: <b>P(432 &minus; 288${R("2")}, 24 &minus; 12${R("2")})</b>`,m:"A1"},
 {er:`Examiner report: the hardest question on the paper. Describing transformations is rarely tested, so learn the wording: "stretch parallel to the ... axis, scale factor ...".`}]},

{n:10,marks:7,topic:"Hidden quadratics and discriminant",
 hints:[`With <i>k</i> = 4.5 the equation is a quadratic in <i>x</i>³. Double it to clear decimals.`,`For no real roots, the quadratic in <i>x</i>³ must have <i>b</i>² &minus; 4<i>ac</i> &lt; 0, with <i>a</i> = <i>k</i> &minus; 1, <i>b</i> = 4, <i>c</i> = <i>k</i> &minus; 4.`],
 steps:[
 C("Hidden quadratics",`(<i>k</i> &minus; 1)<i>x</i>⁶ + 4<i>x</i>³ + (<i>k</i> &minus; 4) = 0 is a quadratic in:`,[[`<i>x</i>³`,1,`Yes: <i>x</i>⁶ = (<i>x</i>³)².`],[`<i>x</i>²`,0,`<i>x</i>⁶ = (<i>x</i>³)², and the middle term is <i>x</i>³.`]]),
 {t:`<i>k</i> = 4.5: 7<i>x</i>⁶ + 8<i>x</i>³ + 1 = 0 &rArr; (7<i>x</i>³ + 1)(<i>x</i>³ + 1) = 0`,m:"M1"},
 {t:`<i>x</i>³ = &minus;1 or &minus;${F(1,7)}`,m:"A1"},
 {t:`<b><i>x</i> = &minus;1, <i>x</i> = &minus;${F(1,"∛7")}</b>`,m:"A1"},
 {t:`(b) <i>b</i>² &minus; 4<i>ac</i> = 16 &minus; 4(<i>k</i> &minus; 1)(<i>k</i> &minus; 4) = 20<i>k</i> &minus; 4<i>k</i>²`,m:"M1 A1"},
 C("Quadratic inequality regions",`4<i>k</i>(5 &minus; <i>k</i>) &lt; 0 when:`,[[`<i>k</i> &lt; 0 or <i>k</i> &gt; 5`,1,`Yes: this is an upside-down parabola in <i>k</i>, negative outside its roots.`],[`0 &lt; <i>k</i> &lt; 5`,0,`20<i>k</i> &minus; 4<i>k</i>² is POSITIVE between 0 and 5. Try <i>k</i> = 1: 16 &gt; 0.`]]),
 {t:`<b><i>k</i> &lt; 0 or <i>k</i> &gt; 5</b>`,m:"dM1 A1"}]}
]});
