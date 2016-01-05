var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.use(require('./viewpoint'));
router.use(require('./projects'));
router.use(require('./about'));

module.exports = router;
