function Register(event){
    // alert('Working')
    event.preventDefault()    

    var UserName = document.getElementById("UserName").value;
    var UserNumber = document.getElementById("UserNumber").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

    var Data = {Name: UserName, Number: UserNumber, Email: UserEmail, Password: UserPassword, ConfirmPassword: UserConfirmPassword}

    var DataFromLS = JSON.parse(localStorage.getItem("MyntraData")) || [];
   
    var flag = false;

   for(var i=0; i < DataFromLS.length; i++){
    if(DataFromLS[i].Email === UserEmail)
       flag = true;
    }

    if(flag === true){
    alert("Email is Already Present")
    }
    else if (UserPassword.length < 1 && UserName.length < 1 && UserEmail.length < 1 
        && UserNumber.length < 1 && UserConfirmPassword.length < 1) {
            alert("must fill all field")
    }
            else if (UserPassword.length < 8) {
            alert("password is atleast 8 digit")
        }
        else if(UserPassword != UserConfirmPassword){
            alert("Password Mismatch")
        }
        else
         {
            DataFromLS.push(Data);
            localStorage.setItem("MyntraData", JSON.stringify(DataFromLS));
            // console.log(DataFromLS, "DataFromLS");
            document.getElementById("UserName").value = '';
            document.getElementById("UserNumber").value = '';
            document.getElementById("UserEmail").value = '';
            document.getElementById("UserPassword").value = '';
            document.getElementById("UserConfirmPassword").value = '';
            alert("registration done");
        }
        
}


function login(event){

    event.preventDefault();
    // alert("Working");

    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;

    var DataFromLS = JSON.parse(localStorage.getItem("MyntraData"));

    var flag = false;

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === UserEmail && DataFromLS[i].Password === UserPassword){
            flag = true;
        }
    }

    if(flag === true){
        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';
        window.location.href = "index.html";
        localStorage.setItem("cuurent-user", JSON.stringify(UserEmail));
        alert("login Successfully");
    }
    else{
        alert("please check your credential or create your account");
        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';
    }

}



// function login(event){

//     event.preventDefault();
//     // alert("Working");

//     var UserEmail = document.getElementById("UserEmail").value;
//     var UserPassword = document.getElementById("UserPassword").value;

//     var DataFromLS = JSON.parse(localStorage.getItem("MyntraData"));

//     var flag = false;

//     for(var i=0; i < DataFromLS.length; i++){
//         if(DataFromLS[i].Email === UserEmail && DataFromLS[i].Password === UserPassword){
//             flag = true;
//         }
//     }

//     if(flag === true){
//         document.getElementById("UserEmail").value = '';
//         document.getElementById("UserPassword").value = '';
//         window.location.href = "index.html";
//         alert("login Successfully");
//     }
//     else{
//         alert("please check your credential or create your account");
//     }

// }

var GettingEmail;

function forgetPassword(event){
    // alert("working");
    event.preventDefault();

    var UserEmail = document.getElementById("UserEmail").value;
    GettingEmail = UserEmail
    console.log(GettingEmail, "GettingEmail");

    var DataFromLS = JSON.parse(localStorage.getItem("MyntraData"));
    console.log(DataFromLS, "DataFromLS");

    var flag = false;
    
    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === GettingEmail){
            flag = true;
        }
    }
    console.log(GettingEmail, "GettingEmail")

    if(flag=== true){

        DivFromHTML = document.getElementById("Change");
        console.log(DivFromHTML, "DivFromHTML");
        var NewPassword = `<label>Enter New Pasword</label><input id="Password" type="password"><br><button onclick="NewPassword()">Set New Password</button>`
        console.log(NewPassword, "NewPassword");
         
        DivFromHTML.innerHTML = NewPassword;
        console.log(NewPassword, "NewPassword");
       
        alert("Set a new password")
    }

    else{
        alert("please check your mail")
    }

}

function NewPassword(){

    alert("working")
    var UserPassword = document.getElementById("Password").value;
    console.log(UserPassword, "UserPassword");
    
    var DataFromLS = JSON.parse(localStorage.getItem("MyntraData"));
    console.log(DataFromLS, "DataFromLS");

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === GettingEmail){
            DataFromLS[i].Password = UserPassword;
        }
    }
    console.log(DataFromLS, "DataFromLS");

    localStorage.setItem("Myntra-Data", JSON.stringify(DataFromLS));
    GettingEmail = '';
    window.location.href = "/login.html";
    alert("password Change Successfully");


}




