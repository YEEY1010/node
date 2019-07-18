var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

const getConnection = () => {
    return new Promise((resolve, reject) => {
        // 连接池可以执行连接和释放
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                // not connected!
                throw err;
            } else {
                resolve(connection);
            }
        });
    })
}

const query = (connection, sql, params) => {
    return new Promise((resolve, reject) => {
        // Use the connection
        connection.query(sql, [params ? params : ''], function (error, results, fields) {
            console.log(results);
            // When done with the connection, release it.
            connection.release();
            // Handle error after the release.
            if (error) {
                reject(error);
                throw error;
            } else {
                resolve(results);
            };
            // Don't use the connection here, it has been returned to the pool.
        });
    })
}


const find = async (table, params, callback) => {
    const connection = await getConnection();
    if (params) {
        let results = await query(connection, `SELECT * FROM ${table} where ?`, params);

        callback(results)
    } else {
        let results = await query(connection, `SELECT * FROM ${table}`, null);
        callback(results)
    }

}

module.exports = {
    find
}