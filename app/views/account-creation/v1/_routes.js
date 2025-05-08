const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'Register a short term let'

  next()
})


router.post('/account-type', (req, res) => {
  if (req.session.data['account-type'] == 'Agent') {
    res.redirect('agent/name');
  } else {
    res.redirect('individual/name');
  }
})

router.post('/individual/name', function (req, res) {
  res.redirect('check-answers');
})

router.post('/agent/name', function (req, res) {
  res.redirect('company');
})

router.post('/agent/company', function (req, res) {
  res.redirect('check-answers');
})

router.post('*check-answers', function (req, res) {
  res.redirect('../dashboard');
})






// Add your routes above the module.exports line
module.exports = router