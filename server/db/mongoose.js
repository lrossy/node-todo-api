var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://192.168.2.32:27017/TodoApp', {
    useMongoClient: true
});

module.exports = {mongoose};