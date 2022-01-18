function calcMonthsUntilPaidOff(lBalance, lAPR, lMonthlyPayment) {
    a = -(1 / 30);
    i = (lAPR / 100) / 365;
    c = Math.log10(1 + (lBalance / lMonthlyPayment) * (1 - (1 + i) ** 30));
    d = Math.log10(1 + i);
    localMonths = Math.ceil(a * (c / d));
    return localMonths;
  }
  
  let balance = Number(prompt("What is your balance?"));
  let APR = Number(prompt("What is the APR on the card (as a percent)?"));
  let monthlyPayment = Number(prompt("What is the monthly payment you can make?"));
  let months;
  if (balance, APR, monthlyPayment) {
    months = calcMonthsUntilPaidOff(balance, APR, monthlyPayment);
  }
  else {
    window.alert("Enter number only");
    location.reload();
  }
  
  console.log("What is your balance?", balance ,
    "\nWhat is the APR on the card (as a percent)?", APR ,
  "\nWhat is the monthly payment you can make?", monthlyPayment ,
  "\nIt will take you", months, "months to pay off this card");