window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"].value;
	var password = document.forms["myLogin"]["password"].value;

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const registerUsername = urlParams.get('username');
	const registerPassword = urlParams.get('password');
	
	if(username != registerUsername || password != registerPassword){
		alert("username or password not match");
		return false;
	}
	alert("Login Success");
}