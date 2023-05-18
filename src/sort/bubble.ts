export function bubbleSort(arr: number[]) {
  const len = arr.length
  let swapped

  do {
    swapped = false

    for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp

        swapped = true
      }
    }
  } while (swapped)

  return arr
}
