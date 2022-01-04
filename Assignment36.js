let rate;
do{
    rate = prompt("What is the rate of return?");
    if (rate == 0 || isNaN(rate)){
        console.log("Sorry. That's not a valid input.");
    }
}while(rate == 0 || isNaN(rate)){
    let years;
    years = 72 / rate;
    console.log("It will take "+years+" years to double your initial investment");
}