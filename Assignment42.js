let inputName;
let aName = Array();
let x = -1;
do {
    inputName = prompt("Enter a name: ");
    console.log("Enter a name: " + inputName);
    if(inputName.length > 0){
    aName.push(inputName);
    }
    x++
} while (inputName != "")
let g = Math.floor(Math.random() * x);
let rName = aName[g];
console.log("The winner is...",rName);