let n1 = prompt("Is the car silent when you turn the key?  y/n");
let n2;
let n3;
let n4;
let n5;
let n6;
if (n1 == "y"){
	n2 = prompt("Are the battery terminals corroded? y/n");
	if (n2 == "y"){
		console.log("Clean terminals and try starting again.");
     }
	else
		console.log("The battery cables may be damaged. Replace cables and try again.");
}
else{
     n3 = prompt("Dose the car make a clicking noise? y/n");
	if (n3 =="y"){
		 console.log("Replace the battery.");
     }
	else{
		n4 = prompt("Dose the car crack up but fall to start?  y/n");
          if (n4 == "y"){
               console.log("Check spark plug connections.");
          }
          else{
		     n5 = prompt("Dose the engine start and then die?  y/n");
		     if (n5 == "y"){
				n6 = prompt("Does your car have fuel injection?  y/n");
			     if (n6 == "y"){
                         console.log("Check to ensure the choke is opening and closing.");
                    }
				else
                         console.log("Get it in for service.");
               }
          }
     }
}