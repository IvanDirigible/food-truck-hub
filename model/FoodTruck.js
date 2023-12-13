//grabs data types for database
const {Model, DataTypes} = require ("sequelize")
//pull from config route
const sequelize = require ("../config/connection")

//create class model to extend off the base
class FoodTruck extends Model {}

//creating object for FoofTruck
FoodTruck.init (
    {
        id: {
            type: DateTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DateTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            },
        },
    },
);

//allows the module to be used in other files
module.exports = FoodTruck;