import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routers from './routes/index.js';

const app = express();
dotenv.config();

const { PORT, URI } = process.env;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

Object.keys(routers).map(key => app.use([key], routers[key]))

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected mongoose!');
    app.listen(PORT, () => {
      console.log(`app listening at port ${PORT}`);
    });
  })
  .catch(err => {
    console.log('err', err);
  })


