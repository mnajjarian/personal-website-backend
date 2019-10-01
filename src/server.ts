import * as express from 'express';
import { config } from 'dotenv';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import router from './routes/index';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  config();
}

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database ', process.env.MONGODB_URI);
    return null;
  }).catch((err: Error) => {
    console.log(err);
    return null;
  });

app.use(morgan('dev'));
app.use('/', router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
