var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
//
// var newTodo = new Todo({
//     text: "Lork",
//     completed: true,
//     completedAt: 123
// });
//
// newTodo.save().then((doc)=>{
//     console.log('doc', doc)
//
// }, (e) =>{
//     console.log('error', e)
// });


module.exports = {Todo};