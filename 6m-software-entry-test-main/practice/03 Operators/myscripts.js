function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let x = 10;
let y = 5;
let X = 10;

document.getElementById("Q1").innerHTML =
  "<hr>" + "Q1" + "<br><br>" + "alert(10 * 5)" + "<br><br>" + 10 * 5 + "<hr>";
document.getElementById("Q2").innerHTML =
  "Q2" + "<br><br>" + "alert(10 / 2)" + "<br><br>" + 10 / 2 + "<hr>";
document.getElementById("Q3").innerHTML =
  "Q3" + "<br><br>" + "alert(15 % 9)" + "<br><br>" + (15 % 9) + "<hr>";
document.getElementById("Q4").innerHTML =
  "Q4" +
  "<br><br>" +
  "let x = 10;" +
  "<br>" +
  "let y = 5;" +
  "<br>" +
  "x += y;" +
  "<br><br>" +
  (X += y) +
  "<hr>";
document.getElementById("Q5").innerHTML =
  "Q5" +
  "<br><br>" +
  "let x = 10;" +
  "<br>" +
  "let y = 5;" +
  "<br>" +
  "x *= y;" +
  "<br><br>" +
  (x *= y) +
  "<hr>";
