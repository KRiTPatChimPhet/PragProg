let inputString = prompt("What is the input string?");
let length;
if (inputString == ""){
    window.alert("Please fill in the information.")
    location.reload;
}
else
    length = inputString.length;
console.log("What is the input string?",inputString,
            "\n",inputString,"has",inputString.length,"characters.");