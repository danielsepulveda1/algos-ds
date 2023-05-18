export class Node<T = any> {
  data: T
  next: Node | null

  constructor(data: T, next = null) {
    this.data = data
    this.next = next
  }
}

export class LinkedList<T = any> {
  head: Node<T> | null
  tail: Node<T> | null
  size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  insert(data: T) {
    const node = new Node(data)
    let current: Node<T>

    if (!this.head) {
      this.head = node
    } else {
      current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.size++
  }

  first(): T | undefined {
    return this.head ? this.head.data : undefined
  }

  last(): T | undefined {
    return this.tail ? this.tail.data : undefined
  }

  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }
}
