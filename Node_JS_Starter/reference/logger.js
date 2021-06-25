const EventEmitter = require("events"); //the class
const url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //send an HTTP request
    console.log(message);

    //Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}
module.exports = Logger;
