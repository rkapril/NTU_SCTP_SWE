function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.getElementById("Q1").innerHTML =
  "<hr>" +
  "Q1" +
  "<br><br>" +
  "if (x > y){" +
  "<br>" +
  'alert("Hello World");' +
  "<br>" +
  "}" +
  "<br>" +
  "<hr>";
document.getElementById("Q2").innerHTML =
  "Q2" +
  "<br><br>" +
  "if (x > y){" +
  "<br>" +
  'alert("Hello World");' +
  "<br>" +
  "} else {" +
  "<br>" +
  'alert("Goodbye");' +
  "<br>" +
  "}" +
  "<hr>";
