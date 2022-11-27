const moment = require('moment')


exports.handler = async(event) =>{

    var resp = {
        message: "Returning from hell like a pro.",
        version: "v4.0.0",
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
    }

    return {
        statusCode: 200,
        body: JSON.stringify(resp)
    }
}