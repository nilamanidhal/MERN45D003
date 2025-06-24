 document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
});
  
    document.querySelector('.submit').addEventListener("click",()=>{
         let username=document.getElementById("user").value;
         let password=document.getElementById("pass").value;

        if(localStorage.getItem(username)){
            alert("Email is alredy exits");
            return;
        }
 localStorage.setItem(username,password);
 console.log(username);
  alert("user registered sucessfully");
  window.location.href='LogIn.html';
    })