var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/view-products', { admin: true })
});
router.get('add-product', function (req, res) {
  res.render('/admin/add-product')
})
router.post('/add-product', (req, res) => {
  console.log(req.body)
  console.log(req.files.Image)
})

module.exports = router;
