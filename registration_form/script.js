function validateName(){
    const regex=/^[A-Za-z\s]+$/;
    if(!regex.test(name)){
        return "Name must contains aplabets and space"
    }
    return "valid"
}

function validateEmail(){
    const regex=/^[a-zA-Z0-9.-]+@[A-Za-z0-9,-]+\.[A-Za-z]{2,}$/;
    if(!regex.test(email)){
         return "Invalid email"
    }
    return "valid"

}

function validatePassword(){
    const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regex.test(password)){
          return "Password must contain special and 0ne uppercase"
    }
    return "valid"
}

function validatePhoneNumber(){
    const regex=/^[0-9]{10}$/;
    if(!regex.test(phone_number)){
           return "incorrect phone number"
    }
    return "valid"
}


function registration_form(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let phone_number=document.getElementById("phonenumber").value;

    if(validateName="valid"&&valid_email=="valid"&&valid_password=="valid"&&valid_number=="valid"){
        return true;
    }


    let valid_name=validateName(name); // store in variable so func validname will  not execute reaptedly
    let valid_email=validateEmail(email);
    let valid_password=validatePassword(password);
    let valid_number=validatePhoneNumber(phone_number);

    document.getElementById("nameError").innerText=valid_name==""
}


