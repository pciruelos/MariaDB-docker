const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: '1234',
    database: 'mariadb_docker_test'
});

async function getConnection(){
    const connection = await pool.getConnection();
    return connection;
}


module.exports = {getConnection}; 