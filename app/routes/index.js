var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  //  res.send(`
  //  <h1>Welcome to my server</h1>
  //  <script scr="/reload/reload.js"></script>`);

var gallery = req.app.get('gallery');
res.render('index',{ 
  "welcomeMsg": "Welcome",
  "images": gallery.images
});
});
module.exports = router;