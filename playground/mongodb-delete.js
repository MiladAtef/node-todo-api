const { MongoClient, ObjectID } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
	if (err) {
		return console.log('unable to connect to mongoDB server');
	}
	console.log('Connected to mongoDB server');
	const db = client.db(dbName);

	//DeleteMany
	/*	db.collection('Todos')
		.deleteMany({ text: 'eat lunch' })
		.then(result => {
			console.log(result);
		});
    */

	//DeleteOne
	/* db.collection('Todos')
		.deleteOne({ text: 'eat lunch' })
		.then(result => {
			console.log(result);
		});
   */

	//findOneAndDelete
	db.collection('Todos')
		.findOneAndDelete({ completed: false })
		.then(result => {
			console.log(result);
		});

	client.close();
});
