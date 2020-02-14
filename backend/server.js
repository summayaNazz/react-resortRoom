const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv')
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercise');
const usersRouter = require('./routes/users');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology:true }
// );
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log("MongoDB databases connection established successfully");
// })

mongoose.connect(
  process.env.ATLAS_URI,
{useNewUrlParser:true,},()=> 
console.log('connected to db....'))


// const exercisesRouter = require('./routes/exercise');
// const usersRouter = require('./routes/users');

app.use(express.json());
app.use('/exercise', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is runnings on port: ${port}`);
});