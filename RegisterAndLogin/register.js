window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
    
}

function validateForm() {
    var password = document.forms["myForm"]["password"].value;
    var retypePassword = document.forms["myForm"]["retypePassword"].value;
    if(password != retypePassword){
        document.getElementById("errormsg").innerHTML = "password != retypePassword";
        return false;
    }
    document.getElementById("errormsg").innerHTML = "";
}