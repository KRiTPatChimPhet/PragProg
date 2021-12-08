let order = Number(prompt("What is the order amount?"));
let state = prompt("What state do you live in?");
let taxState;
let county;
let taxEau;
let taxE;
let totalE;
let taxDunn;
let taxD;
let totalD;
let taxIllinois;
let totalIllinois;
let total;
if (state == "Wisconsin" ){
     taxState = order *(5.5 / 100);
     county = prompt("What county do you live in?");
     if (county == "Eau"){
          taxEau = order *(0.5 / 100);
          taxE = (taxState + taxEau).toFixed(2);
          totalE = order + taxE
          console.log("The tax is:",taxE,"\n The total is:",totalE);
     }
     else {if (county == "Dunn");{
          taxDunn = order *(0.4 / 100);
          taxD = (taxState + taxDunn).toFixed(2);
          totalD = order + taxD;
          console.log("The tax is:",taxD,"\n The total is:",totalD);
     }
}
}
if (state == "Illinois"){
          taxIllinois = order *(0.8 / 100);
          totalIllinois = taxIllinois + order;
          console.log("The tax is:",taxIllinois,"\n The total is:",totalIllinois);
}
else {if (state == "Los Angelis"){
          total = order;
          console.log("The total is:",total);
}
}