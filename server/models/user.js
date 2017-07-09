var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true
    }
});

// var newUser = new User({
//     email: "lrossy@gmail.com",
//     name: 'Luke'
// });
//
// newUser.save().then((doc)=>{
//     console.log('newUser', doc)
//
// }, (e) =>{
//     console.log('error newUser', e)
// });

module.exports = {User};