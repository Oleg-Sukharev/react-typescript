var Grades;
(function (Grades) {
  Grades["Junior"] = "junior";
  Grades["Middle"] = "middle";
  Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
var dev = {
  level: Grades.Junior,
  login: 'John',
  skills: ['HTML', 'CSS', 'JS'],
};
function upGrade(user) {
  if (user.level === Grades.Junior) {
    user.level = Grades.Middle;
  }
  else if (user.level === Grades.Middle) {
    user.level = Grades.Senior;
  }
}
upGrade(dev);
// level: 'middle'

