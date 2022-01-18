const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { countries, countriesId } = require('./countries.routes');
const { activities } = require('./activities.routes');
const { filter } = require('./filterCountries.routes');
const { country } = require('./country');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/filter', filter);
router.get('/countries', countries);
router.get('/countries/:id', countriesId);
router.post('/activities', activities);
router.get('/countriesByActivity', country);
module.exports = router;
