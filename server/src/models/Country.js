const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type:DataTypes.STRING(3),
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageFlag:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,      
    },
    subRegion:{
      type: DataTypes.STRING,     
    },
    area:{
      type: DataTypes.STRING,
      allowNull: false
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maps:{
      type: DataTypes.STRING,      
    }

  }, {
    timestamps:false //retira los createdAt y updateAt automáticos
 });
};