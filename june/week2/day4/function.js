console.log("this is a functional page");

// Named function
function myFunction(){
    console.log("function called");
}
myFunction();

//types of function 
// 1.named function
// 2.expression function
// 3.arrow function
// 4.call bacl function
// 5.higher order function

//expression function
let expressionfunction=function(){
    console.log("Anonymous functions");
}
expressionfunction();

//arrow function
let arrowFunction=()=>{
    console.log("arrow function");
}
arrowFunction();

//passing parameter
let printvalue=(a)=>{
    console.log("value is: ",a)
}
printvalue(73);



//higher order function
function higherOrderFunction(fun){
    fun();
}
//call back function,works as parameter of higher order function
higherOrderFunction(()=>{
    console.log("this is a parameter function of higher order function");
})


//array function
// forEach
// map
// filter
// reduce


//forEach
let arr=[1,2,3,4,5,6];
arr.forEach((v)=>{
    console.log(v);
})

// map
let mapValue=arr.map((v)=>{
    return v+1;
})
console.log(mapValue);

// filter
let filterValue=arr.filter((v)=>{
    return v%2==0;
})
console.log(filterValue);

//reduce





//Dom Malupulation

// getElementbyId()
// getElementbtClassname()
// get elementbyId()
// queryselector()
// queryselectorall()


let para=document.getElementById('para');
console.log(para);
console.log(para.innerHTML);
