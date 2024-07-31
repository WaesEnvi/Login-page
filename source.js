let password="PASSWORD";
function myfunction()
{
	let text=document.getElementById('text').value;
	let pass=document.getElementById('pass').value;
	let username="name";
	if((text==username) && (pass==password))
	{
		alert("Login successful");
	}
	else if((text==username) && (pass!=password))
	{
		alert("Incorrect password, enter again");
	}
	else if((text!=username) && (pass==password))
	{
		alert("Incorrect Username, enter again");
	}
	else
	{
		alert("Credentials Incorrect")
	}
}

function resetpass()
{
	let oldpass=document.getElementById('oldpassword').value;
	let newpass=document.getElementById('newpassword').value;
	let confpass=document.getElementById('confirmpassword').value;
	if(oldpass!=password && confpass=="")
	{
		alert("Entered old password does not match with previous password");
		return true;
	}
	else if((oldpass==password) && (newpass==confpass))
	{
		alert("Password changed successfully!");
		newpass=password;
		return true;
	}
	else if(newpass!=confpass)
	{
		alert("New password deos not match with Confirm password");
	}
}