const sequelize = require("../config/connection");
const { User, FoodTruck, Menu } = require("../model");

const userData = require("./userData.json");
const foodtruckData = require("./foodtruckData.json");
const menuData = require("./menuData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const foodtrucks = await FoodTruck.bulkCreate(foodtruckData, {
        individualHooks: true,
        returning: true,        
    });

    const menus = await Menu.bulkCreate(menuData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
};

seedDatabase();