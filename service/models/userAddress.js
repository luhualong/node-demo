module.exports = (sequelize, DataTypes) => {
	const UserAddress = sequelize.define('UserAddress', {
		fullName: {
			type: DataTypes.STRING,
			validate: {
				len: { args: [2, 10], msg: '用户名长度为2-10个字符' },
			}
		},
		phone: {
			type: DataTypes.BIGINT(11),
			validate: {
				len: { args: [11], msg: '手机号码错误' },
			}
		},
		area: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.STRING,
		},
		isDefault: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	})

	UserAddress.associate = function (models) {
		// associations can be defined here
		UserAddress.belongsTo(models.User)
	};

	return UserAddress;
}