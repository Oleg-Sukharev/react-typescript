const obj1 = {
  x: "1",
  y: "2",
  z: 4,
};

function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}

printPoint(obj1);
// 'a' and 'y' are required,
// but the object can have any other fields.

function printName(user: { firstName: string; lastName?: string }): void {
  console.log(user.firstName.toUpperCase());

  // need to check out if user.lastName exists
  if (user.lastName) {
    console.log(user.lastName.toUpperCase());
  }
}

printName({ firstName: "John" });
printName({ firstName: "John", lastName: "Doe" });
