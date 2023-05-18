declare global {
  interface Function {
    myBind(ctx: any, args: any): any
  }
}

Function.prototype.myBind = function (
  ctx: Record<string, unknown>,
  ...args: unknown[]
) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const func = this

  return function (...moreArgs: unknown[]) {
    return func.apply(ctx, [...args, ...moreArgs])
  }
}
