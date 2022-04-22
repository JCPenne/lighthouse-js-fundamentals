const whichSchool = function (age) {
  if (age > 0 && age < 13) {
    return "Elementary school";
  } else if (age >= 13 && age <= 18) {
    return "Secondary school";
  } else {
    return "Lighthouse Labs";
  }
};

console.log(whichSchool(21));