const {Activity} = require("../db");

module.exports= async (req,res)=>{
    try {
        const {name,dificulty,duration,season,countries} = req.body;
        if(!name,!dificulty,!duration,!season,!countries){
            return res.status(403).send('Faltan datos')
        }        
        const newActivity = await Activity.create({
            name,
            dificulty,
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