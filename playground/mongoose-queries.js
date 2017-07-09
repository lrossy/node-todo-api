const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {ObjectID} = require('mongodb');

if(!ObjectID.isValid(id)){

}
var id = "5962291470729d14688a9042";
//
// Todo.find({
//     "_id": id
// }).then( (todos)=>{
//     console.log('todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then( (todo)=>{
//     console.log('todo', todo);
// });


Todo.findById(id).then( (todo)=>{
    if(!todo){
        return console.log('id not found')
    }
    console.log('todofindById', todo);
}).catch((e) => console.log(e));