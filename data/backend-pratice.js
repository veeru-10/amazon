//url stands for uniform resource locater
const xhr = new XMLHttpRequest();


xhr.addEventListener('load', () => {
 console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send();//asynchronous code which is not wait for finish
//if we send a msg to backend is called request 
//and the backennd send a msg or http to user is called response.
//which is called request responce cycle.

//API appilication programming interface(how we react with something)


//types of backend data 
/* 
 1 text
 2 json
 3 html
 4. image

*/