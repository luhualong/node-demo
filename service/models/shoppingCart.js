module.exports = (sequelize, DataTypes) => {
    const ShoppingCart = sequelize.define('ShoppingCart', {
        number: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '数量'
        },
        isCheck: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '是否勾选'
        }
    });

    ShoppingCart.associate = function (models) {
        ShoppingCart.belongsTo(models.User);
        ShoppingCart.belongsTo(models.Goods);
    }

    return ShoppingCart;
}