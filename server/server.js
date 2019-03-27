const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
	useNewUrlParser: true
});

const Todo = mongoose.model('Todo', {
	text: {
		type: String
	},

	completed: {
		type: Boolean
	},

	createdAt: {
		type: Number
	}
});

// const newTodo = new Todo({
// 	text: 'Cook food'
// });
const newTodo = new Todo({
	text: 'drop trash',
	completed: false,
	createdAt: 21545788871
});

newTodo.save().then(
	docs => {
		console.log('the new todo  ', JSON.stringify(docs, undefined, 2));
	},
	e => {
		console.log('unable to make todo ', e);
	}
);
