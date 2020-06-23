module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        name: DataTypes.STRING,
        isSuper: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return Role;
}