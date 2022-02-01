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
  templateLI(data) {
    let HTMLLI = `${data.username}: ${data.message} <br/> ${data.created_at} <br/>`;
    this.elem.innerHTML += HTMLLI;
  }
}
export default ChatUi;
