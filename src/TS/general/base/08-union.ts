type Status = "ok" | "loading" | "error";

const staticX: Status = "loading";

const arr: (number | string)[] = [];

function printId(id: number | string): void {
  // narrowing types
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcome(person: [string, string] | string): void {
  if (Array.isArray(person)) {
    console.log("Hello", person.join(" "));
  } else {
    console.log("Hello", person);
  }
}
