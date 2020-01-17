const express = require('express');
const router = express.Router();
const db = require('../connection');
const Job = require('../Models/job.model');

router.get('/', (req, res) => {
    const job = Job.findAll()
        .then(job => {
            res.status(200).json({Job: job});
        }).catch(err => {
            res.send(500);
        });
});

module.exports = router;