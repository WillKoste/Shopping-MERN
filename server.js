const path = require('path');
const express = require('express');
const dotev = require('dotenv');
dotev.config({path: './config/config.env'});
const helmet = require('helmet');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use(helmet());

app.use('/api/items', require('./routes/items'));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5001;
const mode = process.env.NODE_ENV || 'error - does not compute'

app.listen(port, () => {
  console.log(`Express server running on port ${port}, in ${mode} mode`.cyan.underline.bold);
});