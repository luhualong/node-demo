const db = require('./models');

db.sequelize.sync({ alter: true }).then(function () {
    console.log('同步表完成');
})