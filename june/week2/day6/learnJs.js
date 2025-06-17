console.log('Qlith Inovation');
let l=20;
console.log(l);
let _id=3478;
console.log(_id);
let $price=746;
console.log("price is "+`${$price}`);
let full_name="Sagar";
console.log(full_name);

//var
//declaration of variable using var keyword
//declaration in global level
//declaration in block level
//declaration in function level


//Global level
var global_variable=2000;
console.log(global_variable);
{
    console.log(global_variable);
}

function globalVariable(){
    console.log(global_variable);
}
globalVariable();



//declaration in block level
{
    var b=18;
    console.log(b);
}
console.log(b);
function printvar(){
    console.log(b);
}
 printvar();

 function declaration(){
    var v=74;
    console.log(v);
 }
 declaration();
//  console.log(v);

//declaration a variable using let keyword
//global level declaration

let letvariavle=947;
console.log(letvariavle);

{
    let c=188;
    console.log(c);
}
// console.log(c);

// declaration of variable using const keyword
const constvariavle=8758;
console.log(constvariavle);

{
   console.log(constvariavle); 
   const variable=45738;
// block level declaration
   console.log(variable);
}
// console.log(variable);



// why using let is better than var
var value;
value=32;
console.log(value);

 var value=37;
console.log(value);


let value1=84;
console.log(value);

// let value1=89;
// console.log(value);

// const constvariable1;
const constvariable1=5;
console.log(constvariable1)

// constvariable1=6;
// console.log(constvariable1);


//Data Type
// Primitive data type
// number
// String
// Boolean
// null
// undefined
// Symbol
// BigInt

let anyNumber=45;
console.log(typeof anyNumber);

let anyString="any string";
console.log(typeof anyString);

let anyboolean=true;
console.log(typeof anyboolean);

let anyvalue=undefined;
console.log(typeof anyvalue);

let anybigint=BigInt("8457398");
console.log(anybigint);

// None primitive data type
//string
//array
//object

let arr=[2,6,4,7,4,9];
console.log(arr);

let obj={
    name:"Dany",
    age:25,
    email:"dany@gmail.com"
}

console.log(obj.name);


let Product={
    Id:"099",
    name:"Running Shoe",
    Brand:"Nike",
    Color:"black",
    Price:"3999",
    Size:"09",
    Avilability:"true",
}

console.log(Product);


//Operator
//arithmatic operator
//assignment operator
//comparision operator
//logical operator



