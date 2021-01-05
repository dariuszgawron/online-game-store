'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Producenci = bookshelf.Model.extend({
    tableName: 'producenci',
    idAttribute: 'id_producenta'
});
module.exports = bookshelf.model('Producenci',Producenci);