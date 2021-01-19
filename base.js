class List {
  constructor() {
    if (this.constructor === List) {
      throw new TypeError('Abstract class "List" cannot be instantiated directly.');
    }
  }
  insertFirst(data) { }
  insertAt(data, index) { }
  insertLast(data) { }
  getAtIndex() { }
  removeAt() { }
  clear() { }
  reverse() { }
  recRev(head) { }
  //print data
  printData() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

module.exports = List