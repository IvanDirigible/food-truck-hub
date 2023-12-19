const router = require("express").Router();
const { FoodTruck } = require("../../model");
// Security helper goes here

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

// router.delete
// Will do later

module.exports = router;