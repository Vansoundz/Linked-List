const DoublyList = require('./doubly.js')


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
console.log("With index")
dl.printWithIndex()
console.log("Inherited get at index")
console.log(dl.getAtIndex(4))

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
