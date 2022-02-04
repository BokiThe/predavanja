import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

/*---DOM ELEMENTS---  */
let usernameForm = document.getElementById("usernameForm");
let messageForm = document.getElementById("messageForm");
let messageInput = document.getElementById("message");
let usernameInput = document.getElementById("username");
let chatRooms = document.getElementById("chatRooms");
let hamburgerMenu = document.getElementById("hamburgerMenu");
console.log(chat);

let ul = document.querySelector("ul");

/*----- LOCAL STORAGE ---- */
/*----adding to local storage --- */
// localStorage.setItem("My first item", 5);
// localStorage.setItem("My first item", "string");

// /*--- demonstration --- */
// localStorage.setItem("x", 7);
// localStorage.setItem("y", 10);
/*collecting from local storage */
// let z = localStorage.x + localStorage.y;
// console.log(z);

// if (localStorage.x) {
//   console.log(`X postoji`);
// } else {
//   console.log("x  ne postoji");
// }
/* ---- checking if the local storige is empty ---- */

let username = "Anonimous";
if (localStorage.username) {
  username = localStorage.username;
} else {
  localStorage.setItem("username", username);
}

/* CREATING NEW CHATROOM AND CHATUI */
let chatroom = new Chatroom("general", username);

let li1 = new ChatUi(ul);
// IPIS DB kOLEKCIJE U MESSAGE POLJU!
chatroom.getChat((d) => {
  li1.templateLI(d);
});

/* ----- SENDING MESSAGE --- */
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let messageInputValue = messageInput.value;

  if (messageInputValue.trim().length != "") {
    chatroom
      .addChat(messageInputValue)
      .then(() => {
        messageForm.reset();
        console.log(`uspesno dodat chat`);
      })
      .catch((err) => console.log(`greska`, err));
  }
});

/*----- UPDATE USERNAME ---- */
usernameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let usernameInputValue = usernameInput.value;
  let p = document.createElement("p");
  p.setAttribute("id", "updateUsername");
  if (chatroom.validateUsername(usernameInputValue)) {
    chatroom.updateUsername(usernameInputValue);
    p.innerHTML = `Your new username is  <strong>* ${usernameInputValue} *<strong>`;
    usernameForm.insertBefore(p, usernameForm.firstChild);
    console.log(chat);
    setInterval(() => {
      usernameForm.removeChild(p);
    }, 1000 * 3);
    usernameForm.reset();
  } else {
    p.innerHTML = "* Username must be between 2 and 10 caracters! *";
    usernameForm.insertBefore(p, usernameForm.firstChild);
    console.log(chat);
    setInterval(() => {
      usernameForm.removeChild(p);
    }, 1000 * 3);
    usernameForm.reset();
  }
});

/* ---- Checking rooms ---  */

chatRooms.addEventListener("click", (e) => {
  e.preventDefault();
  let roomName = e.target.innerHTML;
  if (e.target.tagName === "BUTTON") {
    if (e.target.innerHTML == roomName) {
      li1.clear();
      chatroom.updateRoom(e.target.innerHTML);
      chatroom.getChat((d) => {
        li1.templateLI(d);
      });
    }
  }
});
