const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.render('home');
})

app.listen(PORT, () => {
    console.log(`BrainJet is up and running on port ${PORT}`);
})