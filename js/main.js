
function fun(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");
    result.setAttribute("class","alert alert-danger text-center");

    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data In form";
        return false;
    }else if (user.length<5 || user.length>15){
        result.innerHTML = "Enter 5-15 character in userName";
        return false;
    }else if (email.indexOf("@",3)==-1 || email.indexOf(".com") ==-1 ){
        result.innerHTML = "Enter Valid Email";
        return false;
    }else if (pass.length <8){
        result.innerHTML = "Enter at least 8 character in password";
        return false;
    }else if (pass != confirm){
        result.innerHTML = "Matched Password";
        return false
    }
}