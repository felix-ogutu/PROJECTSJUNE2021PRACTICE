//the module for the file system and the path
//file system module allow us to work the file system in the system on the computer
//common use of the file module are
//read the file
//create the file
//update the file
//delete the file
//rename the file
const fs = require("fs"); //module of the path system
const path = require("path"); //module of the path

//create the folder

/*
fs.mkdir(path.join(__dirname,'/test'),{},err=>{
    if(err)throw err;
    console.log('Folder created....');
});

//create folder 2
fs.mkdir(path.join(__dirname,'/test2'),{},err=>{
    if(err)throw err;
    console.log('Folder created....');

});
// create the folder name my personal
fs.mkdir(path.join(__dirname,'/personal'),{},err=>{
    if(err) throw err;
    console.log('File named personal is created...')
})


//create and write  the file
fs.mkdir(path.join(__dirname,'/test','test.txt'),'Hello Felix omondi am practing the node js',err=>{
    if(err)throw err;
    console.log('File is written on...');
});
*/
//Create and the write the file

/*
fs.writeFile(path.join(__dirname,'/test','hello.txt'),"Hello Felix are you good",err=>{
    if(err)throw err;
    console.log('File is written to....');
});

//Create the js file called test.js

fs.writeFile(path.join(__dirname,'/test','test.js'),"print hello world",err=>{
    if(err)throw err;
    console.log('File .js is written to....');
});
*/

/*
//read the file
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
    if(err)throw err;
    console.log(data);
});
*/

//rename the file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File is renamed...");
  }
);
