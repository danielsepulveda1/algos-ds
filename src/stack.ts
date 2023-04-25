export class Stack<T = number> {
  private _items: T[]
  private _size: number

  constructor() {
    this._items = []
    this._size = 0
  }

  push(value: T): number {
    this._items.push(value)
    return ++this._size
  }

  pop(): T | undefined {
    if (this._size === 0) {
      return
    }

    this._size--
    return this._items.pop()
  }

  peek(): T | undefined {
    return this._items[this._size - 1]
  }
}
