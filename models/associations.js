const User = require('./user')
const blogPost = require('blogPost')

User.hasMany(blogPost, {

})


blogPost.belongsTo(User, {

})

module.exports = {User, blogPost}