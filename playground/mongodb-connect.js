// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //just destructuring

// console.log(new ObjectID());

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('unable to connect to mongoDB server');
	}
	console.log('Connected to mongoDB server');
	const db = client.db(dbName);
	// db.collection('Todos').insertOne(
	// 	{ text: 'something to do', completed: false },
	// 	(err, result) => {
	// 		if (err) {
	// 			return console.log('enable to insert todo', err);
	// 		}
	// 		console.log(result.ops);
	// 	}
	// );
	// db.collection('Users').insertOne(
	// 	{ name: 'Milad Atef', age: 23, location: 'egypt' },
	// 	(err, result) => {
	// 		if (err) {
	// 			return console.log('enable to insert user', err);
	// 		}
	// 		console.log(result.ops);
	// 	}
	// );

	db.collection('new').insertMany(
		[
			{ name: 'Milad Atef', age: 23, location: 'egypt' },
			{ name: 'Milad Atef', age: 23, location: 'egypt' },
			{ name: 'Milad Atef', age: 23, location: 'egypt' }
		],
		(err, result) => {
			if (err) {
				return console.log('enable to insert user', err);
			}
			console.log(result.ops[0]._id.getTimestamp());
		}
	);

	client.close();
});
