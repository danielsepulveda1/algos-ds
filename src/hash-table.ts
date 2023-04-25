export class HashTable {
  private _storage: [key: string, value: any][][]
  private _size: number

  constructor(size: number) {
    this._size = size
    this._storage = []
  }

  private _hashFunc(str: string, n: number) {
    let sum = 0

    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i) * 3
    }

    return sum % n
  }

  insert(key: string, value: any) {
    const index = this._hashFunc(key, this._size)

    if (!this._storage[index]) {
      this._storage[index] = []
    }

    this._storage[index].push([key, value])
  }

  remove(key: string) {
    const index = this._hashFunc(key, this._size)

    const arr = this._storage[index]

    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        const pair = arr[i]
        if (pair[0] === key) {
          delete arr[i]
          return
        }
      }
    }
  }

  get(key: string) {
    const index = this._hashFunc(key, this._size)

    const arr = this._storage[index]

    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        const pair = arr[i]
        if (pair[0] === key) {
          return pair[1]
        }
      }
    }
  }
}
