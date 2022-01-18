const { Country, Activities } = require('../db');
const { Op } = require('sequelize');
const country = async (req, res) => {
	const activity = req.query.activity;
	const response = await Country.findAll({ include: [ Activities ] });

	const filter = response.filter((x) =>
		x.activities.find((y) => {
			console.log(y.nameAc.toLowerCase() === activity.toLowerCase());
			return y.nameAc.toLowerCase() === activity.toLowerCase();
		})
	);

	console.log(filter);
	res.send(filter);
};

module.exports = { country };
