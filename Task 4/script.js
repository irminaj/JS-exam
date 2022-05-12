/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const fetchCar = () => {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((car) => {
        const brand = document.createElement("h3");
        brand.innerText = car.brand;
        brand.classList.add("brand");

        const models = document.createElement("h4");
        models.innerText = car.models;

        const carCard = document.createElement("div");
        carCard.append(brand, models);
        carCard.classList.add("car-card");

        document.querySelector("#output").append(carCard);
      });
    });
};

window.addEventListener("load", () => fetchCar());

//Reikia sutvarkyti stiliu
