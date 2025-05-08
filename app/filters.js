const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter


addFilter('cleanArray', (array) => {
	return array.filter(item => {
		return (item && (item !==""))
	})
})

addFilter('push', (array, item) => {
	array.push(item)
	return array
})

addFilter('placeholder', function (content) {
	return '<span class="placeholder">' + content + '</span>'
}, { renderAsHtml: true })