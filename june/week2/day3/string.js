
// create array
let arr=[4,5,35,6,5,4,3];


let Product={
    Id:"099",
    name:"Running Shoe",
    Brand:"Nike",
    Color:"black",
    Price:"3999",
    Size:"09",
    Avilability:"true",
}
console.log("for in loop");
//for in loop
for(let key in Product){
    console.log(Product[key]);
}

for(let idx in arr){
    console.log(arr[idx]);
}


console.log("for of loop")
// for of loop
for(const element of arr){
    console.log(element)
}


//string
let str="Sagar  ";
str[0]="r";
console.log(str);
console.log(str.length);

//methods
// toUpperCase
//toLowerCase
//trim
//slice
//subString
//replace
//concat

console.log(str.trim().length);
console.log(str.slice(0,3));//it take (0 to lastIndex-1)
console.log(str.slice(3));

console.log(str.replace("S","s"));

let arr1=[1,4,5,3,5,3];
console.log(arr1);

//add or remove from the last
arr1.push(arr1);
arr1.push(7,8);
console.log(arr1);
arr1.pop();
console.log(arr1);

//add or remove from the first
arr1.unshift(0);
console.log(arr1);
arr1.shift();
console.log(arr1);

//length property
console.log(arr1.length);

console.log(arr1.slice(0,4));
arr1.splice(2,2,30);
console.log(arr1);

// Q
let compny=["Bloomberg","Micriosoft","Uber","Google","IBM","Netflix"];
compny.shift();
console.log(compny);

compny.splice(1,1,"ola");
console.log(compny);

compny.push("Amazon");
console.log(compny);



