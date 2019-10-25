import * as express from 'express';
import { config } from 'dotenv';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as cors from 'cors';
import router from './routes/index';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  config();
}

mongoose
  .connect(process.env.MONGODB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database ', process.env.MONGODB_URI);
    return null;
  }).catch((err: Error) => {
    console.log(err);
    return null;
  });
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session())
require('./passportConfig');

app.use('/', router);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
