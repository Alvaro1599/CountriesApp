const { Country, Activities } = require('../db');
const { Sequelize } = require('sequelize');
function whereExport(continent = 'Europe', activity = 'CAMINATA') {
	if (!continent) {
		if (!activity) {
			return {
				where: {},
				include: [ Activities ]
			};
		}
	}
	if (!activity) {
		return { where: { continent: continent }, include: [ Activities ] };
	}
	if (!continent) {
		return { include: { model: Activities, where: { name: activity } } };
	}
	return { where: { continent: continent }, include: { model: Activities, where: { name: activity } } };
}
const filter = async (req, res) => {
	const result = await Country.findAll(whereExport());
	res.send(result);
};

module.exports = { filter };
