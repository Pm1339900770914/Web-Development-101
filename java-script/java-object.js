let employee = [
    {
        name: "John Doe",
        age: 30,
        position: "Software Engineer",
        isFullTime: true
    },
    {
        name: "Jane Smith",
        age: 25,
        position: "Graphic Designer",
        isFullTime: false
    },
];

employee.push({
    name: "Mike Johnson",
    age: 40,
    position: "Project Manager",
    isFullTime: true
});

for (let i=0; i<employee.length; i++) {
    console.log("ชื่อ: ", employee[i].name);
    console.log("อายุ: ", employee[i].age);
    console.log("ตำแหน่ง: ", employee[i].position);
    console.log("พนักงานประจำ: ", employee[i].isFullTime);
    console.log("-------------------");
}