const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
      type: DataTypes.INTEGER,      
      validate:{
        min:1,
        max:5
      }  
    },
    duration:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season:{
        type:DataTypes.STRING,        
        allowNull: false,
    }
  }, {
    timestamps:false //retira los createdAt y updateAt automáticos
 });
};