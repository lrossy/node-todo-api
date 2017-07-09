const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.2.32:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    //deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then( (result) => {
    //     console.log('result', result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Walk the dog!'}).then( (result) => {
    //     console.log('result', result);
    // });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Walk the dog!'}).then( (result) => {
        console.log('result', result);
    });

    // db.close();
});
