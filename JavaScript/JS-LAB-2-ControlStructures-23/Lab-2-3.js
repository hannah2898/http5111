//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var userChoice;
var userEmail;

//==== LOGIC =============
userChoice = confirm("Would you like to join our mailing list?");
console.log(userChoice);
if (userChoice===true){
userEmail = prompt("Please provide your email",'me@example.com');
console.log(userEmail);
if((userEmail==="")||(userEmail==="me@example.com")||(userEmail===null)){
    alert("Thank you, but your email is not valid.");
 }
 else{
     alert("Thank you, our next newsletter will be sent to "+userEmail);
 }
}
if(userChoice===false){
    alert("Thank you, we will not bother you again");
}




