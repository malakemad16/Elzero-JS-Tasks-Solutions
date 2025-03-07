// Variable And Cocatination Challange 
console.log("Variable And Cocatination Challange");
let titleContent = "Elzero", discriptionContent = "Elzero Web School", dateContent = "25/10";
let markUp = `
<div class="card">    
<h3>${titleContent}</h3>
<p>${discriptionContent}</p>
<span>${dateContent}</span>
</div>
`;
document.write(markUp.repeat(4));
// تكليفات JavaScript Bootcamp من الدرس 010 إلى 017
console.log("==================================================");
console.log(" تكليفات JavaScript Bootcamp من الدرس 010 إلى 017");
console.log("===================================================");
console.log(" التكليف 01");
/* ============ */
/* التكليف 01 */
let numberOne = 10, numberTwo = 20;
console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof (`${numberOne}${numberTwo}`));
console.log(numberOne + "\n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`);
console.log("============");
console.log(" التكليف 02");
/* ================== */
/* التكليف 02 */
console.log(elzero.innerHTML);
console.log(typeof elzero);
console.log("============");
console.log(" التكليف 03");
/* ============ */
/* التكليف 03 */
console.log("`i'm In \n \\\\ \n\
    Love \\\\\"\"\"\'\'\' \n\
    ++ With ++ \n\
\\\"\"\"\\\"\"\" \n\
\"\"JavaScript\"\"``");
console.log("============");
console.log(" التكليف 04");
/* ============ */
/* التكليف 04 */
let a = 21;
let b = 20;
let numberFour = Math.ceil(a / b) + !false + true; // a/b=1.05 .ceil=2 => numberFour=2+1+1=4
console.log("_" + a + "_" + b + "" + a + "_" + b + "" + a + "_" + b + "" + a + "_" + b + "_"); // _21_2021_2021_2021_20_
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
console.log("_" + `${a}_${b}`.repeat(numberFour) + "_");