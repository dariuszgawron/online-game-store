const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

app.use(cors());
app.use(express.json());

const usersRouter = require('./api/users.js');
const productsRouter = require('./api/products');
const ordersRouter = require('./api/orders.js');
const wishlistsRouter = require('./api/wishlists.js');
const genresRouter = require('./api/genres');
const producersRouter = require('./api/producers');
const publishersRouter = require('./api/publishers');

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/wishlists', wishlistsRouter);
app.use('/genres', genresRouter);
app.use('/producers', producersRouter);
app.use('/publishers', publishersRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});