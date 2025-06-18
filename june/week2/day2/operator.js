console.log("Today we are going to study about operator")

// Arithmetic operator
// +
console.log(1+2);
console.log(3-2)
console.log(3*2)
console.log(4/2)
console.log(5%2)
console.log(2**3)

let a=40;
// post increament
console.log(a++)
console.log(a)
// pre Increament
console.log("After increament ",++a)

console.log(a--);
console.log(a)
console.log(--a)

// Assignment Operator
let c = 30;
// c=c+2;
c/=4
console.log(c)
// console.log(c += 10); // 40

// comparision operator

let str1=20;
let str2="20";
console.log(str1===str2)

console.log(4<=4)

console.log(1 !== "1")

console.log((2<3) && (4<9))
console.log((2>3) || (4>9))

console.log(!!"text");
console.log(!!undefined)

// conditional block
// if

let mark=30;
if(mark>85){
    console.log("Grade A")
}else{
    console.log("fail")
}

// if-else if 
// if-else ladder

if(mark>80){
    console.log("Grade A")
}else if(mark<=60){
    console.log("Grade B")
}else{
    console.log("Fail")
}

// ternary operator
let age=17;
console.log(age>18 ? "he can give vote":"he can not")


// ! Task 1
//  let A=prompt("enter the number");
// if (A%5==0){
// console.log("divisible by 5");
// }else{
//     console.log("Not divisible")
// }

// loops in javascript

let val=1;

// console.log(val++)
// console.log(val++)
// console.log(val++)
// console.log(val++)
// console.log(val++)
// console.log(val++)
// console.log(val++)
// console.log(val++)
// console.log(val++)


// for loop
console.log("For loop")
for(let i=1;i<=10;i++){
    console.log(i)
}


// While loop
console.log("While loop")
let i=2;
while(i<=10){
    console.log(i)
    i++
}

// do-while loop
console.log("do-while loop")
let v=5;
do{
    console.log(v)
    v++;
}
while(v<=10)



// console.log(3==="3");


// let age=30
// console.log(age>18? "he can give vote":"he cant't give vote");


//take input by prompt
// let a=prompt("enter number");
// if(a%5==0){
//     console.log("multiple");
// }
// else{
//     console.log("not multiple");
// }

//loop
// for(let i=0;i<10;i++){
//     console.log(i);
// }

//while loop
// let i=0
// while(i<10){
//     console.log(i);
//     i++;
// }

//do while loop
