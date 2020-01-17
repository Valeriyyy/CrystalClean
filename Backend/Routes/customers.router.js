const express = require('express');
const router = express.Router();
const db = require('../connection');
const Customer = require('../Models/customer.model');


router.get('/', (req, res) => {
        const cust = Customer.findAll()
        .then(cust => {
            res.status(200).json({Customer: cust});
        }).catch((err) => {
            res.send(500);
        });
    });

router.post('/add', (req, res) => {
    let{ phone_number, total_paid, total_tipped } = req.body;
    let errors = [];
    Customer.create({
        phone_number,
        total_paid,
        total_tipped
    }).then(cust => res.status(200).send(req.body.phone_number + " HAS BEEN ADDED"))
    .catch(err => console.log(err));
});

module.exports = router;