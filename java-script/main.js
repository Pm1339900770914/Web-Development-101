//ประเภทตัวแปรมี String, Number, Boolean, Object, Array

//1. String
let name = "Poom ";
const name2 = 'Nutthaphum'; // const ตัวแปรที่ไม่สามารถเปลี่ยนค่าได้

//2. Number
let age = 20;
let height = 176.5;

//3. Boolean
let isMale = true;

let number1 = 10;
let number2 = 5;
let resultAdd = number1 + number2;
console.log("ผลบวก =", resultAdd);

let resultSub = number1 - number2;
console.log("ผลลบ =", resultSub);

let resultMul = number1 * number2;
console.log("ผลคูณ =", resultMul);

let resultDiv = number1 / number2;
console.log("ผลหาร =", resultDiv);

let resultMod = number1 % number2;
console.log("ผลเศษ =", resultMod);

let resultString = name + name2;
console.log("ผลรวมสตริง =", resultString);

// if else

let condition = number1 == number2;
console.log("ผลลัพธ์เงื่อนไข =", condition);

if (number1 > number2) {
    console.log("number1 มากกว่า number2");
}else if (number1 < number2) {
    console.log("number1 น้อยกว่า number2");
}else{
    console.log("number1 เท่ากับ number2");
}

// let Grade = prompt("กรุณาใส่เกรดของคุณ:");

// if (Grade >= 80) {
//     console.log("เกรด A");
// }else if (Grade >= 70) {
//     console.log("เกรด B");
// }else if (Grade >= 60) {
//     console.log("เกรด C");
// }else if (Grade >= 50) {
//     console.log("เกรด D");
// }else{
//     console.log("เกรด F");
// }

let score = prompt("กรุณาใส่คะแนนของคุณ:");

if (score >= 80 && score <= 100) {
    console.log("เกรด A");
}else if (score >= 70 && score < 80) {
    console.log("เกรด B");
}   else if (score >= 60 && score < 70) {
    console.log("เกรด C");
}else if (score >= 50 && score < 60) {
    console.log("เกรด D");
}else if (score >= 0 && score < 50) {
    console.log("เกรด F");
}   else{
    console.log("คะแนนไม่ถูกต้อง");
}

// loop

for (let i = 1; i <= 10; i++) {
    console.log("รอบที่ " + i);
}

let count = 0;

while (count < 5 ){
    console.log("Hello", count);
    count++;
} 

