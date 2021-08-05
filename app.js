const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const cron = require('node-cron');
const createError = require('http-errors');
const CronController = require('./controllers/cronController');
require('dotenv').config();
require('./Database/db');

//IMPORTING ALL-ROUTES
const allRoute = require('./routes/allRoute');

//INITIALIZING EXPRESS APP
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//SCHEDULED CRON JOBS
cron.schedule('* * */3 * * *', () => {
    CronController.getCovidData().then(success => {
        //This Cron job update the daily Covid Data.
    }).catch(error => {

    })
});

//INITIALIZING ALL-ROUTES
allRoute.routes(app);

//404 ROUTE
app.use(async (req, res, next) => {
    next(createError.NotFound('This route does not exist'));
})

//ERROR HANDLER
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    })
})

//CONFIGURING PORT
const PORT = process.env.PORT || 3000;

//RUNNING THE SERVER
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})


module.exports = app;