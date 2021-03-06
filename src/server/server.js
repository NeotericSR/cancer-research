var express = require('express');
var apiRoute = require('./routes')

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('public'))
app.use(apiRoute)

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})