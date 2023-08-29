const {Country,Activity} = require("../db");

module.exports= async (req,res)=>{
    try {
        let {id}=req.params; // sacamos el id de la url por params
        id=id.toUpperCase(); // convertimos a mayuscúlas
        //const countrie= await Country.findByPk(id);
        const country= await Country.findByPk(id,{          
            include:{
                model:Activity, // asociacion con el modelo actividad                
                through:{ // de la tabla intermedia
                    attributes:[] // para q no muestre nada
                }
            } 
        })
        if(!id) return res.status(403).send('ID necesario')
        country ? res.status(200).json(country) 
        : res.status(404).send(`No existe pais con el id: ${id}`)
    } catch (error) {
        res.status(500).send(error.message)
    }
}