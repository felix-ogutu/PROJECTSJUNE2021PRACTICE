const path = require("path");

//base file name
console.log(__filename);

// Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//create the path object
console.log(path.parse(__filename));
