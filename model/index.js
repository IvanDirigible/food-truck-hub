const User = require('./User');
const FoodTruck = require('./FoodTruck');
const Menu = require('./Menu');

User.hasOne (FoodTruck, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});
  
FoodTruck.belongsTo ( User, {
    foreignKey: "user_id"
});

FoodTruck.hasOne (Menu, {
    foreignKey: 'foodtruck_id',
    onDelete: "CASCADE"
});

Menu.belongsTo ( FoodTruck, {
    foreignKey: "foodtruck_id"
});

module.exports = { User, FoodTruck, Menu };
