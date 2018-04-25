const router = require('express').Router()
const Article = require('../models/article.model')

router.get('/list', function(req, res) {
  Article.find()
  .then(function(response) {
    res.status(200).json({
      message: 'List artikel berhasil didapatkan',
      data: response
    })
  })
  .catch(function(err) {
    res.status(500).json({
      message: 'Internal server error utk akses list'
    })
  })
})

router.get('/detailarticle/:id', function(req, res) {
  Article.findById({
    _id: req.params.id
  },function(err, response) {
    if(!err){
      res.status(200).json({
        message: '',
        data: response
      })
    } else {
      res.status(500).json({
        message: 'Data internal error cuy'
      })
    }
  })
})

router.post('/create', function(req, res) {
  let newArticle = new Article({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url
    })
  
    newArticle.save(function(err, response) {
      console.log(response)
      if(!err) {
        res.status(200).json({
          message: 'List article berhasil ditampilkan',
          data: response
        })
      } else {
        res.status(500).json({
          message: 'Internal server error'
        })
      }
    })
})

router.put('/update/:id', function(req, res) {
  Article.findByIdAndUpdate({
    _id: req.params.id
  },{
    title: req.body.title,
    description: req.body.description,
    updatedAt: new Date()
  }, function(err, response) {
    if(!err) {
      res.status(200).json({
        message: 'Data berhasil diupdate',
        data: response
      })
    } else {
      res.status(500).json({
        message: 'Internal server error cuy'
      })
    }
  })
})

router.delete('/delete/:id', function(req, res) {
  Article.findByIdAndRemove({
    _id: req.params.id
  }, function(err, response) {
    if(!err) {
      res.status(200).json({
        message: 'Data berhasil dihapus',
        data: response
      })
    } else {
      res.status(500).json({
        message: 'Internal server error cuy pas delete'
      })
    }
  })
  // res.status(200).json({})
})

module.exports = router