export function curry(fn: (...args: unknown[]) => unknown) {
  const ln = fn.length

  return function curried(...args: unknown[]) {
    if (args.length >= ln) {
      return fn.apply(this, args)
    } else {
      return function (...moreArgs: unknown[]) {
        return curried.apply(this, [...args, ...moreArgs])
      }
    }
  }
}
