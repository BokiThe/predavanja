class Chatroom {
  constructor(r, un) {
    this.room = r;
    this.username = un;
    this.chats = db.collection("chats");
  }
  // METHODS

  async addChat(message) {
    let date = new Date();

    let docChat = {
      message: message,
      room: this.room,
      username: this.username,
      created_at: firebase.firestore.Timestamp.fromDate(date),
    };
    let response = await this.chats.add(docChat);
    return response;
  }
  getChat(callback) {
    this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            callback(change.doc.data());
            ``;
          }
        });
      });
  }
  //set and get for props
  set room(r) {
    let r1 = r.trim();
    if (r1.length > 0) {
      this._room = r1;
    } else {
      this._room = "general";
    }
  }
  get room() {
    return this._room;
  }
  set username(un) {
    let un1 = un.trim();
    if (un1.length >= 2 && un1.length <= 10) {
      this._username = un1;
    } else {
      this._username = "user" + Math.floor(Math.random() * 500);
    }
  }
  get username() {
    return this._username;
  }
}

export default Chatroom;
