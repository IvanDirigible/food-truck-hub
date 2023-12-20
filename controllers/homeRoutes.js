const router = require('express').Router();
const { FoodTruck, User } = require('../model');

router.get('/', async (req, res) => {
    try {
        const foodtruckData = await FoodTruck.findAll({
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });

        const foodtrucks = foodtruckData.map((foodtruck) => foodtruck.get({ plain: true }));

        res.render("cover", {
            foodtrucks,

        });
    } catch (err) {
        // Error checking - REMOVE LATER
        console.log("Error Here");
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/foodtruck/:id', async (req, res) => {
    try {
        const foodtruckData = await FoodTruck.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["name"],
                },
            ],
        });

        const foodtruck = foodtruckData.get({ plain: true });

        res.render('foodtruck', {
            ...foodtruck,

        });
    } catch (err) {
        // Error checking - REMOVE LATER
        console.log("Error Over Here");
        res.status(500).json(err);
    }
});

//middleware goes here

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;