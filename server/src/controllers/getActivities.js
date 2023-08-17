const {Activity,Country} = require("../db");


module.exports= async (req,res)=>{
    try {        
        const activities= await Activity.findAll({
            include:Country // asocia los paises que tiene relación con tabla intermedia   
        }); 
        return activities.length > 0 ? res.status(200).json(activities) 
        : res.status(404).send('No existen registros de actividades turisticas')
    } catch (error) {
        res.status(500).send(error.message)
    }
}