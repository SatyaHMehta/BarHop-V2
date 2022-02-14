// const sequelize = require('../config/connection');
// const { User, blogPost} = require('../models');

// const userData = require('../models/user');
// const blogData = require('../models/blogPost');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const post of blogData) {
//     await blogPost.create({
//       ...post,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
