const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
  res.locals['serviceName'] = ''

  next()
})

router.post('/details', function (req, res) {
  res.redirect('confirmation');
})






// Add your routes above the module.exports line
module.exports = router