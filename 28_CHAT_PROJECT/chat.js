class Chatroom {
  constructor(r, un) {
    this.room = r;
    this.username = un;
    this.chats = db.collection("chats");
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
  set username(un1) {
    this._username = un1;
  }
  get username() {
    return this._username;
  }

  // METHODS
  /*----- ADD CHAT --- */
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
  /*----- GET CHAT --- */
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
  /*---- Validate username --- */

  validateUsername(un) {
    let un1 = un.trim();
    if (un1.length >= 2 && un1.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
  /* --- Update Username ---*/

  updateUsername(username) {
    this.username = username;
    localStorage.setItem("username", username);
  }
}

export default Chatroom;
