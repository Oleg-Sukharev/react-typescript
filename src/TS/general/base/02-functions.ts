const sum = (a: number, b: number): number => a + b;

const log = (name: string): void => console.log("Hello", name);
// return nothing "undefined"

const crash = (): never => {
  throw new Error("crash");
};
// will never finish

export const average = (...numbers: number[]) => {
  return numbers.reduce((current, total) => current + total, 0) / numbers.length;
};
