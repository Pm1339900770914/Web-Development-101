let score = 50
let score2 = 60


// function calculateGrade(score) {
//     if (score >= 80) {
//         grade = 'A'
//     } else if (score >= 70) {
//         grade = 'B'
//     } else if (score >= 60) {
//         grade = 'C'
//     } else if (score >= 50) {
//         grade = 'D'
//     } else {
//         grade = 'F'
//     }

//     return grade
// }

//Arrow function
let calculateGrade = (score) => {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return grade
}

let finalGrade = calculateGrade(score)
console.log("เกรดสุดท้าย =", finalGrade)

let finalGrade2 = calculateGrade(score2)
console.log("เกรดสุดท้าย =", finalGrade2)



// parameter function
let score3 = [10, 20, 34]


//map, filter
score3 = score3.map((value) => {
    return value * 2
})

score3.forEach((value) => {
    console.log("ผลลัพธ์ =", value)
})

let newScore = score3.filter((value) => {
    return value >= 40
})

newScore.forEach((value) =>{
    console.log("ผลลัพธ์ =", value)
})