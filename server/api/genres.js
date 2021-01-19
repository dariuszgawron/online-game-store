const express = require('express');
const genresRouter = express.Router();

const Gatunki = require('../models/gatunki');

genresRouter.param('genreId', (req, res, next, genreId) => {
    Gatunki.forge()
        .where({
            'id_gatunku': genreId
        })
        .fetch()
        .then(function() {
            next();
        })
        .catch(function(err) {
            res.sendStatus(404);
        }) 
});

genresRouter.get('/:genreId', (req, res, next) => {
    Gatunki.forge()
        .where({
            'id_gatunku': req.params.genreId
        })
        .fetch()
        .then(function(genre) {
            res.json({ genre });
        });
});

genresRouter.get('', (req, res, next) => {
    const limit = req.query.limit || 50;
    // const offset = req.query.offset || 0;
    const page = req.query.page || 1;
    Gatunki.forge()
        .query('orderBy','nazwa_gatunku','asc')
        .fetchPage({
            pageSize: limit,
            page: page
        })
        .then(function(genres) {
            res.json({ genres: genres, rowCount: genres.pagination.rowCount });
        });
});

module.exports = genresRouter;
