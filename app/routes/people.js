var express = require('express');
var router = express.Router();
var data = require('../data/people.json');

router.get('/people', function(req, res) {
// var ppl = '';
// var data = res.app.get('data');
// data.people.forEach(function (item) {
// ppl += `
// <img src="/images/${item.first_name}.jpg" alt="${item.first_name}">
// <h3>${item.first_name} ${item.last_name}</h3>
// <p>${item.email}</p>
//`
// });
// res.send(`
//   ${ppl}
// <script src="/reload/reload.js"></script>
// `);
    var data = req.app.get('data');
    var gallery = req.app.get('gallery');
  res.render('peoples', { 
  "welcomeMsg": "Welcome",
  "peoples": data.people,
  "images": gallery.images
});
});

router.get('/people/:peopleId', function(req, res) {
    var data = req.app.get('data');
    var item = data.people[req.params.peopleId];
    var gallery = req.app.get('gallery');
    res.render('peopleDetail', { 
    "welcomeMsg": "Welcome",
    "people": item,
    "images": gallery.images
  });
   // res.send(`
   // <img src = "/images/${item.first_name}.jpg" alt="${item.first_name}">
   // <h3>${item.first_name}</h3>
   // <h3>${item.last_name}</h3>
   // <p>${item.email}</p>   
   // <script src="/reload/reload.js"></script>
   // `);
})
module.exports = router;