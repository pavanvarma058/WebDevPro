function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "google", url: "https://google.com" });
    }, 3000);
  });
}
/*
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User fetched data successfully");
    console.log("User Data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();
*/
// we can write it in both the ways
async function getUser() {
  console.log("Fetching user data...");
  const value = await fetchUserData();
  console.log(value);
}
getUser();
