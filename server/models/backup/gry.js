'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

// let bookshelf = require('../config/db');

// const Platformy = require('./platformy');
// const Grafiki = require('./grafiki');
// // require('./grafiki');

// // npm install --save express body-parser knex bookshelf sqlite3

// // const bookshelf = require('../config/db');

// // const Product = bookshelf.model('Product',{
// //     tableName: 'gry'
// // });

// // const Gry = bookshelf.Model.extend({
// //     tableName: 'gry',
// //     platformy_gier() {
// //       return this.belongshasMany(Platformy,'platformy_gier','id_gry','id_platformy');
// //     }
// //   })

// var Gry = bookshelf.Model.extend({
//   tableName: 'gry',
//   idAttribute: 'id_gry',
//   grafiki() {
//     return this.hasMany(Grafiki,"id_gry","gry_id_gry");
//   }
// })

// // module.exports = Product;
// // module.exports = bookshelf.model('Gry',Gry);
// module.exports = Gry;

// module.exports = bookshelf.Model('Gry',Gry);



// const Grafiki = require('./grafiki');
// var Gry = bookshelf.Model.extend({
//   tableName: 'gry',
//   idAttribute: 'id_gry',
//   grafiki() {
//     return this.hasMany(Grafiki,"id_gry","gry_id_gry");
//   }
// });
// module.exports = Gry;


const Grafiki = require("./grafiki");
var Gry = bookshelf.Model.extend({
    tableName: 'gry',
    idAttribute: 'id_gry',
    grafiki: function () {
        return this.hasMany(Grafiki,'id_gry');
    }
});
module.exports = bookshelf.model('Gry', Gry);