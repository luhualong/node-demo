module.exports = (sequelize, DataTypes) => {
    const Goods = sequelize.define('Goods', {
        title: {
            type: DataTypes.STRING,
            validate: {
                len: { args: [2, 50], msg: '用户名长度为2-50个字符' },
            }
        },
        imgPath: DataTypes.STRING,
        imgs: DataTypes.STRING,
        details: DataTypes.TEXT,
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        original: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '原价'
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        sales: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        isMarket: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return Goods;
}