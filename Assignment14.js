// Assignment14
var Length = parseInt(prompt("What is the lenght of the room in feet?"))
var Width = parseInt(prompt("What is the width of the room in feet?"))
console.log("What is the lenght of the room in feet?",Length,"\n",
            "What is the Widht of the room in feet?",Width,"\n",
            "You entered dimensions of",Length,"feet by",Width,"feet.","\n",
            "The area is",(Length*Width),"square feet",((Length*Width)*0.092903).toFixed(3),"square meters")