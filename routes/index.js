var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.use(require('./viewpoint'));
router.use(require('./projects'));
router.use(require('./about'));
router.use(require('./news'));

module.exports = router;
