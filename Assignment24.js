let w = Number(prompt("How much is your weight?"));
let gender = prompt("Are you male or female?");
let a = Number(prompt("How many ounces of alcohol did you drink?"));
let h = Number(prompt("What is the number of hours since the last drink?"));
let r;
let bac;
if (gender == "male"){
    r = 0.73
    bac = ((a * 5.14 / w * r ) - 0.15 * h).toFixed(2); 
    if (bac >= 0.08){
        console.log("Youer BAC is",bac,"\n it is not legal for you to drive.")
    }
    else{
        console.log("Youer BAC is",bac,"\n it is legal for you to drive.")
    }
}
else {if (gender == "female");
    r = 0.66
    bac = ((a * 5.14 / w * r ) - 0.15 * h).toFixed(2); 
    if (bac >= 0.08){
        console.log("Youer BAC is",bac,"\n it is not legal for you to drive.")
    }
    else{
        console.log("Youer BAC is",bac,"\n it is legal for you to drive.")
    }
}
