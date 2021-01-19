const express = require('express');
const producersRouter = express.Router();

const Producenci = require('../models/producenci');

producersRouter.param('producerId', (req, res, next, producerId) => {
    Producenci.forge()
        .where({
            'id_producenta': producerId
        })
        .fetch()
        .then(function() {
            next();
        })
        .catch(function(err) {
            res.sendStatus(404);
        }) 
});

producersRouter.get('/:producerId', (req, res, next) => {
    Producenci.forge()
        .where({
            'id_producenta': req.params.producerId
        })
        .fetch()
        .then(function(producer) {
            res.json({ producer });
        });
});

producersRouter.get('', (req, res, next) => {
    const limit = req.query.limit || 50;
    // const offset = req.query.offset || 0;
    const page = req.query.page || 1;
    Producenci.forge()
        .query('orderBy','nazwa_producenta','asc')
        .fetchPage({
            pageSize: limit,
            page: page
        })
        .then(function(producers) {
            res.json({ producers: producers, rowCount: producers.pagination.rowCount });
        });
});

module.exports = producersRouter;
