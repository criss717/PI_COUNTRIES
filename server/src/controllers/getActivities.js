const {Activity,Country} = require("../db");


module.exports= async (req,res)=>{
    try {        
        const activities= await Activity.findAll({
            include:{
                model:Country, // asociacion con el modelo Country
                attributes:["name"], //solo mostrar el atributo name, para q no me llene de info
                through:{ // de la tabla intermedia
                    attributes:[] // para q no muestre nada
                }
            }   
        }); 
        return activities.length > 0 ? res.status(200).json(activities) 
        : res.status(404).send('No existen registros de actividades turisticas')
    } catch (error) {
        res.status(500).send(error.message)
    }
}