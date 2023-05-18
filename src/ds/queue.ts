export class Queue<T = number> {
  private _items: T[]
  private _size: number
  private _offset: number

  constructor() {
    this._items = []
    this._size = 0
    this._offset = 0
  }

  enqueue(value: T): number {
    this._items.push(value)
    return ++this._size
  }

  dequeue(): T | undefined {
    if (this._size === 0) {
      return
    }

    const item = this._items[this._offset]

    if (++this._offset * 2 >= this._items.length) {
      this._items = this._items.slice(this._offset)
      this._offset = 0
    }

    this._size--
    return item
  }

  peek(): T | undefined {
    if (this._size === 0) {
      return
    }

    return this._items[this._offset]
  }
}
