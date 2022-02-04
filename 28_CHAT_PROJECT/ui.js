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

    return `${day}.${month}.${year} - ${hour}:${min}`;
  }
  templateLI(data) {
    let HTMLLI = `<li>${data.username}: ${data.message} <br/> ${this.getTime(
      data.created_at.toDate()
    )}</li> <br/>`;
    this.elem.innerHTML += HTMLLI;
  }
  clear() {
    this.elem.innerHTML = "";
  }
}

export default ChatUi;
