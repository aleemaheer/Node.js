const url = require('url');
const { validate } = require('uuid');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (root domain)
console.log(myUrl.host);
// Hostname (does not get the port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);
// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));