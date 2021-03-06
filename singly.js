const List = require('./base.js')

class SinglyList extends List {

  constructor() {
    super()
    this.head = null
    this.size = 0
  }

  //insert first
  insertFirst(data) {
    this.head = new this.Node(data, this.head)
    this.size++
  }

  //insert at index
  insertAt(data, index) {
    // If index is invalid
    if (index < 0 || index > this.size) {
      console.log("Range out of bounds")
    }

    // if first index
    if (index === 0) {
      this.insertFirst(data)

    } else {
      let current, previous, count = 0
      current = this.head
      let node = new this.Node(data)
      while (count < index) {
        previous = current
        current = current.next
        count++
      }

      node.next = current
      previous.next = node

      this.size++
    }


  }

  // insert last
  insertLast(data) {
    if (!this.head) {
      this.insertFirst(data)
    } else {
      let node = new Node(data)

      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
      this.size++
    }

  }

  // get at index
  getAtIndex(index) {
    // invalid range
    if (index < 0 || index >= this.size) {
      return -1
    }

    let count = 0
    let current = this.head

    while (current) {
      if (count === index) {
        return current.data
      }
      current = current.next
      count++
    }

    return -1
  }

  // remove at index
  removeAt(index) {
    // invalid range
    if (index < 0 || index >= this.size) {
      return -1
    }

    let current, previous, count = 0

    current = this.head

    if (index === 0) {
      this.head = current.next
      return
    }

    while (count < index) {
      previous = current
      current = current.next
      count++
    }

    previous.next = current.next
    this.size--

  }



  // clear this
  clear() {
    this.head = null
    this.size = 0
  }

  // reverse
  reverse() {
    let previous, current, next
    current = this.head

    while (current) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

    this.head = previous
  }

  recRev(head) {
    if (!head.next) {
      this.head = head
      return
    }

    this.recRev(head.next)
    let prev
    prev = head.next
    prev.next = head
    head.next = null
  }
}

SinglyList.prototype.Node = class Node {
    constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

module.exports = SinglyList