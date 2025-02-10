/*
1. Declare an array named 'teaflavors' that contains the strings 'green tea', 'black tea', and 'oolong tea'.
    Access the first element of the array and store it in a variable namef 'firsttea'.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavors[0];

/*
2. Declare an array named 'cities' containing 'london', 'tokyo', 'paris' and 'new york'.
    Access the third element in the array and store it in a variable named 'favoritecity'.
*/

let cities = ["london", "tokyo", "paris", "new york"];
const favoriteCity = cities[2];

/*
3. You have an array named 'teaTypes' containing 'herbal tea', 'white tea', and 'masala chai'.
    change  the second element of the array to 'jasmine tea'.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";
console.log(teaTypes);

/*
4. Declare an array named 'cityVisited' containing 'Mumbai' and 'Sydney'.
    Add 'Berlin' to the array using the 'push' method.
*/

let cityVisited = ["Mumbai", "Sydney"];

cityVisited.push("Berlin");
console.log(cityVisited);

/*
5. You have an arrya named 'teaOrders' with 'chai', 'iced tea', 'matcha' and 'earl grey'.
    Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];

const lastOrder = teaOrders.pop();
console.log(teaOrders);

/* 
6. You have an array named 'popularTrees' containing 'green tea',  'oolong tea' and 'chai' .
    create a soft copy of this array named 'softCoptTeas'.
*/

let popularTrees = ["green tea", "oolong tea", "chai"];
let softCoptTeas = popularTrees;
popularTrees.pop();
console.log(softCoptTeas);
console.log(popularTrees);

/*
7. You have an array named 'topCities' containing "Berlin", "Singapore", and "New York".
    create a hard copy of this array named 'hardCopyCities'.
*/

let topCities = ["Berline", "Singapore", "New York"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

/*
8. You have two arrays: 'europeanCities' containing 'Paris' and 'Rome', and 'asianCities' containing 'Tokyo' and 'Bangkok'.
    Merge these two arrays into a new array called 'worldCities'.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

/*
9. You have an array named 'teaMenu' containing 'masala chai', 'oolong tea', 'green tea' and 'earl grey'.
    find the length of the array and store it in a variable named 'menuLength'.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

/*
10. You have an array named 'cityBucketList' containing 'kyoto' , 'london', 'cape town' and 'vancouver'.
    check if 'london' is in the array and store the result in a variable named 'isLondonInList'.
*/

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];
let isLondonInList = cityBucketList.includes("london");
console.log(isLondonInList);
