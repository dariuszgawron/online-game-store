'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

// let bookshelf = require('../config/db');


// const Gry = require('./gry');
// // require('./gry');

// var Grafiki = bookshelf.Model.extend({
//     tableName: 'grafiki',
//     idAttribute: 'id_grafiki',
//     gry() {
//         return this.belongsTo(Gry,"gry_id_gry","id_gry");
//     }
// });

// module.exports = Grafiki;
// module.exports = bookshelf.Model('Grafiki',Grafiki);


// const Gry = require('./gry');
// var Grafiki = bookshelf.Model.extend({
//     tableName: 'grafiki',
//     idAttribute: 'id_grafiki',
//     gry() {
//         return this.belongsTo(Gry,"gry_id_gry","id_gry");
//     }
// });
// module.exports = Grafiki;


const Gry = require("./gry");
var Grafiki = bookshelf.Model.extend({
    tableName: 'grafiki',
    idAttribute: 'id_grafiki',
    gry: function () {
        return this.belongsTo(Gry,'id_gry');
    }
});
module.exports = bookshelf.model('Grafiki', Grafiki);