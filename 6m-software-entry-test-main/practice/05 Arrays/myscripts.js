function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const cars = ["Saab", "Volvo", "BMW"];
let x = cars[1];

const Cars = ["Volvo", "Jeep", "Mercedes"];
Cars[0] = "Ford";

document.getElementById("Q1").innerHTML =
  "<hr>" +
  "Q1" +
  "<br><br>" +
  'const cars = ["Saab", "Volvo", "BMW"];' +
  "<br>" +
  "let x = cars[1];" +
  "<br><br>" +
  x +
  "<hr>";
document.getElementById("Q2").innerHTML =
  "Q2" +
  "<br><br>" +
  'const cars = ["Volvo", "Jeep", "Mercedes"];' +
  "<br>" +
  'cars[0] = "Ford"' +
  "<br><br>" +
  '["' +
  Cars.join('", "') +
  '"]' +
  "<hr>";
document.getElementById("Q3").innerHTML =
  "Q3" +
  "<br><br>" +
  'const cars = ["Volvo", "Jeep", "Mercedes"];' +
  "<br>" +
  "alert(cars.length)" +
  "<br><br>" +
  Cars.length +
  "<hr>";
