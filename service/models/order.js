module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        discountAmount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        totalAmount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: DataTypes.STRING,
    });

    Order.associate = function (models) {
        Order.hasMany(models.OrderGoods);
        Order.belongsTo(models.User);
        Order.belongsTo(models.UserAddress);
    }

    return Order;
}