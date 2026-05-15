function validateUser()
{
    
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex=/[0-9]{4}$/;


    if(email=="" ||  email==null)
    {
        alert("Please Enter valid Email ");
        return false;
    }
    else if (!emailRegex.test(email)){
            alert("enter vaild id");
            
            return false;
        }
    if(password=="" ||  password==null)
    {
        alert("Please Enter Your Password ");
        return false;
    }
    else if(!passwordRegex.test(password)){
        alert("enter vaild password");
        return false;
    }
  

        event.preventDefault();
    
    
    if(email== "lessile@gmail.com" && password=="1234")
    {
        window.location = "./profile.html";
        return true;
    }
    else{
        alert("invalid email or password");
        return false;
    }

}

// function loginCheck()
// {
//     var email=document.getElementById("email").value;
//     var password=document.getElementById("password").value;
//     event.preventDefault();
    
    
//     if(email== "lessile@gmail.com" && password=="1234")
//     {
//         window.location = "./profile.html";
//         return true;
//     }
//     else{
//         alert("invalid email or password");
//         return false;
//     }
// }

