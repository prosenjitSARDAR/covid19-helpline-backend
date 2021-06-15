
module.exports = {
    routes: function (app) {
        app.get('/', (req, res) => {
            res.json({ "message": req.headers.origin })
        });

        // app.use('/api', authRoute);
        // app.use('/api/carrier', authenticate,carrierRoute);

    }
}
