'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Gry = require('./gry');

const Platformy = bookshelf.Model.extend({
    tableName: 'platformy',
    gry() {
        return this.belongsToMany(Gry,'platformy_gier','id_platformy','id_gry');
    }
});

// module.exports = bookshelf.model('Platformy',Platformy);
module.exports = Platformy;