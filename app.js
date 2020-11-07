const express = require('express');
const bodyParser = require('body-Parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.send('it works');
})





app.listen(3000, function() {
  console.log('Server started on port 3000');
});