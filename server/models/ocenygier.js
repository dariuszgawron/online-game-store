'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const OcenyGier = bookshelf.Model.extend({
    tableName: 'oceny_gier'
});
module.exports = bookshelf.model('OcenyGier',OcenyGier);