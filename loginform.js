let email1=document.getElementById("email1");
let pass1=document.getElementById("pass1");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");

function validatemail()
{

    let regexp=/^([a-zA-Z0-9.!#$%&+/=?^_~-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email1.value))
    {
        // error.innerHTML="VALID";
        // error1.style.color="green";
        // return true;
        var a=1;
    }
    else
    {
        error1.innerHTML="Enter Valid Email";
        email1.style.border="2px solid red";
        return false;
    // 
        var a=0;
    }

    if(a=1)
    {
        // var lowerCaseLetters = /^[a-z]$/;
        // var upperCaseLetters = /^[A-Z]$/;
        // var numbers = /^[0-9]$/;
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if(pass1.value.match(passw))
        {
             error1.innerHTML="VALID";
             error2.innerHTML="VALID";
             error1.style.color="green";
             error2.style.color="green";
             return true;
        }
        else
        {
            error2.innerHTML="Password must contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
                pass1.style.border="2px solid red";
                return false;
        }
    }
    // else if(a=0)
    // {
    //         error1.innerHTML="Enter Valid Email";
    //         email1.style.border="2px solid red";
    //         return false;
    // }

}


