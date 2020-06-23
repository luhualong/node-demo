module.exports = (sequelize, DataTypes) => {
    const statusValues = { normal: '正常', lock: '锁定' };
    const Admin = sequelize.define('Admin', {
        userName: {
            type: DataTypes.STRING,
            validate: {
                len: { args: [2, 10], msg: '用户名长度为2-10个字符' },
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: { args: [2, 10], msg: '密码长度为2-10个字符' },
            }
        },
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
    });

    Admin.associate = function (models) {
        Admin.belongsTo(models.Role);
    };

    return Admin;
}