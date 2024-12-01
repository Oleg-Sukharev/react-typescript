enum Grades {
  Junior = "junior",
  Middle = "middle",
  Senior = "senior",
}

interface Dev {
  level: Grades;
}
const dev: Dev = {
  level: Grades.Junior,
};

function upGrade(user: { level: Grades }) {
  if (user.level === Grades.Junior) {
    user.level = Grades.Middle;
  } else if (user.level === Grades.Middle) {
    user.level = Grades.Senior;
  }
}

upGrade(dev);
