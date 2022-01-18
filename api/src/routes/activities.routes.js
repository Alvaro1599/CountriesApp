const { Activities } = require('../db');
const { Country } = require('../db');

const activities = async (req, res) => {
	try {
		console.log('aaaaaaaaa');
		const activityPost = {
			nameAc: req.body.name,
			difficulty: req.body.difficulty,
			duration: req.body.duration,
			season: req.body.season
		};
		/* const activity = await Activities.create(activityPost); */
		const activity = await Activities.findOrCreate({
			where: { nameAc: activityPost.nameAc },
			defaults: activityPost
		});
		//añadiendo actividades a los paises
		//accediendo a la actividad creada para agregarle posteriormente los paises
		console.log(activity[0]._options.isNewRecord, 'createddddd');
		const prueba = await Activities.findByPk(activity[0].dataValues.ID);
		//recibe un array ["ALS","ASD","ASD"] los recorre y agrega a la tabla
		const countryId = req.body.countryId.split(',');
		for (const key in countryId) {
			console.log(countryId[key], 'ssssss');
			await prueba.addCountry(countryId[key]);
		}
		res.status(200).json(
			await Country.findAll({
				include: {
					model: Activities
				}
			})
		);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
};

module.exports = { activities };
