function example1(x: number | string) {
  if (typeof x === "string") x.toLowerCase();
  if (typeof x === "number") x.toFixed();
}

function example2(strs: string | string[] | null) {
  // if (typeof strs === "object") {}
  // if (Array.isArray(strs)) {
  if (strs && typeof strs === "object") {
    strs.concat([]);
  } else if (typeof strs === "string") {
    strs.toLowerCase();
  }
}

function getMonth(date: Date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
}

export {};
