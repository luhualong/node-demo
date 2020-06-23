
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../models');
const m = require('../core/model');
const validator = require('validator');

const signature = 'demo';
const User = db.User;

router.get('/detail', async function (req, res) {
	const data = await m('user').findByPk(1)
	res.json(data)
});

router.get('/list', async function (req, res) {
	let list = await m('user').findAll({
		attributes: ['id'],
		limit: 10,
		offset: 0
	});
	res.json(list)
})

router.post('/login', async function (req, res) {
	let { userName, password } = req.body;

	if (!userName || !password) {
		return res.json({ status: false, data: { message: '账号密码不为空' } });
	}

	let user = await m('user').findOne({
		where: { userName, password }
	})

	//登录成功下发token
	if (user.status && user.data) {
		let token = jwt.sign({ userId: user.data.id }, signature);
		res.set('Authorization', token);
		return res.json(user);
	} else {
		return res.json({ status: false, data: { message: '账号或密码错误' } });
	}

})

router.post('/create', async function (req, res) {
	const newUser = await m('user').findOrCreate({
		where: { ...req.body }
	})
	res.json(newUser)
});

router.post('/update', async function (req, res) {
	if (!req.body._whereId) {
		return res.json({ status: false, data: { message: '缺少_whereid' } });
	}
	if(req.body.id){
		return res.json({ status: false, data: { message: '参数错误' } });
	}
	const result = await m('user').update({ ...req.body }, {
		where: { id: req.body._whereId }
	})
	res.json(result)
})

router.post('/delete', async function (req, res) {
	if (!req.body._whereId) {
		return res.json({ status: false, data: { message: '缺少_whereid' } });
	}
	const result = await m('user').destroy({
		where: { id: req.body._whereId }
	})
	res.json(result)
})

module.exports = router;
