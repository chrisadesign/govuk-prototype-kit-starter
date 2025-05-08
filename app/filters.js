const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter


addFilter('cleanArray', (array) => {
	return array.filter(item => {
		return (item && (item !==""))
	})
})