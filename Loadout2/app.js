const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

mongoose.connect(config.database);
// database connection log
mongoose.connection.on('connected', ()=>{ 
    console.log('connected to database ' +config.database);
});

mongoose.connection.on('error', (err) =>{
    console.log( 'Database error:' +err);
});

const app = express();

// port number

const users = require('./routes/users')

const port = 3000;


// Cross origin resource sharing middle ware
app.use(cors());

// Set static folder

app.use(express.static(path.join(__dirname, 'public')));

// Body Parser middleware   
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);

app.get('/', (req, res) => {
    res.send('INVALID ENDPOINT DUDE')
});

app.listen(port, () => {
    console.log("server started on port " +port)
})