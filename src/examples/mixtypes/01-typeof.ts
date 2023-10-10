function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);

  return sum / nums.length;
}

let str = "Hello World";
type x = typeof str;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers);
max(1, 2, 3);

type returnFn = ReturnType<typeof average>;
