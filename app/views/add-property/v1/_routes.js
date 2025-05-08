const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'Register a short term let'

  next()
})



router.post('/address', function (req, res) {
  res.redirect('address--select');
})

router.post('/address--*', function (req, res) {
  res.redirect('accomodation-type');
})

router.post('/accomodation-type', (req, res) => {
  if (req.session.data['accomodation-type'] == 'Single room') {
    res.redirect('guests');
  } else {
    res.redirect('bedrooms');
  }
})

router.post('/bedrooms', (req, res) => {
  res.redirect('guests');
})

router.post('/guests', (req, res) => {
  res.redirect('check-answers');
})








// Add your routes above the module.exports line
module.exports = router