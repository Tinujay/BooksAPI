//DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors');


//CONFIGURATION FOR MONGODB
require('dotenv').config()

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//REQUIRE THE BOOK MODEL
const Book = require('./models/book')

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// INDEX
app.get('/', (req, res) => {
    res.send('Books!');
  });
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});
 


//Controllers
app.use('/books', require('./controllers/books.js'))



