const router = require("express").Router();
const userRoutes = require("./userRoutes");
const truckRoutes = require("./truckRoutes");

router.use("/users", userRoutes);
router.use("/foodtrucks", truckRoutes);

module.exports = router;