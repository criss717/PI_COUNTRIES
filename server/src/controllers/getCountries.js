const {Country,Activity} = require("../db");
const { Op } = require('sequelize');

module.exports= async (req,res)=>{
    try {
        let {name} = req.query; 
        if(name){ // por si acaso nos pasan por querys el nombre del país               
            const country= await Country.findAll({
                where:{
                    name: {
                        [Op.iLike]: name // indiferente a mayusculas y min
                    }
                },
                include:Activity // asociar con tabla intermedia                
            });
            return country.length>0 ? res.status(200).json(country) 
            : res.status(404).send(`No existe país con el nombre: ${name}`)
        }      
        const countries= await Country.findAll(); // si no pasan query
        return countries.length > 0 ? res.status(200).json(countries) 
        : res.status(404).send('No existen registros de países')
    } catch (error) {
        res.status(500).send(error.message)
    }
}