/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const weightInPounds = document.createElement("h2");
const weightInGrams = document.createElement("h2");
const weightInOunce = document.createElement("h2");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const weightInput = document.querySelector("#search").value;
  weightInPounds.textContent = `Svarai: ${weightInput * 2.2046} lb`;
  weightInGrams.textContent = `Gramai: ${weightInput / 0.001} g`;
  weightInOunce.textContent = `Uncijos: ${weightInput * 35.274} oz`;
  document.querySelector("#output").append(weightInPounds, weightInGrams, weightInOunce);
});
