//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var userName ="dart";
		// Correct password
		var password = "vader";
		// user name input
		var inputUserName; 
		// password input
		var inputPassword;


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
inputUserName= prompt("Please enter your Username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(inputUserName);
//5. CREATE POPUP BOX FOR PASSWORD
inputPassword = prompt("Please enter your Password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(inputPassword);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if((inputUserName === userName)&&(inputPassword === password)){
	alert("Welcome back "+userName);
	console.log("Login Successful");
}
else{
	alert("Incorrect Username/Password");
	console.log("Login Fail");
}
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE