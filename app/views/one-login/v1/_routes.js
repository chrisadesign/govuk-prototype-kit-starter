const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
  // Remove service name
  res.locals['serviceName'] = ''

  next()
})

router.post('/enter-email', function (req, res) {
  res.redirect('enter-password');
})

router.post('/enter-password', function (req, res) {
  res.redirect('check-phone');
})

router.post('/check-phone', function (req, res) {
  res.redirect('return');
})






// Add your routes above the module.exports line
module.exports = router