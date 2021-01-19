const express = require('express');
const publishersRouter = express.Router();

const Wydawcy = require('../models/wydawcy');

publishersRouter.param('publisherId', (req, res, next, publisherId) => {
    Wydawcy.forge()
        .where({
            'id_wydawcy': publisherId
        })
        .fetch()
        .then(function() {
            next();
        })
        .catch(function(err) {
            res.sendStatus(404);
        }) 
});

publishersRouter.get('/:publisherId', (req, res, next) => {
    Wydawcy.forge()
        .where({
            'id_wydawcy': req.params.publisherId
        })
        .fetch()
        .then(function(publisher) {
            res.json({ publisher });
        });
});

publishersRouter.get('', (req, res, next) => {
    const limit = req.query.limit || 50;
    // const offset = req.query.offset || 0;
    const page = req.query.page || 1;
    Wydawcy.forge()
        .query('orderBy','nazwa_wydawcy','asc')
        .fetchPage({
            pageSize: limit,
            page: page
        })
        .then(function(publishers) {
            res.json({ publishers: publishers, rowCount: publishers.pagination.rowCount });
        });
});

module.exports = publishersRouter;
