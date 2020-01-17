const Sequelize = require('sequelize');
const db = require('../connection');

const customer = db.define('customer',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    phone_number: {
        type: Sequelize.STRING,
        primaryKey: true,
        ignoredWhitespace: true,
        allowNull: false
    },
    total_paid: {
        type: Sequelize.INTEGER
    },
    total_tipped:  {
        type: Sequelize.INTEGER
    }
});

module.exports = customer;
