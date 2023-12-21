const router = require("express").Router();
const userRoutes = require("./userRoutes");
const truckRoutes = require("./truckRoutes");
const menuRoutes = require("./menuRoutes");

router.use("/users", userRoutes);
router.use("/foodtrucks", truckRoutes);
router.use("/menu", menuRoutes);

module.exports = router;