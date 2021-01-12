const express = require('express');
const productsRouter = express.Router();

const sqlite = require('sqlite3');
const db = new sqlite.Database('./sklep.db');

const Gry = require('../models/gry');
const Jezyki = require('../models/jezyki');

productsRouter.param('productId', (req, res, next, productId) => {
    Gry.forge()
        .where({
            'id_gry': productId
        })
        .fetch()
        .then(function() {
            next();
        })
        .catch(function(err) {
            res.sendStatus(404);
        }) 
});

productsRouter.get('/count', (req, res, next) => {
    Gry.forge()
        .query()
        .count('* as totalNumber')
        .then(function(products) {
            res.json({ products });
        });
});

productsRouter.get('/:productId', (req, res, next) => {
    Gry.forge()
        .where({
            'id_gry': req.params.productId
        })
        .fetch({
            withRelated: [
                'grafiki',
                'platformy',
                'gatunki',
                'producenci',
                'wydawcy',
                'wymagania',
                'zwiastuny',
                'jezyki',
                'ocenygier'
            ]
        })
        .then(function(product) {
            res.json({ product });
        });
});

productsRouter.get('', (req, res, next) => {
    const limit = req.query.limit || 15;
    // const offset = req.query.offset || 0;
    const page = req.query.page || 1;
    // const offset = (page - 1) * 20;
    const genre = (req.query.genre) ? req.query.genre.split(',').map(num => parseInt(num)) : '';
    const producer = (req.query.producer) ? req.query.producer.split(',').map(num => parseInt(num)) : '';
    const publisher = (req.query.publisher) ? req.query.publisher.split(',').map(num => parseInt(num)) : '';
    const platform = (req.query.platform) ? req.query.platform.split(',').map(num => parseInt(num)) : '';
    const category = (req.query.category) ? req.query.category : '';
    const search = (req.query.search) ? req.query.search : '';
    const order = (req.query.order) ? req.query.order.split('-') : '';
    Gry.forge()
        .query(qb => {
            qb.innerJoin('producenci_gier', 'producenci_gier.id_gry', 'gry.id_gry');
            qb.innerJoin('wydawcy_gier', 'wydawcy_gier.id_gry', 'gry.id_gry');
            qb.innerJoin('gatunki_gier', 'gatunki_gier.id_gry', 'gry.id_gry');
            qb.innerJoin('platformy_gier', 'platformy_gier.id_gry', 'gry.id_gry');

            // Selekcja rekordów
            if(producer)
                qb.where('producenci_gier.id_producenta', 'in', producer);
            if(genre)
                qb.where('gatunki_gier.id_gatunku', 'in', genre);
            if(publisher)
                qb.where('wydawcy_gier.id_wydawcy', 'in', publisher);
            if(platform)
                qb.where('platformy_gier.id_platformy', 'in', platform);
            if(search)
                qb.whereRaw(`tytul LIKE '%${search}%'`);
            
            // if(category === 'dodatki') {

            // } else if (category === 'nowosci') {

            // } else if (category === 'preordery') {

            // } else if (category === 'promocje') {

            // }

            // Kolejność rekordów
            if(order[0] === 'tytul') {
                qb.orderByRaw(`gry.tytul ${order[1]}`);
            } else if(order[0] === 'data') {
                qb.orderByRaw(`gry.data_wydania ${order[1]}`);
            } else if(order[0] === 'ocena') {
                qb.leftJoin('oceny_gier', 'oceny_gier.id_gry', 'gry.id_gry');
                qb.orderByRaw(`avg(oceny_gier.ocena) ${order[1]}`);
            } else if(order[0] === 'popularnosc') {
                qb.leftJoin('zamowione_gry', 'zamowione_gry.id_gry', 'gry.id_gry');
                qb.orderByRaw(`count(zamowione_gry.id_zamowienia) ${order[1]}`);
            }
            qb.groupBy('gry.id_gry');

            // qb.offset(offset).limit(limit);
        })
        // .query('orderBy','tytul','asc')
        // .fetchAll({
        //     withRelated: [
        //         'grafiki',
        //         'platformy',
        //         'producenci'
        //     ]
        // })
        .fetchPage({
            pageSize: limit,
            page: page,
            withRelated: [
                'grafiki',
                'platformy',
                'producenci'
            ]
        })
        .then(function(products) {
            res.json({ products: products, rowCount: products.pagination.rowCount });
        });
});

productsRouter.post('/', (req, res, next) => {
    // const title = req.body.title,
    //     titleInEnglish = req.body.titleInEnglish || '',
    //     publishDate = req.body.publishDate || '1900-01-01',  
    //     description = req.body.description || '',
    //     age = req.body.age || 0,
    //     extension = req.body.extension || 0,
    //     price = req.body.price || 0,
    //     available = req.body.available || 0;
    
    // if(!title || !publishDate || !price)
    //     res.sendStatus(400);

    Jezyki.forge({
            nazwa_skrocona: 'ES',
            nazwa_pelna: 'Hiszpański'
        })
        .save(null, {method: 'insert'})
        .then(model => {
            res.json({model});
        });
});

