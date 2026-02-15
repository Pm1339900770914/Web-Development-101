let fruits = ["apple", "banana", "orange"];

console.log("ผลลัพธ์ =", fruits[0]); // apple
console.log("ผลลัพธ์ =", fruits); // banana

fruits.push("grape");
console.log("ผลลัพธ์ =", fruits); // apple, banana, orange, grape

fruits.pop();
console.log("ผลลัพธ์ =", fruits); // apple, banana, orange

fruits = ["mango", "pineapple"];
console.log("ผลลัพธ์ =", fruits); // mango, pineapple

if (fruits.includes("mango")) {
    console.log("มีผลไม้ mango ในอาเรย์");
}

let ages = [45, 30, 35];
ages.sort();
console.log("ผลลัพธ์ =", ages); // 30, 35, 45
console.log("ความยาวอาเรย์ =", ages.length); // 3

for (let i=0; i < fruits.length; i++) {
    console.log("ผลลัพธ์ =", fruits[i]);
}
