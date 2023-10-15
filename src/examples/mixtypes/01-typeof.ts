function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
}

let str = "Hello World";
type X = typeof str;

type FN = typeof average;

const max: FN = (...numbers) => Math.max(...numbers);
max(1, 2, 3);

type ReturnFN = ReturnType<typeof average>;
// detect what function returns in our case it is Number
// as average function return number line: 4

export {};
