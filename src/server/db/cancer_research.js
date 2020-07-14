var Connection = require('./index').Connection

const all = async() => {
    console.log('query database')
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from cancer_table', (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result)
        })
    })
}

module.exports = all