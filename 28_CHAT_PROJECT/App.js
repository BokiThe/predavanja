import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

/*---DOM ELEMENTS---  */
let chatContainer = document.getElementById("chatContainer");
let messageBtn = document.getElementById("messageBtn");
let messageInput = document.getElementById("message");
let usernameBtn = document.getElementById("usernameBtn");
let usernameInput = document.getElementById("username");

let ul = document.querySelector("ul");
console.log(ul);

/*----- LOCAL STORAGE ---- */
/*----adding to local storage --- */
// localStorage.setItem("My first item", 5);
// localStorage.setItem("My first item", "string");

// /*--- demonstration --- */
// localStorage.setItem("x", 7);
// localStorage.setItem("y", 10);
/*collecting from local storage */
let z = localStorage.x + localStorage.y;
console.log(z);

if (localStorage.x) {
  console.log(`X postoji`);
} else {
  console.log("x  ne postoji");
}

/* CREATING NEW CHATROOM AND CHATUI */
const chatroom = new Chatroom("general", "bojan123");
let li1 = new ChatUi(ul);

// IPIS DB COLEKKCIJE U MESSAGE POLJU!
chatroom.getChat((d) => {
  li1.templateLI(d);
});

/*
Kada se klikne na dugme Send/Pošalji realizovati da se pošalje poruka koja je napisana u input polju
Poslatu poruku treba dodati u bazu podataka
Poslata poruka treba da bude vidljiva na <ul> na stranici

Dobro protestirati slanje poruka da li radi u bazi podataka i na stranici


Onemogućiti slanje prazne poruke 🖳
*/
/* ----- SENDING MESSAGE --- */
messageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let messageInputValue = messageInput.value;

  if (messageInputValue.trim().length != "") {
    chatroom
      .addChat(messageInputValue)
      .then(() => {
        messageInput.value = "";
        console.log(`uspesno dodat chat`);
      })
      .catch((err) => console.log(`greska`, err));
  }
});

/*----- UPDATE USERNAME ---- */
usernameBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let usernameInputValue = usernameInput.value;
  if (chatroom.validateUser(usernameInputValue)) {
    let p = document.createElement("p");
    p.innerText = `Your new username is ${usernameInputValue}`;
    d;
    chatContainer.appendChild(p);
    chatroom.username = usernameInputValue;
    usernameInput.value = "";
    setInterval(() => {
      chatContainer.removeChild(p);
    }, 1000 * 3);
  } else {
    let p = document.createElement("p");
    p.innerText = `Username must be between 2 and 10 caracters`;
    chatContainer.appendChild(p);
    usernameInput.value = "";
    setInterval(() => {
      chatContainer.removeChild(p);
    }, 1000 * 3);
  }
});
