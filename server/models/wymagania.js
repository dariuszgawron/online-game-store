'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

var Wymagania = bookshelf.Model.extend({
    tableName: 'wymagania',
    idAttribute: 'id_wymagania'
});
module.exports = bookshelf.model('Wymagania', Wymagania);