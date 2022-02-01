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
// IPIS DB COLEKKCIJE U KONZOLI

let li1 = new ChatUi(ul);
chat1.getChat((d) => {
  li1.templateLI(d);
});
