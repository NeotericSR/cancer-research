var CancerResearch  = require('./cancer_research')
var mysql = require('mysql')
var config = require('../config')

const Connection = mysql.createConnection(config.mysql)

//Establish MySQL connection
Connection.connect(function(err) {
    if (err)
        throw err
    else {
        console.log('Connected to MySQL');
    }
});

module.exports = {CancerResearch, Connection}