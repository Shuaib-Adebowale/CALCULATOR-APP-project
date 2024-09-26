const bgNum1 = document.getElementById("bg-num-1")
const bgNum2 = document.getElementById("bg-num-2")
const bgNum3 = document.getElementById("bg-num-3")
const deL = document.getElementById("del")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const borDer = document.getElementById("border")
const n1 = document.getElementById("n1")
const n1_2 = document.getElementById("n1-2")
const n1_3 = document.getElementById("n1-3")
const reSet = document.getElementById("reset")
const calBg = document.getElementById("cal-bg")
const eqUal = document.getElementById("equal")
const nuBerKey = document.getElementById("result")
const nuBnu = document.getElementById("nu7")
const numB1 = document.getElementById("nu8")
const numB2 = document.getElementById("nu9")
const numB3 = document.getElementById("nu6")
const numB4 = document.getElementById("nu5")
const numB5 = document.getElementById("nu4")
const numB6 = document.getElementById("nu3")
const numB8 = document.getElementById("nu2")
const numB9 = document.getElementById("nu1")
const numZero = document.getElementById("zero")
const numAdd = document.getElementById("add")
const numDivde = document.getElementById("divide")
const numbSub = document.getElementById("sub")
const numMult = document.getElementById("mult")
const numPeriod = document.getElementById("period")


// ----------calculator solve this function ----------------
function nucalcu(val){
    let showResult = nuBerKey.value += val;
    return showResult;
}
function solve(){
    let x = nuBerKey.value;
    let y = eval(x);
    nuBerKey.value = y;
}
function clr(){
    nuBerKey.value = " ";
}
function del(){
    let input = nuBerKey;
    input.value = input.value.substring(0, input.value.length-1);
}



// ----------bgNum1-------------
bgNum1.addEventListener('click', changeBackgroundColor);
function changeBackgroundColor(){
    document.body.style.backgroundColor = "#3a4764";
    deL.style.backgroundColor = "#567fe6";
    h1.style.color= "#ffff";
    h2.style.color= "#ffff";
    borDer.style.backgroundColor = "#182034";
    n1.style.color = "#ffff";
    n1_2.style.color="#ffff";
    n1_3.style.color="#ffff";
    reSet.style.backgroundColor= "#567fe6";
    calBg.style.backgroundColor = "#182034";
    eqUal.style.backgroundColor = "#d03f2f";
    nuBerKey.style.backgroundColor = "#182034";
    nuBerKey.style.color = "#ffff";
    nuBnu.style.color = "black";
    numB1.style.color = "black";
    numB2.style.color = "black";
    numB3.style.color = "black";
    numB4.style.color = "black";
    numB5.style.color = "black";
    numB6.style.color = "black";
    numB8.style.color = "black";
    numB9.style.color = "black";
    numZero.style.color= "black";
    numAdd.style.color= "black";
    numDivde.style.color= "black";
    numbSub.style.color= "black";
    numMult.style.color= "black";
    numPeriod.style.color= "black";
    nuBnu.style.backgroundColor = "white";
    numB1.style.backgroundColor = "white";
    numB2.style.backgroundColor = "white";
    numB3.style.backgroundColor = "white";
    numB4.style.backgroundColor = "white";
    numB5.style.backgroundColor = "white";
    numB6.style.backgroundColor = "white";
    numB8.style.backgroundColor = "white";
    numB9.style.backgroundColor = "white";
    numZero.style.backgroundColor = "white";
    numAdd.style.backgroundColor = "white";
    numDivde.style.backgroundColor = "white";
    numbSub.style.backgroundColor = "white";
    numMult.style.backgroundColor = "white";
    numPeriod.style.backgroundColor = "white";
    bgNum3.style.visibility = "hidden";
    bgNum2.style.visibility = "visible";
}
console.log(bgNum1.style.backgroundColor);


