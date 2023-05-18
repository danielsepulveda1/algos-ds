export function factorialRecursive(n: number): number {
  if (n <= 1) {
    return 1
  }
  return n * factorialRecursive(n - 1)
}

export function factorialIterative(n: number): number {
  let res = 1

  for (let i = 2; i <= n; i++) {
    res = res * i
  }

  return res
}
