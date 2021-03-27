let email1=document.getElementById("email1");
let pass1=document.getElementById("pass1");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let pass2=document.getElementById("pass2")
var re = document.getElementById("phon");

function validatemail()
{

    if(pass1.value==pass2.value)
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
}
    // else if(a=0)
    // {
    //         error1.innerHTML="Enter Valid Email";
    //         email1.style.border="2px solid red";
    //         return false;
    // }
    else{
        error2.innerHTML="Enter same password in both areas";
        return false;
    }
}





function phonenumber() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phone = /^\d{10}$/;
    if ((re.value.match(phoneno)) || (re.value.match(phone))) {
        return true;
    } else {
        alert("Phone Number Invalid!");
        return false;
    }
}





















function validatePassword() {
                
    // Do not show anything when the length of password is zero.
    if (pass1.value.length === 0) {
        document.getElementById("error2").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(pass1.value)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Very Weak";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("error2").innerHTML = strength;
    document.getElementById("error2").style.color = color;
}
