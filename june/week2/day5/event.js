let button= document.querySelector("button");
console.log(button);

// button.onclick=()=>{
//     alert("button clicked");
// }


// button.onkeyup=()=>{
//     alert("button clicked");
// }

let input=document.querySelector("input");
input.onchange=(e)=>{
    console.log("input value is: ",e.target.value);
}

//create element
let div=document.querySelector("#div");

let p=document.createElement("p");
p.innerText=" kjsadbsyuadb wdyubd dbdyuwqydbq";
console.log(p);

div.append(p);



