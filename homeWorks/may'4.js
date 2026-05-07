// // question 15.
// let students = [
//   {name:"A", marks:[80,90]},
//   {name:"B", marks:[60,70]}
// ];
// for (const i of students) {
//     let total = 0;
//    for (const j of i.marks) { 
//        total += j;
//    }
//    console.log(i.name + " average marks " + total/i.marks.length);
// }
// for (const i of students) {
//     i.average = i.marks.reduce((a,b) => a+b, 0)/i.marks.length;
// }
// console.log(students);
// const topper = () => {
//     let top = students[0];
//     for (const i of students) {
//         if (i.average > top.average) {
//             top = i;
//         }
//     }
//     return top;
// };
// console.log(`Topper is ${topper().name}`);
// //question 14.
// let arr = [1, [2,3], 4];

// console.log(arr.flat());

// // question 3.
// let arr = [1,2,2,3,3,3, 4,4,4,4, 5,5,5,5,5];
// let arr1 = [];
// for (let i of arr) {
//     if (!arr1.includes(i)) {
//         arr1.push(i);
//     }
// }
// console.log(arr1);