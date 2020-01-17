const express = require('express');
const cors = require('cors');
const dbconn = require('./connection');

//Routes
const customerRouter = require('./Routes/customers.router');
const jobsRouter = require('./Routes/jobs.router');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/jobs', jobsRouter);
app.use('/customers', customerRouter);



app.listen(port, () => {
    console.log(`Server is running and listening on port: localhost:${port}`);
    var start = Date.now();
    setInterval(function() {
        var delta = Date.now() - start;
        //console.log(Math.floor(delta / 1000));
        if(Math.floor(delta / 1000) % 10 == 0){
            console.log('10 units have passed');            
        }
    }, 1000);
});