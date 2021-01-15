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

let dl = new DoublyList()

dl.insertFirst(100)
dl.insertFirst(200)
dl.insertFirst(300)
dl.insertFirst(500)



// console.log('remove')
// dl.removeAt(0)
console.log("Before")
dl.printData()

console.log("Insert")
dl.insertAt(400, 1)
dl.insertAt(600, 0)
dl.insertAt(150, 5)
dl.insertAt(140, 6)
dl.insertAt(130, 7)
dl.insertAt(210, 4)
dl.removeAt(8)

dl.printData()
dl.reverse();
console.log("reverse")
dl.printData()
console.log("reverse 2")
dl.recRev(dl.head)
dl.printData()
console.log("back test")
dl.printBack()

// console.log(dl.head.data)
// console.log(dl.tail.data)

// console.log("reverse")
// dl.reverse()
// dl.printData()
// console.log("recursive reverse")
// dl.recRev(dl.head)
// dl.printData()

// let ll = new SinglyList()

// ll.insertFirst(100)
// ll.insertFirst(200)
// ll.insertFirst(300)
// ll.insertFirst(500)
// ll.insertAt(400, 1)


// console.log("Before")
// ll.printData()
// console.log("reverse")
// ll.reverse()
// ll.printData()
// console.log("recursive reverse")
// ll.recRev(ll.head)
// ll.printData()
// console.log(ll.getAtIndex(4))
