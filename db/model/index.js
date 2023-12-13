const User = require ('./User');
const FoodTruck = require ('./FoodTruck');

User.hasOne (FoodTruck, {
    foreignKey: "user_id"
});
  
FoodTruck.belongsTo ( User, {
    foreignKey: "user_id"
});

module.exports = {User, Project};
