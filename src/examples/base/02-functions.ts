const sum = (a: number, b: number): number => a + b;

function log(name: string,): void {
  // return nothing "undefined"
  console.log('Hello', name);
}

function crash(): never {
  // will never finish 
  throw new Error('crash')
}

function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0)

  return sum / nums.length;
}

