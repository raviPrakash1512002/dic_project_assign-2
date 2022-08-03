// Ques-4) Convert the below promise into async await
// fetch("https://jsonplaceholder.typicode.com/users/").
// then((response) => response.json())
// .then(console.log);

import fetch from "node-fetch";
async function fetchUserdata() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await response.json();
  return users;
}

fetchUserdata()
  .then(users => console.log(users)); 
