let choice = prompt( "Press C to convert from Fahrenheit to Celsius. \nPress F to convert from Celsius to Fahrenheit." );
let fahrenheit;
let f;
let celsius;
let c;
console.log("Your choice:" ,choice)
if (choice == "C" && "c"){
     let fahrenheit = Number(prompt( "Please enter the temperature in Fahrenheit:" ));
     c = (fahrenheit - 32) * 5 / 9;
     console.log(" Please enter the temperature in Fahrenheit:",fahrenheit,"\n The temperature in Celsius is",c);
} 
else (choice == "F" && "f")
     celsius = Number(prompt( "Please enter the temperature in Celsius:" )); 
     f = (celsius * 9 / 5) + 32;
     console.log(" Please enter the temperature in Celsius:" , celsius,"\n The temperature in Fahrenheit is", f);