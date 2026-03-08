var wrong = 0;

function checkForm()
{

var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

var text = "";

if(email.indexOf("@") == -1)
{
text = "Email must contain @";
}

else if(password.length < 6)
{
text = "Password must be at least 6 characters";
}

else if(password.indexOf("#") == -1)
{
text = "Password must contain #";
}

if(text != "")
{
wrong++;

document.getElementById("msg").innerHTML = text;
document.getElementById("count").innerHTML = "Wrong Attempts: " + wrong;

return false;
}

}