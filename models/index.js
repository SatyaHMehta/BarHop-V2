const User = require('./user')
const blogPost = require('./blogPost')

// User.hasMany(blogPost, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })


// blogPost.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// })

module.exports = {User, blogPost}