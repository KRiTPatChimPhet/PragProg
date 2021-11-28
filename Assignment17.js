var Length = prompt("What is the length of the room in feet?");
var Width = prompt("What is the width of the room in feet?");
var ColerUsed = Math.ceil((Length * Width)/350);
console.log("You will need to purchase",ColerUsed,"gallons of paint to cover",Length * Width,"square feet.")