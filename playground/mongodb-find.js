const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('unable to connect to mongoDB server');
	}
	console.log('Connected to mongoDB server');
	const db = client.db(dbName);
	// db.collection('Todos')
	// 	.find({ _id: new ObjectID('5c999a60e49c673a140ceb98') })
	// 	.toArray()
	// 	.then(
	// 		docs => {
	// 			console.log('Todos');
	// 			console.log(JSON.stringify(docs, undefined, 2));
	// 		},
	// 		err => {
	// 			console.log('unable to fetch todos', err);
	// 		}
	// 	);
	db.collection('Todos')
		.find()
		.count()
		.then(
			count => {
				console.log(`Todos count: ${count}`);
			},
			err => {
				console.log('unable to fetch todos', err);
			}
		);
	client.close();
});
