/*
1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"].
    and stops the loop when it finds "chai".
    Store all teas before "chai" in a new array named 'selectedTrees'
*/

let teaName = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTrees = [];

for (let i = 0; i < teaName.length; i++) {
  if (teaName[i] === "chai") {
    break;
  }
  selectedTrees.push(teaName[i]);
}
console.log(selectedTrees);

/*
2. Write a 'for' loop that loops through the array ["london", "new york", "paris", "berlin"] and skips "paris".
    Store the other cities in a new array named 'visitedCities'.
*/

let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
console.log(visitedCities);

/*
3. Use a 'for-of' loop to iterate through the array [1, 2, 3, 4, 5] and stop the number '4' is found.
    store the numbers before '4' in an array named 'smallNumbers'
*/

let num = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const n of num) {
  if (n == 4) {
    break;
  }
  smallNumbers.push(n);
}
console.log(smallNumbers);

/*
4. Use a 'for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip the 'herbal tea'.
    store the other teas in an array named 'preferredTeas'
*/
let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teas) {
  if (tea == "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
console.log(preferredTeas);

/*
5. Use a 'for-in' loop to loop through an object containing city populations .
    stop the loop when the population of "berlin" is found and store all previous cities populations
    in a new object called 'cityPopulations'
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityPopulations = {};

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}
console.log(cityPopulations);

/*
6. Use a 'for-in' loop to loop through an object containing city populations.
    skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.
*/

let worldCities = {
  sydney: 5000000,
  tokyo: 9000000,
  berlin: 3500000,
  paris: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);

/*
7. Write a 'forEach' loop that iterates through the array ['earl grey', 'green tea', 'chai', 'oolong tea'].
 Stop the loop when 'chai' is found, and store all previous tea types in an array named 'availableTeas'.
*/
let labelTea = ["earl grey", "green tea", "chai", "oolong tea"];

let availableTeas = [];

labelTea.forEach((tea) => {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

/*
8. Write a 'forEach' loop that iterates through the array ["berlin", "tokyo", "sydney", "paris"].
    skip "sydney" and store the other cities in a new array named 'traveledCities'.
*/
let myTravelCities = ["berlin", "tokyo", "sydney", "paris"];

let traveledCities = [];

myTravelCities.forEach((city) => {
  if (city === "sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

/*
9. Write a 'for' loop that iterates through the array [2, 5, 7, 9].
    Skip the value '7' and mulitply the rest by 2. Store the result in a new array named 'doubledNumbers'.
*/
let arrNum = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < arrNum.length; i++) {
  if (arrNum[i] == 7) {
    continue;
  }
  doubledNumbers.push(arrNum[i] * 2);
}
console.log(doubledNumbers);

/*
10. Use a 'for-of' loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
    and stop when the length of the current tea name is greater than 10
    Store the teas iterated over in an array named 'shortTeas'.
*/

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
