let number = Number(prompt("Please enter the number of the month"));
let month;
let f;
switch(number){
     case 1:
          month = "มกราคม";
     break;
     case 2:
          month = "กุมภาพันธ์";
     break;
     case 3:
          month = "มีนาคม";
     break;
     case 4:
          month = "เมษายน";
     break;
     case 5:
          month = "พฤษภาคม";
     break;
     case 6:
          month = "มิถุนายน";
     break;
     case 7:
          month = "กรกฏาคม";
     break;
     case 8:
          month = "สิงหาคม";
     break;
     case 9:
          month = "กันยายน";
     break;
     case 10:
          month = "ตุลาคม";
     break;
     case 11:
          month = "พฤศจิกายน";
     break;
     case 12:
          month = "ธันวาคม";
     break;
     default:
          window.alert("Please enter the number of new orders.");
          location.reload();
     break;
} 
console.log("The name of the month is:",month);