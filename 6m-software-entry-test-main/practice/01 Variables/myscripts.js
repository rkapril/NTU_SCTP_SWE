function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var carName = "Volvo";
var x = 50;
var X = 5;
var y = 10;
var z = X + y;
var firstName = "John",
  lastName = "Doe",
  age = 35;

document.getElementById("Q1").innerHTML =
  "<hr>" +
  "Q1" +
  "<br><br>" +
  'var carName = "Volvo";' +
  "<br><br>" +
  carName +
  "<hr>";
document.getElementById("Q2").innerHTML =
  "Q2" + "<br><br>" + "var x = 50;" + "<br><br>" + x + "<hr>";
document.getElementById("Q3").innerHTML =
  "Q3" +
  "<br><br>" +
  "var x = 5;" +
  "<br>" +
  "var y = 10;" +
  "<br>" +
  "x + y;" +
  "<br><br>" +
  (X + y) +
  "<hr>";
document.getElementById("Q4").innerHTML =
  "Q4" +
  "<br><br>" +
  "var x = 5;" +
  "<br>" +
  "var y = 10;" +
  "<br>" +
  "var z = x + y;" +
  "<br>" +
  "alert(z);" +
  "<br><br>" +
  z +
  "<hr>";
document.getElementById("Q5").innerHTML =
  "Q5" +
  "<br><br>" +
  'var firstName = "John",' +
  "<br>" +
  'lastName = "Doe",' +
  "<br>" +
  "age = 35;" +
  "<br><br>" +
  "Name: " +
  firstName +
  " " +
  lastName +
  "<br>" +
  "Age: " +
  age +
  "<hr>";
