const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.2.32:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('596209f0e1db7c088c77933c')
        }, {
            $set: {name: 'Luke'},
            $inc: {age: 1}
        },
        {returnOriginal: false}
    ).then( (result) => {
        console.log('result', result);
    });
    // db.close();
});

