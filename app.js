const express = require('express');
const bodyParser = require('body-Parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let itemArray = [];

app.get('/', function(req, res) {
  res.render('index', {item: itemArray});
});

app.post('/', function(req, res) {
  let todoItem = req.body.todo;
  itemArray.push(todoItem);
  res.redirect('/');
})


app.listen(3000, function() {
  console.log('Server started on port 3000');
});