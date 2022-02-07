class ChatUi {
  constructor(elem) {
    this.elem = elem;
  }
  set elem(li) {
    this._elem = li;
  }
  get elem() {
    return this._elem;
  }
  // Seting the time string in message
  getTime(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    year = String(year).padStart(4, "0");
    month = String(month).padStart(2, "0");
    day = String(day).padStart(2, "0");
    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    let today = new Date();
    if (
      day == String(today.getDate()).padStart(2, "0") &&
      month == String(today.getMonth() + 1).padStart(2, "0") &&
      year == String(today.getFullYear())
    ) {
      return `<i>Today at</i> ${hour}:${min}`;
    } else {
      return `${day}.${month}.${year} - ${hour}:${min}`;
    }
  }
  // creating message
  templateLI(doc) {
    let id = doc.id;
    let data = doc.data();
    let style = "float:auto;";
    if (doc.data().username === localStorage.username) {
      style = "float:right;";
    } else {
      style = "float:left;";
    }
    let HTMLLI = `<li style=${style} id=${id}><i>${data.username}</i>: ${
      data.message
    } <br/> ${this.getTime(
      data.created_at.toDate()
    )}<span>&#128465;</span></li> <br/>`;
    this.elem.innerHTML += HTMLLI;
  }
  // clear message input
  clear() {
    this.elem.innerHTML = "";
  }
}

export default ChatUi;
