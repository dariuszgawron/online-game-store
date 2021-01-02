const express = require('express');
const productsRouter = express.Router();

const sqlite = require('sqlite3');
const db = new sqlite.Database('./sklep.db');

const Gry = require('../models/gry');
const Grafiki = require('../models/grafiki');
// const Platformy = require('../models/platformy');

// const monsters = {'1':{ type: 'werewolf' }, '2':{ type: 'hydra' }, '3':{ type: 'chupacabra' }};

productsRouter.param('productId', (req, res, next, productId) => {
    const sql = "SELECT * FROM gry where gry.id_gry = $productId";
    const values = {$productId: productId};

    db.get(sql, values, (err, product) => {
        if(err)
            next(err)
        else if(product){
            req.product = product;
            next();
        } else {
            res.sendStatus(404);
        }
    });
});

productsRouter.get('', (req, res, next) => {
    const limit = req.query.limit || 15;
    const offset = req.query.offset || 0;
    db.all(`select distinct id_gry, tytul, cena_podstawowa, p.rabat as rabat, sciezka_do_pliku as okladka, typ_grafiki, czy_dostepna, p.nazwa as platforma
	    from gry g join grafiki gr on g.id_gry=gr.gry_id_gry
	    join gatunki_gier gg on g.id_gry=gg.gry_id_gry
        join gatunki ga on gg.gatunki_id_gatunku=ga.id_gatunku
        join platformy_gier pg on g.id_gry=pg.gry_id_gry
        join platformy p on pg.platformy_id_platformy=p.id_platformy
	    left join (select gry_id_gry, rabat from promocje
		    where Date() between data_od and data_do) as p on g.id_gry=p.gry_id_gry
	    where typ_grafiki=0 LIMIT ${limit} OFFSET ${offset}`, 
        (err, products) => {
            if(err) 
                next(err)
            else 
                res.status(200).json({products: products});
        });
//    res.send(monsters);
});


productsRouter.get('/all', (req, res, next) => {
    let all = {products:[]};
    const limit = req.query.limit || 15;
    const offset = req.query.offset || 0;
    db.each(`select distinct id_gry, tytul, cena_podstawowa, p.rabat as rabat, sciezka_do_pliku as okladka, typ_grafiki, czy_dostepna
	    from gry g join grafiki gr on g.id_gry=gr.gry_id_gry
	    left join (select gry_id_gry, rabat from promocje
		    where Date() between data_od and data_do) as p on g.id_gry=p.gry_id_gry
	    where typ_grafiki=0 LIMIT ${limit} OFFSET ${offset}`, 
        async (err, products) => {
            if(err) 
                next(err)
            else {
                // all.products.push(products);
                await db.all("SELECT nazwa_wydawcy FROM wydawcy_gier join wydawcy on wydawcy_gier.wydawcy_id_wydawcy=wydawcy.id_wydawcy WHERE wydawcy_gier.gry_id_gry = ?", [products.id_gry], 
                    (err, genres) => {
                        products.wydawcy = genres.map(e=>e.nazwa_wydawcy);
                        all.products.push(products);
                        // console.log(products);
                        console.log(all.products);
                        console.log('Jestem');
                });
                
            }
        },(acc)=>{
            console.log(all.products);
            res.status(200).json({products: all.products});
        });
//    res.send(monsters);
});



