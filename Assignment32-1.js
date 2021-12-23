function passWordvalidator(lInputPassword) {

    if (lInputPassword.length < 8) {
         if (!isNaN(lInputPassword)) {
              return "very weak";
         }
         else if (isNaN(lInputPassword)) {
              if (((!lInputPassword.includes("0")&&
                   !lInputPassword.includes("1")&&
                   !lInputPassword.includes("2")&&
                   !lInputPassword.includes("3")&&
                   !lInputPassword.includes("4")&&
                   !lInputPassword.includes("5")&&
                   !lInputPassword.includes("6")&&
                   !lInputPassword.includes("7")&&
                   !lInputPassword.includes("8")&&
                   !lInputPassword.includes("9"))&&
                   !lInputPassword.includes("@"))){
                   return "weak";
              }
         }
    }
    else{
         //lInputPassword contain both numeric and character
         if (/[0-9]/.test(lInputPassword)&& /[a-z]/.test(lInputPassword)){
              if (/[!@#$%^&()-+/]/.test(lInputPassword)){
                   return "very storng"
              }
              else{
                   return "storng"
              }
         }
    }
}
// Main programe start here  
let inputPassword = prompt("Enter password :");
let check = passWordvalidator(inputPassword);
console.log("The password \'" + inputPassword + "\' is a", check, "password.");