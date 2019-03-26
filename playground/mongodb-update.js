const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('unable to connect to mongoDB server');
	}
	console.log('Connected to mongoDB server');
	const db = client.db(dbName);

	//findOneAndUpdate
	db.collection('Todos')
		.findOneAndUpdate(
			{ _id: new ObjectID('5c99bc218e12a94490b1ad32') },
			{
				$set: {
					completed: true
				}
			},
			{ returnOriginal: false }
		)
		.then(result => {
			console.log(result);
		});

	// we are updating the document by increasing the age by one
	db.collection('Users')
		.findOneAndUpdate(
			{ _id: new ObjectID('5c999af756cbf702f825de88') },
			{
				$inc: {
					age: 1
				}
			},
			{ returnOriginal: false }
		)
		.then(result => {
			console.log(result);
		});

	client.close();
});
