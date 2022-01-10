let inputNumber;
let aNumber = Array();
do {
    inputNumber = prompt("Enter a number: ");
    console.log("Enter a number: " + inputNumber);
    if (!isNaN(inputNumber)) {
        if (inputNumber != "")
            aNumber.push(inputNumber);
    }
} while (inputNumber != "done" || inputNumber == "");

let aNumbers = aNumber.toString();
console.log("Numbers: " + aNumbers);

let sum = aNumber.reduce(myFunc);
function myFunc(total, num) {
  return total - num * -1;
}

let average = sum / aNumber.length;
console.log("The average is",average);

aNumber.sort(function(a, b){
  return a - b;
});
console.log("The minimum is",aNumber[0],"\nThe maximum is",aNumber[aNumber.length-1]);

let resule = 0;
for (let i = 0; i < aNumber.length; i++){
  j = (aNumber[i] - average)**2;
  resule += j;
}
let g = (aNumber.length)-1;
let averagesum = Math.sqrt(resule / g).toFixed(2);
console.log("The standard deviation is ",averagesum);