const router = require("express").Router();


const userRoutes = require("./userRoutes.js");
const blogRoutes = require("./blog.js")

router.use("/users", userRoutes);
router.use("/blog", blogRoutes)

module.exports = router;
