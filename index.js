import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
	useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// this is for serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send(`Node and express server is running on ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`your server is running on port ${PORT}`);
});