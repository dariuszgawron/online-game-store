'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Jezyki = bookshelf.Model.extend({
    tableName: 'jezyki',
    idAttribute: 'id_jezyka'
});
module.exports = bookshelf.model('Jezyki',Jezyki);