const router = require("express").Router();
const User = require("../../models/user");

router.post("/", async (req, res) => {
  console.log(req.body)
  try {
    const userData = await User.create(req.body);
    // console.log(req.body)
    console.log(userData)
    console.log('we did it')
    res.status(200).json(userData);
    res.render('search')
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
