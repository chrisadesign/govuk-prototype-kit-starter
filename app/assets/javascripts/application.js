//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {


  // Upgrade any select with `.js-autocomplete` class
  let autocompletes = document.querySelectorAll('.js-autocomplete')

  autocompletes.forEach(autocomplete => {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: autocomplete.getAttribute('data-default-value'),
      selectElement: autocomplete
    })
  })


})
