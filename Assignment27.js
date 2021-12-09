let order = Number(prompt("What is the order amount?"));
let state;
let taxState;
let county;
let tax;
let total;
let totalTax;
if(order){
     state = prompt("What state do you live in?");
     if (state == "Wisconsin" ){
          taxState = order*(5.5 / 100);
          county = prompt("What county do you live in?");
          if (county == "Eau"){
               tax = order*(0.5 / 100);
               totalTax = (taxState + tax);
               total = order+totalTax;
               console.log("The tax is:",(totalTax).toFixed(2),"\n The total is:",total);
          }
          else {if (county == "Dunn");{
               tax = order*(0.4 / 100);
               totalTax = (taxState+tax);
               total = order+totalTax;
               console.log("The tax is:",(totalTax).toFixed(2),"\n The total is:",total);
          }
     }
     }
     if (state == "Illinois"){
               tax = order*(8 / 100);
               total = tax + order;
               console.log("The tax is:",(tax).toFixed(2),"\n The total is:",total);
     }
     else {if (state == "Los Angelis"){
               total = order;
               console.log("The total is:",(total).toFixed(2));
     }
     }
}
else{
     window.alert("Please enter the number of new orders.");
     location.reload();
}