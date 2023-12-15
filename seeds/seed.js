const sequelize = require("../config/connection");
const { User, FoodTruck } = require("../model");

const userData = require("./userData.json");
const foodtruckData = require("./foodtruckData.json");

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const foodtruck of foodtruckData) {
        await FoodTruck.create({
            ...foodtruck, user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
};

seedDatabase();