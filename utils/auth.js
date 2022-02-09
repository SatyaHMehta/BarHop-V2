const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/login')
    } else {
        next()
    }
}

// need more authentication helpers #############
// for example if a user creates an account prior to being 21 then when they come back
//check to see if user.age >= 21
module.exports = withAuth