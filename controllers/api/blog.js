const router = require("express").Router();
const Blog = require("../../models/blogPost");

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
