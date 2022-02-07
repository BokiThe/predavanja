import Chatroom from "./chat.js";
import ChatUi from "./ui.js";

/*---DOM ELEMENTS---  */
//username elements
let usernameForm = document.getElementById("usernameForm");
let usernameInput = document.getElementById("username");
// message elements
let messageForm = document.getElementById("messageForm");
let messageInput = document.getElementById("message");
// nav section elements
let chatRooms = document.getElementById("chatRooms");
let hamburgerMenu = document.getElementById("hamburgerMenu");
let btns = document.querySelectorAll(".btn");
//message section elements
let msgSection = document.getElementById("messageSection");
let ul = document.querySelector("ul");
//update color elements
let colorForm = document.getElementById("colorForm");
let colorPick = document.getElementById("colorPick");
// filter elements
let toDate = document.getElementById("toDate");
let fromDate = document.getElementById("fromDate");
let filterForm = document.getElementById("filter");

/*----- LOCAL STORAGE ---- */

/* ---- checking if the local storige is empty ---- */

////////// default values for local storage //////////
let username = "Anonimous";
let color = "#000000";
let room = "#general";

////// checking for username
localStorage.username
  ? (username = localStorage.username)
  : localStorage.setItem("username", username);
//////// checking for color
localStorage.color
  ? (color = localStorage.color)
  : localStorage.setItem("color", color);
//////// checking for room
localStorage.room
  ? (room = localStorage.room)
  : localStorage.setItem("room", room);

/* CREATING NEW CHATROOM AND CHATUI */
let chatroom = new Chatroom(localStorage.room, localStorage.username);

// IPIS DB kOLEKCIJE U MESSAGE POLJU!
let messages = new ChatUi(ul);
chatroom.getChat((d) => {
  messages.templateLI(d);
});
/*--- message section scroll bottom --- */
let scrollDown = (a) => {
  a.scrollTop = a.scrollHeight - a.clientHeight;
};
setTimeout(() => scrollDown(msgSection), 500);

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
    setTimeout(() => {
      usernameForm.removeChild(p);
    }, 1000 * 3);
    usernameForm.reset();
    setTimeout(() => {
      location.reload();
    }, 1000 * 3);
  } else {
    p.innerHTML = "* Username must be between 2 and 10 caracters! *";
    usernameForm.insertBefore(p, usernameForm.firstChild);

    setTimeout(() => {
      usernameForm.removeChild(p);
    }, 1000 * 3);
    usernameForm.reset();
  }
});

/* ---- Checking rooms ---  */

// default room general

chatRooms.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    scrollDown(msgSection);
    messages.clear();
    localStorage.room = e.target.innerHTML;
    chatroom.updateRoom(e.target.innerHTML);
    chatroom.getChat((d) => {
      messages.templateLI(d);
    });
  }
});
/*--- Checking Rooms in hamburger menu ---- */
hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "BUTTON") {
    scrollDown(msgSection);
    messages.clear();
    localStorage.room = e.target.innerHTML;
    chatroom.updateRoom(e.target.innerHTML);
    chatroom.getChat((d) => {
      messages.templateLI(d);
    });
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
      document.body.style.background = localStorage.color;
    }, 500);
  } else {
    console.log(`nesto nije u redu`);
  }
});

/* --- Filter Messages --- */

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let fromDateValue = fromDate.value;
  fromDateValue = new Date(fromDateValue);
  fromDateValue = firebase.firestore.Timestamp.fromDate(fromDateValue);

  let toDateValue = toDate.value;
  toDateValue = new Date(toDateValue);
  toDateValue = firebase.firestore.Timestamp.fromDate(toDateValue);

  let chats = db.collection("chats");

  chats
    .where("created_at", ">=", fromDateValue)
    .where("created_at", "<=", toDateValue)
    .where("room", "==", localStorage.room)
    .orderBy("created_at")
    .get()
    .then((snapshot) => {
      if (!snapshot.empty) {
        messages.clear();
        let docs = snapshot.docs;
        docs.forEach((doc) => {
          messages.templateLI(doc);
        });
        filterForm.reset();
      } else {
        alert(`No messages`);
      }
    })
    .catch((err) => {
      console.log(`ne postoji dokument ciji je id `, err);
    });
});
