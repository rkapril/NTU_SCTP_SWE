function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

const fruits = ["Apple", "Banana", "Orange"];
for (x in fruits) {
  console.log(x);
}

document.getElementById("Q1").innerHTML =
  "<hr>" +
  "Q1" +
  "<br><br>" +
  "let i;" +
  "<br>" +
  "for (i = 0; i < 10; i++) {" +
  "<br>" +
  "console.log(i);" +
  "<br>" +
  "}" +
  "<br><br>" +
  i +
  "<hr>";
document.getElementById("Q2").innerHTML =
  "Q2" +
  "<br><br>" +
  'const fruits = ["Apple", "Banana", "Orange"];' +
  "<br>" +
  "for (x in fruits) {" +
  "<br>" +
  "console.log(x);" +
  "<br>" +
  "}" +
  "<br><br>" +
  x +
  "<hr>";
