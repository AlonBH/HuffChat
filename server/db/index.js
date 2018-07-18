var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/pAtrol';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export default db;