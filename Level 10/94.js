// let student = [
//     { name : "Nilay", marks : 50 },
//     { name : "Jay", marks : 99},
//     { name : "Jiya", marks : 100}
// ];

// let topper = student[0];

// for(let i=0; i<student.length; i++){
//     if(student[i].marks > topper.marks){
//         topper = student[i];
//     }
// }

// console.log(topper.name , topper.marks);



//  2nd Method


let arr = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}] ;
let maxMarks = 0;
let student = "";

for(let c of arr){
    if(c.marks > maxMarks){
        student=c.name;
        maxMarks=c.marks
    }
}
console.log(student);