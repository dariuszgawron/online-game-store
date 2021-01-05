'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Gatunki = bookshelf.Model.extend({
    tableName: 'gatunki',
    idAttribute: 'id_gatunku'
});
module.exports = bookshelf.model('Gatunki',Gatunki);