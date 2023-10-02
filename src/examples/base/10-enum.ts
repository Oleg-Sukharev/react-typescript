enum Grades {
  Junior = "junior",
  Middle = "middle",
  Senior = "senior",
}

interface Dev {
  login: string;
  skills: string[];
  level: Grades;
}
const dev: Dev = {
  level: Grades.Junior,
  login: "John",
  skills: ["HTML", "CSS", "JS"],
};

function upGrade(user: { level: Grades }) {
  if (user.level === Grades.Junior) {
    user.level = Grades.Middle;
  } else if (user.level === Grades.Middle) {
    user.level = Grades.Senior;
  }
}

upGrade(dev);
