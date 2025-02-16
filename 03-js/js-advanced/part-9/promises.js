function fetchData() {
  // let p = new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
  //   return p;
}
/*
function main() {
  fetchData().then(function (value) {
    console.log(value);
  });
}
main();
*/

fetchData()
  .then((data) => {
    console.log(data);
    return "Pavan";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
