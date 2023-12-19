const router = require("express").Router();
const { FoodTruck } = require("../../model");
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newFoodTruck = await FoodTruck.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newFoodTruck);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const foodtruckData = await FoodTruck.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if (!foodtruckData) {
            res.status(404).json({ message : "No foodtruck found with this id." });
            return;
        }

        res.status(200).json(foodtruckData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;