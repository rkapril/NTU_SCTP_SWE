function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const person = {
  firstName: "John",
  lastName: "Doe",
  country: "Norway",
};

document.getElementById("Q1").innerHTML =
  "<hr>" +
  "Q1" +
  "<br><br>" +
  "const person = {" +
  "<br>" +
  'firstName: "John",' +
  "<br>" +
  'lastName: "Doe",' +
  "<br>" +
  "}" +
  "<br><br>" +
  person.firstName +
  "<hr>";
document.getElementById("Q2").innerHTML =
  "Q2" +
  "<br><br>" +
  "const person = {" +
  "<br>" +
  'firstName: "John",' +
  "<br>" +
  'lastName: "Doe",' +
  "<br>" +
  'country: "Norway",' +
  "<br>" +
  "}" +
  "<br><br>" +
  JSON.stringify(person, null, 4) +
  "<hr>";
