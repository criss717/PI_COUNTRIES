const {Activity,Country} = require("../db");

module.exports= async (req,res)=>{
    try {
        const {name,difficulty,duration,season,countries} = req.body;       
        if(!name,!difficulty,!duration,!season,!countries){
            return res.status(403).send('Faltan datos')
        }
        const existingActivity = await Activity.findAll({ //para validar q no se repita nombre de actividad con un pais
            where:{name},
            include:{
                model:Country,
                where:{
                    id:countries
                }
            }
        })          
        if(existingActivity.length>0) {   // si existen relaciones de nombre de actividad con id de paises         
            const dupCountries = existingActivity.map(activity => activity.Countries.map(activity=>activity.dataValues.id)); // array de los id de los paises q tienen la actividad
            const dupCountriesString= dupCountries.flat(1).join(", ") // para bajar un grado de anidamiento y volver string ya que nos dan: [["COL","VEN"]]
            return res.status(403).send(`Ya existe registro de la actividad con nombre: ${name}, y los paises con id: ${dupCountriesString}`)    
        }
        // si no hay paises q contengan esta actividad, procedemos a crearla
        const newActivity = await Activity.create({ 
            name,
            difficulty,
            duration,
            season,            
        }) 
        newActivity.addCountries(countries)
        const activities= await Activity.findAll();       
        activities ? res.status(200).json(activities) 
        : res.status(404).send(`No hay actividades en la base de datos`)
    } catch (error) {
        res.status(500).send(error.message)
    }
}