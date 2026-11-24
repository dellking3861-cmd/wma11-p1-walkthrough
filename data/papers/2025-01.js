/* January 2025 WMA11/01: walkthroughs from the official mark scheme and examiner report. */
WT.add({id:"2025-01",qs:[
Object.assign({n:1},G("Jan 2025 · Q1")),
Object.assign({n:2},G("Jan 2025 · Q2")),
{n:3,marks:5,topic:"Simultaneous equations (modelling)",
 hints:[`P is in thousands: use 58 and 65, not 58000 and 65000. Substitute <i>t</i> = 5 and <i>t</i> = 10.`,`Subtract the two equations to remove <i>a</i>. For (b), put <i>P</i> = 85 and solve for <i>T</i>³.`],
 steps:[
 C("Units in models",`"The population, P thousand": after 5 years, P = ?`,[[`58`,1,`Yes. The examiner report says using 58000 was the most common mistake.`],[`58000`,0,`P is measured in thousands, so 58000 people means P = 58.`]]),
 {t:`58² = <i>a</i> + 125<i>b</i> &nbsp;and&nbsp; 65² = <i>a</i> + 1000<i>b</i>`,m:"M1"},
 {t:`Subtract: 875<i>b</i> = 4225 &minus; 3364 = 861 &rArr; <b><i>b</i> = 0.984</b>, <b><i>a</i> = 3241</b>`,m:"dM1 A1"},
 {t:`(b) 85² = 3241 + 0.984<i>T</i>³ &rArr; <i>T</i>³ = ${F(3984,0.984)} = 4048.8`,m:"M1"},
 {t:`<b><i>T</i> = 15.9</b> years`,m:"A1"}]},

{n:4,marks:9,topic:"Indices and hidden quadratics",
 hints:[`<i>a</i><sup>3<i>x</i>+1</sup> = <i>a</i><sup>3<i>x</i></sup> &times; <i>a</i> = (<i>a</i><sup><i>x</i></sup>)³ &times; <i>a</i>.`,`3<sup>4<i>t</i>+2</sup> = 3² &times; (3⁴)<sup><i>t</i></sup> = 9 &times; 81<sup><i>t</i></sup> = 9<i>p</i>², because 81<sup><i>t</i></sup> = (9<sup><i>t</i></sup>)².`],
 steps:[
 {t:`(i)(a) <i>a</i><sup>3<i>x</i>+1</sup> = <i>a</i>(<i>a</i><sup><i>x</i></sup>)³ = <b><i>ay</i>³</b>`,m:"B1"},
 C("Negative indices",`${F(5,"(3<i>a</i><sup>1&minus;<i>x</i></sup>)<sup>&minus;2</sup>")} = ?`,[[`5(3<i>a</i><sup>1&minus;<i>x</i></sup>)²`,1,`Yes: dividing by a negative power is multiplying by the positive power.`],[`5(3<i>a</i><sup>1&minus;<i>x</i></sup>)<sup>&minus;2</sup>`,0,`It's in the denominator. ${F(1,"<i>z</i><sup>&minus;2</sup>")} = <i>z</i>².`]]),
 {t:`= 5 &times; 9<i>a</i><sup>2&minus;2<i>x</i></sup> = 45 &times; ${F("<i>a</i>²","(<i>a</i><sup><i>x</i></sup>)²")} = <b>${F("45<i>a</i>²","<i>y</i>²")}</b>`,m:"M1 M1 A1"},
 {t:`(ii)(a) 3<sup>4<i>t</i>+2</sup> = 9 &times; 81<sup><i>t</i></sup> = 9<i>p</i>² &rArr; 3(9<i>p</i>² + 1) = 82<i>p</i>`,m:"M1"},
 {t:`<b>27<i>p</i>² &minus; 82<i>p</i> + 3 = 0</b>`,m:"A1*"},
 {t:`(b) (27<i>p</i> &minus; 1)(<i>p</i> &minus; 3) = 0 &rArr; <i>p</i> = ${F(1,27)} or 3`,m:"M1"},
 C("Exponentials of the same base",`9<sup><i>t</i></sup> = ${F(1,27)} means 3<sup>2<i>t</i></sup> = 3<sup>?</sup>`,[[`3<sup>&minus;3</sup>, so <i>t</i> = &minus;${F(3,2)}`,1,`Yes: 27 = 3³, and ${F(1,27)} = 3<sup>&minus;3</sup>.`],[`3<sup>3</sup>, so <i>t</i> = ${F(3,2)}`,0,`${F(1,27)} has a negative power: 3<sup>&minus;3</sup>.`]]),
 {t:`9<sup><i>t</i></sup> = 3 &rArr; <i>t</i> = ½; 9<sup><i>t</i></sup> = ${F(1,27)} &rArr; <i>t</i> = &minus;${F(3,2)}. <b><i>t</i> = ½, &minus;${F(3,2)}</b>`,m:"M1 A1"}]},

{n:5,marks:8,topic:"Tangents and hidden quadratics",
 hints:[`${F(2,"<i>x</i>")} = 2<i>x</i><sup>&minus;1</sup>. The tangent <i>y</i> = <i>k</i> &minus; 5<i>x</i> has gradient &minus;5.`,`12<i>x</i>⁴ + 5<i>x</i>² &minus; 2 = 0 is a quadratic in <i>x</i>². Then <i>k</i> comes from P being on the tangent.`],
 steps:[
 {t:`${F("d<i>y</i>","d<i>x</i>")} = <b>12<i>x</i>² &minus; 2<i>x</i><sup>&minus;2</sup></b>`,m:"M1 A1"},
 C("Gradient from a tangent equation",`The tangent <i>y</i> = <i>k</i> &minus; 5<i>x</i> has gradient:`,[[`&minus;5`,1,`Yes: the coefficient of <i>x</i>.`],[`<i>k</i>`,0,`<i>k</i> is the intercept. The gradient is the <i>x</i> coefficient, &minus;5.`]]),
 {t:`12<i>x</i>² &minus; ${F(2,"<i>x</i>²")} = &minus;5 &rArr; &times;<i>x</i>²: <b>12<i>x</i>⁴ + 5<i>x</i>² &minus; 2 = 0</b>`,m:"M1 A1*"},
 {t:`(c) (4<i>x</i>² &minus; 1)(3<i>x</i>² + 2) = 0 &rArr; <i>x</i>² = ¼, <i>x</i> &gt; 0 &rArr; <i>x</i> = ½`,m:"M1 A1"},
 {t:`<i>y</i> = 4(${F(1,8)}) + 4 + 9 = 13.5`,m:"M1"},
 {t:`13.5 = <i>k</i> &minus; 2.5 &rArr; <b><i>k</i> = 16</b>`,m:"A1"},
 {er:`Examiner report: marks were lost through missing method. With a calculator warning, the factorising must be shown.`}]},

{n:6,marks:10,topic:"Integration with unknown constants",
 hints:[`f&prime;(4) = 7 with ${R("4")} = 2 gives the first equation.`,`Split f&prime;(<i>x</i>) into three powers of <i>x</i> before integrating, then use P(4, &minus;5) for <i>c</i>.`],
 steps:[
 {t:`f&prime;(4) = ${F("32 + 4<i>a</i> + <i>b</i>",8)} = 7 &rArr; <b>4<i>a</i> + <i>b</i> = 24</b>`,m:"M1 A1*"},
 {t:`With <i>a</i> + <i>b</i> = &minus;9: 3<i>a</i> = 33 &rArr; <i>a</i> = 11, <i>b</i> = &minus;20`,m:"M1 A1"},
 C("Splitting fractions",`${F("2<i>x</i>² + 11<i>x</i> &minus; 20","4<i>x</i><sup>½</sup>")} = ?`,[[`½<i>x</i><sup>3/2</sup> + ${F(11,4)}<i>x</i><sup>½</sup> &minus; 5<i>x</i><sup>&minus;½</sup>`,1,`Yes: divide each term by 4<i>x</i><sup>½</sup>.`],[`½<i>x</i>² + ${F(11,4)}<i>x</i> &minus; 5`,0,`Divide the powers of <i>x</i> as well: <i>x</i>² &divide; <i>x</i><sup>½</sup> = <i>x</i><sup>3/2</sup>.`]]),
 {t:`f(<i>x</i>) = ${F(1,5)}<i>x</i><sup>5/2</sup> + ${F(11,6)}<i>x</i><sup>3/2</sup> &minus; 10<i>x</i><sup>½</sup> + <i>c</i>`,m:"M1 A1 A1"},
 {t:`P(4, &minus;5): ${F(32,5)} + ${F(44,3)} &minus; 20 + <i>c</i> = &minus;5 &rArr; <i>c</i> = &minus;${F(91,15)}`,m:"dM1"},
 {t:`<b>f(<i>x</i>) = ${F(1,5)}<i>x</i><sup>5/2</sup> + ${F(11,6)}<i>x</i><sup>3/2</sup> &minus; 10<i>x</i><sup>½</sup> &minus; ${F(91,15)}</b>`,m:"A1"},
 C("Transformations inside f",`<i>y</i> = f(<i>x</i> &minus; 3) moves P(4, &minus;5) to:`,[[`(7, &minus;5)`,1,`Yes: 3 units right.`],[`(1, &minus;5)`,0,`Minus inside the bracket moves RIGHT.`],[`(4, &minus;8)`,0,`Inside the bracket changes <i>x</i>, not <i>y</i>.`]]),
 {t:`(c) <b>Q(7, &minus;5)</b>`,m:"B1"}]},

Object.assign({n:7},G("Jan 2025 · Q7")),

{n:8,marks:13,topic:"Radians: sine and cosine rules, sectors",
 hints:[`Sine rule: ${F("sin OAB",3.4)} = ${F("sin "+F("&pi;",6),1.9)}. OAB is obtuse, so take &pi; minus the calculator angle.`,`Area OBC = ${F(3,2)} &times; area OAB = ½(3.4)²&theta;. For the perimeter you need OA: OA + AB + arc BC + OC.`],
 steps:[
 {t:`sin OAB = ${F("3.4 sin "+F("&pi;",6),1.9)} = 0.8947... &rArr; 1.107 (acute)`,m:"M1"},
 C("Obtuse angle from sine",`Given OAB &gt; ${F("&pi;",2)}, OAB = ?`,[[`&pi; &minus; 1.107 = 2.034`,1,`Yes: sine is positive in the second quadrant too.`],[`1.107`,0,`That's acute. The question says OAB &gt; ${F("&pi;",2)}. Using 1.107 later costs several marks.`]]),
 {t:`OAB = <b>2.034</b> (4 s.f.)`,m:"dM1 A1"},
 {t:`(b) OBA = &pi; &minus; ${F("&pi;",6)} &minus; 2.034 = 0.584; area = ½ &times; 3.4 &times; 1.9 &times; sin 0.584 = <b>1.78 cm²</b>`,m:"M1 A1"},
 {t:`(c) Sector OBC = ${F(3,2)} &times; 1.78 = 2.67 = ½(3.4)²&theta;`,m:"M1 M1"},
 {t:`&theta; = BOC = <b>0.462</b>`,m:"A1*"},
 C("Choosing sine or cosine rule",`To find OA in triangle OAB:`,[[`use the angle opposite OA (0.584) with the sine rule, or the cosine rule`,1,`Yes, either works.`],[`OA = OB &minus; AB = 1.5`,0,`OA, OB and AB form a triangle, not a straight line.`]]),
 {t:`(d) OA = ${F("1.9 sin 0.584","sin "+F("&pi;",6))} = 2.10`,m:"M1 A1"},
 {t:`Arc BC = 3.4 &times; 0.462 = 1.57`,m:"B1"},
 {t:`Perimeter = 2.10 + 1.9 + 1.57 + 3.4 = 8.97 &asymp; <b>9 cm</b>`,m:"dM1 A1"}]},

{n:9,marks:13,topic:"Completing the square, trig graphs and regions",
 hints:[`6<i>x</i> &minus; ${F(27,4)} &minus; <i>x</i>² = &minus;(<i>x</i>² &minus; 6<i>x</i>) &minus; ${F(27,4)}. Complete the square inside.`,`A and B are the roots of C₁. C₂ = cos(<i>kx</i>) starts at 1 and first hits zero at A, so <i>k</i>&middot;A = ${F("&pi;",2)}.`],
 steps:[
 {t:`&minus;(<i>x</i> &minus; 3)² + 9 &minus; ${F(27,4)} = <b>${F(9,4)} &minus; (<i>x</i> &minus; 3)²</b> (<i>a</i> = ${F(9,4)}, <i>b</i> = &minus;1, <i>c</i> = &minus;3)`,m:"B1 M1 A1"},
 {t:`(b) <b>P(3, ${F(9,4)})</b>`,m:"B1 B1"},
 {t:`(c) Roots: (<i>x</i> &minus; 3)² = ${F(9,4)} &rArr; <i>x</i> = 1.5, 4.5. <b>B: <i>x</i> = 4.5</b>`,m:"B1"},
 C("Zeros of cosine",`cos(<i>kx</i>) first equals 0 when <i>kx</i> = ?`,[[`${F("&pi;",2)}`,1,`Yes. At A, <i>k</i>(1.5) = ${F("&pi;",2)}.`],[`&pi;`,0,`cos &pi; = &minus;1. The first zero is at ${F("&pi;",2)}.`]]),
 {t:`<i>k</i> = ${F("&pi;",3)} (check: at B, ${F("&pi;",3)} &times; 4.5 = ${F("3&pi;",2)} ✓); period = ${F("2&pi;","&pi;/3")} = <b>6</b>`,m:"B1 B1"},
 {t:`(d) L through P(3, ${F(9,4)}) and B(4.5, 0): gradient &minus;${F(3,2)}, <i>y</i> = ${F(27,4)} &minus; ${F(3,2)}<i>x</i>`,m:"M1 dM1 A1"},
 C("Defining regions",`R is above C₂ and:`,[[`below C₁ and below L`,1,`Yes: C₁ is the upper edge from A to P, L from P to B.`],[`above C₁`,0,`R is under the hump of C₁. Check the shading.`]]),
 {t:`<b>cos(${F("&pi;<i>x</i>",3)}) &le; <i>y</i> &le; 6<i>x</i> &minus; ${F(27,4)} &minus; <i>x</i>², &nbsp;<i>y</i> &le; ${F(27,4)} &minus; ${F(3,2)}<i>x</i></b>`,m:"B1 B1"}]}
]});
