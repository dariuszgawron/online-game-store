'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Game_Platform = bookshelf.Model.extend({
    tableName: 'platformy_gier',
    game() {
        return this.belongsTo('game');
    }
});

module.exports = Game_Platform;