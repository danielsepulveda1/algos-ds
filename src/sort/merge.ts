function merge(left: number[], right: number[]): number[] {
  const sorted: number[] = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift() as number)
    } else {
      sorted.push(right.shift() as number)
    }
  }

  return [...sorted, ...left, ...right]
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length < 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}
