const Semplice = require('semplice');
const routes = require('./routes/routes');
const mongoose = require('mongoose');


const server = new Semplice();


routes.map(e => server.addRoute(e));


mongoose.connect('mongodb://pruebas:pruebas123@ds211265.mlab.com:11265/pruebas', err => {
    if (err) {return console.log(err);}
    console.log('db success');
});


server.listen(3000, (err) => {
    if (err) {console.log('error', err)}
    console.log('running server');
});