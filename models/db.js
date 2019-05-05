const Sequelize = require('sequelize');

//conexao com o bd mysql
const sequelize = new Sequelize('postapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize,
    sequelize
}
