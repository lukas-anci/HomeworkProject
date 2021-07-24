require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// MiddleWare
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// connect to mongoose
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('connected to mongoose server');
  })
  .catch((err) => console.error(err.message));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
