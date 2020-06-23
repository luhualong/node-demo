module.exports = (sequelize, DataTypes) => {
    const OrderGoods = sequelize.define('OrderGoods', {
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        number: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '数量'
        },
        data: {
            type: DataTypes.TEXT,
            comment: '购入时商品快照'
        }
    });

    OrderGoods.associate = function (models) {
        OrderGoods.belongsTo(models.Order);
        OrderGoods.belongsTo(models.Goods);
    }

    return OrderGoods;
}