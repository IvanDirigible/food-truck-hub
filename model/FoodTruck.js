//grabs data types for database
const {Model, DataTypes} = require ("sequelize");
//pull from config route
const sequelize = require ("../config/connection");

//create class model to extend off the base
class FoodTruck extends Model {}

//creating object for FoodTruck
FoodTruck.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING,
            unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "foodtruck",
    }
);

//allows the module to be used in other files
module.exports = FoodTruck;