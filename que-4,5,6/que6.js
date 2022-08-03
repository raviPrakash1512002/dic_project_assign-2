// Ques-6) Add a try catch block to the Ques-4) solution in order to 
// catch any errors. Now, use the given array containing an 
// invalid url, so you con.sole.log your error with 'oooooops'
import fetch from "node-fetch";
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];

  
const getdata = async function() {
    try {
      const [ user, post, album ] = await Promise.all(urls.map(async function(url) {
          const response = await fetch(url);
          return response.json();
      }));
      console.log('users', user);
      console.log('posta', post);
      console.log('albums', album);
    } catch (err) {
      console.log('ooooops', err);
    }
}
getdata();