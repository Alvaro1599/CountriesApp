/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { countries } = require('../../routes/countries.routes.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
	name: 'Argentina'
};

describe('Country routes', () => {
	/* beforeEach(() => Country.sync({ force: true }).then(() => Country.create(country))); */

	before(() =>
		conn.authenticate().catch((err) => {
			console.error('Unable to connect to the database:', err);
		})
	);
	describe('GET /countries', () => {
		console.log(countries, 'asdasdasd');
		Country.sync({ force: true }).then(() => Country.create(country));
		it('should get 200', () => agent.get('/countries').expect(200));
	});
});
