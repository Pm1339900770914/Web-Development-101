let students = [

    {
        name: "Alice",
        score: 85,
        grade: "A"
    },

    {
        name: "Bob",
        score: 75,
        grade: "B"
    },

    {
        name: "Charlie",
        score: 55,
        grade: "D"
    },
]

let student = students.find((value) => {
    return value.name === "Alice";
})

console.log("ผลลัพธ์ =", student.name);

let doubleScoreStudents = students.map((value) => {
    value.score = value.score * 2;
    return value;
})

let passedStudents = students.filter((value) => {
    return value.score >= 60;
}   )

console.log("นักเรียนที่ผ่าน =", passedStudents);