'use strict';

const connection = require('../config/db');
const knex = require('knex')(connection);
const bookshelf = require('bookshelf')(knex);

const Grafiki = require("./grafiki");
const Platformy = require("./platformy");
const Gatunki = require("./gatunki");
const Producenci = require("./producenci");
const Wydawcy = require("./wydawcy");
const Wymagania = require("./wymagania");
const Zwiastuny = require("./zwiastuny");
const Jezyki = require("./jezyki");
const OcenyGier = require("./ocenygier");

const Gry = bookshelf.Model.extend({
    tableName: 'gry',
    idAttribute: 'id_gry',
    grafiki: function () {
        return this.hasMany(Grafiki,'id_gry');
    },
    platformy: function() {
        return this.belongsToMany(Platformy,'platformy_gier','id_gry','id_platformy');
    },
    gatunki: function() {
        return this.belongsToMany(Gatunki,'gatunki_gier','id_gry','id_gatunku');
    },
    producenci: function() {
        return this.belongsToMany(Producenci,'producenci_gier','id_gry','id_producenta');
    },
    wydawcy: function() {
        return this.belongsToMany(Wydawcy,'wydawcy_gier','id_gry','id_wydawcy');
    },
    wymagania: function() {
        return this.hasMany(Wymagania,'id_gry');
    },
    zwiastuny: function() {
        return this.hasMany(Zwiastuny,'id_gry');
    },
    jezyki: function() {
        return this.belongsToMany(Jezyki,'jezyki_gier','id_gry','id_jezyka');
    },
    ocenygier: function() {
        return this.hasMany(OcenyGier,'id_gry');
    }
});
module.exports = bookshelf.model('Gry', Gry);