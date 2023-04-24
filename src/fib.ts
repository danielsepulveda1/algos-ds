export function recursiveFib(n: number): number {
  if (n <= 1) return n

  return recursiveFib(n - 1) + recursiveFib(n - 2)
}

export function dpFib(n: number): number {
  const map = new Map<number, number>()

  const dp = (x: number): number => {
    if (x <= 1) {
      return x
    }

    if (!map.has(x)) {
      map.set(x, dp(x - 1) + dp(x - 2))
    }

    return map.get(x) as number
  }

  return dp(n)
}

export function bottomUpFib(n: number): number {
  const sol = [0, 1]

  let i = 2
  while (i <= n) {
    sol[i] = sol[i - 1] + sol[i - 2]
    i++
  }

  return sol[n]
}
