const {Country} = require("../db");

module.exports= async (req,res)=>{
    try {
        let {id}=req.params; // sacamos el id de la url por params
        id=id.toUpperCase(); // convertimos a mayuscúlas
        const countrie= await Country.findByPk(id);
        if(!id) return res.status(403).send('ID necesario')
        countrie ? res.status(200).json(countrie) 
        : res.status(404).send(`No existe pais con el id: ${id}`)
    } catch (error) {
        res.status(500).send(error.message)
    }
}