// ----------bgNum2-------------
bgNum2.addEventListener('click', changeBackgroundColor1);
function changeBackgroundColor1(){
    document.body.style.backgroundColor = "#ededed";
    deL.style.backgroundColor = "#45b8b4";
    h1.style.color= "#000";
    h2.style.color= "#000";
    borDer.style.backgroundColor = "#d7cccc";
    n1.style.color = "#000";
    n1_2.style.color="#000";
    n1_3.style.color="#000";
    reSet.style.backgroundColor= "#45b8b4";
    calBg.style.backgroundColor = "#d7cccc";
    eqUal.style.backgroundColor = "#e74a38";
    nuBerKey.style.backgroundColor = "#ffffff";
    nuBerKey.style.color = "black";
    nuBnu.style.color = "black";
    numB1.style.color = "black";
    numB2.style.color = "black";
    numB3.style.color = "black";
    numB4.style.color = "black";
    numB5.style.color = "black";
    numB6.style.color = "black";
    numB8.style.color = "black";
    numB9.style.color = "black";
    numZero.style.color= "black";
    numAdd.style.color= "black";
    numDivde.style.color= "black";
    numbSub.style.color= "black";
    numMult.style.color= "black";
    numPeriod.style.color= "black";
    nuBnu.style.backgroundColor = "white";
    numB1.style.backgroundColor = "white";
    numB2.style.backgroundColor = "white";
    numB3.style.backgroundColor = "white";
    numB4.style.backgroundColor = "white";
    numB5.style.backgroundColor = "white";
    numB6.style.backgroundColor = "white";
    numB8.style.backgroundColor = "white";
    numB9.style.backgroundColor = "white";
    numZero.style.backgroundColor = "white";
    numAdd.style.backgroundColor = "white";
    numDivde.style.backgroundColor = "white";
    numbSub.style.backgroundColor = "white";
    numMult.style.backgroundColor = "white";
    numPeriod.style.backgroundColor = "white";
    bgNum3.style.visibility = "visible";
    bgNum1.style.visibility = "hidden";
}
console.log(bgNum2.style.backgroundColor);


// ----------bgNum3---------------
bgNum3.addEventListener('click', changeBackgroundColor2);
function changeBackgroundColor2(){
    document.body.style.backgroundColor = " #341c4f";
    deL.style.backgroundColor = "#bc15f4";
    h1.style.color= "#ffe53d";
    h2.style.color= "#ffe53d";
    borDer.style.backgroundColor = "#1e053a";
    n1.style.color = "#ffe53d";
    n1_2.style.color="#ffe53d";
    n1_3.style.color="#ffe53d";
    reSet.style.backgroundColor= "#bc15f4";
    calBg.style.backgroundColor = "#1e053a";
    eqUal.style.backgroundColor = "#00e0d1";
    nuBerKey.style.backgroundColor = "#1e053a";
    nuBerKey.style.color = "#ffe53d";
    nuBnu.style.color = "#ffe53d";
    numB1.style.color = "#ffe53d";
    numB2.style.color = "#ffe53d";
    numB3.style.color = "#ffe53d";
    numB4.style.color = "#ffe53d";
    numB5.style.color = "#ffe53d";
    numB6.style.color = "#ffe53d";
    numB8.style.color = "#ffe53d";
    numB9.style.color = "#ffe53d";
    numZero.style.color= "#ffe53d";
    numAdd.style.color= "#ffe53d";
    numDivde.style.color= "#ffe53d";
    numbSub.style.color= "#ffe53d";
    numMult.style.color= "#ffe53d";
    numPeriod.style.color= "#ffe53d";
    nuBnu.style.backgroundColor = "#341c4f";
    numB1.style.backgroundColor = "#341c4f";
    numB2.style.backgroundColor = "#341c4f";
    numB3.style.backgroundColor = "#341c4f";
    numB4.style.backgroundColor = "#341c4f";
    numB5.style.backgroundColor = "#341c4f";
    numB6.style.backgroundColor = "#341c4f";
    numB8.style.backgroundColor = "#341c4f";
    numB9.style.backgroundColor = "#341c4f";
    numZero.style.backgroundColor = "#341c4f";
    numAdd.style.backgroundColor = "#341c4f";
    numDivde.style.backgroundColor = "#341c4f";
    numbSub.style.backgroundColor = "#341c4f";
    numMult.style.backgroundColor = "#341c4f";
    numPeriod.style.backgroundColor = "#341c4f";
    bgNum1.style.visibility = "visible";
    bgNum2.style.visibility = "hidden";
}
console.log(bgNum3.style.backgroundColor);



