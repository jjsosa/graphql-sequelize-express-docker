'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let db_user = process.env.DATABASE_USER;
let db_passw = process.env.DATABASE_PASSW;
let db_name = process.env.DATABASE_NAME;
let db_host = process.env.DATABASE_HOST;
// let db_port = process.env.DATABASE_PORT;
let db_dialect = process.env.DATABASE_DIALECT;

let db_config = {
  "username": db_user,
  "password": db_passw,
  "database": db_name,
  "host": db_host,
  // "port": db_port,
  "dialect": db_dialect
}

console.log('COMPLETE DATABASE CONFIG -> ' + JSON.stringify(db_config));

let sequelize = new Sequelize(db_name, db_user, db_passw, db_config);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;