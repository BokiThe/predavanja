import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

/*---DOM ELEMENTS---  */
let usernameForm = document.getElementById("usernameForm");
let messageForm = document.getElementById("messageForm");
let messageInput = document.getElementById("message");
let usernameInput = document.getElementById("username");
let chatRooms = document.getElementById("chatRooms");
let msgSection = document.getElementById("messageSection");
let colorForm = document.getElementById("colorForm");
let colorPick = document.getElementById("colorPick");

/*--- message section scroll bottom --- */

let scrollDown = (a) => {
  a.scrollTop = a.scrollHeight;
};
window.onload = scrollDown(msgSection);
let ul = document.querySelector("ul");

/*----- LOCAL STORAGE ---- */

/* ---- checking if the local storige is empty ---- */

let username = "Anonimous";
let color = "#ffffff";
//checking for username
localStorage.username
  ? (username = localStorage.username)
  : localStorage.setItem("username", username);
//checking for color
localStorage.color
  ? (color = localStorage.color)
  : localStorage.setItem("color", color);

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
        scrollDown(msgSection);
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
      scrollDown(msgSection);
      li1.clear();
      chatroom.updateRoom(e.target.innerHTML);
      chatroom.getChat((d) => {
        li1.templateLI(d);
      });
    }
  }
});

/* --- Delete message --- */
msgSection.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "SPAN") {
    let parrent = e.target.parentElement;
    let username = parrent.childNodes[0].innerHTML;
    if (localStorage.username === username) {
      function confirmDelete() {
        let conf = confirm(
          "This will permanent delete the message, press OK to continue?"
        );
        if (conf) {
          parrent.remove();
          chatroom.deleteMsg(parrent.id);
        }
      }
      confirmDelete();
    } else {
      parrent.remove();
    }
  }
});

/* --- Change Background color --- */
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let colorPickValue = colorPick.value;

  if (localStorage.color != colorPickValue) {
    localStorage.color = colorPickValue;
    setTimeout(() => {
      document.body.style.background = colorPickValue;
    }, 500);
  } else {
    console.log(`nesto nije u redu`);
  }
});
