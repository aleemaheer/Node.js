const EventEmitter = require('events');

// Create class
const MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event fired!'));

// Init Event
myEmitter.emit('event');