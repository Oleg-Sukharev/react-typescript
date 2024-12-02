// Why the Order Matters
// In TypeScript, generic type inference is positional. When you pass arguments to a function:

// TypeScript first resolves types from earlier parameters.
// Later parameters depend on the resolved types of the earlier ones.

// obj: T,key: U not working

export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}

const obj1 = { a: 1, b: 2, c: 3 };
prop("a", obj1);
prop(0, [1, 2, 3]);
prop(0, "str");
prop("toFixed", 0);
