export function quickSort(arr: number[]): number[] {
  if (arr.length < 1) {
    return arr
  }

  const pIdx = Math.floor((0 + arr.length - 1) / 2)
  const p = arr[pIdx]
  const leftArr = []
  const rightArr = []

  let i = 0
  while (i < arr.length) {
    if (i !== pIdx) {
      if (arr[i] < p) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }
    }

    i++
  }

  return [...quickSort(leftArr), p, ...quickSort(rightArr)]
}
