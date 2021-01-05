'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Gry = require("./gry");
const Grafiki = bookshelf.Model.extend({
    tableName: 'grafiki',
    idAttribute: 'id_grafiki',
    gry: function () {
        return this.belongsTo(Gry,'id_gry');
    }
});
module.exports = bookshelf.model('Grafiki', Grafiki);