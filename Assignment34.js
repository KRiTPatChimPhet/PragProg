let message;
function chat() {
     message = prompt()
     if(message.includes("bye")){
          console.log("Me :",message);
          console.log("Bot : OK Good bye.");
     }
     else if(message.includes("ชื่อ")){
          console.log("Me :",message);
          console.log("Bot : สมศักดิ์");
          chat()     
     }
     else if(message.includes("อายุ")){
          console.log("Me :",message);
          console.log("Bot : 28");
          chat()
     }
     else{
          console.log("Me :",message);
          console.log("Bot :",message);
          chat()
     }
}
chat()