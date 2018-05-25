const router = require('express').Router()
const User = require('../models/user.model')
const controller = require('../controllers/c_user')

router.post('/login', controller.signIn) //function(req, res) {
  // User.findOne({
  //   email: req.body.email,
  //   password: req.body.password
  // }, function(err, response) {
  //   if(!err) {
  //     res.status(200).json({
  //       message: 'Anda berhasil login',
  //       data: response
  //     })
  //   } else {
  //     res.status(500).json({
  //       message: 'Gagal Login'
  //     })
  //   }
  // })
// })

router.post('/register', function(req, res) {
  let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })

  newUser.save(function(err, response) {
    if(!err) {
      res.status(200).json({
        message: 'ANda berhasil mendaftar',
        data: response
      })
    } else {
      res.status(500).json({
        message: 'Internal server error cuy'
      })
    }
  })
})

module.exports = router