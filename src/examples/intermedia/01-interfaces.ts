export interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

export interface User {
  isOnline?: boolean;
}

// now user contain 4 fields
const user: User = {
  email: "das",
  password: "das",
  login: "das",
  isOnline: false,
};

// to add an entity globally
interface Window {
  isAuth?: boolean;
}

interface Person {
  firstName: string;
}

interface Employee extends User, Person {
  contractStart: Date;
}

interface Developer extends Employee {
  skills: string[];
}
