const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.2.32:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //    text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //
    // });

    // db.collection('Users').insertOne({
    //     name: 'Luke',
    //     age: 55,
    //     location: {
    //         city: 'Montreal'
    //     }
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //
    // });
    db.close();
});