productsRouter.put('/:productId', (req, res, next) => {
    // const title = req.body.title,
    //     titleInEnglish = req.body.titleInEnglish || '',
    //     publishDate = req.body.publishDate || '1900-01-01',  
    //     description = req.body.description || '',
    //     age = req.body.age || 0,
    //     extension = req.body.extension || 0,
    //     price = req.body.price || 0,
    //     available = req.body.available || 0;
    
    // if(!title || !publishDate || !price)
    //     res.sendStatus(400);

    Jezyki.forge({
            id_jezyka: req.params.productId
        })
        .save({
            nazwa_skrocona: 'SPI',
            nazwa_pelna: 'Hiszpania' 
        }, {patch: true})
        .then(model => {
            res.json({model});
        });
});




// productsRouter.param('productId', (req, res, next, productId) => {
//     const sql = "SELECT * FROM gry where gry.id_gry = $productId";
//     const values = {$productId: productId};

//     db.get(sql, values, (err, product) => {
//         if(err)
//             next(err)
//         else if(product){
//             req.product = product;
//             next();
//         } else {
//             res.sendStatus(404);
//         }
//     });
// });


// productsRouter.get('', (req, res, next) => {
//     const limit = req.query.limit || 15;
//     const offset = req.query.offset || 0;
//     db.all(`select distinct id_gry, tytul, cena_podstawowa, p.rabat as rabat, sciezka_do_pliku as okladka, typ_grafiki, czy_dostepna, p.nazwa as platforma
// 	    from gry g join grafiki gr on g.id_gry=gr.gry_id_gry
// 	    join gatunki_gier gg on g.id_gry=gg.gry_id_gry
//         join gatunki ga on gg.gatunki_id_gatunku=ga.id_gatunku
//         join platformy_gier pg on g.id_gry=pg.gry_id_gry
//         join platformy p on pg.platformy_id_platformy=p.id_platformy
// 	    left join (select gry_id_gry, rabat from promocje
// 		    where Date() between data_od and data_do) as p on g.id_gry=p.gry_id_gry
// 	    where typ_grafiki=0 LIMIT ${limit} OFFSET ${offset}`, 
//         (err, products) => {
//             if(err) 
//                 next(err)
//             else 
//                 res.status(200).json({products: products});
//         });
// //    res.send(monsters);
// });









// productsRouter.get('/:productId', (req, res, next) => {
//     res.status(200).json({product: req.product});
//     // res.send(monsters[req.params.id]);
// });

// productsRouter.post('/', (req, res, next) => {
//     const   title = req.body.title,
//             titleInEnglish = req.body.titleInEnglish || '',
//             publishDate = req.body.publishDate || '1900-01-01',  
//             description = req.body.description || '',
//             age = req.body.age || 0,
//             extension = req.body.extension || 0,
//             price = req.body.price || 0,
//             available = req.body.available || 0;
//     const sql = 'INSERT INTO gry (tytul,tytul_angielski, data_wydania, opis, kategoria_wiekowa, czy_dodatek, cena_podstawowa, czy_dostepna) ' +
//                 'VALUES ($title, $titleInEnglish, $publishDate, $description, $age, $extension, $price, $available)';
//     const values = {
//         $title: title,
//         $titleInEnglish: titleInEnglish,
//         $publishDate: publishDate,  
//         $description: description,
//         $age: age,
//         $extension: extension,
//         $price: price,
//         $available: available
//     };

//     if(!title || !publishDate || !price)
//         res.sendStatus(400);

//     db.run(sql, values, function(err) {
//         if(err)
//             next(err)
//         else {
//             db.get(`SELECT * FROM gry WHERE id_gry = ${this.lastID}`, (err, product) => {
//                 res.status(201).json({product: product});
//             });
//         }
//     });
    
//     // const receivedExpression = createElement('expressions', req.query);
// });

// productsRouter.put('/:productId', (req, res, next) => {
//     const   title = req.body.title,
//             titleInEnglish = req.body.titleInEnglish || '',
//             publishDate = req.body.publishDate || '1900-01-01',  
//             description = req.body.description || '',
//             age = req.body.age || 0,
//             extension = req.body.extension || 0,
//             price = req.body.price || 1,
//             available = req.body.available || 0;
//     const sql = 'UPDATE gry SET tytul = $title, tytul_angielski = $titleInEnglish, data_wydania = $publishDate, opis = $description, kategoria_wiekowa = $age, czy_dodatek = $extension, cena_podstawowa = $price, czy_dostepna = $available ' + 
//         'WHERE gry.id_gry = $productId';
//     const values = {
//         $title: title,
//         $titleInEnglish: titleInEnglish,
//         $publishDate: publishDate,  
//         $description: description,
//         $age: age,
//         $extension: extension,
//         $price: price,
//         $available: available,
//         $productId: req.params.productId
//     };

//     if(!title || !publishDate || !price)
//         res.sendStatus(400);

//     db.run(sql, values, (err) => {
//         if(err)
//             next(err);
//         else {
//             db.get(`SELECT * FROM gry WHERE gry.id_gry = ${req.params.productId}`, (err, product) => {
//                 res.status(200).json({product: product});
//             });
//         }
//     });

//     // const productQuery = req.query;
//     // monsters[req.params.productId] = productQuery;
//     // res.send(monsters[req.params.productId]);
// });

productsRouter.delete('/:productId', (req, res, next) => {
    const sql = 'DELETE FROM gry WHERE id_gry = $productId';
    const values = { 
        $productId: req.params.productId
    };

    db.run(sql, values, (err) => {
        if(err)
            next(err);
        else {
            res.status(204).send();
        }
    });
});

module.exports = productsRouter;
