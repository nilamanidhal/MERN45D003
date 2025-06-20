 document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();


     let username=document.getElementById("user").value;
    let password=document.getElementById("pass").value;

    let storedPass=localStorage.getItem(username);
    if(storedPass===null){
        alert("user not registered");
    }
    else{
        if(storedPass===password){
            alert("loged in sucessfully");
            window.location.href='home.html';
        }
        else{
            alert("invalid password");
            return;
        }
    }

    });