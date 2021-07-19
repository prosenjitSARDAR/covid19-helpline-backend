const jwt = require('jsonwebtoken');
const PROVIDER = require('../models/Provider');


module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decode = jwt.verify(token, 'SECRET');

        PROVIDER.find({ _id: decode._id, email: decode.email }).then(user => {
            if (user) {
                req.currentUser = user[0];
                next()
            } else {
                throw new Error({
                    "message": "Authentication Faild",
                    "status": 401
                })
            }
        }).catch(e => {
            let err = {
                "message": "Authentication Faild",
                "status": 401
            }
            return res.status(401).send(err);

        })

    } catch (error) {
        result = {
            error: `Authentication error. Token required.`,
            status: 401
        };
        res.status(401).send(result);
    }

}