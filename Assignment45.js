let num = Array();

do{
    numbers = prompt("Enter a list of numbers, separated by spaces: ");
}while(numbers == "" || isNaN(numbers));

for(i =0; i < numbers.length; i++){
    num.push(numbers[i]);
}
console.log("Enter a list of numbers, separated by spaces: "+num.join(" "));

let evenNumber = Array();
function filterEvenNumbers(){
    for(i =0; i < num.length; i++){
        nums = (num[i])%2 == 0;
        if(nums == true){
            evenNumber.push(num[i]);
        }
    }
}
filterEvenNumbers();
console.log("The even numbers are  "+evenNumber.join(" "));