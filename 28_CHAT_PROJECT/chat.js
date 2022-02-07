class Chatroom {
  constructor(r, un) {
    this.room = r;
    this.username = un;
    this.chats = db.collection("chats");
    this.unsub = false;
  }
  //set and get for props
  set room(r) {
    if (r) {
      this._room = r;
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
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            callback(change.doc);
            ``;
          }
        });
      });
  }
  /*--- Update room --- */
  updateRoom(ur) {
    this.room = ur;
    if (this.unsub != false) {
      this.unsub();
    }
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
  /*--- Delete message --- */
  deleteMsg(id) {
    this.chats
      .doc(id)
      .delete()
      .then(() => console.log(`message deleted!`))
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Chatroom;
