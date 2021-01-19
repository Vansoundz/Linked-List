const SinglyList = require('./singly.js')

class DoublyList extends SinglyList {
  constructor() {
    super()
    this.head = null
    this.tail = null
    this.size = 0
  }

  insertFirst(data) {
    if (!this.head) {
      let node = new this.Node(data)
      this.head = node;
      this.tail = node;

    } else {
      let node = new this.Node(data, this.head)
      node.next.prev = node
      this.head = node
    }
    this.size++
  }

  insertLast(data) {
    if (!this.tail) {
      this.insertFirst(data)
    } else {
      let node = new this.Node(data, null, this.tail)
      this.tail.next = node
      this.tail = node
      this.size++
    }

  }

  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data)
    } else if (index === this.size) {
      this.insertLast(data)
    }
    else {
      if (index > (this.size / 2)) {
        let current = this.tail
        let prev = current.prev
        let c = this.size

        while (index < c - 1) {
          current = prev
          prev = prev.prev
          c--
        }

        let node = new this.Node(data)
        node.prev = prev
        prev.next = node
        node.next = current
        current.prev = node
      } else {
        let current = this.head
        let next = current.next
        let c = 1

        while (c < index) {
          current = next
          next = next.next
          c++
        }

        let node = new this.Node(data)

        node.next = next
        next.prev = node
        current.next = node
        node.prev = current
      }
      this.size++
    }

  }

  removeAt(index) {
    if (index < 0 || index >= this.size) return
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
    } else if (index === this.size - 1) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      if (index > (this.size - 1) / 2) {
        let tail = this.tail
        let prev = tail.prev
        let s = this.size - 1

        while (index < s) {
          tail = prev
          prev = prev.prev
          s--
        }
        let next = tail.next
        prev.next = next
        next.prev = prev
      } else {
        let head = this.head
        let next = head.next
        let c = 1

        while (c < index) {
          head = next
          next = next.next
          c++
        }

        let node = next.next
        head.next = node
        node.prev = head
      }
    }
    this.size--
  }

  printBack() {
    let t = this.tail

    while (t) {
      console.log(t.data)
      t = t.prev
    }
  }

  printWithIndex() {
    let curr = this.head
    let i = 0
    while (curr) {
      console.log(curr.data, i++)
      curr = curr.next
    }
  }

  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }


}

DoublyList.prototype.Node = class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}


module.exports = DoublyList