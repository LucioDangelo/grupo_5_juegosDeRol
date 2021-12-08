// ************ Require's ************
const express = require('express');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


// ************ express() ************
const app = express();


// ************ Middlewares - (don't touch) ************
app.use(express.static('public'));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');


app.listen(3000, () => { console.log('Servidor corriendo en el puerto 3000');
});


// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

const productsRouter = require('./routes/productsRouter')
app.use ('/products', productsRouter);

const usersRouter = require('./routes/usersRouter')
app.use ('/users', usersRouter);