productsRouter.get('/all3', (req, res, next) => {
    // const limit = req.query.limit || 15;
    // const offset = req.query.offset || 0;
    Gry.forge()
        .query(qb=>{
            qb.offset(0).limit(10);
        })
        .fetchAll({
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
        .then(function(products) {
            res.json({ products });
        });
});


// productsRouter.get('/all2', (req, res, next) => {
//     let all = {products:[]};
//     const limit = req.query.limit || 15;
//     const offset = req.query.offset || 0;
//     db.all(`select distinct id_gry, tytul, cena_podstawowa, p.rabat as rabat, sciezka_do_pliku as okladka, typ_grafiki, czy_dostepna
// 	    from gry g join grafiki gr on g.id_gry=gr.gry_id_gry
// 	    left join (select gry_id_gry, rabat from promocje
// 		    where Date() between data_od and data_do) as p on g.id_gry=p.gry_id_gry
// 	    where typ_grafiki=0 LIMIT ${limit} OFFSET ${offset}`, 
//         (err, products) => {
//             if(err) 
//                 next(err)
//             else {
//                 products.forEach(element => {
//                     let produkty = {};
//                     produkty.id_gry = element.id_gry;
//                     produkty.wydawcy = readRecords(element.id_gry);
//                     all.products.push(produkty);
//                 });
//                 console.log(all.products);
//                 res.status(200).json({products: all.products});
//             }
//         });
// //    res.send(monsters);
// });

// const wydawcy = (produkty,id_gry) => {
//     let wydawcyGier = [];
//     db.all("SELECT nazwa_wydawcy FROM wydawcy_gier join wydawcy on wydawcy_gier.wydawcy_id_wydawcy=wydawcy.id_wydawcy WHERE wydawcy_gier.gry_id_gry = ?", [id_gry], 
//             (err, genres) => {
//                 wydawcyGier = genres.map(e=>e.nazwa_wydawcy);
//                 // all.products.push(products);
//                 // console.log(products);
//                 // console.log(all.products);
//                 // console.log('Jestem');
//         },()=>{
//             return wydawcyGier;
//         });
// }

// var readRecords = function(id_gry){
//     return new Promise(function (resolve, reject) {
//       var responseObj;
//       db.all("SELECT nazwa_wydawcy FROM wydawcy_gier join wydawcy on wydawcy_gier.wydawcy_id_wydawcy=wydawcy.id_wydawcy WHERE wydawcy_gier.gry_id_gry = ?", [id_gry], function cb(err, genres) {
//         if (err) {
//           reject(err);
//         } else {
//           responseObj = genres.map(e=>e.nazwa_wydawcy);
//           resolve(responseObj);
//         }
//         // db.close();
//       });
//       console.log(responseObj);
//     //   return responseObj;
//     });
//   }






productsRouter.get('/:productId', (req, res, next) => {
    res.status(200).json({product: req.product});
    // res.send(monsters[req.params.id]);
});

productsRouter.post('/', (req, res, next) => {
    const   title = req.body.title,
            titleInEnglish = req.body.titleInEnglish || '',
            publishDate = req.body.publishDate || '1900-01-01',  
            description = req.body.description || '',
            age = req.body.age || 0,
            extension = req.body.extension || 0,
            price = req.body.price || 0,
            available = req.body.available || 0;
    const sql = 'INSERT INTO gry (tytul,tytul_angielski, data_wydania, opis, kategoria_wiekowa, czy_dodatek, cena_podstawowa, czy_dostepna) ' +
                'VALUES ($title, $titleInEnglish, $publishDate, $description, $age, $extension, $price, $available)';
    const values = {
        $title: title,
        $titleInEnglish: titleInEnglish,
        $publishDate: publishDate,  
        $description: description,
        $age: age,
        $extension: extension,
        $price: price,
        $available: available
    };

    if(!title || !publishDate || !price)
        res.sendStatus(400);

    db.run(sql, values, function(err) {
        if(err)
            next(err)
        else {
            db.get(`SELECT * FROM gry WHERE id_gry = ${this.lastID}`, (err, product) => {
                res.status(201).json({product: product});
            });
        }
    });
    
    // const receivedExpression = createElement('expressions', req.query);
});

productsRouter.put('/:productId', (req, res, next) => {
    const   title = req.body.title,
            titleInEnglish = req.body.titleInEnglish || '',
            publishDate = req.body.publishDate || '1900-01-01',  
            description = req.body.description || '',
            age = req.body.age || 0,
            extension = req.body.extension || 0,
            price = req.body.price || 1,
            available = req.body.available || 0;
    const sql = 'UPDATE gry SET tytul = $title, tytul_angielski = $titleInEnglish, data_wydania = $publishDate, opis = $description, kategoria_wiekowa = $age, czy_dodatek = $extension, cena_podstawowa = $price, czy_dostepna = $available ' + 
        'WHERE gry.id_gry = $productId';
    const values = {
        $title: title,
        $titleInEnglish: titleInEnglish,
        $publishDate: publishDate,  
        $description: description,
        $age: age,
        $extension: extension,
        $price: price,
        $available: available,
        $productId: req.params.productId
    };

    if(!title || !publishDate || !price)
        res.sendStatus(400);

    db.run(sql, values, (err) => {
        if(err)
            next(err);
        else {
            db.get(`SELECT * FROM gry WHERE gry.id_gry = ${req.params.productId}`, (err, product) => {
                res.status(200).json({product: product});
            });
        }
    });

    // const productQuery = req.query;
    // monsters[req.params.productId] = productQuery;
    // res.send(monsters[req.params.productId]);
});

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
