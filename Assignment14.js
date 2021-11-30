var Length = parseInt(prompt("What is the lenght of the room in feet?"))
var Width = parseInt(prompt("What is the width of the room in feet?"))
var Sqf = Length * Width ;
var Sqm = (Sqf * 0.09290304).toFixed(3);
console.log("What is the lenght of the room in feet?",Length,"\n",
            "What is the Widht of the room in feet?",Width,"\n",
            "You entered dimensions of",Length,"feet by",Width,"feet.","\n",
            "The area is",Sqf,"square feet",Sqm,"square meters")