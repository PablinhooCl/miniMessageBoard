const express = require('express');
const router = express.Router();
const app = express();

 const messages = [
  {
    message: "Hi there!",
    username: "Amando",
    added: new Date()
  },
  {
    message: "Hello World!",
    username: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
 
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res) {
  res.render('form', {  })
})

router.post('/new', function(req, res){
  const msg= {
    username: req.body.username,
    message: req.body.message,
    added: new Date()
  }
  console.log(msg)
  console.log(messages)
  messages.push(msg)
  console.log(messages)

  res.redirect('/')
})
module.exports = router;


