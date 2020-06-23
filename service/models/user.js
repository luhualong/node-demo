'use strict';
module.exports = (sequelize, DataTypes) => {
	const statusValues = { normal: '正常', lock: '锁定' };
	const User = sequelize.define('User', {
		nickName: DataTypes.STRING,
		imgPath: DataTypes.STRING,
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: '请输入用户名'
				},
				len: { args: [2, 15], msg: '用户名长度为2-15个字符' },
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: '请输入密码'
				},
				len: { args: [2, 15], msg: '密码长度为2-15个字符' },
			}
		},
		email: DataTypes.STRING,
		status: {
			type: DataTypes.STRING,
			defaultValue: 'normal',
			validate: {
				isTrue(value) {
					if (!statusValues[value]) {
						throw new Error('status值错误');
					}
				}
			}
		},
		statusName: {
			type: DataTypes.VIRTUAL,
			get() { return statusValues[this.status] },
			set() { console.log('虚字段'); return; }
		}
	}, {});
	User.associate = function (models) {
		// associations can be defined here
		User.hasMany(models.UserAddress)
	};
	User.Enum = {
		statusValues,
	};
	User.mehtods = {
		statusName: User.Enum.statusValues[this.status]
	};
	return User;
};