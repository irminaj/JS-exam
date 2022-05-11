/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.sum = function () {
    return this.a + this.b;
  };
  this.substract = function () {
    return this.a - this.b;
  };
  this.multiply = function () {
    return this.a * this.b;
  };
  this.divide = function () {
    return this.a / this.b;
  };
}

const newNumbers = new Calculator(10, 5);
console.log(newNumbers.divide());
