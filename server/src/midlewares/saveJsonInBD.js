module.exports=  async (dataJson,model)=>{ // llenamos los datos en la base de datos
    dataJson.countries.forEach(async (elem) => {
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
            })            
        } catch (error) {
            console.log(error);
        }
    });
}