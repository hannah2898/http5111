
//Declaring variables
var userteamNumber;
var TeamNumber = "1";
var firstName;

//Pop up window to accept team number
userteamNumber = prompt("Which team number do you belong to?");

if(userteamNumber === TeamNumber){
    //pop up window to accept first name
    firstName= prompt("Please enter your first name",'eg: John');
    //incase of null or empty entries
    if((firstName==="")||(firstName===null)||(firstName==="eg: John")){
        alert("Your entry is invalid");
    }
    else{
        //Using a switch to display custom welcome message for each team member
    switch(firstName.toLowerCase()){
        case 'yousuf':
            alert("Welcome Yousuf Abbas");
            break;
        case 'kaverappa':
            alert("Welcome Kaverappa K U");
            break;
        case 'yash':
                alert("Welcome Yash Nileshbhai Modi");
                break;
        case 'hanna':
                alert("Welcome Hanna Elsa Reni George");
                break;
        case 'yejun':
                alert("Welcome Yejun Son");
                break;
            //Using default to display error message in case of invalid firstname
        default:
                alert("Access Denied!");
                break;
    }
}
}
//error message for incorrect team number
else{
    alert("You are denied the access");
}
