const db = require('../models');

//TODO 规范输出与请求

const m = (modelName) => {
    modelName = modelName[0].toUpperCase() + modelName.slice(1);
    const model = db[modelName];
    let status = true, data;
    return {
        create: async (...args) => {
            try {
                data = await model.create(...args).catch(function (err) {
                    let msg = [];
                    let fields = {};
                    if (err.errors) {
                        for (let item of err.errors) {
                            fields[item.path] = item.message;
                            msg.push(`${item.path}:${item.message}`);
                        }
                    }
                    status = false;
                    return { message: msg.join(','), fields }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }

            return { status, data };
        },
        destroy: async (...args) => {
            try {
                data = await model.destroy(...args).catch(function (err) {
                    let msg = [err.message];
                    status = false;
                    return { message: msg.join(',') }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }
            if (!isNaN(data)) {
                status = !!data;
            };
            return { status, data };
        },
        update: async (...args) => {
            try {
                data = await model.update(...args).catch(function (err) {
                    let msg = [];
                    let fields = {};
                    if (err.errors) {
                        for (let item of err.errors) {
                            fields[item.path] = item.message;
                            msg.push(`${item.path}:${item.message}`);
                        }
                    }
                    status = false;
                    return { message: msg.join(','), fields }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }
            if (Array.isArray(data)) {
                status = !!data[0];
            }
            return { status, data };
        },
        findAll: async (...args) => {
            try {
                data = await model.findAll(...args).catch(function (err) {
                    let msg = [err.message];
                    status = false;
                    return { message: msg.join(',') }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }
            return { status, data };
        },
        findAndCountAll: async (...args) => {
            try {
                data = await model.findAndCountAll(...args).catch(function (err) {
                    let msg = [err.message];
                    status = false;
                    return { message: msg.join(',') }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }
            return { status, data };
        },
        findByPk: async (id) => {
            try {
                data = await model.findByPk(id).catch(function (err) {
                    let msg = [err.message];
                    status = false;
                    return { message: msg.join(',') }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }
            return { status, data };
        },
        findOne: async (...args) => {
            try {
                data = await model.findOne(...args).catch(function (err) {
                    let msg = [err.message];
                    status = false;
                    return { message: msg.join(',') }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }
            return { status, data };
        },
        findOrCreate: async (...args) => {
            try {
                [data, status] = await model.findOrCreate(...args).catch(function (err) {
                    let msg = [err.message];
                    status = false;
                    return { message: msg.join(',') }
                });
            } catch (error) {
                status = false;
                data = { message: error.message }
            }
            return { status, data };
        }
    }
}

module.exports = m;