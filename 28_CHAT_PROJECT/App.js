import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

const chat1 = new Chatroom("general", "bojan123");
let ul = document.querySelector("ul");
console.log(ul);

console.log(chat1.username, chat1.room);

chat1.username = "r";
console.log(chat1.username);

chat1.room = "js";
console.log(chat1.room);

// chat1
//   .addChat("Prva poruka")
//   .then(() => console.log(`New chat added successfuly!`))
//   .catch((err) => console.log("Something went wrong: ", err));
// IPIS DB COLEKKCIJE U MESSAGE POLJU!

let li1 = new ChatUi(ul);
chat1.getChat((d) => {
  li1.templateLI(d);
});

/*
Kada se klikne na dugme Send/Pošalji realizovati da se pošalje poruka koja je napisana u input polju
Poslatu poruku treba dodati u bazu podataka
Poslata poruka treba da bude vidljiva na <ul> na stranici

Dobro protestirati slanje poruka da li radi u bazi podataka i na stranici


Onemogućiti slanje prazne poruke 🖳
*/

let messageBtn = document.getElementById("messageBtn");
let messageInput = document.getElementById("message");
let usernameBtn = document.getElementById("usernameBtn");
let usernameInput = document.getElementById("username");

messageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let messageInputValue = messageInput.value;
  let usernameInputValue = usernameInput.value;

  if (messageInputValue.trim().length != "") {
    chat1
      .addChat(messageInputValue)
      .then(() => {
        messageInput.value = "";
        console.log(`uspesno dodat chat`);
      })
      .catch((err) => console.log(`greska`, err));
  }
});
