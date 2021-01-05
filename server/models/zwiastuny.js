'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

var Zwiastuny = bookshelf.Model.extend({
    tableName: 'zwiastuny',
    idAttribute: 'id_zwiastuna'
});
module.exports = bookshelf.model('Zwiastuny', Zwiastuny);