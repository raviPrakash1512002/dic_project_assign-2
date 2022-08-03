// Que-1  -->Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise(
    function (resolve, reject) { 
        setTimeout(() => resolve("Success"), 4000)
});

//Que-2  -->Run the above promise and make it console.log "success"
promise.then(function(result) {
        console.log(result);
});

//Que-3  -->Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

// Ans-->did not understand question properly