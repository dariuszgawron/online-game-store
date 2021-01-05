'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Wydawcy = bookshelf.Model.extend({
    tableName: 'wydawcy',
    idAttribute: 'id_wydawcy'
});
module.exports = bookshelf.model('Wydawcy',Wydawcy);