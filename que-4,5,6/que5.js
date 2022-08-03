// Ques-5) Update the function below to  have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json())),
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };
import fetch from "node-fetch";

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const async_func_togetdata = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    })
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

async_func_togetdata();
