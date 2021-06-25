//URL module is used to split the web address into the readable parts
const url = require("url");
const address = "http://localhost:8080/default.htm?year=2017&month=february";
const q = url.parse(address, true);
//to return the localhost
console.log(q.host);

//to return the hostname
console.log(q.hostname); //this one does not return the port

//to return the pathname
console.log(q.pathname);
//serialized query
console.log(q.search);

//Params object
console.log(q.searchParams);
