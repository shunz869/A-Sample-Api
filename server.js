import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConfig from './config/database.config';
import router from './app/routes/lastest_item.routes';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(dbConfig.baseUrl, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});


app.use(router);


app.listen(3001, () => {
  console.log(`server running on port 3001`)
});