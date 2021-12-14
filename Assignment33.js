let message;
function chat() {
     message = prompt()
     if(message.includes("bye")){
          console.log("Me :",message);
          console.log("Bot : OK Good bye.");  
     }
     else{
          console.log("Me :",message);
          console.log("Bot :",message);
          chat()
     }
}
chat()