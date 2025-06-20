

let inputs=document.querySelectorAll("input");
// let name1=document.querySelector('#name');


document.querySelector(".submit").addEventListener("click",(e)=>{
   
    let userX={
        name:inputs[0].value,
        age:inputs[1].value,
         ph:inputs[2].value,
        email:inputs[3].value,
        poss:inputs[4].value
    }
// let Fname=name1.value;
//      localStorage.setItem("userData", JSON.stringify(Fname));
     localStorage.setItem("userData", JSON.stringify(userX));
});
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
})