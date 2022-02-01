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
}
export default ChatUi;
