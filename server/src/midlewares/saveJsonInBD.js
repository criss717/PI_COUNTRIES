const axios=require('axios')
module.exports=  async (model)=>{ // llenamos los datos en la base de datos
    try {
        const {data} = await axios('http://localhost:5000/countries')  // pedimos la info a la API    
        data.length>0 && data.forEach(async (elem) => {
            try {
                await model.create({
                    id:elem.cca3,              
                    name:elem.name.common,  
                    imageFlag:elem.flags.png,
                    continents:elem.continents[0],
                    capital:elem.capital && elem.capital[0] || null,
                    subRegion:elem.subregion,
                    area:elem.area,
                    population:elem.population,
                    maps:elem.maps.googleMaps
                })            
            } catch (error) {
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
    }
}