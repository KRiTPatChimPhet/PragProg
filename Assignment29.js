let n1 = Number(prompt("Enter the first number:"));
let n2 = Number(prompt("Enter the second number:"));
let n3 = Number(prompt("Enter the third number:"));
if (n1,n2,n3){
     if (n1 == n2 == n3){
          if(n1 > n2){
               if (n1 > n3){
                    console.log("The largest number is",n1);
               }
               else {if (n3 > n2){
                    console.log("The largest number is",n3);
               }
               else
                    console.log("The largest number is",n2);
               }     
          }
          else {if (n2 > n3){
                    console.log("The largest number is",n2);
          }
               else {if(n3 > n1){
                    console.log("The largest number is",n3);
               }
               else
                    console.log("The largest number is",n1);
               }
          }
     }
     else {
          window.alert("Please enter a new number again.");
          location.reload();
     }
}
else{
     window.alert("Please enter a new number again.");
     location.reload();
}