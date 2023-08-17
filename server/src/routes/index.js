const { Router } = require("express");
const router = Router(); // para poder usar router

//importamos los controladores
const getCountries = require("../controllers/getCountries");
const getCountriesbyId = require("../controllers/getCountriesbyId");
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");


//matcheamos las rutas
router.get('/countries', getCountries) //solicita todos los paises a la bd
router.get('/countries/:id', getCountriesbyId) //solicita el pais por id a la bd
router.post('/activities',postActivities) // crea una nueva actividad turistica
router.get('/activities',getActivities) // solicita la lista de actividades turisticas

module.exports = router;
