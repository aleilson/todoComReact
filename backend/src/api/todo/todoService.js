const Todo = require('./todo')

Todo.methods(['get', 'put', 'post', 'delete'])
Todo.updateOptions({new: true, runValidatiors: true})

module.exports = Todo