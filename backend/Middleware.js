const res = require("express/lib/response")

const errorHandle = (err, req, next) => {
    const statusCode = res.statusCode ? res.statuscode : 500

    res.status(StatusCode)

    res.json({
        message: err,
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack

    })
}
module.exports = {
    errorHandler
}