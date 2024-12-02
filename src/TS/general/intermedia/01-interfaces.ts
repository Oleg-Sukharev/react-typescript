export interface User {
  readonly email: string;
  readonly login: string;
}

export interface User {
  isOnline?: boolean;
}

// now user contain 3 fields
const user: User = {
  email: "test@gmail.com",
  login: "Jhon",
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
