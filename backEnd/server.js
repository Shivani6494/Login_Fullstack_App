const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const users = require('./users');

const API_PORT = 3001;
const app = express();

app.use(cors());
const router = express.Router();

const dbRoute ='mongodb://127.0.0.1:27017/testdb?retryWrites=true&w=majority'

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/register', function(req, res){
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
      });
});
router.post('/register-user', (req, res) => {
  console.log(req.body);
  // let person = new Student();

  // const { regemail , regusername , regpassword , regconfirmpassword } = req.body;

  // if ((!regemail && regemail !== 0) || !regusername || !regpassword || !regconfirmpassword) {
  //   return res.json({
  //     success: false,
  //     error: 'INVALID INPUTS',
  //   });
  // }
  // person.regemail = regemail;
  // person.regusername = regusername;
  // person.regpassword = regpassword;
  // person.regconfirmpassword = regconfirmpassword;
  // person.save((err) => {
  //   if (err) return res.json({ success: false, error: err });
  //   return res.json({ success: true });
  // });
});

app.listen(3000);