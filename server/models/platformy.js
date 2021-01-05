'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Platformy = bookshelf.Model.extend({
    tableName: 'platformy',
    idAttribute: 'id_platformy'
});
module.exports = bookshelf.model('Platformy',Platformy);