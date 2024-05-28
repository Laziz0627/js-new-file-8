// // let son = Number(prompt("ixtiyoriy son qoying: "))

// // let resultl = "";

// // if (son % 2 == 0) {
// //     resultl = "juf son";
// //     console.log(resultl)
// // } 
// // else if(son % 2 == 1) {
// //     resultl = "toq son";
// //     console.log(resultl)
// // }


// // let bal = prompt("toplagan balni kiriting") 

// // if (bal <= 80) {
// //     console.log('yiqildingiz')
// // }
// // else if (bal <= 85) {
// //     console.log('sizning baxoyingiz 4 bal')
// // }
// // else if (bal <= 96) {
// //     console.log('sizning baxoyingiz 5 bal')
// // }
// // else if (bal <= 100) {
// //     console.log('siz bujutsiz')
// // }

// // let yosh = prompt('siz necha yoshdasiz')

// // if(yosh > 16) {
// //     console.log('kirish mumkin');
// // } else console.log('kirish taqiqlandi');


//    let input = document.elementbyid('inputBox');
//    let buttons = document.selectorsall('button')

//    let string = "";
//    let arr = Array.from(buttons);
//    arr.foreach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string
//         }
//         else if(e.target.innerHTML == 'DE'){
//             string = string.substring(0, string.lenght-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     })
//    })



var num1 =5,
num2 = 4,
qoshilma = '+';


var num3 =5,
num4 = 4,
ayirma = '-';

var num5 = 5,
num6 = 4,
kopaytma = '*';

var num7 = 5,
num8 = 4,
bolinma = '/'


if (qoshilma === '+') {
    console.log(num1+num2);
}

if (ayirma === '-') {
    console.log(num3-num4);
}

if (kopaytma === '*') {
    console.log(num5*num6);
}

if (bolinma === '/') {
    console.log(num7/num8);
}



