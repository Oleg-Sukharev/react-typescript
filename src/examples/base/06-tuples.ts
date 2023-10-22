const pairs: [string, string][] = [
  ["key", "value"],
  ["key2", "value2"],
];

const data: [number, boolean, string] = [1, true, "lodash"];
type someTuple = [number, string, boolean, ...string[]];
// can use spread operator for keeping optional values , but it should be one kind of type

// csv
const doc: [string, string, number, Date][] = [];
doc.push(["John", "Doe", 12, new Date(1999, 9, 9)]);
