const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init Object
const MyEmitter = new MyEmitter();

// Event Listener
myEmitter.on("event", () => console.log("Event Fired!"));

// Init Event

MyEmitter.emit("event");
