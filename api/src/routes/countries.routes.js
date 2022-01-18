const { Country, Activities } = require('../db');
const { Sequelize } = require('sequelize');
const { Op } = require('sequelize');
//formateando el req.params.name para que coincida con el nombre del país
function setString(str) {
	if (str) {
		return str[0].toUpperCase() + str.substr(1).toLowerCase();
	}
}
//devuelve el where con los filtros
function whereExport(name = '', continent, activity) {
	console.log(activity, 'activity');
	if (!continent) {
		console.log('1');
		if (!activity) {
			return {
				where: {
					name: {
						[Op.like]: `%${setString(name)}%`
					}
				},
				include: [ Activities ]
			};
		}
	}
	if (!activity) {
		console.log('2');

		return {
			where: {
				name: {
					[Op.like]: `%${setString(name)}%`
				},
				continent: continent
			},
			include: [ Activities ]
		};
	}
	if (!continent) {
		console.log('3');
		console.log(name);
		return {
			where: {
				name: {
					[Op.like]: `%${setString(name)}%`
				}
			},
			include: {
				model: Activities,
				where: {
					nameAc: activity
				}
			}
		};
	}
	console.log('4');

	return {
		where: {
			continent: continent,
			name: {
				[Op.like]: `%${setString(name)}%`
			}
		},
		include: { model: Activities, where: { nameAc: activity } }
	};
}
const countries = async (req, res) => {
	//comprobando que exista el algún query.name para cumplir con la condición de filtrado
	if (req.query.name) {
		console.log('data');
		let whereTemp = whereExport(req.query.name, req.query.continent, req.query.activity);
		console.log({ ...whereTemp }, 'asdasdaaaaa');
		let name = await Country.findAll({
			...whereTemp
		});
		res.json(name);
		return;
	} else {
		let whereTemp1 = whereExport(req.query.name, req.query.continent, req.query.activity);
		delete whereTemp1.where.name;

		console.log(whereTemp1, 'asdasdaaaaafffffffffffff');
		const data = await Country.findAll(whereTemp1);
		res.json(data);
		return;
	}
};

const countriesId = async (req, res) => {
	console.log(req.query.name);

	const filterId = await Country.findOne({
		where: { ID: req.params.id.toUpperCase() },
		include: [ Activities ]
	});
	res.json(filterId);
	return;
};
module.exports = { countries, countriesId };
