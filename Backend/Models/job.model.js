const Sequelize = require('sequelize');
const db = require('../connection');
const customer = require('./customer.model');

const job = db.define('job', {
    job_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cust_id: {
        type: Sequelize.INTEGER,
        references: {
            model: customer,
            key: 'id'
        }
    },
    date: {
        type: Sequelize.NOW
    },
    address: {
        type: Sequelize.STRING
    },
    unit: {
        type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.STRING
    },
    phone_number: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    tip: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }

});

module.exports = job;