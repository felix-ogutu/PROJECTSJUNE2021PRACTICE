const EventEmitter = require("events");
const emitter = new EventEmitter();

//Create class
//Register a listener
emitter.on("messageLogged", function () {
  console.log("Listener called");
});

//Raise an event
emitter.emit("messageLogged");
