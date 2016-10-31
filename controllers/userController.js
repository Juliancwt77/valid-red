var User = require('../models/user')

function getSignup (req, res) {
  res.render('home', {
    messages: req.flash('errorMessage')
  })
}

function postSignup (req, res) {
  var newUser = new User({
    email: req.body.user.email,
    username: req.body.user.username,
    password: req.body.user.password
  })

  newUser.save(function (err, newUser) {
    // handle error
    if (err) {
      var errorArray = []
      for (var key in err.errors) {
        errorArray.push(err.errors[key].message)
      }

      req.flash('errorMessage', errorArray)
      return res.redirect('/')
    }

    res.send('user created')
  })
}

module.exports = {
  getSignup: getSignup,
  postSignup: postSignup
}
