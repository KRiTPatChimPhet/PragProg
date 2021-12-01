let name = prompt("What is your name?")
let password = prompt("What is the password?")
let confirmPassword = prompt("Please reconfirm your password.")
let yes;
let no;
if (password == '') {
    alert ("Please enter Password");
}
if (confirmPassword == '') {
    alert ("Please enter Password");
}
else if (password != confirmPassword) { 
    no = ("ฉันไม่รู้จักคุณ.") 
} 	
else{ 
	yes = ("ยินดีต้อนรับ!")  
} 
console.log("What is your name?",name,"\n",
            "What is the password?",password,"\n",yes,no)   