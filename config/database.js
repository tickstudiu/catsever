const Sequelize = require('sequelize');

const sequelize = new Sequelize('catserver', 'root', 'isylzjkoot', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
})
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
sequelize.sync({ force: false })
export default sequelize