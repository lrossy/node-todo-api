const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.2.32:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Todos').find().count().then( (count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });


    db.collection('Users').find({name: 'Luke'}).toArray().then( (users) => {
        console.log(`Users`);
        console.log(`Users`, JSON.stringify(users, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });
    // db.close();
});
