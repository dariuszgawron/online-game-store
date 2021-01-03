// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: '127.0.0.1',
//         user: 'root',
//         password: '',
//         database: 'sklep',
//         charset: 'utf8'
//     }
// });

var knex = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'sklep',
        charset: 'utf8'
    }
};

// var knex2 = require('knex')(knex);
// var bookshelf = require('bookshelf')(knex2);

// const knex = {
//     client: 'sqlite3',
//     connection: {
//         filename: 'sklep.db'
//     },
//     useNullAsDefault: true
// };

module.exports = knex;
// module.exports = bookshelf;