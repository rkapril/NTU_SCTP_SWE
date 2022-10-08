function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const x = {
  firstName: "John",
  lastName: "Doe",
};

document.getElementById("Q1").innerHTML =
  "<hr>" + "Q1" + "<br><br>" + "typeof 16" + "<br><br>" + typeof 16 + "<hr>";
document.getElementById("Q2").innerHTML =
  "Q2" +
  "<br><br>" +
  'typeof "Johnson"' +
  "<br><br>" +
  typeof "Johnson" +
  "<hr>";
document.getElementById("Q3").innerHTML =
  "Q3" +
  "<br><br>" +
  "const x = {" +
  "<br>" +
  'firstName: "John",' +
  "<br>" +
  'lastName: "Doe",' +
  "<br>" +
  "};" +
  "<br><br>" +
  typeof x +
  "<hr>";
