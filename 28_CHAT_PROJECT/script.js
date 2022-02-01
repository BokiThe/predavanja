import Chatroom from "./chat.js";

const chat1 = new Chatroom("general", "bojan123");

console.log(chat1.username, chat1.room);

chat1.username = "r";
console.log(chat1.username);

chat1.room = "js";
console.log(chat1.room);

// chat1
//   .addChat("Prva poruka")
//   .then(() => console.log(`New chat added successfuly!`))
//   .catch((err) => console.log("Something went wrong: ", err));

chat1.getChat((d) => {
  console.log(d);
});
