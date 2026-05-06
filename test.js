// let X = 'zubair';   let x = 
// 'abdullah';    //this is a variable.

// console.log(x+' '+X);
// var c;
// function add(a,b){
//      a;
//     c = a+b;
//     return c;
// }
// console.log(add(2,3));
// let name = 'zubair';
// console.log("hello " + name + "! welcome to MERN");
// let a = 10;
// let b = 20;
// let c;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);                                                  
// const sec = 3725;
// let min = Math.floor(sec/60);
// let rsec = sec%60;
// // let hr = min/60;
// console.log(min + " minutes and " + rsec + " seconds");
// console.log(`perimeter = ${2*(a+b)} area = ${a*b}`);
// c = a;
// a=b;
// b=c;
// console.log("a = " + a);
// console.log("b = " + b);
// let d = "zubair";
// console.log(typeof alert);
// console.log(typeof(a));
// console.log(d.length);
// let x = 2, y = 'abdullah', z = true;
// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// let name = "zubair";
// let admin = name;
// alert(admin);
// alert(`now a is b = ${a} and b is a = ${b}`);
// prompt(`now a is b = ${a} and b is a = ${b}`, "zubu");
// let x = confirm(`now a is b = ${a} and b is a = ${b}`);
// alert(x);
// let a = prompt("enter your name", "");   
// alert(`your name is ${a}`);
// let name = true;
// console.log(typeof(name))
// let value = String(name);
// console.log(typeof(value));
// alert(Boolean(0)); false
// alert(Boolean());    false
// alert(Boolean(null));    false
// alert(Boolean(undefined));   false   
// alert(Boolean(NaN));     false
// alert(Boolean(""));   false
// alert(Boolean(''));      false
// alert(Boolean(``));    false
// alert(Boolean("0"));   true
// alert(Boolean(" "));  true
// alert(Boolean([])); true
// alert(Boolean({})); true
// let x = '6'*'2';
// console.log(typeof x);
// let i = 1;
// let x = ++i;
// console.log(x, i);
// x = prompt("type your name" );
// alert(`hello ${x}! welcome to MERN`);
// let confirmed = confirm(`hello ${x}! welcome to MERN`);
// alert(confirmed);
// alert( null || 2 || undefined );
// alert( alert(1) || alert(3) || 2 );
// alert( 1 && null && 2 );
// alert( alert(1) && alert(2) );
// alert( null || 2 && 3 || 4 );
// let x = prompt("enter your age");
// if (x>=14 && x<=90) {
//     alert("age is between 14 and 90");
// }
// let x = prompt("enter your age");
// if (!(x>=14 && x<=90)) {
//     alert("age is not between 14 and 90");
// }
// let x = prompt("enter your age");
// if (x<14 || x>90) {
//     alert("age is not between 14 and 90");
// }
// let x = Math.floor(100000 + Math.random()*900000);
// alert(x);
// let x = "10";
// if (x > 5) {
//     console.log("Yes");}
// for (let i = 1; i < 6; i++) {
//     let x =' '.repeat(6 - i) + '*'.repeat(i) + '*'.repeat(i);
//     console.log(x);
// }
// let arr = [10, 5, 20, 8];
// arr.sort((a, b) => a - b);
// console.log(arr[arr.length - 2]);
// arr.splice(arr.indexOf(Math.max(...arr)), 1);
// console.log(Math.max(...arr));
// let str = "I love JS";
// str = str.split(" ");
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i] + " ";
// }
// console.log(rev);
// function countPrimeNumbers(n) {
//     let count = 0;
//     for (let i of n) {
//         if (i == 2 || i == 3) {
//             count+=1;
//         }else {
//             let x = true;
//             for (let j = 2; j <=i/2; j++) {
//             if (i % j == 0) {
//                 x = false;
//                 break;
//             }
//         }
//         if (x) {
//             count+=1;
//         }
//     }
// }
//     return count;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let x = countPrimeNumbers(arr);
// console.log(x);
// let x = []; 
// if (x) {
//     console.log("true");
// }
// let arr = [1,2];
// arr.length = 4;
// console.log(arr.length);
// let name = "zubair";    
// let x = name.toUpperCase();
// x[0] = 'D';
// console.log(x);
// let a = 7
// let b = 9
// a = b // value of b assigned to a
// b = 6 // b changes
// console.log(a) // ?
// console.log(b) // ?
// // PART 2
// let obj1 = { num: 7 }
// let obj2 = { num: 9 }
// obj1 = obj2 // obj1 now points to obj2
// obj1.num = 5 // mutate obj2
// console.log(obj1.num) // ?
// console.log(obj2.num) // ?
// let id = Symbol("id");
// console.log(id);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let x = [];
// external:for (const i of arr) {
//     if (i == 1) {
//         continue
//     }
//     for (let j = 2; j <= i/2; j++) {
//         if(i % j == 0) {
//             continue external;
//         }
//         }
//         x.push(i);
//     }
//     console.log(x);
// let user = {
//   name: "Faisal",
//   age: 25,
//   isAdmin: 'yes'
// };
// console.log(user.name);
// console.log(user["age"]);
// user.age = 26;

// user.city = "Mumbai";
// let deleted = delete user.isAdmin;
// console.log(deleted);
// let student = {
//   name: "Ali",
//   marks: {
//     math: 90,
//     science: 85
//   }
// };
// console.log(student.marks.math);
// let user = {
//   name: "Faisal",
//   greet: function () {
//     console.log("Hello");
//   }
// };

// user.greet();
// let user = {
//   name: "Faisal",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };

// user.greet();
// for (let key in user) {
//   console.log(key, user[key]);
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
let students = [
  {name:"A", marks:[80,90]},
  {name:"B", marks:[60,70]}
];
for (let i of students) {
  let total = 0;
    for (let mark of i.marks) {
        total += mark;
    }
    console.log(i.name + " total marks: " + total);
    console.log(i.name + " average marks: " + total/i.marks.length);
}