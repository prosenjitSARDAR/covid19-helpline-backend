const authRoute = require('./authRoute')
const dataRoute = require('./dataRoute');

module.exports = {
    routes: function (app) {
        app.get('/', (req, res) => {
            res.json({ "message": req.headers.origin })
        });

        app.use('/api/auth', authRoute);
        app.use('/api/data', dataRoute);
    }
}
