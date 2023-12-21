const router = require('express').Router();
const { FoodTruck, User, Menu } = require('../model');
const withAuth = require('../utils/auth');

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
        res.status(500).json(err);
    }
});

router.get('/foodtruck/:id/profile', withAuth, async (req, res) => {
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
        res.status(500).json(err);
    }
});

router.get(`/foodtruck/:id/menu`, async (req, res) => {
    try {
        const menuData = await Menu.findAll({
            where: {
                foodtruck_id: req.params.id,
            },
            include: [
                {
                    model: FoodTruck,
                    attributes: ["name"],
                },
            ]
        });

        const menuItems = menuData.map((menu) => menu.get({ plain: true }));

        res.render('menu', {
            menuItems,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;