const router = require('express').Router()
// const { User, blogPost} = require('../models');
const withAuth = require('../utils/auth');
const blogPost = require('../models/blogPost');

router.get('/', async (req, res) => {
  try {
    // if (req.session.logged_in) {
    //   res.redirect('/p');
    //   return;
    // }
  
    // Get all projects and JOIN with user data
    // const blogData = await blogPost.findAll({
    //   include: [
    //     {
    //       model: Post,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // Serialize data so the template can read it
    // const blogPost = blogData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('landing');
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/homepage', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err){
    res.status(500).json(err);
  }
})

// router.get('/blogPost/:id', async (req, res) => {
//   try {
//     const blogData = await blogPost.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const blogPost = blogData.get({ plain: true });

//     res.render('blogPost', {
//       ...blogPost,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: blogPost }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/search', (req, res) => {

  res.render('search');
});

// router.get('/search', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
 
//   res.render('search');
// });

// router.get('/post', async (req, res) => {
//   res.render('post')
// })

router.get('/review', async (req, res) => {
  res.render('review')
})


// router.get('', async(req, res) => {

// })



router.get('/post', async (req, res) => {
  // res.render('post', {blogPost})
  // console.log('hello')
  try {
  const blogs = await blogPost.findAll({
    // include: [User]
  })
  console.log(blogs)

  const blog = blogs.map((blog) => blog.get({ plain: true }));
  // }).then((blogPost) => res.json(blogPost))
  res.render('post', { blog })
  } catch (err) {
    res.status(500).json(err)
  }
});




module.exports = router;
