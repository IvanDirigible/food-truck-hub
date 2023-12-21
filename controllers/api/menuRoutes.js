const router = require("express").Router();
const { Menu } = require("../../model");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
        const menuData = await Menu.create({
            ...req.body,
            foodtruck_id: req.session.foodtruck_id,
        });

        res.status(200).json(menuData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:foodtruck_id", withAuth, async (req, res) => {
    try {
        const menuData = await Menu.update({
            where: {
                id: req.params.id,
                foodtruck_id: req.session.foodtruck_id,
            },
        });

        if (!menuData) {
            res.status(404).json({ message: "No menu item found with this id." });
            return;
        }

        res.status(200).json(menuData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;