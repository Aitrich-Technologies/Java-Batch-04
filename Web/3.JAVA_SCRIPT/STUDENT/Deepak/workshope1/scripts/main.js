function validateForm()
{
    
    var jobTitle=document.myForm.jobTitle.value;  
    var description=document.myForm.jobDescription.value;  
    var salary=document.myForm.salary.value; 
    var location=document.myForm.location.value; 




    var alphabetRegex=/^[A-Za-z]+$/;
    if(jobTitle==null || jobTitle=="")
    {
        alert(jobTitle+"Please enter your job title");
        return false;
    }
    else if(!alphabetRegex.test(jobTitle))
    {
      alert(jobTitle+"only include alphabets");
      return false;
    }
     if(description==null || description=="")
    {
        alert("Please enter your job description");
        return false;

    }
    if(salary==null || salary=="")
    {
        alert("Please enter your salary");
        return false;

    }
    else if(isNaN(salary))
    {
        alert("Please enetr a number");
        return false;
    }
    if(location==null ||location=="")
    {
        alert("Please enter your location");
        return false;

    }

    else if(!alphabetRegex.test(location))
    {
        alert("please enter proper location");
        return false;
    }
    

}

function validateCharacter(inputChar)
{
   
    const regex = /^[a-zA-Z]+$/; // regular expression pattern for alphabetical characters
    if(!regex.test(inputChar))
    {
        alert("Allowed alphabets")
        return false;
    }

}

