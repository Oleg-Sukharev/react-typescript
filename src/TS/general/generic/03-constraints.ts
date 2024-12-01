const len = <T extends { length: number }>(arg: T): number => arg.length;
// extends - detecting restrictions here
// saying that T have to have  { length: number }

len("abc");
len(["abc"]);
len({ length: 12 });
// len(123)
// len(true)
const obj1 = { a: 1, length: 1 };
len(obj1);

export {};
